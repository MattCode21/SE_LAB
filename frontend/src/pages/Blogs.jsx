import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Book,
  Search,
  Calendar,
  ThumbsUp,
  MessageSquare,
  FilePlus,
} from "lucide-react";
import { blogPosts, getAllTags, formatDate } from "@/data/blogData";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogPosts.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Alumni Blogs
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights, experiences, and knowledge shared by our university
              alumni from various fields and professions.
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
            <Button
              asChild
              className="w-full md:w-auto gap-2 bg-blue-500 hover:bg-blue-600"
            >
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trending" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredBlogs
                  .sort((a, b) => b.likes - a.likes)
                  .slice(0, 3)
                  .map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredBlogs
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 3)
                  .map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="tech" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredBlogs
                  .filter((blog) =>
                    blog.tags.some((tag) =>
                      [
                        "tech",
                        "technology",
                        "engineering",
                        "software",
                        "ai",
                      ].includes(tag.toLowerCase())
                    )
                  )
                  .map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="career" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredBlogs
                  .filter((blog) =>
                    blog.tags.some((tag) =>
                      [
                        "career",
                        "job",
                        "professional",
                        "work",
                        "leadership",
                      ].includes(tag.toLowerCase())
                    )
                  )
                  .map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <Book className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-medium mb-2">No blogs found</h3>
              <p className="text-muted-foreground">
                No blogs match your search criteria. Try different keywords or
                categories.
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
  const initials = blog.author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="border rounded-md overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="rounded-full text-xs font-medium py-1 px-3"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Link to={`/blog/${blog.id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {blog.excerpt}
        </p>

        <div className="flex items-center mt-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-700 mr-3">
              {initials}
            </div>
            <div>
              <p className="text-sm font-medium">{blog.author.name}</p>
              <p className="text-xs text-gray-500">
                {blog.author.role}, {blog.author.company}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 pt-4 border-t text-gray-500 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{blog.date}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{blog.likes}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{blog.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Blogs;
