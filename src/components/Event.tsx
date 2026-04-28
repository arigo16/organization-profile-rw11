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
                <div className="col-lg-8 wow fadeInUp">
                  <div
                    className="text-center py-5"
                    style={{
                      background: "#f8f9fa",
                      borderRadius: 12,
                      border: "2px dashed #dee2e6",
                    }}
                  >
                    <i
                      className="fas fa-drafting-compass mb-3"
                      style={{ fontSize: 48, color: "#adb5bd" }}
                    />
                    <h4 className="text-muted mb-2">Masterplan Belum Tersedia</h4>
                    <p className="text-muted mb-0">
                      Dokumen masterplan wilayah RW 011 sedang dalam proses penyusunan.
                    </p>
                  </div>
                </div>
              </div>
            </Tab.Pane>

            {/* Batas Wilayah */}
            <Tab.Pane eventKey="batas" className="tab-pane fade">
              <div className="row justify-content-center">
                <div className="col-lg-8 wow fadeInUp">
                  <div
                    className="text-center py-5"
                    style={{
                      background: "#f8f9fa",
                      borderRadius: 12,
                      border: "2px dashed #dee2e6",
                    }}
                  >
                    <i
                      className="fas fa-border-all mb-3"
                      style={{ fontSize: 48, color: "#adb5bd" }}
                    />
                    <h4 className="text-muted mb-2">Peta Batas Wilayah Belum Tersedia</h4>
                    <p className="text-muted mb-0">
                      Peta batas wilayah RW 011 sedang dalam proses pemetaan.
                    </p>
                  </div>
                </div>
              </div>
            </Tab.Pane>

            {/* Foto Udara */}
            <Tab.Pane eventKey="udara" className="tab-pane fade">
              <div className="row justify-content-center">
                <div className="col-lg-8 wow fadeInUp">
                  <div
                    className="text-center py-5"
                    style={{
                      background: "#f8f9fa",
                      borderRadius: 12,
                      border: "2px dashed #dee2e6",
                    }}
                  >
                    <i
                      className="fas fa-helicopter mb-3"
                      style={{ fontSize: 48, color: "#adb5bd" }}
                    />
                    <h4 className="text-muted mb-2">Foto Udara Belum Tersedia</h4>
                    <p className="text-muted mb-0">
                      Foto udara kawasan RW 011 sedang dalam proses pengambilan.
                    </p>
                  </div>
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
