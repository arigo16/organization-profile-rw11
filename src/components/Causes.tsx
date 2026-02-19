"use client";
import { daftarAset } from "@/data/rw011";
import type { Aset } from "@/data/rw011";
import Image from "next/image";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";

export const AsetPreview = () => {
  const topAset = daftarAset.slice(0, 4);
  return (
    <section className="causes-section fix section-bg section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-building" />
            Aset RW 011
          </span>
          <h2 className="mt-char-animation">Daftar Aset Utama</h2>
        </div>
        <div className="row">
          {topAset.map((item, i) => (
            <div
              key={i}
              className="col-xl-6 wow fadeInUp"
              data-wow-delay={`${0.3 + (i % 2) * 0.2}s`}
            >
              <div className="popular-causes-card-items">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="thumb">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src={item.foto}
                        alt={item.nama}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <h4>
                        <Link href="/aset">{item.nama}</Link>
                      </h4>
                      <p>{item.deskripsi}</p>
                      <div className="progress-items">
                        <span className="point">Kondisi: {item.kondisi}%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: `${item.kondisi}%` }}
                            role="progressbar"
                            aria-valuenow={item.kondisi}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress-goals">
                          <span>
                            Kategori: <b>{item.kategori}</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/aset" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
            Lihat Semua Aset
          </Link>
        </div>
      </div>
    </section>
  );
};

// Keep old name as alias
export const Causes1 = AsetPreview;

const AsetCard = ({ item, delay }: { item: Aset; delay: string }) => (
  <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={delay}>
    <div className="causes-box-items box-shadow">
      <div
        className="causes-image bg-cover"
        style={{ backgroundImage: `url("${item.foto}")` }}
      />
      <div className="cause-content">
        <div className="cause-meta">
          <span className="cause-cat">{item.kategori}</span>
        </div>
        <h4>{item.nama}</h4>
        <p className="mb-3">{item.deskripsi}</p>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${item.kondisi}%` }}
            aria-valuenow={item.kondisi}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div className="cause-amount d-flex justify-content-between mt-2">
          <div className="price-raised">
            <span>Kondisi: {item.kondisi}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const DaftarAsetTab = () => {
  const kategoriList = ["Semua", ...Array.from(new Set(daftarAset.map((a) => a.kategori)))];
  const tabs = kategoriList.map((k, i) => ({
    key: k.toLowerCase().replace(/\s/g, "-"),
    label: k,
    delay: `${0.3 + i * 0.2}s`,
  }));

  const getFiltered = (key: string) => {
    if (key === "semua") return daftarAset;
    return daftarAset.filter(
      (a) => a.kategori.toLowerCase().replace(/\s/g, "-") === key
    );
  };

  return (
    <section className="causes-section fix section-padding fix">
      <div className="container">
        <Tab.Container defaultActiveKey="semua">
          <div className="cuases-tab-header">
            <Nav as="ul" className="nav mb-4" role="tablist">
              {tabs.map((tab) => (
                <Nav.Item
                  key={tab.key}
                  as="li"
                  className="nav-item wow fadeInUp"
                  data-wow-delay={tab.delay}
                  role="presentation"
                >
                  <Nav.Link
                    as="a"
                    href={`#${tab.key}`}
                    eventKey={tab.key}
                    data-bs-toggle="tab"
                    className="nav-link"
                    role="tab"
                  >
                    {tab.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <Tab.Content className="tab-content">
            {tabs.map((tab) => (
              <Tab.Pane key={tab.key} eventKey={tab.key} className="tab-pane fade">
                <div className="row">
                  {getFiltered(tab.key).map((item, i) => (
                    <AsetCard
                      key={i}
                      item={item}
                      delay={`${0.3 + (i % 3) * 0.2}s`}
                    />
                  ))}
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

export const CausesTab = DaftarAsetTab;
