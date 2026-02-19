import { infaqInfo } from "@/data/rw011";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";
import Image from "next/image";
import Link from "next/link";

const InfaqPage = () => {
  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  return (
    <DanboxLayout>
      <PageBanner pageName="Infaq Online" />
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {/* Info Rekening & QR */}
            <div className="col-lg-5">
              <div
                className="p-4 rounded wow fadeInUp"
                style={{ background: "#f8f9fa" }}
              >
                <h3 className="mb-4">
                  <i className="fas fa-hand-holding-heart me-2" />
                  Informasi Rekening
                </h3>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th>Bank</th>
                      <td>{infaqInfo.namaBank}</td>
                    </tr>
                    <tr>
                      <th>No. Rekening</th>
                      <td>
                        <strong style={{ fontSize: "18px" }}>
                          {infaqInfo.nomorRekening}
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <th>Atas Nama</th>
                      <td>{infaqInfo.atasNama}</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <h5 className="text-center mb-3">Scan QRIS</h5>
                <div className="text-center">
                  <Image
                    width={250}
                    height={250}
                    src={infaqInfo.qrCodeImage}
                    alt="QR Code QRIS"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <p className="text-center text-muted mt-2">
                  <small>
                    Scan QR code di atas menggunakan aplikasi e-wallet atau
                    mobile banking Anda
                  </small>
                </p>
              </div>
              <div className="mt-4 text-center">
                <Link href="/transparansi-infaq" className="theme-btn">
                  <i className="fas fa-chart-bar me-2" />
                  Lihat Transparansi Infaq
                </Link>
              </div>
            </div>

            {/* Form Infaq */}
            <div className="col-lg-7">
              <div className="main-contact-form-items wow fadeInUp">
                <div className="section-title">
                  <span className="sub-title color-2">
                    <i className="fas fa-hand-holding-heart" />
                    Infaq Online
                  </span>
                  <h2>Salurkan Infaq Anda</h2>
                </div>
                <p className="mb-4">
                  Jazakumullahu khairan atas niat baik Anda untuk berinfaq.
                  Setiap rupiah yang Anda salurkan akan digunakan untuk
                  kepentingan warga dan lingkungan RW 011.
                </p>

                {/* Pilihan Nominal */}
                <h5 className="mb-3">Pilih Nominal</h5>
                <div className="row g-2 mb-4">
                  {infaqInfo.nominalPreset.map((nominal, i) => (
                    <div key={i} className="col-4 col-md-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100"
                        style={{ padding: "10px" }}
                      >
                        {formatRupiah(nominal)}
                      </button>
                    </div>
                  ))}
                </div>

                <form action="#" className="mt-3">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nama Lengkap"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          placeholder="No. HP / WhatsApp"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="nominal"
                          placeholder="Nominal (Rp)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <select name="metode" className="form-select">
                          <option value="">Pilih Metode Pembayaran</option>
                          <option value="transfer">Transfer Bank</option>
                          <option value="qris">QRIS</option>
                          <option value="tunai">Tunai</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <textarea
                          name="keterangan"
                          placeholder="Keterangan (opsional)"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn">
                        <i className="fas fa-paper-plane me-2" />
                        Konfirmasi Infaq
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default InfaqPage;
