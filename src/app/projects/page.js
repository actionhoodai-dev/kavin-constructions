"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, MapPin, Calendar, X, ArrowUpRight, Layers } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";
import { cn } from "@/lib/utils";

const filterCategories = ["All", "Surveying", "Construction", "Design", "Planning"];

import Image from "next/image";

export default function ProjectsPage() {
  const { projects, activeFilter, setFilter } = useProjectStore();
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(p => {
    const matchesFilter = activeFilter === "All" || p.category === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 overflow-hidden relative selection:bg-accent selection:text-primary">
      {/* 3D Architectural Foundation */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/images/construction_skeleton.png"
          alt="Architectural Foundation"
          fill
          unoptimized={true}
          className="object-cover opacity-10 brightness-50 mix-blend-overlay scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Cinematic Header and Glass Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-6 mb-8"
            >
              <div className="w-20 h-[1px] bg-accent" />
              <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">Structural Explorer</span>
            </motion.div>
            <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-fluid-lg font-black tracking-tighter text-white uppercase leading-[0.85]"
            >
               Architectural <br/><span className="text-accent">Project</span> Archives
            </motion.h1>
          </div>

          <div className="w-full lg:w-auto flex flex-col space-y-8">
             {/* Glass Search Interface */}
             <div className="relative group w-full lg:w-[30rem]">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-accent/40 group-hover:text-accent transition-colors" size={20} />
                <input 
                   type="text" 
                   placeholder="SCAN PROJECT DATABASE..."
                   className="w-full glass-frosted border-white/5 py-5 pl-16 pr-8 rounded-full text-white font-black text-[11px] tracking-[0.3em] focus:outline-none focus:border-accent/40 transition-all placeholder:text-white/20"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
             
             {/* Glass Filter Ports */}
             <div className="flex flex-wrap gap-3 glass-frosted p-3 rounded-full border-white/5">
                {filterCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={cn(
                      "px-8 py-3 text-[9px] font-black uppercase tracking-widest transition-all rounded-full",
                      activeFilter === cat 
                        ? "bg-accent text-primary shadow-2xl scale-105" 
                        : "text-white/40 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </div>

        {/* Project Kinetic Grid */}
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-40 text-center glass-frosted rounded-[5rem] border-white/5">
            <div className="w-24 h-24 glass-frosted flex items-center justify-center mb-8 border border-white/10 rounded-3xl animate-pulse">
              <Layers size={40} className="text-accent" />
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">No Sector Sync Found</h3>
            <p className="text-white/30 text-[10px] font-black uppercase tracking-widest leading-relaxed">Adjust filters to re-initialize search parameters.</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           <AnimatePresence mode="popLayout">
             {filteredProjects.map((project, i) => (
               <motion.div
                 key={project.id}
                 layout
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ 
                   opacity: 1, 
                   scale: 1,
                   y: (i % 3 === 0) ? [0, 15, 0] : (i % 3 === 1) ? [0, -15, 0] : [0, 10, 0]
                 }}
                 transition={{ 
                   layout: { duration: 0.5 },
                   y: { duration: 10 + i, repeat: Infinity, ease: "easeInOut" }
                 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 onClick={() => setSelectedProject(project)}
                 className="group relative glass-frosted overflow-hidden aspect-[4/5] flex flex-col cursor-pointer rounded-[4rem] border border-white/5 hover:border-accent/30 transition-all shadow-2xl p-4"
               >
                  <div className="relative flex-grow overflow-hidden rounded-[3.5rem]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized={true}
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.1] group-hover:scale-100 brightness-75 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent z-10" />
                  </div>
                  
                  {/* Category Accent */}
                  <div className="absolute top-10 left-10 z-20 glass-frosted border-accent/40 text-accent text-[9px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl">
                     {project.category}
                  </div>

                  <div className="absolute inset-x-8 bottom-8 z-20 space-y-6">
                     <div className="flex items-center space-x-4 text-accent/60 text-[8px] font-black uppercase tracking-[0.4em]">
                        <MapPin size={12} className="text-accent" />
                        <span>{project.location}</span>
                     </div>
                     <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-[0.9] group-hover:text-accent transition-colors">
                        {project.title}
                     </h3>
                     <div className="flex items-center justify-between border-t border-white/10 pt-6">
                        <div className="flex items-center space-x-4 text-white/30 text-[9px] font-black uppercase tracking-widest">
                           <Calendar size={14} />
                           <span>{project.date}</span>
                        </div>
                        <span className="text-accent text-[8px] font-black uppercase tracking-[0.4em] flex items-center group/btn">
                           Project Data <ArrowUpRight className="ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </span>
                     </div>
                  </div>
               </motion.div>
             ))}
           </AnimatePresence>
        </div>
        )}

        {/* Modal - Cinematic Glass Terminal */}
        <AnimatePresence>
           {selectedProject && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-16"
             >
                <div onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/90 backdrop-blur-3xl" />
                
                <motion.div
                  initial={{ scale: 0.9, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 50 }}
                  className="glass-frosted w-full max-w-7xl h-full overflow-hidden relative z-10 grid grid-cols-1 lg:grid-cols-2 rounded-[5rem] border-white/10 shadow-[0_0_200px_-50px_rgba(251,191,36,0.2)] pointer-events-auto"
                >
                   <button onClick={() => setSelectedProject(null)} className="absolute top-10 right-10 z-30 glass-frosted w-16 h-16 rounded-full flex items-center justify-center text-white hover:text-accent transition-colors border-white/10 active:scale-95">
                      <X size={24} />
                   </button>
                   
                   <div className="relative aspect-square lg:aspect-auto">
                      <Image 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        fill
                        unoptimized={true}
                        className="object-cover brightness-75 contrast-125" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
                   </div>

                   <div className="p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
                      <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-accent/20 select-none opacity-50" />
                      
                      <div className="flex items-center space-x-6 mb-12">
                         <div className="glass-frosted border-accent/40 px-8 py-3 text-[10px] font-black uppercase tracking-widest text-accent rounded-full">
                            {selectedProject.category}
                         </div>
                         <div className="h-[1px] flex-grow bg-white/10" />
                      </div>

                      <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
                         {selectedProject.title}
                      </h2>
                      
                      <div className="grid grid-cols-2 gap-16 mb-16 border-b border-white/10 pb-16">
                         <div className="space-y-4">
                            <span className="text-accent/40 font-black uppercase tracking-[0.4em] text-[9px] block">SITE LOCATION</span>
                            <div className="flex items-center space-x-4 text-white font-black text-2xl tracking-tighter animate-in fade-in slide-in-from-left-5 duration-700 delay-100">
                               <MapPin size={22} className="text-accent" />
                               <span>{selectedProject.location}</span>
                            </div>
                         </div>
                         <div className="space-y-4">
                            <span className="text-accent/40 font-black uppercase tracking-[0.4em] text-[9px] block">SYNC DATE</span>
                            <div className="flex items-center space-x-4 text-white font-black text-2xl tracking-tighter animate-in fade-in slide-in-from-left-5 duration-700 delay-200">
                               <Calendar size={22} className="text-accent" />
                               <span>{selectedProject.date}</span>
                            </div>
                         </div>
                      </div>

                      <p className="text-white/40 font-medium text-xl leading-relaxed mb-16 max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                         {selectedProject.description}
                      </p>

                      <div className="flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-400">
                         <button className="glass-frosted border-accent/20 text-accent px-12 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-accent hover:text-primary transition-all shadow-2xl group flex items-center space-x-4">
                            <span>STRUCTURAL BLUEPRINT</span>
                            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </button>
                      </div>
                   </div>
                </motion.div>
             </motion.div>
           )}
        </AnimatePresence>
      </div>
    </div>
  );
}
