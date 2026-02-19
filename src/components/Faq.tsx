"use client";
import { dataRT, statistik } from "@/data/rw011";
import { wargaPerRT } from "@/data/warga";
import Counter from "./Counter";
import { useState } from "react";

export const DataWargaAccordion = () => {
  const [openRT, setOpenRT] = useState<string | null>(null);
  const [search, setSearch] = useState<Record<string, string>>({});

  const toggle = (rt: string) => setOpenRT(openRT === rt ? null : rt);

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

        {/* Daftar RT */}
        <div className="section-title text-center mb-4">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-clipboard-list" />
            Data per RT
          </span>
          <h2 className="mt-char-animation">Daftar Warga per RT</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {dataRT.map((rt, idx) => {
              const warga = wargaPerRT[rt.nomorRT] || [];
              const isOpen = openRT === rt.nomorRT;
              const searchTerm = (search[rt.nomorRT] || "").toLowerCase();
              const filtered = searchTerm
                ? warga.filter(
                    (w) =>
                      w.nama.toLowerCase().includes(searchTerm) ||
                      w.alamat.toLowerCase().includes(searchTerm)
                  )
                : warga;

              return (
                <div
                  key={rt.nomorRT}
                  className="mb-3 wow fadeInUp"
                  data-wow-delay={`${0.1 + idx * 0.05}s`}
                >
                  {/* Accordion Header */}
                  <div
                    onClick={() => toggle(rt.nomorRT)}
                    style={{
                      cursor: "pointer",
                      background: isOpen
                        ? "var(--theme-2, #2563eb)"
                        : "#f8f9fa",
                      color: isOpen ? "#fff" : "#333",
                      padding: "16px 20px",
                      borderRadius: isOpen ? "8px 8px 0 0" : "8px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <div>
                      <strong>RT {rt.nomorRT}</strong>
                      <span style={{ margin: "0 12px", opacity: 0.6 }}>|</span>
                      <span>Ketua: {rt.ketuaRT}</span>
                      <span style={{ margin: "0 12px", opacity: 0.6 }}>|</span>
                      <span>
                        {warga.length > 0
                          ? `${warga.length} KK`
                          : "Data belum tersedia"}
                      </span>
                    </div>
                    <i
                      className={`fas fa-chevron-${isOpen ? "up" : "down"}`}
                      style={{ fontSize: 14 }}
                    />
                  </div>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div
                      style={{
                        border: "1px solid #e0e0e0",
                        borderTop: "none",
                        borderRadius: "0 0 8px 8px",
                        padding: "16px",
                        background: "#fff",
                      }}
                    >
                      {warga.length > 0 ? (
                        <>
                          {/* Search */}
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Cari nama atau alamat..."
                              value={search[rt.nomorRT] || ""}
                              onChange={(e) =>
                                setSearch({
                                  ...search,
                                  [rt.nomorRT]: e.target.value,
                                })
                              }
                              style={{
                                borderRadius: 6,
                                border: "1px solid #ddd",
                                padding: "8px 12px",
                              }}
                            />
                          </div>

                          {/* Table */}
                          <div className="table-responsive">
                            <table className="table table-striped table-hover table-sm mb-0">
                              <thead>
                                <tr>
                                  <th style={{ width: 60 }}>No</th>
                                  <th>Nama</th>
                                  <th>Alamat</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filtered.map((w) => (
                                  <tr key={w.no}>
                                    <td>{w.no}</td>
                                    <td>{w.nama}</td>
                                    <td>{w.alamat}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          {searchTerm && (
                            <p className="text-muted mt-2 mb-0" style={{ fontSize: 13 }}>
                              Menampilkan {filtered.length} dari {warga.length} data
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="text-center p-3">
                          <i className="fas fa-info-circle me-2 text-muted" />
                          <span className="text-muted">
                            Data warga RT {rt.nomorRT} belum tersedia. Akan
                            segera diperbarui.
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Keep old exports as aliases
export const Faq1 = DataWargaAccordion;
export const Faq2 = DataWargaAccordion;
