import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Details, Links } from "./constants/contents"; // Assume you have these defined in your project
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, User, Briefcase, Mail, Code } from "lucide-react"; // Icons
import { motion } from "framer-motion"; // Import Framer Motion

export default function Navbar() {
  const [value, setValue] = useState(0); // Track selected bottom nav
  const [showNavbar, setShowNavbar] = useState(true); // Toggle navbar visibility
  let lastScrollTop = 0;

  // Hide navbar on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setShowNavbar(false); // Hide when scrolling down
      } else {
        setShowNavbar(true); // Show when scrolling up
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <div className="relative" style={{ WebkitTapHighlightColor: "transparent" }}> {/* Disable mobile blue tap highlight */}
      {/* Top Navigation Bar */}
      <motion.nav
        className="bg-slate-100 top-0 left-0 w-full cursor-pointer z-50"
        initial={{ y: -100 }} // Start off-screen upwards
        animate={{ y: showNavbar ? 0 : -100 }} // Animate in and out based on scroll
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ WebkitTapHighlightColor: "transparent" }} // Disable blue highlight
      >
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
      </motion.nav>

      {/* Bottom Navigation Bar for Mobile Devices */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-50 md:hidden"
        initial={{ y: 100 }} // Start off-screen
        animate={{ y: showNavbar ? 0 : 100 }} // Animate based on scroll state
        transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth spring animation
        style={{ WebkitTapHighlightColor: "transparent" }} // Disable mobile blue highlight
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className="bg-white text-black"
        >
          {Links.map((link, index) => (
            <BottomNavigationAction
              key={index}
              label={link.name}
              icon={getIcon(link.name)} // No badge for bottom nav
              component={Link}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              style={{ 
                color: value === index ? "black" : "gray" // Black when active, gray when inactive
              }}
            />
          ))}
        </BottomNavigation>
      </motion.div>
    </div>
  );
}

// Function to get the appropriate icon based on the link name
function getIcon(name) {
  switch (name.toLowerCase()) {
    case "home":
      return <Home className="h-6 w-6" />;
    case "about":
      return <User className="h-6 w-6" />;
    case "projects":
      return <Briefcase className="h-6 w-6" />;
    case "skills":
      return <Code className="h-6 w-6" />;
    case "contact":
      return <Mail className="h-6 w-6" />;
    default:
      return <Home className="h-6 w-6" />;
  }
}
