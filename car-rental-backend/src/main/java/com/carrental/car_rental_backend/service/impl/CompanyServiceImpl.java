package com.carrental.car_rental_backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.carrental.car_rental_backend.entity.Company;
import com.carrental.car_rental_backend.repository.CompanyRepository;
import com.carrental.car_rental_backend.service.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository companyRepository;

    public CompanyServiceImpl(CompanyRepository companyRepository) {
        this.companyRepository=companyRepository;
    }

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Company getCompanyById(int id) {
        return companyRepository.findById(id).orElse(null);
    }

    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }

    public Company updateCompany(int id, Company company) {
        Company existingCompany = companyRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Company not found"));

        existingCompany.setCompanyName(company.getCompanyName());
        existingCompany.setLogoURL(company.getLogoURL());

        return companyRepository.save(existingCompany);
    }

    public void deleteCompany(int id) {
        Company existingCompany = companyRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Company not found"));

        companyRepository.delete(existingCompany);
    }
}
