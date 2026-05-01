"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Smartphone, Globe, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useProjectStore } from "@/store/useProjectStore";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Oswald, Urbanist, Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const urbanist = Urbanist({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"] });
const oswald = Oswald({ weight: ["400", "600", "700"], subsets: ["latin"] });

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

  const errorClass = "text-[10px] font-bold uppercase tracking-widest text-red-500 mt-2 ml-4";

  return (
    <div className="w-full bg-[#f9f8f4] text-[#111] min-h-screen font-sans selection:bg-[#ffe400] selection:text-[#111] overflow-x-hidden pt-32 pb-24">
      
      {/* Cinematic Header Section */}
      <section className="py-12 md:py-20 w-full max-w-7xl mx-auto px-4 flex justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 21h16V7H4v14zm2-12h2v2H6V9zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM2 21h2v2H2v-2zm18 0h2v2h-2v-2zM10 2v3h4V2h-4z" />
            </svg>
            <h3 className={`${urbanist.className} text-[15px] font-bold text-[#111] uppercase tracking-widest`}>Direct Professional Access</h3>
          </div>
          <h1 className={`${bebas.className} text-7xl md:text-[10vw] leading-[0.85] text-[#111] m-0 p-0 tracking-[0.02em]`}>
            CONNECT TO <span className="text-[#111] drop-shadow-sm">EXPERT</span> SUPPORT
          </h1>
          <p className={`${urbanist.className} text-lg md:text-xl text-gray-600 font-medium max-w-3xl mt-8 leading-relaxed`}>
            Precise communication is the foundation of every successful engineering project. Reach out for consultations or architectural data.
          </p>
        </div>
      </section>

      <div className="w-full h-[1.5px] bg-[#ffe400] max-w-6xl mx-auto my-12 md:my-16"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {/* Form Side - Clean White Card */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative border border-gray-100 overflow-hidden"
          >
             <AnimatePresence>
               {isSuccess && (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   className="absolute inset-0 z-[100] bg-white rounded-[2.5rem] flex flex-col items-center justify-center text-center p-12"
                 >
                    <div className="w-20 h-20 bg-[#ffe400] rounded-full flex items-center justify-center mb-8 shadow-xl">
                       <CheckCircle className="text-[#111] text-3xl" />
                    </div>
                    <h3 className={`${oswald.className} text-4xl font-bold text-[#111] uppercase tracking-tight mb-4`}>Message Sent</h3>
                    <p className={`${urbanist.className} text-gray-500 font-medium text-lg leading-relaxed`}>
                      Your request has been received. Our engineering team will contact you shortly.
                    </p>
                 </motion.div>
               )}
             </AnimatePresence>
 
             <h2 className={`${oswald.className} text-4xl font-bold text-[#111] uppercase tracking-tight mb-10`}>
                Send Your Inquiry
             </h2>
 
             <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className={`${urbanist.className} text-[13px] font-bold uppercase tracking-widest text-gray-400 ml-2`}>Full Name</label>
                      <input 
                         {...register("name", { required: "Name is required" })}
                         className={cn(
                             "w-full bg-[#f9f8f4] border border-gray-200 py-4 px-6 rounded-2xl text-[#111] font-bold text-[15px] focus:outline-none focus:border-[#ffe400] transition-all placeholder:text-gray-300 shadow-sm",
                             errors.name && "border-red-500"
                         )}
                         placeholder="John Doe"
                      />
                      {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                   </div>
 
                   <div className="space-y-2">
                      <label className={`${urbanist.className} text-[13px] font-bold uppercase tracking-widest text-gray-400 ml-2`}>Phone Number</label>
                      <input 
                         {...register("phone", { required: "Phone is required" })}
                         className={cn(
                             "w-full bg-[#f9f8f4] border border-gray-200 py-4 px-6 rounded-2xl text-[#111] font-bold text-[15px] focus:outline-none focus:border-[#ffe400] transition-all placeholder:text-gray-300 shadow-sm",
                             errors.phone && "border-red-500"
                         )}
                         placeholder="+91 00000 00000"
                      />
                      {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                   </div>
                </div>
 
                <div className="space-y-2">
                   <label className={`${urbanist.className} text-[13px] font-bold uppercase tracking-widest text-gray-400 ml-2`}>Email Address</label>
                   <input 
                      {...register("email", { required: "Email is required" })}
                      type="email"
                      className={cn(
                          "w-full bg-[#f9f8f4] border border-gray-200 py-4 px-6 rounded-2xl text-[#111] font-bold text-[15px] focus:outline-none focus:border-[#ffe400] transition-all placeholder:text-gray-300 shadow-sm",
                          errors.email && "border-red-500"
                      )}
                      placeholder="john@example.com"
                   />
                   {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>
 
                <div className="space-y-2">
                   <label className={`${urbanist.className} text-[13px] font-bold uppercase tracking-widest text-gray-400 ml-2`}>Message</label>
                   <textarea 
                      {...register("message", { required: "Message is required" })}
                      className={cn(
                          "w-full bg-[#f9f8f4] border border-gray-200 py-4 px-6 rounded-2xl text-[#111] font-bold text-[15px] focus:outline-none focus:border-[#ffe400] transition-all min-h-[150px] placeholder:text-gray-300 shadow-sm",
                          errors.message && "border-red-500"
                      )}
                      placeholder="Tell us about your project..."
                   />
                   {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                </div>
 
                <button 
                   type="submit"
                   disabled={isSubmitting}
                   className={`${oswald.className} w-full bg-[#ffe400] text-[#111] hover:bg-[#111] hover:text-white py-5 px-10 rounded-full text-[18px] font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95 disabled:opacity-50`}
                >
                   {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
             </form>
          </motion.div>
 
          {/* Info Side - Light Layout */}
          <div className="flex flex-col space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center text-center space-y-4 group hover:-translate-y-1 transition-transform"
                >
                   <div className="w-16 h-16 bg-[#ffe400] rounded-2xl flex items-center justify-center group-hover:bg-[#ffe400] transition-colors shadow-md">
                      <Smartphone className="text-[#111] group-hover:text-[#111]" />
                   </div>
                   <div className="space-y-1">
                      <h4 className={`${urbanist.className} text-[11px] font-bold uppercase tracking-widest text-gray-400`}>Call Channels</h4>
                      <p className={`${oswald.className} text-xl font-bold text-[#111]`}>+91 {settings?.phone || "98651 58331"}</p>
                      <p className={`${oswald.className} text-sm font-bold text-gray-400`}>+91 76391 58331</p>
                   </div>
                </motion.div>
 
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center text-center space-y-4 group hover:-translate-y-1 transition-transform"
                >
                   <div className="w-16 h-16 bg-[#ffe400] rounded-2xl flex items-center justify-center group-hover:bg-[#ffe400] transition-colors shadow-md">
                      <Mail className="text-[#111] group-hover:text-[#111]" />
                   </div>
                   <div className="space-y-1">
                      <h4 className={`${urbanist.className} text-[11px] font-bold uppercase tracking-widest text-gray-400`}>Email Support</h4>
                      <p className={`${oswald.className} text-lg font-bold text-[#111]`}>{settings?.email || "rkavinkumar1996@gmail.com"}</p>
                   </div>
                </motion.div>
             </div>
 
             {/* Locations */}
             <div className="space-y-6">
                  {[
                    { label: "Engineering HQ", addr: "41A, Valluvarnagar, Manmangalam, Karur, TN - 639006" },
                    { label: "Site Office - Erode", addr: "29, A.P.T Road, Veerappan Chatram (PO), Erode – 638004" }
                  ].map((loc, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex items-center space-x-6 group hover:shadow-xl transition-all shadow-md"
                    >
                       <div className="w-14 h-14 bg-[#f9f8f4] rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-[#ffe400] transition-colors shadow-sm">
                          <MapPin className="text-[#111]" size={24} />
                       </div>
                       <div className="space-y-1">
                          <h4 className={`${urbanist.className} text-[10px] font-bold uppercase tracking-widest text-gray-400`}>{loc.label}</h4>
                          <p className={`${urbanist.className} text-[#111] text-lg font-bold leading-tight`}>
                             {loc.addr}
                          </p>
                       </div>
                    </motion.div>
                  ))}
             </div>
 
             {/* Interactive Map */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative aspect-video bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-2xl group"
             >
                <div className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-gray-200 opacity-80 pointer-events-none flex items-center gap-3">
                   <div className="w-8 h-8 bg-[#ffe400] rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite]">
                      <Globe size={16} className="text-[#111]" />
                   </div>
                   <div className={`${urbanist.className} text-[9px] font-bold text-[#111] tracking-widest`}>GPS_LOCK: STABLE</div>
                </div>
 
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.0199725689613!2d77.72481387402492!3d11.333250648678332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96fdc947c1361%3A0xf911f0737052b33d!2sKavin%20construction%20and%20surveyors(KCS)!5e0!3m2!1sen!2sin!4v1775587436012!5m2!1sen!2sin" 
                  className="absolute inset-0 w-full h-full border-0 transition-all duration-700"
                  allowFullScreen="" 
                  loading="lazy" 
                ></iframe>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
