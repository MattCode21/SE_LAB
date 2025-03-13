package com.alumni.model;

import jakarta.persistence.*;

@Entity
@Table(name = "alumni")
public class Alumni {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String email;
}
