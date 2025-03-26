import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Mail, Linkedin, Share } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import JobFilters from "@/components/jobs/JobFilters";

const Jobs = () => {
  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      type: "Full-time",
      location: "Bangalore",
      salary: "₹18-24 LPA",
      industry: "Technology",
      description: "Looking for experienced software engineers to join our growing team. Knowledge of React, Node.js, and cloud technologies required."
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Pro",
      type: "Full-time",
      location: "Mumbai",
      salary: "₹20-25 LPA",
      industry: "Technology",
      description: "Join our data science team to work on challenging problems. Experience with Python, R, and machine learning frameworks needed."
    },
    {
      id: 3,
      title: "Product Manager",
      company: "InnovateX",
      type: "Full-time",
      location: "Hybrid (Hyderabad)",
      salary: "₹25-35 LPA",
      industry: "Technology",
      description: "Leading product initiatives from conception to launch. Strong background in tech and business required."
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudWorks",
      type: "Contract",
      location: "Remote",
      salary: "₹15-22 LPA",
      industry: "Technology",
      description: "Implement and manage CI/CD pipelines, container orchestration, and cloud infrastructure. AWS/Azure certification preferred."
    },
    {
      id: 5,
      title: "Summer Internship - Software Development",
      company: "TechStart Labs",
      type: "Internship",
      location: "Bangalore",
      salary: "₹30-40K/month",
      industry: "Technology",
      description: "3-month summer internship opportunity for pre-final year students. Learn and work with the latest web technologies in a fast-paced environment."
    },
    {
      id: 6,
      title: "Research Intern",
      company: "InnoLabs Research",
      type: "Internship",
      location: "Remote",
      salary: "₹25K/month",
      industry: "Technology",
      description: "6-month research internship in AI/ML. Work on cutting-edge research projects under experienced mentors."
    }
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobListings);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    type: "full-time",
    location: "bangalore",
    salary: "",
    industry: "technology",
    description: "",
  });
  const [visibleJobs, setVisibleJobs] = useState(4); // Number of jobs to show initially

  useEffect(() => {
    document.title = "Jobs | Alumni Affairs Network-NITC";
  }, []);

  const handleFilterChange = (filters) => {
    const filtered = jobListings.filter((job) => {
      const matchesType = filters.type === "all" || job.type.toLowerCase() === filters.type;
      const matchesLocation = filters.location === "all" || job.location.toLowerCase().includes(filters.location);
      const matchesIndustry = filters.industry === "all" || job.industry.toLowerCase() === filters.industry;
      return matchesType && matchesLocation && matchesIndustry;
    });
    setFilteredJobs(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddJob = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    if (newJob.title && newJob.company && newJob.description) {
      const updatedJob = { id: jobListings.length + 1, ...newJob };
      const updatedJobListings = [...jobListings, updatedJob];
      setJobListings(updatedJobListings); // Update the jobListings state
      setFilteredJobs(updatedJobListings); // Update the filtered jobs list
      setNewJob({
        title: "",
        company: "",
        type: "full-time",
        location: "bangalore",
        salary: "",
        industry: "technology",
        description: "",
      });
      setIsPopupOpen(false);
    }
  };

  const handleLoadMore = () => {
    setVisibleJobs((prev) => prev + 4); // Load 4 more jobs each time
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Job Opportunities
          </h1>
          
          <JobFilters onFilterChange={handleFilterChange} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {filteredJobs.slice(0, visibleJobs).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {visibleJobs < filteredJobs.length && (
            <div className="text-center">
              <Button onClick={handleLoadMore}>Load More Jobs</Button>
            </div>
          )}

          <div className="bg-muted rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Post a Job Opening</h2>
            <p className="mb-4">
              Are you looking to hire talented NITC alumni or offer internships? Share your opportunities with our network.
            </p>
            <Button onClick={() => setIsPopupOpen(true)}>Submit a Job Listing</Button>
          </div>
        </div>
      </main>
      <Footer />

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[70vh] overflow-y-auto flex flex-row gap-6">
            <div className="w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-center">Add Job Details</h3>
              <form onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                handleAddJob(e); // Call the add job handler
              }} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-1">Job Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={newJob.title}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={newJob.company}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="jobType" className="block text-sm font-medium mb-1">Job Type</label>
                  <select
                    id="jobType"
                    name="type"
                    value={newJob.type}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-1">Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    value={newJob.industry}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="w-1/2">
              <form className="space-y-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
                  <select
                    id="location"
                    name="location"
                    value={newJob.location}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="bangalore">Bangalore</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="salary" className="block text-sm font-medium mb-1">Salary</label>
                  <input
                    id="salary"
                    name="salary"
                    type="text"
                    value={newJob.salary}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={newJob.description}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    rows="4"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="secondary" onClick={() => setIsPopupOpen(false)}>Cancel</Button>
                  <Button type="submit">Add Job</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const JobCard = ({ job }) => {
  const handleShare = (platform) => {
    const jobTitle = encodeURIComponent(job.title);
    const company = encodeURIComponent(job.company);
    const text = `Check out this ${job.title} position at ${job.company}!`;
    
    switch (platform) {
      case 'email':
        window.location.href = `mailto:?subject=${jobTitle} at ${company}&body=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + window.location.href)}`);
        break;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
            <p className="text-muted-foreground">{job.company}</p>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleShare('whatsapp')}>
                  Share via WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('email')}>
                  Share via Email
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('linkedin')}>
                  Share on LinkedIn
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="bg-primary/10 text-primary text-sm px-2 py-1 rounded-full">
              {job.type}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.salary}</span>
            {job.industry && (
              <>
                <span>•</span>
                <span>{job.industry}</span>
              </>
            )}
          </div>
          <p className="line-clamp-3 text-sm">{job.description}</p>
          <div className="pt-2">
            <Button>Apply Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Jobs;
