import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Pricing from './Pricing/Pricing';

const PricingPage = () => {
  useEffect(() => {
    document.title = 'RizkiGroups | Pricing';
  }, []);
  return (
    <div>
      <Navbar />
      <Pricing />
      <Footer />
    </div>
  );
};

export default PricingPage;
