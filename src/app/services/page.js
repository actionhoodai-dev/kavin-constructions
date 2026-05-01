"use client";

import { motion } from "framer-motion";
import { Ruler, Box, Compass, Triangle, Pencil, CheckCircle, ArrowRight, Grid, Layers, MapPin, Gauge } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Oswald, Urbanist, Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const urbanist = Urbanist({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"] });
const oswald = Oswald({ weight: ["400", "600", "700"], subsets: ["latin"] });

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
    <div className="w-full bg-[#f9f8f4] text-[#111] min-h-screen font-sans selection:bg-[#ffe400] selection:text-[#111] overflow-x-hidden pt-32 pb-24">
      
      {/* Cinematic Header */}
      <section className="py-12 md:py-20 w-full max-w-7xl mx-auto px-4 flex justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 21h16V7H4v14zm2-12h2v2H6V9zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM2 21h2v2H2v-2zm18 0h2v2h-2v-2zM10 2v3h4V2h-4z" />
            </svg>
            <h3 className={`${urbanist.className} text-[15px] font-bold text-[#111] uppercase tracking-widest`}>Engineering Solutions</h3>
          </div>
          <h1 className={`${bebas.className} text-7xl md:text-[10vw] leading-[0.85] text-[#111] m-0 p-0 tracking-[0.02em]`}>
            TECHNICAL <span className="text-[#ffe400] drop-shadow-sm">SERVICES</span>
          </h1>
          <p className={`${urbanist.className} text-lg md:text-xl text-gray-600 font-medium max-w-3xl mt-8 leading-relaxed`}>
            Engineering structural accuracy and architectural vision through professional surveying and construction expertise.
          </p>
        </div>
      </section>

      <div className="w-full h-[1.5px] bg-[#111] max-w-6xl mx-auto my-12 md:my-16"></div>

      {/* Services List */}
      <section className="py-12 w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-32">
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
                 {/* Visual Side */}
                 <div className="flex-1 w-full relative group">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="aspect-[4/3] bg-white overflow-hidden relative rounded-[2.5rem] shadow-2xl border border-gray-200"
                    >
                       {serviceImages[service.id] && (
                        <motion.div 
                          className="absolute inset-0 z-0"
                          style={{ y: index % 2 === 0 ? 10 : -10 }}
                          whileInView={{ y: index % 2 === 0 ? -10 : 10 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        >
                           <Image 
                              src={serviceImages[service.id]} 
                              alt={service.title} 
                              fill
                              unoptimized
                              className="object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale hover:grayscale-0"
                           />
                        </motion.div>
                       )}
                       <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                 </div>

                 {/* Content Side */}
                 <div className="flex-1 space-y-8 text-left bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-gray-100 relative">
                    {/* Index Background */}
                    <span className={`${oswald.className} absolute -top-8 -right-4 text-[150px] font-bold text-gray-50 leading-none select-none z-0`}>
                      0{index + 1}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 bg-[#ffe400] flex items-center justify-center rounded-2xl shadow-md">
                            <Icon className="text-[#111]" size={24} />
                         </div>
                         <div className="h-[2px] flex-grow bg-gray-200" />
                      </div>

                      <h2 className={`${oswald.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#111] uppercase tracking-tight leading-[1.1] mb-6`}>
                        {service.title}
                      </h2>
                      
                      <p className={`${urbanist.className} text-gray-600 text-lg leading-[1.8] font-medium mb-8`}>
                         {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                         {service.features.map(f => (
                           <div key={f} className="flex items-center gap-3 group">
                              <CheckCircle size={20} className="text-[#ffe400] shrink-0" />
                              <span className={`${urbanist.className} text-sm font-bold text-[#111] group-hover:text-gray-600 transition-colors`}>{f}</span>
                           </div>
                         ))}
                      </div>

                      <Link href="/contact" className={`${oswald.className} inline-flex items-center px-8 py-4 bg-[#ffe400] text-[#111] text-[18px] font-bold uppercase tracking-widest hover:bg-[#111] hover:text-white transition-colors rounded-full shadow-md group`}>
                         Request Consult <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" size={18} />
                      </Link>
                    </div>
                 </div>
               </motion.div>
             );
           })}
        </div>
      </section>

      <div className="w-full h-[1.5px] bg-[#111] max-w-6xl mx-auto my-12 md:my-16"></div>

      {/* Technical Capabilities Section */}
      <section className="py-16 w-full max-w-7xl mx-auto px-4 mb-16">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white p-12 md:p-24 rounded-[3rem] relative overflow-hidden shadow-2xl border border-gray-100"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffe400]/5 rounded-bl-full pointer-events-none"></div>
           <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#ffe400] rounded-full flex items-center justify-center mb-10 shadow-lg">
                <Gauge size={36} className="text-[#111]" />
              </div>
              <h2 className={`${oswald.className} text-5xl md:text-7xl font-bold text-[#111] uppercase tracking-tight mb-8 leading-[1.1]`}>
                Elite <span className="text-[#ffe400]">Technical</span> Standards
              </h2>
              <p className={`${urbanist.className} text-gray-600 font-medium text-lg mb-12 max-w-3xl leading-relaxed`}>
                 We leverage advanced GPS mapping technology, total station instruments, and high-precision structural health software to ensure millimeter accuracy in every surveying project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 {["GPS Accuracy", "3D Modeling", "Structural Audits", "Vastu Synergy"].map(tag => (
                   <div key={tag} className={`${urbanist.className} bg-[#f9f8f4] border border-gray-100 px-6 py-3 rounded-full flex items-center gap-3 text-[#111] font-bold uppercase tracking-widest text-xs shadow-sm`}>
                      <div className="w-2 h-2 bg-[#ffe400] rounded-full" />
                      <span>{tag}</span>
                   </div>
                 ))}
              </div>
           </div>
        </motion.div>
      </section>

    </div>
  );
}
