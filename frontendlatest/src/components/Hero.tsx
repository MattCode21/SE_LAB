
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950" />
        <div className="absolute top-0 -right-10 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-10 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto md:mx-0">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full animate-fade-in">
            Connect with your alma mater
          </span>
          
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-up">
            Where College Memories <br />
            <span className="text-primary">Meet Future Opportunities</span>
          </h1>
          
          <p className="mb-8 text-lg md:text-xl text-muted-foreground animate-slide-up" style={{animationDelay: "0.1s"}}>
            Join our thriving alumni community to reconnect with classmates, 
            discover career opportunities, and stay involved with your alma mater.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/login?tab=registeryy">Join the Community</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/login" className="flex items-center gap-2">
                Already a Member <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-4 animate-slide-up" style={{animationDelay: "0.3s"}}>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">5,000+</span> alumni already connected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
