package com.carrental.car_rental_backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistrationDTO {
    private String fullName;
    private String email;
    private String password;
    private String phone;
    private String licenseNumber;
}
