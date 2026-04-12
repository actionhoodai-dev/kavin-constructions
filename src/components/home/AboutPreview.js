"use client";

import { motion } from "framer-motion";
import { User, CheckCircle, Shield, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden bg-grain">
      {/* 3D Architectural Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/construction_skeleton.png"
          alt="Architectural Blueprint"
          fill
          unoptimized={true}
          className="object-cover opacity-10 brightness-50 mix-blend-overlay scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/[0.05] -skew-x-12 origin-top-right pointer-events-none" />
      <div className="absolute left-[5%] top-[10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute right-[5%] bottom-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] bg-white/40 backdrop-blur-2xl border border-white/40 flex items-center justify-center p-8 overflow-hidden rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] group">
               {/* Grid Pattern */}
               <div className="absolute inset-0 bg-blueprint-fine opacity-10" />
               
               {/* Motion Circle */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-primary/5 rounded-full scale-[1.2]" 
               />
               
               <div className="relative z-10 text-center flex flex-col items-center">
                    <div className="w-56 h-56 md:w-72 md:h-72 relative bg-white backdrop-blur-xl flex items-center justify-center p-12 border border-accent/20 rounded-[2.5rem] shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_40px_80px_-20px_rgba(251,191,36,0.2)]">
                       <Image 
                         src="/images/kcs-logo.png" 
                         alt="KAVIN CONSTRUCTIONS & SURVEYORS" 
                         fill
                         unoptimized={true}
                         className="object-contain p-8 md:p-12"
                       />
                       
                       {/* Floating Stats Badge */}
                       <div className="absolute -bottom-6 -right-6 bg-primary text-accent p-6 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center">
                          <span className="text-2xl font-black leading-none">500+</span>
                          <span className="text-[8px] font-black uppercase tracking-widest mt-1 opacity-60">Projects</span>
                       </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <div className="w-16 h-0.5 bg-accent" />
              <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">The Technical Narrative</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]"
            >
              Engineering <span className="text-accent underline decoration-white/10">Legacy</span> with Precision
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-lg leading-relaxed font-medium"
            >
              KCS is a multidisciplinary engineering powerhouse and <strong className="text-accent">Licensed Land Surveyor in Erode</strong>. We specialize in elite DGPS land surveying, digital site measurement, and precision civil construction works, bridging the gap between architectural vision and technical structural accuracy across Tamil Nadu.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
               {[
                 { icon: Shield, text: "Licensed Authority", desc: "Certified Surveyors" },
                 { icon: CheckCircle, text: "Structural Purity", desc: "Zero Error Tolerance" },
                 { icon: Award, text: "DGPS Accuracy", desc: "Digitized FMB Mapping" },
                 { icon: User, text: "Expert Lead", desc: "Er. R. Kavin Kumar" }
               ].map((item, i) => (
                 <div key={i} className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 flex items-center justify-center glass-frosted rounded-2xl shadow-sm group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                       <item.icon size={20} className="text-accent group-hover:text-primary transition-transform" />
                    </div>
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-1">{item.text}</h4>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
              <Link
                href="/about"
                className="glass-frosted text-white inline-flex items-center px-12 py-6 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-[0_20px_40px_-10px_rgba(251,191,36,0.3)] active:scale-95 group"
              >
                Our Technical Story <ArrowRight className="ml-4 transition-transform group-hover:translate-x-2" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
