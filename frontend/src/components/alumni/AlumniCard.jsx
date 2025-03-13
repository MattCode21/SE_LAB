
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const AlumniCard = ({ alumni }) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="bg-primary/10 h-24"></div>
      <div className="flex justify-center">
        <div className="relative -mt-12">
          <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold border-4 border-background">
            {alumni.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </div>
      <CardContent className="pt-4 text-center">
        <h3 className="font-semibold text-xl">{alumni.name}</h3>
        <p className="text-muted-foreground text-sm">{alumni.batch} • {alumni.department}</p>
        <p className="font-medium mt-2">{alumni.company}</p>
        <p className="text-sm text-muted-foreground">{alumni.designation}</p>
        <p className="text-sm mt-1">{alumni.location}</p>
        <div className="flex justify-center space-x-3 mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-4 py-1 rounded-full text-sm">
                Connect
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Connect with {alumni.name}</DialogTitle>
                <DialogDescription>
                  Send a connection request with a personalized message
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <Textarea 
                  placeholder={`Hi ${alumni.name}, I'd like to connect with you...`}
                  className="min-h-[100px]"
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button className="gap-2">
                  <Send className="h-4 w-4" />
                  Send Request
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <button className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-colors px-4 py-1 rounded-full text-sm">
            View Profile
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlumniCard;
