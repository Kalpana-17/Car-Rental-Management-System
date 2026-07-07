package com.carrental.car_rental_backend.service.impl;

import com.carrental.car_rental_backend.entity.Car;
import com.carrental.car_rental_backend.exception.BookingException;
import com.carrental.car_rental_backend.repository.CarRepository;
import com.carrental.car_rental_backend.service.CarService;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CarServiceImpl implements CarService {
    private final CarRepository carRepository;

    public CarServiceImpl(CarRepository carRepository) {
        this.carRepository=carRepository;
    }

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car getCarById(int id) {
        return carRepository.findById(id).orElse(null);
    }

    public Car saveCar(Car car) {
        return carRepository.save(car);
    }

    public Car updateCar(int id, Car car) {
        Car existingCar = carRepository.findById(id)
        .orElseThrow(() -> new BookingException("Car is not available"));

        existingCar.setVariant(car.getVariant());
        existingCar.setModelYear(car.getModelYear());
        existingCar.setColor(car.getColor());
        existingCar.setPricePerDay(car.getPricePerDay());
        existingCar.setImageURL(car.getImageURL());
        existingCar.setCarStatus(car.getCarStatus());

        return carRepository.save(existingCar);

    }

    public void deleteCar(int id) {
        Car existingCar = carRepository.findById(id)
        .orElseThrow(() -> new BookingException("Car is not available"));

        carRepository.delete(existingCar);
    }
}
