"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";
import ChatBot from "@/components/ui/ChatBot";
import PageTransition from "@/components/ui/PageTransition";
import GalaxyBackground from "@/components/ui/GalaxyBackground";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const [showUI, setShowUI] = useState(pathname !== "/");

  useEffect(() => {
    if (pathname !== "/") {
      setShowUI(true);
      return;
    }

    const handleScroll = () => {
      // Show UI only after scrolling past the hero (100vh)
      const threshold = window.innerHeight - 150;
      setShowUI(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (isAdmin) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <>
      <GalaxyBackground />
      <AnimatePresence>
        {showUI && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full z-[100]"
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

      <PageTransition>
        <main className="flex-grow">{children}</main>
        <Footer />
      </PageTransition>

      <AnimatePresence>
        {showUI && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-0 right-0 z-[100]"
          >
            <WhatsappButton />
            <ChatBot />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
