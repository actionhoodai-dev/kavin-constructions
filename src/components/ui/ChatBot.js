"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Cpu, ChevronDown, ArrowRight, Send } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";

const KNOWLEDGE_BASE = [
  {
    category: "Greetings",
    keywords: ["hi", "hello", "hey", "greetings", "good morning", "good evening", "online", "there"],
    answer: "Hello! I'm live and ready to assist you. Whether you need an elite DGPS survey or a luxury home construction contact, I have the data. What can I help you structuralize today?"
  },
  {
    category: "Identity",
    keywords: ["who", "what", "company", "kcs", "kavin", "about", "firm", "owner", "engineer", "services", "offer", "provide", "do", "work"],
    answer: "Kavin Construction and Surveyors (KCS) is a premier engineering firm in Erode specializing in high-precision land surveying (DGPS/ETS) and luxury civil construction. We offer end-to-end solutions for layouts, 3D elevations, and structural works."
  },
  {
    category: "Surveying Technology",
    keywords: ["survey", "dgps", "ets", "gps", "precision", "accuracy", "instrument", "total station", "measurement", "mapping", "land", "plot", "boundary"],
    answer: "We utilize elite-grade DGPS (Differential GPS) and Electronic Total Stations (ETS) to ensure centimeter-level accuracy. our services include boundary fixing, contour mapping, and high-precision topometric surveys for large scale land developments."
  },
  {
    category: "Construction & Design",
    keywords: ["build", "construct", "3d", "elevation", "floor plan", "architecture", "design", "house", "villa", "industrial", "structural"],
    answer: "We provide end-to-end civil construction, from foundational site measurements to hyper-realistic 3D architectural elevations. We specialize in structural integrity and modern aesthetic designs that maximize space and light."
  },
  {
    category: "Vasthu",
    keywords: ["vastu", "vasthu", "orientation", "energy", "direction", "traditional", "plan"],
    answer: "Every floor plan we design is strictly compliant with traditional Vasthu Shastra principles, ensuring that your living or workspace is optimized for positive energy flow and structural harmony."
  },
  {
    category: "Land Disputes",
    keywords: ["dispute", "legal", "boundary", "land issue", "neighbor", "court", "fmb", "deed", "verification", "encroach"],
    answer: "We are specialists in resolving boundary disputes through historical deed verification and Field Measurement Book (FMB) comparisons. Our chief surveyor provides government-standard technical reports for boundary resolution."
  },
  {
    category: "Approvals & Valuation",
    keywords: ["approval", "dtcp", "lpa", "layout", "valuation", "bank", "loan", "official", "certificate"],
    answer: "As licensed surveyors, we provide bank-approved building valuations and facilitate DTCP and LPA layout approvals. We ensure all your technical documentation meets current government and banking standards."
  },
  {
    category: "Coverage Area",
    keywords: ["radius", "scope", "area", "where", "serve", "place", "location", "district", "city", "reach", "cover", "tamil nadu", "distance"],
    answer: "Kavin Construction and Surveyors is headquartered in Erode, but our technical field teams are dispatched across the entire state of **Tamil Nadu**. We frequently execute high-precision projects in Coimbatore, Tirupur, Salem, Karur, and Namakkal districts."
  },
  {
    category: "Contact",
    keywords: ["contact", "call", "phone", "email", "reach", "whatsapp", "talk", "expert"],
    answer: "You can talk to our engineer directly at {PHONE} or email us at {EMAIL}. Alternatively, I can connect you instantly on WhatsApp right now."
  },
  {
    category: "Location",
    keywords: ["address", "office", "location", "where", "place", "city", "erode"],
    answer: "Our corporate office is located at: {ADDRESS}, Erode District, Tamil Nadu. We are open Monday to Saturday, 9:00 AM to 8:00 PM."
  },
  {
    category: "Experience",
    keywords: ["experience", "years", "how long", "projects", "completed", "history"],
    answer: "KCS has a proven track record of 10+ years and over 500+ completed projects in both land surveying and quality construction across the southern region."
  }
];

