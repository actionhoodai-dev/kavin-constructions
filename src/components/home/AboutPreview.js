"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f7fa] to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="italic text-gray-600 font-serif text-sm block mb-6 font-medium">What is KCS</span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 uppercase mb-8 leading-tight">
            PRECISION IN MEASUREMENT, <span className="text-[#FFD700]">EXCELLENCE IN STRUCTURE</span>
          </h2>
          
          <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            KAVIN Construction and Surveyors (Kavin) is a multidisciplinary engineering firm based in Erode, 
            specialized in elite land surveying and precision civil works. Under the leadership of licensed surveyor 
            Er. R. Kavin Kumar, we bridge the gap between architectural vision and technical accuracy.
          </p>
        </motion.div>

        {/* Surveying Instrument Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-lg h-96 md:h-[500px]">
            <Image 
              src="/images/hero_instrument.png" 
              alt="Surveying Instrument"
              fill
              unoptimized={true}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
