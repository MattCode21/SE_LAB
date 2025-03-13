package com.alumni.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Collections;
import java.util.Map;
import com.alumni.repository.AlumniRepository;
import com.alumni.model.Alumni;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173") // Adjust frontend URL if needed
public class AlumniController {
    
    @Autowired
    private AlumniRepository alumniRepository;

    @PostMapping("/check")
    public ResponseEntity<Map<String, Boolean>> checkUser(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        boolean exists = alumniRepository.findByEmail(email) != null;
        return ResponseEntity.ok(Collections.singletonMap("exists", exists));
    }
}
