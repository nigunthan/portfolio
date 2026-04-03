"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Download, Send, ExternalLink } from "lucide-react";
import Link from "next/link";

// Custom SVG Icons for Brands
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Portfolio() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans selection:bg-emerald-500 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden py-20">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-10 max-w-4xl">
          
          <motion.img 
            variants={fadeIn}
            src="/profile.jpg" 
            alt="Nigunthan Prignaselvam" 
            className="relative z-20 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover object-center border-4 border-gray-900 ring-4 ring-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.3)] mx-auto mb-6 transition-transform hover:scale-105"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />

          <motion.h2 variants={fadeIn} className="text-emerald-400 font-medium tracking-widest uppercase mb-4">
            Hello, I am
          </motion.h2>
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Nigunthan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Prignaselvam</span>
          </motion.h1>
          <motion.h3 variants={fadeIn} className="text-xl md:text-2xl text-gray-400 mb-8">
            Digital Marketer & Sales Professional
          </motion.h3>
          <motion.p variants={fadeIn} className="max-w-2xl mx-auto text-gray-400 mb-10 leading-relaxed">
            Combines strategic thinking with hands-on expertise to align marketing efforts with business goals, 
            driving sales, brand visibility, and exceptional customer experiences.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-4">
            <a href="/resume.pdf" download="Nigunthan_Prignaselvam_CV.pdf" className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold rounded-full transition-all hover:scale-105 active:scale-95">
              <Download size={20} />
              Download CV
            </a>
            
            <div className="flex items-center gap-3 ml-2">
              <Link href="https://www.linkedin.com/in/nigunthan/" target="_blank" className="p-3 bg-gray-900 border border-gray-800 rounded-full hover:border-emerald-500 hover:text-emerald-400 transition-all hover:scale-110">
                <LinkedinIcon size={20} />
              </Link>
              <Link href="https://facebook.com/nigunthan" target="_blank" className="p-3 bg-gray-900 border border-gray-800 rounded-full hover:border-emerald-500 hover:text-emerald-400 transition-all hover:scale-110">
                <FacebookIcon size={20} />
              </Link>
              <Link href="https://github.com/nigunthan" target="_blank" className="p-3 bg-gray-900 border border-gray-800 rounded-full hover:border-emerald-500 hover:text-emerald-400 transition-all hover:scale-110">
                <GithubIcon size={20} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-900" id="about">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-emerald-500 rounded-full" />
            About Me
          </h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12 leading-relaxed text-gray-300 space-y-6">
            <p>
              Hello! I'm <span className="text-emerald-400 font-medium">Nigunthan Prignaselvam</span>, a Digital Marketer and Sales Professional based in Sri Lanka with over 3 years of experience. I specialize in developing and executing digital strategies that boost brand visibility, customer engagement, and ultimately, revenue growth.
            </p>
            <p>
              Throughout my career, I've developed a strong foundation in managing multi-platform social media accounts, creating targeted content (including SEO), and analyzing performance metrics to optimize campaigns. Whether I am driving community growth as a Social Media Strategist or boosting revenue by 30% through strategic sales initiatives, I treat every campaign as an opportunity to deliver measurable, impactful results.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PORTFOLIO / MANAGED PAGES SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-900" id="portfolio">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-emerald-500 rounded-full" />
            Pages I Manage
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {managedPages.map((page, index) => (
              <a key={index} href={page.link} target="_blank" rel="noopener noreferrer" className="block p-8 bg-gray-900/40 border border-gray-800 rounded-3xl hover:border-emerald-500/50 hover:bg-gray-900 transition-all group relative overflow-hidden">
                <div className="absolute top-8 right-8 text-gray-700 group-hover:text-emerald-500 transition-colors">
                  <ExternalLink size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 pr-10">{page.name}</h3>
                <p className="text-sm font-medium text-emerald-500 mb-4">{page.platforms}</p>
                <p className="text-gray-400 leading-relaxed">{page.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-900" id="experience">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-emerald-500 rounded-full" />
            Professional Experience
          </h2>
          
          <div className="space-y-8 border-l-2 border-gray-800 ml-4 pl-8 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-950 border-2 border-emerald-500 rounded-full group-hover:bg-emerald-500 transition-colors" />
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <h4 className="text-emerald-400 font-medium mb-2">{exp.company}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Mail size={14} className="hidden" /> {exp.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                </div>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-900" id="skills">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-emerald-500 rounded-full" />
            Core Competencies
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="px-5 py-2.5 bg-gray-900 border border-gray-800 text-gray-300 rounded-full text-sm font-medium hover:border-emerald-500 hover:text-emerald-400 cursor-default transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* EDUCATION & CONTACT SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-900" id="education">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-emerald-500 rounded-full" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-emerald-500/50 transition-colors">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <h4 className="text-emerald-400 mb-2">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mb-2">{edu.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT FORM */}
          <div id="contact">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-blue-500 rounded-full" />
              Get In Touch
            </h2>
            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-3xl">
              <form action="https://formspree.io/f/mojpkawb" method="POST" className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl focus:outline-none focus:border-emerald-500 text-white transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl focus:outline-none focus:border-emerald-500 text-white transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea name="message" rows={4} required className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl focus:outline-none focus:border-emerald-500 text-white transition-colors" placeholder="Let's build something together..."></textarea>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold rounded-xl transition-all active:scale-95">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col gap-4">
                <a href="mailto:nigunthanprignaselvam@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail size={18} /> nigunthanprignaselvam@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center border-t border-gray-900 text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Nigunthan Prignaselvam. All rights reserved.</p>
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
    platforms: "Facebook, Instagram, Twitter (X)",
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
    date: "01/2025 - Present",
    location: "Colombo, Sri Lanka",
    points:[
      "Improved revenue by 30%, generating additional $2.5 mln. through strategic sales initiatives.",
      "Build and maintain strong client relationships.",
      "Execute sales strategies that contribute to overall company success."
    ]
  },
  {
    role: "Social Media Manager (Part-Time)",
    company: "Ider (Private) limited",
    date: "2023 - Present",
    location: "Gampaha, Sri Lanka",
    points:[
      "Golf Essentials: Built an engaged golf community across Facebook, Instagram, and Twitter (X) in 01 Year, expanding audience reach."
    ]
  },
  {
    role: "Sales Executive",
    company: "Simplebooks (Pvt) Ltd",
    date: "01/2023 - 01/2025",
    location: "Colombo, Sri Lanka",
    points:[
      "Increased sales by 20% by executing innovative strategies surpassing targets.",
      "Customer Service Excellence: Passionate about delivering unparalleled customer experiences.",
      "Excel in developing and implementing customer-centric initiatives that enhance satisfaction, loyalty, and retention."
    ]
  },
  {
    role: "Retails Sales Executive",
    company: "Stelacom (Private) Limited",
    date: "11/2018 - 12/2022",
    location: "Colombo, Sri Lanka",
    points:[
      "Increased customer satisfaction and resolved inquiries and complaints professionally.",
      "Prepared daily/weekly sales reports as required by the management.",
      "Achieved Sales Champion Status 02 times."
    ]
  }
];

const skills =[
  "Social Media Analytics", "Content Marketing", "SEO", "Social Media Management", 
  "Community Building", "Facebook Ads", "CRM", "Social Media Insights", "Social Media Strategy"
];

const education =[
  {
    degree: "eMSc in Digital Marketing",
    school: "Cambridge College of Business and Management & Asia E University",
    date: "08/2024 - 12/2025"
  },
  {
    degree: "Diploma In Digital Marketing",
    school: "A.I.B Sri Lanka",
    date: "08/2022 - 12/2022"
  },
  {
    degree: "GCE Advanced Level",
    school: "Cambridge College",
    date: "2014 - 2016"
  },
  {
    degree: "GCE Ordinary Level",
    school: "Agarapatana Tamil Maha Vidyalayam",
    date: "2013"
  }
];
