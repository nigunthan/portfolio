"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-white selection:text-black">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 border-b border-zinc-900 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="text-xl font-bold tracking-widest uppercase">Nigunthan</div>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Pages</a>
          <a href="#cv" className="hover:text-white transition-colors">CV</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 relative">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-7xl">
          <h2 className="text-zinc-500 tracking-[0.2em] uppercase text-sm md:text-base mb-6 ml-2">Digital Marketer & Sales Pro</h2>
          <h1 className="text-[14vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter uppercase text-white mb-8">
            Nigunthan<br />
            <span className="text-zinc-700">Prignaselvam</span>
          </h1>
          <p className="max-w-xl text-zinc-400 text-lg md:text-xl leading-relaxed ml-2">
            Based in Sri Lanka, combining strategic thinking with hands-on expertise to align marketing efforts with business goals.
          </p>
        </motion.div>
      </section>

      {/* WHO AM I (ABOUT) */}
      <section id="about" className="py-24 px-6 md:px-12 border-t border-zinc-900">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 sticky top-32">Who Am I?</h2>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight uppercase mb-12">
              Strategic Marketer <br/> & Sales Professional
            </h3>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-16 max-w-3xl">
              With over 3 years of experience, I specialize in developing digital strategies that boost brand visibility, customer engagement, and revenue growth. Whether driving community growth or executing innovative sales strategies, I treat every campaign as an opportunity to deliver measurable, impactful results.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-zinc-900">
              <div>
                <span className="block text-5xl md:text-6xl font-black text-white mb-2">03+</span>
                <span className="text-sm tracking-widest uppercase text-zinc-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-5xl md:text-6xl font-black text-white mb-2">30%</span>
                <span className="text-sm tracking-widest uppercase text-zinc-500">Revenue Growth</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block text-xl md:text-2xl font-bold text-white mb-2 leading-tight">Sales • SEO • Marketing</span>
                <span className="text-sm tracking-widest uppercase text-zinc-500">Core Focus</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BIG QUOTE DIVIDER */}
      <section className="py-32 px-6 md:px-12 border-t border-zinc-900 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            I don't just sell.<br/>
            <span className="text-zinc-600">I drive growth.</span>
          </h2>
          <p className="mt-8 text-xl text-zinc-500">Turning digital interactions into loyal communities and measurable revenue.</p>
        </motion.div>
      </section>

      {/* PAGES I MANAGE (WORK) */}
      <section id="work" className="py-24 px-6 md:px-12 border-t border-zinc-900">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 sticky top-32">Featured Pages</h2>
          </div>
          <div className="flex flex-col border-t border-zinc-900">
            {managedPages.map((page, index) => (
              <a key={index} href={page.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-zinc-900 hover:pl-8 transition-all duration-500">
                <div className="max-w-xl">
                  <h3 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-white group-hover:text-zinc-300 transition-colors">{page.name}</h3>
                  <p className="text-zinc-500 text-lg">{page.desc}</p>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-4 text-zinc-600 group-hover:text-white transition-colors">
                  <span className="uppercase tracking-widest text-sm font-semibold">{page.platforms}</span>
                  <ExternalLink size={28} />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROFESSIONAL HISTORY & CV */}
      <section id="cv" className="py-24 px-6 md:px-12 border-t border-zinc-900">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 sticky top-32">Curriculum Vitae</h2>
          </div>
          <div>
            {/* Experience */}
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-12">Professional History</h3>
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 border-b border-zinc-900 pb-16">
                  <div className="text-zinc-500 tracking-widest uppercase text-sm font-semibold">
                    {exp.date} <br/> {exp.company}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-6 uppercase">{exp.role}</h4>
                    <ul className="space-y-3 text-zinc-400 text-lg">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex gap-4">
                          <span className="text-zinc-700 mt-1">―</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <h3 className="text-2xl font-bold uppercase tracking-widest mt-24 mb-12">Education</h3>
            <div className="space-y-8 border-b border-zinc-900 pb-16">
              {education.map((edu, index) => (
                <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
                  <div className="text-zinc-500 tracking-widest uppercase text-sm font-semibold">{edu.date}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white uppercase">{edu.degree}</h4>
                    <p className="text-zinc-500">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <h3 className="text-2xl font-bold uppercase tracking-widest mt-24 mb-12">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <span key={index} className="px-6 py-3 border border-zinc-800 rounded-full text-zinc-300 text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* DOWNLOAD RESUME BANNER */}
      <a href="/resume.pdf" download="Nigunthan_Prignaselvam_CV.pdf" className="block w-full py-24 md:py-32 bg-white text-black text-center group transition-colors hover:bg-zinc-200">
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter flex items-center justify-center gap-4 md:gap-8">
          Download <span className="text-zinc-400">―</span> Resume
        </h2>
      </a>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-12 border-t border-zinc-900">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Get In Touch</h2>
          </div>
          <div>
            <h3 className="text-5xl md:text-7xl font-black uppercase mb-12">Let's Connect</h3>
            <p className="text-xl text-zinc-400 mb-16 max-w-2xl leading-relaxed">
              I'm always open to discussing new projects, sales strategies, or creative marketing ideas. Send me an email and let's build something great.
            </p>
            
            <a href="mailto:nigunthanprignaselvam@gmail.com" className="inline-flex items-center gap-4 text-2xl md:text-4xl font-bold border-b-2 border-white pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-all mb-16">
              nigunthanprignaselvam@gmail.com <ArrowRight size={32} />
            </a>

            <div className="flex gap-6">
              <Link href="https://www.linkedin.com/in/nigunthan/" target="_blank" className="p-4 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors">
                <LinkedinIcon size={24} />
              </Link>
              <Link href="https://facebook.com/nigunthan" target="_blank" className="p-4 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors">
                <FacebookIcon size={24} />
              </Link>
              <Link href="https://github.com/nigunthan" target="_blank" className="p-4 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors">
                <GithubIcon size={24} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-12 border-t border-zinc-900 text-zinc-600 text-sm font-semibold tracking-widest uppercase flex justify-between">
        <p>© {new Date().getFullYear()} Nigunthan</p>
        <p>All Rights Reserved</p>
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
    date: "01/2025 - Present",
    points:[
      "Improved revenue by 30%, generating additional $2.5 mln. through strategic sales initiatives.",
      "Build and maintain strong client relationships.",
      "Execute sales strategies that contribute to overall company success."
    ]
  },
  {
    role: "Social Media Manager",
    company: "Ider (Private) limited",
    date: "2023 - Present",
    points:[
      "Built an engaged golf community across Facebook, Instagram, and Twitter (X) in 01 Year, expanding audience reach.",
      "Managed digital presence for Golf Essentials."
    ]
  },
  {
    role: "Sales Executive",
    company: "Simplebooks (Pvt) Ltd",
    date: "01/2023 - 01/2025",
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
    points:[
      "Increased customer satisfaction and resolved inquiries and complaints professionally.",
      "Prepared daily/weekly sales reports as required by the management.",
      "Achieved Sales Champion Status 02 times."
    ]
  }
];

const skills =[
  "Social Media Analytics", "Content Marketing", "SEO", "Social Media Management", 
  "Community Building", "Facebook Ads", "CRM", "Social Media Insights", "Strategy"
];

const education =[
  {
    degree: "eMSc in Digital Marketing",
    school: "Cambridge College of Business and Management & Asia E University",
    date: "2024 - 2025"
  },
  {
    degree: "Diploma In Digital Marketing",
    school: "A.I.B Sri Lanka",
    date: "2022"
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
