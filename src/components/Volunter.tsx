import { pengurusRW, bidangOrder, Pengurus } from "@/data/rw011";

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

function AvatarCircle({ p, idx, size = 120 }: { p: Pengurus; idx: number; size?: number }) {
  const color = avatarColors[idx % avatarColors.length];
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        fontSize: size * 0.36,
        fontWeight: 700,
        color: "#fff",
        letterSpacing: 2,
      }}
    >
      {getInitials(p.nama)}
    </div>
  );
}

export const Volunter = () => {
  const pengurusInti = pengurusRW.filter((p) => p.bidang === "Pengurus Inti");
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
        <div className="row g-4 justify-content-center">
          {pengurusInti.map((p, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.15}s`}
            >
              <div className="text-center p-4">
                <AvatarCircle p={p} idx={index} size={120} />
                <h5 className="mt-3 mb-1">{p.nama}</h5>
                <p className="text-muted mb-0">{p.jabatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const VolunteersPage = () => {
  const grouped = bidangOrder.map((bidang) => ({
    bidang,
    anggota: pengurusRW.filter((p) => p.bidang === bidang),
  }));

  let globalIdx = 0;

  return (
    <section className="volunter-section fix section-padding">
      <div className="container">
        <div className="section-title text-center mb-5">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-users" />
            Struktur Pengurus
          </span>
          <h2 className="mt-char-animation">Pengurus RW 011</h2>
          <p className="wow fadeInUp" data-wow-delay=".3s">
            Periode 2024–2029
          </p>
        </div>

        {grouped.map((group) => {
          const isInti = group.bidang === "Pengurus Inti";
          const isRT = group.bidang === "Ketua RT";
          const showJabatan = isInti || isRT;

          let icon = "fas fa-briefcase";
          let label = `Sie. ${group.bidang}`;
          if (isInti) { icon = "fas fa-star"; label = group.bidang; }
          if (isRT) { icon = "fas fa-home"; label = group.bidang; }

          return (
            <div key={group.bidang} className="mb-5">
              <h4
                className="text-center mb-4 wow fadeInUp"
                style={{
                  borderBottom: "2px solid var(--theme-2, #2563eb)",
                  paddingBottom: 12,
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <i className={`${icon} me-2`} />
                {label}
              </h4>
              <div className="row g-4 justify-content-center">
                {group.anggota.map((p) => {
                  const idx = globalIdx++;
                  return (
                    <div
                      key={idx}
                      className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay={`${0.2 + (idx % 4) * 0.15}s`}
                    >
                      <div className="text-center p-3">
                        <AvatarCircle p={p} idx={idx} size={isInti ? 120 : 100} />
                        <h5 className="mt-3 mb-1" style={{ fontSize: isInti ? "1.1rem" : "1rem" }}>
                          {p.nama}
                        </h5>
                        {showJabatan && (
                          <p className="text-muted mb-0">{p.jabatan}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
