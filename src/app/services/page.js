"use client";

import { motion } from "framer-motion";
import { Ruler, Box, Compass, Triangle, Pencil, CheckCircle, ArrowRight, Grid, Layers, MapPin, Gauge } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";


const iconMap = {
  Ruler, Box, Compass, Triangle, Pencil, Grid, Layers, MapPin, Gauge
};

const serviceImages = {
  "land-survey": "/images/surveying_action.png",
  "vastu-plan": "/images/blueprint_sketch.png",
  "3d-elevation": "/images/3d_elevation_render.png",
  "building-est": "/images/engineer_kavin.png",
  "civil-const": "/images/hero_instrument.png",
  "layout-planning": "/images/industrial_layout_plan_nano.png",
  "site-measurement": "/images/site_measurement_new.png"
};




const extendedServices = [
  ...SERVICES,
  {
    id: "layout-planning",
    title: "Layout Planning",
    description: "Designing comprehensive site layouts for residential areas, industrial zones, and commercial developments.",
    icon: "Grid",
    main: false,
    features: ["Residential Layouts", "Industrial Zoning", "Commercial Site Design"]
  },
  {
    id: "site-measurement",
    title: "Site Measurement",
    description: "Precise site boundary measurement and verification using modern laser distancing and GPS technology.",
    icon: "MapPin",
    main: false,
    features: ["Boundary Verification", "Area Calculation", "Legal Site Mapping"]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 overflow-hidden relative selection:bg-accent selection:text-primary">
      {/* 3D Architectural Background Atmosphere */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/images/high_tech_surveying.png"
          alt="High Tech Surveying"
          fill
          unoptimized={true}
          className="object-cover opacity-10 brightness-50 mix-blend-overlay scale-125 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-24 h-[1px] bg-accent mb-12 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
        />
        <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-fluid-lg font-black tracking-tighter text-white uppercase leading-none mb-10"
        >
           Technical <span className="text-accent">Service</span> <br/> Architecture
        </motion.h1>
        <motion.p 
           animate={{ y: [0, -5, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="text-white/50 max-w-2xl text-xl font-black uppercase tracking-tighter leading-relaxed mb-24"
        >
           Engineering structural accuracy and architectural vision through professional surveying and construction expertise.
        </motion.p>

        <div className="grid grid-cols-1 gap-40 max-w-6xl mx-auto">
           {extendedServices.map((service, index) => {
             const Icon = iconMap[service.icon] || Ruler;
             const isEven = index % 2 === 1;
             
             return (
               <motion.div
                 key={service.id}
                 id={service.id}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className={cn(
                   "flex flex-col lg:flex-row gap-16 items-center justify-between",
                   isEven ? "lg:flex-row-reverse" : ""
                 )}
               >
                 {/* Visual Side with Parallax */}
                 <div className="flex-1 w-full relative group">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="aspect-video glass-frosted overflow-hidden relative rounded-[3rem] border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
                    >
                       {/* Service Image Background */}
                       {serviceImages[service.id] && (
                        <motion.div 
                          className="absolute inset-0 z-0"
                          style={{ y: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ y: index % 2 === 0 ? -20 : 20 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        >
                           <Image 
                              src={serviceImages[service.id]} 
                              alt={service.title} 
                              fill
                              unoptimized={true}
                              className="object-cover brightness-50 contrast-125 transition-transform duration-1000 group-hover:scale-110"
                           />
                        </motion.div>
                       )}

                       <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />
                       
                       {/* HUD Decoration */}
                       <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-accent/40 opacity-50 select-none pointer-events-none" />
                       <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-accent/40 opacity-50 select-none pointer-events-none" />
                    </motion.div>
                 </div>


                 {/* Content Side - Glass Card */}
                 <motion.div 
                    animate={{ y: [0, index % 2 === 0 ? 10 : -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-1 space-y-10 text-left glass-frosted p-12 md:p-16 rounded-[4rem] border-white/5"
                 >
                    <div className="flex items-center space-x-8">
                       <span className="text-accent font-black text-7xl opacity-10 select-none tracking-tighter leading-none">0{index + 1}</span>
                       <div className="h-[1px] flex-grow bg-white/10" />
                       <div className="w-12 h-12 glass-frosted flex items-center justify-center rounded-2xl border-accent/20">
                          <Icon className="text-accent" size={24} />
                       </div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">{service.title}</h2>
                    <p className="text-white/40 text-lg leading-relaxed font-medium">
                       {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {service.features.map(f => (
                         <div key={f} className="flex items-center space-x-4 group bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-accent/30 transition-all">
                            <CheckCircle size={18} className="text-accent shrink-0" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">{f}</span>
                         </div>
                       ))}
                    </div>

                    <div className="pt-6">
                      <Link href="/contact" className="glass-frosted text-white inline-flex items-center px-12 py-6 text-[11px] font-black uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-[0_30px_60px_rgba(251,191,36,0.1)] group rounded-full">
                         Engineering Consult <ArrowRight className="ml-4 transition-transform group-hover:translate-x-2" size={18} />
                      </Link>
                    </div>
                 </motion.div>
               </motion.div>
             );
           })}
        </div>

        {/* Technical Capabilities Section - Immersive Glass Panel */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="mt-60 glass-frosted p-12 md:p-24 rounded-[5rem] border-accent/20 relative group overflow-hidden shadow-[0_0_150px_-30px_rgba(251,191,36,0.1)]"
        >
           <div className="absolute inset-0 bg-blueprint-fine opacity-5 pointer-events-none" />
           <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-24 h-24 glass-frosted rounded-full flex items-center justify-center border-accent/40 mb-10 group-hover:rotate-12 transition-transform duration-700 shadow-[0_0_50px_rgba(251,191,36,0.2)]">
                <Gauge size={48} className="text-accent" />
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-10 leading-[0.85]">Elite <br/><span className="text-accent">Technical</span> Standards</h2>
              <p className="text-white/40 font-black uppercase tracking-[0.5em] text-xs mb-16 max-w-4xl leading-relaxed">
                 We leverage advanced GPS mapping technology, total station instruments, and high-precision structural health software to ensure millimeter accuracy in every surveying project.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                 {["GPS Accuracy", "3D Modeling", "Structural Audits", "Vastu Synergy"].map(tag => (
                   <div key={tag} className="glass-frosted border-white/10 px-8 py-4 rounded-full flex items-center space-x-4 text-white font-black uppercase tracking-[0.3em] text-[10px] shadow-xl group/tag hover:border-accent transition-colors">
                      <div className="w-3 h-3 bg-accent animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                      <span>{tag}</span>
                   </div>
                 ))}
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
