package com.alumni.controller;

import com.alumni.model.Authentication;
import com.alumni.repository.AuthenticationRepository;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    private final AuthenticationRepository authenticationRepository;

    public UserController(AuthenticationRepository authenticationRepository) {
        this.authenticationRepository = authenticationRepository;
    }

    @GetMapping("/user")
    public ResponseEntity<Map<String, Object>> getUserProfile(@AuthenticationPrincipal OAuth2User principal) {
        if (principal == null) {
            return ResponseEntity.status(401).body(Map.of("error", "User not authenticated"));
        }

        String email = principal.getAttribute("email");
        String name = principal.getAttribute("name");
        String profilePic = principal.getAttribute("picture");

        if (email == null) {
            return ResponseEntity.status(400).body(Map.of("error", "Email not provided by Google"));
        }

        // Force saving/updating user in DB
        Authentication user = authenticationRepository.findByEmail(email)
                .orElse(new Authentication());

        user.setEmail(email);
        user.setFullName(name);
        user.setProfilePic(profilePic);
        authenticationRepository.save(user);

        // Log to check if user is saved
        System.out.println("User saved: " + name + " (" + email + ")");

        // Return user data
        return ResponseEntity.ok(Map.of(
            "name", name,
            "email", email,
            "profilePic", profilePic
        ));
    }
}
