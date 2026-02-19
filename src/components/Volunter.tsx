import { pengurusRW } from "@/data/rw011";
import Image from "next/image";
import Link from "next/link";

export const Volunter = () => {
  const pengurusInti = pengurusRW.filter((p) => p.kategori === "rw");
  return (
    <section className="volunter-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-users" />
            Pengurus RW
          </span>
          <h2 className="mt-char-animation">Pengurus Inti RW 011</h2>
        </div>
        <div className="row">
          {pengurusInti.slice(0, 3).map((p, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
              <div className="volunter-items">
                <div className="volunter-image">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src={p.foto}
                    alt={p.nama}
                  />
                  <div className="volunter-content text-center">
                    <h3>
                      <Link href="/team">{p.nama}</Link>
                    </h3>
                    <p>{p.jabatan}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const VolunteersPage = () => {
  const pengurusInti = pengurusRW.filter((p) => p.kategori === "rw");
  const ketuaRT = pengurusRW.filter((p) => p.kategori === "rt");

  return (
    <section className="volunter-section fix section-padding">
      <div className="container">
        {/* Pengurus Inti RW */}
        <div className="section-title text-center mb-5">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-users" />
            Pengurus Inti
          </span>
          <h2 className="mt-char-animation">Pengurus RW 011</h2>
          <p className="wow fadeInUp" data-wow-delay=".3s">
            Periode 2024–2029
          </p>
        </div>
        <div className="row g-4">
          {pengurusInti.map((p, idx) => (
            <div
              key={idx}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + (idx % 3) * 0.2}s`}
            >
              <div className="volunter-items mt-0">
                <div className="volunter-image">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src={p.foto}
                    alt={p.nama}
                  />
                  <div className="volunter-content text-center">
                    <h3>
                      <Link href="/team">{p.nama}</Link>
                    </h3>
                    <p>{p.jabatan}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ketua RT */}
        <div className="section-title text-center mt-5 mb-5">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-home" />
            Ketua RT
          </span>
          <h2 className="mt-char-animation">Ketua RT 001 – 008</h2>
        </div>
        <div className="row g-4">
          {ketuaRT.map((p, idx) => (
            <div
              key={idx}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + (idx % 4) * 0.2}s`}
            >
              <div className="volunter-items mt-0">
                <div className="volunter-image">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src={p.foto}
                    alt={p.nama}
                  />
                  <div className="volunter-content text-center">
                    <h3>
                      <Link href="/team">{p.nama}</Link>
                    </h3>
                    <p>{p.jabatan}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
