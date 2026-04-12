"use client";

import GlassHero from "@/components/home/GlassHero";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import StatsSection from "@/components/home/StatsSection";
import ContactBanner from "@/components/home/ContactBanner";
import KineticTicker from "@/components/ui/KineticTicker";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-hidden selection:bg-accent selection:text-primary">
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left shadow-[0_0_15px_#FBBF24]"
        style={{ scaleX }}
      />
      
      <GlassHero />
      <KineticTicker />
      
      <section className="relative z-30 bg-grain">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1 }}
        >
          <ServicesPreview />
          <AboutPreview />
          <StatsSection />
          <FeaturedProjects />
          <Testimonials />
          <ContactBanner />
        </motion.div>
      </section>

      {/* Parallax Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-[20%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
