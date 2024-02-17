package com.onlinefloristshop.backend_webshop.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="floweritem")
public class FlowerItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Integer itemId;
    @Column(name = "item_name")
    private String itemName;
    @Column(name = "item_price")
    private Integer itemPrice;
    @Column(name = "item_description")
    private String itemDescription;

    public FlowerItem(Integer itemId, String itemName, Integer itemPrice, String itemDescription) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemDescription = itemDescription;
    }

    public FlowerItem( String itemName, Integer itemPrice, String itemDescription) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemDescription = itemDescription;
    }


    public FlowerItem() {

    }
}
