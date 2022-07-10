import React from 'react';
import './Packages.css';

const Packages = () => {
  return (
    <section id="packages">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12" data-aos="fade-up">
            <h1 className="h1-text text-center">List Paket</h1>
            <p className="p-text text-center">Kalau tadi list harga, sekarang ini ibarat paket hematnya / paket bundle nya</p>
          </div>
        </div>
        <div class="pricing-table pt-5">
          <div class="pricing-card" data-aos="fade-up">
            <h3 class="pricing-card-header">Complete Website</h3>
            <div class="price">
              <span>
                Start from <sup>Rp 350.000</sup>
              </span>
            </div>
            <ul>
              <li>
                <strong>2</strong> Revisions
              </li>
              <li>
                <strong>Logo</strong> Design
              </li>
              <li>
                <strong>Website</strong> Design
              </li>
              <li>
                <strong>Free</strong> Support
              </li>
            </ul>
            <a href="#" class="order-btn">
              Order Now
            </a>
          </div>

          <div class="pricing-card" data-aos="fade-up">
            <h3 class="pricing-card-header">3D Photo</h3>
            <div class="price">
              <span>
                Start from <sup>Rp 200.000</sup>
              </span>
            </div>
            <ul>
              <li>
                <strong>2</strong> Revisions
              </li>
              <li>
                <strong>High</strong> Render Quality
              </li>
              <li>
                <strong>With</strong> 3D Asset
              </li>
              <li>
                <strong>Free</strong> Premium Particle
              </li>
            </ul>
            <a href="#" class="order-btn">
              Order Now
            </a>
          </div>

          <div class="pricing-card" data-aos="fade-up">
            <h3 class="pricing-card-header">3D Video Editing</h3>
            <div class="price">
              <span>
                Start from <sup>Rp 400.000</sup>
              </span>
            </div>
            <ul>
              <li>
                <strong>2</strong> Revisions
              </li>
              <li>
                <strong>High</strong> Render Quality
              </li>
              <li>
                <strong>With</strong> 3D asset in video
              </li>
              <li>
                <strong>Premium</strong> 3D asset
              </li>
            </ul>
            <a href="#" class="order-btn">
              Order Now
            </a>
          </div>

          <div class="pricing-card" data-aos="fade-up">
            <h3 class="pricing-card-header">3D Complete</h3>
            <div class="price">
              <span>
                Start from <sup>Rp 600.000</sup>
              </span>
            </div>
            <ul>
              <li>
                <strong>2</strong> Revisions
              </li>
              <li>
                <strong>High</strong> Render Quality
              </li>
              <li>
                <strong>Animate</strong> 3D asset
              </li>
              <li>
                <strong>To</strong> Interractive Video
              </li>
            </ul>
            <a href="#" class="order-btn">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
