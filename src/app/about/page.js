"use client";

import { motion } from "framer-motion";
import { Shield, Target, Eye, Ruler, Box, User, Award, CheckCircle, Triangle } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", text: "To provide the most accurate land surveying and highest quality civil construction services, ensuring every foundation is built on precision and integrity." },
  { icon: Eye, title: "Our Vision", text: "To become the leading name in architectural engineering and surveying across Tamil Nadu, recognized for technical excellence and innovative structural solutions." },
  { icon: Shield, title: "Our Philosophy", text: "Precision is not just a measurement; it's our promise. We believe in building structures that stand the test of time through rigorous engineering." }
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden relative">
      {/* Background Architectural Overlay */}
      <div className="fixed inset-0 bg-blueprint-fine opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 -skew-x-12 origin-top-right pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="w-16 h-[2px] bg-accent" />
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-sm md:text-base">Engineering The Future</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-[0.9] mb-12"
          >
            Precision <span className="text-accent">Architects</span> Of The Land
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed font-medium"
          >
            KAVIN Construction and Surveyors (KCS) is a multidisciplinary engineering powerhouse based in Erode, committed to technical accuracy and structural excellence.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 border-t border-gray-100 pt-20">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-[#0A1F44] flex items-center justify-center group overflow-hidden border-2 border-accent"
           >
              <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
              <img 
                src="/images/blueprint_sketch.png" 
                alt="KCS Engineering Heritage" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-primary/20" />
              <div className="absolute inset-10 border border-white/10 opacity-50 pointer-events-none" />
              <div className="relative z-10 text-center flex flex-col items-center p-10">
                 <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-6 border border-accent/30 backdrop-blur-sm">
                    <Award size={48} className="text-accent" />
                 </div>
                 <h4 className="text-white text-3xl font-black uppercase tracking-tighter mb-4">Certified Accuracy</h4>
                 <p className="text-white font-bold uppercase tracking-widest text-[8px] max-w-xs bg-primary/40 px-4 py-2">Licensed Professional Surveying Expertise</p>
              </div>
           </motion.div>


           <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">Our <span className="text-accent underline decoration-primary/5">Legacy</span> Of Structural Integrity</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Established with a vision to redefine the surveying and construction landscape in Tamil Nadu, KCS has grown under the meticulous leadership of Er. R. Kavin Kumar. Our firm stands at the intersection of traditional surveying accuracy and modern architectural design.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                We don't just measure land; we interpret its potential. We don't just build walls; we engineer structural environments that are sustainable, safe, and geometrically perfect.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   "Licensed Building Surveyor",
                   "Tamil Nadu Registerated Engineer",
                   "Precision GPS Mapping Expert",
                   "Structural Health Monitoring"
                 ].map(t => (
                   <div key={t} className="flex items-center space-x-3 text-xs font-black text-primary uppercase tracking-widest group">
                      <CheckCircle className="text-accent transition-transform group-hover:scale-125" size={16} />
                      <span>{t}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Founder Section */}
        <div className="bg-primary text-white p-12 md:p-24 relative overflow-hidden mb-32 border-4 border-accent shadow-[20px_20px_0px_0px_#0A1F44]">
           <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none" />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                 <div className="w-16 h-1 w-1 bg-accent mb-8" />
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Er. R. Kavin Kumar</h2>
                 <p className="text-accent text-lg font-black uppercase tracking-[0.4em] mb-8">DCE., B.E. | Licensed Surveyor</p>
                 <p className="text-gray-400 text-lg leading-relaxed font-medium mb-10 italic">
                   "Engineering is the art of organizing design and craft through the lens of mathematical precision. At KCS, every line we draw and every foundation we lay is a testament to this philosophy."
                 </p>
                 <div className="flex space-x-4">
                    <User className="text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-widest text-white/70">Professional Identity Recognized Across Erode</span>
                 </div>
              </div>
              <div className="relative aspect-square border-8 border-white/5 flex items-center justify-center group overflow-hidden bg-white/5 shadow-2xl">
                 <div className="absolute inset-0 flex items-center justify-center opacity-30 scale-110 pointer-events-none">
                    <img 
                      src="/images/engineer_kavin.png" 
                      alt="Er. R. Kavin Kumar"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
                 <div className="relative z-10 text-center p-12">
                    <h3 className="text-4xl md:text-6xl font-black text-accent uppercase tracking-tighter transition-all group-hover:scale-105 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">ER. KAVIN</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white bg-accent/20 px-4 py-1 mt-4 backdrop-blur-sm">Master Of Structural Geometry</p>
                 </div>
                 {/* Decorative HUD corners */}
                 <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/50" />
                 <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/50" />
              </div>

           </div>
        </div>

        {/* Mission Vision Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-20">
           {values.map((v, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group hover:bg-gray-50 p-8 transition-all border-b-2 border-transparent hover:border-accent"
             >
                <div className="w-16 h-16 bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                   <v.icon size={32} className="text-primary transition-colors group-hover:text-accent" />
                </div>
                <h4 className="text-2xl font-black text-primary uppercase tracking-tighter mb-4">{v.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{v.text}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
