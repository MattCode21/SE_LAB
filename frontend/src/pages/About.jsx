
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Alumni Affairs Network-NITC";
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Alumni Affairs Network
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                The Alumni Affairs Network of NIT Calicut (AAN-NITC) was established with a vision to create a vibrant, 
                engaged community that connects generations of NITC graduates. Our mission is to foster meaningful 
                relationships between alumni, current students, and the institution, creating opportunities for personal 
                and professional growth through collaboration, networking, and knowledge sharing.
              </p>
              <p className="text-muted-foreground mb-4">
                We strive to harness the collective expertise and experience of our alumni to support the ongoing 
                development of NIT Calicut and to enhance the value of an NITC education for all stakeholders.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8">Our Values</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Connection:</span> Building lasting relationships between alumni across generations
                </li>
                <li>
                  <span className="font-medium text-foreground">Excellence:</span> Upholding the high standards of our institution in all we do
                </li>
                <li>
                  <span className="font-medium text-foreground">Innovation:</span> Embracing new ideas and approaches to alumni engagement
                </li>
                <li>
                  <span className="font-medium text-foreground">Service:</span> Giving back to our alma mater and wider community
                </li>
                <li>
                  <span className="font-medium text-foreground">Inclusivity:</span> Welcoming alumni from all backgrounds and experiences
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="NITC Alumni Gathering" 
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">About NIT Calicut</h3>
                <p className="text-muted-foreground">
                  National Institute of Technology Calicut (NITC) is one of the premier technical institutions in India.
                  Founded in 1961 as Regional Engineering College Calicut, the institution was elevated to the status
                  of National Institute of Technology in 2002. Located in a picturesque landscape at the foothills of
                  the Western Ghats, NITC has been consistently ranked among the top engineering institutions in India.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">Networking Events</h3>
                  <p className="text-muted-foreground text-center">
                    We organize regular reunions, chapter meetings, and professional networking events to help alumni
                    connect with each other and expand their professional networks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">Career Support</h3>
                  <p className="text-muted-foreground text-center">
                    We facilitate job opportunities, mentorship programs, and professional development resources to
                    support the career growth of our alumni and current students.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">Giving Back</h3>
                  <p className="text-muted-foreground text-center">
                    We coordinate fundraising initiatives, scholarships, and volunteer opportunities that allow alumni
                    to contribute to the development of NIT Calicut and its students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Alumni Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Alumni success" 
                  className="w-full h-40 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg">Tech Innovations</h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Our alumni have founded successful startups and are leading innovation at major tech companies around the world.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Research advances" 
                  className="w-full h-40 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg">Research Excellence</h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    NITC alumni are making significant contributions to cutting-edge research in various scientific fields.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Global leadership" 
                  className="w-full h-40 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg">Global Leadership</h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Our graduates have taken on leadership roles in multinational corporations and organizations worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { name: "Dr. Rajesh Kumar", role: "Director", batch: "1985" },
                { name: "Priya Menon", role: "President", batch: "1992" },
                { name: "Sanjay Patel", role: "Secretary", batch: "2001" },
                { name: "Anita Desai", role: "Treasurer", batch: "2005" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarFallback className="text-2xl bg-primary text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-muted-foreground">Class of {member.batch}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      className="min-h-[120px]" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">alumni@nitc.ac.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">+91 495 2286119</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-muted-foreground">
                        Alumni Affairs Office<br />
                        NIT Calicut<br />
                        Calicut, Kerala 673601<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Office Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
                
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="NITC campus" 
                    className="w-full h-[180px] object-cover rounded-md"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
