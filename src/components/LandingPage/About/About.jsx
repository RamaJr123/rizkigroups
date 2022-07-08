import React from 'react';
import './About.css';
import Que from '../../../images/question.png';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row d-flex justify-content-center" data-aos="fade-up">
          {/* <div className="col-md-12 justify-content-center">
            <h2 className="h2-text text-center">Sekilas tentang startup kami</h2>
            <p className="p-text text-center">Berikut merupakan beberapa info sekilas tentang startup kami</p>
          </div> */}
          <div className="col-md-6">
            <img src={Que} className="d-none" alt="" />
          </div>
          <div className="col-md-6">
            <h1 className="h1-text">Tentang startup ini</h1>
            <p className="p-text">Startup ini di bentuk oleh 2 kakak beradik dengan tujuan untuk mempermudah pekerjaan banyak orang dalam bidang teknologi dan memberikan layanan dengan kualitas terbaik.</p>
            <a href="" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>
              Selengkapnya ->
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
