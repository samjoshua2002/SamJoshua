import React, { useState, useEffect } from "react";
import { Details, Links } from "./constants/contents";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, User, Briefcase, Mail, Code } from "lucide-react"; 
import { motion } from "framer-motion"; 

export default function Navbar() {
  const [value, setValue] = useState(0); 
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  let lastScrollTop = 0;

  // Custom scroll handler that works with Lenis
  const handleNavClick = (to) => {
    const element = document.getElementById(to);
    if (element) {
      // Use Lenis if available for smooth scrolling
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          duration: 1.2,
          offset: -70,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        // Fallback to native smooth scroll
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 70;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Hide/show navbar logic
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setShowNavbar(false); // Hide when scrolling down
      } else {
        setShowNavbar(true); // Show when scrolling up
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      // Active section detection
      const sections = Links.map(link => link.to);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
        const linkIndex = Links.findIndex(link => link.to === currentSection);
        if (linkIndex !== -1) {
          setValue(linkIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Initialize Lenis scroll listener for active section updates
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      
      Links.forEach(link => {
        const section = document.getElementById(link.to);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            setActiveSection(link.to);
            const linkIndex = Links.findIndex(l => l.to === link.to);
            if (linkIndex !== -1) {
              setValue(linkIndex);
            }
          }
        }
      });
    };

    // Use Lenis scroll event if available, otherwise use native scroll
    if (window.lenis) {
      window.lenis.on('scroll', updateActiveSection);
    } else {
      window.addEventListener('scroll', updateActiveSection);
    }

    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', updateActiveSection);
      } else {
        window.removeEventListener('scroll', updateActiveSection);
      }
    };
  }, []);

  return (
    <div className="relative" style={{ WebkitTapHighlightColor: "transparent" }}>
      {/* Top Navigation Bar */}
      <motion.nav
        className="bg-slate-100 top-0 left-0 w-full cursor-pointer z-50 fixed"
        initial={{ y: -100 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <div className="lg:px-10 py-4 ml-10 mr-10 flex justify-between items-center">
          <div className="text-slate-900 text-2xl lg:text-3xl font-semibold">
            {Details.name}
          </div>
          <div className="hidden md:flex">
            <ul className="flex text-slate-900 gap-5">
              {Links.map((link, index) => (
                <li key={index} className="hover:text-slate-950">
                  <a
                    href={`#${link.to}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.to);
                      setValue(index);
                      setActiveSection(link.to);
                    }}
                    className={`cursor-pointer transition-colors duration-300 ${
                      activeSection === link.to 
                        ? 'text-black font-semibold border-b-2 border-black' 
                        : 'text-slate-700'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Bottom Navigation Bar for Mobile Devices */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-50 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: showNavbar ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ WebkitTapHighlightColor: "transparent" }}
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
              icon={getIcon(link.name)}
              onClick={() => {
                handleNavClick(link.to);
                setValue(index);
                setActiveSection(link.to);
              }}
              style={{ 
                color: activeSection === link.to ? "black" : "gray",
                fontWeight: activeSection === link.to ? "bold" : "normal"
              }}
            />
          ))}
        </BottomNavigation>
      </motion.div>

      {/* Add some padding to account for fixed navbar */}
      <div className="h-16 md:h-20"></div>
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