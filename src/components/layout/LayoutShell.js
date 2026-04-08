"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";
import PageTransition from "@/components/ui/PageTransition";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      <PageTransition>
        <main className="flex-grow">{children}</main>
        {!isAdmin && <Footer />}
      </PageTransition>
      {!isAdmin && <WhatsappButton />}
    </>
  );
}
