import { pengurusRW } from "@/data/rw011";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";

const avatarColors = [
  "#2563eb", "#7c3aed", "#db2777", "#ea580c", "#16a34a",
  "#0891b2", "#4f46e5", "#c026d3", "#d97706", "#059669",
];

function getInitials(nama: string) {
  return nama
    .split(" ")
    .filter((w) => !["H.", "Hj."].includes(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const TeamDetailsPage = () => {
  const pengurus = pengurusRW[0]; // Default: Ketua RW
  const color = avatarColors[0];

  return (
    <DanboxLayout>
      <PageBanner pageName="Detail Pengurus" />
      <section className="team-details-section fix section-padding">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4 text-center">
                <div
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    fontSize: 72,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: 3,
                  }}
                >
                  {getInitials(pengurus.nama)}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="team-details-content">
                  <div className="details-info">
                    <h3>{pengurus.nama}</h3>
                    <span>{pengurus.jabatan}</span>
                  </div>
                  <p className="mt-3">
                    {pengurus.nama} menjabat sebagai {pengurus.jabatan} RW 011
                    Desa Sukamantri untuk periode {pengurus.periode}. Beliau
                    bertanggung jawab atas koordinasi seluruh kegiatan dan
                    program kerja di lingkungan RW 011.
                  </p>
                  <div className="mt-4">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th style={{ width: "40%" }}>Jabatan</th>
                          <td>{pengurus.jabatan}</td>
                        </tr>
                        <tr>
                          <th>Bidang</th>
                          <td>{pengurus.bidang}</td>
                        </tr>
                        <tr>
                          <th>Periode</th>
                          <td>{pengurus.periode}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-single-history pt-5">
              <div className="title">
                <h3>Tentang Pengurus RW 011</h3>
              </div>
              <p className="mt-3">
                Pengurus RW 011 Desa Sukamantri dipilih melalui musyawarah warga
                dan bertugas selama satu periode kepengurusan. Setiap pengurus
                memiliki tanggung jawab masing-masing sesuai dengan bidangnya
                untuk memastikan kelancaran kegiatan dan pelayanan kepada warga.
              </p>
              <h5 className="pt-4">Tugas & Tanggung Jawab</h5>
              <ul className="checked-list mt-3">
                <li>
                  <i className="far fa-check" /> Mengkoordinasikan kegiatan
                  kemasyarakatan
                </li>
                <li>
                  <i className="far fa-check" /> Memfasilitasi pelayanan
                  administrasi warga
                </li>
                <li>
                  <i className="far fa-check" /> Menjaga keamanan dan
                  ketertiban lingkungan
                </li>
                <li>
                  <i className="far fa-check" /> Mengelola keuangan dan aset RW
                  secara transparan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default TeamDetailsPage;
