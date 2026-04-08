"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const mockProjects = [
  { id: 1, title: "Modern Residential Villa", location: "Periyar Nagar, Erode", date: "2023", category: "Construction", image: "/images/3d_elevation_render.png" },
  { id: 2, title: "Commercial Complex", location: "Gandhiji Rd, Erode", date: "2024", category: "Construction", image: "/images/engineer_kavin.png" },
  { id: 3, title: "Land Survey Site-A", location: "Veerappan Chatram", date: "2023", category: "Surveying", image: "/images/surveying_action.png" },
  { id: 4, title: "3D Elevation Elite House", location: "Gobichettipalayam", date: "2023", category: "Design", image: "/images/3d_elevation_render.png" },
  { id: 5, title: "Structural Survey B-9", location: "Sathy Road, Erode", date: "2024", category: "Surveying", image: "/images/hero_instrument.png" },
  { id: 6, title: "Industrial Layout Plan", location: "Perundurai SIPCOT", date: "2024", category: "Planning", image: "/images/industrial_layout_plan_nano.png" },


];


export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex items-center space-x-4 mb-4"
            >
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-secondary font-black uppercase tracking-[0.4em] text-sm md:text-base">Portfolio Showcase</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter text-primary uppercase leading-tight"
            >
              Structural <span className="text-accent underline decoration-primary/10 transition-all hover:decoration-accent">Excellence</span> In Action
            </motion.h2>
          </div>
          <Link href="/projects" className="group flex items-center space-x-3 text-secondary hover:text-primary font-black uppercase tracking-widest text-sm transition-colors mb-4 md:mb-0">
             <span>Browse Full Project Explorer</span>
             <div className="w-10 h-10 border border-gray-100 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                <ArrowUpRight size={18} />
             </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#F8F9FA] overflow-hidden aspect-square flex flex-col cursor-pointer border-t-2 border-transparent hover:border-accent transition-colors duration-500"
            >
              {/* Image with zoom effect */}
              <div className="absolute inset-0 bg-primary/20 transition-all duration-700 group-hover:bg-primary/0 z-10" />
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-20 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 text-center shadow-lg transform -skew-x-12">
                 {project.category}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-gradient-to-t from-primary via-primary/95 to-transparent">
                 <div className="flex items-center space-x-2 text-accent text-[9px] font-black uppercase tracking-[0.3em] mb-3">
                    <MapPin size={10} />
                    <span>{project.location}</span>
                 </div>
                 <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
                    {project.title}
                 </h3>
                 <div className="flex items-center space-x-6 border-t border-white/10 pt-6">
                    <div className="flex items-center space-x-2 text-white/50 text-[9px] font-bold uppercase tracking-widest">
                       <Calendar size={12} />
                       <span>{project.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/50 text-[9px] font-bold uppercase tracking-widest">
                       <Layers size={12} />
                       <span>Detail Spec</span>
                    </div>
                 </div>
              </div>

              {/* Animated Corner Tech Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                 <div className="absolute top-6 right-6 w-8 h-[1px] bg-accent" />
                 <div className="absolute top-6 right-6 h-8 w-[1px] bg-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
