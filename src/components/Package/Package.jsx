import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Packages from './Packages/Packages';

const Package = () => {
  useEffect(() => {
    document.title = 'RizkiGroups | Package';
  }, []);
  return (
    <div>
      <Navbar />
      <Packages />
      <Footer />
    </div>
  );
};

export default Package;
