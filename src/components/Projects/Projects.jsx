import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Project from './Project/Project';

const Projects = () => {
  useEffect(() => {
    document.title = 'RizkiGroups | Projects';
  }, []);
  return (
    <div>
      <Navbar />
      <Project />
      <Footer />
    </div>
  );
};

export default Projects;
