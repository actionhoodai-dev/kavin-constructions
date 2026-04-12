"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone, Clock, Globe } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useProjectStore } from "@/store/useProjectStore";
import { cn } from "@/lib/utils";

import Image from "next/image";

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const { settings } = useProjectStore();

  const onSubmit = async (data) => {
    console.log("Transmission Data Initialized:", data);
    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const errorClass = "text-[8px] font-black uppercase tracking-[0.3em] text-red-500 mt-3 ml-4 animate-pulse";

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 overflow-hidden relative selection:bg-accent selection:text-primary">
      {/* 3D DGPS Site Map Foundation */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/images/high_tech_surveying.png"
          alt="Site Map DGPS"
          fill
          unoptimized={true}
          className="object-cover opacity-10 brightness-50 mix-blend-overlay scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Kinetic Header Section */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-6 mb-8"
          >
            <div className="w-20 h-[1px] bg-accent" />
            <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">Direct Professional Access</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fluid-lg font-black tracking-tighter text-white uppercase leading-[0.85] mb-12"
          >
             Connect To <br/><span className="text-accent">Expert</span> Support
          </motion.h1>
          <motion.p 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/40 max-w-2xl text-xl font-black uppercase tracking-tighter leading-relaxed italic"
          >
             Precise communication is the foundation of every successful engineering project. Reach out for consultations or architectural data.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          {/* Form Side - Glass Pulse Card */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ 
               opacity: 1, 
               y: [0, 15, 0] 
             }}
             transition={{ 
               duration: 10,
               repeat: Infinity,
               ease: "easeInOut"
             }}
             className="glass-frosted p-12 md:p-20 rounded-[5rem] border-white/5 relative group shadow-[0_50px_150px_-30px_rgba(0,0,0,0.5)]"
          >
             <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-accent/30 opacity-50" />
             <div className="absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-accent/30 opacity-50" />
             
             <AnimatePresence>
               {isSuccess && (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   className="absolute inset-0 z-[100] glass-frosted m-12 rounded-[4rem] border-accent/40 flex flex-col items-center justify-center text-center p-12 backdrop-blur-3xl"
                 >
                    <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(251,191,36,0.5)]">
                       <Send className="text-primary text-4xl" />
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Transmission Success</h3>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">Structural specifications received. Synchronization in progress.</p>
                 </motion.div>
               )}
             </AnimatePresence>

             <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-12 flex items-center">
                Send Precision Request
                <div className="w-12 h-12 glass-frosted rounded-full ml-6 flex items-center justify-center border-accent/20">
                   <Send size={18} className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
             </h2>

             <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 focus-within:z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60 ml-4">Full Identity</label>
                      <div className="relative">
                         <input 
                            {...register("name", { 
                               required: "Identity is mandatory",
                               minLength: { value: 3, message: "Identity too short" }
                            })}
                            className={cn(
                                "w-full glass-frosted border-white/5 py-5 px-8 rounded-3xl text-white font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all placeholder:text-white/20",
                                errors.name && "border-red-500/50 bg-red-500/5"
                            )}
                            placeholder="Engineering Representative"
                         />
                         {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                      </div>
                   </div>

                   <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60 ml-4">Terminal Phone</label>
                      <div className="relative">
                         <input 
                            {...register("phone", { 
                               required: "Communication channel required",
                               pattern: {
                                 value: /^[0-9]{10}$/,
                                 message: "Invalid 10-digit sequence"
                               }
                            })}
                            className={cn(
                                "w-full glass-frosted border-white/5 py-5 px-8 rounded-3xl text-white font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all placeholder:text-white/20",
                                errors.phone && "border-red-500/50 bg-red-500/5"
                            )}
                            placeholder="10-Digit Terminal Number"
                         />
                         {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                      </div>
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60 ml-4">Cloud Email Access</label>
                   <div className="relative">
                      <input 
                         {...register("email", { 
                            required: "Neural link required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid data protocol address"
                            }
                         })}
                         type="email"
                         className={cn(
                             "w-full glass-frosted border-white/5 py-5 px-8 rounded-3xl text-white font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all placeholder:text-white/20",
                             errors.email && "border-red-500/50 bg-red-500/5"
                         )}
                         placeholder="professional@structural-core.com"
                      />
                      {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60 ml-4">Structural Specification</label>
                   <div className="relative">
                      <textarea 
                         {...register("message", { 
                            required: "Specifications required",
                            minLength: { value: 10, message: "Provide more technical detail" }
                         })}
                         className={cn(
                             "w-full glass-frosted border-white/5 py-6 px-8 rounded-[2rem] text-white font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all min-h-[180px] placeholder:text-white/20",
                             errors.message && "border-red-500/50 bg-red-500/5"
                         )}
                         placeholder="Describe your architectural or surveying requirement..."
                      />
                      {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                   </div>
                </div>

                <button 
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full glass-frosted border-accent/20 text-accent hover:bg-accent hover:text-primary py-6 px-10 rounded-full text-xs font-black uppercase tracking-[0.5em] transition-all shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                   {isSubmitting ? "TRANSMITTING ENCRYPTED DATA..." : "TRANSMIT SPECIFICATIONS"}
                </button>
             </form>
          </motion.div>

          {/* Info Side - Floating Access Ports */}
          <div className="space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                   className="glass-frosted border-white/5 p-10 rounded-[3rem] space-y-6 flex flex-col items-center text-center shadow-xl group hover:border-accent/40 transition-colors"
                >
                   <div className="w-16 h-16 glass-frosted rounded-2xl flex items-center justify-center border-accent/20 group-hover:rotate-12 transition-transform">
                      <Smartphone className="text-accent" />
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-accent/50">Primary Voice Channels</h4>
                      <p className="text-xl font-black text-white tracking-tighter transition-colors">+91 {settings?.phone || "80725 24820"}</p>
                      <p className="text-sm font-bold text-white/30 tracking-widest">+91 99945 77514</p>
                   </div>
                </motion.div>

                <motion.div 
                   animate={{ y: [0, 10, 0] }}
                   transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                   className="glass-frosted border-white/5 p-10 rounded-[3rem] space-y-6 flex flex-col items-center text-center shadow-xl group hover:border-accent/40 transition-colors"
                >
                   <div className="w-16 h-16 glass-frosted rounded-2xl flex items-center justify-center border-accent/20 group-hover:-rotate-12 transition-transform">
                      <Mail className="text-accent" />
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-accent/50">Data Communication Path</h4>
                      <p className="text-lg font-black text-white tracking-tighter transition-colors">{settings?.email || "kavincivil2@gmail.com"}</p>
                   </div>
                </motion.div>
             </div>

             {/* Locations - Wide Glass Sliders */}
             <div className="space-y-8">
                  {[
                    { label: "Engineering HQ - Chatram", addr: settings?.address || "29, A.P.T Road, Veerappan Chatram (PO), Erode – 638004" },
                    { label: "Secondary Site - Annex", addr: "Fire Service 106, Gandhiji Rd, Periyar Nagar, Erode, TN – 638001" }
                  ].map((loc, i) => (
                    <motion.div 
                       key={i}
                       animate={{ x: i % 2 === 0 ? [0, 5, 0] : [0, -5, 0] }}
                       transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                       className="glass-frosted border-white/5 p-8 rounded-[2.5rem] flex items-center space-x-8 group hover:bg-white/5 transition-all shadow-xl"
                    >
                       <div className="w-16 h-16 glass-frosted rounded-2xl flex items-center justify-center border-accent/20 group-hover:scale-110 transition-transform">
                          <MapPin className="text-accent" />
                       </div>
                       <div className="space-y-1">
                          <h4 className="text-[8px] font-black uppercase tracking-[0.4em] text-accent/40">{loc.label}</h4>
                          <p className="text-white text-lg font-black tracking-tighter leading-tight group-hover:text-accent transition-colors">
                             {loc.addr}
                          </p>
                       </div>
                    </motion.div>
                  ))}
             </div>

             {/* 3D Satellite Projection (Map) */}
             <motion.div 
               animate={{ scale: [1, 1.02, 1] }}
               transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
               className="relative aspect-video glass-frosted rounded-[4rem] border-accent/10 overflow-hidden shadow-2xl group"
             >
                {/* HUD Elements over Map */}
                <div className="absolute top-8 right-8 z-10 glass-frosted p-4 rounded-2xl border-white/10 opacity-60 pointer-events-none flex flex-col items-end">
                   <div className="w-12 h-12 glass-frosted rounded-full border border-accent/30 flex items-center justify-center mb-4 animate-spin-slow">
                      <Globe size={18} className="text-accent" />
                   </div>
                   <div className="text-[8px] font-mono text-white tracking-[0.4em]">SAT_LOCK: ACTIVE</div>
                </div>

                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.0199725689613!2d77.72481387402492!3d11.333250648678332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96fdc947c1361%3A0xf911f0737052b33d!2sKavin%20construction%20and%20surveyors(KCS)!5e0!3m2!1sen!2sin!4v1775587436012!5m2!1sen!2sin" 
                  className="absolute inset-x-0 inset-y-0 w-full h-full border-0 grayscale invert contrast-150 brightness-50 opacity-100 mix-blend-screen group-hover:filter-none transition-all duration-2000"
                  allowFullScreen="" 
                  loading="lazy" 
                ></iframe>
                
                <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none rounded-[4rem]" />
             </motion.div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
