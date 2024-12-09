package com.example.Full.Stack.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Full.Stack.Backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
