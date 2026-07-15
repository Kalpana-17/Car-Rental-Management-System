package com.carrental.car_rental_backend.service.impl;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;

import com.carrental.car_rental_backend.dto.BookingRequestDTO;
import com.carrental.car_rental_backend.dto.BookingSummaryDTO;
import com.carrental.car_rental_backend.entity.Booking;
import com.carrental.car_rental_backend.entity.Car;
import com.carrental.car_rental_backend.entity.User;
import com.carrental.car_rental_backend.entity.enums.BookingStatus;
import com.carrental.car_rental_backend.entity.enums.CarStatus;
import com.carrental.car_rental_backend.entity.enums.PaymentStatus;
import com.carrental.car_rental_backend.repository.BookingRepository;
import com.carrental.car_rental_backend.repository.CarRepository;
import com.carrental.car_rental_backend.repository.UserRepository;
import com.carrental.car_rental_backend.service.BookingService;

import jakarta.transaction.Transactional;

@Service
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;
    private final CarRepository carRepository;

    public BookingServiceImpl(
            BookingRepository bookingRepository,
            UserRepository userRepository,
            CarRepository carRepository) {

        this.bookingRepository = bookingRepository;
        this.userRepository = userRepository;
        this.carRepository = carRepository;
    }

    @Transactional
    @Override
    public Booking bookCar(BookingRequestDTO request) {
        User user = userRepository.findById(request.getUserId())
        .orElseThrow(() -> new RuntimeException("User not found"));

        Car car = carRepository.findById(request.getCarId())
        .orElseThrow(() -> new RuntimeException("Car not found"));

        if (car.getCarStatus() != CarStatus.AVAILABLE) {
            throw new RuntimeException("Car is not available");
        }

        if (request.getReturnDate().isBefore(request.getPickupDate())) {
            throw new RuntimeException("Return date cannot be before pickup date");
        }

        long days = ChronoUnit.DAYS.between( request.getPickupDate(), request.getReturnDate());
        if (days <= 0) {
            throw new RuntimeException("Booking should be for at least one day");
        }

        double totalAmount = days * car.getPricePerDay();

        Booking booking = new Booking();
        booking.setUser(user);
        booking.setCar(car);

        booking.setPickupDate(request.getPickupDate());
        booking.setReturnDate(request.getReturnDate());

        booking.setTotalAmount(totalAmount);

        booking.setBookingStatus(BookingStatus.CONFIRMED);
        booking.setPaymentStatus(PaymentStatus.PENDING);

        booking.setCreatedAt(LocalDateTime.now());

        car.setCarStatus(CarStatus.BOOKED);

        carRepository.save(car);

        return bookingRepository.save(booking);
    }

    public BookingSummaryDTO getBookingSummaryDTO(BookingRequestDTO request) {
        User user = userRepository.findById(request.getUserId())
                    .orElseThrow(() -> new RuntimeException("User not found"));
        Car car = carRepository.findById(request.getCarId())
                  .orElseThrow(() -> new RuntimeException("Car not found"));
        
        if (car.getCarStatus() != CarStatus.AVAILABLE) {
            throw new RuntimeException("Car is not available");
        }
        if(request.getReturnDate().isBefore(request.getPickupDate())) {
            throw new RuntimeException("Return date cannot be before pickup date");
        }

        long days = ChronoUnit.DAYS.between(
            request.getPickupDate(), request.getReturnDate());
        
        if(days <= 0) {
            throw new RuntimeException("Booking should be for least one day");
        }

        double totalAmount = days * car.getPricePerDay();

        BookingSummaryDTO summary = new BookingSummaryDTO();

        summary.setCompanyName(
                car.getVariant().getCompany().getCompanyName());

        summary.setVariantName(
                car.getVariant().getVariantName());

        summary.setPickupDate(request.getPickupDate());

        summary.setReturnDate(request.getReturnDate());

        summary.setTotalDays(days);

        summary.setPricePerDay(car.getPricePerDay());

        summary.setTotalAmount(totalAmount);

        return summary;
    }

    @Override
    public List<Booking> getBookingsByUserId(int userId) {
        userRepository.findById(userId)
                        .orElseThrow(() -> new RuntimeException("User not found"));
        
        return bookingRepository.findByUserId(userId);
    }
}
