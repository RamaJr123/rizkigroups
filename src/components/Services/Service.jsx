import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from './Service/Services';

const Service = () => {
  useEffect(() => {
    document.title = 'RizkiGroups | Services';
  }, []);
  return (
    <div>
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
};

export default Service;
