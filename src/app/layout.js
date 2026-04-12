import { Sora, Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/layout/LayoutShell";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Kavin Construction and Surveyors | Elite Civil & Surveying Erode",
  description: "Licensed Building Surveyor in Erode. Experts in DGPS Surveying, ETS Measurement, 3D Elevation, Vastu Planning, and Civil Construction throughout Tamil Nadu.",
  keywords: ["Land Surveyor Erode", "DGPS Survey Tamil Nadu", "Civil Construction Erode", "3D Elevation Design", "Vastu Floor Plans", "Licensed Surveyor", "Kavin Constructions", "Boundary Dispute Resolution", "Building Estimation Erode"],
  authors: [{ name: "Er. R. Kavin Kumar" }],
  creator: "Kavin Construction and Surveyors",
  openGraph: {
    title: "Kavin Construction and Surveyors | Precision & Excellence",
    description: "Centimeter-level accuracy in land surveying and structural excellence in civil construction.",
    url: "https://kavinconstructions.in",
    siteName: "Kavin Construction and Surveyors",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-body bg-white text-charcoal antialiased selection:bg-accent selection:text-primary">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}


