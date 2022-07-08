import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split('/');
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light navbar-color">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            RizkiGroups.
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-3">
              <li className="nav-item">
                <Link className={splitLocation[1] === '' ? 'nav-link active' : 'nav-link'} to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] === 'projects' ? 'nav-link active' : 'nav-link'} to={'/projects'}>
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] === 'about' ? 'nav-link active' : 'nav-link'} to={'/about'}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] === 'services' ? 'nav-link active' : 'nav-link'} to={'/services'}>
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] === 'pricing' ? 'nav-link active' : 'nav-link'} to={'/pricing'}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] === 'package' ? 'nav-link active' : 'nav-link'} to={'/package'}>
                  Package
                </Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] === 'faq' ? 'nav-link active' : 'nav-link'} to={'/faq'}>
                  FAQ
                </Link>
              </li>
            </ul>
            <a className="btn-sign-up ms-5" href="https://wa.link/5axjfn">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
