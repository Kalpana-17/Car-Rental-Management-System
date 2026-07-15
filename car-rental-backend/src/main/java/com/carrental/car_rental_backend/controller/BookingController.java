package com.carrental.car_rental_backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

// import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrental.car_rental_backend.dto.BookingRequestDTO;
import com.carrental.car_rental_backend.dto.BookingSummaryDTO;
import com.carrental.car_rental_backend.entity.Booking;
import com.carrental.car_rental_backend.service.BookingService;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public ResponseEntity<Booking> bookCar(@RequestBody BookingRequestDTO request) {
        return ResponseEntity.ok(bookingService.bookCar(request));
    }

    @PostMapping("/summary")
    public ResponseEntity<BookingSummaryDTO> getBookingSummary(@RequestBody BookingRequestDTO request) {
        return ResponseEntity.ok(bookingService.getBookingSummaryDTO(request));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Booking>> getBookingsByUserId(@PathVariable int userId) {
        return ResponseEntity.ok(bookingService.getBookingsByUserId(userId));
    }
}
