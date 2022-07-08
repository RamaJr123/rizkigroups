import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container" style={{ 'margin-top': '100px' }}>
        <div className="row d-flex">
          <div className="col-md-12 justify-content-center">
            <h1 className="h1-text text-center">Selamat datang di RizkiGroups.</h1>
            <p className="p-text text-center">Platform startup yang melayani segala kebutuhan teknologi anda.</p>
            <div className="services-example">
              <ul>
                <li className="red-color">Video Editing</li>
                <li className="blue-color">Web Developing</li>
                <li className="green-color">3D Design</li>
                <li className="yellow-color">Photo Editing</li>
                <li className="orange-color">3D Rendering</li>
                <li className="tosca-color">Mobile App</li>
              </ul>
            </div>
            <button className="button blue-color" style={{ left: '42%', marginTop: '80px' }}>
              Lihat Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
