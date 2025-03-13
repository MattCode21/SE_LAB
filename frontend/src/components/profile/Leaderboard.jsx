
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Star, 
  Award, 
  BookOpen, 
  MessageSquare, 
  Users, 
  Heart,
  Calendar,
  Medal,
  ThumbsUp
} from "lucide-react";

const Leaderboard = () => {
  const [leaderboardPeriod, setLeaderboardPeriod] = useState("monthly");

  const leaderboardData = {
    monthly: [
      { 
        id: 1, 
        name: "Rahul Kumar", 
        points: 520, 
        rank: 1, 
        achievements: ["5 Blog Posts", "10 Comments", "3 Events Organized"], 
        isCurrentUser: true 
      },
      { 
        id: 2, 
        name: "Priya Sharma", 
        points: 480, 
        rank: 2, 
        achievements: ["3 Blog Posts", "15 Comments"], 
        isCurrentUser: false 
      },
      { 
        id: 3, 
        name: "Amit Patel", 
        points: 450, 
        rank: 3, 
        achievements: ["4 Blog Posts", "5 Events Attended"], 
        isCurrentUser: false 
      },
      { 
        id: 4, 
        name: "Neha Gupta", 
        points: 420, 
        rank: 4, 
        achievements: ["2 Blog Posts", "8 Comments", "2 Events Organized"], 
        isCurrentUser: false 
      },
      { 
        id: 5, 
        name: "Vikram Singh", 
        points: 400, 
        rank: 5, 
        achievements: ["1 Blog Post", "12 Comments", "4 Events Attended"], 
        isCurrentUser: false 
      },
    ],
    yearly: [
      { 
        id: 1, 
        name: "Priya Sharma", 
        points: 3450, 
        rank: 1, 
        achievements: ["25 Blog Posts", "120 Comments", "12 Events Organized"], 
        isCurrentUser: false 
      },
      { 
        id: 2, 
        name: "Rahul Kumar", 
        points: 3200, 
        rank: 2, 
        achievements: ["20 Blog Posts", "80 Comments", "15 Events Attended"], 
        isCurrentUser: true 
      },
      { 
        id: 3, 
        name: "Vikram Singh", 
        points: 2900, 
        rank: 3, 
        achievements: ["18 Blog Posts", "95 Comments"], 
        isCurrentUser: false 
      },
      { 
        id: 4, 
        name: "Neha Gupta", 
        points: 2750, 
        rank: 4, 
        achievements: ["15 Blog Posts", "70 Comments", "10 Events Organized"], 
        isCurrentUser: false 
      },
      { 
        id: 5, 
        name: "Amit Patel", 
        points: 2600, 
        rank: 5, 
        achievements: ["16 Blog Posts", "60 Comments", "8 Events Attended"], 
        isCurrentUser: false 
      },
    ],
    allTime: [
      { 
        id: 1, 
        name: "Priya Sharma", 
        points: 12500, 
        rank: 1, 
        achievements: ["80 Blog Posts", "350 Comments", "40 Events Organized"], 
        isCurrentUser: false 
      },
      { 
        id: 2, 
        name: "Vikram Singh", 
        points: 11200, 
        rank: 2, 
        achievements: ["65 Blog Posts", "320 Comments", "30 Events Attended"], 
        isCurrentUser: false 
      },
      { 
        id: 3, 
        name: "Rahul Kumar", 
        points: 10800, 
        rank: 3, 
        achievements: ["60 Blog Posts", "280 Comments", "25 Events Organized"], 
        isCurrentUser: true 
      },
      { 
        id: 4, 
        name: "Neha Gupta", 
        points: 9500, 
        rank: 4, 
        achievements: ["50 Blog Posts", "250 Comments", "20 Events Attended"], 
        isCurrentUser: false 
      },
      { 
        id: 5, 
        name: "Amit Patel", 
        points: 8900, 
        rank: 5, 
        achievements: ["45 Blog Posts", "220 Comments", "18 Events Organized"], 
        isCurrentUser: false 
      },
    ]
  };

  const rankIconMap = {
    1: <Trophy className="h-5 w-5 text-amber-500" />,
    2: <Medal className="h-5 w-5 text-slate-400" />,
    3: <Medal className="h-5 w-5 text-amber-700" />,
    default: <Star className="h-5 w-5 text-muted-foreground" />
  };

  const getActivityIcon = (achievement) => {
    if (achievement.includes("Blog")) return <BookOpen className="h-4 w-4" />;
    if (achievement.includes("Comment")) return <MessageSquare className="h-4 w-4" />;
    if (achievement.includes("Event")) return <Calendar className="h-4 w-4" />;
    return <Award className="h-4 w-4" />;
  };

  const getRankIcon = (rank) => {
    return rankIconMap[rank] || rankIconMap.default;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg">Leaderboard</CardTitle>
            <CardDescription>Alumni engagement points and rankings</CardDescription>
          </div>
          <div>
            <Tabs value={leaderboardPeriod} onValueChange={setLeaderboardPeriod} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
                <TabsTrigger value="allTime">All Time</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {leaderboardData[leaderboardPeriod].map((user) => (
            <div 
              key={user.id} 
              className={`flex items-center justify-between p-3 rounded-lg ${
                user.isCurrentUser ? "bg-primary/10 border border-primary/20" : "bg-secondary"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-muted">
                  {getRankIcon(user.rank)}
                </div>
                <div>
                  <p className="font-medium flex items-center gap-2">
                    {user.name} 
                    {user.isCurrentUser && (
                      <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">You</Badge>
                    )}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {user.achievements.slice(0, 2).map((achievement, index) => (
                      <Badge key={index} variant="outline" className="text-xs flex items-center gap-1">
                        {getActivityIcon(achievement)}
                        <span>{achievement}</span>
                      </Badge>
                    ))}
                    {user.achievements.length > 2 && (
                      <Badge variant="outline" className="text-xs">+{user.achievements.length - 2} more</Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-lg">{user.points} pts</div>
                <div className="text-xs text-muted-foreground">Rank #{user.rank}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Button variant="outline" className="w-full">
            <Users className="h-4 w-4 mr-2" />
            View Full Leaderboard
          </Button>
        </div>
        
        <div className="mt-6 bg-muted p-4 rounded-lg space-y-2">
          <h4 className="font-medium text-sm flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            How Points are Earned
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li className="flex items-center gap-2">
              <BookOpen className="h-3 w-3" /> Blog Post: 50 points
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="h-3 w-3" /> Comment: 10 points
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="h-3 w-3" /> Event Attendance: 20 points
            </li>
            <li className="flex items-center gap-2">
              <Heart className="h-3 w-3" /> Likes Received: 5 points
            </li>
            <li className="flex items-center gap-2">
              <ThumbsUp className="h-3 w-3" /> Recommendations: 25 points
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
