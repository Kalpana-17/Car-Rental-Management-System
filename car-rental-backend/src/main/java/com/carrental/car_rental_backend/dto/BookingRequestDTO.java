package com.carrental.car_rental_backend.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookingRequestDTO {
    private int userId;
    private int carId;
    private LocalDate pickupDate;
    private LocalDate returnDate;
}
