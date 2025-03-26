import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const RecaaaSection = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">
            RECCAA - NIT Calicut Alumni Association
          </h2>
          <p className="text-muted-foreground mb-4">
            RECCAA (Regional Engineering College and National Institute of
            Technology Calicut Alumni Association) is the official alumni
            association of NIT Calicut. The association connects alumni from
            across the globe, fostering a sense of community and providing
            valuable networking opportunities.
          </p>
          <p className="mb-6">Joining RECCAA gives you access to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Exclusive alumni networking events and reunions</li>
            <li>Professional development resources and career opportunities</li>
            <li>Mentorship programs to connect with current students</li>
            <li>Regular newsletters and updates from your alma mater</li>
            <li>Opportunities to give back to the institution</li>
          </ul>
          <Button
            className="gap-2"
            onClick={() =>
              window.open(
                "https://reccaaclub.in/NITCAAPartnership_rcs.php",
                "_blank"
              )
            }
          >
            <ExternalLink className="h-4 w-4" />
            Visit RECCAA Website
          </Button>
        </div>

        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming RECCAA Events</CardTitle>
              <CardDescription>
                Join these exciting alumni events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <EventItem
                  title="Annual General Meeting 2024"
                  date="May 15, 2024"
                  location="NIT Calicut Campus"
                  attendees="150+ expected"
                />
                <EventItem
                  title="Alumni Networking Night"
                  date="June 22, 2024"
                  location="Bangalore"
                  attendees="80+ expected"
                />
                <EventItem
                  title="RECCAA Global Reunion"
                  date="August 12-14, 2024"
                  location="Virtual Event"
                  attendees="500+ expected"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const EventItem = ({ title, date, location, attendees }) => {
  return (
    <div className="border-b pb-3 last:border-0 last:pb-0">
      <div className="flex items-start gap-3 mb-1">
        <Badge
          variant="outline"
          className="bg-primary/10 text-primary border-primary/20 mt-1"
        >
          EVENT
        </Badge>
        <div>
          <h4 className="font-medium">{title}</h4>
          <div className="text-sm text-muted-foreground mt-1 space-y-1">
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1 1 16 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5" />
              <span>{attendees}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecaaaSection;
