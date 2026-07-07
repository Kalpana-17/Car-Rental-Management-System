package com.carrental.car_rental_backend.exception;

public class PaymentException extends RuntimeException {
    public PaymentException(String message) {
        super(message); 
    }
}
