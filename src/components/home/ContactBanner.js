"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useProjectStore } from "@/store/useProjectStore";

import Image from "next/image";

export default function ContactBanner() {
  const { settings } = useProjectStore();
  return (
    <section className="py-40 bg-transparent relative overflow-hidden group">
      {/* 3D Site Map Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/high_tech_surveying.png"
          alt="Site Map"
          fill
          unoptimized={true}
          className="object-cover opacity-10 brightness-50 mix-blend-overlay group-hover:scale-110 transition-transform duration-[5s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           animate={{ 
             y: [0, -10, 0],
             scale: [1, 1.01, 1]
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="glass-frosted w-full max-w-6xl p-16 md:p-32 rounded-[5rem] border-white/5 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_150px_-30px_rgba(251,191,36,0.1)]"
        >
           {/* Technical HUD Decoration */}
           <div className="absolute inset-0 bg-blueprint-fine opacity-5 pointer-events-none" />
           <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-accent/20 opacity-40 select-none" />
           <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-accent/20 opacity-40 select-none" />

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-24 h-[1px] bg-accent mb-12 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
           />
           
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-fluid-md font-black tracking-tighter text-white uppercase leading-[0.85] mb-12 max-w-4xl"
           >
             Initialize Your <br/><span className="text-accent underline decoration-white/10">Next Structural</span> Command
           </motion.h2>

           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/40 text-lg md:text-xl font-black uppercase tracking-[0.4em] mb-16 max-w-2xl leading-relaxed"
           >
              Precision land surveying and construction experts ready for terminal dispatch.
           </motion.p>

           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-12"
           >
              <Link
                href="/contact"
                className="glass-frosted border-accent/20 text-accent px-16 py-8 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-accent hover:text-primary transition-all rounded-full shadow-2xl active:scale-95 group/btn"
              >
                Launch Contact Terminal
              </Link>
              
              <div className="flex flex-col items-center md:items-start space-y-3">
                 <Link href={`tel:+91${settings?.phone?.replace(/\s+/g, '')}`} className="flex items-center space-x-6 text-white hover:text-accent transition-colors group/phone font-black tracking-tighter text-3xl">
                    <div className="w-12 h-12 glass-frosted rounded-2xl flex items-center justify-center border-accent/30 group-hover/phone:rotate-12 transition-transform shadow-xl">
                      <Phone size={22} className="text-accent" />
                    </div>
                    <span>+91 {settings?.phone || "80725 24820"}</span>
                 </Link>
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
