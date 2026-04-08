"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initial Site Load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Route Change Transition
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // Quick transition
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="initial-loader"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-primary flex flex-col items-center justify-center p-8"
          >
             {/* Architectural Grid Background */}
             <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
             
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5 }}
               className="relative z-10 w-64 h-64 bg-white p-4 rounded-sm shadow-2xl mb-12 flex items-center justify-center"
             >
                <img 
                  src="/images/kcs-logo.png" 
                  alt="Kavin Logo" 
                  className="w-full h-full object-contain"
                />
             </motion.div>


             
             {/* Technical Progress Bar */}
             <div className="relative w-64 h-1 bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute left-0 top-0 h-full bg-accent"
                />
             </div>
             <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-accent">Initializing Precision Architecture</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isTransitioning && !isLoading && (
          <motion.div
            key="route-curtain"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[150] bg-[#0A1F44] flex items-center justify-center pointer-events-none"
          >
             <div className="absolute inset-0 bg-blueprint-fine opacity-10" />
             <div className="relative w-40 h-40 bg-white p-3 rounded-sm opacity-50 flex items-center justify-center">
                <img 
                  src="/images/kcs-logo.png" 
                  alt="Kavin Logo" 
                  className="w-full h-full object-contain"
                />
              </div>


          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
