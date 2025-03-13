package com.alumni.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private LocalDate eventDate;
    private String location;
    private String organizedBy;

    // Constructors
    public Event() {}

    public Event(String title, String description, LocalDate eventDate, String location, String organizedBy) {
        this.title = title;
        this.description = description;
        this.eventDate = eventDate;
        this.location = location;
        this.organizedBy = organizedBy;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDate getEventDate() { return eventDate; }
    public void setEventDate(LocalDate eventDate) { this.eventDate = eventDate; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getOrganizedBy() { return organizedBy; }
    public void setOrganizedBy(String organizedBy) { this.organizedBy = organizedBy; }
}
