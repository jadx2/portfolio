import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import About from '../AboutSection';
import Contact from '../ContactSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <About />
      <Contact />
    </>
  );
}

export default Home;
