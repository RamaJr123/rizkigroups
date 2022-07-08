import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section id="footer">
      <hr />
      <footer class="">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul style={{ listStyleType: 'none' }}>
                <li>Address : Gedongan Gang VII 12a</li>
                <li>Phone : +62 823-3304-5929</li>
                <li>Email : rama.ramajr125@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>
          </div>
          <div className="row" style={{ paddingBottom: '10px' }}>
            <div className="col-md-12 text-center">© 2022 RizkiGroups. All rights reserved. Created By IqbalR.</div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
