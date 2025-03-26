import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlumniCard from "../components/alumni/AlumniCard";
import AlumniSearchFilters from "../components/alumni/AlumniSearchFilters";
import { alumniProfiles } from "../data/alumniData";

const Alumni = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("any");
  const [selectedProgramme, setSelectedProgramme] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [filteredAlumni, setFilteredAlumni] = useState(alumniProfiles);
  const [visibleCount, setVisibleCount] = useState(6); // Number of cards to show initially

  useEffect(() => {
    document.title = "Alumni Directory | Alumni Affairs Network-NITC";
  }, []);

  useEffect(() => {
    const filtered = alumniProfiles.filter((alumni) => {
      const matchesQuery = alumni.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBatch = selectedBatch === "any" || alumni.batchYear === selectedBatch;
      const matchesProgramme =
        selectedProgramme === "all" || alumni.programme.toLowerCase() === selectedProgramme.toLowerCase();
      const matchesDepartment =
        selectedDepartment === "all" || alumni.department.toLowerCase() === selectedDepartment.toLowerCase();
      return matchesQuery && matchesBatch && matchesProgramme && matchesDepartment;
    });
    setFilteredAlumni(filtered);
  }, [searchQuery, selectedBatch, selectedProgramme, selectedDepartment]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Load 6 more cards on each click
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Alumni Directory
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Connect with Alumni and explore their journeys.
          </p>
          
          {/* Search Filters */}
          <AlumniSearchFilters
            onSearch={(query) => setSearchQuery(query)}
            onBatchChange={(batch) => setSelectedBatch(batch)}
            onProgrammeChange={(programme) => setSelectedProgramme(programme)}
            onDepartmentChange={(department) => setSelectedDepartment(department)}
          />
          
          {/* Alumni Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {filteredAlumni.slice(0, visibleCount).map((alumni) => (
              <AlumniCard key={alumni.id} alumni={alumni} />
            ))}
          </div>
          
          {visibleCount < filteredAlumni.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="bg-secondary text-secondary-foreground px-6 py-2 rounded hover:bg-secondary/90 transition-colors"
              >
                Load More Alumni
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Alumni;
