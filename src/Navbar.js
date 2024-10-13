import React from "react";
import { Link } from "react-scroll";
import { Links } from "./constants/contents";
import { Details } from "./constants/contents";
import { Home, User, Briefcase, Mail, Code, Package } from "lucide-react"; // Corrected the icon for Briefcase

export default function Navbar() {
  return (
    <div className="relative">
      {/* Top Navigation Bar */}
      <nav className="bg-slate-100 top-0 left-0 w-full cursor-pointer z-50">
        <div className="lg:px-10 py-4 ml-10 mr-10 flex justify-between items-center">
          <div className="text-slate-900 text-2xl lg:text-3xl font-semibold">
            {Details.name}
          </div>
          <div className="hidden md:flex">
            <ul className="flex text-slate-900 gap-5">
              {Links.map((link, index) => (
                <li key={index} className="hover:text-slate-950">
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 bg-white md:hidden shadow-md rounded-t-lg z-50">
        <ul className="flex justify-around py-2">
          {Links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="flex flex-col items-center text-slate-900 hover:text-slate-950"
              >
                {getIcon(link.name)}
                <span className="text-xs mt-1">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Function to get the appropriate icon based on the link name
function getIcon(name) {
  console.log("Link name:", name); // Log to see the actual link name
  switch (name.toLowerCase()) {
    case 'home':
      return <Home className="h-6 w-6" />; // Home icon
    case 'about':
      return <User className="h-6 w-6" />; // About (User) icon
    case 'projects':
      return <Briefcase className="h-6 w-6" />; // Projects icon (Briefcase)
    case 'skills':
      return <Code className="h-6 w-6" />; // Skills icon (Code)
    case 'contact':
      return <Mail className="h-6 w-6" />; // Contact (Mail) icon
    default:
      console.warn("No matching icon found for:", name); // Warn when there is no match
      return <Home className="h-6 w-6" />; // Default to Home icon
  }
}
