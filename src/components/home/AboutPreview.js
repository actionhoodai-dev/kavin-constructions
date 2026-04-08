"use client";

import { motion } from "framer-motion";
import { User, CheckCircle, Shield, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Architectural Diagram Element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-primary/5 -skew-x-12 origin-top-right pointer-events-none" />
      <div className="absolute left-10 top-[20%] w-32 h-[1px] bg-primary/10 rotate-45 pointer-events-none" />
      <div className="absolute left-20 top-[15%] w-20 h-[1px] bg-accent/20 -rotate-45 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-primary flex items-center justify-center p-8 overflow-hidden shadow-2xl group">
               {/* Blueprint Background */}
               <div className="absolute inset-0 bg-blueprint-fine opacity-10" />
               
               {/* Technical Line Overlays */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-white/5 rounded-full scale-110" 
               />
               
                <div className="relative z-10 text-center flex flex-col items-center">
                   <div className="w-56 h-72 relative mb-8 overflow-hidden border-2 border-accent transition-transform duration-700 group-hover:scale-105">
                      <img 
                        src="/images/engineer_kavin.png" 
                        alt="Er. R. Kavin Kumar" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>

                  <h3 className="text-4xl font-black tracking-tighter text-white uppercase leading-none mb-2">Er. R. KAVIN KUMAR</h3>
                  <p className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-8">DCE., B.E. | Licensed Surveyor</p>
                  <div className="flex space-x-6">
                    <div className="bg-white/10 px-4 py-3 text-center border border-white/5 backdrop-blur-sm">
                       <span className="block text-2xl font-black text-white">10+</span>
                       <span className="block text-[8px] font-bold text-accent uppercase tracking-widest">Years Experience</span>
                    </div>
                    <div className="bg-white/10 px-4 py-3 text-center border border-white/5 backdrop-blur-sm">
                       <span className="block text-2xl font-black text-white">500+</span>
                       <span className="block text-[8px] font-bold text-accent uppercase tracking-widest">Surveys Completed</span>
                    </div>
                  </div>
               </div>

               {/* Geometric Corner Accents */}
               <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-accent" />
               <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-accent" />
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-secondary font-black uppercase tracking-[0.4em] text-sm">Our Identity</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black tracking-tighter text-primary uppercase leading-tight"
            >
              Precision In <span className="text-accent">Measurement</span>, Excellence In Structure
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg leading-relaxed font-medium"
            >
              KAVIN Construction and Surveyors (KCS) is a multidisciplinary engineering firm based in Erode, specialized in elite land surveying and precision civil works. Under the leadership of licensed surveyor Er. R. Kavin Kumar, we bridge the gap between architectural vision and technical accuracy.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
               {[
                 { icon: Shield, text: "Licensed & Certified Professional" },
                 { icon: CheckCircle, text: "Structural Excellence Standards" },
                 { icon: Award, text: "High-Precision GPS Mapping" },
                 { icon: User, text: "Architectural Integrity Focusing" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center space-x-3 text-primary font-black uppercase tracking-widest text-xs group">
                    <div className="w-8 h-8 flex items-center justify-center bg-accent/20 group-hover:bg-accent transition-colors">
                       <item.icon size={16} />
                    </div>
                    <span>{item.text}</span>
                 </div>
               ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/about"
                className="bg-primary text-white inline-block px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-charcoal transition-all shadow-[6px_6px_0px_0px_#FBBF24]"
              >
                Learn Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
