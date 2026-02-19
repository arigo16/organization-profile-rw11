import { orgInfo } from "@/data/rw011";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ footer }: { footer: number }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 3:
      return <Footer3 />;
    default:
      return <Footer3 />;
  }
};

export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            <FooterLogoContainer />
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <LinksCol heading="Tautan" links={tautanUtama} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <LinksCol heading="Layanan" links={tautanLayanan} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 className="text-white">Berita Terbaru</h4>
                </div>
                <div className="popularspost-area">
                  <div className="single-post-items">
                    <div
                      className="post-img bg-cover"
                      style={{ backgroundImage: 'url("assets/img/post1.jpg")' }}
                    />
                    <div className="post-content">
                      <span>
                        <i className="fal fa-calendar-alt" />
                        10 Januari 2025
                      </span>
                      <h5>
                        <Link href="/news">
                          Musyawarah Warga Tahunan RW 011
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="single-post-items">
                    <div
                      className="post-img bg-cover"
                      style={{ backgroundImage: 'url("assets/img/post2.jpg")' }}
                    />
                    <div className="post-content">
                      <span>
                        <i className="fal fa-calendar-alt" />
                        5 Januari 2025
                      </span>
                      <h5>
                        <Link href="/news">
                          Kerja Bakti Bersama Warga RW 011
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bor-top-1">
        <div className="container">
          <div className="footer-contact-wrap">
            <div className="contact-box wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                <i className="fal fa-map-marker-alt" />
              </div>
              <div className="content">
                <h3>Alamat</h3>
                <p>
                  Desa Sukamantri <br /> Kec. Pasar Kemis, Kab. Tangerang
                </p>
              </div>
            </div>
            <div className="contact-box wow fadeInUp" data-wow-delay=".5s">
              <div className="icon">
                <i className="fab fa-whatsapp" />
              </div>
              <div className="content">
                <h3>WhatsApp</h3>
                <p>
                  <a href={`https://wa.me/${orgInfo.whatsapp}`}>
                    {orgInfo.telepon}
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-box wow fadeInUp" data-wow-delay=".7s">
              <div className="icon">
                <i className="far fa-envelope" />
              </div>
              <div className="content">
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${orgInfo.email}`}>{orgInfo.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom color-style">
        <div className="container">
          <div className="footer-wrapper">
            <p className="wow fadeInUp text-center" data-wow-delay=".3s">
              &copy; <Link href="/">RW 011 Desa Sukamantri</Link> - 2025. Hak
              cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer3 = () => {
  return (
    <footer className="footer-section footer-bg-color section-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-md-6 col-xl-4 col-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 className="text-white">Hubungi Kami</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact-items">
                      <div className="icon">
                        <i className="fal fa-phone" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href={`tel:${orgInfo.telepon}`}>{orgInfo.telepon}</a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-2">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href={`mailto:${orgInfo.email}`} className="link">
                            {orgInfo.email}
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-3">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <h6>
                          Desa Sukamantri, Kec. Pasar Kemis <br />
                          Kab. Tangerang, Banten
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <a href={orgInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href={orgInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href={orgInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 offset-xl-1 col-12 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <LinksCol
                heading="Tentang Kami"
                links={aboutLinks}
                links2={layananLinks}
                layout={3}
              />
            </div>
            <div
              className="col-md-6 col-xl-3 col-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <LinksCol
                heading="Informasi"
                links={informasiLinks}
                layout={2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper">
            <p className="wow fadeInUp text-center" data-wow-delay=".3s">
              &copy; <Link href="/">RW 011 Desa Sukamantri</Link> - 2025. Hak
              cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLogoContainer = () => (
  <div
    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
    data-wow-delay=".2s"
  >
    <div className="single-footer-widget">
      <div className="widget-head">
        <Link href="/">
          <Image
            src="/assets/img/logo/white-logo.png"
            width={178}
            height={54}
            alt="Logo RW 011"
          />
        </Link>
      </div>
      <div className="footer-content">
        <p>
          Portal resmi RW 011 Desa Sukamantri, Kecamatan Pasar Kemis, Kabupaten
          Tangerang. Mewujudkan lingkungan yang aman, nyaman, dan sejahtera.
        </p>
        <div className="social-icon d-flex align-items-center">
          <a href={orgInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" />
          </a>
          <a href={orgInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href={orgInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

type LinkItem = { link: string; text: string };
const LinksCol = ({
  heading,
  links = [],
  links2 = [],
  layout = 1,
}: {
  heading?: string;
  layout?: number;
  links?: LinkItem[];
  links2?: LinkItem[];
}) => (
  <div className="single-footer-widget">
    {heading && (
      <div className="widget-head">
        <h4 className={layout == 1 ? "text-white" : ""}>{heading}</h4>
      </div>
    )}
    {layout == 3 ? (
      <Fragment>
        <div className="special-menu">
          <ul>
            {links.map((e, i) => (
              <li key={i}>
                <Link href={e.link}>{e.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="special-menu">
          <ul>
            {links2.map((e, i) => (
              <li key={i}>
                <Link href={e.link}>{e.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    ) : (
      <ul className="list-area">
        {links.map((e, i) => (
          <li key={i}>
            <Link href={e.link}>
              {layout == 1 && <i className="far fa-chevron-double-right" />}
              {e.text}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const tautanUtama = [
  { link: "/about", text: "Tentang Kami" },
  { link: "/team", text: "Struktur Pengurus" },
  { link: "/data-warga", text: "Data Warga" },
  { link: "/galeri", text: "Galeri Kegiatan" },
  { link: "/news", text: "Berita & Artikel" },
];
const tautanLayanan = [
  { link: "/dokumen", text: "Dokumen Publik" },
  { link: "/infaq", text: "Infaq Online" },
  { link: "/transparansi-infaq", text: "Transparansi Infaq" },
  { link: "/saran", text: "Saran & Masukan" },
  { link: "/contact", text: "Hubungi Kami" },
];
const aboutLinks = [
  { link: "/", text: "Beranda" },
  { link: "/about", text: "Tentang Kami" },
  { link: "/team", text: "Pengurus" },
  { link: "/data-warga", text: "Data Warga" },
  { link: "/aset", text: "Daftar Aset" },
  { link: "/wilayah", text: "Wilayah" },
  { link: "/contact", text: "Kontak" },
];
const layananLinks = [
  { link: "/galeri", text: "Galeri" },
  { link: "/news", text: "Berita" },
  { link: "/dokumen", text: "Dokumen" },
  { link: "/infaq", text: "Infaq Online" },
  { link: "/saran", text: "Saran" },
];
const informasiLinks = [
  { link: "/team", text: "Struktur Pengurus" },
  { link: "/data-warga", text: "Data Warga" },
  { link: "/aset", text: "Daftar Aset" },
  { link: "/wilayah", text: "Gambaran Wilayah" },
  { link: "/galeri", text: "Galeri Kegiatan" },
  { link: "/news", text: "Berita & Artikel" },
  { link: "/transparansi-infaq", text: "Transparansi Infaq" },
];
