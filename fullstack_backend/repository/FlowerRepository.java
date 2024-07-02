package com.kalaweb.fullstack_backend.repository;

import com.kalaweb.fullstack_backend.model.Flower;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlowerRepository extends JpaRepository<Flower, Long> {

}
