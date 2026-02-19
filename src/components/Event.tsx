"use client";
import { orgInfo, wilayahInfo } from "@/data/rw011";
import Image from "next/image";
import { Nav, Tab } from "react-bootstrap";

export const WilayahSection = () => {
  const tabs = [
    { key: "peta", label: "Peta Lokasi", icon: "fas fa-map-marked-alt" },
    { key: "masterplan", label: "Masterplan", icon: "fas fa-drafting-compass" },
    { key: "batas", label: "Batas Wilayah", icon: "fas fa-border-all" },
    { key: "udara", label: "Foto Udara", icon: "fas fa-helicopter" },
  ];

  return (
    <section className="event-section-4 fix section-padding">
      <div className="container">
        <Tab.Container defaultActiveKey="peta">
          <div className="event-tab-header">
            <Nav as={"ul"} className="nav mb-4" role="tablist">
              {tabs.map((tab, i) => (
                <Nav.Item
                  key={tab.key}
                  as="li"
                  className="nav-item wow fadeInUp"
                  data-wow-delay={`${0.2 + i * 0.1}s`}
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
                    <i className={`${tab.icon} me-2`} />
                    {tab.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <Tab.Content className="tab-content">
            {/* Peta Lokasi */}
            <Tab.Pane eventKey="peta" className="tab-pane fade">
              <div className="row">
                <div className="col-12">
                  <div
                    className="office-google-map-wrapper wow fadeInUp"
                    style={{ height: "500px" }}
                  >
                    <iframe
                      src={orgInfo.googleMapsEmbed}
                      style={{ border: 0, width: "100%", height: "100%" }}
                      allowFullScreen={true}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Tab.Pane>

            {/* Masterplan */}
            <Tab.Pane eventKey="masterplan" className="tab-pane fade">
              <div className="row justify-content-center">
                <div className="col-lg-10 wow fadeInUp">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src={wilayahInfo.masterplanImage}
                    alt="Masterplan RW 011"
                  />
                  <p className="text-center mt-3 text-muted">
                    Masterplan Wilayah RW 011 Desa Sukamantri
                  </p>
                </div>
              </div>
            </Tab.Pane>

            {/* Batas Wilayah */}
            <Tab.Pane eventKey="batas" className="tab-pane fade">
              <div className="row g-4">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src={wilayahInfo.petaLokasi}
                    alt="Peta Lokasi RW 011"
                  />
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                  <h3 className="mb-4">Informasi Wilayah</h3>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th style={{ width: "40%" }}>Luas Wilayah</th>
                        <td>{wilayahInfo.luasWilayah}</td>
                      </tr>
                      <tr>
                        <th>Jumlah RT</th>
                        <td>{wilayahInfo.jumlahRT} RT</td>
                      </tr>
                      <tr>
                        <th>Batas Utara</th>
                        <td>{wilayahInfo.batasUtara}</td>
                      </tr>
                      <tr>
                        <th>Batas Selatan</th>
                        <td>{wilayahInfo.batasSelatan}</td>
                      </tr>
                      <tr>
                        <th>Batas Timur</th>
                        <td>{wilayahInfo.batasTimur}</td>
                      </tr>
                      <tr>
                        <th>Batas Barat</th>
                        <td>{wilayahInfo.batasBarat}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Tab.Pane>

            {/* Foto Udara */}
            <Tab.Pane eventKey="udara" className="tab-pane fade">
              <div className="row justify-content-center">
                <div className="col-lg-10 wow fadeInUp">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src={wilayahInfo.aerialPhoto}
                    alt="Foto Udara RW 011"
                  />
                  <p className="text-center mt-3 text-muted">
                    Foto udara kawasan RW 011 Desa Sukamantri
                  </p>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

// Keep old exports as aliases
export const Event1 = WilayahSection;
export const Event2 = WilayahSection;
export const EventPage = WilayahSection;
