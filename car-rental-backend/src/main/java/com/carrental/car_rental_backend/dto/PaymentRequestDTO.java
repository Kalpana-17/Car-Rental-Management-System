package com.carrental.car_rental_backend.dto;

import com.carrental.car_rental_backend.entity.enums.PaymentMethod;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentRequestDTO {
    private int bookingId;
    private PaymentMethod paymentMethod;
    private String idempotencyKey;
}
