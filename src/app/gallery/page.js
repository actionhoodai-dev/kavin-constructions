"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Ruler, Triangle, Box } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { gallery: galleryImages } = useProjectStore();
  return (
    <>
import Image from "next/image";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { gallery: galleryImages } = useProjectStore();
  
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 overflow-hidden relative selection:bg-accent selection:text-primary">
      {/* 3D Architectural Atmos */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/images/luxury_commercial_building_finished_1775760519839.png"
          alt="Architectural Render"
          fill
          unoptimized={true}
          className="object-cover opacity-10 brightness-50 mix-blend-overlay scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Cinematic Header */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-6 mb-8"
          >
            <div className="w-20 h-[1px] bg-accent" />
            <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">Visual Repository</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fluid-lg font-black tracking-tighter text-white uppercase leading-[0.85] mb-12"
          >
             Precision <span className="text-accent">Gallery</span> <br/> Kinetic Archives
          </motion.h1>
          <motion.p 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/40 text-xl font-black uppercase tracking-tighter max-w-2xl leading-relaxed"
          >
             A curated archive of high-precision land surveys and engineering structural layouts across Tamil Nadu.
          </motion.p>
        </div>

        {/* Masonry Grid with Kinetic Drift */}
        {galleryImages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center glass-frosted rounded-[4rem] border-white/5">
            <div className="w-24 h-24 glass-frosted flex items-center justify-center mb-8 border border-white/10 rounded-3xl">
              <Maximize2 size={40} className="text-accent" />
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Archive Is Empty</h3>
            <p className="text-white/30 text-[10px] uppercase tracking-widest font-black">Waiting for synchronization...</p>
          </div>
        ) : (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
           {galleryImages.map((image, i) => (
             <motion.div
               key={image.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               animate={{ y: i % 2 === 0 ? [0, 15, 0] : [0, -15, 0] }}
               transition={{ 
                 duration: 12 + i, 
                 repeat: Infinity, 
                 ease: "easeInOut",
                 delay: i * 0.2
               }}
               viewport={{ once: true }}
               onClick={() => setSelectedImage(image)}
               className="relative break-inside-avoid group cursor-pointer overflow-hidden glass-frosted rounded-[3.5rem] border-white/5 shadow-2xl hover:border-accent/40 transition-all p-3"
             >
                <div className="relative aspect-auto overflow-hidden rounded-[3rem]">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={800}
                    height={1000}
                    unoptimized={true}
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 brightness-75 group-hover:brightness-100"
                  />
                </div>
                
                {/* Tech Content Overlay */}
                <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="glass-frosted p-8 rounded-[2.5rem] border-accent/20 translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                       <h3 className="text-2xl font-black uppercase tracking-tighter mb-3 text-white">{image.title}</h3>
                       <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                             <Maximize2 size={16} className="text-accent" />
                          </div>
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">{image.category}</p>
                       </div>
                    </div>
                </div>
                
                {/* HUD Coordinates (Top Left) */}
                <div className="absolute top-8 left-8 flex flex-col space-y-2 opacity-0 group-hover:opacity-40 transition-opacity select-none">
                   <div className="text-[8px] font-black text-white font-mono">X: {400 + (i*10)}.00</div>
                   <div className="text-[8px] font-black text-white font-mono">Y: {600 + (i*10)}.00</div>
                </div>
             </motion.div>
           ))}
        </div>
        )}

      </div>

      {/* Lightbox - Fluid Glass */}
      <AnimatePresence>
         {selectedImage && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-20"
           >
              <div onClick={() => setSelectedImage(null)} className="absolute inset-0 bg-black/80 backdrop-blur-3xl" />
              
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative z-10 w-full max-w-7xl h-full flex flex-col"
              >
                  <div className="flex justify-end mb-4">
                     <button onClick={() => setSelectedImage(null)} className="glass-frosted px-8 py-4 rounded-full text-white hover:text-accent transition-colors flex items-center space-x-4 font-black uppercase tracking-[0.3em] text-[10px] border-white/10">
                        <span>Terminal Close</span> <X size={20} />
                     </button>
                  </div>
                 
                  <div className="relative w-full flex-grow glass-frosted rounded-[5rem] border-white/5 overflow-hidden group shadow-[0_0_200px_-50px_rgba(251,191,36,0.2)]">
                    <Image 
                       src={selectedImage.src} 
                       alt={selectedImage.title}
                       fill
                       unoptimized={true}
                       className="object-contain p-10 md:p-20" 
                    />
                    
                    {/* Technical Spec HUD */}
                    <div className="absolute bottom-12 left-12 p-10 glass-frosted border-accent/30 rounded-[3rem] max-w-xl">
                       <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">{selectedImage.title}</h3>
                       <div className="flex items-center space-x-8">
                          <div className="flex items-center space-x-3 text-accent text-[9px] font-black uppercase tracking-[0.4em]">
                             <Triangle className="animate-pulse" size={14} />
                             <span>Architectural Spec</span>
                          </div>
                          <div className="w-[1px] h-4 bg-white/20" />
                          <div className="text-white/40 text-[9px] font-black uppercase tracking-[0.3em]">{selectedImage.category} Reference</div>
                       </div>
                    </div>

                    <div className="absolute top-12 right-12 hidden md:block">
                       <div className="glass-frosted p-8 rounded-[2rem] border-white/10 flex flex-col items-end space-y-4">
                          <div className="w-16 h-1 w-2 bg-accent opacity-50" />
                          <div className="text-[8px] font-black text-white/30 font-mono tracking-widest text-right">COORD_SYS: DGPS_INDIA_TAMILNADU</div>
                          <div className="text-[8px] font-black text-white/30 font-mono tracking-widest text-right">TIMESTAMP: {new Date().toISOString().split('T')[0]}</div>
                       </div>
                    </div>
                  </div>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
}
