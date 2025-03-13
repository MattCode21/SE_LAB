
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Search, User, Calendar, ThumbsUp, MessageSquare, FilePlus } from "lucide-react";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const blogPosts = [
    {
      id: 1,
      title: "My Journey from College to Tech Leadership",
      excerpt: "From being a freshman at the university to leading a tech team of 50+ engineers, here's my decade-long journey in the tech industry.",
      author: {
        name: "Rahul Kumar",
        avatar: "",
        designation: "Senior Engineering Manager, Google"
      },
      date: "May 28, 2024",
      tags: ["Career", "Leadership", "Tech"],
      likes: 245,
      comments: 42
    },
    {
      id: 2,
      title: "How Our College Project Became a Million-Dollar Startup",
      excerpt: "What started as a simple college project in our final year has now transformed into a company valued at $5M. Here's how we did it.",
      author: {
        name: "Priya Sharma",
        avatar: "",
        designation: "Co-founder & CEO, EduTech Solutions"
      },
      date: "April 15, 2024",
      tags: ["Startup", "Entrepreneurship", "Success Story"],
      likes: 389,
      comments: 67
    },
    {
      id: 3,
      title: "Transitioning from Engineering to Product Management",
      excerpt: "After 5 years as a software engineer, I made the switch to product management. These are the lessons I learned along the way.",
      author: {
        name: "Arun Verma",
        avatar: "",
        designation: "Senior Product Manager, Microsoft"
      },
      date: "March 7, 2024",
      tags: ["Product Management", "Career Switch", "Tech"],
      likes: 156,
      comments: 28
    },
    {
      id: 4,
      title: "The Importance of Alumni Networks in Professional Growth",
      excerpt: "How leveraging my university's alumni network opened doors to opportunities I never knew existed.",
      author: {
        name: "Neha Gupta",
        avatar: "",
        designation: "HR Director, TechCorp"
      },
      date: "February 20, 2024",
      tags: ["Networking", "Career Growth", "Alumni"],
      likes: 203,
      comments: 35
    }
  ];

  const filteredBlogs = blogPosts.filter(
    blog => 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Alumni Blogs</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights, experiences, and knowledge shared by our university alumni from various fields and professions.
            </p>
          </div>
          
          {/* Search and Create */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                className="pl-10" 
                placeholder="Search blogs, authors, or topics..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button asChild className="w-full md:w-auto gap-2">
              <Link to="/create-blog">
                <FilePlus className="h-4 w-4" />
                Create New Blog
              </Link>
            </Button>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="tech">Tech</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="trending" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs
                  .sort((a, b) => b.likes - a.likes)
                  .slice(0, 3)
                  .map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))
                }
              </div>
            </TabsContent>
            
            <TabsContent value="recent" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 3)
                  .map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))
                }
              </div>
            </TabsContent>
            
            <TabsContent value="tech" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs
                  .filter(blog => blog.tags.some(tag => 
                    ["tech", "technology", "engineering", "software", "AI"].includes(tag.toLowerCase())
                  ))
                  .map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))
                }
              </div>
            </TabsContent>
            
            <TabsContent value="career" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs
                  .filter(blog => blog.tags.some(tag => 
                    ["career", "job", "professional", "work", "leadership"].includes(tag.toLowerCase())
                  ))
                  .map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>
          
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <Book className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-medium mb-2">No blogs found</h3>
              <p className="text-muted-foreground">
                No blogs match your search criteria. Try different keywords or categories.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const BlogCard = ({ blog }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {blog.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <CardTitle className="line-clamp-2 hover:text-primary transition-colors cursor-pointer">
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-3 mt-2">{blog.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{blog.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{blog.author.name}</p>
            <p className="text-xs text-muted-foreground">{blog.author.designation}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{blog.date}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <ThumbsUp className="h-4 w-4" />
            <span>{blog.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span>{blog.comments}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Blogs;
