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
        {/* <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-4 mx-auto">
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
          <div className="col-md-4 mx-auto">
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
          <div className="col-md-4 mx-auto">
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
        </div> */}
        <div className="row d-flex justify-content-center" style={{ marginTop: '100px' }}>
          <div className="col-md-4">
            <figure class="snip1336">
              <img src={SS} alt="sample87" />
              <figcaption>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" class="profile" />
                <h2>
                  FullStack E-Vote Website<span>Created By : Iqbal Rizqi</span>
                </h2>
                <p>Nah, ahli ide sekaligus penemu RizkiGroups yang satu ini selalu jadi yang paling santai waktu lagi handle sesuatu</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-4">
            <figure class="snip1336">
              <img src={SS} alt="sample87" />
              <figcaption>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" class="profile" />
                <h2>
                  3D Chair Design<span>Created By : Raihan Rizki</span>
                </h2>
                <p>Kalau yang satu ini ahli improvisasi nya RizkiGroups, sekaligus orang yang berperan mengembangkan RizkiGroups</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-4">
            <figure class="snip1336">
              <img src={SS} alt="sample87" />
              <figcaption>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" class="profile" />
                <h2>
                  VLOG Video<span>Created By : Iqbal Rizqi</span>
                </h2>
                <p>Kalau yang satu ini ahli improvisasi nya RizkiGroups, sekaligus orang yang berperan mengembangkan RizkiGroups</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
