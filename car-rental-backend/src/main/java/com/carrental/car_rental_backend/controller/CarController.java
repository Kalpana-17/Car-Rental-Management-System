package com.carrental.car_rental_backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.carrental.car_rental_backend.entity.Car;
import com.carrental.car_rental_backend.service.CarService;

@RestController
public class CarController {
    private CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @RequestMapping("/cars")
    public ResponseEntity<List<Car>> getAllCars() {
        return ResponseEntity.ok(carService.getAllCars());
    }

    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable int id) {
        return ResponseEntity.ok(carService.getCarById(id));
    }

    @PostMapping("/cars")
    public ResponseEntity<Car> saveCar(@RequestBody Car car) {
        // System.out.println(variant);
        Car savedCar = carService.saveCar(car);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCar);
    }

    @PutMapping("/cars/{id}")
    public ResponseEntity<Car> updateVariant(@PathVariable int id, @RequestBody Car car) {
        return ResponseEntity.ok(carService.updateCar(id, car));
    }

    @DeleteMapping("/cars/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable int id) {
        carService.deleteCar(id);
        return ResponseEntity.ok("Car Deleted Successfully");
    }
}
