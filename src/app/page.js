"use client";

import { Bebas_Neue, Urbanist, Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const urbanist = Urbanist({ weight: ["400", "700", "900"], subsets: ["latin"] });
const oswald = Oswald({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sliderRef = useCallback(node => {
    if (node !== null) {
      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = node;
        setCanScrollLeft(scrollLeft > 20);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
      };
      node.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => node.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full bg-[#f9f8f4] text-black min-h-screen font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">


      {/* Hero Section */}
      <section className="pt-40 pb-10 w-full max-w-[1920px] mx-auto flex flex-col items-center relative overflow-hidden">
        <div className="relative mt-12 md:mt-20 inline-flex flex-col items-center max-w-full">
          <div className="w-fit max-w-full px-4">
            <p className={`${oswald.className} text-sm md:text-[24px] font-medium tracking-tight text-left mb-1 md:mb-2 text-[#111]`}>
              Precision
            </p>
            <h1 className={`${bebas.className} text-[18vw] md:text-[14vw] leading-[0.8] text-[#111] m-0 p-0 tracking-[0.02em]`}>
              LAND SURVEYING
            </h1>
            <p className={`${oswald.className} text-sm md:text-[24px] font-medium tracking-tight text-right mt-1 md:mt-2 text-[#111]`}>
              & Civil Construction
            </p>
          </div>
        </div>

        <div className="relative w-[90%] max-w-[1200px] h-[300px] md:h-[500px] mt-8 md:mt-12 mx-auto rounded-[24px] overflow-hidden shadow-2xl">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/banner%20clip.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

          {/* Background Removed Logo overlay */}
          <div className="absolute top-[220px] left-[40px] w-[56px] h-[60px] z-20">
            <Image src="/images/kcs-logo-without-bg.png" alt="Logo" fill className="object-contain" unoptimized />
          </div>

          <div className="absolute bottom-8 left-10 z-10 w-full max-w-[650px]">
            <p className={`${urbanist.className} text-white text-[18px] md:text-[21px] font-light leading-relaxed mb-6 opacity-95`}>
              Delivering accurate surveying and reliable construction services across Erode and beyond. Licensed Building Surveyor <span className="text-[#ffe400] font-bold">Er. R. Kavin Kumar</span> leading structural excellence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className={`${oswald.className} bg-[#ffe400] text-[#121212] px-6 py-2.5 rounded-full text-[14px] font-bold uppercase hover:bg-yellow-400 transition-all shadow-lg`}>
                EXPLORE SERVICES
              </Link>
              <Link href="/contact" className={`${oswald.className} bg-[#111] text-white px-6 py-2.5 rounded-full text-[14px] font-bold uppercase hover:bg-black transition-all shadow-lg border border-white/10`}>
                GET A QUOTE
              </Link>
            </div>
          </div>

          <div className="absolute bottom-[40px] right-[40px] w-[500px] h-[90px] rounded-[12px] bg-[#a6b835]/50 backdrop-blur-sm border border-white/10 z-10 hidden lg:flex items-center justify-between px-10 shadow-2xl">
            <div className="flex flex-col">
              <p className={`${oswald.className} text-white text-[18px] font-semibold tracking-wide uppercase whitespace-nowrap`}>LICENSED SURVEYOR</p>
              <p className={`${urbanist.className} text-white/90 font-medium text-[15px] mt-1`}>DCE., B.E.</p>
            </div>
            <div className="flex flex-col">
              <p className={`${oswald.className} text-white text-[18px] font-semibold tracking-wide uppercase whitespace-nowrap`}>CORE EXPERTISE</p>
              <p className={`${urbanist.className} text-white/90 font-medium text-[15px] mt-1`}>Surveying</p>
            </div>
            <div className="flex flex-col">
              <p className={`${oswald.className} text-white text-[18px] font-semibold tracking-wide uppercase whitespace-nowrap`}>LOCATION</p>
              <p className={`${urbanist.className} text-white/90 font-medium text-[15px] mt-1`}>Erode, TN</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 w-full max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
          <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">About KCS</h3>
        </div>

        <h2 className={`${oswald.className} text-[32px] md:text-[45px] font-semibold leading-[1.2] md:leading-[70px] text-[#111] max-w-5xl text-justify uppercase`}>
          KAVIN CONSTRUCTION AND SURVEYORS IS AN ERODE-BASED FIRM SPECIALISING IN LAND SURVEYING AND CIVIL WORKS. LED BY <span className="tracking-[-0.05em]">ER. R. KAVIN KUMAR</span>, WE DELIVER PRECISION WITH TRUSTED EXPERTISE.
        </h2>

        <div className="flex flex-wrap gap-12 md:gap-24 mt-12 md:mt-16 pt-6 md:pt-8 mb-4">
          <div>
            <p className={`${oswald.className} text-5xl md:text-6xl font-bold text-[#111]`}>7+</p>
            <p className="text-xs md:text-sm text-gray-600 font-bold mt-2 uppercase tracking-widest">Years of Experience</p>
          </div>
          <div>
            <p className={`${oswald.className} text-5xl md:text-6xl font-bold text-[#111]`}>80+</p>
            <p className="text-xs md:text-sm text-gray-600 font-bold mt-2 uppercase tracking-widest">Projects Completed</p>
          </div>
          <div>
            <p className={`${oswald.className} text-5xl md:text-6xl font-bold text-[#111]`}>53+</p>
            <p className="text-xs md:text-sm text-gray-600 font-bold mt-2 uppercase tracking-widest">Customers Served</p>
          </div>
        </div>
      </section>

      <div className="w-full h-[1.5px] bg-[#111] max-w-6xl mx-auto mb-16 md:mb-24"></div>

      {/* Why KCS Section */}
      <section className="py-16 md:py-24 w-full max-w-[1920px] mx-auto px-4 flex justify-center">
        <div className="flex flex-col items-center text-center w-full max-w-[1400px]">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.7l5 4.5v7.8h-2v-6H9v6H7v-7.8l5-4.5z" />
            </svg>
            <h3 className="text-sm md:text-[16px] font-bold text-[#111] tracking-wide">Why KCS</h3>
          </div>
          <p className={`${urbanist.className} max-w-[1000px] text-gray-800 text-[16px] md:text-[18px] font-medium leading-[1.6] text-center`}>
            Choose KAVIN Construction and Surveyors for precise land insights, dependable execution, and uncompromising quality. We combine advanced surveying expertise with refined construction standards to ensure every project begins right and finishes strong, delivering confidence, clarity, and lasting value.
          </p>

          <div className="mt-12 md:mt-16 w-full max-w-[1009px] mx-auto h-[400px] md:h-[796px] relative flex justify-center">
            <Image
              src="/images/why-kcs-after.png"
              alt="Why KCS Surveying"
              fill
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Projects Title Section */}
      <section className="pt-12 md:pt-16 pb-4 md:pb-8 w-full max-w-[1920px] mx-auto px-4 flex justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 21h16V7H4v14zm2-12h2v2H6V9zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM2 21h2v2H2v-2zm18 0h2v2h-2v-2zM10 2v3h4V2h-4z" />
            </svg>
            <h3 className="text-sm md:text-[15px] font-bold text-[#111]">Project Collections</h3>
          </div>
          <h2 className={`${oswald.className} text-[26px] md:text-[36px] font-bold leading-[1.3] md:leading-[1.4] text-[#111] max-w-3xl uppercase tracking-tight`}>
            WE BRING LAND AND STRUCTURES TO LIFE <br className="hidden md:block" /> THROUGH PRECISION AND CRAFT.
          </h2>
        </div>
      </section>

      <div className="w-full h-[1.5px] bg-[#111] max-w-6xl mx-auto mt-6 md:mt-8 mb-8 md:mb-12"></div>

      {/* Projects Section */}
      <section className="py-16 md:py-24 w-full bg-gradient-to-b from-transparent to-[#f0ece1]/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10 md:mb-12">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 21h16V7H4v14zm2-12h2v2H6V9zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM2 21h2v2H2v-2zm18 0h2v2h-2v-2zM10 2v3h4V2h-4z" />
              </svg>
              <h3 className={`${oswald.className} text-[20px] md:text-[24px] font-bold text-[#111]`}>Premium Projects</h3>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => document.getElementById('project-slider').scrollBy({ left: -400, behavior: 'smooth' })}
                disabled={!canScrollLeft}
                className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all ${canScrollLeft ? "bg-[#111] text-white hover:bg-black" : "bg-gray-200/50 text-gray-400 cursor-not-allowed"}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                onClick={() => document.getElementById('project-slider').scrollBy({ left: 400, behavior: 'smooth' })}
                disabled={!canScrollRight}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollRight ? "bg-[#111] text-white hover:bg-black" : "bg-gray-200/50 text-gray-400 cursor-not-allowed"}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>

          <div 
            id="project-slider" 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          >
            {[
              { id: 1, img: "/images/surveying_action.png" },
              { id: 2, img: "/images/construction_skeleton.png" },
              { id: 3, img: "/images/blueprint_sketch.png" },
              { id: 4, img: "/images/surveying_action.png" },
            ].map((proj) => (
              <div key={proj.id} className="min-w-[300px] md:min-w-[400px] relative aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-lg snap-start">
                <Image src={proj.img} fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt="Project" />
                <div className="absolute top-6 right-6 bg-[#111] text-[#facc15] px-3 py-1.5 rounded-full flex items-center gap-2 z-10 shadow-md">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#facc15]">
                    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V18H19V19Z" />
                  </svg>
                  <span className="text-[10px] font-black uppercase tracking-widest">Premium</span>
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/projects" className={`${oswald.className} bg-[#ffe400] text-[#121212] px-12 py-4 rounded-full text-lg md:text-[20px] font-bold leading-none uppercase hover:bg-yellow-400 transition-all shadow-lg`}>
              EXPLORE OUR PROJECTS
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full h-[1.5px] bg-[#111] max-w-6xl mx-auto my-12 md:my-16"></div>

      {/* Testimonials */}
      <TestimonialSlider />

      <div className="w-full h-[1.5px] bg-[#111] max-w-6xl mx-auto my-12 md:my-16"></div>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 w-full max-w-[1200px] mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          {/* Left Form */}
          <div className="w-full lg:w-[45%] relative rounded-[2.5rem] overflow-hidden p-8 md:p-12 shadow-2xl bg-[#f4d17f]">
            {/* Background Image Overlay with Opacity */}
            <div className="absolute inset-0 z-0 opacity-40">
              <Image src="/images/contact-bg.png" alt="Building Contact Background" fill className="object-cover" unoptimized />
            </div>

            <h3 className={`${oswald.className} text-4xl md:text-5xl text-[#111] font-bold mb-10 relative z-10 text-center uppercase tracking-tight`}>CONTACT US</h3>
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className={`${urbanist.className} w-full p-4.5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-black outline-none font-medium placeholder-gray-400 shadow-sm text-[15px]`} />
              <input type="text" placeholder="Contact No" className={`${urbanist.className} w-full p-4.5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-black outline-none font-medium placeholder-gray-400 shadow-sm text-[15px]`} />
              <input type="email" placeholder="Email address" className={`${urbanist.className} w-full p-4.5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-black outline-none font-medium placeholder-gray-400 shadow-sm text-[15px]`} />
              <textarea placeholder="Describe your need here" className={`${urbanist.className} w-full p-4.5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-black outline-none h-44 font-medium resize-none placeholder-gray-400 shadow-sm text-[15px]`}></textarea>
              <button className={`${oswald.className} w-full bg-[#111] text-white py-4.5 rounded-full font-bold uppercase tracking-wider text-[17px] mt-6 hover:bg-black transition-all shadow-xl`}>
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <h3 className={`${oswald.className} text-4xl md:text-[54px] font-bold text-[#111] mb-6 leading-[1] text-center lg:text-left uppercase`}>LET'S DISCUSS YOUR PROJECT</h3>
            <p className={`${urbanist.className} text-gray-700 text-lg md:text-[18px] mb-12 max-w-xl font-medium text-center lg:text-left leading-relaxed`}>
              Get in touch with KAVIN Construction and Surveyors for expert land surveying and reliable construction solutions tailored to your needs.
            </p>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* For Queries Block */}
                <div className="bg-[#fff9eb] p-8 rounded-[2rem] shadow-sm border border-orange-50/50">
                  <div className={`${oswald.className} bg-[#ffe400] text-[#111] px-5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-widest mb-6 inline-block`}>FOR QUERIES</div>
                  <div className={`${urbanist.className} space-y-1`}>
                    <p className="font-bold text-[20px] text-[#111]">+91 8072524820</p>
                    <p className="font-bold text-[20px] text-[#111]">+91 9994577514</p>
                  </div>
                </div>
                {/* For Email Block */}
                <div className="bg-[#fff9eb] p-8 rounded-[2rem] shadow-sm border border-orange-50/50">
                  <div className={`${oswald.className} bg-[#ffe400] text-[#111] px-5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-widest mb-6 inline-block`}>FOR EMAIL</div>
                  <p className={`${urbanist.className} font-bold text-[20px] text-[#111]`}>kavincivil12@gmail.com</p>
                </div>
              </div>
              {/* Primary Location Block */}
              <div className="bg-[#fff9eb] p-8 rounded-[2rem] shadow-sm border border-orange-50/50">
                <div className={`${oswald.className} bg-[#ffe400] text-[#111] px-5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-widest mb-6 inline-block`}>PRIMARY LOCATION</div>
                <p className={`${urbanist.className} font-bold text-[18px] md:text-[20px] text-[#111] leading-snug`}>
                  Fire Service 106, Gandhiji Rd, Periyar Nagar, Erode, Tamil Nadu – 638001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        className="relative overflow-hidden border-y border-black mt-12"
        style={{
          background: 'linear-gradient(90deg, #E9B880 0%, #FDFCFB 100%)',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          height: '320px'
        }}
      >
        {/* Left Image - Positioned with aggressive -150px offset to force edge contact */}
        <div className="absolute -left-[250px] bottom-0 w-[600px] h-[350px] hidden lg:block z-10 pointer-events-none">
          <Image
            src="/images/hand-holding-house.png"
            alt="Hand Holding House"
            fill
            className="object-contain object-left scale-x-[-1]"
            unoptimized
          />
        </div>

        <div className="w-full max-w-[1920px] mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center">
          {/* Center Content */}
          <div className="w-full text-center flex flex-col items-center justify-center h-full relative z-20">
            <h2 className={`${oswald.className} text-3xl md:text-[42px] font-bold text-[#111] mb-2 tracking-tight uppercase`}>DO YOU HAVE A PROJECT TO DISCUSS?</h2>
            <p className={`${urbanist.className} text-gray-700 font-medium text-[17px] md:text-[19px] mb-8 max-w-xl mx-auto leading-relaxed`}>Let's turn your ideas into reality with expert surveying and construction solutions.</p>
            <Link href="/contact" className={`${oswald.className} bg-[#ffe400] text-[#121212] px-14 py-4.5 rounded-full text-lg md:text-[22px] font-bold leading-none uppercase hover:bg-black hover:text-white transition-all shadow-xl`}>
              CONTACT US
            </Link>
          </div>

          {/* Right Play Reel */}
          <div className="absolute right-0 md:right-[150px] top-1/2 -translate-y-1/2 flex items-center justify-center hidden lg:flex z-20">
            <div className="w-36 h-36 relative flex items-center justify-center group cursor-pointer">
              {/* Spinning Text */}
              <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[12px] font-bold uppercase tracking-[0.25em]">
                  <path id="curveReel" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text><textPath href="#curveReel" startOffset="0" className="fill-black">PLAY SHOW REEL • PLAY SHOW REEL • </textPath></text>
                </svg>
              </div>
              {/* Play Triangle */}
              <div className="w-5 h-5 ml-1 text-black z-10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full group-hover:scale-110 transition-transform"><path d="M5 3l14 9-14 9V3z" /></svg>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    name: "RAMESH KUMAR",
    location: "ERODE",
    quote: "Kavin team handled our land survey with excellent accuracy and professionalism. Their communication was smooth throughout, and completed on schedule, giving us complete confidence in our project.",
    image: "/images/client-1.png"
  },
  {
    name: "SURESH RAINA",
    location: "SALEM",
    quote: "Outstanding service. The structural report provided by Er. Kavin was extremely detailed. It helped us secure our building permits much faster than expected. Highly recommend their surveying expertise.",
    image: "/images/client-2.png"
  },
  {
    name: "ANAND KRISHNAN",
    location: "TIRUPUR",
    quote: "Reliable and precise. We've used KCS for multiple industrial projects across Erode. Their ability to handle complex terrain measurements with advanced equipment is unmatched in this region.",
    image: "/images/client-3.png"
  },
  {
    name: "PRAKASH RAJ",
    location: "COIMBATORE",
    quote: "Professionalism at its best. From the initial site visit to the final layout plan, everything was transparent. The team is knowledgeable and very approachable for any civil engineering queries.",
    image: "/images/client-4.png"
  }
];

function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const getVisibleIndices = () => {
    const prevIdx = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const nextIdx = (activeIndex + 1) % testimonials.length;
    return [prevIdx, activeIndex, nextIdx];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="py-16 md:py-24 w-full max-w-7xl mx-auto px-4">

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 21h16V7H4v14zm2-12h2v2H6V9zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM2 21h2v2H2v-2zm18 0h2v2h-2v-2zM10 2v3h4V2h-4z" />
          </svg>
          <h3 className={`${urbanist.className} text-[28px] font-black text-[#111] leading-[40px] tracking-normal`}>What Our Clients Say</h3>
        </div>
        <h2 className={`${oswald.className} text-[26px] md:text-[36px] font-bold leading-[1.3] md:leading-[1.4] text-[#111] max-w-4xl uppercase tracking-tight`}>
          TRUSTED ACROSS TAMIL NADU—SEE WHAT CLIENTS SAY ABOUT <br className="hidden md:block" /> KAVIN CONSTRUCTION AND SURVEYORS.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center min-h-[500px]">
        {/* Left Photo Stack */}
        <div className="w-full md:w-[25%] flex flex-col gap-6 relative items-center justify-center h-[500px]">
          <AnimatePresence mode="popLayout">
            {visibleIndices.map((idx, i) => {
              const isCenter = i === 1;
              return (
                <motion.div
                  key={`${idx}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: isCenter ? 1.15 : 0.85,
                    filter: isCenter ? "grayscale(0)" : "grayscale(1)"
                  }}
                  transition={{ duration: 0.5, type: "spring", damping: 15 }}
                  className={`relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden ${isCenter ? "border-[3px] border-[#ffe400] z-20 shadow-2xl" : "z-10 opacity-60 shadow-lg"} transition-all`}
                >
                  <Image
                    src={testimonials[idx].image}
                    fill
                    className="object-cover object-top"
                    alt={testimonials[idx].name}
                    unoptimized
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Testimonial Card */}
        <div className="w-full md:w-[75%] bg-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-100 relative min-h-[480px] flex flex-col justify-center">
          {/* Quote Vector Background */}
          <div className="absolute top-8 right-12 w-40 h-40 opacity-[0.6] select-none pointer-events-none">
            <Image src="/images/quote-vector.png" alt="Quote" fill className="object-contain" unoptimized />
          </div>

          <div className="flex text-[#ffe400] text-4xl mb-8 gap-1">
            {"★★★★★".split("").map((s, i) => <span key={i} className="drop-shadow-sm">{s}</span>)}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <p className={`${urbanist.className} text-xl md:text-[26px] text-[#333] font-normal leading-[1.6] mb-12 text-justify`}>
                {testimonials[activeIndex].quote}
              </p>

              {/* Round Dot Separator */}
              <div className="relative w-full h-[1.5px] bg-[#111] mb-10 flex items-center justify-between">
                <div className="w-2 h-2 bg-[#111] rounded-full transform -translate-x-1/2"></div>
                <div className="w-2 h-2 bg-[#111] rounded-full transform translate-x-1/2"></div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-4">
                  <h4 className={`${oswald.className} text-2xl md:text-[34px] font-bold text-[#111] uppercase tracking-tight`}>
                    {testimonials[activeIndex].name} — {testimonials[activeIndex].location}
                  </h4>
                  <div className={`${oswald.className} bg-[#ffe400] text-[#111] px-6 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-widest w-fit shadow-sm`}>
                    TEXTILE BUSINESS
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full bg-gray-200/80 flex items-center justify-center hover:bg-gray-300 transition-all shadow-md"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center hover:bg-black transition-all shadow-md"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
