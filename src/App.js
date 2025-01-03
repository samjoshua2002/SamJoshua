import React from 'react';
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

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <section id="home" >
          <Home />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="skills" className="py-28">
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
        <section id="contact" className="py-28">
          <Contact />
        </section>
      </div>
      <div className='py-10'> <Footer /></div>
     
    </div>
  );
}

export default App;
