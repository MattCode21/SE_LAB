package com.alumni.controller;

import com.alumni.model.Job;
import com.alumni.service.JobService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(JobController.class)
@AutoConfigureMockMvc(addFilters = false)
public class JobControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private JobService jobService;

    @Test
    void testGetAllJobs_ReturnsJobList() throws Exception {
        Job job1 = new Job();
        job1.setId(1L);
        job1.setTitle("Software Engineer");
        job1.setCompany("Google");
        job1.setLocation("Bangalore");
        job1.setSalaryRange("10-15 LPA");
        job1.setType("Full-time");
        job1.setDescription("Develop scalable web services.");
        job1.setIndustry("Tech");
        job1.setApplyLink("http://careers.google.com/apply");

        Job job2 = new Job();
        job2.setId(2L);
        job2.setTitle("Data Analyst");
        job2.setCompany("TCS");
        job2.setLocation("Chennai");
        job2.setSalaryRange("6-9 LPA");
        job2.setType("Full-time");
        job2.setDescription("Analyze large datasets.");
        job2.setIndustry("IT");
        job2.setApplyLink("http://tcs.com/jobs");

        when(jobService.getAllJobs()).thenReturn(Arrays.asList(job1, job2));

        mockMvc.perform(get("/api/jobs")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(2))
                .andExpect(jsonPath("$[0].title").value("Software Engineer"))
                .andExpect(jsonPath("$[0].company").value("Google"))
                .andExpect(jsonPath("$[1].title").value("Data Analyst"));

        verify(jobService, times(1)).getAllJobs();
    }
}
