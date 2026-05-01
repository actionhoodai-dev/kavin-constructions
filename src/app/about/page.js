"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Compass } from "lucide-react";
import { Oswald, Urbanist, Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const urbanist = Urbanist({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"] });
const oswald = Oswald({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function AboutPage() {
  return (
    <div className="w-full bg-[#f9f8f4] text-[#111] min-h-screen font-sans selection:bg-[#ffe400] selection:text-[#111] overflow-x-hidden pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 w-full max-w-7xl mx-auto px-4 flex justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 21h16V7H4v14zm2-12h2v2H6V9zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM2 21h2v2H2v-2zm18 0h2v2h-2v-2zM10 2v3h4V2h-4z" />
            </svg>
            <h3 className={`${urbanist.className} text-[15px] font-bold text-[#111] uppercase tracking-widest`}>Engineering The Future</h3>
          </div>
          <h1 className={`${bebas.className} text-7xl md:text-[10vw] leading-[0.85] text-[#111] m-0 p-0 tracking-[0.02em]`}>
            PRECISION <span className="text-[#ffe400] drop-shadow-sm">ARCHITECTS</span>
          </h1>
          <p className={`${urbanist.className} text-lg md:text-xl text-gray-600 font-medium max-w-3xl mt-8 leading-relaxed`}>
            KAVIN Construction and Surveyors is a multidisciplinary engineering powerhouse committed to technical accuracy and structural excellence across the physical landscape.
          </p>
        </div>
      </section>

      <div className="w-full h-[1.5px] bg-[#111] max-w-6xl mx-auto my-12 md:my-16"></div>

      {/* Story Section */}
      <section className="py-16 w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative aspect-square rounded-[2.5rem] bg-white shadow-2xl flex items-center justify-center p-12 border border-gray-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#f4d17f]/10 z-0"></div>
            <Image 
              src="/images/kcs-logo-without-bg.png" 
              alt="Kavin Logo" 
              fill
              unoptimized
              className="object-contain scale-75 hover:scale-90 transition-transform duration-700 relative z-10 drop-shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <h2 className={`${oswald.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#111] uppercase tracking-tight leading-[1.1]`}>
              Our Legacy Of <br/>
              <span className="bg-[#ffe400] px-2 mt-2 inline-block">Structural Integrity</span>
            </h2>
            <p className={`${urbanist.className} text-lg md:text-xl text-gray-700 leading-[1.8] text-justify`}>
              Established with a vision to redefine the surveying and construction landscape in Tamil Nadu, Kavin has grown under the meticulous leadership of Er. R. Kavin Kumar DCE., B.E. Our firm stands at the intersection of traditional surveying accuracy and modern architectural design.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               {[
                 "Licensed Building Surveyor",
                 "Tamil Nadu Registered Engineer",
                 "Precision GPS Mapping Expert",
                 "Structural Health Monitoring"
                ].map((t, i) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#ffe400] shrink-0"></div>
                    <span className={`${urbanist.className} text-[15px] font-bold text-[#111]`}>{t}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[1.5px] bg-[#111] max-w-6xl mx-auto my-12 md:my-16"></div>

      {/* Founder Section */}
      <section className="py-16 w-full max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-white rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden border border-gray-100"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffe400]/5 rounded-bl-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Image placeholder or empty visual emphasis space */}
            <div className="lg:col-span-5 w-full aspect-[4/5] bg-gray-50 rounded-[2.5rem] overflow-hidden relative border-[4px] border-[#ffe400] shadow-xl">
               <Image 
                 src="/images/engineer_kavin.png" 
                 alt="Er. R. Kavin Kumar" 
                 fill
                 unoptimized
                 className="object-cover object-top hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-6 left-6 bg-[#ffe400] text-[#111] px-5 py-2.5 font-black uppercase tracking-widest text-xs rounded-full shadow-lg">
                 FOUNDER
               </div>
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-8 pl-0 lg:pl-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-1 bg-[#ffe400]"></div>
                <span className={`${urbanist.className} text-[#111] font-bold tracking-widest uppercase text-sm`}>Master Engineer</span>
              </div>
              
              <h2 className={`${oswald.className} text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#111] leading-none`}>
                Er. R. Kavin <span className="text-[#ffe400]">Kumar</span>
              </h2>
              
              <p className={`${urbanist.className} text-xl text-gray-700 leading-relaxed italic border-l-4 border-[#ffe400] pl-6`}>
                "Engineering is the art of organizing design and craft through the lens of mathematical precision. At Kavin, every line we draw is a testament to this philosophy."
              </p>
              
              <div className="pt-6">
                <p className={`${urbanist.className} text-lg text-gray-600 max-w-xl leading-relaxed`}>
                  With extensive licensing and recognition across Tamil Nadu, Kavin brings unmatched authority to both land surveying and large-scale civil construction works.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="w-full h-[1.5px] bg-[#111] max-w-6xl mx-auto my-12 md:my-16"></div>

      {/* Mission Vision Values - Clean Light Theme */}
      <section className="py-16 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Our Mission", text: "To provide the most accurate land surveying and highest quality civil construction services, ensuring every foundation is built on precision and integrity." },
             { title: "Our Vision", text: "To become the leading name in architectural engineering and surveying across Tamil Nadu, recognized for technical excellence and innovative structural solutions." },
             { title: "Our Philosophy", text: "Precision is not just a measurement; it's our promise. We believe in building structures that stand the test of time through rigorous engineering." }
           ].map((v, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-12 rounded-[2.5rem] space-y-6 shadow-xl border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-500"
             >
                <div className="w-16 h-16 bg-[#ffe400] flex items-center justify-center rounded-2xl shadow-md">
                   {i === 0 && <Target className="text-[#111]" size={32} />}
                   {i === 1 && <Eye className="text-[#111]" size={32} />}
                   {i === 2 && <Compass className="text-[#111]" size={32} />}
                </div>
                <h4 className={`${oswald.className} text-3xl font-bold text-[#111] uppercase tracking-tight`}>{v.title}</h4>
                <p className={`${urbanist.className} text-gray-600 font-medium leading-[1.8] text-[17px]`}>{v.text}</p>
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
}
