import { useEffect, useState, useRef } from "react"; // Added useRef
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Leaderboard from "@/components/profile/Leaderboard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  CalendarDays, 
  MapPin, 
  Briefcase, 
  Mail, 
  Phone, 
  Globe, 
  Twitter, 
  Linkedin, 
  Github, 
  Award, 
  User, 
  FileEdit, 
  Calendar, 
  Check, 
  UserPlus, 
  FileText,
  Send,
  Trophy
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    firstName: "Rahul",
    lastName: "Kumar",
    email: "rahul.kumar@example.com",
    phone: "+91 98765 43210",
    location: "Bangalore, India",
    about: "Senior Software Engineer with 9 years of experience specializing in full-stack development and cloud architecture. Passionate about mentoring and building scalable applications.",
    currentRole: "Senior Software Engineer",
    company: "TechCorp Inc.",
    industry: "Information Technology",
    skills: "React, Node.js, AWS, Java, TypeScript, Project Management",
    linkedin: "linkedin.com/in/rahulkumar",
    twitter: "twitter.com/rahulk",
    github: "github.com/rahulkumar",
    website: "www.rahulkumar.dev",
  });
  const [resume, setResume] = useState(null);
  const resumeInputRef = useRef(null); // Added ref for file input
  const [jobs, setJobs] = useState([
    { title: "Senior Software Engineer", company: "TechCorp Inc.", period: "2019 - Present", description: "Leading a team of 5 developers building cloud-native applications using React, Node.js, and AWS. Improved system performance by 40% through architecture redesign." },
    { title: "Software Engineer", company: "InnovateX", period: "2015 - 2019", description: "Developed and maintained enterprise applications using Java and Angular. Implemented CI/CD pipelines that reduced deployment time by 60%." }
  ]);

  const [education, setEducation] = useState([
    { title: "B.Tech in Computer Science", institution: "University College of Engineering", period: "2011 - 2015", description: "Graduated with honors. Active member of the coding club and technical symposium organizing committee." }
  ]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Profile Header */}
          <div className="mb-12">
            <div className="relative rounded-xl overflow-hidden">
              {/* Cover Image */}
              <div className="h-48 md:h-64 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              
              {/* Profile Info - Overlapping section */}
              <div className="absolute -bottom-20 md:-bottom-24 w-full px-4">
                <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
                  <Avatar className="h-28 w-28 md:h-36 md:w-36 border-4 border-background">
                    <AvatarFallback className="text-4xl bg-primary text-white">RK</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex flex-col items-center md:items-start mb-2 md:mb-0 md:flex-grow">
                    <div className="bg-background p-2 rounded-md mb-1">
                      <Badge variant="outline" className="bg-primary/10 text-primary">Class of 2015</Badge>
                    </div>
                    <div className="bg-background p-2 rounded-md">
                      <h1 className="text-2xl md:text-3xl font-bold">Rahul Kumar</h1>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 bg-background p-2 rounded-md">
                    <Button className="gap-2">
                      <FileEdit className="h-4 w-4" />
                      Edit Profile
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="gap-2">
                          <UserPlus className="h-4 w-4" />
                          Connect
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Connect with Rahul Kumar</DialogTitle>
                          <DialogDescription>
                            Send a connection request with a personalized message
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <Textarea 
                            placeholder="Hi Rahul, I'd like to connect with you..."
                            className="min-h-[100px]"
                          />
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button className="gap-2">
                            <Send className="h-4 w-4" />
                            Send Request
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Body */}
          <div className="mt-24 md:mt-28">
            <Tabs defaultValue="overview">
              <TabsList className="mb-8 w-full md:w-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="edit">Edit Profile</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                <TabsTrigger value="recommendation">Recommendation</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 space-y-8">
                    {/* About Card */}
                    <ProfileCard title="About">
                      <p className="text-muted-foreground">{profileInfo.about}</p>
                      
                      <div className="mt-6 space-y-3">
                        <ProfileInfo icon={<Briefcase className="h-4 w-4" />} label={`${profileInfo.currentRole} at ${profileInfo.company}`} />
                        <ProfileInfo icon={<MapPin className="h-4 w-4" />} label={profileInfo.location} />
                        <ProfileInfo icon={<CalendarDays className="h-4 w-4" />} label="Joined June 2015" />
                      </div>
                    </ProfileCard>
                    
                    {/* Contact Info Card */}
                    <ProfileCard title="Contact Information">
                      <div className="space-y-3">
                        <ProfileInfo icon={<Mail className="h-4 w-4" />} label={profileInfo.email} />
                        <ProfileInfo icon={<Phone className="h-4 w-4" />} label={profileInfo.phone} />
                        <ProfileInfo icon={<Globe className="h-4 w-4" />} label={profileInfo.website} />
                      </div>
                    </ProfileCard>
                    
                    {/* Social Links Card */}
                    <ProfileCard title="Social Profiles">
                      <div className="space-y-3">
                        <ProfileInfo icon={<Linkedin className="h-4 w-4" />} label={profileInfo.linkedin} />
                        <ProfileInfo icon={<Twitter className="h-4 w-4" />} label={profileInfo.twitter} />
                        <ProfileInfo icon={<Github className="h-4 w-4" />} label={profileInfo.github} />
                      </div>
                    </ProfileCard>
                    
                    {/* Alumni Recognition */}
                    <ProfileCard title="Alumni Recognition">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-amber-500 shrink-0 mt-1" />
                          <div>
                            <h4 className="font-medium">Tech Contributor Award 2022</h4>
                            <p className="text-sm text-muted-foreground">Recognized for contributions to the alumni tech community</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-indigo-500 shrink-0 mt-1" />
                          <div>
                            <h4 className="font-medium">Active Volunteer</h4>
                            <p className="text-sm text-muted-foreground">For organizing 5+ alumni events in 2023</p>
                          </div>
                        </div>
                      </div>
                    </ProfileCard>
                  </div>
                  
                  {/* Main Content */}
                  <div className="md:col-span-2 space-y-8">
                    {/* Professional Experience */}
                    <ProfileCard title="Professional Experience">
                      <div className="space-y-6">
                        {jobs.map((job, index) => (
                          <ExperienceItem
                            key={index}
                            title={job.title}
                            company={job.company}
                            period={job.period}
                            description={job.description}
                          />
                        ))}
                      </div>
                    </ProfileCard>
                    
                    {/* Education */}
                    <ProfileCard title="Education">
                      <div className="space-y-6">
                        {education.map((edu, index) => (
                          <ExperienceItem
                            key={index}
                            title={edu.title}
                            company={edu.institution}
                            period={edu.period}
                            description={edu.description}
                          />
                        ))}
                      </div>
                    </ProfileCard>
                  </div>
                </div>
              </TabsContent>
              
              {/* Edit Profile Tab */}
              <TabsContent value="edit">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={profileInfo.firstName}
                            onChange={(e) =>
                              setProfileInfo((prev) => ({ ...prev, firstName: e.target.value }))
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={profileInfo.lastName}
                            onChange={(e) =>
                              setProfileInfo((prev) => ({ ...prev, lastName: e.target.value }))
                            }
                          />
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profileInfo.email}
                            onChange={(e) =>
                              setProfileInfo((prev) => ({ ...prev, email: e.target.value }))
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={profileInfo.phone}
                            onChange={(e) =>
                              setProfileInfo((prev) => ({ ...prev, phone: e.target.value }))
                            }
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profileInfo.location}
                          onChange={(e) =>
                            setProfileInfo((prev) => ({ ...prev, location: e.target.value }))
                          }
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="about">About Me</Label>
                        <Textarea
                          id="about"
                          rows={4}
                          value={profileInfo.about}
                          onChange={(e) =>
                            setProfileInfo((prev) => ({ ...prev, about: e.target.value }))
                          }
                        />
                      </div>

                      {/* Added fields for Current Role and Company */}
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <Label htmlFor="currentRole">Current Role</Label>
                          <Input
                            id="currentRole"
                            value={profileInfo.currentRole}
                            onChange={(e) =>
                              setProfileInfo((prev) => ({ ...prev, currentRole: e.target.value }))
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={profileInfo.company}
                            onChange={(e) =>
                              setProfileInfo((prev) => ({ ...prev, company: e.target.value }))
                            }
                          />
                        </div>
                      </div>
                    </CardContent>
                    <Button
                      onClick={() =>
                        setProfileInfo((prev) => ({
                          ...prev,
                          firstName: document.getElementById("firstName").value,
                          lastName: document.getElementById("lastName").value,
                          email: document.getElementById("email").value,
                          phone: document.getElementById("phone").value,
                          location: document.getElementById("location").value,
                          about: document.getElementById("about").value,
                          currentRole: document.getElementById("currentRole").value,
                          company: document.getElementById("company").value,
                        }))
                      }
                    >
                      Save Personal Information
                    </Button>
                  </Card>
                  
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Professional Experience</CardTitle>
                      <CardDescription>Add, update, or delete your job experiences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {jobs.map((job, index) => (
                        <div key={index} className="space-y-4 border-b pb-4">
                          <div>
                            <Label htmlFor={`job-title-${index}`}>Job Title</Label>
                            <Input
                              id={`job-title-${index}`}
                              value={job.title}
                              onChange={(e) => {
                                const updatedJobs = [...jobs];
                                updatedJobs[index].title = e.target.value;
                                setJobs(updatedJobs);
                              }}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`job-company-${index}`}>Company</Label>
                            <Input
                              id={`job-company-${index}`}
                              value={job.company}
                              onChange={(e) => {
                                const updatedJobs = [...jobs];
                                updatedJobs[index].company = e.target.value;
                                setJobs(updatedJobs);
                              }}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`job-period-${index}`}>Period</Label>
                            <Input
                              id={`job-period-${index}`}
                              value={job.period}
                              onChange={(e) => {
                                const updatedJobs = [...jobs];
                                updatedJobs[index].period = e.target.value;
                                setJobs(updatedJobs);
                              }}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`job-description-${index}`}>Description</Label>
                            <Textarea
                              id={`job-description-${index}`}
                              value={job.description}
                              onChange={(e) => {
                                const updatedJobs = [...jobs];
                                updatedJobs[index].description = e.target.value;
                                setJobs(updatedJobs);
                              }}
                            />
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              const updatedJobs = jobs.filter((_, i) => i !== index);
                              setJobs(updatedJobs);
                            }}
                          >
                            Delete Job
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        onClick={() =>
                          setJobs([...jobs, { title: "", company: "", period: "", description: "" }])
                        }
                      >
                        Add Job
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Education</CardTitle>
                      <CardDescription>Add, update, or delete your education details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {education.map((edu, index) => (
                        <div key={index} className="space-y-4 border-b pb-4">
                          <div>
                            <Label htmlFor={`edu-title-${index}`}>Degree/Program</Label>
                            <Input
                              id={`edu-title-${index}`}
                              value={edu.title}
                              onChange={(e) => {
                                const updatedEducation = [...education];
                                updatedEducation[index].title = e.target.value;
                                setEducation(updatedEducation);
                              }}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`edu-institution-${index}`}>Institution</Label>
                            <Input
                              id={`edu-institution-${index}`}
                              value={edu.institution}
                              onChange={(e) => {
                                const updatedEducation = [...education];
                                updatedEducation[index].institution = e.target.value;
                                setEducation(updatedEducation);
                              }}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`edu-period-${index}`}>Period</Label>
                            <Input
                              id={`edu-period-${index}`}
                              value={edu.period}
                              onChange={(e) => {
                                const updatedEducation = [...education];
                                updatedEducation[index].period = e.target.value;
                                setEducation(updatedEducation);
                              }}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`edu-description-${index}`}>Description</Label>
                            <Textarea
                              id={`edu-description-${index}`}
                              value={edu.description}
                              onChange={(e) => {
                                const updatedEducation = [...education];
                                updatedEducation[index].description = e.target.value;
                                setEducation(updatedEducation);
                              }}
                            />
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              const updatedEducation = education.filter((_, i) => i !== index);
                              setEducation(updatedEducation);
                            }}
                          >
                            Delete Education
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        onClick={() =>
                          setEducation([...education, { title: "", institution: "", period: "", description: "" }])
                        }
                      >
                        Add Education
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle>Social Profiles</CardTitle>
                      <CardDescription>Link your social media accounts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={profileInfo.linkedin}
                          onChange={(e) =>
                            setProfileInfo((prev) => ({ ...prev, linkedin: e.target.value }))
                          }
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input
                          id="twitter"
                          value={profileInfo.twitter}
                          onChange={(e) =>
                            setProfileInfo((prev) => ({ ...prev, twitter: e.target.value }))
                          }
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                          id="github"
                          value={profileInfo.github}
                          onChange={(e) =>
                            setProfileInfo((prev) => ({ ...prev, github: e.target.value }))
                          }
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="website">Personal Website</Label>
                        <Input
                          id="website"
                          value={profileInfo.website}
                          onChange={(e) =>
                            setProfileInfo((prev) => ({ ...prev, website: e.target.value }))
                          }
                        />
                      </div>
                    </CardContent>
                    <Button
                      onClick={() =>
                        setProfileInfo((prev) => ({
                          ...prev,
                          linkedin: document.getElementById("linkedin").value,
                          twitter: document.getElementById("twitter").value,
                          github: document.getElementById("github").value,
                          website: document.getElementById("website").value,
                        }))
                      }
                    >
                      Save Social Profiles
                    </Button>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Events Tab */}
              <TabsContent value="events">
                <div className="space-y-8">
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-lg font-semibold mb-6">Your Upcoming Events</h3>
                    
                    <div className="space-y-4">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-4 p-4 bg-secondary rounded-lg">
                          <div className="md:w-1/4 flex flex-col items-center justify-center bg-primary/10 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold">June {10 + i}</div>
                            <div className="text-muted-foreground">2024</div>
                          </div>
                          <div className="md:w-3/4">
                            <h4 className="font-medium text-lg">{i === 1 ? 'Annual Alumni Reunion 2024' : 'Tech Workshop'}</h4>
                            <div className="flex items-center gap-2 text-muted-foreground my-2">
                              <MapPin className="h-4 w-4" />
                              <span>{i === 1 ? 'University Campus' : 'Virtual (Zoom)'}</span>
                            </div>
                            <p className="text-muted-foreground mb-4">
                              {i === 1 
                                ? 'Join us for the biggest alumni event of the year! Connect with old friends and make new connections.' 
                                : 'Learn about the latest tech trends and career opportunities with industry experts.'}
                            </p>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">View Details</Button>
                              <Button size="sm">Add to Calendar</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-lg font-semibold mb-6">Past Events You've Attended</h3>
                    
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-4 p-4 bg-secondary rounded-lg">
                          <div className="md:w-1/4 flex flex-col items-center justify-center bg-muted p-4 rounded-lg text-center">
                            <div className="text-xl font-medium">December {10 + i}</div>
                            <div className="text-muted-foreground">2023</div>
                          </div>
                          <div className="md:w-3/4">
                            <h4 className="font-medium text-lg">
                              {i === 1 ? 'Winter Alumni Gathering' : i === 2 ? 'Career Development Workshop' : 'Tech Industry Panel'}
                            </h4>
                            <div className="flex items-center gap-2 text-muted-foreground my-2">
                              <MapPin className="h-4 w-4" />
                              <span>
                                {i === 1 ? 'Grand Hotel, Bangalore' : i === 2 ? 'University Campus' : 'Virtual Event'}
                              </span>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button variant="outline" size="sm">View Photos</Button>
                              <Button variant="secondary" size="sm">Share Experience</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <Button variant="outline">View All Past Events</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Leaderboard Tab - Moved from Overview */}
              <TabsContent value="leaderboard">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Alumni Engagement Leaderboard</h2>
                      <p className="text-muted-foreground">See how you rank among your fellow alumni based on your contributions</p>
                    </div>
                  </div>
                  
                  <Leaderboard />
                  
                  <div className="mt-8 p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-4">Your Engagement Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-card p-4 rounded-lg border">
                        <div className="font-semibold text-lg mb-1">20 Blog Posts</div>
                        <p className="text-sm text-muted-foreground">You've written 20 blog posts sharing your knowledge and experiences</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border">
                        <div className="font-semibold text-lg mb-1">80 Comments</div>
                        <p className="text-sm text-muted-foreground">You've made 80 comments providing valuable feedback to others</p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border">
                        <div className="font-semibold text-lg mb-1">15 Events</div>
                        <p className="text-sm text-muted-foreground">You've attended 15 alumni events in the past year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Recommendation Letters Tab */}
              <TabsContent value="recommendation">
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Request Recommendation Letter</CardTitle>
                      <CardDescription>
                        Request recommendation letters from faculty members for job applications or higher studies
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label htmlFor="faculty">Select Faculty</Label>
                        <Select>
                          <SelectTrigger id="faculty">
                            <SelectValue placeholder="Select faculty member" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="prof1">Dr. Amit Sharma, Professor (CSE)</SelectItem>
                            <SelectItem value="prof2">Dr. Priya Mehta, Associate Professor (CSE)</SelectItem>
                            <SelectItem value="prof3">Dr. Rajiv Singh, Professor (EEE)</SelectItem>
                            <SelectItem value="prof4">Dr. Lakshmi Narayanan, Professor (Mechanical)</SelectItem>
                            <SelectItem value="prof5">Dr. Sanjay Gupta, Dean of Student Affairs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="purpose">Purpose of Recommendation</Label>
                        <Select>
                          <SelectTrigger id="purpose">
                            <SelectValue placeholder="Select purpose" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="job">Job Application</SelectItem>
                            <SelectItem value="masters">Masters Program</SelectItem>
                            <SelectItem value="phd">PhD Program</SelectItem>
                            <SelectItem value="scholarship">Scholarship</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="details">Additional Details</Label>
                        <Textarea 
                          id="details"
                          placeholder="Please provide details about the position, program, or scholarship you're applying for..."
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="deadline">Deadline</Label>
                        <Input id="deadline" type="date" />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Label>Resume/CV</Label>
                        <div className="border border-dashed border-input rounded-md p-6 text-center">
                          <FileText className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground mb-2">
                            {resume ? `Uploaded: ${resume.name}` : "Drag and drop your resume here, or click to browse"}
                          </p>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setResume(e.target.files[0])}
                            ref={resumeInputRef} // Attach ref to input
                            className="hidden"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => resumeInputRef.current && resumeInputRef.current.click()} // Trigger input click
                          >
                            Browse Files
                          </Button>
                        </div>
                      </div>
                      
                      <Button className="w-full sm:w-auto">Submit Request</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Recommendation Requests</CardTitle>
                      <CardDescription>
                        Status of your recommendation letter requests
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { 
                            faculty: "Dr. Amit Sharma", 
                            purpose: "Masters Program - Stanford University",
                            date: "May 15, 2024",
                            status: "Approved"
                          },
                          { 
                            faculty: "Dr. Priya Mehta", 
                            purpose: "Job Application - Google",
                            date: "April 28, 2024",
                            status: "Pending"
                          }
                        ].map((request, index) => (
                          <div key={index} className="border rounded-md p-4">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div>
                                <h4 className="font-medium">{request.faculty}</h4>
                                <p className="text-sm text-muted-foreground">{request.purpose}</p>
                                <p className="text-xs text-muted-foreground">Requested on: {request.date}</p>
                              </div>
                              <Badge 
                                variant={request.status === "Approved" ? "success" : "outline"}
                                className={request.status === "Approved" ? "bg-green-100 text-green-800 border-green-200" : ""}
                              >
                                {request.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;

function ProfileCard({ title, children }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function ProfileInfo({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function ExperienceItem({ title, company, period, description }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
        <h4 className="font-medium">{title}</h4>
        <Badge variant="outline" className="md:ml-2 my-1 md:my-0 w-fit">
          {period}
        </Badge>
      </div>
      <p className="text-muted-foreground mb-2">{company}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function ActivityItem({ icon, title, time }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}

