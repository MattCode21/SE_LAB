package com.alumni.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.alumni.model.Alumni;

@Repository
public interface AlumniRepository extends JpaRepository<Alumni, Long> {
    Alumni findByEmail(String email);
}
