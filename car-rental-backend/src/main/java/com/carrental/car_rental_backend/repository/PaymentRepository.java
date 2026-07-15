package com.carrental.car_rental_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carrental.car_rental_backend.entity.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    Optional<Payment> findByBookingId(int bookingId);
    Optional<Payment> findByIdempotencyKey(String idempotencyKey);
}