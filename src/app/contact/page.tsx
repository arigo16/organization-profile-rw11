"use client";

import { useRwInfo } from "@/hooks/useApi";
import { orgInfo } from "@/data/rw011";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";

function ContactSkeleton() {
  return (
    <div className="row g-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-12">
          <div
            style={{
              height: 180,
              background: "#e0e0e0",
              borderRadius: 8,
            }}
          />
        </div>
      ))}
    </div>
  );
}

const ContactPage = () => {
  const { data, isLoading, isError } = useRwInfo();

  // Fallback ke data lokal
  const contactInfo = isError || !data?.data
    ? {
        email: orgInfo.email,
        telepon: orgInfo.telepon,
        alamat: "Desa Sukamantri",
        kelurahan: "",
        kecamatan: "Kec. Pasar Kemis",
        kota: "Kab. Tangerang",
        maps_embed: orgInfo.googleMapsEmbed,
        whatsapp: orgInfo.telepon,
      }
    : {
        email: data.data.email || orgInfo.email,
        telepon: data.data.telepon || orgInfo.telepon,
        alamat: data.data.alamat || "Desa Sukamantri",
        kelurahan: data.data.kelurahan || "",
        kecamatan: data.data.kecamatan || "Kec. Pasar Kemis",
        kota: data.data.kota || "Kab. Tangerang",
        maps_embed: data.data.maps_embed || orgInfo.googleMapsEmbed,
        whatsapp: data.data.whatsapp || orgInfo.telepon,
      };

  return (
    <DanboxLayout>
      <PageBanner pageName="Kontak" />
      <section className="contact-page-wrap section-padding">
        <div className="container">
          {isLoading ? (
            <ContactSkeleton />
          ) : (
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-contact-card card1">
                  <div className="top-part">
                    <div className="icon">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="title">
                      <h4>Alamat Email</h4>
                      <span>Kirim email kapan saja</span>
                    </div>
                  </div>
                  <div className="bottom-part">
                    <div className="info">
                      <p>{contactInfo.email}</p>
                    </div>
                    <a href={`mailto:${contactInfo.email}`} className="icon">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-contact-card card2">
                  <div className="top-part">
                    <div className="icon">
                      <i className="fab fa-whatsapp" />
                    </div>
                    <div className="title">
                      <h4>Telepon / WhatsApp</h4>
                      <span>Hubungi kami kapan saja</span>
                    </div>
                  </div>
                  <div className="bottom-part">
                    <div className="info">
                      <p>{contactInfo.telepon}</p>
                    </div>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp?.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon"
                    >
                      <i className="fal fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-contact-card card3">
                  <div className="top-part">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="title">
                      <h4>Alamat Sekretariat</h4>
                      <span>Kunjungi kami langsung</span>
                    </div>
                  </div>
                  <div className="bottom-part">
                    <div className="info">
                      <p>{contactInfo.alamat}</p>
                      <p>
                        {contactInfo.kecamatan}
                        {contactInfo.kota ? `, ${contactInfo.kota}` : ""}
                      </p>
                    </div>
                    <div className="icon">
                      <i className="fal fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="office-google-map-wrapper wow fadeInUp">
            {contactInfo.maps_embed ? (
              <iframe
                src={contactInfo.maps_embed}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            ) : (
              <div
                style={{
                  height: 400,
                  background: "#e0e0e0",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="text-muted">Peta tidak tersedia</span>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="contact-section-2 fix section-padding pt-0">
        <div className="container">
          <div className="main-contact-form-items">
            <div className="section-title text-center">
              <span className="sub-title color-2 wow fadeInUp">
                <i className="fal fa-pen" />
                Hubungi Kami
              </span>
              <h2 className="mt-char-animation">Kirim Pesan</h2>
            </div>
            <form
              action="#"
              id="contact-form"
              method="POST"
              className="mt-4 mt-md-0"
            >
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nama Anda*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Alamat Email*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Nomor HP / WhatsApp*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subjek*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-clt">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Tulis Pesan Anda*"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="theme-btn center d-block">
                    Kirim Pesan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default ContactPage;
