"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Ruler, Triangle, Box, Image as ImageIcon } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";
import Image from "next/image";
import { Oswald, Urbanist, Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const urbanist = Urbanist({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"] });
const oswald = Oswald({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { gallery: galleryImages } = useProjectStore();

  return (
    <div className="w-full bg-[#f9f8f4] text-[#111] min-h-screen font-sans selection:bg-[#ffe400] selection:text-[#111] overflow-x-hidden pt-32 pb-24">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Cinematic Header */}
        <section className="py-12 md:py-20 w-full max-w-7xl mx-auto flex justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="w-5 h-5 text-[#111]" />
              <h3 className={`${urbanist.className} text-[15px] font-bold text-[#111] uppercase tracking-widest`}>Visual Repository</h3>
            </div>
            <h1 className={`${bebas.className} text-7xl md:text-[10vw] leading-[0.85] text-[#111] m-0 p-0 tracking-[0.02em]`}>
              PRECISION <span className="text-[#ffe400] drop-shadow-sm">GALLERY</span>
            </h1>
            <p className={`${urbanist.className} text-lg md:text-xl text-gray-600 font-medium max-w-3xl mt-8 leading-relaxed`}>
               A curated archive of high-precision land surveys, architectural designs, and engineering projects across Tamil Nadu.
            </p>
          </div>
        </section>

        <div className="w-full h-[1.5px] bg-[#111] max-w-6xl mx-auto mb-16 md:mb-24"></div>

        {/* Gallery Grid */}
        {galleryImages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center bg-white rounded-[3rem] border border-gray-100 shadow-xl">
            <div className="w-20 h-20 bg-gray-50 flex items-center justify-center mb-6 border border-gray-200 rounded-2xl">
              <Maximize2 size={32} className="text-[#ffe400]" />
            </div>
            <h3 className={`${oswald.className} text-3xl font-bold text-[#111] uppercase tracking-tight mb-3`}>Archive Is Empty</h3>
            <p className={`${urbanist.className} text-gray-500 text-sm font-bold uppercase tracking-widest`}>Waiting for synchronization...</p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(image)}
                className="relative break-inside-avoid group cursor-pointer overflow-hidden bg-white rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all p-3"
              >
                <div className="relative overflow-hidden rounded-[2rem]">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={800}
                    height={1000}
                    unoptimized
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className={`${oswald.className} text-xl font-bold text-white uppercase tracking-tight`}>
                      {image.title}
                    </h4>
                    <p className={`${urbanist.className} text-white/80 text-xs font-bold uppercase tracking-widest mt-1`}>
                      {image.category || "Project Archive"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-white/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden relative shadow-2xl border border-gray-200"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#111] hover:bg-[#ffe400] transition-colors shadow-lg border border-gray-200"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[85vh]">
                <div className="flex-grow relative bg-gray-50 min-h-[40vh] lg:min-h-0">
                  <Image 
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    unoptimized
                    className="object-contain p-4 lg:p-8"
                  />
                </div>
                <div className="w-full lg:w-[350px] p-8 lg:p-12 bg-white flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-1 bg-[#ffe400]"></div>
                    <span className={`${urbanist.className} text-[#111] font-bold tracking-widest uppercase text-xs`}>
                      {selectedImage.category || "Visual Archive"}
                    </span>
                  </div>
                  <h2 className={`${oswald.className} text-4xl font-bold text-[#111] uppercase tracking-tight mb-4`}>
                    {selectedImage.title}
                  </h2>
                  <p className={`${urbanist.className} text-gray-600 font-medium leading-relaxed`}>
                    {selectedImage.description || "Detailed high-precision engineering visual document capturing the architectural essence of the project."}
                  </p>
                  
                  <div className="mt-10 pt-10 border-t border-gray-100 grid grid-cols-2 gap-6">
                    <div>
                      <span className={`${urbanist.className} text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-1`}>Location</span>
                      <span className={`${oswald.className} text-sm text-[#111] font-bold uppercase`}>Tamil Nadu</span>
                    </div>
                    <div>
                      <span className={`${urbanist.className} text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-1`}>Scale</span>
                      <span className={`${oswald.className} text-sm text-[#111] font-bold uppercase`}>1:100 Precision</span>
                    </div>
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
