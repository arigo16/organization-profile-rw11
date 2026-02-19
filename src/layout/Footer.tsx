import { orgInfo } from "@/data/rw011";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ footer }: { footer: number }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    default:
      return <Footer1 />;
  }
};

export default Footer;

// === Data Link (1 sumber, tanpa duplikasi) ===
const halamanLinks = [
  { link: "/about", text: "Tentang Kami" },
  { link: "/team", text: "Struktur Pengurus" },
  { link: "/data-warga", text: "Data Warga" },
  { link: "/aset", text: "Daftar Aset" },
  { link: "/wilayah", text: "Gambaran Wilayah" },
  { link: "/galeri", text: "Galeri Kegiatan" },
  { link: "/news", text: "Berita & Artikel" },
];

const layananLinks = [
  { link: "/program", text: "Program & Inovasi" },
  { link: "/dokumen", text: "Dokumen Publik" },
  { link: "/infaq", text: "Infaq Online" },
  { link: "/transparansi-infaq", text: "Transparansi Infaq" },
  { link: "/saran", text: "Saran & Masukan" },
  { link: "/contact", text: "Hubungi Kami" },
];

// === Footer ===
const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            {/* Kolom 1: Logo + Deskripsi */}
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
                    Portal resmi RW 011 Desa Sukamantri, Kecamatan Pasar Kemis,
                    Kabupaten Tangerang, Banten.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a
                      href={orgInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href={orgInfo.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href={orgInfo.socialMedia.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom 2: Halaman */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 className="text-white">Halaman</h4>
                </div>
                <ul className="list-area">
                  {halamanLinks.map((e, i) => (
                    <li key={i}>
                      <Link href={e.link}>
                        <i className="far fa-chevron-double-right" />
                        {e.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kolom 3: Layanan */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 className="text-white">Layanan</h4>
                </div>
                <ul className="list-area">
                  {layananLinks.map((e, i) => (
                    <li key={i}>
                      <Link href={e.link}>
                        <i className="far fa-chevron-double-right" />
                        {e.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kolom 4: Kontak */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 className="text-white">Kontak</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact-items">
                      <div className="icon">
                        <i className="fab fa-whatsapp" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href={`https://wa.me/${orgInfo.whatsapp}`}>
                            {orgInfo.telepon}
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-2">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href={`mailto:${orgInfo.email}`}>{orgInfo.email}</a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-3">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <h6>
                          Desa Sukamantri, Kec. Pasar Kemis
                          <br />
                          Kab. Tangerang, Banten
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
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
