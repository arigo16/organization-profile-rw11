
import "@css/swiper-bundle.min.css";
import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/main.css";
import type { Metadata } from "next";
import { Chelsea_Market, DM_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/layout/Preloader";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});
const chelsea_market = Chelsea_Market({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-chelsea_market",
});

export const metadata: Metadata = {
  title: "Portal RW 011 - Desa Sukamantri, Pasar Kemis, Tangerang",
  description:
    "Portal resmi Rukun Warga 011, Desa Sukamantri, Kecamatan Pasar Kemis, Kabupaten Tangerang. Informasi, berita, data warga, dan layanan publik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${chelsea_market.variable} ${dmSans.variable}`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
