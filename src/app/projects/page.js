"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, MapPin, Calendar, X, ArrowUpRight, Layers } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";
import { cn } from "@/lib/utils";

const filterCategories = ["All", "Surveying", "Construction", "Design", "Planning"];

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
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden relative">
      <div className="fixed inset-0 bg-blueprint opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header and Filter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4 mb-4"
            >
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-secondary font-black uppercase tracking-[0.4em] text-sm md:text-base">Structural Explorer</span>
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-tight">
               Built <span className="text-accent underline decoration-primary/5">Project</span> Archives
            </h1>
          </div>

          <div className="w-full lg:w-auto flex flex-col space-y-6">
             {/* Search */}
             <div className="relative group w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-accent transition-colors" size={20} />
                <input 
                   type="text" 
                   placeholder="Search project title or location..."
                   className="w-full bg-gray-50 border-2 border-gray-100 py-4 pl-12 pr-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
             
             {/* Filters */}
             <div className="flex flex-wrap gap-2">
                {filterCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={cn(
                      "px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all",
                      activeFilter === cat 
                        ? "bg-primary text-white shadow-[4px_4px_0px_0px_#FBBF24]" 
                        : "bg-gray-50 text-secondary hover:bg-gray-100 border border-transparent"
                    )}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <AnimatePresence mode="popLayout">
             {filteredProjects.map((project, i) => (
               <motion.div
                 key={project.id}
                 layout
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.5, delay: i * 0.05 }}
                 onClick={() => setSelectedProject(project)}
                 className="group relative bg-gray-50 overflow-hidden aspect-[4/5] flex flex-col cursor-pointer border-t-2 border-transparent hover:border-accent"
               >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.1] group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/10 transition-colors duration-700 z-10" />
                  
                  {/* Category Accent */}
                  <div className="absolute top-8 left-8 z-20 bg-accent text-primary text-[10px] font-black uppercase tracking-widest px-4 py-2 shadow-xl -skew-x-[15deg]">
                     {project.category}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-20 p-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-gradient-to-t from-primary via-primary/95 to-transparent">
                     <div className="flex items-center space-x-2 text-accent text-[9px] font-black uppercase tracking-[0.3em] mb-4">
                        <MapPin size={12} />
                        <span>{project.location}</span>
                     </div>
                     <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
                        {project.title}
                     </h3>
                     <div className="flex items-center justify-between border-t border-white/20 pt-8">
                        <div className="flex items-center space-x-2 text-white/50 text-[9px] font-bold uppercase tracking-widest">
                           <Calendar size={14} />
                           <span>{project.date}</span>
                        </div>
                        <span className="text-accent text-[9px] font-black uppercase tracking-widest flex items-center group/btn">
                           Project Data <ArrowUpRight className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </span>
                     </div>
                  </div>
               </motion.div>
             ))}
           </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
           {selectedProject && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none"
             >
                <div onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-primary/95 backdrop-blur-md pointer-events-auto" />
                
                <motion.div
                  initial={{ scale: 0.9, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 50 }}
                  className="bg-white w-full max-w-6xl max-h-full overflow-y-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 shadow-2xl pointer-events-auto border-4 border-accent"
                >
                   <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-30 bg-primary text-white p-3 hover:bg-accent hover:text-primary transition-colors">
                      <X size={24} />
                   </button>
                   
                   <div className="relative aspect-square lg:aspect-auto">
                      <img src={selectedProject.image} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-primary/10" />
                   </div>

                   <div className="p-8 md:p-16 flex flex-col justify-center bg-blueprint relative">
                      {/* Geometric Decorative Accent */}
                      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-primary/10" />
                      
                      <div className="flex items-center space-x-4 mb-8">
                         <div className="bg-accent px-4 py-2 font-black uppercase tracking-widest text-[10px] transform -skew-x-[20deg] text-primary">
                            {selectedProject.category}
                         </div>
                         <div className="h-[2px] flex-grow bg-primary/10" />
                      </div>

                      <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-tight mb-8">
                         {selectedProject.title}
                      </h2>
                      
                      <div className="grid grid-cols-2 gap-10 mb-12 border-b border-gray-100 pb-12">
                         <div className="space-y-1">
                            <span className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] block">Project Location</span>
                            <div className="flex items-center space-x-2 text-primary font-bold text-lg tracking-tighter">
                               <MapPin size={18} className="text-accent" />
                               <span>{selectedProject.location}</span>
                            </div>
                         </div>
                         <div className="space-y-1">
                            <span className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] block">Project Year</span>
                            <div className="flex items-center space-x-2 text-primary font-bold text-lg tracking-tighter">
                               <Calendar size={18} className="text-accent" />
                               <span>{selectedProject.date}</span>
                            </div>
                         </div>
                      </div>

                      <p className="text-gray-500 font-medium text-lg leading-relaxed mb-12">
                         {selectedProject.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                         <button className="bg-primary text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-charcoal transition-all shadow-[6px_6px_0px_0px_#FBBF24]">
                            View Structural Specs
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
