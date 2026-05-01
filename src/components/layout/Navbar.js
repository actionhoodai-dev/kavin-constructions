"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue, Oswald, Urbanist } from "next/font/google";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const oswald = Oswald({ weight: ["400", "700"], subsets: ["latin"] });
const urbanist = Urbanist({ weight: ["400", "700"], subsets: ["latin"] });

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-[200] transition-all duration-500 py-4 px-6 md:px-12",
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] transition-transform hover:scale-105">
          <Image src="/images/kcs-logo-without-bg.png" alt="KCS Logo" fill className="object-contain" priority unoptimized />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-[#F6F1E8] border border-[#C7B798] rounded-full px-2 py-1.5 shadow-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={cn(
                `${oswald.className} text-[20px] leading-[20px] px-8 py-4 rounded-full transition-all uppercase font-normal`,
                pathname === link.href 
                  ? "bg-[#ffe400] text-[#111]" 
                  : "text-[#111] hover:text-[#111] hover:bg-[#ffe400]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* CTA Button */}
        <Link 
          href="/contact" 
          className={`${oswald.className} hidden md:block bg-[#121212] text-white px-10 py-4.5 rounded-full text-[20px] leading-[20px] uppercase hover:bg-black transition-all shadow-md active:scale-95 font-normal backdrop-blur-[50px]`}
        >
          CONTACT US
        </Link>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111] focus:outline-none"
        >
          <div className="w-8 h-6 flex flex-col justify-between items-end">
            <span className={cn("w-full h-0.5 bg-[#111] transition-all origin-right", mobileMenuOpen && "-rotate-45 translate-y-[-2px]")} />
            <span className={cn("w-2/3 h-0.5 bg-[#111] transition-all", mobileMenuOpen && "opacity-0")} />
            <span className={cn("w-full h-0.5 bg-[#111] transition-all origin-right", mobileMenuOpen && "rotate-45 translate-y-[2px]")} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[210] bg-white p-8 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top duration-300"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-[#111]"
            >
              <X size={32} />
            </button>
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${oswald.className} text-[20px] leading-[20px] text-[#111] hover:text-[#ffe400] transition-colors uppercase font-normal`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`${oswald.className} bg-[#121212] text-white px-10 py-4.5 rounded-full text-[20px] leading-[20px] font-normal uppercase transition-all shadow-xl`}
              >
                CONTACT US
              </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

