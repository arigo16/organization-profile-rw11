import { transaksiInfaq } from "@/data/rw011";

const formatRupiah = (num: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);

const formatTanggal = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const TransparansiInfaqSection = () => {
  const totalMasuk = transaksiInfaq
    .filter((t) => t.jenis === "masuk")
    .reduce((sum, t) => sum + t.jumlah, 0);
  const totalKeluar = transaksiInfaq
    .filter((t) => t.jenis === "keluar")
    .reduce((sum, t) => sum + t.jumlah, 0);
  const saldo = totalMasuk - totalKeluar;

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row g-4">
          {/* Sidebar Ringkasan */}
          <div className="col-lg-4">
            <div className="main-sidebar">
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Ringkasan Keuangan</h3>
                </div>
                <div className="p-3">
                  <div className="d-flex justify-content-between mb-3">
                    <span>Total Infaq Masuk</span>
                    <strong className="text-success">
                      {formatRupiah(totalMasuk)}
                    </strong>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Total Pengeluaran</span>
                    <strong className="text-danger">
                      {formatRupiah(totalKeluar)}
                    </strong>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>
                      <strong>Saldo</strong>
                    </span>
                    <strong style={{ fontSize: "18px", color: "var(--theme-color)" }}>
                      {formatRupiah(saldo)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Keterangan</h3>
                </div>
                <div className="p-3">
                  <p>
                    <span
                      className="badge me-2"
                      style={{ background: "#28a745" }}
                    >
                      Masuk
                    </span>
                    Infaq yang diterima dari warga
                  </p>
                  <p>
                    <span
                      className="badge me-2"
                      style={{ background: "#dc3545" }}
                    >
                      Keluar
                    </span>
                    Pengeluaran untuk kegiatan dan fasilitas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabel Transaksi */}
          <div className="col-lg-8">
            <div className="section-title mb-4">
              <h2 className="mt-char-animation">Riwayat Transaksi</h2>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th style={{ width: "50px" }}>No</th>
                    <th>Tanggal</th>
                    <th>Keterangan</th>
                    <th>Jenis</th>
                    <th className="text-end">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {transaksiInfaq.map((trx, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{formatTanggal(trx.tanggal)}</td>
                      <td>{trx.keterangan}</td>
                      <td>
                        <span
                          className="badge"
                          style={{
                            background:
                              trx.jenis === "masuk" ? "#28a745" : "#dc3545",
                          }}
                        >
                          {trx.jenis === "masuk" ? "Masuk" : "Keluar"}
                        </span>
                      </td>
                      <td
                        className="text-end"
                        style={{
                          color:
                            trx.jenis === "masuk" ? "#28a745" : "#dc3545",
                          fontWeight: "bold",
                        }}
                      >
                        {trx.jenis === "masuk" ? "+" : "-"}
                        {formatRupiah(trx.jumlah)}
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
  );
};
