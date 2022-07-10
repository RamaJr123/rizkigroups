import React from 'react';
import './Services.css';
import JS from '../../../images/js-square-brands.svg';
import Design from '../../../images/cube-solid.svg';
import Photo from '../../../images/camera-solid.svg';
import Video from '../../../images/photo-film-solid.svg';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12" data-aos="fade-up">
            <h1 className="h1-text text-center">Our Services</h1>
            <p className="p-text text-center">Berikut merupakan beberapa jasa / layanan yang bisa kami handle</p>
          </div>
        </div>
        <div className="row d-flex pt-5">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon">
                <img src={JS} alt="" />
              </div>
              <h4 className="title">Web Developing</h4>
              <p className="description">
                Melayani jasa pembuatan website dengan tim yang memiliki pengalaman lebih dari 4 tahun di dalam bidang website developing dengan menggunakan bahasa pemrograman seperti Javascript, PHP dan sejenisnya
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon">
                <img src={Design} alt="" />
              </div>
              <h4 className="title">3D Design</h4>
              <p className="description">Melayani jasa 3d designing dengan tim yang memiliki pengalaman lebih dari 1 tahun di dalam bidang 3d designing dengan menggunakan tool seperti blender, maya dan sejenisnya</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon">
                <img src={Photo} alt="" />
              </div>
              <h4 className="title">Photo editing</h4>
              <p className="description">Melayani jasa photo editing dengan tim yang memiliki pengalaman lebih dari 4 tahun di dalam bidang photo editing dengan menggunakan tool seperti adobe photoshop dan sejenisnya</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon">
                <img src={Video} alt="" />
              </div>
              <h4 className="title">Video Editing</h4>
              <p className="description">Melayani jasa video editing dengan tim yang memiliki pengalaman lebih dari 3 tahun di dalam bidang video editing dengan menggunakan tool seperti adobe premiere pro dan sejenisnya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
