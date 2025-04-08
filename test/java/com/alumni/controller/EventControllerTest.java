package com.alumni.controller;

import com.alumni.model.Event;
import com.alumni.service.EventService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@WebMvcTest(EventController.class)
@AutoConfigureMockMvc(addFilters = false)
public class EventControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EventService eventService;

    private List<Event> mockEvents;

    @BeforeEach
    public void setup() {
        Event event1 = new Event("Tech Meet", "Tech discussion", LocalDate.of(2024, 6, 1), "Auditorium", "CSE Dept", "10:00 AM");
        Event event2 = new Event("Alumni Reunion", "Meet and greet", LocalDate.of(2024, 12, 20), "Main Hall", "Alumni Club", "6:00 PM");
        mockEvents = Arrays.asList(event1, event2);
    }

    @Test
    public void testGetAllEvents_ReturnsEvents() throws Exception {
        when(eventService.getAllEvents()).thenReturn(mockEvents);

        mockMvc.perform(get("/api/events"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[0].title").value("Tech Meet"))
                .andExpect(jsonPath("$[1].organizedBy").value("Alumni Club"));
    }

    @Test
    public void testGetAllEvents_ReturnsEmptyList() throws Exception {
        when(eventService.getAllEvents()).thenReturn(Collections.emptyList());

        mockMvc.perform(get("/api/events"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(content().json("[]"));
    }
}
