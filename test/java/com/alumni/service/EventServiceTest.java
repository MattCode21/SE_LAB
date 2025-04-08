package com.alumni.service;

import com.alumni.model.Event;
import com.alumni.repository.EventRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class EventServiceTest {

    @Mock
    private EventRepository eventRepository;

    @InjectMocks
    private EventService eventService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllEvents_ReturnsSortedEvents() {
        // Arrange
        Event event1 = new Event("Orientation", "Welcome", LocalDate.of(2024, 5, 10), "Auditorium", "Dept", "10:00 AM");
        Event event2 = new Event("Farewell", "Goodbye", LocalDate.of(2024, 12, 10), "Main Hall", "Dept", "6:00 PM");
        List<Event> events = Arrays.asList(event1, event2);

        when(eventRepository.findByOrderByEventDateAsc()).thenReturn(events);

        // Act
        List<Event> result = eventService.getAllEvents();

        // Assert
        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals("Orientation", result.get(0).getTitle());
        verify(eventRepository, times(1)).findByOrderByEventDateAsc();
    }
}
