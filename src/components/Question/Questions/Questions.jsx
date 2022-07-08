import React from 'react';
import './Questions.css';

const Questions = () => {
  return (
    <section id="questions">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <h1 className="h1-text text-center">Frequently Asked Question</h1>
            <p className="p-text text-center">Berikut akan menjawab beberapa pertanyaan yang sering di tanyakan oleh pengguna</p>
            <div className="pt-3"></div>
            <div className="box-accordion pt-5">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Aman ga ya transaksi disini?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      Walaupun platform kami adalah platform yang tergolong sangat baru, jangan khawatir akan keamanan dari bertransaksi di platform kami karena tujuan kami membuat platform ini juga salah satunya adalah memberi rasa aman
                      dan nyaman pada saat bekerja sama / bertransaksi dengan kami..
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Apa project paling kompleks yang pernah di buat?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      Project paling kompleks dan rumit yang pernah kami buat adalah sistem e-voting untuk pemilihan ketua osis dengan segudang fitur dengan penghitungan suara dan implementasi fitur yang sangat rumit, di buat dengan
                      framework laravel dan membutuhkan waktu hingga 8 hari untuk pengerjaan project tersebut..
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Harapan kalian untuk startup ini?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      Harapan kami untuk startup ini adalah agar startup ini dapat berkembang dan dapat bersaing sebagai platform dimana semua orang dapat menyewa jasa dari kami atau dapat bekerja sama dengan kami di bidang teknologi
                      sehingga startup ini dapat di kenal oleh semua kalangan masyarakat di Indonesia bahkan mancanegara..
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
