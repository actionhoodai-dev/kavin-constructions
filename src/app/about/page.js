"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Target, Eye, Ruler, Box, User, Award, CheckCircle, Triangle } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", text: "To provide the most accurate land surveying and highest quality civil construction services, ensuring every foundation is built on precision and integrity." },
  { icon: Eye, title: "Our Vision", text: "To become the leading name in architectural engineering and surveying across Tamil Nadu, recognized for technical excellence and innovative structural solutions." },
  { icon: Shield, title: "Our Philosophy", text: "Precision is not just a measurement; it's our promise. We believe in building structures that stand the test of time through rigorous engineering." }
];

export default function AboutPage() {
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 overflow-hidden relative selection:bg-accent selection:text-primary">
      {/* Background Architectural Overlay */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/images/3d_elevation_render.png"
          alt="3D Architectural Blueprint"
          fill
          unoptimized={true}
          className="object-cover opacity-10 brightness-50 mix-blend-overlay scale-110 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Kinetic Header Section */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-6 mb-10"
          >
            <div className="w-20 h-[1px] bg-accent" />
            <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">Engineering The Future</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-lg font-black tracking-tighter text-white uppercase leading-[0.85] mb-12"
          >
            Precision <span className="text-accent">Architects</span> <br/> Of The New Land
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-black uppercase tracking-tighter"
          >
            KAVIN Construction and Surveyors is a multidisciplinary engineering powerhouse committed to technical accuracy and structural excellence across the digital and physical landscape.
          </motion.p>
        </div>

        {/* Story Section - Glassified & Floating */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-32">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center group glass-frosted p-12 overflow-hidden rounded-[4rem] border-accent/20"
           >
              <div className="absolute inset-0 bg-blueprint opacity-10" />
              <Image 
                src="/images/kcs-logo.png" 
                alt="Kavin Logo" 
                fill
                unoptimized={true}
                className="object-contain brightness-110 drop-shadow-[0_0_50px_rgba(251,191,36,0.3)] transition-transform duration-1000 group-hover:scale-105"
              />
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-frosted p-12 md:p-16 rounded-[4rem] flex flex-col justify-center space-y-10 border-white/5"
           >
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Our <span className="text-accent underline decoration-white/10">Legacy</span> Of Structural Integrity</h2>
              <motion.p 
                animate={{ x: [0, -2, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="text-white/50 text-xl leading-relaxed font-medium"
              >
                Established with a vision to redefine the surveying and construction landscape in Tamil Nadu, Kavin has grown under the meticulous leadership of Er. R. Kavin Kumar DCE., B.E. Our firm stands at the intersection of traditional surveying accuracy and modern architectural design.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                 {[
                   "Licensed Building Surveyor",
                   "Tamil Nadu Registered Engineer",
                   "Precision GPS Mapping Expert",
                   "Structural Health Monitoring"
                 ].map((t, i) => (
                   <motion.div 
                     key={t} 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ delay: i * 0.1 }}
                     className="flex items-center space-x-4 text-[10px] font-black text-accent uppercase tracking-widest group bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-accent/40 transition-all"
                   >
                      <CheckCircle className="text-accent shrink-0" size={16} />
                      <span className="leading-tight">{t}</span>
                   </motion.div>
                 ))}
              </div>
           </motion.div>
        </div>

        {/* Founder Section - Floating Technical Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-frosted border-accent/30 rounded-[5rem] p-12 md:p-24 relative overflow-hidden mb-32 shadow-[0_50px_150px_-30px_rgba(251,191,36,0.1)]"
        >
           <div className="absolute inset-0 bg-blueprint-fine opacity-10 pointer-events-none" />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
              <div className="space-y-10">
                 <div className="w-24 h-[1px] bg-accent" />
                 <h2 className="text-fluid-md font-black uppercase tracking-tighter text-white leading-none">Er. R. Kavin <br/><span className="text-accent">Kumar</span></h2>
                 <p className="text-accent text-lg font-black uppercase tracking-[0.5em] opacity-80">Licensed Surveyor | Master Engineer</p>
                 <motion.p 
                   animate={{ y: [0, -5, 0] }}
                   transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                   className="text-white/40 text-2xl leading-relaxed font-black tracking-tighter uppercase italic"
                 >
                   "Engineering is the art of organizing design and craft through the lens of mathematical precision. At Kavin, every line we draw is a testament to this philosophy."
                 </motion.p>
                 <div className="flex items-center space-x-6 pt-4">
                    <div className="w-16 h-16 rounded-full glass-frosted flex items-center justify-center border-accent/20">
                        <User className="text-accent" size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 max-w-[200px] leading-relaxed">Professional Authority Recognized Across Tamil Nadu</span>
                 </div>
              </div>
              <div className="relative aspect-square glass-frosted border-accent/20 flex flex-col items-center justify-center p-12 overflow-hidden rounded-[4rem] group">
                 <h3 className="text-7xl md:text-9xl font-black text-accent uppercase tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-1000 absolute select-none">KAVIN</h3>
                 <div className="relative z-10 text-center">
                    <p className="text-[11px] font-black uppercase tracking-[0.8em] text-white opacity-80 mb-4">Site Designation</p>
                    <div className="h-[2px] w-full bg-accent/40 mb-4" />
                    <p className="text-accent text-2xl font-black uppercase tracking-widest">Master Of Structural Geometry</p>
                 </div>
                 {/* Decorative HUD corners */}
                 <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-accent/40" />
                 <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-accent/40" />
              </div>
           </div>
        </motion.div>

        {/* Mission Vision Values - Bento Grid Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {values.map((v, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               animate={{ y: [0, (i%2 === 0 ? 15 : -15), 0] }}
               transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
               viewport={{ once: true }}
               className="glass-frosted p-12 rounded-[4rem] space-y-8 border-white/5 hover:border-accent/30 transition-all flex flex-col"
             >
                <div className="w-20 h-20 bg-accent/10 flex items-center justify-center rounded-3xl border border-accent/20 shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                   <v.icon size={32} className="text-accent" />
                </div>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{v.title}</h4>
                <p className="text-white/40 font-medium leading-relaxed text-lg">{v.text}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
