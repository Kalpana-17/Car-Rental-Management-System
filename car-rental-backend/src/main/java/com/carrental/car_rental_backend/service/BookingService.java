package com.carrental.car_rental_backend.service;

import com.carrental.car_rental_backend.dto.BookingRequestDTO;
import com.carrental.car_rental_backend.entity.Booking;

public interface BookingService {
    Booking bookCar(BookingRequestDTO request);
}
