package com.alumni.controller;

import com.alumni.model.Alumni;
import com.alumni.service.AlumniService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.security.test.context.support.WithMockUser;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(AlumniController.class)
@AutoConfigureMockMvc(addFilters = false)
public class AlumniControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AlumniService alumniService;

    @Autowired
    private ObjectMapper objectMapper;

    @WithMockUser(username = "admin", roles = {"ADMIN"})
    @Test
    public void testGetAllAlumni() throws Exception {
        List<Alumni> mockList = Arrays.asList(
                createMockAlumni(1L, "Alice", "2020", "CSE", "BTech", "Google", "SDE", "Bangalore"),
                createMockAlumni(2L, "Bob", "2019", "ECE", "MTech", "Intel", "Engineer", "Chennai")
        );

        Mockito.when(alumniService.getAllAlumni()).thenReturn(mockList);

        mockMvc.perform(get("/api/alumni"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(2))
                .andExpect(jsonPath("$[0].name").value("Alice"))
                .andExpect(jsonPath("$[1].company").value("Intel"));
    }

    @WithMockUser(username = "admin", roles = {"ADMIN"})
    @Test
    public void testAddAlumni() throws Exception {
        Alumni newAlumni = createMockAlumni(null, "Charlie", "2021", "ME", "BTech", "Deloitte", "Analyst", "Mumbai");
        Alumni savedAlumni = createMockAlumni(3L, "Charlie", "2021", "ME", "BTech", "Deloitte", "Analyst", "Mumbai");

        Mockito.when(alumniService.saveAlumni(any(Alumni.class))).thenReturn(savedAlumni);

        mockMvc.perform(post("/api/alumni")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(newAlumni)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(3))
                .andExpect(jsonPath("$.name").value("Charlie"))
                .andExpect(jsonPath("$.location").value("Mumbai"));
    }

    private Alumni createMockAlumni(Long id, String name, String batchYear, String department,
                                    String programme, String company, String designation, String location) {
        Alumni alumni = new Alumni();
        alumni.setId(id);
        alumni.setName(name);
        alumni.setBatchYear(batchYear);
        alumni.setDepartment(department);
        alumni.setProgramme(programme);
        alumni.setCompany(company);
        alumni.setDesignation(designation);
        alumni.setLocation(location);
        return alumni;
    }
}
