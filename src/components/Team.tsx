import { pengurusRW, Pengurus } from "@/data/rw011";
import Link from "next/link";

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

function AvatarCircle({ p, idx, size = 100 }: { p: Pengurus; idx: number; size?: number }) {
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

export const Team = () => {
  const topPengurus = pengurusRW.filter((p) => p.bidang === "Pengurus Inti");
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
        <div className="row g-4 justify-content-center">
          {topPengurus.map((member, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.2}s`}
            >
              <div className="text-center p-4">
                <AvatarCircle p={member} idx={index} size={120} />
                <h5 className="mt-3 mb-1">{member.nama}</h5>
                <p className="text-muted mb-0">{member.jabatan}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
            Lihat Semua Pengurus
          </Link>
        </div>
      </div>
    </section>
  );
};
