package com.carrental.car_rental_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carrental.car_rental_backend.entity.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}