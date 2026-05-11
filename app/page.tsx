"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-[#ededed] font-sans selection:bg-white selection:text-black">
      
      {/* INLINE CSS FOR THE INFINITE SCROLLING RESUME BANNER */}
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

      {/* TOP NAVBAR */}
      <header className="fixed top-0 w-full flex justify-between items-center p-6 md:px-12 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 text-sm font-bold uppercase tracking-widest text-white">
        <div>Nigunthan</div>
        <div className="hidden md:block text-[#666]">Digital Marketer</div>
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
          <a href="#work" className="hover:text-gray-400 transition-colors">Work</a>
          <a href="#cv" className="hover:text-gray-400 transition-colors">CV</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-end p-6 md:p-12 pb-24 md:pb-32">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="max-w-2xl text-xl md:text-3xl text-[#888] mb-8 leading-snug"
        >
          Nigunthan Prignaselvam — digital marketer and sales professional based in Sri Lanka
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[14vw] md:text-[11vw] leading-[0.85] font-black uppercase tracking-tighter text-white"
        >
          Digital<br/>Marketer
        </motion.h1>
      </section>

      {/* WHO AM I */}
      <section id="about" className="p-6 md:p-12 border-t border-white/10 grid md:grid-cols-[1fr_2.5fr] gap-12 md:gap-24 pt-24 pb-24">
        <div>
          <h2 className="uppercase tracking-widest text-xs font-bold text-[#666] md:sticky top-32">Who Am I?</h2>
        </div>
        <div>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
            Sales & Digital<br/>Strategist
          </h3>
          <p className="text-lg md:text-2xl text-[#888] mb-16 max-w-3xl leading-relaxed">
            With over 3 years of experience, I turn business strategies into impactful revenue growth. Currently based in Sri Lanka, I create dynamic campaigns & sleek content that not only look great but also support real marketing goals. Skilled across CRM, SEO, and Analytics, I focus on campaigns that feel fresh, purposeful, and engaging.
          </p>

          {/* BRUTALIST STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#111] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between aspect-square">
              <h4 className="text-5xl md:text-6xl font-black text-white">03+</h4>
              <p className="text-xs uppercase tracking-widest text-[#666] font-bold">Years<br/>Experience</p>
            </div>
            <div className="bg-[#111] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between aspect-square">
              <h4 className="text-5xl md:text-6xl font-black text-white">30%</h4>
              <p className="text-xs uppercase tracking-widest text-[#666] font-bold">Revenue<br/>Growth</p>
            </div>
            <div className="bg-[#111] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between aspect-square">
              <h4 className="text-5xl md:text-6xl font-black text-white">02+</h4>
              <p className="text-xs uppercase tracking-widest text-[#666] font-bold">Pages<br/>Managed</p>
            </div>
            <div className="bg-[#111] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between aspect-square">
              <h4 className="text-3xl md:text-4xl font-black text-white leading-tight">SEO<br/>SALES</h4>
              <p className="text-xs uppercase tracking-widest text-[#666] font-bold">Core<br/>Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="p-6 md:p-12 border-t border-white/10 py-32 md:py-48 flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
          I don't just sell.<br/>
          <span className="text-[#444]">I shape growth.</span>
        </h2>
        <p className="text-xl md:text-3xl text-[#888] font-medium max-w-3xl">
          Turning digital interactions into living communities that demand attention.
        </p>
      </section>

      {/* FEATURED PROJECTS (WORK) */}
      <section id="work" className="p-6 md:p-12 border-t border-white/10 grid md:grid-cols-[1fr_2.5fr] gap-12 md:gap-24 pt-24 pb-24">
        <div>
          <h2 className="uppercase tracking-widest text-xs font-bold text-[#666] md:sticky top-32">Featured Pages</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {managedPages.map((page, index) => (
            <a key={index} href={page.link} target="_blank" rel="noopener noreferrer" className="group block bg-[#111] p-8 md:p-12 rounded-[2.5rem] hover:bg-[#1a1a1a] transition-all duration-300 flex flex-col justify-between min-h-[400px]">
              <div className="flex justify-between items-start">
                <span className="uppercase tracking-widest text-xs font-bold text-[#666]">{page.platforms}</span>
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={24} strokeWidth={3} />
                </div>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">{page.name}</h3>
                <p className="text-[#888] text-lg leading-relaxed">{page.desc}</p>
              </div>
            </a>
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
      <section id="cv" className="p-6 md:p-12 border-t border-white/10 grid md:grid-cols-[1fr_2.5fr] gap-12 md:gap-24 pt-24 pb-24">
        <div>
          <h2 className="uppercase tracking-widest text-xs font-bold text-[#666] md:sticky top-32">Curriculum Vitae</h2>
        </div>
        <div>
          {/* Experience */}
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-12">Professional History</h3>
          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 border-b border-white/10 pb-12">
                <div>
                  <h4 className="text-xl font-bold uppercase text-white">{exp.role}</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#666] mt-2">{exp.date}</p>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">{exp.company}</h5>
                  <p className="text-[#888] leading-relaxed text-lg">{exp.points}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Arsenal (Skills) */}
          <h3 className="text-3xl font-black uppercase tracking-tighter mt-24 mb-12">Technical Arsenal</h3>
          <div className="flex flex-wrap gap-3 border-b border-white/10 pb-12">
            {skills.map((skill, index) => (
              <span key={index} className="px-6 py-4 bg-[#111] rounded-full text-sm font-bold uppercase tracking-widest text-[#ccc]">
                {skill}
              </span>
            ))}
          </div>

          {/* Education */}
          <h3 className="text-3xl font-black uppercase tracking-tighter mt-12 mb-12">Education</h3>
          <div className="flex flex-col gap-6">
            {education.map((edu, index) => (
              <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-4 items-center">
                <p className="text-sm font-bold uppercase tracking-widest text-[#666]">{edu.date}</p>
                <h4 className="text-lg font-bold uppercase text-white">{edu.degree} — <span className="text-[#888]">{edu.school}</span></h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CONTACT AREA */}
      <footer id="contact" className="p-6 md:p-12 border-t border-white/10 pt-24 pb-12">
        <div className="max-w-4xl mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Let's Connect
          </h2>
          <p className="text-xl md:text-2xl text-[#888] mb-12">
            I'm always open to discussing new projects, sales strategies, or creative marketing ideas. Send me an email.
          </p>
          <a href="mailto:nigunthanprignaselvam@gmail.com" className="inline-block text-2xl md:text-4xl font-black uppercase tracking-tighter border-b-4 border-white pb-2 hover:text-[#888] hover:border-[#888] transition-all">
            nigunthanprignaselvam@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-bold uppercase tracking-widest text-[#666] border-t border-white/10 pt-8 gap-4">
          <p>© {new Date().getFullYear()} Nigunthan Prignaselvam. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/nigunthan/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://facebook.com/nigunthan" target="_blank" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://github.com/nigunthan" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
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
    date: "Apr 2025 - Present",
    points: "Improved revenue by 30%, generating additional $2.5 mln. through strategic sales initiatives. Build and maintain strong client relationships while executing strategies that contribute to overall company success."
  },
  {
    role: "Social Media Manager",
    company: "Ider (Private) limited",
    date: "Jul 2023 - Mar 2025",
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
