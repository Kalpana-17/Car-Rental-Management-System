package com.carrental.car_rental_backend.service;

import com.carrental.car_rental_backend.dto.PaymentRequestDTO;
import com.carrental.car_rental_backend.dto.PaymentResponseDTO;

public interface PaymentService {
    PaymentResponseDTO makePayment(PaymentRequestDTO request);
}
