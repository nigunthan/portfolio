"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles, Download } from "lucide-react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#030014] text-gray-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      
      {/* VERCEL-STYLE BACKGROUND (Dot Matrix & Glowing Orbs) */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[120px]"></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          to { transform: translate(calc(-50% - 0.5rem)); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}} />

      <div className="relative z-10">
        
        {/* FLOATING GLASS NAVBAR */}
        <div className="fixed top-6 w-full flex justify-center z-50 px-4">
          <nav className="flex items-center gap-1 md:gap-2 px-2 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
            {['About', 'Work', 'CV', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 text-center pt-32">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl flex flex-col items-center">
            
            <motion.div variants={fadeIn} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-300 tracking-wide">Based in Sri Lanka</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Social Media Manager <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                & Sales Consultant
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Hi, I&apos;m <span className="text-white font-medium">Nigunthan Prignaselvam</span>. I combine strategic thinking with hands-on expertise to align marketing efforts with business goals, driving explosive sales and brand visibility.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
              {/* SPINNING GRADIENT BORDER BUTTON (Vercel Style) */}
              <a href="#contact" className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none active:scale-95 transition-transform">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#030014] px-8 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-3xl gap-2 hover:bg-transparent transition-colors duration-300">
                  Let&apos;s Connect <ArrowUpRight size={18} />
                </span>
              </a>

              <a href="/resume.pdf" download className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-3xl gap-2 hover:bg-white/10 transition-all active:scale-95">
                Download CV <Download size={18} />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* BENTO GRID (ABOUT & STATS) */}
        <section id="about" className="p-6 md:p-12 max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            
            {/* Main About Card */}
            <motion.div variants={fadeIn} className="col-span-1 md:col-span-2 bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4">Who Am I</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Turning digital interactions into living communities.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                With over 3 years of experience, I specialize in developing digital strategies that boost brand visibility, customer engagement, and revenue growth. Whether driving community growth or executing innovative sales strategies, I treat every campaign as an opportunity to deliver measurable results.
              </p>
            </motion.div>

            {/* Stat Card 1 */}
            <motion.div variants={fadeIn} className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-white/10 p-8 md:p-10 rounded-[2rem] flex flex-col justify-center relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-6xl md:text-7xl font-black text-white mb-2">30%</h4>
              <p className="text-sm uppercase tracking-widest text-gray-300 font-medium">Revenue Growth Generated</p>
            </motion.div>

            {/* Photo / DP Card (FIXED CROP ISSUE) */}
            <motion.div variants={fadeIn} className="bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden min-h-[300px] md:h-full relative group">
              <img 
                src="/profile.jpg" 
                alt="Nigunthan Prignaselvam" 
                // Added "object-top" to anchor the image so your head isn't chopped off!
                className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </motion.div>

            {/* Infinite Scroll Skills Card */}
            <motion.div variants={fadeIn} className="col-span-1 md:col-span-2 bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] flex flex-col justify-center overflow-hidden relative">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-6">Technical Arsenal</h2>
              
              <div className="relative flex overflow-hidden w-full mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-4">
                  {[...skills, ...skills, ...skills].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-full shrink-0">
                      <Sparkles size={14} className="text-cyan-400" />
                      <span className="text-sm font-medium text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </section>

        {/* FEATURED WORK / PROJECTS */}
        <section id="work" className="p-6 md:p-12 max-w-7xl mx-auto pt-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Featured Projects</h2>
            <p className="text-gray-400 mt-4 text-lg">Digital spaces and campaigns I have managed and grown.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {managedPages.map((page, index) => (
              <motion.a 
                href={page.link} 
                target="_blank" 
                rel="noopener noreferrer"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeIn} 
                key={index} 
                className="group relative bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-[2rem] flex flex-col justify-between min-h-[350px] transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 overflow-hidden"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="relative z-20">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-semibold text-cyan-300 uppercase tracking-widest">{page.platforms}</span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{page.name}</h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">{page.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* EXPERIENCE TIMELINE (Vercel Style) */}
        <section id="cv" className="p-6 md:p-12 max-w-4xl mx-auto pt-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Professional Journey</h2>
          </motion.div>

          <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeIn} 
                key={index} 
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#030014] border-2 border-purple-500 group-hover:bg-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                  <span className="text-sm font-semibold text-gray-500 bg-white/5 px-3 py-1 rounded-full mt-2 md:mt-0 w-max">{exp.date}</span>
                </div>
                
                <h4 className="text-base font-medium text-purple-400 mb-4">{exp.company}</h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{exp.points}</p>
              </motion.div>
            ))}
          </div>

          {/* Education Mini-Section */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-24">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <span className="text-xs font-bold text-cyan-500 mb-2 block">{edu.date}</span>
                  <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-sm text-gray-400">{edu.school}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FOOTER & CONTACT */}
        <footer id="contact" className="border-t border-white/10 mt-20 pt-20 pb-12 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let&apos;s build together.</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Ready to elevate your brand&apos;s digital presence and drive real revenue? Drop me a message and let&apos;s get started.
            </p>
            
            <a href="mailto:nigunthanprignaselvam@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:scale-105 hover:bg-cyan-400 transition-all duration-300">
              <Mail size={18} /> nigunthanprignaselvam@gmail.com
            </a>

            <div className="flex items-center justify-center gap-6 mt-16 pt-8 border-t border-white/10">
              <Link href="https://www.linkedin.com/in/nigunthan/" target="_blank" className="text-gray-500 hover:text-[#0077b5] transition-colors"><LinkedinIcon size={24} /></Link>
              <Link href="https://facebook.com/nigunthan" target="_blank" className="text-gray-500 hover:text-[#1877F2] transition-colors"><FacebookIcon size={24} /></Link>
              <Link href="https://www.instagram.com/kaanth_97/" target="_blank" className="text-gray-500 hover:text-[#E1306C] transition-colors"><InstagramIcon size={24} /></Link>
              <Link href="https://github.com/nigunthan" target="_blank" className="text-gray-500 hover:text-white transition-colors"><GithubIcon size={24} /></Link>
            </div>
            
            <p className="text-gray-600 text-sm mt-8">
              © {new Date().getFullYear()} Nigunthan Prignaselvam. Built with Next.js & Tailwind.
            </p>
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
    platforms: "FB / IG / X",
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
  "Community Building", "Facebook Ads", "CRM", "Social Media Insights", "Sales Consultant"
];

const education =[
  { degree: "eMSc in Digital Marketing", school: "Cambridge College of Business", date: "2024 - 2025" },
  { degree: "Diploma In Digital Marketing", school: "A.I.B Sri Lanka", date: "2022" },
  { degree: "GCE Advanced Level", school: "Cambridge College", date: "2014 - 2016" },
  { degree: "GCE Ordinary Level", school: "Agarapatana Tamil Maha Vidyalayam", date: "2013" }
];
