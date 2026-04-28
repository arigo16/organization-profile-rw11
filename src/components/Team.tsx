"use client";

import { usePengurus } from "@/hooks/useApi";
import { pengurusRW } from "@/data/rw011";
import type { Pengurus as ApiPengurus } from "@/types/api";
import { getImageUrl } from "@/utils/storage";
import Link from "next/link";
import Image from "next/image";

// Helper untuk mendapatkan foto dari member (API atau lokal)
function getMemberFoto(member: ApiPengurus | typeof pengurusRW[0]): string | null {
  if ('foto' in member && member.foto) {
    return member.foto;
  }
  return null;
}

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

function AvatarCircle({
  nama,
  foto,
  idx,
  size = 100
}: {
  nama: string;
  foto?: string | null;
  idx: number;
  size?: number
}) {
  const color = avatarColors[idx % avatarColors.length];

  if (foto) {
    const imageUrl = getImageUrl(foto);
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <Image
          src={imageUrl}
          alt={nama}
          width={size}
          height={size}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          unoptimized={imageUrl.startsWith("http")}
        />
      </div>
    );
  }

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
      {getInitials(nama)}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="row g-4 justify-content-center">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="col-xl-3 col-lg-6 col-md-6">
          <div className="text-center p-4">
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "#e0e0e0",
                margin: "0 auto",
              }}
            />
            <div
              className="mt-3"
              style={{ height: 20, background: "#e0e0e0", borderRadius: 4 }}
            />
            <div
              className="mt-2"
              style={{ height: 16, width: "60%", background: "#e0e0e0", borderRadius: 4, margin: "0 auto" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export const Team = () => {
  const { data, isLoading, isError } = usePengurus({ bidang: "Pengurus Inti", is_active: true });

  // Fallback ke data lokal
  const topPengurus = isError || !data?.data
    ? pengurusRW.filter((p) => p.bidang === "Pengurus Inti")
    : data.data;

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
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="row g-4 justify-content-center">
            {topPengurus.map((member, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
              >
                <div className="text-center p-4">
                  <AvatarCircle
                    nama={member.nama}
                    foto={getMemberFoto(member)}
                    idx={index}
                    size={120}
                  />
                  <h5 className="mt-3 mb-1">{member.nama}</h5>
                  <p className="text-muted mb-0">{member.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-5">
          <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
            Lihat Semua Pengurus
          </Link>
        </div>
      </div>
    </section>
  );
};
