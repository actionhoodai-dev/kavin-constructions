"use client";

import { motion } from "framer-motion";
import { Ruler, Box, Compass, Triangle, Pencil, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";


const iconMap = {
  Ruler, Box, Compass, Triangle, Pencil
};

const serviceImages = {
  "land-survey": "/images/surveying_action.png",
  "vastu-plan": "/images/blueprint_sketch.png",
  "3d-elevation": "/images/3d_elevation_render.png",
  "building-est": "/images/engineer_kavin.png",
  "civil-const": "/images/hero_instrument.png"
};


export default function ServicesPreview() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-fine opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-white">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-4"
            >
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">Precision Engineering</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-4"
            >
              Mastering the <span className="text-accent underline decoration-white/5">Details</span>
            </motion.h2>
          </div>
          <Link href="/services" className="group flex items-center space-x-4 text-white/50 hover:text-accent font-black uppercase tracking-widest text-[11px] transition-all">
            <span>View Catalog</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all group-hover:scale-110">
               <ArrowRight size={18} className="group-hover:text-primary" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 5).map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative group overflow-hidden rounded-[2.5rem] h-[500px] flex flex-col justify-end p-8 border border-white/5 transition-all hover:border-accent/40 hover:shadow-2xl",
                  service.main ? "lg:col-span-2" : ""
                )}
              >
                {/* Visual Background */}
                <div className="absolute inset-0 z-0">
                   <Image 
                      src={serviceImages[service.id]} 
                      alt={service.title} 
                      fill
                      unoptimized={true}
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-50"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent" />
                </div>
                
                {/* Glass Card Content */}
                <div className="relative z-10 glass-frosted p-8 rounded-[1.5rem] group-hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/60 text-[11px] md:text-xs mb-6 leading-relaxed max-w-sm font-medium">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 3).map(f => (
                      <span key={f} className="text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 bg-white/5 text-white/70 rounded-full border border-white/5">
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link href={`/services#${service.id}`} className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-accent hover:text-white transition-colors">
                    Detailed Specs <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            );
          })}

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-frosted border-accent/20 rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden group shadow-[0_0_50px_-10px_rgba(251,191,36,0.2)]"
          >
             <div className="absolute inset-0 bg-blueprint-fine opacity-10" />
             <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center relative z-10 group-hover:rotate-45 transition-transform duration-700 border border-accent/30 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
               <Box className="text-accent w-10 h-10" />
             </div>
             <h4 className="text-white font-black uppercase tracking-tighter text-4xl mb-2 relative z-10 leading-none">High Tech <br/> Accuracy</h4>
             <Link href="/contact" className="bg-accent text-primary text-[10px] font-black uppercase tracking-[0.3em] px-10 py-5 rounded-full relative z-10 hover:bg-white transition-all hover:scale-110 active:scale-95 shadow-2xl">
                Book Consultation
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
