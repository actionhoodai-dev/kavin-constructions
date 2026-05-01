"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Vijayan M",
    role: "Client",
    content: "Survey work done by using modern equipments it's very much satisfied their clients.....",
    rating: 5,
    date: "2 years ago"
  },
  {
    name: "Pradeep A S",
    role: "Local Guide",
    content: "Greatful to the service helped us survey our land and happy with their followups and service",
    rating: 5,
    date: "6 months ago"
  },
  {
    name: "S. Prakatheeswaran",
    role: "Client",
    content: "Very well knowledge person to solve a land issues. Best experience in his field",
    rating: 5,
    date: "6 months ago"
  },
  {
    name: "Murali",
    role: "Client",
    content: "Thank you for the detailed and accurate survey. Your work was very professional.",
    rating: 5,
    date: "3 months ago"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* 3D Architectural Atmos */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/luxury_commercial_building_finished_1775760519839.png"
          alt="Site Review"
          fill
          unoptimized={true}
          className="object-cover opacity-10 brightness-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h4 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-accent font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mb-8 p-3 glass-frosted rounded-full border-primary/5 inline-block"
          >
            Client Intelligence Sync
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-fluid-md font-black text-primary uppercase tracking-tighter leading-[0.85]"
          >
            Sectors <span className="text-accent">Recognized</span> <br/> Structural Validation
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ 
                y: i % 2 === 0 ? [0, 15, 0] : [0, -15, 0]
              }}
              transition={{ 
                duration: 10 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.2
              }}
              viewport={{ once: true }}
              className="glass-frosted p-10 rounded-[3.5rem] border-primary/5 relative group hover:border-accent/40 transition-all shadow-2xl flex flex-col"
            >
              <Quote className="absolute top-10 right-10 text-accent/10 w-16 h-16 rotate-12 group-hover:text-accent/30 transition-all duration-700" />
              
              <div className="flex space-x-2 mb-10">
                {[...Array(testimonial.rating)].map((_, starI) => (
                  <Star key={starI} size={16} className="fill-accent text-accent drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
                ))}
              </div>

              <p className="text-primary/80 font-black tracking-tighter text-lg leading-relaxed mb-12 italic uppercase">
                "{testimonial.content}"
              </p>

              <div className="mt-auto pt-8 border-t border-primary/10 flex items-center space-x-6">
                <div className="w-14 h-14 glass-frosted border-accent/20 rounded-2xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <Image 
                    src="/images/kcs-logo-without-bg.png" 
                    alt="KCS Logo" 
                    width={40} 
                    height={40} 
                    className="object-contain brightness-125"
                  />
                </div>
                <div>
                  <h4 className="text-primary font-black uppercase tracking-[0.2em] text-[10px] leading-tight mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-[8px] font-black text-primary/50 uppercase tracking-[0.4em]">
                    {testimonial.role} • SYNC_{testimonial.date.split(' ')[0]}
                  </p>
                </div>
              </div>

              {/* HUD Badge */}
              <div className="absolute top-8 left-8 p-1 glass-frosted rounded-full border-accent/10 opacity-40 select-none">
                 <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Access Port */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-32 text-center"
        >
           <p className="text-[10px] font-black uppercase tracking-[0.6em] text-primary/40 select-none">
              Trusted by 100+ verified structural entities across tamil nadu
           </p>
        </motion.div>
      </div>
    </section>
  );
}
