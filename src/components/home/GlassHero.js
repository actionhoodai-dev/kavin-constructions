"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, HardHat, Gauge, Map, Compass, Ruler, Box as Cube } from "lucide-react";

const CAROUSEL_IMAGES = [
  {
    url: "/images/luxury_villa_elevation.png",
    title: "Signature Architecture",
    subtitle: "Project ID: LUX-ERODE-2024",
    description: "High-end residential blueprinting and photorealistic 3D visualization for technical approval.",
    icon: HardHat
  },
  {
    url: "/images/high_tech_surveying.png",
    title: "DGPS Mapping",
    subtitle: "Equipment: ALPHA-REPRO-9",
    description: "Utilizing deep-terrain digital GPS synchronization for millimeter-perfect land measurement.",
    icon: Gauge
  },
  {
    url: "/images/construction_skeleton.png",
    title: "Structural Purity",
    subtitle: "Site Model: STR-SHELL-IND",
    description: "Developing robust industrial and residential shells with zero-error architectural standards.",
    icon: HardHat
  },
  {
    url: "/images/commercial_finished.png",
    title: "Commercial Excellence",
    subtitle: "Project ID: COMM-CENT-25",
    description: "Delivering turn-key commercial destinations with glass-facade aesthetic and structural mastery.",
    icon: Map
  }
];

export default function GlassHero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  // Mouse Parallax Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    x.set((clientX / innerWidth - 0.5) * 40);
    y.set((clientY / innerHeight - 0.5) * 40);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 7000); // 7sec frequency
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[100vh] w-full overflow-hidden bg-black perspective-1000"
    >
      {/* Minimal Brand Identity Tag */}
      <div className="absolute top-10 left-10 z-[45] flex items-center space-x-4 pointer-events-none">
         <div className="w-12 h-12 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-xl flex items-center justify-center overflow-hidden">
            <Image 
              src="/images/kcs-logo.png" 
              alt="KCS Logo" 
              width={40} 
              height={40} 
              unoptimized={true}
              className="object-contain"
            />
         </div>
         <div className="flex flex-col">
            <h1 className="text-xl font-black text-white tracking-tighter leading-none">KAVIN</h1>
            <span className="text-[7px] font-black uppercase tracking-[0.4em] text-accent mt-1">CONS & SURV</span>
         </div>
      </div>

      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
          style={{ x: springX, y: springY }}
        >
          <Image
            src={CAROUSEL_IMAGES[index].url}
            alt={CAROUSEL_IMAGES[index].title}
            fill
            unoptimized={true}
            className="object-cover brightness-75 saturate-[1.05]"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Global Grain Filter Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] backdrop-contrast-125" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }} />

      {/* Cinematic Overlays */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10" />

      {/* Minimalist Floating Specs Card */}
      <div className="absolute bottom-24 left-12 z-20">
        <motion.div 
           key={index + "caption"}
           initial={{ opacity: 0, y: 50, scale: 0.9 }}
           animate={{ 
             opacity: 1, 
             y: [50, -10, 0],
             scale: 1
           }}
           transition={{ 
             duration: 1.2,
             y: {
               duration: 4,
               repeat: Infinity,
               repeatType: "mirror",
               ease: "easeInOut"
             }
           }}
           className="glass-frosted p-10 rounded-[2rem] max-w-xl border-accent/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]"
        >
            <div className="flex items-center space-x-3 mb-6">
               <div className="w-10 h-10 rounded-xl bg-accent/20 backdrop-blur-xl border border-accent/30 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                  {(() => {
                    const Icon = CAROUSEL_IMAGES[index].icon;
                    return Icon ? <Icon size={18} /> : null;
                  })()}
               </div>
               <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px] opacity-90">
                 {CAROUSEL_IMAGES[index].subtitle}
               </span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-6"
            >
              {CAROUSEL_IMAGES[index].title.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-3">
                  {word}
                </span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-white/70 text-[11px] md:text-sm font-medium leading-relaxed max-w-sm"
            >
              {CAROUSEL_IMAGES[index].description}
            </motion.p>
        </motion.div>
      </div>

      {/* Quick Action Navigation */}
      <div className="absolute bottom-24 right-12 z-30 flex items-center space-x-4">
        <Link 
            href="/services"
            className="bg-white/5 backdrop-blur-2xl text-white border border-white/10 px-8 py-4 rounded-full font-black uppercase tracking-widest text-[9px] hover:bg-accent hover:text-primary transition-all active:scale-95"
          >
            Sitemap
        </Link>
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all active:scale-90"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all active:scale-90"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Architecture */}
      <div className="absolute bottom-12 left-12 z-30 flex items-center space-x-3">
        {CAROUSEL_IMAGES.map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
             <div 
               className={`h-1.5 transition-all duration-700 rounded-full ${i === index ? 'w-10 bg-accent' : 'w-2 bg-white/20'}`}
             />
          </div>
        ))}
      </div>
    </section>
  );
}