const CHAT_LOGIC = {
  start: {
    message: "Greetings! I'm your KCS-AI. I have been trained on all technical data of this firm. You can ask me anything about our DGPS surveys, construction standards, or office details. What can I help with?",
    options: [
      { label: "Land Surveying", next: "survey_start" },
      { label: "Construction & 3D", next: "construction_start" },
      { label: "Vasthu & Planning", next: "vasthu_start" },
      { label: "Approvals & Valuation", next: "valuations_start" },
      { label: "Land Issues", next: "disputes_start" },
      { label: "Our Office Address", next: "location" }
    ]
  },
  survey_start: { message: "We utilize DGPS and ETS for centimeter-level accuracy. Boundary fixing, contour mapping, or FMB sketches—which one do you need?", options: [{ label: "DGPS Info", next: "survey_start" }, { label: "Get Quote", isWhatsApp: true, context: "Survey Quote" }] },
  construction_start: { message: "We provide 3D elevations and turnkey construction. Would you like to see our process or talk to an engineer?", options: [{ label: "Our Process", next: "construction_start" }, { label: "Contact Engineer", isWhatsApp: true, context: "Construction Query" }] },
  vasthu_start: { message: "All our plans are Vasthu compliant. We optimize for energy flow and structural durability. Need a signature plan?", options: [{ label: "Discuss Planning", isWhatsApp: true, context: "Vasthu Planning" }] },
  valuations_start: { message: "We provide licensed bank valuations and DTCP/LPA approvals for layouts. Assistance required?", options: [{ label: "Help with Approvals", isWhatsApp: true, context: "Approvals" }] },
  disputes_start: { message: "Legal boundary resolution is our USP. We verify deeds against physical field marks. Analysis needed?", options: [{ label: "Analyze Dispute", isWhatsApp: true, context: "Land Dispute" }] },
  location: { message: "Address: {ADDRESS}\nErode-638004. 9 AM - 8 PM.", options: [{ label: "Open Map", isWhatsApp: true, context: "Map Link" }] },
  fallback: {
    message: "I couldn't find a direct technical log for that, but I can fetch our chief surveyor for you on WhatsApp. Alternatively, feel free to ask about our surveying precision or construction projects.",
    options: [
      { label: "Ask Engineer on WhatsApp", isWhatsApp: true, context: "Technical Inquiry" },
      { label: "Back to Menu", next: "start" }
    ]
  }
};

