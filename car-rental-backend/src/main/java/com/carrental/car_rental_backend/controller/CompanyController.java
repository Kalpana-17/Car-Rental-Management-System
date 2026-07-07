package com.carrental.car_rental_backend.controller;

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

import com.carrental.car_rental_backend.service.CompanyService;
import com.carrental.car_rental_backend.entity.Company;
import java.util.List;

@RestController
public class CompanyController {
    private CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @RequestMapping("/companies")
    public ResponseEntity<List<Company>> getAllUsers() {
        return ResponseEntity.ok(companyService.getAllCompanies());
    }

    @GetMapping("/companies/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable int id) {
        return ResponseEntity.ok(companyService.getCompanyById(id));
    }

    @PostMapping("/companies")
    public ResponseEntity<Company> saveUser(@RequestBody Company company) {
        // System.out.println(company);
        Company savedCompany = companyService.saveCompany(company);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCompany);
    }

    @PutMapping("/companies/{id}")
    public ResponseEntity<Company> updateUser(@PathVariable int id, @RequestBody Company company) {
        return ResponseEntity.ok(companyService.updateCompany(id, company));
    }

    @DeleteMapping("/companies/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {
        companyService.deleteCompany(id);
        return ResponseEntity.ok("Company Deleted Successfully");
    }
}
