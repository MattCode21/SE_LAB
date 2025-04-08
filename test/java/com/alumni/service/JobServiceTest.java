package com.alumni.service;

import com.alumni.model.Job;
import com.alumni.repository.JobRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class JobServiceTest {

    @Mock
    private JobRepository jobRepository;

    @InjectMocks
    private JobService jobService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllJobs_ReturnsJobList() {
        // Arrange
        Job job1 = new Job();
        job1.setId(1L);
        job1.setTitle("Backend Developer");

        Job job2 = new Job();
        job2.setId(2L);
        job2.setTitle("Frontend Developer");

        List<Job> mockJobs = Arrays.asList(job1, job2);

        when(jobRepository.findAll()).thenReturn(mockJobs);

        // Act
        List<Job> jobs = jobService.getAllJobs();

        // Assert
        assertEquals(2, jobs.size());
        assertEquals("Backend Developer", jobs.get(0).getTitle());
        assertEquals("Frontend Developer", jobs.get(1).getTitle());

        verify(jobRepository, times(1)).findAll();
    }
}
