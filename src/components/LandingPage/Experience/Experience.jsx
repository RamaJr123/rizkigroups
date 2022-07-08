import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-12 justify-content-center">
            <h1 className="h1-text text-center">Pengalaman kami dalam bidang teknologi</h1>
            <p className="p-text text-center">Berikut adalah beberapa contoh pengalaman kami di bidang teknologi</p>
            <div className="achievement-box">
              <div className="achievement">
                <div className="circle">5+</div>
                <span>tahun</span>
                <span>Pengalaman</span>
              </div>
              <div className="achievement">
                <div className="circle">20+</div>
                <span>project</span>
                <span>Selesai</span>
              </div>
              <div className="achievement">
                <div className="circle">4+</div>
                <span>daftar</span>
                <span>Kerja Sama</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
