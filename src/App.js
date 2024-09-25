import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Project from './components/Project';
import Certificates from './components/Certificates';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import { CiDesktopMouse2 } from "react-icons/ci";

function App() {

  const [showScrollUp, setShowScrollUp] = useState(false);

  // Handle scroll event to detect when we hit the project section
  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById('project');
      if (projectSection) {
        const projectSectionTop = projectSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition >= projectSectionTop + 100) { // add margin for appearance
          setShowScrollUp(true);
        } else {
          setShowScrollUp(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll up function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Navbar />
      <div>
        <section id="home" className="py-16">
          <Home />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="skills" className="py-20">
          <Skills />
        </section>
        <section id="timeline" className="py-20">
          <Timeline />
        </section>
        <section id="project" className="py-20">
          <Project />
        </section>
        <section id="certificate" className="py-20">
          <Certificates />
        </section>
        <section id="testimonial" className="py-20">
          <Testimonial />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>

      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-4 transform hover:-translate-y-2 hover:scale-110 duration-300"
        >
          <CiDesktopMouse2 size={40} className="font-bold" />
        </button>
      )}
      <Footer />
    </div>
  );
}

export default App;
