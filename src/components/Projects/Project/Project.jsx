import React from 'react';
import './Project.css';
import SS from '../../../images/ssan.png';

const Project = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <h1 className="h1-text text-center">Our Projects</h1>
            <p className="p-text text-center">Berikut adalah beberapa project / karya yang pernah kami kerjakan / kami handle selama startup ini di bentuk.</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-4">
            <div class="card rounded" style={{ width: '14rem' }}>
              <img src={SS} class="card-img-top" alt="Image Cap" />
              <div class="card-body text-center">
                <h5 class="card-title">E-Vote Website</h5>
                <p class="card-text">Created By : Iqbal</p>
                <p class="card-text">
                  Tools Used : <br /> - Laravel <br /> - VSCode <br /> - XAMPP
                </p>
                <button class="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card rounded" style={{ width: '14rem' }}>
              <img src={SS} class="card-img-top" alt="Image Cap" />
              <div class="card-body text-center">
                <h5 class="card-title">E-Vote Website</h5>
                <p class="card-text">Created By : Iqbal</p>
                <p class="card-text">
                  Tools Used : <br /> - Laravel <br /> - VSCode <br /> - XAMPP
                </p>
                <button class="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card rounded" style={{ width: '14rem' }}>
              <img src={SS} class="card-img-top" alt="Image Cap" />
              <div class="card-body text-center">
                <h5 class="card-title">E-Vote Website</h5>
                <p class="card-text">Created By : Iqbal</p>
                <p class="card-text">
                  Tools Used : <br /> - Laravel <br /> - VSCode <br /> - XAMPP
                </p>
                <button class="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
