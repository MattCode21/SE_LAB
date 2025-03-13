
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Badge } from "@/components/ui/badge";
import { Calendar, ListFilter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Events = () => {
  const [filter, setFilter] = useState("all");
  
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
            <Badge variant="outline" className="mb-4">Events & Meetups</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events Calendar</h1>
            <p className="text-muted-foreground max-w-2xl">
              Stay connected with upcoming alumni gatherings, reunions, and college events. Join fellow alumni for
              networking, reminiscing, and building new memories.
            </p>
          </div>
          
          {/* Featured Event */}
          <div className="mb-12">
            <EventCard
              title="Annual Alumni Reunion 2024"
              date="June 15-17, 2024"
              time="All day"
              location="University Main Campus"
              description="Join us for the biggest alumni event of the year! Connect with old friends, make new connections, and celebrate our alma mater with three days of activities, panels, and entertainment."
              attendeeCount={120}
              isUpcoming={true}
              variant="featured"
            />
          </div>
          
          {/* Filters */}
          <div className="mb-10 bg-secondary rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <h2 className="text-2xl font-bold mb-4 md:mb-0">Find Events</h2>
              <div className="flex gap-4">
                <Tabs defaultValue="list" className="w-full md:w-auto">
                  <TabsList>
                    <TabsTrigger value="list">List View</TabsTrigger>
                    <TabsTrigger value="calendar">Calendar</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Input placeholder="Search events..." />
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="reunion">Reunion</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="networking">Networking</SelectItem>
                    <SelectItem value="ceremony">Ceremony</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="campus">On Campus</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="city">In City</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button className="w-full gap-2">
                  <ListFilter className="h-4 w-4" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
          
          {/* Event Categories */}
          <div className="mb-10">
            <div className="flex overflow-x-auto pb-2 gap-2">
              <Button 
                variant={filter === "all" ? "default" : "outline"} 
                onClick={() => setFilter("all")}
                className="rounded-full"
              >
                All Events
              </Button>
              <Button 
                variant={filter === "upcoming" ? "default" : "outline"} 
                onClick={() => setFilter("upcoming")}
                className="rounded-full whitespace-nowrap"
              >
                Upcoming
              </Button>
              <Button 
                variant={filter === "batch" ? "default" : "outline"} 
                onClick={() => setFilter("batch")}
                className="rounded-full whitespace-nowrap"
              >
                Batch Reunions
              </Button>
              <Button 
                variant={filter === "college" ? "default" : "outline"} 
                onClick={() => setFilter("college")}
                className="rounded-full whitespace-nowrap"
              >
                College Events
              </Button>
              <Button 
                variant={filter === "meetups" ? "default" : "outline"} 
                onClick={() => setFilter("meetups")}
                className="rounded-full"
              >
                Meetups
              </Button>
            </div>
          </div>
          
          {/* Events Grid */}
          <div className="mb-16">
            <Tabs defaultValue="list">
              <TabsContent value="list" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {events.map((event, index) => (
                    <EventCard
                      key={index}
                      title={event.title}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      description={event.description}
                      attendeeCount={event.attendeeCount}
                      isUpcoming={event.isUpcoming}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="calendar" className="mt-0">
                <div className="bg-card p-8 rounded-lg border border-border">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold">June 2024</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        Today
                      </Button>
                      <Button variant="outline" size="icon" size-sm>
                        &lt;
                      </Button>
                      <Button variant="outline" size="icon" size-sm>
                        &gt;
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div key={day} className="text-center font-medium p-2">
                        {day}
                      </div>
                    ))}
                    
                    {Array.from({ length: 30 }).map((_, i) => {
                      const day = i + 1;
                      const hasEvent = [3, 10, 15, 16, 17, 22].includes(day);
                      return (
                        <div 
                          key={i} 
                          className={`
                            p-2 min-h-[80px] border border-border rounded-md 
                            ${hasEvent ? "bg-primary/5" : ""}
                            hover:bg-secondary transition-colors
                          `}
                        >
                          <div className="text-right mb-1">{day}</div>
                          {hasEvent && (
                            <div className="text-xs bg-primary text-white rounded p-1 truncate">
                              {day === 3 ? "Tech Workshop" : 
                              day >= 15 && day <= 17 ? "Alumni Reunion" : "Meetup"}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Create Event CTA */}
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Want to organize an alumni meetup?</h3>
                <p className="text-muted-foreground max-w-md">
                  Create your own event and invite fellow alumni to join. It's a great way to reconnect with old friends and grow your network.
                </p>
              </div>
              <Button size="lg" className="md:min-w-[180px]">
                Create Event
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;

// Sample event data
const events = [
  {
    title: "Tech Industry Workshop",
    date: "June 3, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual (Zoom)",
    description: "Join industry experts for a workshop on the latest tech trends and career opportunities.",
    attendeeCount: 85,
    isUpcoming: true,
  },
  {
    title: "Class of 2010 Batch Reunion",
    date: "June 22, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "Campus Auditorium",
    description: "Celebrate 14 years since graduation with your batchmates. Dinner and entertainment provided.",
    attendeeCount: 42,
    isUpcoming: true,
  },
  {
    title: "Networking Mixer in Bangalore",
    date: "July 5, 2024",
    time: "7:30 PM - 10:00 PM",
    location: "The Leela Palace, Bangalore",
    description: "Connect with alumni in the Bangalore region for an evening of networking and refreshments.",
    attendeeCount: 30,
    isUpcoming: true,
  },
  {
    title: "College Foundation Day",
    date: "August 12, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "College Campus",
    description: "Join the celebration of our college's foundation day with special events and alumni recognition.",
    attendeeCount: 120,
    isUpcoming: true,
  }
];
