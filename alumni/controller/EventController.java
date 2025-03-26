package com.alumni.controller;

import com.alumni.model.Event;
import org.springframework.http.ResponseEntity;
import com.alumni.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Collections;

import java.util.List;


@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    public ResponseEntity<?> getAllEvents() {
        List<Event> events = eventService.getAllEvents();
        
        if (events.isEmpty()) {
            return ResponseEntity.ok(Collections.emptyList());
        }
        
        return ResponseEntity.ok(events);
    }
}


