import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiMail, 
  FiArrowUpRight, 
  FiShield, 
  FiZap, 
  FiLayers, 
  FiServer, 
  FiSmartphone,
  FiCode
} from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const servicesList = [
  {
    title: 'Cloud Architecture & Migration',
    desc: 'Kubernetes, Knative, OpenStack, bare-metal & hybrid cloud setups.',
    icon: <FiServer className="text-accent-cyan text-lg" />
  },
  {
    title: 'DevOps & CI/CD Pipelines',
    desc: 'Automated Jenkins, Kaniko, Helm, Trivy scanning & GitOps workflows.',
    icon: <FiZap className="text-accent-blue text-lg" />
  },
  {
    title: 'Full-Stack Web Apps',
    desc: 'Enterprise Spring Boot microservices, React, Angular & secure APIs.',
    icon: <FiCode className="text-emerald-400 text-lg" />
  },
  {
    title: 'Mobile Application Development',
    desc: 'Cross-platform mobile applications & seamless backend synchronization.',
    icon: <FiSmartphone className="text-purple-400 text-lg" />
  }
];

const FreelanceCTA = () => {
  // Real data extracted from Adel's CV:
  const whatsappUrl = 'https://wa.me/21626315442'; // +216 26 315 442
  const linkedinUrl = 'https://linkedin.com/in/adel-bettaieb';
  const emailUrl = 'mailto:adelbettaieb97@gmail.com';

  return (
    <section id="consulting" className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Background Holographic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-accent-cyan/15 via-accent-blue/15 to-purple-900/10 blur-[180px] rounded-full" />
        
        {/* Subtle grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#00f2fe 1px, transparent 1px), linear-gradient(90deg, #00f2fe 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-[1450px] mx-auto">
        
        {/* Main High-Conversion Holographic Card */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-space-950/90 via-[#070e24]/90 to-space-950/90 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Top Edge Hologram Light Strip */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent shadow-[0_0_20px_#00f2fe]" />

          {/* Corner Registration Crosshairs */}
          <div className="absolute top-4 left-4 text-xs font-mono text-slate-700 select-none">+</div>
          <div className="absolute top-4 right-4 text-xs font-mono text-slate-700 select-none">+</div>
          <div className="absolute bottom-4 left-4 text-xs font-mono text-slate-700 select-none">+</div>
          <div className="absolute bottom-4 right-4 text-xs font-mono text-slate-700 select-none">+</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* ==================================================== */}
            {/* LEFT SIDE: THE HOLOGRAPHIC AVATAR PROJECTION        */}
            {/* ==================================================== */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              <div className="relative flex flex-col items-center">
                {/* Floating Avatar with Framer Motion Continuous Levitation */}
                <motion.div
                  animate={{
                    y: [-5, 5, -5]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2
                             bg-gradient-to-tr from-accent-cyan/20 via-white/5 to-transparent
                             ring-2 ring-accent-cyan/50 shadow-[0_0_35px_rgba(0,242,254,0.35)]
                             backdrop-blur-xl group transition-all"
                >
                  {/* Perfectly Circular Avatar Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-space-950">
                    <img
                      src="/assets/adel-bettaieb.jpg"
                      alt="Adel Bettaieb - Cloud & DevOps Engineer"
                      className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Hologram Scanner Scanline Overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-25"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 242, 254, 0.2) 0px, transparent 1px, transparent 4px)'
                      }}
                    />
                  </div>
                </motion.div>

                {/* Status HUD pill beneath the avatar */}
                <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-950/90 border border-white/10 font-mono text-xs text-slate-300 shadow-[0_0_20px_rgba(0,242,254,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-semibold">AVAILABLE FOR HIRE</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">PFE / FREELANCE</span>
                </div>

                {/* Subtle base glow */}
                <div className="w-44 h-4 bg-accent-cyan/20 blur-lg rounded-full mt-2" />
              </div>
            </div>

            {/* ==================================================== */}
            {/* RIGHT SIDE: THE PITCH, SERVICES & ACTION BUTTONS     */}
            {/* ==================================================== */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              
              {/* Header Titles */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-medium shadow-[0_0_15px_rgba(0,242,254,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>06 // COMMERCIAL ENGAGEMENTS</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  <span className="text-accent-cyan">06 // </span>FREELANCE &amp; CONSULTING
                </h2>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
                  Let's build scalable infrastructure, automated CI/CD pipelines, and high-performance applications together.
                </p>
              </div>

              {/* Services List with Glowing Checkmarks & Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {servicesList.map((service) => (
                  <div
                    key={service.title}
                    className="p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-accent-cyan/40 transition-colors flex items-start gap-3"
                  >
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex-shrink-0 mt-0.5">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{service.title}</span>
                        <FiCheckCircle className="text-emerald-400 text-xs flex-shrink-0" />
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* The 3 Highly Visible Glowing Action Buttons */}
              <div className="pt-2 space-y-3">
                <div className="text-xs font-mono text-slate-400">
                  DIRECT FAST TRANSMISSION CHANNELS:
                </div>

                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                  {/* 1. WhatsApp Button (Green Glow) */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl
                               bg-[#25D366] text-black font-bold text-sm font-mono tracking-wide
                               shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:shadow-[0_0_40px_rgba(37,211,102,0.7)]
                               hover:scale-[1.03] active:scale-95 transition-all duration-300"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>WhatsApp</span>
                    <FiArrowUpRight className="text-sm" />
                  </a>

                  {/* 2. LinkedIn Button (Blue Glow) */}
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl
                               bg-[#0077b5] text-white font-bold text-sm font-mono tracking-wide
                               shadow-[0_0_25px_rgba(0,119,181,0.45)] hover:shadow-[0_0_40px_rgba(79,172,254,0.7)]
                               hover:scale-[1.03] active:scale-95 transition-all duration-300"
                  >
                    <FaLinkedin className="text-lg" />
                    <span>LinkedIn</span>
                    <FiArrowUpRight className="text-sm" />
                  </a>

                  {/* 3. Email Button (Cyan Glow) */}
                  <a
                    href={emailUrl}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl
                               bg-accent-cyan text-space-950 font-bold text-sm font-mono tracking-wide
                               shadow-[0_0_25px_rgba(0,242,254,0.45)] hover:shadow-[0_0_40px_rgba(0,242,254,0.75)]
                               hover:scale-[1.03] active:scale-95 transition-all duration-300"
                  >
                    <FiMail className="text-lg" />
                    <span>Email Me</span>
                    <FiArrowUpRight className="text-sm" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FreelanceCTA;
