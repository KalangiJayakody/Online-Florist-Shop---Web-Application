package com.kalaweb.fullstack_backend.controller;

import com.kalaweb.fullstack_backend.model.Flower;
import com.kalaweb.fullstack_backend.model.User;
import com.kalaweb.fullstack_backend.repository.FlowerRepository;
import com.kalaweb.fullstack_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.AbstractCollection;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FlowerRepository flowerRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PutMapping("/user")
    User editUser(@RequestBody User editUser){
        Optional<User> userOptional = userRepository.findByEmail(editUser.getEmail());

        if(userOptional.isPresent()){
            User existingUser = userOptional.get();
            existingUser.setUsername(editUser.getUsername());
            existingUser.setName(editUser.getName());
            existingUser.setPassword(editUser.getPassword());

            return userRepository.save(existingUser);
        }
        else{
            return null;
        }


    }

    @PostMapping("/login")
    String Login(@RequestBody User loginUser){

        Optional<User> userOptional = userRepository.findByEmail(loginUser.getEmail());

        if(userOptional.isPresent()){
            User user = userOptional.get();

            if(user.getPassword().equals(loginUser.getPassword())){
                return "Login Successful";
            }
            else{
                return "Password error!";
            }
        }
        else{
            return "user not found";
        }

    }

    public void addFlowertoUser(Long userid, Long flowerid){
        User user =userRepository.findById(userid).orElseThrow(()->new RuntimeException("User not found"));

        Flower flower =flowerRepository.findById(flowerid).orElseThrow(()->new RuntimeException("flower not found"));

        user.getCartflowers().add(flower);
        flower.getUsers().add(user);

        userRepository.save(user);
        flowerRepository.save(flower);

    }

    @PostMapping("/{userId}/flowers/{flowerId}")
    public ResponseEntity<String> AddFlowerTOUser(@PathVariable Long userId, @PathVariable Long flowerId){
        addFlowertoUser(userId,flowerId);
        return ResponseEntity.ok("flower Added to user!");
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId){
        try{
            if(userRepository.existsById(userId)){
                userRepository.deleteById(userId);
                return ResponseEntity.ok("user deleted successfully");
            }
            else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("user not found!");

            }
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting user: " + e.getMessage());

        }
    }
}
