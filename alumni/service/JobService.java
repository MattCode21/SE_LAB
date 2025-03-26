package com.alumni.service;

import com.alumni.model.Job;
import com.alumni.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    // Get all jobs
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    // Get job by ID
    public Optional<Job> getJobById(Long id) {
        return jobRepository.findById(id);
    }

    // Add a job
    public Job addJob(Job job) {
        return jobRepository.save(job);
    }

    // Update a job
    public Job updateJob(Long id, Job jobDetails) {
        return jobRepository.findById(id).map(job -> {
            job.setTitle(jobDetails.getTitle());
            job.setCompany(jobDetails.getCompany());
            job.setType(jobDetails.getType());
            job.setLocation(jobDetails.getLocation());
            job.setSalary(jobDetails.getSalary());
            job.setIndustry(jobDetails.getIndustry());
            job.setDescription(jobDetails.getDescription());
            return jobRepository.save(job);
        }).orElseThrow(() -> new RuntimeException("Job not found"));
    }

    // Delete a job
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
