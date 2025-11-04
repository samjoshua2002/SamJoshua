import React, { useEffect } from 'react';
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
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075
    });

    // Expose Lenis globally for navbar access
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      if (window.lenis) {
        delete window.lenis;
      }
    };
  }, []);

  return (
    <div className="lenis">
      <Navbar />
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="skills" className="pt-28">
          <Skills />
        </section>
        <section id="timeline" className="pb-20">
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
        <section id="contact" className="py-28">
          <Contact />
        </section>
      </div>
      <div className='py-10'>
        <Footer />
      </div>
    </div>
  );
}

export default App;