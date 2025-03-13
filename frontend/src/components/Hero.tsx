import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white px-6 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="NITCAA Logo" className="h-12" />
            <h1 className="text-xl font-semibold">
              National Institute of Technology Calicut
            </h1>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/events">EVENTS</Link>
            <Link to="/gallery">GALLERY</Link>
            <Link to="/jobs">JOBS</Link>
            <Link to="/connect">CONNECT</Link>
            <Link to="/read">READ</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/club">ALUMNI CLUB</Link>
            <Link to="/about">ABOUT US</Link>
          </div>
          <div className="space-x-4">
            <Link to="/register" className="text-white">
              REGISTER
            </Link>
            <Link to="/login" className="text-white">
              LOGIN
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative">
        <img
          src="/banner.jpg"
          alt="NITC Alumni Banner"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h2 className="text-white text-4xl font-bold">HOME</h2>
        </div>
      </div>
    </div>
  );
}
