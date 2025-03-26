package com.alumni.model;

import jakarta.persistence.*;

@Entity
@Table(name = "jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id")
    private Long id;

    private String role;
    private String company;
    private String jobType;
    private String location;
    private Double salary;
    private String industry;
    private String description;

    // Constructors
    public Job() {}

    public Job(String role, String company, String jobType, String location, Double salary, String industry, String description) {
        this.role = role;
        this.company = company;
        this.jobType = jobType;
        this.location = location;
        this.salary = salary;
        this.industry = industry;
        this.description = description;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getJobType() { return jobType; }
    public void setJobType(String jobType) { this.jobType = jobType; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public Double getSalary() { return salary; }
    public void setSalary(Double salary) { this.salary = salary; }

    public String getIndustry() { return industry; }
    public void setIndustry(String industry) { this.industry = industry; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