import { db } from "@/lib/firebase/config";
import { collection, addDoc, query, where, orderBy, getDocs, onSnapshot, serverTimestamp } from "firebase/firestore";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const { settings } = useProjectStore();
  const scrollRef = useRef(null);

  // Neural Connection Initialization
  useEffect(() => {
    let sid = localStorage.getItem("kcs_nexus_sid");
    if (!sid) {
      sid = `nexus-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("kcs_nexus_sid", sid);
    }
    setSessionId(sid);

    // Dynamic Real-time Sync - Optimized to avoid Composite Index requirement
    const q = query(
      collection(db, "chat_history"),
      where("sessionId", "==", sid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const cloudHistory = snapshot.docs
          .map(doc => ({ ...doc.data() }))
          .sort((a, b) => {
            const timeA = a.timestamp?.seconds || 0;
            const timeB = b.timestamp?.seconds || 0;
            return timeA - timeB;
          });
        setHistory(cloudHistory);
      } else {
        // Fallback to start if first-time link
        setHistory([{ type: "bot", ...CHAT_LOGIC.start }]);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isTyping]);

  const saveToCloud = async (messageObj) => {
    if (!sessionId) return;
    try {
      await addDoc(collection(db, "chat_history"), {
        ...messageObj,
        sessionId,
        timestamp: serverTimestamp()
      });
    } catch (e) {
      console.error("Neural Terminal Backup Failure:", e);
    }
  };

  const replaceTags = (msg) => {
    return msg
      .replace("{ADDRESS}", settings?.address || "29, A.P.T Road, Veerappan Chatram (PO), Erode – 638004")
      .replace("{PHONE}", settings?.phone || "80725 24820")
      .replace("{EMAIL}", settings?.email || "kavincivil2@gmail.com");
  };

  const processResponse = async (userMessageText, isCustom = false) => {
    setIsTyping(true);
    
    try {
      const chatHistory = history.slice(-6).map(chat => ({
        type: chat.type,
        message: chat.message
      }));

      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userMessageText,
          history: chatHistory
        }),
      });

      const data = await response.json();

      if (data.message) {
        await saveToCloud({ 
          type: "bot", 
          message: data.message,
          options: [
            { label: "Chat on WhatsApp", isWhatsApp: true, context: "Quick Consulting" },
            { label: "See Main Menu", next: "start" }
          ]
        });
      } else {
        throw new Error(data.error || "Neural link unstable");
      }
    } catch (error) {
      console.warn("Nexus AI Primary Link Offline. Context:", error.message);
      
      setTimeout(async () => {
        let response = null;
        if (isCustom) {
          const tokens = userMessageText.toLowerCase().split(/\s+/);
          let bestEntry = null;
          let highestScore = 0;

          KNOWLEDGE_BASE.forEach(entry => {
            let score = 0;
            entry.keywords.forEach(kw => {
              if (userMessageText.toLowerCase().includes(kw)) score += 2;
              tokens.forEach(t => { if (t === kw) score += 3; });
            });
            if (score > highestScore) {
              highestScore = score;
              bestEntry = entry;
            }
          });

          if (highestScore > 2) {
            response = { 
              message: replaceTags(bestEntry.answer),
              options: [{ label: "Tell me more", isWhatsApp: true, context: bestEntry.category }, { label: "Main Menu", next: "start" }]
            };
          } else {
            response = CHAT_LOGIC.fallback;
          }
        } else {
          const data = CHAT_LOGIC[userMessageText] || CHAT_LOGIC.fallback;
          response = { ...data, message: replaceTags(data.message) };
        }
        await saveToCloud({ type: "bot", ...response });
      }, 1000);
    } finally {
      setIsTyping(false);
    }
  };

  const handleOption = async (option) => {
    if (option.isWhatsApp) {
      const phone = settings?.phone?.replace(/\s+/g, '') || "8072524820";
      window.open(`https://wa.me/91${phone}?text=Hello KCS AI, I need help with ${option.context || option.label}`, '_blank');
      return;
    }
    
    await saveToCloud({ type: "user", message: option.label });
    
    if (option.next === "start") {
       await saveToCloud({ type: "bot", ...CHAT_LOGIC.start });
    } else {
       processResponse(option.label);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessageText = input;
    setInput("");
    
    await saveToCloud({ type: "user", message: userMessageText });
    processResponse(userMessageText, true);
  };

  return (
    <div className="fixed bottom-28 right-8 z-[150] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="w-[320px] md:w-[380px] h-[600px] glass-frosted rounded-[4rem] border-primary/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] mb-8 flex flex-col overflow-hidden pointer-events-auto relative"
          >
            {/* Cinematic Background Lines */}
            <div className="absolute inset-0 bg-blueprint-fine opacity-5 pointer-events-none" />

            <div className="bg-primary/5 border-b border-primary/10 p-8 flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-4 text-primary">
                <div className="bg-accent/10 w-12 h-12 rounded-2xl border border-accent/20 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                  <motion.div
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                     <Cpu size={20} className="text-accent" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] leading-none mb-2 text-primary">KCS Intelligence</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#FBBF24]" />
                    <span className="text-[7px] font-black uppercase tracking-widest text-primary/60">Nexus Local Sync v3.1</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 glass-frosted border-primary/5 rounded-full flex items-center justify-center text-primary/50 hover:text-primary hover:border-primary/20 transition-all hover:scale-110"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide relative z-10">
              {history.map((chat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: chat.type === "bot" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${chat.type === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div className={`max-w-[90%] p-6 rounded-[2.5rem] shadow-xl ${chat.type === "bot" ? "glass-frosted border-primary/5" : "bg-accent/10 border border-accent/20"}`}>
                    <p className={`text-[11px] font-black tracking-tight leading-relaxed uppercase italic ${chat.type === "bot" ? "text-primary/90" : "text-accent"}`}>
                      {chat.message}
                    </p>
                    {chat.type === "bot" && chat.options && (
                      <div className="mt-6 flex flex-col space-y-3">
                        {chat.options.map((opt, i) => (
                          <motion.button 
                            key={i}
                            whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                            onClick={() => handleOption(opt)}
                            className="text-left text-primary/60 text-[9px] font-black uppercase tracking-[0.2em] px-6 py-4 glass-frosted border-primary/5 rounded-full transition-all flex items-center justify-between group"
                          >
                            <span>{opt.label}</span>
                            <ArrowRight size={12} className="text-accent group-hover:translate-x-1 transition-all" />
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass-frosted border-primary/5 px-6 py-3 flex space-x-2 rounded-full">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-8 pb-10 bg-white/40 border-t border-primary/10 group relative z-10">
               <div className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search technical protocol..."
                    className="w-full glass-frosted border-primary/10 p-5 rounded-full text-[10px] text-primary focus:outline-none focus:border-accent/50 transition-all font-black uppercase tracking-widest placeholder:text-primary/40 pr-14 shadow-inner"
                  />
                  <button type="submit" className="absolute right-3 w-10 h-10 glass-frosted border-primary/10 rounded-full flex items-center justify-center text-accent hover:scale-110 active:scale-90 transition-all shadow-xl">
                    <Send size={16} />
                  </button>
               </div>
               <div className="mt-5 flex items-center justify-between px-2">
                  <span className="text-[6px] font-black uppercase tracking-[0.5em] text-primary/15">Neural Sync Status: SECURE</span>
                  <div className="w-2 h-2 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                     <div className="w-0.5 h-0.5 bg-accent rounded-full shadow-[0_0_5px_#FBBF24]" />
                  </div>
               </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="glass-frosted border-primary/10 text-accent w-16 h-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center relative group pointer-events-auto rounded-3xl"
      >
        {/* Kinetic Ring */}
        <div className="absolute inset-0 rounded-3xl border border-accent/20 animate-ping opacity-20" />
        
        <motion.div animate={!isOpen ? { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] } : {}} transition={{ duration: 4, repeat: Infinity }}>
          {isOpen ? <ChevronDown size={28} /> : <Cpu size={28} className="drop-shadow-[0_0_10px_#FBBF24]" />}
        </motion.div>
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent shadow-[0_0_15px_#FBBF24] border border-primary/20"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
