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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-black uppercase tracking-[0.4em] text-sm mb-4"
          >
            Client Feedback
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter leading-none"
          >
            What Our <span className="text-accent underline decoration-primary/5">Clients Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-8 border-2 border-gray-100 relative group hover:border-accent transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12 rotate-12 group-hover:text-accent/20 transition-colors" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-primary font-bold leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              <div className="mt-auto pt-6 border-t border-gray-200 flex items-center space-x-4">
                <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center p-1 shadow-sm">
                  <Image 
                    src="/images/kcs-logo.png" 
                    alt="KCS Logo" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-primary font-black uppercase tracking-widest text-xs leading-none mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                    {testimonial.role} • {testimonial.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic call to action */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-20 text-center"
        >
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
              Trusted by 100+ satisfied clients across Tamil Nadu
           </p>
        </motion.div>
      </div>
    </section>
  );
}
