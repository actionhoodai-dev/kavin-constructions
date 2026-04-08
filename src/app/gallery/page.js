"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Ruler, Triangle, Box } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";

const defaultGalleryImages = [
  { id: 1, src: "/images/surveying_action.png", title: "Topographic Survey Site", category: "Survey" },
  { id: 2, src: "/images/hero_instrument.png", title: "Precision GPS Instrumentation", category: "Survey" },
  { id: 3, src: "/images/blueprint_sketch.png", title: "Structural Blueprint Draft", category: "Design" },
  { id: 4, src: "/images/3d_elevation_render.png", title: "3D Elevation Elite House", category: "Design" },
  { id: 5, src: "/images/industrial_layout_plan_nano.png", title: "Industrial Site Planning", category: "Planning" },
  { id: 6, src: "/images/site_measurement_new.png", title: "Site Measurement Capture", category: "Survey" },
  { id: 7, src: "/images/engineer_kavin.png", title: "Construction Site Progress", category: "Construction" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { gallery: storeGallery } = useProjectStore();
  const galleryImages = [...storeGallery, ...defaultGalleryImages];
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
                 <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white hover:text-accent transition-colors flex items-center space-x-2 font-black uppercase tracking-widest text-[10px]">
                    Close Viewer <X size={24} />
                 </button>
                 
                 <div className="relative aspect-video lg:aspect-auto flex-grow overflow-hidden border-2 border-white/10 group">
                    <img src={selectedImage.src} className="w-full h-full object-contain bg-black/20" />
                    
                    {/* Tech Info HUD */}
                    <div className="absolute bottom-10 left-10 p-8 border-l border-accent backdrop-blur-sm bg-primary/20">
                       <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">{selectedImage.title}</h3>
                       <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-2 text-accent text-[10px] font-black uppercase tracking-[0.3em]">
                             <Triangle size={14} />
                             <span>Precision Capture</span>
                          </div>
                          <div className="w-px h-4 bg-white/20" />
                          <div className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">{selectedImage.category} Archive</div>
                       </div>
                    </div>
                    
                    {/* Decorative HUD Elements */}
                    <div className="absolute top-10 right-10 flex flex-col space-y-4 opacity-50">
                       <div className="w-20 h-[1px] bg-white group-hover:w-32 transition-all duration-1000" />
                       <div className="w-12 h-[1px] bg-accent self-end group-hover:w-20 transition-all duration-1000" />
                    </div>
                 </div>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>
    </>
  );
}
