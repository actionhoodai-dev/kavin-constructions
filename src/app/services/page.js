"use client";

import { motion } from "framer-motion";
import { Ruler, Box, Compass, Triangle, Pencil, CheckCircle, ArrowRight, Grid, Layers, MapPin, Gauge } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

const iconMap = {
  Ruler, Box, Compass, Triangle, Pencil, Grid, Layers, MapPin, Gauge
};

const serviceImages = {
  "land-survey": "/images/surveying_action.png",
  "vastu-plan": "/images/blueprint_sketch.png",
  "3d-elevation": "https://images.unsplash.com/photo-1600585154340-be6191bcbe10?auto=format&fit=crop&q=80&w=1200",
  "building-est": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200",
  "civil-const": "/images/hero_instrument.png",
  "layout-planning": "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200",
  "site-measurement": "https://images.unsplash.com/photo-1532187863486-abf9bdad3b6c?auto=format&fit=crop&q=80&w=1200"
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
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden relative">
      <div className="fixed inset-0 bg-blueprint opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 origin-top-right pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-20 h-2 bg-accent mb-12 flex items-center justify-center"
        />
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-tight mb-8">
           Technical <span className="text-accent underline decoration-primary/10">Service</span> Portfolio
        </h1>
        <p className="text-secondary max-w-2xl text-xl font-medium leading-relaxed mb-20 italic">
           Engineering structural accuracy and architectural vision through professional surveying and construction expertise.
        </p>

        <div className="grid grid-cols-1 gap-32 max-w-6xl mx-auto">
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
                 transition={{ duration: 0.8 }}
                 className={cn(
                   "flex flex-col lg:flex-row gap-20 items-center justify-between",
                   isEven ? "lg:flex-row-reverse" : ""
                 )}
               >
                 {/* Visual Side */}
                 <div className="flex-1 w-full relative">
                    <div className={cn(
                      "aspect-video bg-gray-50 border-2 border-gray-100 flex items-center justify-center overflow-hidden relative group",
                      service.main ? "bg-primary border-primary shadow-[20px_20px_0px_0px_#FBBF24]" : "hover:border-accent shadow-xl group hover:shadow-2xl transition-all"
                    )}>
                       {/* Service Image Background */}
                       {serviceImages[service.id] && (
                        <div className="absolute inset-0 z-0">
                           <img 
                              src={serviceImages[service.id]} 
                              alt={service.title} 
                              className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                           />
                           <div className="absolute inset-0 bg-primary/20 transition-opacity" />
                        </div>
                       )}

                       <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
                       <Icon className={cn(
                         "w-48 h-48 transition-transform duration-1000 group-hover:scale-110 relative z-10",
                         service.main ? "text-accent fill-accent/5 opacity-30" : "text-primary/10 fill-primary/5"
                       )} />
                       
                       <div className="absolute inset-10 border border-white/5 opacity-50 z-20 pointer-events-none" />
                       <div className="relative z-30 text-center flex flex-col items-center">
                          <Icon size={80} className={cn(
                            "mb-6 drop-shadow-2xl",
                            service.main ? "text-accent" : "text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                          )} />
                          {service.main && <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px] bg-primary/40 px-3 py-1 backdrop-blur-sm">Primary Core Service</span>}
                       </div>
                       
                       {/* Animated Lines Decoration */}
                       <motion.div 
                          animate={{ x: ["-100%", "200%"] }} 
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute bottom-10 left-0 w-32 h-[1px] bg-accent/30 pointer-events-none z-40" 
                       />
                       <motion.div 
                          animate={{ y: ["-100%", "200%"] }} 
                          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                          className="absolute top-0 right-10 w-[1px] h-32 bg-primary/20 pointer-events-none z-40" 
                       />
                    </div>
                 </div>


                 {/* Content Side */}
                 <div className="flex-1 space-y-8 text-left">
                    <div className="flex items-center space-x-6">
                       <span className="text-accent font-black text-6xl opacity-20 select-none tracking-tighter">0{index + 1}</span>
                       <div className="h-1 flex-grow bg-gray-100" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">{service.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                       {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {service.features.map(f => (
                         <div key={f} className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-50 group-hover:bg-accent group-hover:text-primary transition-all rounded-full">
                               <CheckCircle size={18} className="text-primary group-hover:text-white" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">{f}</span>
                         </div>
                       ))}
                    </div>
                    <Link href="/contact" className="bg-primary text-white inline-flex items-center px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-charcoal transition-all shadow-[6px_6px_0px_0px_#FBBF24] group">
                       Book This Service <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" size={18} />
                    </Link>
                 </div>
               </motion.div>
             );
           })}
        </div>

        {/* Technical Capabilities Section */}
        <div className="mt-40 bg-gray-50 p-12 md:p-24 border-2 border-gray-100 relative group overflow-hidden">
           <div className="absolute inset-0 bg-blueprint-fine opacity-20 pointer-events-none" />
           <div className="relative z-10 text-center flex flex-col items-center">
              <Gauge size={64} className="text-accent mb-8 group-hover:rotate-[20deg] transition-transform" />
              <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-8 leading-tight">Elite <span className="text-accent decoration-primary/5 line-through decoration-thickness-4">Instrumentation</span> Standards</h2>
              <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-sm mb-12 max-w-4xl">
                 We leverage advanced GPS mapping technology, total station instruments, and high-precision structural health software to ensure millimeter accuracy in every surveying project.
              </p>
              <div className="flex flex-wrap justify-center gap-10">
                 {["GPS Accuracy", "3D Modeling", "Structural Audits", "Vastu Synergy"].map(tag => (
                   <div key={tag} className="flex items-center space-x-3 text-primary font-black uppercase tracking-widest text-xs">
                      <div className="w-4 h-4 bg-accent" />
                      <span>{tag}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
