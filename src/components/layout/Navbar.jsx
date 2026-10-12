import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import brandLogo from '../../assets/Gemini_Generated_Image_qh18hfqh18hfqh18.jpg';

const Navbar = () => {
  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Tech Stack', href: '#stack' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#credentials' },
    { label: 'Consulting', href: '#consulting' },
    { label: 'Command Center', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4 backdrop-blur-md bg-space-950/40 border-b border-white/5 transition-all">
      <div className="max-w-[1700px] mx-auto flex items-center justify-between">
        
        {/* Brand / Profile Monogram */}
        <a href="#hero" className="flex items-center gap-3.5 cursor-pointer group">
          <img
            src={brandLogo}
            alt="Adel Bettaieb"
            className="h-11 w-11 object-contain rounded-xl border border-accent-cyan/30 shadow-[0_0_15px_rgba(0,242,254,0.25)] hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]"
          />
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm tracking-wide group-hover:text-accent-cyan transition-colors">
              Adel Bettaieb
            </span>
            <span className="text-slate-400 text-xs font-normal">
              Cloud &amp; DevOps Engineer
            </span>
          </div>
        </a>

        {/* Navigation links (Desktop) with more breathing room */}
        <nav className="hidden xl:flex items-center gap-8 lg:gap-9">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-accent-cyan text-sm font-medium transition-colors duration-200 relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action: Download CV */}
        <div className="flex items-center">
          <a
            href="/assets/cv-adel-bettaieb.pdf"
            download="Adel_Bettaieb_CV.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-white text-xs font-semibold hover:border-accent-cyan/60 hover:text-accent-cyan hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all duration-300"
          >
            <span>Download CV</span>
            <FiDownload className="text-sm" />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
