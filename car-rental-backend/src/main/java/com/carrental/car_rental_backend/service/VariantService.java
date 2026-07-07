package com.carrental.car_rental_backend.service;

import java.util.List;
import com.carrental.car_rental_backend.entity.Variant;

public interface VariantService {
    List<Variant> getAllVariants();

    Variant getVariantById(int id);
        
    Variant saveVariant(Variant variant);

    Variant updateVariant(int id, Variant Variant);

    void deleteVariant(int id);
}
