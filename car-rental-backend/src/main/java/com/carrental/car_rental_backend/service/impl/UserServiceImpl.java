package com.carrental.car_rental_backend.service.impl;

import com.carrental.car_rental_backend.repository.UserRepository;
import com.carrental.car_rental_backend.service.UserService;

import java.util.List;

import org.springframework.stereotype.Service;

import com.carrental.car_rental_backend.dto.UserRegistrationDTO;
import com.carrental.car_rental_backend.entity.User;
import com.carrental.car_rental_backend.entity.enums.Role;
import com.carrental.car_rental_backend.exception.ResourceNotFoundException;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(int id, User user) {
        User existingUser = userRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        existingUser.setFullName(user.getFullName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());
        existingUser.setPhone(user.getPhone());
        existingUser.setLicenseNumber(user.getLicenseNumber());
        existingUser.setRole(user.getRole());

        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUser(int id) {
        User existingUser = userRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        userRepository.delete(existingUser);
    }

    @Override
    public User registerUser(UserRegistrationDTO request) {
        if(userRepository.findByEmail(request.getEmail()).isPresent())
            throw new RuntimeException("Email already registered");

        User newUser = new User();

        newUser.setFullName(request.getFullName());
        newUser.setEmail(request.getEmail());
        newUser.setPassword(request.getPassword());
        newUser.setPhone(request.getPhone());
        newUser.setLicenseNumber(request.getLicenseNumber());
        newUser.setRole(Role.CUSTOMER);

        return userRepository.save(newUser);
    }

    @Override
    public User loginUser(String email, String password) {
        User user = userRepository.findByEmail(email)
                                .orElseThrow(() -> new ResourceNotFoundException("Invalid Email!"));
        if(!user.getPassword().equals(password))
            throw new ResourceNotFoundException("Invalid Password!");

        return user;
    }
}
