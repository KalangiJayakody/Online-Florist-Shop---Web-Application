package com.onlinefloristshop.backend_webshop.Controller;

import com.onlinefloristshop.backend_webshop.Entity.FlowerItem;
import com.onlinefloristshop.backend_webshop.Entity.User;
import com.onlinefloristshop.backend_webshop.repository.FlowerItemRepository;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FlowerItemController {
    @Autowired
    private FlowerItemRepository flowerItemRepository;
    @Autowired
    private EntityManager entityManager;

    @PostMapping("/addNewItem")
    public void addNewItem(@RequestBody FlowerItem flowerItem){
        flowerItemRepository.save(flowerItem);
    }


}
