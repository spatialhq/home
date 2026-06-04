import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Tinos } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-tinos",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SpatialOS / Field Atlas of Interior Geometries",
  description:
    "Crowdsourced LiDAR scans from any phone, reconstructed into robotics-ready datasets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} ${tinos.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
