package com.carrental.car_rental_backend.dto;

import com.carrental.car_rental_backend.entity.enums.PaymentStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentResponseDTO {
    private int paymentId;
    private double amount;
    private PaymentStatus paymentStatus;
    private String message;
}
