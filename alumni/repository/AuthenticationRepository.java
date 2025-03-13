package com.alumni.repository;

import com.alumni.model.Authentication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthenticationRepository extends JpaRepository<Authentication, Long> {
    Optional<Authentication> findByEmail(String email);
}
