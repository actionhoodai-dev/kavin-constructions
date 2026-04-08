"use client";

import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import StatsSection from "@/components/home/StatsSection";
import ContactBanner from "@/components/home/ContactBanner";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <StatsSection />
      <FeaturedProjects />
      <ContactBanner />
    </div>
  );
}
