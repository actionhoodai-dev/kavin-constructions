"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";

const services = [
  { name: "Land Surveying", href: "/services" },
  { name: "3D Elevation Plan", href: "/services" },
  { name: "Civil Construction", href: "/services" },
  { name: "Vastu Planning", href: "/services" },
  { name: "Residential Construction", href: "/services" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/KAVIN-construction-and-surveyors-100092431394753/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.03 1.764-5.898 5.501-5.898 1.451 0 2.235.147 2.235.147v3.056h-1.639c-1.819 0-2.149.917-2.149 2.309v1.966h3.284l-.503 3.667h-2.781v7.98h3.513a.111.111 0 00.111-.11v-23.47a.111.111 0 00-.111-.11H.111A.111.111 0 000 .11v23.47c0 .061.05.11.111.11h9.02l-.03-.029z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kavin_construction_surveyors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zM12 5.832c-3.407 0-6.168 2.761-6.168 6.168s2.761 6.168 6.168 6.168 6.168-2.761 6.168-6.168-2.761-6.168-6.168-6.168zm0 10.167c-2.209 0-3.999-1.789-3.999-3.999s1.789-3.999 3.999-3.999 3.999 1.789 3.999 3.999-1.789 3.999-3.999 3.999zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];


export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { settings } = useProjectStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden pt-32 pb-16 selection:bg-accent selection:text-primary border-t border-white/5">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="space-y-8">
            <Link href="/" className="flex flex-col group">
              <div className="relative h-16 w-16 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden transition-all group-hover:bg-white/10 mb-6">
                <Image 
                  src="/images/kcs-logo.png" 
                  alt="KCS Logo"
                  fill
                  unoptimized={true}
                  className="object-contain p-2 brightness-200 contrast-150"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none text-white">KAVIN</span>
                <span className="text-[7px] font-black uppercase tracking-[0.4em] text-accent leading-none mt-2">CONSTRUCTIONS & SURVEYORS</span>
              </div>
            </Link>

            <p className="text-white/30 text-xs font-medium leading-relaxed max-w-xs uppercase tracking-widest">
              Elite engineering firm specializing in high-precision surveying and architectural construction.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all rounded-lg" 
                  title={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Active Sectors</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/40 hover:text-white flex items-center group text-[9px] font-black uppercase tracking-[0.2em] transition-all">
                    <span className="w-1.5 h-[1.5px] bg-white/10 group-hover:bg-accent group-hover:w-3 mr-3 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Strategic Hubs</h4>
            <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <MapPin className="text-accent shrink-0 mt-1" size={16} />
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    {settings?.address || "29, A.P.T Road, Veerappan Chatram, Erode – 638004"}
                  </p>
                </div>
                <div className="flex items-start space-x-4 group">
                  <MapPin className="text-accent shrink-0 mt-1" size={16} />
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    Fire Service 106, Gandhiji Rd, Periyar Nagar, Erode – 638001
                  </p>
                </div>
            </div>
          </div>

          {/* Terminals */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Data Terminals</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-accent" size={16} />
                <div className="flex flex-col">
                  <Link href={`tel:+91${settings?.phone?.replace(/\s+/g, '')}`} className="text-white font-black tracking-tighter text-lg hover:text-accent transition-colors">+91 {settings?.phone || "80725 24820"}</Link>
                  <Link href="tel:+919994577514" className="text-white/30 font-bold text-[10px] tracking-widest">+91 99945 77514</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-accent" size={16} />
                <Link href={`mailto:${settings?.email}`} className="text-white/40 font-bold tracking-widest text-[9px] uppercase hover:text-white transition-all">{settings?.email || "kavincivil2@gmail.com"}</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cyber Ribbon */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[7px] text-white/20 font-black uppercase tracking-[0.5em] text-center gap-6">
          <p>© {new Date().getFullYear()} Kavin Constructions & Surveyors. System Protocol v4.2</p>
          <div className="flex items-center space-x-6">
            <span>Precision | Geometry | Structural Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
