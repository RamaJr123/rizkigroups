import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Questions from './Questions/Questions';

const Question = () => {
  useEffect(() => {
    document.title = 'RizkiGroups | FAQ';
  }, []);
  return (
    <div>
      <Navbar />
      <Questions />
      <Footer />
    </div>
  );
};

export default Question;
