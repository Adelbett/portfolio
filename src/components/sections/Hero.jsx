import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight, FiShield, FiRefreshCw, FiBox, FiArrowDown } from 'react-icons/fi';
import { SiKubernetes } from 'react-icons/si';

const Hero = () => {
  // Parallax mouse interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const { clientWidth, clientHeight } = document.documentElement;
    const x = e.clientX / clientWidth - 0.5;
    const y = e.clientY / clientHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const featureCards = [
    {
      title: 'Cloud Native',
      subtitle: 'Architecture',
      icon: <FiBox className="text-accent-cyan text-xl group-hover:text-white transition-colors" />,
    },
    {
      title: 'Kubernetes',
      subtitle: 'Infrastructure',
      icon: <SiKubernetes className="text-accent-cyan text-xl group-hover:text-white transition-colors" />,
    },
    {
      title: 'DevOps',
      subtitle: 'Automation',
      icon: <FiRefreshCw className="text-accent-cyan text-xl group-hover:text-white transition-colors" />,
    },
    {
      title: 'Security',
      subtitle: '& Observability',
      icon: <FiShield className="text-accent-cyan text-xl group-hover:text-white transition-colors" />,
    },
  ];

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '8+', label: 'Technologies' },
    { value: '100%', label: 'Passion for Cloud' },
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-28 px-6 lg:px-14 xl:px-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[650px] bg-accent-violet/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute -bottom-20 right-1/3 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        
        {/* ========================================================= */}
        {/* COLONNE GAUCHE (5 colonnes) : TITRE, BOUTONS, CARDS, STATS */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-4">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-accent-cyan/30 shadow-[0_0_15px_rgba(0,242,254,0.15)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#00f2fe] animate-pulse" />
            <span className="text-accent-cyan text-xs font-bold tracking-widest uppercase">
              Cloud Native • Kubernetes • DevOps • Automation
            </span>
          </motion.div>

          {/* Main Title with high contrast vibrant gradient */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl sm:text-7xl xl:text-[84px] font-black tracking-tight leading-[1.05] mb-2"
          >
            <span className="text-white block">Adel</span>
            <span className="bg-gradient-to-r from-white via-accent-cyan via-[#38bdf8] to-[#80e5ff] bg-clip-text text-transparent block drop-shadow-[0_0_35px_rgba(0,242,254,0.45)]">
              Bettaieb
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-slate-200 mt-2 mb-4"
          >
            Cloud & DevOps Engineer
          </motion.h2>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mb-8"
          >
            Building Cloud Native platforms, Kubernetes infrastructures and automated DevOps systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-accent-cyan text-space-950 font-bold text-sm tracking-wide flex items-center gap-2 shadow-[0_0_25px_rgba(0,242,254,0.45)] hover:bg-white hover:shadow-[0_0_35px_rgba(0,242,254,0.8)] hover:scale-105 transition-all duration-300"
            >
              <span>Explore my work</span>
              <FiArrowRight className="text-base" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full glass-card text-white font-medium text-sm tracking-wide flex items-center gap-2 hover:border-accent-cyan/60 hover:text-accent-cyan hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] hover:scale-105 transition-all duration-300"
            >
              <span>Let's connect</span>
              <FiArrowUpRight className="text-base" />
            </a>
          </motion.div>

          {/* 4 Feature Cards (2x2 Grid) with micro-interactions & hover glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="grid grid-cols-2 gap-3.5 w-full max-w-lg mb-10"
          >
            {featureCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="glass-card p-3.5 flex items-center gap-3 border border-white/10 hover:border-accent-cyan/60 hover:bg-space-850/80 hover:shadow-[0_0_22px_rgba(0,242,254,0.25)] transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-space-900/80 border border-white/10 flex items-center justify-center group-hover:border-accent-cyan/70 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] group-hover:scale-110 transition-all duration-300">
                  {card.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-xs leading-tight group-hover:text-accent-cyan transition-colors">
                    {card.title}
                  </span>
                  <span className="text-slate-400 text-[11px] leading-tight group-hover:text-slate-300 transition-colors">
                    {card.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-4 gap-4 w-full max-w-lg pt-2 border-t border-white/5"
          >
            {stats.map((st, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue tracking-tight">
                  {st.value}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 leading-snug">
                  {st.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Scroll to Explore Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center gap-3 text-slate-400 text-xs cursor-pointer group hover:text-accent-cyan transition-colors"
          >
            <div className="w-7 h-10 rounded-full border border-white/20 group-hover:border-accent-cyan/60 flex items-center justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FiArrowDown className="text-accent-cyan text-sm" />
              </motion.div>
            </div>
            <span className="tracking-wide">Scroll to explore</span>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* COLONNE DROITE (7 colonnes) : 3D FLOATING CYBER ISLAND */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 relative flex items-center justify-center select-none perspective-[1200px]">
          
          <motion.div
            style={{
              rotateX,
              rotateY,
              x: translateX,
              y: translateY,
            }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              y: {
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="relative w-full max-w-[850px] flex items-center justify-center"
          >
            {/* Ambient Island Halo */}
            <div className="absolute inset-0 bg-radial from-accent-cyan/20 via-accent-blue/5 to-transparent rounded-full blur-[80px] pointer-events-none" />

            {/* The Master 3D Cyber Island Artwork */}
            <img
              src="/assets/hero-assets/hero-cyber-island.png"
              alt="Adel Bettaieb - Cloud & DevOps Cyber Infrastructure 3D Platform"
              className="w-full h-auto object-contain filter drop-shadow-[0_20px_50px_rgba(0,242,254,0.25)] relative z-10 transition-transform duration-500 hover:scale-[1.02]"
              draggable={false}
            />

            {/* Floating Cyber Particle Highlights */}
            <motion.div
              animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.15, 0.9] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_15px_#00f2fe] pointer-events-none z-20"
            />
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.25, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-accent-violet shadow-[0_0_15px_#8a2be2] pointer-events-none z-20"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-accent-blue shadow-[0_0_15px_#4facfe] pointer-events-none z-20"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
