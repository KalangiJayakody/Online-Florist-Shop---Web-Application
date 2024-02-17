package com.onlinefloristshop.backend_webshop.repository;

import com.onlinefloristshop.backend_webshop.Entity.FlowerItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlowerItemRepository extends JpaRepository<FlowerItem,Integer> {
    FlowerItem save(FlowerItem flowerItem);

}
