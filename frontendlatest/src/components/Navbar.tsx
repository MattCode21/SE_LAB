import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Book, 
  Calendar, 
  Menu, 
  User, 
  Briefcase, 
  Award, 
  X,
  LogOut,
  Info,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
    // Redirect to home after logout
    window.location.href = "/";
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary font-semibold text-xl"
        >
          <span className="bg-primary text-white rounded-md h-8 w-8 flex items-center justify-center">
            A
          </span>
          <span className="hidden md:inline">Alumni Affairs Network-NITC</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/alumni">Connect</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/alumni-chat">Chat</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/recaaa">RECAAA</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/profile" className="flex items-center gap-2 w-full">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer">
                <LogOut className="h-4 w-4 mr-2" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-muted-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 p-4">
          <div className="flex justify-end">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <MobileNavLink to="/" icon={<User className="h-5 w-5" />} onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/events" icon={<Calendar className="h-5 w-5" />} onClick={() => setMobileMenuOpen(false)}>
              Events
            </MobileNavLink>
            <MobileNavLink to="/blogs" icon={<Book className="h-5 w-5" />} onClick={() => setMobileMenuOpen(false)}>
              Blogs
            </MobileNavLink>
         
            <MobileNavLink to="/alumni" icon={<User className="h-5 w-5" />} onClick={() => setMobileMenuOpen(false)}>
              Connect
            </MobileNavLink>
            <MobileNavLink to="/jobs" icon={<Briefcase className="h-5 w-5" />} onClick={() => setMobileMenuOpen(false)}>
              Jobs
            </MobileNavLink>
            <MobileNavLink to="/alumni-chat" icon={<MessageSquare className="h-5 w-5" />} onClick={() => setMobileMenuOpen(false)}>
               Chat
            </MobileNavLink>
      
            
            <MobileNavLink to="/gallery" icon={<Award className="h-5 w-5" />} onClick={() => setMobileMenuOpen(false)}>
              Gallery
            </MobileNavLink>
            <MobileNavLink to="/recaaa" icon={<Award className="h-5 w-5" />} onClick={() => setMobileMenuOpen(false)}>
              RECAAA
            </MobileNavLink>
            <MobileNavLink to="/about" icon={<Info className="h-5 w-5" />} onClick={() => setMobileMenuOpen(false)}>
              About Us
            </MobileNavLink>
            <MobileNavLink to="/profile" icon={<User className="h-5 w-5" />} onClick={() => setMobileMenuOpen(false)}>
              Profile
            </MobileNavLink>
            <div 
              className="flex items-center gap-3 text-xl font-medium text-red-500 cursor-pointer" 
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
            >
              <LogOut className="h-5 w-5" />
              Logout
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        "text-muted-foreground hover:text-foreground hover:bg-secondary"
      )}
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
}

function MobileNavLink({ to, icon, children, onClick }: MobileNavLinkProps) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 text-xl font-medium"
      onClick={onClick}
    >
      {icon}
      {children}
    </Link>
  );
}
