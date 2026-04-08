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
  title: "Kavin | Kavin Construction and Surveyors",
  description: "Precision Land Surveying & Civil Construction Experts. Licensed Building Surveyor services including 3D Elevation, Vastu Plan, and more.",
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


