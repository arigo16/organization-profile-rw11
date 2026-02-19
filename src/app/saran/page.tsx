import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";

const SaranPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Saran & Masukan" />
      <section className="contact-section-2 fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-contact-form-items">
                <div className="section-title text-center">
                  <span className="sub-title color-2 wow fadeInUp">
                    <i className="fas fa-comment-dots" />
                    Aspirasi Warga
                  </span>
                  <h2 className="mt-char-animation">Sampaikan Masukan Anda</h2>
                </div>
                <p className="text-center mb-4 wow fadeInUp" data-wow-delay=".3s">
                  Kami sangat menghargai setiap saran dan masukan dari warga
                  untuk kemajuan lingkungan RW 011 Desa Sukamantri. Identitas
                  Anda bersifat opsional.
                </p>
                <form
                  action="#"
                  method="POST"
                  className="mt-4 mt-md-0"
                >
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nama (opsional)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          placeholder="No. HP / WhatsApp (opsional)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <select name="kategori" className="form-select">
                          <option value="">Pilih Kategori</option>
                          <option value="keamanan">Keamanan Lingkungan</option>
                          <option value="kebersihan">Kebersihan</option>
                          <option value="fasilitas">
                            Fasilitas & Infrastruktur
                          </option>
                          <option value="kegiatan">Kegiatan Warga</option>
                          <option value="administrasi">Administrasi</option>
                          <option value="keuangan">Keuangan & Infaq</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <textarea
                          name="message"
                          placeholder="Tulis saran, masukan, atau keluhan Anda di sini...*"
                          rows={6}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <button type="submit" className="theme-btn">
                        <i className="fas fa-paper-plane me-2" />
                        Kirim Masukan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default SaranPage;
