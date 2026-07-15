package com.carrental.car_rental_backend.service;

import java.util.List;

import com.carrental.car_rental_backend.dto.BookingRequestDTO;
import com.carrental.car_rental_backend.dto.BookingSummaryDTO;
import com.carrental.car_rental_backend.entity.Booking;

public interface BookingService {
    Booking bookCar(BookingRequestDTO request);
    BookingSummaryDTO getBookingSummaryDTO(BookingRequestDTO request);
    List<Booking> getBookingsByUserId(int userId);
}
