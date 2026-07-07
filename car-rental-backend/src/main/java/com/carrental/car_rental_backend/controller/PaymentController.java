package com.carrental.car_rental_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrental.car_rental_backend.entity.Payment;
import com.carrental.car_rental_backend.entity.enums.PaymentMethod;
import com.carrental.car_rental_backend.service.PaymentService;

@RestController
@RequestMapping("/bookings")
public class PaymentController {
    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/{bookingId}/pay")
    public ResponseEntity<Payment> makePayment(@PathVariable int bookingId, @RequestParam PaymentMethod paymentMethod) {
        return ResponseEntity.ok(paymentService.makePayment(bookingId, paymentMethod));
    }
}
