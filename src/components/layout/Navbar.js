"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ruler, Triangle } from "lucide-react";
import { cn } from "@/lib/utils";

import { useProjectStore } from "@/store/useProjectStore";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { settings } = useProjectStore();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
        scrolled 
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group relative z-[110]">
             <div className="relative h-12 w-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden transition-all group-hover:bg-white/10 group-hover:scale-105">
              <Image 
                src="/images/kcs-logo.png" 
                alt="KAVIN CONSTRUCTIONS"
                fill
                unoptimized={true}
                className="object-contain p-2 brightness-200 contrast-150"
              />
            </div>

            <div className="ml-4 flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none text-white">KAVIN</span>
              <span className="text-[7px] font-black uppercase tracking-[0.4em] text-accent leading-none mt-1">CONSTRUCTIONS & SURVEYORS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-[10px] font-black uppercase tracking-[0.3em] transition-all group/nav",
                  pathname === link.href ? "text-accent" : "text-white/50 hover:text-white"
                )}
              >
                {link.name}
                <div className={cn(
                  "absolute -bottom-1.5 left-0 w-full h-[2px] bg-accent transition-all duration-300",
                  pathname === link.href ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover/nav:opacity-100 group-hover/nav:scale-50"
                )} />
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent text-primary px-8 py-3 text-[9px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-primary transition-all rounded-full shadow-lg active:scale-95"
            >
              Get Expert Advice
            </Link>
          </div>

          <button
            className="md:hidden text-white relative z-[110]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav - Holographic Terminal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[100] md:hidden flex flex-col justify-center items-center p-12 text-center"
          >
            <div className="absolute inset-0 bg-blueprint-fine opacity-5 pointer-events-none" />
            
            <div className="flex flex-col space-y-10 relative z-10 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-5xl md:text-7xl font-black uppercase tracking-tighter italic block",
                      pathname === link.href ? "text-accent" : "text-white/20 hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-16 mt-16 border-t border-white/5"
              >
                <p className="text-[10px] font-black text-accent/40 tracking-[0.6em] uppercase mb-8">Structural Terminal Status: ACTIVE</p>
                <div className="space-y-4">
                   <p className="text-2xl font-black text-white tracking-tighter italic">+91 {settings?.phone || "80725 24820"}</p>
                   <p className="text-lg font-bold text-white/30 tracking-widest">{settings?.email || "kavincivil2@gmail.com"}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
