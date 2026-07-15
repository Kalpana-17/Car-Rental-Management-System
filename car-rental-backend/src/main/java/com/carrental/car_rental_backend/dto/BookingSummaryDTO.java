package com.carrental.car_rental_backend.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookingSummaryDTO {
    private String companyName;
    private String variantName;
    private LocalDate pickupDate;
    private LocalDate returnDate;
    private long totalDays;
    private double pricePerDay;
    private double totalAmount;
}
