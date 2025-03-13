
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedContent from "@/components/FeaturedContent";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <FeaturedContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
