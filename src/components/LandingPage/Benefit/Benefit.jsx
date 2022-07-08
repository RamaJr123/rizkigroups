import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './Benefit.css';
import Dollar from '../../../images/dollar-sign-solid.svg';
import Quality from '../../../images/check-solid.svg';
import Support from '../../../images/phone-solid.svg';

const Benefit = () => {
  return (
    <section id="benefit">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12" data-aos="fade-up">
            <h1 className="h1-text text-center">Kelebihan</h1>
            <p className="p-text text-center">Berikut merupakan beberapa kelebihan dari startup kami</p>
          </div>
        </div>
        <div className="row" data-aos="fade-up" style={{ marginTop: '100px' }}>
          <div className="col-md-4 mb-5">
            <img src={Dollar} className="d-block mx-auto" width={40} alt="" />
            <h3 className="h3-text text-center mt-3">Terjangkau</h3>
            <p className="p-text text-center">Layanan dengan harga yang terjangkau</p>
          </div>
          <div className="col-md-4 mb-5">
            <img src={Quality} className="d-block mx-auto" width={55} alt="" />
            <h3 className="h3-text text-center mt-3">Kualitas baik</h3>
            <p className="p-text text-center">Memberikan layanan dengan kualitas terbaik</p>
          </div>
          <div className="col-md-4">
            <img src={Support} className="d-block mx-auto" width={60} alt="" />
            <h3 className="h3-text text-center mt-3">Support</h3>
            <p className="p-text text-center">Memiliki support yang siap membantu kalian di jam kerja</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
