"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useProjectStore } from "@/store/useProjectStore";

const mockProjects = [
  { id: 1, title: "Modern Residential Villa", location: "Periyar Nagar, Erode", date: "2023", category: "Construction", image: "/images/3d_elevation_render.png" },
  { id: 2, title: "Commercial Complex", location: "Gandhiji Rd, Erode", date: "2024", category: "Construction", image: "/images/blueprint_sketch.png" },
  { id: 3, title: "Land Survey Site-A", location: "Veerappan Chatram", date: "2023", category: "Surveying", image: "/images/surveying_action.png" },
  { id: 4, title: "3D Elevation Elite House", location: "Gobichettipalayam", date: "2023", category: "Design", image: "/images/engineer_kavin.png" },
  { id: 5, title: "Structural Survey B-9", location: "Sathy Road, Erode", date: "2024", category: "Surveying", image: "/images/hero_instrument.png" },
  { id: 6, title: "Industrial Layout Plan", location: "Perundurai SIPCOT", date: "2024", category: "Planning", image: "/images/industrial_layout_plan_nano.png" },


];


export default function FeaturedProjects() {
  const { projects } = useProjectStore();
  const displayedProjects = (projects && projects.length > 0 ? projects : mockProjects).slice(0, 6);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden group">
      {/* 3D Architectural Foundation */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/3d_elevation_render.png"
          alt="Technical Base"
          fill
          unoptimized={true}
          className="object-cover opacity-10 brightness-50 mix-blend-overlay scale-110"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex items-center space-x-6 mb-8"
            >
              <div className="w-20 h-[1px] bg-accent shadow-[0_0_15px_#FBBF24]" />
              <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">Portfolio Showcase</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-fluid-md font-black tracking-tighter text-white uppercase leading-[0.85]"
            >
              Structural <span className="text-accent">Excellence</span> <br/> Kinetic Archives
            </motion.h2>
          </div>
          <Link href="/projects" className="group flex items-center space-x-6 text-white/40 hover:text-accent font-black uppercase tracking-[0.3em] text-[10px] transition-all mb-12 md:mb-0">
             <span>Browse Full Project Explorer</span>
             <div className="w-14 h-14 glass-frosted border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:scale-110 group-hover:rotate-12 transition-all shadow-xl">
                <ArrowUpRight size={20} className="group-hover:text-primary transition-colors" />
             </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ 
                y: i % 2 === 0 ? [0, 15, 0] : [0, -15, 0]
              }}
              transition={{ 
                duration: 12 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.1
              }}
              viewport={{ once: true }}
              className="group relative glass-frosted p-4 overflow-hidden aspect-[4/5] flex flex-col cursor-pointer rounded-[4rem] border border-white/5 hover:border-accent/30 transition-all shadow-2xl"
            >
              {/* Image Layer within Glass Shell */}
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
              
              {/* Category Badge - Floating Glass */}
              <div className="absolute top-10 left-10 z-20 glass-frosted border-accent/40 text-accent text-[8px] font-black uppercase tracking-[0.4em] px-6 py-2 rounded-full shadow-2xl">
                 {project.category}
              </div>

              {/* Hover Text Reveal */}
              <div className="absolute inset-x-10 bottom-10 z-20 space-y-6">
                 <div className="flex items-center space-x-4 text-accent/60 text-[8px] font-black uppercase tracking-[0.5em]">
                    <MapPin size={12} className="text-accent" />
                    <span>{project.location}</span>
                 </div>
                 <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-[0.9] group-hover:text-accent transition-colors">
                    {project.title}
                 </h3>
                 <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="flex items-center space-x-4 text-white/30 text-[9px] font-black uppercase tracking-[0.3em]">
                       <Calendar size={14} />
                       <span>{project.date}</span>
                    </div>
                 </div>
              </div>

              {/* HUD Corner Marker */}
              <div className="absolute bottom-10 right-10 w-12 h-12 glass-frosted rounded-full border border-white/10 opacity-40 flex items-center justify-center animate-spin-slow pointer-events-none">
                 <div className="w-1 h-1 bg-accent rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
