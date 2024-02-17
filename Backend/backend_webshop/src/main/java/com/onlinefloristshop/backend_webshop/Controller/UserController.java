package com.onlinefloristshop.backend_webshop.Controller;
import ch.qos.logback.classic.util.LogbackMDCAdapter;
import com.onlinefloristshop.backend_webshop.Entity.User;
import com.onlinefloristshop.backend_webshop.repository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.IllegalFormatCodePointException;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user ){
        User chageUser = userRepository.findById(user.getId());
        chageUser.setUserName(user.getUserName());
        chageUser.setUserPassword(user.getUserPassword());
        chageUser.setUserFirstName(user.getUserFirstName());
        chageUser.setUserLastName(user.getUserLastName());
        userRepository.save(chageUser);

        return  new ResponseEntity<>(chageUser,HttpStatus.OK);

    }


    @PostMapping("/registerNewUser")
    public void registerNewUser(@RequestBody User user){
        userRepository.save(user);
    }


    @GetMapping("/user/{id}")
    public ResponseEntity<User> getOneUser(@PathVariable Integer id)
    {
        return  new ResponseEntity<>(userRepository.findById(id),HttpStatus.OK);
    }


    //wrong
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {

        User findUser = userRepository.findByUserName(user.getUserName());
        if(findUser!=null){

            if(user.getUserPassword().equals(findUser.getUserPassword())){
                return new ResponseEntity<>(findUser,HttpStatus.OK);
            }else {
                return new ResponseEntity<>(null,HttpStatus.UNAUTHORIZED);
            }
        }

        return new ResponseEntity<>(null,HttpStatus.ALREADY_REPORTED);
    }
/*
    @DeleteMapping("/delete/{userName}")
    @Transactional
    public ResponseEntity<String> deleteUser(@PathVariable String userName){
        userRepository.deleteByUserName(userName);
        return new ResponseEntity<>("deleted", HttpStatus.OK);
    }*/

    @DeleteMapping("/delete/{userName}")
    @Transactional
    public ResponseEntity<String> deleteUser(@PathVariable String userName) {
        userRepository.deleteByUserName(userName);
        return new ResponseEntity<>("deleted", HttpStatus.OK);
    }



}
