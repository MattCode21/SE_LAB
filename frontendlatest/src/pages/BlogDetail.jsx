import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Calendar,
  ThumbsUp,
  MessageSquare,
  Clock,
  Share2,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { getBlogById, getRelatedPosts, formatDate } from "@/data/blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate a loading delay to demonstrate skeleton loading states
    const timer = setTimeout(() => {
      const fetchedBlog = getBlogById(id);

      if (fetchedBlog) {
        setBlog(fetchedBlog);
        // Get related posts based on the first tag of current blog
        const tag = fetchedBlog.tags[0];
        setRelatedPosts(getRelatedPosts(id, tag, 2));
      } else {
        // Handle blog not found
        navigate("/not-found", { replace: true });
      }

      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [id, navigate]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (isLoading || !blog) {
    return <BlogDetailSkeleton />;
  }

  const initials = blog.author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-20">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-6 flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>

          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8 animate-slide-up">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="rounded-full px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-700">
                {initials}
              </div>

              <div>
                <h3 className="font-medium">{blog.author.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {blog.author.role}, {blog.author.company}
                </p>
              </div>

              <div className="flex items-center ml-auto gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readingTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="max-w-4xl mx-auto mb-8 rounded-lg overflow-hidden shadow-md animate-image-fade-in">
            <AspectRatio ratio={16 / 9}>
              {!imageLoaded && (
                <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
              )}
              <img
                src={blog.coverImage}
                alt={blog.title}
                className={`w-full h-full object-cover ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={handleImageLoad}
              />
            </AspectRatio>
          </div>

          {/* Blog Content */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
            <div
              className="blog-content prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Engagement */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t">
              <div className="flex items-center gap-6">
                <Button variant="outline" className="gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  Like ({blog.likes})
                </Button>
                <Button variant="outline" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Comment ({blog.comments})
                </Button>
              </div>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <Link to={`/blog/${post.id}`} key={post.id}>
                    <Card className="h-full hover:shadow-md transition-shadow duration-300 border">
                      <CardHeader className="pb-3">
                        <CardTitle className="line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="line-clamp-2 mb-4">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-700 text-xs">
                              {post.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <span className="text-sm font-medium">
                              {post.author.name}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {formatDate(post.date)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="max-w-4xl mx-auto mt-12 flex justify-between">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <Button asChild className="bg-blue-500 hover:bg-blue-600">
              <Link to="/blogs" className="gap-2">
                View All Blogs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Skeleton loading state component
const BlogDetailSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-6 h-10 w-20">
            <Skeleton className="h-full w-full" />
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-6 w-16 rounded-full" />
              ))}
            </div>

            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-12 w-1/2 mb-6" />

            <div className="flex items-center gap-4 mb-8">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div>
                <Skeleton className="h-5 w-36 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <AspectRatio ratio={16 / 9}>
              <Skeleton className="w-full h-full rounded-lg" />
            </AspectRatio>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
            <Skeleton className="h-8 w-1/3 my-6" />
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i + "a"} className="h-4 w-full" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
