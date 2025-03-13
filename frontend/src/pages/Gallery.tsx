
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Users, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Gallery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Memories</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore a collection of cherished moments from our alumni community. View photos from batch reunions, 
              campus events, and alumni gatherings throughout the years.
            </p>
          </div>
          
          {/* Upload CTA */}
          <div className="mb-8 bg-secondary rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Share Your Memories</h3>
              <p className="text-muted-foreground">Have photos from your college days or recent alumni events? Share them with the community!</p>
            </div>
            <Button className="gap-2">
              <Upload size={16} />
              Upload Photos
            </Button>
          </div>
          
          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full md:w-auto">
                <TabsTrigger value="all">All Photos</TabsTrigger>
                <TabsTrigger value="batches">Batch Photos</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="campus">Campus</TabsTrigger>
                <TabsTrigger value="reunions">Reunions</TabsTrigger>
              </TabsList>
            
              {/* Gallery Grid */}
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryItems.map((item, index) => (
                    <GalleryItem key={index} {...item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="batches" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryItems.filter(item => item.category === "batch").map((item, index) => (
                    <GalleryItem key={index} {...item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="events" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryItems.filter(item => item.category === "event").map((item, index) => (
                    <GalleryItem key={index} {...item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="campus" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryItems.filter(item => item.category === "campus").map((item, index) => (
                    <GalleryItem key={index} {...item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reunions" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryItems.filter(item => item.category === "reunion").map((item, index) => (
                    <GalleryItem key={index} {...item} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-10 w-full md:w-[200px]" placeholder="Search photos..." />
              </div>
              <Button variant="outline" size="icon">
                <Filter size={16} />
              </Button>
            </div>
          </div>
          
          {/* Load More */}
          <div className="flex justify-center mb-12">
            <Button variant="outline" className="gap-2">
              Load More Photos
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;

// Gallery Item Component
interface GalleryItemProps {
  imageUrl: string;
  title: string;
  date: string;
  category: "batch" | "event" | "campus" | "reunion";
  batchYear?: string;
}

const GalleryItem = ({ imageUrl, title, date, category, batchYear }: GalleryItemProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-border group hover-lift transition-all-300">
      <div className="relative aspect-square bg-muted overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-secondary">
          <ImageIcon className="h-16 w-16 text-muted-foreground" />
        </div>
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs text-muted-foreground">{date}</p>
          {batchYear && (
            <div className="flex items-center gap-1 text-xs">
              <Users size={12} />
              <span>Batch {batchYear}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Sample gallery data
const galleryItems: GalleryItemProps[] = [
  {
    imageUrl: "",
    title: "Annual Alumni Meet 2023",
    date: "Dec 15, 2023",
    category: "event",
  },
  {
    imageUrl: "",
    title: "Class of 2010 Reunion",
    date: "Nov 5, 2023",
    category: "reunion",
    batchYear: "2010"
  },
  {
    imageUrl: "",
    title: "Campus Spring Festival",
    date: "Mar 22, 2023",
    category: "campus",
  },
  {
    imageUrl: "",
    title: "Batch of 2015 Graduation",
    date: "Jun 18, 2015",
    category: "batch",
    batchYear: "2015"
  },
  {
    imageUrl: "",
    title: "Alumni Sports Day",
    date: "Aug 8, 2023",
    category: "event",
  },
  {
    imageUrl: "",
    title: "Class of 2005 Reunion",
    date: "Oct 12, 2023",
    category: "reunion",
    batchYear: "2005"
  },
  {
    imageUrl: "",
    title: "New Campus Building Inauguration",
    date: "Jan 30, 2023",
    category: "campus",
  },
  {
    imageUrl: "",
    title: "Batch of 2019 Farewell",
    date: "May 15, 2019",
    category: "batch",
    batchYear: "2019"
  },
];
