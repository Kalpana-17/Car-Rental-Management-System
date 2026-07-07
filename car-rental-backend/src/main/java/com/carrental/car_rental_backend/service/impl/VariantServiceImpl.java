package com.carrental.car_rental_backend.service.impl;

import com.carrental.car_rental_backend.repository.VariantRepository;
import com.carrental.car_rental_backend.service.VariantService;

import java.util.List;

import org.springframework.stereotype.Service;
import com.carrental.car_rental_backend.entity.Variant;

@Service
public class VariantServiceImpl implements VariantService {
    private final VariantRepository variantRepository;

    public VariantServiceImpl(VariantRepository variantRepository) {
        this.variantRepository = variantRepository;
    }

    @Override
    public List<Variant> getAllVariants() {
        return variantRepository.findAll();
    }

    @Override
    public Variant getVariantById(int id) {
        return variantRepository.findById(id).orElse(null);
    }

    @Override
    public Variant saveVariant(Variant variant) {
        return variantRepository.save(variant);
    }

    @Override
    public Variant updateVariant(int id, Variant variant) {
        Variant existingVariant = variantRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Variant not found"));

        existingVariant.setCompany(variant.getCompany());
        existingVariant.setVariantName(variant.getVariantName());
        existingVariant.setFuelType(variant.getFuelType());
        existingVariant.setSeats(variant.getSeats());

        return variantRepository.save(existingVariant);
    }

    @Override
    public void deleteVariant(int id) {
        Variant existingVariant = variantRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Variant not found"));

        variantRepository.delete(existingVariant);
    }
}
