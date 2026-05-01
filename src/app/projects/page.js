"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Calendar, X, ArrowUpRight, Layers } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Oswald, Urbanist, Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const urbanist = Urbanist({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"] });
const oswald = Oswald({ weight: ["400", "600", "700"], subsets: ["latin"] });

const filterCategories = ["All", "Surveying", "Construction", "Design", "Planning"];

export default function ProjectsPage() {
  const { projects, activeFilter, setFilter } = useProjectStore();
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(p => {
    return activeFilter === "All" || p.category === activeFilter;
  });

  return (
    <div className="w-full bg-[#f9f8f4] text-[#111] min-h-screen font-sans selection:bg-[#ffe400] selection:text-[#111] overflow-x-hidden pt-32 pb-24">
      
      {/* Cinematic Header */}
      <section className="py-12 md:py-20 w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
              <h3 className={`${urbanist.className} text-[15px] font-bold text-[#111] uppercase tracking-widest`}>Structural Explorer</h3>
            </div>
            <h1 className={`${bebas.className} text-7xl md:text-[8vw] leading-[0.85] text-[#111] m-0 p-0 tracking-[0.02em]`}>
              ARCHITECTURAL <br/>
              <span className="text-[#ffe400] drop-shadow-sm">PROJECT ARCHIVES</span>
            </h1>
          </div>

          <div className="w-full lg:w-auto flex flex-col space-y-6">
             {/* Filter Ports */}
             <div className="flex flex-wrap gap-2 bg-white p-2 rounded-full border border-gray-100 shadow-sm">
                {filterCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={cn(
                      `${oswald.className} px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all rounded-full`,
                      activeFilter === cat 
                        ? "bg-[#ffe400] text-[#111] shadow-md scale-105" 
                        : "text-gray-500 hover:text-[#111] hover:bg-gray-100"
                    )}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[1.5px] bg-[#111] max-w-7xl mx-auto my-8"></div>

      {/* Project Grid */}
      <section className="py-12 w-full max-w-7xl mx-auto px-4">
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center bg-white rounded-[2.5rem] border border-gray-100 shadow-xl">
            <div className="w-20 h-20 bg-gray-50 flex items-center justify-center mb-6 border border-gray-200 rounded-full animate-pulse">
              <Layers size={32} className="text-[#111]" />
            </div>
            <h3 className={`${oswald.className} text-3xl font-bold text-[#111] uppercase tracking-tight mb-3`}>No Projects Found</h3>
            <p className={`${urbanist.className} text-gray-500 text-sm font-bold uppercase tracking-widest`}>Adjust your search or filters to see results.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             <AnimatePresence mode="popLayout">
               {filteredProjects.map((project, i) => (
                 <motion.div
                   key={project.id}
                   layout
                   initial={{ opacity: 0, scale: 0.95, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   transition={{ layout: { duration: 0.5 }, duration: 0.5, delay: i * 0.1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   onClick={() => setSelectedProject(project)}
                   className="group relative bg-white overflow-hidden aspect-[4/5] flex flex-col cursor-pointer rounded-[2.5rem] border border-gray-100 hover:border-gray-300 transition-all shadow-xl p-3"
                 >
                    <div className="relative flex-grow overflow-hidden rounded-[2rem]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        className="object-cover transition-all duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10" />
                    </div>
                    
                    {/* Category Accent */}
                    <div className="absolute top-8 left-8 z-20 bg-[#ffe400] text-[#111] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                       {project.category}
                    </div>

                    <div className="absolute inset-x-8 bottom-8 z-20 space-y-4">
                       <div className="flex items-center space-x-2 text-[#ffe400] text-xs font-bold uppercase tracking-widest">
                          <MapPin size={14} />
                          <span>{project.location}</span>
                       </div>
                       <h3 className={`${oswald.className} text-3xl font-bold text-[#111] uppercase tracking-tight leading-none group-hover:text-[#ffe400] transition-colors`}>
                          {project.title}
                       </h3>
                       <div className="flex items-center justify-between border-t border-white/20 pt-4">
                          <div className="flex items-center space-x-2 text-gray-300 text-xs font-bold uppercase tracking-widest">
                             <Calendar size={14} />
                             <span>{project.date}</span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white text-[#111] flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 shadow-md">
                             <ArrowUpRight size={16} />
                          </div>
                       </div>
                    </div>
                 </motion.div>
               ))}
             </AnimatePresence>
          </div>
        )}
      </section>

      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-white/60 backdrop-blur-md"
          >
             <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="w-full max-w-6xl bg-[#f9f8f4] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative border border-gray-200"
             >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#111] hover:bg-[#ffe400] transition-colors shadow-lg border border-gray-200"
                >
                  <X size={24} />
                </button>

                {/* Modal Visual */}
                <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto relative bg-gray-200">
                   <Image 
                     src={selectedProject.image}
                     alt={selectedProject.title}
                     fill
                     unoptimized
                     className="object-cover"
                   />
                </div>

                {/* Modal Content */}
                <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col overflow-y-auto max-h-[80vh] lg:max-h-[90vh]">
                   <div className="flex items-center space-x-3 text-[#111] text-xs font-bold uppercase tracking-widest mb-6">
                      <div className="px-4 py-1.5 border border-[#111] rounded-full">{selectedProject.category}</div>
                      <div className="flex items-center space-x-1">
                         <MapPin size={14} />
                         <span>{selectedProject.location}</span>
                      </div>
                   </div>

                   <h2 className={`${oswald.className} text-5xl md:text-6xl font-bold text-[#111] uppercase tracking-tight leading-[1.1] mb-6`}>
                      {selectedProject.title}
                   </h2>
                   
                   <p className={`${urbanist.className} text-lg text-gray-600 leading-relaxed font-medium mb-10`}>
                      {selectedProject.description}
                   </p>

                   <div className="grid grid-cols-2 gap-8 mb-10">
                      <div>
                         <span className={`${urbanist.className} text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1`}>Client</span>
                         <span className={`${oswald.className} text-xl text-[#111] font-bold uppercase`}>{selectedProject.client}</span>
                      </div>
                      <div>
                         <span className={`${urbanist.className} text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1`}>Date Completed</span>
                         <span className={`${oswald.className} text-xl text-[#111] font-bold uppercase`}>{selectedProject.date}</span>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <h4 className={`${oswald.className} text-2xl font-bold text-[#111] uppercase tracking-tight`}>Technical Implementations</h4>
                      <div className="flex flex-wrap gap-2">
                         {selectedProject.tech.map(t => (
                           <span key={t} className={`${urbanist.className} px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-[#111] shadow-sm`}>
                             {t}
                           </span>
                         ))}
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
