import { programInovasi } from "@/data/rw011";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";
import Image from "next/image";

const ProgramPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Program & Inovasi" />

      {/* Intro */}
      <section className="section-padding pb-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title color-2 wow fadeInUp">
              <i className="fas fa-lightbulb" />
              Inovasi RW 011
            </span>
            <h2 className="mt-char-animation">Program & Inovasi</h2>
          </div>
          <p
            className="text-center wow fadeInUp mx-auto"
            data-wow-delay=".3s"
            style={{ maxWidth: "700px" }}
          >
            RW 011 Desa Sukamantri mengembangkan berbagai program inovatif untuk
            meningkatkan kualitas hidup dan pelayanan bagi seluruh warga. Setiap
            program memiliki portal tersendiri yang bisa diakses secara online.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      {programInovasi.map((program, index) => (
        <section
          key={program.slug}
          className={`section-padding ${index < programInovasi.length - 1 ? "pb-0" : ""}`}
        >
          <div className="container">
            <div
              className={`row g-4 align-items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="about-image-items">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                    }}
                    src={program.foto}
                    alt={program.nama}
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-title color-2">
                      <i className={program.icon} />
                      {program.nama}
                    </span>
                    <h2>{program.nama}</h2>
                  </div>
                  <p className="mt-3 mb-4">{program.deskripsi}</p>
                  <ul className="checked-list mb-4">
                    {program.fitur.map((f, i) => (
                      <li key={i}>
                        <i className="far fa-check-circle me-2" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={program.portalUrl}
                    className="theme-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt me-2" />
                    Buka Portal {program.nama}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </DanboxLayout>
  );
};

export default ProgramPage;
