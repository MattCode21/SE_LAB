
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, MapPin, Users, Award, ThumbsUp, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function FeaturedContent() {
  return (
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Discover
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Happening</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay connected with the latest events, job opportunities, and stories from our alumni community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Event */}
          <FeaturedEvent />
          
          {/* Featured Job */}
          <FeaturedJob />
          
          {/* Featured Story */}
          <FeaturedStory />
        </div>
        
        {/* Achievement Showcase */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Recognition</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Alumni Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating the outstanding accomplishments of our alumni community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard 
                key={index}
                name={achievement.name}
                award={achievement.award}
                year={achievement.year}
                image={achievement.image}
                batch={achievement.batch}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedEvent() {
  return (
    <Link to="/events">
      <Card className="hover-lift h-full">
        <CardHeader className="relative p-0">
          <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-t-lg" />
          <Badge className="absolute top-4 left-4 bg-primary text-white">
            Upcoming Event
          </Badge>
        </CardHeader>
        <CardContent className="pt-6">
          <CardTitle className="mb-2">Annual Alumni Reunion 2024</CardTitle>
          <CardDescription className="mb-4">
            Join us for a weekend of reconnecting, networking, and celebrating our alma mater.
          </CardDescription>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>June 15-17, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>University Campus</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>120+ attending</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function FeaturedJob() {
  return (
    <Link to="/jobs">
      <Card className="hover-lift h-full">
        <CardHeader className="relative p-0">
          <div className="h-48 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-t-lg" />
          <Badge className="absolute top-4 left-4 bg-emerald-500 text-white">
            Featured Job
          </Badge>
        </CardHeader>
        <CardContent className="pt-6">
          <CardTitle className="mb-2">Senior Product Designer</CardTitle>
          <CardDescription className="mb-4">
            TechCorp is looking for an experienced product designer to join their team.
          </CardDescription>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>TechCorp Inc.</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA (Remote)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Posted by: Alumni (Batch 2015)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function FeaturedStory() {
  return (
    <Link to="/stories">
      <Card className="hover-lift h-full">
        <CardHeader className="relative p-0">
          <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-500 rounded-t-lg" />
          <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
            Top Story
          </Badge>
        </CardHeader>
        <CardContent className="pt-6">
          <CardTitle className="mb-2">My Journey from College to Silicon Valley</CardTitle>
          <CardDescription className="mb-4">
            How my university experience prepared me for a career in tech innovation.
          </CardDescription>
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Rajesh Patel</p>
              <p className="text-xs text-muted-foreground">Class of 2010</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>324</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>42</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

interface AchievementCardProps {
  name: string;
  award: string;
  year: string;
  image: string;
  batch: string;
}

function AchievementCard({ name, award, year, image, batch }: AchievementCardProps) {
  return (
    <Card className={cn("overflow-hidden", "hover-lift")}>
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/3 bg-muted">
          <div className="h-40 md:h-full bg-gradient-to-br from-blue-400 to-indigo-600" />
        </div>
        <div className="w-full md:w-2/3 p-6">
          <Badge variant="outline" className="mb-2 bg-primary/10 text-primary border-primary/20">
            {award}
          </Badge>
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Class of {batch}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Award className="h-4 w-4 text-primary" />
            <span>Recognized in {year}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

const achievements = [
  {
    name: "Dr. Priya Sharma",
    award: "Alumnus of the Year",
    year: "2023",
    image: "",
    batch: "2005"
  },
  {
    name: "Arjun Mehta",
    award: "Rising Star Award",
    year: "2023",
    image: "",
    batch: "2018"
  },
  {
    name: "Neha Gupta",
    award: "Tech Innovator Award",
    year: "2023",
    image: "",
    batch: "2012"
  }
];
