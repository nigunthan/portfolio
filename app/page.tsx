"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, ExternalLink, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Custom SVG Icons
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

export default function Portfolio() {
  const[isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.scrollBehavior = "smooth";
  },[]);

  // Theme Variables for seamless transition
  const tBg = isDark ? "bg-[#050505]" : "bg-[#f4f4f4]";
  const tText = isDark ? "text-[#ededed]" : "text-[#111111]";
  const tCard = isDark ? "bg-[#111111]" : "bg-white";
  const tBorder = isDark ? "border-white/10" : "border-black/10";
  const tMuted = isDark ? "text-[#888888]" : "text-[#666666]";
  const tInvertBg = isDark ? "bg-white" : "bg-[#111111]";
  const tInvertText = isDark ? "text-black" : "text-white";
  const tGlass = isDark ? "bg-white/5" : "bg-black/5";

  // Font Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const wordVars = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease:[0.16, 1, 0.3, 1] } },
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <div className={`min-h-screen ${tBg} ${tText} font-sans selection:${tInvertBg} selection:${tInvertText} transition-colors duration-500 relative overflow-x-hidden`}>
      
      {/* PREMIUM CSS NOISE BACKGROUND */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-block; white-space: nowrap; animation: marquee 15s linear infinite; }
      `}} />

      <div className="relative z-10">
        
        {/* TEXT-BASED PILL NAVBAR (From your screenshot) */}
        <div className="fixed top-6 w-full flex justify-center z-50 px-4 pointer-events-none">
          <nav className={`pointer-events-auto flex items-center gap-4 md:gap-8 px-6 md:px-10 py-4 ${tGlass} backdrop-blur-xl border ${tBorder} rounded-full shadow-2xl transition-colors duration-500`}>
            <a href="#about" className={`text-xs md:text-sm font-bold uppercase tracking-widest ${tMuted} hover:${tText} transition-colors`}>About</a>
            <a href="#work" className={`text-xs md:text-sm font-bold uppercase tracking-widest ${tMuted} hover:${tText} transition-colors`}>Work</a>
            <a href="#cv" className={`text-xs md:text-sm font-bold uppercase tracking-widest ${tMuted} hover:${tText} transition-colors`}>CV</a>
            <a href="#skills" className={`hidden md:block text-xs md:text-sm font-bold uppercase tracking-widest ${tMuted} hover:${tText} transition-colors`}>Services</a>
            <a href="#contact" className={`text-xs md:text-sm font-bold uppercase tracking-widest ${tMuted} hover:${tText} transition-colors`}>Contact</a>
            
            <div className={`w-[1px] h-4 ${isDark ? 'bg-white/20' : 'bg-black/20'} mx-2`}></div>
            
            {/* WORKING DARK/LIGHT MODE TOGGLE */}
            <button 
              onClick={() => setIsDark(!isDark)} 
              className={`text-xs font-bold uppercase tracking-widest ${tMuted} hover:${tText} transition-transform active:scale-90 flex items-center`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        </div>

        {/* HERO SECTION WITH FONT ANIMATIONS */}
        <section className="min-h-screen flex flex-col justify-end p-6 md:p-12 pb-32">
          <motion.div initial="hidden" animate="visible" variants={containerVars}>
            <motion.p variants={wordVars} className={`max-w-2xl text-xl md:text-2xl ${tMuted} mb-8 leading-snug`}>
              Nigunthan Prignaselvam — digital marketer and sales professional based in Sri Lanka.
            </motion.p>
            
            <div className="overflow-hidden mb-2">
              <motion.h1 variants={wordVars} className="text-[14vw] md:text-[11vw] leading-[0.85] font-black uppercase tracking-tighter">
                Digital
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1 variants={wordVars} className="text-[14vw] md:text-[11vw] leading-[0.85] font-black uppercase tracking-tighter">
                Marketer
              </motion.h1>
            </div>
            
            <motion.div variants={wordVars} className="flex flex-wrap gap-4 mt-6">
              <a href="#contact" className={`inline-flex items-center gap-3 px-8 py-4 ${tInvertBg} ${tInvertText} rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform`}>
                Let's Connect <ArrowUpRight size={18} strokeWidth={3} />
              </a>
              <a href="/resume.pdf" download className={`inline-flex items-center gap-3 px-8 py-4 bg-transparent border ${tBorder} rounded-full font-bold uppercase tracking-widest text-xs hover:${tInvertBg} hover:${tInvertText} transition-all`}>
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* WHO AM I & PHOTO */}
        <section id="about" className={`p-6 md:p-12 border-t ${tBorder} grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 pt-24 pb-24 transition-colors duration-500`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="order-2 lg:order-1">
            <div className={`w-full h-full min-h-[400px] md:min-h-[600px] rounded-[2rem] overflow-hidden ${tCard} relative transition-colors duration-500`}>
              <img 
                src="/profile.jpg" 
                alt="Nigunthan Prignaselvam" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className={`uppercase tracking-widest text-xs font-bold ${tMuted} mb-8`}>Who Am I?</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Sales & Digital<br/>Strategist
            </h3>
            <p className={`text-lg md:text-xl ${tMuted} mb-12 max-w-2xl leading-relaxed`}>
              With over 3 years of experience, I turn business strategies into impactful revenue growth. Currently based in Sri Lanka, I create dynamic campaigns & sleek content that not only look great but also support real marketing goals.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className={`${tCard} p-6 md:p-8 rounded-[2rem] flex flex-col justify-between aspect-square transition-colors duration-500`}>
                <h4 className="text-5xl md:text-6xl font-black mb-4">03+</h4>
                <p className={`text-xs uppercase tracking-widest ${tMuted} font-bold`}>Years<br/>Experience</p>
              </div>
              <div className={`${tCard} p-6 md:p-8 rounded-[2rem] flex flex-col justify-between aspect-square transition-colors duration-500`}>
                <h4 className="text-5xl md:text-6xl font-black mb-4">30%</h4>
                <p className={`text-xs uppercase tracking-widest ${tMuted} font-bold`}>Revenue<br/>Growth</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* DEDICATED SKILLS & SERVICES SECTION (NEW) */}
        <section id="skills" className={`p-6 md:p-12 border-t ${tBorder} pt-24 pb-24 transition-colors duration-500`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className={`uppercase tracking-widest text-xs font-bold ${tMuted} mb-12 text-center`}>Services & Expertise</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-16 text-center max-w-4xl mx-auto">
              Everything needed to scale your brand.
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <span key={index} className={`px-6 py-4 md:px-8 md:py-6 ${tCard} rounded-full text-sm md:text-lg font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-sm`}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FEATURED PROJECTS (WORK) */}
        <section id="work" className={`p-6 md:p-12 border-t ${tBorder} grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24 pt-24 pb-24 transition-colors duration-500`}>
          <div>
            <h2 className={`uppercase tracking-widest text-xs font-bold ${tMuted} lg:sticky top-32`}>Featured Pages</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {managedPages.map((page, index) => (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn} key={index} className={`${tCard} p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[450px] transition-colors duration-500`}>
                <div className="mb-12">
                  <span className={`uppercase tracking-widest text-xs font-bold ${tMuted} block mb-8`}>{page.platforms}</span>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">{page.name}</h3>
                  <p className={`${tMuted} text-lg leading-relaxed`}>{page.desc}</p>
                </div>
                <div>
                  <a href={page.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-3 px-6 py-3 ${tInvertBg} ${tInvertText} rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform`}>
                    View Page <ArrowUpRight size={16} strokeWidth={3} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SCROLLING RESUME BANNER */}
        <a href="/resume.pdf" download className={`block border-y ${tBorder} py-12 md:py-20 ${tInvertBg} ${tInvertText} overflow-hidden hover:opacity-80 transition-opacity cursor-pointer`}>
          <div className="animate-marquee whitespace-nowrap flex items-center">
            <h2 className="text-7xl md:text-[10vw] font-black uppercase tracking-tighter leading-none inline-block">
              DOWNLOAD • RESUME • DOWNLOAD • RESUME • DOWNLOAD • RESUME • DOWNLOAD • RESUME •&nbsp;
            </h2>
          </div>
        </a>

        {/* CURRICULUM VITAE */}
        <section id="cv" className={`p-6 md:p-12 border-t ${tBorder} grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24 pt-24 pb-24 transition-colors duration-500`}>
          <div>
            <h2 className={`uppercase tracking-widest text-xs font-bold ${tMuted} lg:sticky top-32`}>Curriculum Vitae</h2>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
            
            {/* Experience */}
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-12">Professional History</h3>
            <div className={`flex flex-col gap-12 border-b ${tBorder} pb-16`}>
              {experiences.map((exp, index) => (
                <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
                  <div>
                    <h4 className="text-xl font-bold uppercase">{exp.role}</h4>
                    <p className={`text-xs font-bold uppercase tracking-widest ${tMuted} mt-2`}>{exp.date}</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold mb-4 uppercase tracking-wide">{exp.company}</h5>
                    <p className={`${tMuted} leading-relaxed text-lg`}>{exp.points}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <h3 className="text-3xl font-black uppercase tracking-tighter mt-16 mb-12">Education</h3>
            <div className="flex flex-col gap-8">
              {education.map((edu, index) => (
                <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-4 items-center">
                  <p className={`text-xs font-bold uppercase tracking-widest ${tMuted}`}>{edu.date}</p>
                  <h4 className="text-lg font-bold uppercase">{edu.degree} — <span className={tMuted}>{edu.school}</span></h4>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FOOTER CONTACT AREA */}
        <footer id="contact" className={`p-6 md:p-12 border-t ${tBorder} pt-24 pb-32 md:pb-48 transition-colors duration-500`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mb-24">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Let's Connect
            </h2>
            <p className={`text-xl md:text-2xl ${tMuted} mb-12 max-w-2xl leading-relaxed`}>
              I'm always open to discussing new projects, sales strategies, or creative marketing ideas. Send me an email and let's build something great.
            </p>
            
            <a href="mailto:nigunthanprignaselvam@gmail.com" className={`inline-flex items-center gap-3 px-8 py-5 ${tInvertBg} ${tInvertText} rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform`}>
              Send an Email <Mail size={20} strokeWidth={3} />
            </a>
          </motion.div>
          
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-bold uppercase tracking-widest ${tMuted} border-t ${tBorder} pt-8 gap-6`}>
            <p>© {new Date().getFullYear()} Nigunthan Prignaselvam. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="https://www.linkedin.com/in/nigunthan/" target="_blank" className={`p-3 ${tCard} rounded-full hover:${tInvertBg} hover:${tInvertText} transition-colors`}>
                <LinkedinIcon size={18} />
              </Link>
              <Link href="https://facebook.com/nigunthan" target="_blank" className={`p-3 ${tCard} rounded-full hover:${tInvertBg} hover:${tInvertText} transition-colors`}>
                <FacebookIcon size={18} />
              </Link>
              <Link href="https://github.com/nigunthan" target="_blank" className={`p-3 ${tCard} rounded-full hover:${tInvertBg} hover:${tInvertText} transition-colors`}>
                <GithubIcon size={18} />
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
