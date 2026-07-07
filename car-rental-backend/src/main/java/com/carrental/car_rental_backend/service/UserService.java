package com.carrental.car_rental_backend.service;

import java.util.List;
import com.carrental.car_rental_backend.entity.User;

public interface UserService {

    List<User> getAllUsers();

    User getUserById(int id);
        
    User saveUser(User user);

    User updateUser(int id, User user);

    void deleteUser(int id);
}