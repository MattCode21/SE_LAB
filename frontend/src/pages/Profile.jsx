import { useEffect, useState } from "react";
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
                      <p className="text-muted-foreground">
                        Senior Software Engineer with 8 years of experience specializing in full-stack development and cloud architecture. Passionate about mentoring and building scalable applications.
                      </p>
                      
                      <div className="mt-6 space-y-3">
                        <ProfileInfo icon={<Briefcase className="h-4 w-4" />} label="Senior Software Engineer at TechCorp" />
                        <ProfileInfo icon={<MapPin className="h-4 w-4" />} label="Bangalore, India" />
                        <ProfileInfo icon={<CalendarDays className="h-4 w-4" />} label="Joined June 2015" />
                      </div>
                    </ProfileCard>
                    
                    {/* Contact Info Card */}
                    <ProfileCard title="Contact Information">
                      <div className="space-y-3">
                        <ProfileInfo icon={<Mail className="h-4 w-4" />} label="rahul.kumar@example.com" />
                        <ProfileInfo icon={<Phone className="h-4 w-4" />} label="+91 98765 43210" />
                        <ProfileInfo icon={<Globe className="h-4 w-4" />} label="www.rahulkumar.dev" />
                      </div>
                    </ProfileCard>
                    
                    {/* Social Links Card */}
                    <ProfileCard title="Social Profiles">
                      <div className="space-y-3">
                        <ProfileInfo icon={<Linkedin className="h-4 w-4" />} label="linkedin.com/in/rahulkumar" />
                        <ProfileInfo icon={<Twitter className="h-4 w-4" />} label="twitter.com/rahulk" />
                        <ProfileInfo icon={<Github className="h-4 w-4" />} label="github.com/rahulkumar" />
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
                        <ExperienceItem 
                          title="Senior Software Engineer"
                          company="TechCorp Inc."
                          period="2019 - Present"
                          description="Leading a team of 5 developers building cloud-native applications using React, Node.js, and AWS. Improved system performance by 40% through architecture redesign."
                        />
                        <ExperienceItem 
                          title="Software Engineer"
                          company="InnovateX"
                          period="2015 - 2019"
                          description="Developed and maintained enterprise applications using Java and Angular. Implemented CI/CD pipelines that reduced deployment time by 60%."
                        />
                      </div>
                    </ProfileCard>
                    
                    {/* Education */}
                    <ProfileCard title="Education">
                      <div className="space-y-6">
                        <ExperienceItem 
                          title="B.Tech in Computer Science"
                          company="University College of Engineering"
                          period="2011 - 2015"
                          description="Graduated with honors. Active member of the coding club and technical symposium organizing committee."
                        />
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
                          <Input id="firstName" defaultValue="Rahul" />
                        </div>
                        <div className="flex-1">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Kumar" />
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" defaultValue="rahul.kumar@example.com" />
                        </div>
                        <div className="flex-1">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" defaultValue="+91 98765 43210" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="Bangalore, India" />
                      </div>
                      
                      <div>
                        <Label htmlFor="about">About Me</Label>
                        <Textarea id="about" rows={4} defaultValue="Senior Software Engineer with 8 years of experience specializing in full-stack development and cloud architecture. Passionate about mentoring and building scalable applications." />
                      </div>
                      
                      <Button>Save Personal Information</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Professional Information</CardTitle>
                      <CardDescription>Update your work and education details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label htmlFor="currentRole">Current Role</Label>
                        <Input id="currentRole" defaultValue="Senior Software Engineer" />
                      </div>
                      
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" defaultValue="TechCorp Inc." />
                      </div>
                      
                      <div>
                        <Label htmlFor="industry">Industry</Label>
                        <Input id="industry" defaultValue="Information Technology" />
                      </div>
                      
                      <div>
                        <Label htmlFor="skills">Skills (comma separated)</Label>
                        <Input id="skills" defaultValue="React, Node.js, AWS, Java, TypeScript, Project Management" />
                      </div>
                      
                      <Button>Save Professional Information</Button>
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
                        <Input id="linkedin" defaultValue="linkedin.com/in/rahulkumar" />
                      </div>
                      
                      <div>
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input id="twitter" defaultValue="twitter.com/rahulk" />
                      </div>
                      
                      <div>
                        <Label htmlFor="github">GitHub</Label>
                        <Input id="github" defaultValue="github.com/rahulkumar" />
                      </div>
                      
                      <div>
                        <Label htmlFor="website">Personal Website</Label>
                        <Input id="website" defaultValue="www.rahulkumar.dev" />
                      </div>
                      
                      <Button>Save Social Profiles</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy Settings</CardTitle>
                      <CardDescription>Control your profile visibility</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Public Profile</p>
                          <p className="text-sm text-muted-foreground">Allow anyone to view your profile</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Show Email Address</p>
                          <p className="text-sm text-muted-foreground">Display your email to other alumni</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Show Phone Number</p>
                          <p className="text-sm text-muted-foreground">Display your phone to other alumni</p>
                        </div>
                        <Switch />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive email updates</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <Button variant="outline">Save Privacy Settings</Button>
                    </CardContent>
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
                            Drag and drop your resume here, or click to browse
                          </p>
                          <Button variant="outline" size="sm">Browse Files</Button>
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

