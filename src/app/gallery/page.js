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
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden relative">
      <div className="fixed inset-0 bg-blueprint-fine opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4 mb-4"
          >
            <div className="w-12 h-[2px] bg-accent" />
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-sm">Visual Repository</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-tight">
             Precision <span className="text-accent underline decoration-primary/5">Gallery</span> Explorer
          </h1>
        </div>

        {/* Masonry Grid */}
        {galleryImages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-24 h-24 bg-gray-50 flex items-center justify-center mb-8 border-2 border-dashed border-gray-200">
              <Maximize2 size={40} className="text-gray-300" />
            </div>
            <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-3">Gallery Is Empty</h3>
            <p className="text-gray-400 text-sm font-medium max-w-md">Images will appear here once they are uploaded through the admin panel.</p>
          </div>
        ) : (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
           {galleryImages.map((image, i) => (
             <motion.div
               key={image.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               onClick={() => setSelectedImage(image)}
               className="relative break-inside-avoid group cursor-pointer overflow-hidden border-2 border-transparent hover:border-accent shadow-xl hover:shadow-2xl transition-all"
             >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                
                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                   <div className="p-8 text-center text-white scale-90 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 size={48} className="mx-auto text-accent mb-6" />
                      <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{image.title}</h3>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80">{image.category}</p>
                   </div>
                   
                   {/* Geometric lines on hover */}
                   <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-accent transition-all duration-700 opacity-0 group-hover:opacity-100" />
                   <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-accent transition-all duration-700 opacity-0 group-hover:opacity-100" />
                </div>
                
                {/* Category Badge Visible Always */}
                <div className="absolute bottom-4 right-4 bg-primary/20 backdrop-blur-md px-3 py-1 text-[9px] font-black text-white uppercase tracking-widest border border-white/10 group-hover:opacity-0 transition-opacity">
                   {image.category}
                </div>
             </motion.div>
           ))}
        </div>
        )}

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
         {selectedImage && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-10 pointer-events-none"
           >
              <div onClick={() => setSelectedImage(null)} className="absolute inset-0 bg-primary/98 backdrop-blur-2xl pointer-events-auto" />
              
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative z-10 w-full max-w-7xl max-h-full flex flex-col pointer-events-auto"
              >
                  <div className="flex justify-end p-2 lg:p-4 shrink-0">
                     <button onClick={() => setSelectedImage(null)} className="text-white hover:text-accent transition-colors flex items-center space-x-2 font-black uppercase tracking-widest text-[10px]">
                        Close Viewer <X size={24} />
                     </button>
                  </div>
                 
                 <div className="relative w-full h-auto max-h-[75vh] md:max-h-[85vh] flex-grow flex items-center justify-center overflow-hidden border-2 border-white/10 group bg-black/40">
                    <img src={selectedImage.src} className="max-w-full max-h-[75vh] md:max-h-[85vh] w-auto h-auto object-contain" />
                    
                    {/* Tech Info HUD */}
                    <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 p-4 md:p-8 border-l border-accent backdrop-blur-sm bg-primary/40 hidden sm:block">
                       <h3 className="text-lg md:text-3xl font-black text-white uppercase tracking-tighter mb-2">{selectedImage.title}</h3>
                       <div className="flex items-center space-x-4 md:space-x-6">
                          <div className="flex items-center space-x-2 text-accent text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">
                             <Triangle size={14} />
                             <span>Precision Capture</span>
                          </div>
                          <div className="w-px h-4 bg-white/20" />
                          <div className="text-white/50 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">{selectedImage.category} Archive</div>
                       </div>
                    </div>
                    
                    {/* Decorative HUD Elements */}
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 flex flex-col space-y-4 opacity-50 hidden md:flex">
                       <div className="w-16 md:w-20 h-[1px] bg-white group-hover:w-24 md:group-hover:w-32 transition-all duration-1000" />
                       <div className="w-10 md:w-12 h-[1px] bg-accent self-end group-hover:w-16 md:group-hover:w-20 transition-all duration-1000" />
                    </div>
                 </div>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>
    </>
  );
}
