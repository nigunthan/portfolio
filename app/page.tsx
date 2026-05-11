"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, User, Sparkles, FileText, Shapes, Send, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

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
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Enforce smooth scrolling on the whole page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  },[]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-white selection:text-black relative">
      
      {/* PREMIUM CSS NOISE BACKGROUND */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* MARQUEE ANIMATION CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
      `}} />

      {/* FLOATING ICON DOCK (Replaces Top Navbar) */}
      <div className="fixed bottom-6 md:bottom-10 left-0 w-full flex justify-center z-50 pointer-events-none">
        <motion.nav 
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          className="flex items-center gap-4 md:gap-6 px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pointer-events-auto"
        >
          {/* ABOUT */}
          <a href="#about" className="group relative text-[#888] hover:text-white transition-colors">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><User size={22} /></motion.div>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#222] text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">About</span>
          </a>
          {/* SKILLS */}
          <a href="#skills" className="group relative text-[#888] hover:text-white transition-colors">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><Sparkles size={22} /></motion.div>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#222] text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Skills</span>
          </a>
          {/* CV */}
          <a href="#cv" className="group relative text-[#888] hover:text-white transition-colors">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><FileText size={22} /></motion.div>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#222] text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Resume</span>
          </a>
          {/* WORK */}
          <a href="#work" className="group relative text-[#888] hover:text-white transition-colors">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><Shapes size={22} /></motion.div>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#222] text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Work</span>
          </a>
          {/* CONTACT */}
          <a href="#contact" className="group relative text-[#888] hover:text-white transition-colors">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}><Send size={22} /></motion.div>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#222] text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Contact</span>
          </a>
          
          <div className="w-[1px] h-6 bg-white/20 mx-1 md:mx-2"></div>
          
          {/* THEME TOGGLE (Aesthetic only to match image) */}
          <button className="group relative text-[#888] hover:text-white transition-colors">
            <motion.div whileHover={{ scale: 1.2, rotate: -20 }} whileTap={{ scale: 0.9 }}><Moon size={22} /></motion.div>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#222] text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-max">Dark Mode</span>
          </button>
        </motion.nav>
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-end p-6 md:p-12 pb-32 md:pb-48">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="max-w-2xl text-xl md:text-2xl text-[#888] mb-8 leading-snug">
              Nigunthan Prignaselvam — digital marketer and sales professional based in Sri Lanka.
            </p>
            <h1 className="text-[14vw] md:text-[11vw] leading-[0.85] font-black uppercase tracking-tighter text-white mb-10">
              Digital<br/>Marketer
            </h1>
            
            {/* PILL BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                Let's Connect <ArrowUpRight size={18} strokeWidth={3} />
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                Download CV
              </a>
            </div>
          </motion.div>
        </section>

        {/* WHO AM I & PHOTO */}
        <section id="about" className="p-6 md:p-12 border-t border-white/10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 pt-24 pb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="order-2 lg:order-1">
            {/* YOUR PHOTO INTEGRATION */}
            <div className="w-full h-full min-h-[400px] md:min-h-[600px] rounded-[2rem] overflow-hidden bg-[#111] relative">
              <img 
                src="/profile.jpg" 
                alt="Nigunthan Prignaselvam" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="uppercase tracking-widest text-xs font-bold text-[#666] mb-8">Who Am I?</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white">
              Sales & Digital<br/>Strategist
            </h3>
            <p className="text-lg md:text-xl text-[#888] mb-12 max-w-2xl leading-relaxed">
              With over 3 years of experience, I turn business strategies into impactful revenue growth. Currently based in Sri Lanka, I create dynamic campaigns & sleek content that not only look great but also support real marketing goals. Skilled across CRM, SEO, and Analytics, I focus on campaigns that feel fresh, purposeful, and engaging.
            </p>

            {/* BRUTALIST STATS GRID */}
            <div id="skills" className="grid grid-cols-2 gap-4">
              <div className="bg-[#111] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between aspect-square">
                <h4 className="text-5xl md:text-6xl font-black text-white mb-4">03+</h4>
                <p className="text-xs uppercase tracking-widest text-[#666] font-bold">Years<br/>Experience</p>
              </div>
              <div className="bg-[#111] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between aspect-square">
                <h4 className="text-5xl md:text-6xl font-black text-white mb-4">30%</h4>
                <p className="text-xs uppercase tracking-widest text-[#666] font-bold">Revenue<br/>Growth</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* BIG QUOTE */}
        <section className="p-6 md:p-12 border-t border-white/10 py-32 md:py-48 flex flex-col items-center justify-center text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            I don't just sell.<br/>
            <span className="text-[#444]">I shape growth.</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-xl md:text-2xl text-[#888] font-medium max-w-2xl">
            Turning digital interactions into living communities that demand attention.
          </motion.p>
        </section>

        {/* FEATURED PROJECTS (WORK) */}
        <section id="work" className="p-6 md:p-12 border-t border-white/10 grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24 pt-24 pb-24">
          <div>
            <h2 className="uppercase tracking-widest text-xs font-bold text-[#666] lg:sticky top-32">Featured Pages</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {managedPages.map((page, index) => (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn} key={index} className="bg-[#111] p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[450px]">
                <div className="mb-12">
                  <span className="uppercase tracking-widest text-xs font-bold text-[#666] block mb-8">{page.platforms}</span>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">{page.name}</h3>
                  <p className="text-[#888] text-lg leading-relaxed">{page.desc}</p>
                </div>
                <div>
                  <a href={page.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                    View Page <ArrowUpRight size={16} strokeWidth={3} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SCROLLING RESUME BANNER */}
        <a href="/resume.pdf" download className="block border-y border-white/10 py-12 md:py-20 bg-white text-black overflow-hidden hover:bg-[#e0e0e0] transition-colors cursor-pointer">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            <h2 className="text-7xl md:text-[10vw] font-black uppercase tracking-tighter leading-none inline-block">
              DOWNLOAD • RESUME • DOWNLOAD • RESUME • DOWNLOAD • RESUME • DOWNLOAD • RESUME •&nbsp;
            </h2>
          </div>
        </a>

        {/* CURRICULUM VITAE */}
        <section id="cv" className="p-6 md:p-12 border-t border-white/10 grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24 pt-24 pb-24">
          <div>
            <h2 className="uppercase tracking-widest text-xs font-bold text-[#666] lg:sticky top-32">Curriculum Vitae</h2>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
            
            {/* Experience */}
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-12">Professional History</h3>
            <div className="flex flex-col gap-12 border-b border-white/10 pb-16">
              {experiences.map((exp, index) => (
                <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
                  <div>
                    <h4 className="text-xl font-bold uppercase text-white">{exp.role}</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#666] mt-2">{exp.date}</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">{exp.company}</h5>
                    <p className="text-[#888] leading-relaxed text-lg">{exp.points}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Arsenal (Skills) */}
            <h3 className="text-3xl font-black uppercase tracking-tighter mt-16 mb-12">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3 border-b border-white/10 pb-16">
              {skills.map((skill, index) => (
                <span key={index} className="px-6 py-4 bg-[#111] rounded-full text-sm font-bold uppercase tracking-widest text-[#ccc]">
                  {skill}
                </span>
              ))}
            </div>

            {/* Education */}
            <h3 className="text-3xl font-black uppercase tracking-tighter mt-16 mb-12">Education</h3>
            <div className="flex flex-col gap-8">
              {education.map((edu, index) => (
                <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-4 items-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#666]">{edu.date}</p>
                  <h4 className="text-lg font-bold uppercase text-white">{edu.degree} — <span className="text-[#888]">{edu.school}</span></h4>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FOOTER CONTACT AREA */}
        <footer id="contact" className="p-6 md:p-12 border-t border-white/10 pt-24 pb-32 md:pb-48">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mb-24">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Let's Connect
            </h2>
            <p className="text-xl md:text-2xl text-[#888] mb-12 max-w-2xl leading-relaxed">
              I'm always open to discussing new projects, sales strategies, or creative marketing ideas. Send me an email and let's build something great.
            </p>
            
            {/* PILL BUTTON FOR CONTACT */}
            <a href="mailto:nigunthanprignaselvam@gmail.com" className="inline-flex items-center gap-3 px-8 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
              Send an Email <Mail size={20} strokeWidth={3} />
            </a>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-bold uppercase tracking-widest text-[#666] border-t border-white/10 pt-8 gap-6">
            <p>© {new Date().getFullYear()} Nigunthan Prignaselvam. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="https://www.linkedin.com/in/nigunthan/" target="_blank" className="p-3 bg-[#111] rounded-full hover:bg-white hover:text-black transition-colors">
                <LinkedinIcon size={18} />
              </Link>
              <Link href="https://facebook.com/nigunthan" target="_blank" className="p-3 bg-[#111] rounded-full hover:bg-white hover:text-black transition-colors">
                <FacebookIcon size={18} />
              </Link>
              <Link href="https://github.com/nigunthan" target="_blank" className="p-3 bg-[#111] rounded-full hover:bg-white hover:text-black transition-colors">
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
