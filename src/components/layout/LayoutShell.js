"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";
import PageTransition from "@/components/ui/PageTransition";
import GalaxyBackground from "@/components/ui/GalaxyBackground";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <>
      <GalaxyBackground />
      <Navbar />

      <PageTransition>
        <main className="flex-grow">{children}</main>
        <Footer />
      </PageTransition>

      <div className="fixed bottom-8 right-8 z-[100]">
        <WhatsappButton />
      </div>
    </>
  );
}
