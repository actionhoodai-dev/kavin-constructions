"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "DGPS Surveying", "3D Elevation", "Vasthu Planning", "Building Estimation",
  "Licensed Surveyor", "Structural Integrity", "Elite Civil Construction",
  "Blueprint Mastery", "Historical Deed Verification", "Boundary Resolution"
];

export default function KineticTicker() {
  return (
    <div className="bg-primary py-4 overflow-hidden border-y border-white/5 relative z-40 bg-grain">
      <div className="flex animate-ticker">
        {/* First Set */}
        {TICKER_ITEMS.map((item, i) => (
          <div key={i} className="flex items-center mx-10 text-white/40 uppercase font-black tracking-[0.5em] text-[10px] whitespace-nowrap">
            <span className="w-2 h-2 bg-accent rounded-full mr-6 opacity-40 shadow-[0_0_10px_#FBBF24]" />
            {item}
          </div>
        ))}
        {/* Duplicate Set for infinite effect */}
        {TICKER_ITEMS.map((item, i) => (
          <div key={`dup-${i}`} className="flex items-center mx-10 text-white/40 uppercase font-black tracking-[0.5em] text-[10px] whitespace-nowrap">
            <span className="w-2 h-2 bg-accent rounded-full mr-6 opacity-40 shadow-[0_0_10px_#FBBF24]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
