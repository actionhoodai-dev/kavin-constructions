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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b-2 border-primary" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-14 w-14 bg-white p-1 rounded-sm shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
              <Image 
                src="/images/kcs-logo.png" 
                alt="KAVIN CONSTRUCTIONS AND SURVEYORS"
                fill
                unoptimized={true}
                className="object-contain p-1"
              />
            </div>

            <div className="ml-3 hidden sm:flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none text-primary">KAVIN</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-secondary leading-none">CONSTRUCTIONS & SURVEYORS</span>
            </div>

          </Link>



          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent",
                  pathname === link.href ? "text-primary" : "text-secondary"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-[4px_4px_0px_0px_#FBBF24]"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[72px] bg-white z-40 md:hidden flex flex-col p-8 bg-blueprint"
          >
            <div className="flex flex-col space-y-6">
              <div className="mb-4">
                 <div className="relative h-20 w-20 bg-white p-2 shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/kcs-logo.png" 
                      alt="Kavin Logo" 
                      fill
                      unoptimized={true}
                      className="object-contain p-2"
                    />
                 </div>
              </div>


              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-black uppercase tracking-tighter",
                    pathname === link.href ? "text-primary" : "text-secondary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-gray-100">
                <p className="text-xs font-bold text-secondary tracking-widest uppercase mb-4">Contact us</p>
                <p className="text-lg font-bold text-primary">+91 {settings?.phone || "80725 24820"}</p>
                <p className="text-lg font-bold text-primary">{settings?.email || "kavincivil2@gmail.com"}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
