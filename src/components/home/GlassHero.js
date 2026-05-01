"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GlassHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#e6eaf0] perspective-1000">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/banner%20clip.mp4" type="video/mp4" />
        </video>
        {/* Soft fading overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-white/90" />
      </div>

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center">
           <Image 
             src="/images/kcs-logo-without-bg.png" 
             alt="KCS Logo" 
             width={60} 
             height={60} 
             unoptimized={true}
             className="object-contain"
           />
        </div>
        <div className="hidden md:flex items-center space-x-8 text-white text-sm font-semibold tracking-wider">
          <Link href="/about" className="hover:text-[#FFD700] transition-colors">ABOUT</Link>
          <Link href="/services" className="hover:text-[#FFD700] transition-colors">SERVICES</Link>
          <Link href="/projects" className="hover:text-[#FFD700] transition-colors">PROJECTS</Link>
          <Link href="/contact" className="hover:text-[#FFD700] transition-colors">CONTACT</Link>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mt-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] uppercase drop-shadow-lg">
            PRECISION <span className="text-[#FFD700]">LAND</span><br />
            <span className="text-[#FFD700]">SURVEYING</span> & CIVIL<br />
            CONSTRUCTION
          </h1>
          
          <p className="mt-6 text-white/90 text-sm md:text-base font-medium max-w-2xl leading-relaxed drop-shadow-md">
            Delivering accurate surveying and reliable construction services across Erode and beyond. 
            Licensed Building Surveyor <span className="text-[#FFD700] font-bold">Er. R. Kavin Kumar</span> leading structural excellence.
          </p>

          <div className="mt-10 flex items-center space-x-6">
            <Link 
              href="/services"
              className="bg-[#FFD700] text-black font-bold text-sm px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Explore Services
            </Link>
            <Link 
              href="/about"
              className="bg-white text-black font-bold text-sm px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats / Info Card on the Right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-24 right-8 md:right-16 lg:right-24 z-20"
      >
        <div className="bg-[#a8a11e]/80 backdrop-blur-md rounded border border-white/20 p-6 shadow-xl flex items-center space-x-8 md:space-x-12">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white mb-2">Licensed Surveyor</h4>
            <p className="text-xs text-white/90 font-medium">DCE., SLE</p>
          </div>
          <div className="w-px h-10 bg-white/30" />
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white mb-2">Core Expertise</h4>
            <p className="text-xs text-white/90 font-medium">Surveying</p>
          </div>
          <div className="w-px h-10 bg-white/30" />
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white mb-2">Location</h4>
            <p className="text-xs text-white/90 font-medium">Erode, TN</p>
          </div>
        </div>
      </motion.div>
      
      {/* Bottom fade into white */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f7fa] to-transparent z-10" />
    </section>
  );
}

