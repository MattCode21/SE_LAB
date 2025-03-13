
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlumniCard from "../components/alumni/AlumniCard";
import AlumniSearchFilters from "../components/alumni/AlumniSearchFilters";
import { alumniProfiles } from "../data/alumniData";

const Alumni = () => {
  useEffect(() => {
    document.title = "Alumni Directory | Alumni Affairs Network-NITC";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Alumni Directory
          </h1>
          
          {/* Search Filters */}
          <AlumniSearchFilters />
          
          {/* Alumni Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {alumniProfiles.map((alumni) => (
              <AlumniCard key={alumni.id} alumni={alumni} />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="bg-secondary text-secondary-foreground px-6 py-2 rounded hover:bg-secondary/90 transition-colors">
              Load More Alumni
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Alumni;
