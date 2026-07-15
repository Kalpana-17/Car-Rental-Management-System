package com.carrental.car_rental_backend.service.impl;

import java.util.Optional;
import java.util.UUID;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.carrental.car_rental_backend.dto.PaymentRequestDTO;
import com.carrental.car_rental_backend.dto.PaymentResponseDTO;
import com.carrental.car_rental_backend.entity.Booking;
import com.carrental.car_rental_backend.entity.Payment;
import com.carrental.car_rental_backend.entity.enums.BookingStatus;
import com.carrental.car_rental_backend.entity.enums.PaymentStatus;
import com.carrental.car_rental_backend.exception.BookingException;
import com.carrental.car_rental_backend.exception.PaymentException;
import com.carrental.car_rental_backend.repository.BookingRepository;
import com.carrental.car_rental_backend.repository.PaymentRepository;
import com.carrental.car_rental_backend.service.PaymentService;

import jakarta.transaction.Transactional;

@Service
public class PaymentServiceImpl implements PaymentService{
    private final PaymentRepository paymentRepository;
    private final BookingRepository bookingRepository;

    public PaymentServiceImpl(PaymentRepository paymentRepository, BookingRepository bookingRepository) {
        this.paymentRepository = paymentRepository;
        this.bookingRepository = bookingRepository;
    }

    @Override
    @Transactional
    public PaymentResponseDTO makePayment(PaymentRequestDTO request) {
        //Idempotency Key check
        Optional<Payment> existingPayment = paymentRepository.findByIdempotencyKey(request.getIdempotencyKey());

        if(existingPayment.isPresent()) {
            Payment payment = existingPayment.get();
            PaymentResponseDTO response = new PaymentResponseDTO();

            response.setPaymentId(payment.getId());
            response.setAmount(payment.getAmount());
            response.setPaymentStatus(payment.getPaymentStatus());
            response.setMessage("Payment already processed. Returning previous respoonse");

            return response;
        }
        
        Booking booking = bookingRepository.findById(request.getBookingId())
        .orElseThrow(() -> new BookingException("Booking not found"));

        if (booking.getPaymentStatus() == PaymentStatus.PAID) {
            throw new PaymentException("Payment already completed");
        }

        Payment payment = new Payment();

        payment.setBooking(booking);
        payment.setAmount(booking.getTotalAmount());
        payment.setPaymentMethod(request.getPaymentMethod());
        payment.setTransactionId(UUID.randomUUID().toString());
        payment.setIdempotencyKey(request.getIdempotencyKey());
        payment.setPaymentStatus(PaymentStatus.PAID);
        payment.setPaymentDate(LocalDateTime.now());

        booking.setPaymentStatus(PaymentStatus.PAID);
        bookingRepository.save(booking);

        Payment savedPayment = paymentRepository.save(payment);

        PaymentResponseDTO response = new PaymentResponseDTO();

        response.setPaymentId(savedPayment.getId());
        response.setAmount(savedPayment.getAmount());
        response.setPaymentStatus(savedPayment.getPaymentStatus());
        booking.setBookingStatus(BookingStatus.ACTIVE);
        response.setMessage("Payment Successful!");

        return response;
    }
}
