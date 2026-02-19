import { orgInfo } from "@/data/rw011";

export const Contact1 = () => {
  return (
    <section className="contact-section fix section-padding">
      <div className="container">
        <div className="contact-wrapper-4">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6" />
            <div className="col-xl-6 col-lg-6">
              <div className="contact-section">
                <div className="section-title">
                  <span className="sub-title color-2 wow fadeInUp">
                    <i className="fas fa-phone" />
                    Hubungi Kami
                  </span>
                  <h2 className="mt-char-animation">Kontak RW 011</h2>
                </div>
                <div className="contact-right mt-4 mt-md-0">
                  <form action="#" id="contact-form" method="POST">
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".2"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nama Anda"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".4"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Alamat Email"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".6"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Nomor HP / WhatsApp"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".7"
                      >
                        <div className="form-clt">
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Perihal</span>
                            <ul className="list">
                              <li data-value={1} className="option selected">
                                Umum
                              </li>
                              <li data-value={2} className="option">
                                Administrasi
                              </li>
                              <li data-value={3} className="option">
                                Infaq
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".8"
                      >
                        <div className="form-clt-big form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Tulis Pesan Anda"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".9"
                      >
                        <button type="submit" className="theme-btn">
                          Kirim Pesan <i className="far fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-item">
        <div className="google-map">
          <iframe
            src={orgInfo.googleMapsEmbed}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
