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
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-fine opacity-10" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group"
             >
                <div className="mx-auto w-16 h-16 border-2 border-accent/20 border-t-accent flex items-center justify-center mb-6 group-hover:rotate-45 transition-transform duration-500">
                   <stat.icon className="text-accent -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={24} />
                </div>
                <div className="text-4xl md:text-6xl font-black tracking-tighter mb-2 tabular-nums">
                   <Counter value={stat.value} />{stat.suffix}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/70">{stat.label}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
