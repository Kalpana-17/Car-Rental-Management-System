package com.carrental.car_rental_backend.service;

import com.carrental.car_rental_backend.entity.Payment;
import com.carrental.car_rental_backend.entity.enums.PaymentMethod;

public interface PaymentService {
    Payment makePayment(int bookingId, PaymentMethod paymentMethod);
}
