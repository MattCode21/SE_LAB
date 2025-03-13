
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
  const [filteredJobs, setFilteredJobs] = useState(jobListings);

  useEffect(() => {
    document.title = "Jobs | Alumni Affairs Network-NITC";
  }, []);

  const handleFilterChange = (type, value) => {
    if (value === 'all') {
      setFilteredJobs(jobListings);
    } else {
      const filtered = jobListings.filter(job => {
        if (type === 'type') return job.type.toLowerCase() === value;
        if (type === 'location') return job.location.toLowerCase().includes(value);
        if (type === 'industry') return job.industry.toLowerCase() === value;
        return true;
      });
      setFilteredJobs(filtered);
    }
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
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="bg-muted rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Post a Job Opening</h2>
            <p className="mb-4">
              Are you looking to hire talented NITC alumni or offer internships? Share your opportunities with our network.
            </p>
            <Button>Submit a Job Listing</Button>
          </div>
        </div>
      </main>
      <Footer />
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

// Sample job data
const jobListings = [
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
];

export default Jobs;
