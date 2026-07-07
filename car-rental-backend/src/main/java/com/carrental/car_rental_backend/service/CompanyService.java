package com.carrental.car_rental_backend.service;

import java.util.List;

import com.carrental.car_rental_backend.entity.Company;

public interface CompanyService {
    List<Company> getAllCompanies();

    Company getCompanyById(int id);

    Company saveCompany(Company company);

    Company updateCompany(int id, Company company);

    void deleteCompany(int id);
}
