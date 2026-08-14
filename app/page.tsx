"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Download, MapPin } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Custom Brand Icons
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

  if (!mounted) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white relative overflow-x-hidden">
      
      {/* VERCEL DOT MATRIX BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-zinc-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        
        {/* FROSTED GLASS NAVBAR */}
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 md:gap-8 px-6 py-3 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-full text-xs md:text-sm font-medium text-zinc-400 shadow-2xl"
        >
          {['About', 'Work', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </motion.nav>

        {/* HERO SECTION */}
        <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl flex flex-col items-center">
            
            <motion.div variants={fadeUp} className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-xs text-zinc-400 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Based in Sri Lanka
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-6 leading-tight">
              Social Media Manager <br className="hidden md:block" />
              & Sales Consultant
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
              Hi, I&apos;m <span className="text-zinc-200 font-medium">Nigunthan Prignaselvam</span>. I build powerful digital strategies that turn interactions into loyal communities and drive measurable revenue growth.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors">
                Get in touch <ArrowUpRight size={16} />
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors">
                Download CV <Download size={16} />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT (BENTO GRID) */}
        <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Bio Card */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-10 rounded-3xl hover:border-zinc-700/50 transition-colors">
              <h2 className="text-zinc-500 text-sm font-medium mb-4">About Me</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4 leading-snug">
                Driving growth through strategic marketing.
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                With over 3 years of experience, I specialize in developing digital strategies that boost brand visibility and customer engagement. Whether I am driving community growth or executing innovative B2B sales strategies, I treat every campaign as an opportunity to deliver real, measurable results.
              </p>
            </motion.div>

            {/* Stat Card */}
            <motion.div variants={fadeUp} className="bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-10 rounded-3xl flex flex-col items-center justify-center text-center hover:border-zinc-700/50 transition-colors">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">30%</div>
              <div className="text-zinc-500 text-sm font-medium">Revenue Growth Generated</div>
            </motion.div>

            {/* Skills Card */}
            <motion.div variants={fadeUp} className="md:col-span-3 bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-10 rounded-3xl hover:border-zinc-700/50 transition-colors">
              <h2 className="text-zinc-500 text-sm font-medium mb-6">Core Competencies</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-zinc-800/30 border border-zinc-800 rounded-full text-xs md:text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="py-20 px-6 max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12">
            <h2 className="text-3xl font-bold text-zinc-100">Featured Pages</h2>
            <p className="text-zinc-500 mt-2">Digital spaces I have scaled and managed.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {managedPages.map((page, index) => (
              <motion.a 
                href={page.link} 
                target="_blank" 
                rel="noopener noreferrer"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUp} 
                key={index} 
                className="group bg-zinc-900/30 border border-zinc-800/50 p-8 rounded-3xl hover:bg-zinc-900/50 hover:border-zinc-700/50 transition-all flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-medium text-zinc-500 px-3 py-1 bg-zinc-800/50 rounded-full">{page.platforms}</span>
                    <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-100 mb-3">{page.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{page.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION (VERCEL TIMELINE) */}
        <section id="experience" className="py-20 px-6 max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-3xl font-bold text-zinc-100">Experience</h2>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeUp} 
                key={index} 
                className="flex flex-col md:flex-row gap-4 md:gap-8 group"
              >
                <div className="text-sm font-medium text-zinc-500 w-32 shrink-0 md:pt-1">{exp.date}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">{exp.role}</h3>
                  <div className="text-sm text-zinc-400 mb-3">{exp.company}</div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{exp.points}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-24 mb-12">
            <h2 className="text-2xl font-bold text-zinc-100">Education</h2>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUp} 
                key={index} 
                className="flex flex-col md:flex-row gap-4 md:gap-8 group"
              >
                <div className="text-sm font-medium text-zinc-500 w-32 shrink-0 md:pt-1">{edu.date}</div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-zinc-200">{edu.degree}</h3>
                  <div className="text-sm text-zinc-400">{edu.school}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER & CONTACT */}
        <footer id="contact" className="border-t border-zinc-800/50 mt-20 pt-20 pb-12 bg-zinc-900/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6">Let&apos;s work together.</h2>
            <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-lg mx-auto">
              Ready to elevate your brand&apos;s digital presence? Drop me an email to discuss your next project.
            </p>
            
            <a href="mailto:nigunthanprignaselvam@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors">
              <Mail size={16} /> nigunthanprignaselvam@gmail.com
            </a>

            <div className="flex items-center justify-center gap-6 mt-16 pt-8 border-t border-zinc-800/50">
              <Link href="https://www.linkedin.com/in/nigunthan/" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><LinkedinIcon size={20} /></Link>
              <Link href="https://facebook.com/nigunthan" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><FacebookIcon size={20} /></Link>
              <Link href="https://www.instagram.com/kaanth_97/" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><InstagramIcon size={20} /></Link>
              <Link href="https://github.com/nigunthan" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><GithubIcon size={20} /></Link>
            </div>
            
            <p className="text-zinc-600 text-xs mt-8">
              © {new Date().getFullYear()} Nigunthan Prignaselvam.
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
  "Community Building", "Facebook Ads", "CRM", "Social Media Insights", "Sales Strategy"
];

const education =[
  { degree: "eMSc in Digital Marketing", school: "Cambridge College of Business", date: "2024 - 2025" },
  { degree: "Diploma In Digital Marketing", school: "A.I.B Sri Lanka", date: "2022" },
  { degree: "GCE Advanced Level", school: "Cambridge College", date: "2014 - 2016" },
  { degree: "GCE Ordinary Level", school: "Agarapatana Tamil Maha Vidyalayam", date: "2013" }
];
