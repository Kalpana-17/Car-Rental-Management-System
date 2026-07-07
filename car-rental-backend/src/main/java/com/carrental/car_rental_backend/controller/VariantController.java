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
import com.carrental.car_rental_backend.entity.Variant;
import com.carrental.car_rental_backend.service.VariantService;

@RestController
public class VariantController {
    private VariantService variantService;

    public VariantController(VariantService variantService) {
        this.variantService = variantService;
    }

    @RequestMapping("/variants")
    public ResponseEntity<List<Variant>> getAlVariants() {
        return ResponseEntity.ok(variantService.getAllVariants());
    }

    @GetMapping("/variants/{id}")
    public ResponseEntity<Variant> geVariantById(@PathVariable int id) {
        return ResponseEntity.ok(variantService.getVariantById(id));
    }

    @PostMapping("/variants")
    public ResponseEntity<Variant> saveVariant(@RequestBody Variant variant) {
        // System.out.println(variant);
        Variant savedVariant = variantService.saveVariant(variant);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedVariant);
    }

    @PutMapping("/variants/{id}")
    public ResponseEntity<Variant> updateVariant(@PathVariable int id, @RequestBody Variant variant) {
        return ResponseEntity.ok(variantService.updateVariant(id, variant));
    }

    @DeleteMapping("/variants/{id}")
    public ResponseEntity<String> deleteVariant(@PathVariable int id) {
        variantService.deleteVariant(id);
        return ResponseEntity.ok("Variant Deleted Successfully");
    }
}
