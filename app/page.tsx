"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Mail, Sun, Moon, User, Sparkles, FileText, Shapes, Send } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Custom SVG Social Icons
const GithubIcon = ({ className = "", size = 24 }: { className?: string, size?: number }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
const LinkedinIcon = ({ className = "", size = 24 }: { className?: string, size?: number }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const FacebookIcon = ({ className = "", size = 24 }: { className?: string, size?: number }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = ({ className = "", size = 24 }: { className?: string, size?: number }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  // Navigation State Logic
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const { scrollY } = useScroll();

  const [hoveredTop, setHoveredTop] = useState<string | null>(null);
  const [hoveredBottom, setHoveredBottom] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setIsAtTop(latest <= 50);
    if (latest > previous && latest > 50) {
      setIsScrollingDown(true);
    } else if (latest < previous) {
      setIsScrollingDown(false);
    }
  });

  const showTopNav = isAtTop || !isScrollingDown;
  const showBottomNav = !isAtTop && isScrollingDown;

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Theme Variables
  const tBg = isDark ? "bg-[#050505]" : "bg-[#f4f4f4]";
  const tText = isDark ? "text-[#ededed]" : "text-[#111111]";
  const tCard = isDark ? "bg-[#111111]" : "bg-white";
  const tBorder = isDark ? "border-white/10" : "border-black/10";
  const tHoverBorder = isDark ? "md:hover:border-white/30" : "md:hover:border-black/30";
  const tMuted = isDark ? "text-[#888888]" : "text-[#666666]";
  const tInvertBg = isDark ? "bg-white" : "bg-[#111111]";
  const tInvertText = isDark ? "text-black" : "text-white";
  const tGlass = isDark ? "bg-white/5" : "bg-white/60";
  const tWaterdrop = isDark ? "bg-white/15" : "bg-black/10"; 
  const tMobileTap = isDark ? "active:bg-white/20" : "active:bg-black/10"; // iOS style tap flash

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const wordVars = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const topNavItems = ['About', 'Work', 'CV', 'Services', 'Contact'];
  const bottomNavItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Sparkles, label: 'Services' },
    { id: 'cv', icon: FileText, label: 'CV' },
    { id: 'work', icon: Shapes, label: 'Work' },
    { id: 'contact', icon: Send, label: 'Contact' },
  ];

  if (!mounted) return null;

  return (
    <div className={`min-h-screen ${tBg} ${tText} font-sans selection:${tInvertBg} selection:${tInvertText} transition-colors duration-500 relative overflow-x-hidden`}>
      
      {/* BACKGROUND NOISE */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-block; white-space: nowrap; animation: marquee 15s linear infinite; }
      `}} />

      <div className="relative z-10">
        
        {/* 1. TOP NAVBAR (TEXT PILL) */}
        <motion.div 
          initial={false}
          animate={showTopNav ? { y: 0, opacity: 1 } : { y: "-150%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-4 md:top-6 w-full flex justify-center z-50 px-2 md:px-4 pointer-events-none"
        >
          <nav 
            onMouseLeave={() => setHoveredTop(null)} 
            className={`relative pointer-events-auto flex items-center justify-between md:justify-center gap-0 md:gap-1 px-2 md:px-3 py-1.5 md:py-2 ${tGlass} backdrop-blur-xl border ${tBorder} rounded-full shadow-2xl transition-colors duration-500 max-w-[95vw] overflow-hidden`}
          >
            {topNavItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHoveredTop(item)}
                className={`relative px-3 md:px-5 py-2.5 text-[9px] md:text-xs font-black uppercase tracking-widest transition-colors duration-300 rounded-full
                  ${hoveredTop === item ? tText : tMuted} 
                  ${tMobileTap} active:scale-95 md:active:scale-100
                  ${item === 'Services' ? 'hidden md:block' : ''}`}
              >
                {/* DESKTOP ONLY: TRUE iOS FLUID HOVER BUBBLE */}
                {hoveredTop === item && (
                  <motion.div
                    layoutId="top-nav-hover-pill"
                    className={`hidden md:block absolute inset-0 rounded-full ${tWaterdrop}`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            ))}
          </nav>
        </motion.div>

        {/* 2. BOTTOM NAVBAR (ICON PILL) */}
        <motion.div 
          initial={{ y: "150%", opacity: 0 }}
          animate={showBottomNav ? { y: 0, opacity: 1 } : { y: "150%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 md:bottom-10 left-0 w-full flex justify-center z-50 pointer-events-none"
        >
          <nav 
            onMouseLeave={() => setHoveredBottom(null)}
            className={`relative pointer-events-auto flex items-center px-2 md:px-4 py-2 md:py-3 ${tGlass} backdrop-blur-xl border ${tBorder} rounded-full shadow-2xl transition-colors duration-500 max-w-[90vw]`}
          >
            {bottomNavItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onMouseEnter={() => setHoveredBottom(item.id)}
                className={`relative group px-3 md:px-4 py-3 md:py-4 ${tMuted} md:hover:${tText} ${tMobileTap} transition-all duration-300 rounded-full active:scale-90 md:active:scale-100`}
              >
                {/* DESKTOP ONLY: TRUE iOS FLUID HOVER BUBBLE */}
                {hoveredBottom === item.id && (
                  <motion.div
                    layoutId="bottom-nav-hover-pill"
                    className={`hidden md:block absolute inset-0 rounded-full ${tWaterdrop}`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 block transition-transform duration-300">
                  <item.icon size={20} className="md:w-[22px] md:h-[22px]" />
                </span>
                {/* DESKTOP ONLY: TOOLTIP */}
                <span className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#222] text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  {item.label}
                </span>
              </a>
            ))}
            
            <div className={`w-[1px] h-6 ${isDark ? 'bg-white/20' : 'bg-black/20'} transition-colors duration-500 mx-1 md:mx-2`}></div>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setIsDark(!isDark)} 
              onMouseEnter={() => setHoveredBottom('theme')}
              className={`relative group px-3 md:px-4 py-3 md:py-4 ${tMuted} md:hover:${tText} ${tMobileTap} transition-all duration-300 rounded-full active:scale-90 md:active:scale-100`}
            >
              {hoveredBottom === 'theme' && (
                <motion.div
                  layoutId="bottom-nav-hover-pill"
                  className={`hidden md:block absolute inset-0 rounded-full ${tWaterdrop}`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 block transition-transform duration-300">
                {isDark ? <Moon size={20} className="md:w-[22px] md:h-[22px]" /> : <Sun size={20} className="md:w-[22px] md:h-[22px]" />}
              </span>
              <span className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#222] text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg w-max">
                Theme
              </span>
            </button>
          </nav>
        </motion.div>

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-end p-6 md:p-12 pb-32">
          <motion.div initial="hidden" animate="visible" variants={containerVars}>
            <motion.p variants={wordVars} className={`max-w-2xl text-lg md:text-2xl ${tMuted} mb-8 leading-snug`}>
              Nigunthan Prignaselvam — digital marketer and sales professional based in Sri Lanka.
            </motion.p>
            
            <div className="overflow-hidden mb-0 md:mb-2">
              <motion.h1 variants={wordVars} className="text-[15vw] md:text-[11vw] leading-[0.85] font-black uppercase tracking-tighter">
                Digital
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1 variants={wordVars} className="text-[15vw] md:text-[11vw] leading-[0.85] font-black uppercase tracking-tighter">
                Marketer
              </motion.h1>
            </div>
            
            <motion.div variants={wordVars} className="flex flex-wrap gap-3 md:gap-4 mt-6">
              <a href="#contact" className={`inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-4 ${tInvertBg} ${tInvertText} rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs active:scale-95 md:hover:scale-105 transition-transform w-full md:w-auto`}>
                Let's Connect <ArrowUpRight size={18} strokeWidth={3} />
              </a>
              <a href="/resume.pdf" download className={`inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-4 bg-transparent border ${tBorder} ${tMobileTap} rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs md:hover:${tInvertBg} md:hover:${tInvertText} active:scale-95 transition-all w-full md:w-auto mt-2 md:mt-0`}>
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* WHO AM I & PHOTO */}
        <section id="about" className={`p-6 md:p-12 border-t ${tBorder} grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 pt-24 pb-24 transition-colors duration-500`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="order-2 lg:order-1">
            <div className={`w-full h-full min-h-[350px] md:min-h-[600px] rounded-3xl md:rounded-[2rem] overflow-hidden ${tCard} relative transition-colors duration-500`}>
              <img 
                src="/profile.jpg" 
                alt="Nigunthan Prignaselvam" 
                className="absolute inset-0 w-full h-full object-cover grayscale md:hover:grayscale-0 md:hover:scale-105 transition-all duration-700 cursor-pointer"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className={`uppercase tracking-widest text-xs font-bold ${tMuted} mb-6 md:mb-8`}>Who Am I?</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8">
              Sales & Digital<br/>Strategist
            </h3>
            <p className={`text-base md:text-xl ${tMuted} mb-10 md:mb-12 max-w-2xl leading-relaxed`}>
              With over 3 years of experience, I turn business strategies into impactful revenue growth. Currently based in Sri Lanka, I create dynamic campaigns & sleek content that not only look great but also support real marketing goals.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className={`${tCard} border border-transparent ${tHoverBorder} md:hover:-translate-y-2 p-5 md:p-8 rounded-2xl md:rounded-[2rem] flex flex-col justify-between aspect-square transition-all duration-300 shadow-sm md:shadow-lg active:scale-[0.98]`}>
                <h4 className="text-4xl md:text-6xl font-black mb-2 md:mb-4">03+</h4>
                <p className={`text-[10px] md:text-xs uppercase tracking-widest ${tMuted} font-bold`}>Years<br/>Experience</p>
              </div>
              <div className={`${tCard} border border-transparent ${tHoverBorder} md:hover:-translate-y-2 p-5 md:p-8 rounded-2xl md:rounded-[2rem] flex flex-col justify-between aspect-square transition-all duration-300 shadow-sm md:shadow-lg active:scale-[0.98]`}>
                <h4 className="text-4xl md:text-6xl font-black mb-2 md:mb-4">30%</h4>
                <p className={`text-[10px] md:text-xs uppercase tracking-widest ${tMuted} font-bold`}>Revenue<br/>Growth</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className={`p-6 md:p-12 border-t ${tBorder} pt-24 pb-24 transition-colors duration-500`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className={`uppercase tracking-widest text-xs font-bold ${tMuted} mb-8 md:mb-12 text-center`}>Services & Expertise</h2>
            <h3 className="text-3xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12 md:mb-16 text-center max-w-4xl mx-auto md:hover:scale-[1.02] transition-transform duration-500">
              Everything needed to scale your brand.
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <span key={index} className={`px-5 py-3 md:px-8 md:py-6 ${tCard} border border-transparent ${tHoverBorder} rounded-full text-xs md:text-lg font-black uppercase tracking-widest md:hover:-translate-y-2 md:hover:shadow-xl hover:text-blue-500 transition-all duration-300 active:scale-95 cursor-default`}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FEATURED PROJECTS (WORK) */}
        <section id="work" className={`p-6 md:p-12 border-t ${tBorder} grid lg:grid-cols-[1fr_3fr] gap-10 lg:gap-24 pt-24 pb-24 transition-colors duration-500`}>
          <div>
            <h2 className={`uppercase tracking-widest text-xs font-bold ${tMuted} lg:sticky top-32`}>Featured Pages</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {managedPages.map((page, index) => (
              <motion.a 
                href={page.link} 
                target="_blank" 
                rel="noopener noreferrer"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeIn} 
                key={index} 
                className={`group relative ${tCard} border border-transparent ${tHoverBorder} md:hover:-translate-y-3 p-6 md:p-12 rounded-3xl md:rounded-[2.5rem] flex flex-col justify-between min-h-[350px] md:min-h-[450px] transition-all duration-500 shadow-sm md:shadow-lg active:scale-[0.98] overflow-hidden`}
              >
                <div className="mb-8 md:mb-12 relative z-20">
                  <span className={`uppercase tracking-widest text-[10px] md:text-xs font-bold ${tMuted} block mb-6 md:mb-8 md:group-hover:text-blue-500 transition-colors`}>{page.platforms}</span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-[0.9]">{page.name}</h3>
                  <p className={`${tMuted} text-sm md:text-lg leading-relaxed md:group-hover:${tText} transition-colors duration-300`}>{page.desc}</p>
                </div>
                <div className="relative z-20 mt-auto">
                  <div className={`inline-flex items-center gap-2 md:gap-3 px-5 md:px-6 py-3 ${tInvertBg} ${tInvertText} rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs md:group-hover:scale-105 transition-transform w-max`}>
                    View Page <ArrowUpRight size={16} strokeWidth={3} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* SCROLLING RESUME BANNER */}
        <a href="/resume.pdf" download className={`block border-y ${tBorder} py-8 md:py-20 ${tInvertBg} ${tInvertText} overflow-hidden active:opacity-50 md:hover:opacity-80 transition-opacity cursor-pointer`}>
          <div className="animate-marquee whitespace-nowrap flex items-center">
            <h2 className="text-5xl md:text-[10vw] font-black uppercase tracking-tighter leading-none inline-block">
              DOWNLOAD • RESUME • DOWNLOAD • RESUME • DOWNLOAD • RESUME • DOWNLOAD • RESUME •&nbsp;
            </h2>
          </div>
        </a>

        {/* CURRICULUM VITAE */}
        <section id="cv" className={`p-6 md:p-12 border-t ${tBorder} grid lg:grid-cols-[1fr_3fr] gap-10 lg:gap-24 pt-24 pb-24 transition-colors duration-500`}>
          <div>
            <h2 className={`uppercase tracking-widest text-xs font-bold ${tMuted} lg:sticky top-32`}>Curriculum Vitae</h2>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
            
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 md:mb-12">Professional History</h3>
            <div className={`flex flex-col gap-8 md:gap-12 border-b ${tBorder} pb-12 md:pb-16`}>
              {experiences.map((exp, index) => (
                <div key={index} className="group grid md:grid-cols-[1fr_2fr] gap-2 md:gap-8 md:hover:translate-x-4 transition-transform duration-300">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold uppercase md:group-hover:text-blue-500 transition-colors">{exp.role}</h4>
                    <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${tMuted} mt-1 md:mt-2`}>{exp.date}</p>
                  </div>
                  <div>
                    <h5 className="text-base md:text-lg font-bold mb-2 md:mb-4 uppercase tracking-wide mt-2 md:mt-0">{exp.company}</h5>
                    <p className={`${tMuted} md:group-hover:${tText} leading-relaxed text-sm md:text-lg transition-colors duration-300`}>{exp.points}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-12 md:mt-16 mb-8 md:mb-12">Education</h3>
            <div className="flex flex-col gap-6 md:gap-8">
              {education.map((edu, index) => (
                <div key={index} className="group grid md:grid-cols-[1fr_2fr] gap-1 md:gap-4 items-start md:items-center md:hover:translate-x-4 transition-transform duration-300">
                  <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${tMuted}`}>{edu.date}</p>
                  <h4 className="text-sm md:text-lg font-bold uppercase md:group-hover:text-blue-500 transition-colors">{edu.degree} <br className="md:hidden" /><span className={`text-xs md:text-lg ${tMuted}`}>— {edu.school}</span></h4>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className={`p-6 md:p-12 border-t ${tBorder} pt-24 pb-48 md:pb-56 transition-colors duration-500`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mb-16 md:mb-24">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8">
              Let's Connect
            </h2>
            <p className={`text-lg md:text-2xl ${tMuted} mb-10 md:mb-12 max-w-2xl leading-relaxed`}>
              I'm always open to discussing new projects, sales strategies, or creative marketing ideas. Send me an email and let's build something great.
            </p>
            
            <a href="mailto:nigunthanprignaselvam@gmail.com" className={`inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 ${tInvertBg} ${tInvertText} rounded-full font-bold uppercase tracking-widest text-xs md:text-sm active:scale-95 md:hover:scale-105 transition-transform w-full md:w-auto`}>
              Send an Email <Mail size={20} strokeWidth={3} />
            </a>
          </motion.div>
          
          <div className={`flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest ${tMuted} border-t ${tBorder} pt-8 gap-6 text-center md:text-left`}>
            <p>© {new Date().getFullYear()} Nigunthan Prignaselvam.<br className="md:hidden" /> All rights reserved.</p>
            
            {/* SOCIAL LOGOS */}
            <div className="flex gap-3 md:gap-4">
              <Link href="https://www.linkedin.com/in/nigunthan/" target="_blank" className={`group p-3 md:p-4 ${tCard} rounded-full md:hover:bg-white transition-all active:scale-90 md:hover:-translate-y-1 md:hover:shadow-lg`}>
                <LinkedinIcon className={`text-[#888] md:group-hover:text-[#0077b5] transition-colors duration-300`} size={18} />
              </Link>
              <Link href="https://facebook.com/nigunthan" target="_blank" className={`group p-3 md:p-4 ${tCard} rounded-full md:hover:bg-white transition-all active:scale-90 md:hover:-translate-y-1 md:hover:shadow-lg`}>
                <FacebookIcon className={`text-[#888] md:group-hover:text-[#1877F2] transition-colors duration-300`} size={18} />
              </Link>
              <Link href="https://www.instagram.com/kaanth_97/" target="_blank" className={`group p-3 md:p-4 ${tCard} rounded-full md:hover:bg-white transition-all active:scale-90 md:hover:-translate-y-1 md:hover:shadow-lg`}>
                <InstagramIcon className={`text-[#888] md:group-hover:text-[#E1306C] transition-colors duration-300`} size={18} />
              </Link>
              <Link href="https://github.com/nigunthan" target="_blank" className={`group p-3 md:p-4 ${tCard} rounded-full md:hover:bg-white transition-all active:scale-90 md:hover:-translate-y-1 md:hover:shadow-lg`}>
                <GithubIcon className={`text-[#888] md:group-hover:text-black transition-colors duration-300`} size={18} />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// DATA ARRAYS
// ----------------------------------------------------------------------

const managedPages =[
  {
    name: "Formula 01 Nation",
    link: "https://www.facebook.com/formula01nation",
    platforms: "Facebook",
    desc: "Strategic social media management and community building, driving audience engagement for motorsport enthusiasts."
  },
  {
    name: "JW Marketing Co",
    link: "https://www.linkedin.com/company/jwmarketingco/",
    platforms: "LinkedIn",
    desc: "B2B digital marketing strategy, lead generation, and professional corporate brand management."
  },
  {
    name: "Golf Essentials",
    link: "https://www.facebook.com/mygolfessentials",
    platforms: "Facebook • Instagram • X",
    desc: "Built an engaged golf community, significantly expanding audience reach over 1 year through targeted content and analytics."
  },
  {
    name: "Golf Shot US",
    link: "https://www.facebook.com/golfshotus",
    platforms: "Facebook",
    desc: "Developed strategic digital campaigns to boost brand visibility, customer engagement, and overall sales revenue."
  }
];

const experiences =[
  {
    role: "Senior Sales Executive",
    company: "Simplebooks (Pvt) Ltd",
    date: "Jan 2025 - Present",
    points: "Improved revenue by 30%, generating additional $2.5 mln. through strategic sales initiatives. Build and maintain strong client relationships while executing strategies that contribute to overall company success."
  },
  {
    role: "Social Media Manager",
    company: "Ider (Private) limited",
    date: "2023 - Present",
    points: "Built an engaged golf community across Facebook, Instagram, and Twitter (X) in 01 Year, expanding audience reach. Managed digital presence and content strategy for Golf Essentials."
  },
  {
    role: "Sales Executive",
    company: "Simplebooks (Pvt) Ltd",
    date: "Jan 2023 - Jan 2025",
    points: "Increased sales by 20% by executing innovative strategies surpassing targets. Passionate about delivering unparalleled customer experiences and developing customer-centric initiatives."
  },
  {
    role: "Retails Sales Executive",
    company: "Stelacom (Private) Limited",
    date: "Nov 2018 - Dec 2022",
    points: "Increased customer satisfaction and resolved inquiries and complaints professionally. Prepared daily and weekly sales reports while achieving Sales Champion Status 02 times."
  }
];

const skills =[
  "Social Media Analytics", "Content Marketing", "SEO", "Social Media Management", 
  "Community Building", "Facebook Ads", "CRM", "Social Media Insights", "Strategy"
];

const education =[
  { degree: "eMSc in Digital Marketing", school: "Cambridge College of Business", date: "2024 - 2025" },
  { degree: "Diploma In Digital Marketing", school: "A.I.B Sri Lanka", date: "2022" },
  { degree: "GCE Advanced Level", school: "Cambridge College", date: "2014 - 2016" },
  { degree: "GCE Ordinary Level", school: "Agarapatana Tamil Maha Vidyalayam", date: "2013" }
];
