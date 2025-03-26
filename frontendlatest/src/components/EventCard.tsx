
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  attendeeCount: number;
  isUpcoming: boolean;
  variant?: "default" | "featured";
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  imageUrl,
  attendeeCount,
  isUpcoming,
  variant = "default"
}: EventCardProps) {
  const isFeatured = variant === "featured";
  
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300",
      "hover:shadow-card hover-lift",
      isFeatured && "md:col-span-2"
    )}>
      <div className={cn(
        "flex flex-col h-full",
        isFeatured && "md:flex-row"
      )}>
        {/* Image */}
        <div className={cn(
          "relative h-48",
          isFeatured ? "md:w-2/5 md:h-auto" : ""
        )}>
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r",
            isUpcoming ? "from-blue-500 to-indigo-600" : "from-gray-500 to-gray-600"
          )} />
          
          {isUpcoming && (
            <Badge className="absolute top-4 left-4 bg-primary">
              Upcoming
            </Badge>
          )}
        </div>
        
        {/* Content */}
        <div className={cn(
          "flex flex-col h-full",
          isFeatured ? "md:w-3/5" : ""
        )}>
          <CardHeader>
            <h3 className="text-xl font-bold">{title}</h3>
          </CardHeader>
          
          <CardContent className="flex-grow">
            <p className="text-muted-foreground mb-4">
              {description}
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{time}</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{attendeeCount} attending</span>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="pt-0">
            <Button className="w-full">
              {isUpcoming ? "Register Now" : "View Details"}
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
