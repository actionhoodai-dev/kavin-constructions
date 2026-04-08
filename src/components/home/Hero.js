"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Ruler, Ruler as RulerIcon, Triangle, Box, Compass, Pencil } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-fine opacity-10 pointer-events-none" />
      
      {/* Animated Background Geometry */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 -skew-x-[15deg] origin-top-right transition-transform duration-1000 group-hover:skew-x-0" />
      
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute -right-20 top-20 w-80 h-80 border-4 border-accent opacity-10 rounded-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute left-10 bottom-20 w-40 h-40 border-2 border-primary/20 rotate-45"
      />

      {/* Floating Surveyor Instrument Placeholder */}
      <div className="absolute top-[20%] right-[10%] hidden lg:block">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [12, 10, 12]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative w-96 h-96"
        >
          {/* Mock Surveyor's Total Station / Instrument */}
          <div className="absolute inset-0 bg-white shadow-2xl rounded-2xl border border-primary/10 overflow-hidden flex flex-col items-center justify-center p-4">
            <img 
               src="/images/hero_instrument.png" 
               alt="KCS Precision Instrument"
               className="w-full h-full object-cover rounded-xl"
            />
            {/* Technical Labels Overlay */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <div className="bg-accent px-4 py-2 font-black text-[10px] uppercase tracking-widest text-primary">
                  Precision Optics Active
               </div>
            </div>
          </div>

          {/* Technical Labels */}
          <div className="absolute -top-4 -left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
            LAT: 11.3410° N
          </div>
          <div className="absolute -bottom-4 -right-4 bg-accent text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
            LNG: 77.7172° E
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] mb-4 flex items-center text-sm md:text-base">
              <div className="h-[2px] w-12 bg-accent mr-4" />
              Engineering Excellence
            </h4>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary leading-[0.9] mb-8">
              Precision <span className="text-accent">Land Surveying</span> & Civil Construction
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed mb-12 font-medium"
          >
            Delivering accurate surveying and reliable construction services across Erode and beyond. 
            Licensed Building Surveyor Er. R. Kavin Kumar leading structural excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              href="/services"
              className="bg-primary text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-charcoal transition-all shadow-[6px_6px_0px_0px_#FBBF24]"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-primary/5 transition-all"
            >
              Contact Now
            </Link>
          </motion.div>

          {/* Site Stats Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-gray-100 pt-10"
          >
            {[
              { label: "Licensed Surveyor", value: "DCE., B.E." },
              { label: "Core Expertise", value: "Surveying" },
              { label: "Location", value: "Erode, TN" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-1">{stat.label}</span>
                <span className="text-lg font-black text-primary uppercase tracking-tighter">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent ml-8 hidden lg:block" />
    </section>
  );
}
