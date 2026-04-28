"use client";

import { useRwInfo } from "@/hooks/useApi";
import { tentangRW } from "@/data/rw011";
import Image from "next/image";

export const SambutanSection = () => {
  return (
    <section className="about-section-3 fix section-padding">
      <div className="container">
        <div className="about-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image-items-2">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                    <div className="about-image">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        src="/assets/img/people/ketua-rw.jpeg"
                        alt="Lingkungan RW 011"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
                    <div className="about-experience">
                      <h2>
                        <span className="count">RW 011</span>
                      </h2>
                      <h6>Desa Sukamantri</h6>
                    </div>
                    <div className="about-img">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/logo-square-bg-white.jpeg"
                        alt="Kegiatan warga RW 011"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title color-2 wow fadeInUp">
                    <i className="fas fa-user-crown" />
                    Sambutan Ketua RW
                  </span>
                  <h2 className="mt-char-animation">
                    Selamat Datang di <span>Portal</span> RW 011
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Selamat datang di portal resmi RW 011 Desa Sukamantri. Portal ini hadir sebagai sarana informasi dan komunikasi antara pengurus RW dengan seluruh warga. Mari bersama-sama kita wujudkan lingkungan yang aman, nyaman, bersih, dan sejahtera.
                </p>
                <p className="wow fadeInUp" data-wow-delay=".7s">
                  Melalui semangat gotong royong dan kebersamaan, kami berkomitmen untuk terus membangun lingkungan yang lebih baik bagi seluruh warga RW 011. Terima kasih atas partisipasi dan dukungannya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SejarahSection = () => {
  const { data, isLoading, isError } = useRwInfo();

  // Fallback ke data lokal
  const aboutText = isError || !data?.data?.sejarah
    ? tentangRW.about
    : data.data.sejarah;

  return (
    <section className="about-section-3 fix section-padding">
      <div className="container">
        <div className="about-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image-items-2">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                    <div className="about-image">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        src="/assets/img/people/ketua-rw.jpeg"
                        alt="Sejarah RW 011"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
                    <div className="about-img">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/logo-square-bg-white.jpeg"
                        alt="Warga RW 011"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title color-2 wow fadeInUp">
                    <i className="fas fa-mosque" />
                    Tentang Kami
                  </span>
                  <h2 className="mt-char-animation">
                    Tentang <span>RW 011</span> Desa Sukamantri
                  </h2>
                </div>
                {isLoading ? (
                  <div className="mt-3">
                    <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, marginBottom: 8 }} />
                    <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, marginBottom: 8 }} />
                    <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, width: "80%" }} />
                  </div>
                ) : (
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                    dangerouslySetInnerHTML={{ __html: aboutText }}
                  />
                )}
                <div className="d-flex align-items-center flex-wrap mb-5">
                  <ul
                    className="checked-list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <i className="far fa-check" /> 11 Rukun Tetangga
                    </li>
                    <li>
                      <i className="far fa-check" /> Kecamatan Pasar Kemis
                    </li>
                  </ul>
                  <ul
                    className="checked-list wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <li>
                      <i className="far fa-check" /> Kabupaten Tangerang
                    </li>
                    <li>
                      <i className="far fa-check" /> Provinsi Banten
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VisiMisiSection = () => {
  const { data, isLoading, isError } = useRwInfo();

  // Fallback ke data lokal
  const visi = isError || !data?.data?.visi ? tentangRW.visi : data.data.visi;
  const misi = isError || !data?.data?.misi ? tentangRW.misi : data.data.misi;

  return (
    <section
      className="cta-section fix section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/cta-video.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <div className="section-title">
              <span className="sub-title wow fadeInUp">
                <i className="fas fa-star" />
                Visi & Misi
              </span>
              {isLoading ? (
                <div
                  className="mt-4 mb-4"
                  style={{ height: 32, background: "rgba(255,255,255,0.3)", borderRadius: 4 }}
                />
              ) : (
                <h2 className="mt-char-animation text-white mb-4">
                  {visi}
                </h2>
              )}
            </div>
            <div className="text-start">
              <div className="row">
                {isLoading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="col-lg-6">
                      <div className="d-flex align-items-start mb-3">
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            background: "rgba(255,255,255,0.3)",
                            borderRadius: "50%",
                            marginRight: 12,
                          }}
                        />
                        <div
                          style={{
                            flex: 1,
                            height: 16,
                            background: "rgba(255,255,255,0.3)",
                            borderRadius: 4,
                          }}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  misi.map((m, i) => (
                    <div
                      key={i}
                      className="col-lg-6 wow fadeInUp"
                      data-wow-delay={`${0.2 + i * 0.1}s`}
                    >
                      <div className="d-flex align-items-start mb-3">
                        <i
                          className="far fa-check-circle text-white me-3 mt-1"
                          style={{ fontSize: "18px" }}
                        />
                        <p className="text-white">{m}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProfilWilayahPreview = () => {
  const images = [
    { img: "/assets/img/about/05.jpg", delay: ".3s" },
    { img: "/assets/img/about/06.jpg", delay: ".5s" },
    { img: "/assets/img/about/07.jpg", delay: ".7s" },
  ];
  return (
    <section className="about-section-2 fix" style={{ marginTop: '60px' }}>
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-map-marked-alt" />
            Profil Wilayah
          </span>
          <h2 className="mt-char-animation">
            Gambaran Wilayah <span className="color-2">RW 011</span> <br />
            Desa Sukamantri
          </h2>
        </div>
        <div className="row">
          {images.map((item, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="about-image-items">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src={item.img}
                  alt="Wilayah RW 011"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Keep old exports as aliases for backward compatibility during transition
export const About1 = SambutanSection;
export const About2 = ProfilWilayahPreview;
