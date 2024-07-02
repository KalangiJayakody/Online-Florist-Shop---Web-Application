package com.kalaweb.fullstack_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
public class Flower {
    @Id
    @GeneratedValue
    private Long flowerid;
    private String flowername;
    private String flowerdescription;

    private Double price;
    private Long quantity;

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    @ManyToMany(mappedBy = "cartflowers")
    private Set<User> users;


    public Long getFlowerid() {
        return flowerid;
    }

    public void setFlowerid(Long flowerid) {
        this.flowerid = flowerid;
    }

    public String getFlowername() {
        return flowername;
    }

    public void setFlowername(String flowername) {
        this.flowername = flowername;
    }

    public String getFlowerdescription() {
        return flowerdescription;
    }

    public void setFlowerdescription(String flowerdescription) {
        this.flowerdescription = flowerdescription;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
