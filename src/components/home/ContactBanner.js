"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useProjectStore } from "@/store/useProjectStore";

export default function ContactBanner() {
  const { settings } = useProjectStore();
  return (
    <section className="py-24 bg-accent relative overflow-hidden group">
      {/* Animated Blueprint Background */}
      <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-primary/5 -skew-x-[30deg] origin-top-right transition-transform duration-700 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="w-20 h-[2px] bg-primary mb-8"
        />
        
        <motion.h2 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary uppercase leading-none mb-10 max-w-4xl"
        >
          Ready to Start Your <span className="text-white drop-shadow-sm transition-all hover:text-primary decoration-primary/5">Next Project?</span>
        </motion.h2>

        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-primary/70 text-lg md:text-xl font-bold uppercase tracking-widest mb-12 max-w-2xl"
        >
           Precision land surveying and construction experts ready for dispatch.
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-wrap justify-center gap-8"
        >
           <Link
             href="/contact"
             className="bg-primary text-white px-12 py-6 text-sm font-black uppercase tracking-widest hover:bg-charcoal transition-all shadow-[8px_8px_0px_0px_white]"
           >
             Contact Our Team Now
           </Link>
           <div className="flex flex-col items-start justify-center space-y-1">
              <Link href={`tel:+91${settings?.phone?.replace(/\s+/g, '')}`} className="flex items-center space-x-3 text-primary hover:text-white transition-colors group/phone font-black tracking-tighter text-2xl">
                 <Phone size={24} className="group-hover/phone:rotate-12 transition-transform" />
                 <span>+91 {settings?.phone || "80725 24820"}</span>
              </Link>
           </div>
        </motion.div>

        {/* Decorative architectural grid markers */}
        <div className="absolute top-10 left-10 w-20 h-20 border-[1px] border-primary/20 opacity-20 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-[1px] border-primary/20 opacity-20 pointer-events-none" />
      </div>
    </section>
  );
}
