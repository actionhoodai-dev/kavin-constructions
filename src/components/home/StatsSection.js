"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Ruler, House, Triangle, Award } from "lucide-react";

const stats = [
  { label: "Completed Projects", value: 500, icon: House, suffix: "+" },
  { label: "Precise Surveys", value: 350, icon: Ruler, suffix: "+" },
  { label: "Years Experience", value: 10, icon: Award, suffix: "Yrs+" },
  { label: "Happy Clients", value: 480, icon: Triangle, suffix: "+" },
];

function Counter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const totalSteps = 60 * duration;
      const increment = end / totalSteps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-40 bg-transparent relative overflow-hidden">
      {/* 3D Technical Background Foundations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blueprint-fine opacity-10 pointer-events-none" />
        <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ 
                y: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0]
              }}
              transition={{ 
                duration: 8 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.1
              }}
              viewport={{ once: true }}
              className="glass-frosted p-10 md:p-12 rounded-[4rem] border-primary/5 flex flex-col items-center text-center space-y-8 shadow-2xl relative group hover:border-accent/40 transition-all"
            >
              {/* HUD Element */}
              <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-accent/20 select-none opacity-40" />

              <div className="w-16 h-16 rounded-2xl glass-frosted border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-700">
                <stat.icon className="text-accent group-hover:text-primary transition-colors" size={28} />
              </div>
              
              <div className="space-y-4">
                <div className="text-5xl md:text-7xl font-black text-primary tracking-tighter tabular-nums drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                  <Counter value={stat.value} />{stat.suffix}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/60 group-hover:text-primary/90 transition-colors">{stat.label}</p>
              </div>

              {/* Kinetic Glow Base */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
