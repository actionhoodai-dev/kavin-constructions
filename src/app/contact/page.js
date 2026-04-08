"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone, Clock, Globe } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    // Mock submission
    console.log("Form Data:", data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden relative">
      {/* Background Architectural Overlay */}
      <div className="fixed inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 origin-top-right pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4 mb-4"
          >
            <div className="w-12 h-[2px] bg-accent" />
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-sm">Direct Professional Access</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-tight">
             Connect To <span className="text-accent underline decoration-primary/5">Expert</span> Support
          </h1>
          <p className="text-secondary max-w-2xl text-xl font-medium leading-relaxed mt-8 italic">
             Precise communication is the foundation of every successful engineering project. Reach out for consultations or price quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form Side */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative bg-white border-2 border-gray-100 p-10 md:p-16 shadow-2xl relative group"
          >
             <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-accent transition-all group-hover:scale-125" />
             <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-accent transition-all group-hover:scale-125" />
             <div className="absolute inset-0 bg-blueprint opacity-[0.01] pointer-events-none" />
             
             <h2 className="text-3xl font-black text-primary uppercase tracking-tighter mb-10 border-b border-gray-100 pb-6 flex items-center">
                Send Precision Request
                <Send size={20} className="ml-4 text-accent transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
             </h2>

             <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Full Name */}
                   <div className="relative group/field">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-2 block group-focus-within/field:text-accent transition-colors">Full Professional Name</label>
                      <div className="relative">
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                         <input 
                            {...register("name", { required: true })}
                            className="w-full bg-gray-50 border-2 border-gray-100 py-4 pl-12 pr-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all"
                            placeholder="John Doe"
                         />
                         {errors.name && <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-bold uppercase tracking-widest">Entry Required</span>}
                      </div>
                   </div>

                   {/* Phone Number */}
                   <div className="relative group/field">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-2 block group-focus-within/field:text-accent transition-colors">Contact Phone Number</label>
                      <div className="relative">
                         <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                         <input 
                            {...register("phone", { required: true })}
                            className="w-full bg-gray-50 border-2 border-gray-100 py-4 pl-12 pr-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all"
                            placeholder="+91 XXXXX XXXXX"
                         />
                         {errors.phone && <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-bold uppercase tracking-widest">Entry Required</span>}
                      </div>
                   </div>
                </div>

                {/* Email Address */}
                <div className="relative group/field">
                   <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-2 block group-focus-within/field:text-accent transition-colors">Official Email Address</label>
                   <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                         {...register("email", { required: true })}
                         type="email"
                         className="w-full bg-gray-50 border-2 border-gray-100 py-4 pl-12 pr-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all"
                         placeholder="professional@example.com"
                      />
                      {errors.email && <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-bold uppercase tracking-widest">Valid Entry Required</span>}
                   </div>
                </div>

                {/* Message */}
                <div className="relative group/field">
                   <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-2 block group-focus-within/field:text-accent transition-colors">Structural Detail Requirement</label>
                   <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                      <textarea 
                         {...register("message", { required: true })}
                         className="w-full bg-gray-50 border-2 border-gray-100 py-4 pl-12 pr-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all min-h-[150px]"
                         placeholder="Describe your surveying or construction requirement in detail..."
                      />
                      {errors.message && <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-bold uppercase tracking-widest">Specification Required</span>}
                   </div>
                </div>

                <button 
                   type="submit"
                   disabled={isSubmitting}
                   className={cn(
                     "w-full bg-primary text-white py-6 text-sm font-black uppercase tracking-[0.3em] transition-all relative overflow-hidden group",
                     isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-charcoal shadow-[8px_8px_0px_0px_#FBBF24]"
                   )}
                >
                   {isSubmitting ? "Transmitting Data..." : "Transmit Requirement"}
                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </button>
                
                <AnimatePresence>
                   {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="bg-green-500 text-white text-[10px] font-black uppercase tracking-[0.2em] py-3 px-6 text-center shadow-lg"
                      >
                         Data Transmission Successful. Our Engineering Team Will Respond.
                      </motion.div>
                   )}
                </AnimatePresence>
             </form>
          </motion.div>

          {/* Info Side */}
          <div className="space-y-16">
             {/* Contact Info Modules */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="space-y-4"
                >
                   <div className="w-12 h-12 bg-primary flex items-center justify-center group transform transition-transform hover:rotate-12 cursor-pointer shadow-lg border-2 border-accent">
                      <Smartphone className="text-accent" size={24} />
                   </div>
                   <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Rapid Response Lines</h4>
                   <div className="space-y-1">
                      <p className="text-2xl font-black text-primary tracking-tighter hover:text-accent transition-colors">+91 80725 24820</p>
                      <p className="text-lg font-bold text-gray-400 tracking-tighter">+91 99945 77514</p>
                   </div>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.1 }}
                   className="space-y-4"
                >
                   <div className="w-12 h-12 bg-primary flex items-center justify-center group transform transition-transform hover:-rotate-12 cursor-pointer shadow-lg border-2 border-accent">
                      <Mail className="text-accent" size={24} />
                   </div>
                   <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Official Communication Channel</h4>
                   <p className="text-lg font-black text-primary tracking-tighter hover:text-accent transition-colors">kavincivil2@gmail.com</p>
                </motion.div>
             </div>

             {/* Addresses */}
             <div className="space-y-10 border-t border-gray-100 pt-16">
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start space-x-6 group"
                 >
                    <div className="mt-1 w-12 h-12 bg-primary flex items-center justify-center group-hover:bg-accent transition-all duration-300 border-2 border-accent shadow-lg transform group-hover:rotate-12 group-hover:scale-110">
                       <MapPin className="text-accent group-hover:text-primary transition-colors" size={24} />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px]">Primary HQ - Erode</h4>
                       <p className="text-xl font-black text-primary tracking-tighter leading-tight group-hover:text-accent transition-colors">
                          29, A.P.T Road, Veerappan Chatram (PO),<br />Erode – 638004
                       </p>
                    </div>
                 </motion.div>

                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start space-x-6 group"
                 >
                    <div className="mt-1 w-12 h-12 bg-primary flex items-center justify-center group-hover:bg-accent transition-all duration-300 border-2 border-accent shadow-lg transform group-hover:-rotate-12 group-hover:scale-110">
                       <MapPin className="text-accent group-hover:text-primary transition-colors" size={24} />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px]">Secondary Annex</h4>
                       <p className="text-xl font-black text-primary tracking-tighter leading-tight group-hover:text-accent transition-colors">
                          Fire Service 106, Gandhiji Rd, Periyar Nagar,<br />Erode, Tamil Nadu – 638001
                       </p>
                    </div>
                 </motion.div>

             </div>

             {/* Dynamic Map Embed Placeholder */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 }}
               className="relative aspect-video bg-gray-100 border-2 border-gray-100 overflow-hidden shadow-xl group"
             >
                <div className="absolute inset-0 bg-primary/5 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center flex-col z-20">
                   <Globe size={48} className="text-accent mb-4 animate-spin-slow" />
                   <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Map Engine Active</p>
                </div>
                {/* Real Google Map Embed for KCS */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.0199725689613!2d77.72481387402492!3d11.333250648678332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96fdc947c1361%3A0xf911f0737052b33d!2sKavin%20construction%20and%20surveyors(KCS)!5e0!3m2!1sen!2sin!4v1775587436012!5m2!1sen!2sin" 
                  className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000 opacity-80 hover:opacity-100"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

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
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
