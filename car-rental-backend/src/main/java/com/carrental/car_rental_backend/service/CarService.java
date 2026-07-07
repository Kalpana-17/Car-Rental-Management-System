package com.carrental.car_rental_backend.service;

import java.util.List;

import com.carrental.car_rental_backend.entity.Car;

public interface CarService {
    List<Car> getAllCars();

    Car getCarById(int id);

    Car saveCar(Car car);

    Car updateCar(int id, Car car);

    void deleteCar(int id);
}
