package com.onlinefloristshop.backend_webshop.Entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.Set;



@Data
@Entity
@Table(name="User")
public class User {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="userName")
    private String userName;

    @Column(name="userFirstName")
    private String userFirstName;

    @Column(name="userLastName")
    private String userLastName;

    @Column(name="userPassword")
    private String userPassword;

    public User(Integer id, String userName, String userFirstName, String userLastName, String userPassword) {
        this.id = id;
        this.userName = userName;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userPassword = userPassword;
    }

    public User( String userName, String userFirstName, String userLastName, String userPassword) {

        this.userName = userName;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userPassword = userPassword;
    }

    public User() {

    }
/*
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",joinColumns = {
            @JoinColumn(name = "USER_ID")
    },
            inverseJoinColumns = {
            @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<Role> role;*/


/*
    public Set<Role> getRole() {
        return role;
    }

    public void setRole(Set<Role> role) {
        this.role = role;
    }*/

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserName() {
        return userName;
    }


    public String getUserPassword() {
        return userPassword;
    }
}
