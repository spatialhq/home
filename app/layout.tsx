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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://spatialhq.com";
const SITE_TITLE = "SpatialOS / Field Atlas of Interior Geometries";
const SITE_DESCRIPTION =
  "Crowdsourced LiDAR scans from any phone, reconstructed into robotics-ready datasets for embodied AI, robotics, and spatial computing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s / SpatialOS",
  },
  description: SITE_DESCRIPTION,
  applicationName: "SpatialOS",
  keywords: [
    "SpatialOS",
    "spatial data",
    "LiDAR",
    "point cloud",
    "3D scanning",
    "robotics dataset",
    "embodied AI",
    "spatial computing",
    "MCP",
    "reconstruction",
    "field atlas",
    "open source",
  ],
  authors: [{ name: "SpatialOS", url: "https://github.com/spatialhq" }],
  creator: "SpatialOS",
  publisher: "SpatialOS",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SpatialOS",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: "@spatialofficial",
    creator: "@spatialofficial",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
