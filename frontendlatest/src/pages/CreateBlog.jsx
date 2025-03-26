
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookText, ImageIcon, Tags, Plus, X, Save, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const { toast } = useToast();

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput) && tags.length < 5) {
      setTags([...tags, tagInput]);
      setTagInput("");
    } else if (tags.length >= 5) {
      toast({
        title: "Maximum tags reached",
        description: "You can add up to 5 tags for a blog post",
        variant: "destructive",
      });
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handlePublish = () => {
    // In a real app, this would send data to the server
    if (!title || !content) {
      toast({
        title: "Missing information",
        description: "Please add both title and content to your blog post",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Blog submitted for review",
      description: "Your blog post has been submitted and will be published soon",
    });
    
    // Navigate back to blogs page after successful submission
    // In a real app, this would use React Router's navigate
    setTimeout(() => {
      window.location.href = "/blogs";
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/blogs">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <h1 className="text-2xl md:text-3xl font-bold">Create New Blog Post</h1>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Save className="h-4 w-4" />
                <span className="hidden sm:inline">Save Draft</span>
              </Button>
              <Button className="gap-2" onClick={handlePublish}>
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">Publish</span>
              </Button>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Blog Details</CardTitle>
              <CardDescription>
                Share your experiences, insights, and knowledge with the alumni community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="blog-title">Blog Title</Label>
                <Input 
                  id="blog-title" 
                  placeholder="Enter an engaging title for your blog post" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="blog-category">Category</Label>
                <Select>
                  <SelectTrigger id="blog-category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="career">Career & Professional Development</SelectItem>
                    <SelectItem value="education">Education & Learning</SelectItem>
                    <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                    <SelectItem value="memories">University Memories</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="blog-content">Blog Content</Label>
                <div className="border rounded-md p-1 mb-2">
                  <div className="flex flex-wrap gap-1 p-1 mb-2">
                    <Button variant="ghost" size="sm" type="button">
                      <BookText className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" type="button">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Textarea 
                  id="blog-content" 
                  placeholder="Write your blog content here..." 
                  className="min-h-[300px]"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="blog-tags" className="flex items-center gap-2">
                  <Tags className="h-4 w-4" />
                  Tags (max 5)
                </Label>
                <div className="flex gap-2 mb-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="gap-1">
                      {tag}
                      <button 
                        type="button" 
                        onClick={() => handleRemoveTag(tag)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input 
                    id="blog-tags"
                    placeholder="Add a tag (press Enter)" 
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="outline"
                    onClick={handleAddTag}
                    disabled={!tagInput || tags.length >= 5}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-md p-4 bg-secondary/50">
                <div className="flex items-start gap-2">
                  <ImageIcon className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Featured Image (Optional)</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Add a cover image to make your blog post more engaging
                    </p>
                    <Button variant="outline" size="sm">Upload Image</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link to="/blogs">Cancel</Link>
              </Button>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" className="flex-1">Preview</Button>
                <Button className="flex-1" onClick={handlePublish}>Publish</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateBlog;
