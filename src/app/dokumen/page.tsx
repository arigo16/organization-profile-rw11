import { dokumenPublik } from "@/data/rw011";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";
import Link from "next/link";

const DokumenPage = () => {
  const kategoris = [
    "Semua",
    ...Array.from(new Set(dokumenPublik.map((d) => d.kategori))),
  ];

  return (
    <DanboxLayout>
      <PageBanner pageName="Dokumen Publik" />
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {/* Sidebar Kategori */}
            <div className="col-lg-4">
              <div className="main-sidebar">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Kategori Dokumen</h3>
                  </div>
                  <div className="widget_categories">
                    <ul>
                      {kategoris.map((kat, idx) => (
                        <li key={idx}>
                          <Link href="/dokumen">
                            {kat}{" "}
                            <span>
                              {kat === "Semua"
                                ? dokumenPublik.length
                                : dokumenPublik.filter(
                                    (d) => d.kategori === kat
                                  ).length}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Informasi</h3>
                  </div>
                  <p>
                    Dokumen yang tersedia di halaman ini merupakan dokumen publik
                    yang dapat diakses oleh seluruh warga RW 011 Desa
                    Sukamantri. Hubungi sekretariat RW jika Anda membutuhkan
                    dokumen tambahan.
                  </p>
                </div>
              </div>
            </div>

            {/* Daftar Dokumen */}
            <div className="col-lg-8">
              <div className="section-title mb-4">
                <h2 className="mt-char-animation">Daftar Dokumen</h2>
              </div>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th style={{ width: "50px" }}>No</th>
                      <th>Nama Dokumen</th>
                      <th>Kategori</th>
                      <th>Tanggal</th>
                      <th style={{ width: "100px" }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dokumenPublik.map((doc, i) => (
                      <tr key={i} className="wow fadeInUp" data-wow-delay=".1s">
                        <td>{i + 1}</td>
                        <td>
                          <i className="fas fa-file-pdf text-danger me-2" />
                          {doc.nama}
                        </td>
                        <td>
                          <span className="badge bg-secondary">
                            {doc.kategori}
                          </span>
                        </td>
                        <td>{doc.tanggal}</td>
                        <td>
                          <a
                            href={doc.fileUrl}
                            className="theme-btn"
                            style={{
                              padding: "5px 15px",
                              fontSize: "13px",
                            }}
                          >
                            <i className="fas fa-download me-1" /> Unduh
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default DokumenPage;
