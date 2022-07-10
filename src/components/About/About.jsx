import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import AboutUs from './About/AboutUs';

const About = () => {
  useEffect(() => {
    document.title = 'RizkiGroups | About';
  }, []);
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
