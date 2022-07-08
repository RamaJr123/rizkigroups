import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <h1 className="h1-text text-center">Tentang Kami</h1>
            <p className="p-text text-center">Yuk berkenalan lebih jauh dengan startup ini.</p>
            <div className="mt-5"></div>
            <div className="pt-5"></div>
            <div className="text-1">
              <h2 className="h2-text">Apa sih RizkiGroups itu?</h2>
              <p className="p-text-bold pt-2">
                RizkiGroups merupakan startup / platform tempat dimana kalian bisa menggunakan jasa kami untuk melakukan hal hal di bidang teknologi, contohnya seperti membuat website, video editing, 3D design dan masih banyak yang lainnya
                dengan harga yang terjangkau dan kualitas jasa yang dapat bersaing dengan banyak platform serupa di luar sana
              </p>
            </div>
            <div className="text-2 pt-5">
              <h2 className="h2-text">Gimana RizkiGroups bisa terbentuk?</h2>
              <p className="p-text-bold pt-2">
                RizkiGroups terbentuk atas dasar ide dari kakak beradik yang pada saat itu sedang ingin mencoba hal baru untuk di lakukan dan di dasari dengan majunya perkembangan teknologi saat ini yang membuat peluang untuk startup / ide
                usaha baru bagi mereka
              </p>
            </div>
            <div className="text-3 pt-5">
              <h2 className="h2-text">Apa visi dan misi dari RizkiGroups?</h2>
              <p className="p-text-bold pt-2">
                Visi dari RizkiGroups sendiri adalah untuk dapat menjadi platform yang dapat bersaing dan berkembang di bidang teknologi, untuk misi sendiri RizkiGroups memiliki beberapa misi diantaranya adalah :
              </p>
              <ul style={{ textAlign: 'start' }}>
                <li className="p-text-bold">Membuka peluang baru untuk usaha dalam bidang teknologi</li>
                <li className="p-text-bold">Membantu dan menyediakan jasa yang dapat mempermudah kegiatan / aktivitas banyak orang</li>
                <li className="p-text-bold">Memperkenalkan dan membuktikan bahwa startup dapat di lakukan oleh siapa saja tanpa mengenal batasan usia</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center" style={{ marginTop: '150px' }}>
          <div className="col-md-12">
            <h1 className="h1-text text-center">Pendiri RizkiGroups</h1>
            <p className="p-text text-center">Nah, setelah tadi berkenalan dengan startup nya, sekarang yuk kenalan sama pendiri nya nih</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center" style={{ marginTop: '150px' }}>
          <div className="col-md-6">
            <figure class="snip1336">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
              <figcaption>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" class="profile" />
                <h2>
                  Iqbal Rizqi R.<span>Web Developer / Founder</span>
                </h2>
                <p>Nah, ahli ide sekaligus penemu RizkiGroups yang satu ini selalu jadi yang paling santai waktu lagi handle sesuatu</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-6">
            <figure class="snip1336">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
              <figcaption>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" class="profile" />
                <h2>
                  Raihan Rizki A.<span>Editor / Co-Founder</span>
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

export default AboutUs;
