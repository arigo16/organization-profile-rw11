"use client";
import { dataRT, statistik } from "@/data/rw011";
import Accordion from "react-bootstrap/Accordion";
import Counter from "./Counter";

export const DataWargaAccordion = () => {
  return (
    <section className="faq-section fix section-padding">
      <div className="container">
        {/* Statistik Counter */}
        <div className="counter-wrapper mb-5">
          <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
            <div className="icon">
              <i className="fas fa-home" style={{ fontSize: "36px" }} />
            </div>
            <div className="content">
              <h2>
                <span className="count">
                  <Counter end={statistik.totalRT} />
                </span>
              </h2>
              <p>Rukun Tetangga</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
            <div className="icon">
              <i className="fas fa-users" style={{ fontSize: "36px" }} />
            </div>
            <div className="content">
              <h2>
                <span className="count">
                  <Counter end={statistik.totalKK} />
                </span>
              </h2>
              <p>Kepala Keluarga</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
            <div className="icon">
              <i
                className="fas fa-user-friends"
                style={{ fontSize: "36px" }}
              />
            </div>
            <div className="content">
              <h2>
                <span className="count">
                  <Counter end={statistik.totalWarga} />
                </span>
              </h2>
              <p>Total Warga</p>
            </div>
          </div>
        </div>

        {/* Data Warga per RT */}
        <div className="section-title text-center mb-4">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-clipboard-list" />
            Data per RT
          </span>
          <h2 className="mt-char-animation">Data Warga Per RT</h2>
        </div>
        <div className="faq-wrapper">
          <div className="faq-accordion">
            <Accordion defaultActiveKey="rt-001">
              {dataRT.map((rt) => (
                <Accordion.Item
                  key={rt.nomorRT}
                  eventKey={`rt-${rt.nomorRT}`}
                  className="wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Accordion.Header>
                    <strong>RT {rt.nomorRT}</strong>
                    <span className="ms-2">
                      — Ketua: {rt.ketuaRT} | {rt.totalKK} KK | {rt.totalWarga}{" "}
                      Warga
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th style={{ width: "60px" }}>No</th>
                            <th>Nama Warga</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rt.warga.map((w, i) => (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{w.nama}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-muted mt-2">
                      <small>
                        * Menampilkan {rt.warga.length} dari {rt.totalWarga}{" "}
                        warga terdaftar
                      </small>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

// Keep old exports as aliases
export const Faq1 = DataWargaAccordion;
export const Faq2 = DataWargaAccordion;
