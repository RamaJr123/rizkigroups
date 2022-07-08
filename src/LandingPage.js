import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/LandingPage/Hero/Hero';
import Experience from './components/LandingPage/Experience/Experience';
import About from './components/LandingPage/About/About';
import Benefit from './components/LandingPage/Benefit/Benefit';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './components/Footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="home-content">
        <Experience />
        <About />
        <Benefit />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
