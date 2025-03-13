
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlumniChatComponent from "../components/alumni/AlumniChat";

const AlumniChat = () => {
  useEffect(() => {
    document.title = "Alumni Chat | Alumni Affairs Network-NITC";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Chat with Connected Alumni
          </h1>
          <AlumniChatComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AlumniChat;
