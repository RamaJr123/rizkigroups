import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Questions from './Questions/Questions';

const Question = () => {
  return (
    <div>
      <Navbar />
      <Questions />
      <Footer />
    </div>
  );
};

export default Question;
