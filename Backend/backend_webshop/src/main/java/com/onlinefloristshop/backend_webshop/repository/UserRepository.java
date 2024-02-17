package com.onlinefloristshop.backend_webshop.repository;

import com.onlinefloristshop.backend_webshop.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    User save(User user);

    User findById(Integer id);

    User findByUserName(String userName);

    void deleteById(int id);

    void deleteByUserName(String userName);

}
