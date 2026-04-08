"use client";

import { motion } from "framer-motion";
import { Ruler, Box, Compass, Triangle, Pencil, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

const iconMap = {
  Ruler, Box, Compass, Triangle, Pencil
};

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-fine opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-4"
            >
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-secondary font-black uppercase tracking-[0.4em] text-sm">Professional Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-black tracking-tighter text-primary uppercase leading-tight"
            >
              Engineered <span className="text-accent underline decoration-primary/10 transition-all hover:decoration-accent">Solutions</span> For Every Project
            </motion.h2>
          </div>
          <Link href="/services" className="group flex items-center space-x-3 text-secondary hover:text-primary font-black uppercase tracking-widest text-sm transition-colors">
            <span>View All Services</span>
            <div className="w-10 h-10 border border-gray-100 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
               <ArrowRight size={18} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
          {SERVICES.slice(0, 5).map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative group border-r border-b border-gray-100 p-10 transition-all overflow-hidden",
                  service.main ? "lg:col-span-2 bg-primary text-white" : "hover:bg-gray-50"
                )}
              >
                {/* Background Blueprint for card */}
                {service.main && (
                   <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
                )}
                
                <div className="relative z-10">
                  <div className={cn(
                    "w-16 h-16 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110 mb-8",
                    service.main ? "bg-accent/10 border border-accent/20" : "bg-primary/5 border border-primary/10"
                  )}>
                    <Icon className={cn("w-8 h-8", service.main ? "text-accent" : "text-primary")} />
                  </div>

                  <h3 className={cn(
                    "text-2xl font-black uppercase tracking-tighter mb-4",
                    service.main ? "text-white md:text-4xl" : "text-primary"
                  )}>
                    {service.title}
                  </h3>
                  
                  <p className={cn(
                    "text-sm mb-8 leading-relaxed max-w-sm font-medium",
                    service.main ? "text-gray-300 md:text-lg" : "text-gray-500"
                  )}>
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.map(f => (
                      <span key={f} className={cn(
                        "text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1",
                        service.main ? "bg-white/10 text-white" : "bg-primary/5 text-secondary"
                      )}>
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link href={`/services#${service.id}`} className={cn(
                    "inline-flex items-center text-xs font-black uppercase tracking-widest group/link",
                    service.main ? "text-accent" : "text-primary"
                  )}>
                    Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
                
                {/* Technical Corner Accent */}
                <div className={cn(
                  "absolute top-0 right-0 w-24 h-24  opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none",
                  service.main ? "bg-gradient-to-bl from-accent via-transparent to-transparent" : "bg-gradient-to-bl from-primary via-transparent to-transparent"
                )} />
              </motion.div>
            );
          })}
          
          {/* Decorative Technical Card */}
          <div className="bg-accent p-10 flex flex-col justify-center border-r border-b border-gray-100 group">
             <Ruler className="text-primary w-12 h-12 mb-6 group-hover:rotate-45 transition-transform duration-500" />
             <h4 className="text-primary font-black uppercase tracking-tighter text-2xl mb-2">Need Accuracy?</h4>
             <p className="text-primary/70 text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary cursor-pointer">Start Your Survey Today →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
