package com.carrental.car_rental_backend.entity;

import java.time.LocalDateTime;
import java.time.Year;
import com.carrental.car_rental_backend.entity.enums.CarStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cars")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "variant_id")
    private Variant variant;

    @Column(name = "registration_number")
    private String registrationNumber;

    @Column(name = "model_year")
    private Year modelYear;

    private String color;

    @Column(name = "price_per_day")
    private double pricePerDay;

    @Column(name = "image_url")
    private String imageURL;

    @Enumerated(EnumType.STRING)
    // @Column(name = "car_status")
    private CarStatus carStatus;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
