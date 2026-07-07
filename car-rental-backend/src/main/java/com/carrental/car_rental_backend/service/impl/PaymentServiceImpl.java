package com.carrental.car_rental_backend.service.impl;

import java.util.UUID;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.carrental.car_rental_backend.entity.Booking;
import com.carrental.car_rental_backend.entity.Payment;
import com.carrental.car_rental_backend.entity.enums.PaymentMethod;
import com.carrental.car_rental_backend.entity.enums.PaymentStatus;
import com.carrental.car_rental_backend.exception.BookingException;
import com.carrental.car_rental_backend.exception.PaymentException;
import com.carrental.car_rental_backend.repository.BookingRepository;
import com.carrental.car_rental_backend.repository.PaymentRepository;
import com.carrental.car_rental_backend.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService{
    private final PaymentRepository paymentRepository;
    private final BookingRepository bookingRepository;

    public PaymentServiceImpl(PaymentRepository paymentRepository, BookingRepository bookingRepository) {
        this.paymentRepository = paymentRepository;
        this.bookingRepository = bookingRepository;
    }

    @Override
    public Payment makePayment(int bookingId, PaymentMethod paymentMethod) {
        Booking booking = bookingRepository.findById(bookingId)
        .orElseThrow(() -> new BookingException("Booking not found"));

        if (booking.getPaymentStatus() == PaymentStatus.PAID) {
            throw new PaymentException("Payment already completed");
        }

        Payment payment = new Payment();

        payment.setBooking(booking);
        payment.setAmount(booking.getTotalAmount());
        payment.setPaymentMethod(paymentMethod);
        payment.setPaymentStatus(PaymentStatus.PAID);
        payment.setTransactionId(UUID.randomUUID().toString());
        payment.setPaymentDate(LocalDateTime.now());

        booking.setPaymentStatus(PaymentStatus.PAID);
        bookingRepository.save(booking);

        return paymentRepository.save(payment);
    }
}
