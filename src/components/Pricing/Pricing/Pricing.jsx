import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <h1 className="h1-text text-center">List Harga</h1>
            <p className="p-text text-center">Berikut merupakan list harga dari jasa yang kami tawarkan untuk saat ini</p>
          </div>
        </div>
        <div class="pricing-table pt-5">
          <div class="pricing-card">
            <h3 class="pricing-card-header">Website Dev</h3>
            <div class="price">
              <span>
                Start from <sup>Rp 300.000</sup>
              </span>
            </div>
            <ul>
              <li>
                <strong>2</strong> Revisions
              </li>
              <li>
                <strong>Fast</strong> Support
              </li>
              <li>
                <strong>Free</strong> Setup
              </li>
              <li>
                <strong>Free</strong> Support
              </li>
            </ul>
            <a href="#" class="order-btn">
              Order Now
            </a>
          </div>

          <div class="pricing-card">
            <h3 class="pricing-card-header">Photo Editing</h3>
            <div class="price">
              <span>
                Start from <sup>Rp 100.000</sup>
              </span>
            </div>
            <ul>
              <li>
                <strong>2</strong> Revisions
              </li>
              <li>
                <strong>Premium</strong> Quality
              </li>
              <li>
                <strong>Free</strong> Premium Asset
              </li>
              <li>
                <strong>Free</strong> Consultation
              </li>
            </ul>
            <a href="#" class="order-btn">
              Order Now
            </a>
          </div>

          <div class="pricing-card">
            <h3 class="pricing-card-header">Video Editing</h3>
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
                <strong>Premium</strong> Quality
              </li>
              <li>
                <strong>High</strong> Resolution
              </li>
              <li>
                <strong>Free</strong> Premium Asset
              </li>
            </ul>
            <a href="#" class="order-btn">
              Order Now
            </a>
          </div>

          <div class="pricing-card">
            <h3 class="pricing-card-header">3D Design</h3>
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
                <strong>High</strong> Quality
              </li>
              <li>
                <strong>With</strong> Project File
              </li>
              <li>
                <strong>HighRes</strong> Render
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

export default Pricing;
