import { pengurusRW } from "@/data/rw011";
import Image from "next/image";
import Link from "next/link";

export const Team1 = () => {
  const topPengurus = pengurusRW.filter((p) => p.kategori === "rw").slice(0, 4);
  return (
    <section className="team-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-users" />
            Pengurus RW
          </span>
          <h2 className="mt-char-animation">Struktur Pengurus</h2>
        </div>
      </div>
      <div className="row g-0">
        {topPengurus.map((member, index) => (
          <div
            key={index}
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay={`${0.2 + index * 0.2}s`}
          >
            <div className="single-team-items">
              <div className="team-image">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src={member.foto}
                  alt={member.nama}
                />
                <div className="tema-main-area">
                  <div className="team-content">
                    <p>{member.jabatan}</p>
                    <h3>
                      <Link href="/team">{member.nama}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
          Lihat Semua Pengurus
        </Link>
      </div>
    </section>
  );
};

export const Team2 = () => {
  const topPengurus = pengurusRW.filter((p) => p.kategori === "rw").slice(0, 3);
  return (
    <section className="team-section fix section-bg section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-users" />
            Pengurus
          </span>
          <h2 className="mt-char-animation">
            Pengurus Inti <br />
            <span>RW 011</span>
          </h2>
        </div>
        <div className="row">
          {topPengurus.map((member, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.2}s`}
            >
              <div className="team-card-items">
                <div className="team-image">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src={member.foto}
                    alt={member.nama}
                  />
                  <div className="team-content">
                    <h3>
                      <Link href="/team">{member.nama}</Link>
                    </h3>
                    <p>{member.jabatan}</p>
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
