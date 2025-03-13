import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, UserPlus, Users } from "lucide-react";
import { alumniProfiles } from "../../data/alumniData";

const AlumniChat = () => {
  const [message, setMessage] = useState("");
  
  // Sample connected friends data
  const connectedFriends = [
    {
      id: 1,
      name: "Rahul Sharma",
      avatar: "RS",
      isOnline: true,
    },
    {
      id: 2,
      name: "Priya Gupta",
      avatar: "PG",
      isOnline: true,
    },
    {
      id: 3,
      name: "Arjun Nair",
      avatar: "AN",
      isOnline: false,
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
      // Here you would typically handle sending the message to your backend
    }
  };

  return (
    <Card className="mb-12">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Chat
            </CardTitle>
            <CardDescription>Connect and chat with your friends</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <Users className="h-4 w-4" />
            Connected Friends
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Friends List - now takes up less space */}
          <div className="border rounded-md p-3 md:col-span-1">
            <h3 className="font-medium mb-3 flex items-center justify-between">
              <span>Connected Friends</span>
              <span className="bg-primary text-primary-foreground text-xs py-1 px-2 rounded-full">{connectedFriends.length}</span>
            </h3>
            <div className="space-y-3">
              {connectedFriends.map(friend => (
                <div key={friend.id} className="flex items-center gap-2 p-2 hover:bg-secondary/10 rounded-md cursor-pointer">
                  <div className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" />
                      <AvatarFallback>{friend.avatar}</AvatarFallback>
                    </Avatar>
                    {friend.isOnline && (
                      <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-1 ring-background"></span>
                    )}
                  </div>
                  <span className="text-sm font-medium">{friend.name}</span>
                </div>
              ))}
              
              <div className="mt-4 p-3 bg-secondary/10 rounded-md text-center text-sm">
                <p className="mb-2">Connect with more alumni to chat with them</p>
                <Button variant="secondary" size="sm" className="w-full gap-1">
                  <UserPlus className="h-4 w-4" />
                  Find Alumni
                </Button>
              </div>
            </div>
          </div>
          
          {/* Chat Area - now takes up more space */}
          <div className="md:col-span-5">
            <div className="h-72 overflow-y-auto space-y-4 mb-4 p-3 border rounded-md">
              <ChatMessage 
                name="Rahul Sharma"
                message="Hello! How is everyone doing?"
                time="10:30 AM"
                avatar="RS"
                isOwn={false}
              />
              <ChatMessage 
                name="You"
                message="I'm doing great. Working on a new project these days."
                time="10:32 AM"
                avatar="YO"
                isOwn={true}
              />
              <ChatMessage 
                name="Rahul Sharma"
                message="That sounds interesting! What kind of project is it?"
                time="10:35 AM"
                avatar="RS"
                isOwn={false}
              />
              <ChatMessage 
                name="You"
                message="It's a web application for alumni networking. Kind of like what we're using now!"
                time="10:40 AM"
                avatar="YO"
                isOwn={true}
              />
              <ChatMessage 
                name="Rahul Sharma"
                message="Wow, that's awesome! Let me know if you need any help with testing."
                time="10:42 AM"
                avatar="RS"
                isOwn={false}
              />
            </div>
            
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input 
                placeholder="Type your message..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" size="sm" className="gap-1">
                <Send className="h-4 w-4" />
                Send
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ChatMessage = ({ name, message, time, avatar, isOwn }) => {
  return (
    <div className={`flex gap-3 ${isOwn ? 'flex-row-reverse' : ''}`}>
      <Avatar className="h-8 w-8">
        <AvatarImage src="" />
        <AvatarFallback>{avatar}</AvatarFallback>
      </Avatar>
      <div className={`flex-1 ${isOwn ? 'text-right' : ''}`}>
        <div className={`flex items-baseline ${isOwn ? 'justify-end' : 'justify-between'} mb-1`}>
          <p className="font-medium text-sm">{name}</p>
          <span className="text-xs text-muted-foreground ml-2">{time}</span>
        </div>
        <div className={`inline-block p-3 rounded-lg ${
          isOwn ? 'bg-primary text-primary-foreground' : 'bg-secondary/20'
        }`}>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AlumniChat;
