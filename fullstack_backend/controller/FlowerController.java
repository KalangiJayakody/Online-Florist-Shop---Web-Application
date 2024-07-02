package com.kalaweb.fullstack_backend.controller;

import com.kalaweb.fullstack_backend.model.Flower;
import com.kalaweb.fullstack_backend.repository.FlowerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FlowerController {

    @Autowired
    private FlowerRepository flowerRepository;

    @PostMapping("/flower")
    Flower addFlower(@RequestBody Flower newFlower){
        return flowerRepository.save(newFlower);
    }

    @GetMapping("/flowers")
    List<Flower> getAllFlowers(){
        return flowerRepository.findAll();
    }
}
