import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";

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
  title: "KCS | KAVIN Construction and Surveyors",
  description: "Precision Land Surveying & Civil Construction Experts in Erode. Licensed Building Surveyor services including 3D Elevation, Vastu Plan, and more.",
};

import PageTransition from "@/components/ui/PageTransition";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-body bg-white text-charcoal antialiased selection:bg-accent selection:text-primary">
        <Navbar />
        <PageTransition>
          <main className="flex-grow">{children}</main>
          <Footer />
        </PageTransition>
        <WhatsappButton />
      </body>
    </html>
  );
}


