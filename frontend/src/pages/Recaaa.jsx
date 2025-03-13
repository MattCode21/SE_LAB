
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecaaaSection from "../components/alumni/RecaaaSection";

const Recaaa = () => {
  useEffect(() => {
    document.title = "RECAAA | Alumni Affairs Network-NITC";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            RECAAA - Alumni Association
          </h1>
          <RecaaaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recaaa;
