import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Architecture = () => {
  const videoRef = useRef(null);

  /* Auto-play when section enters viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.2 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="architecture"
      className="relative w-full overflow-hidden bg-space-950"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-accent-cyan/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-accent-blue/8 rounded-full blur-[160px]" />
      </div>

      {/* Top scanline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent z-20" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-14 xl:px-20 py-16 lg:py-20">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_rgba(0,242,254,0.8)]" />
          <span className="font-mono text-accent-cyan text-xs font-semibold tracking-widest uppercase">
            03 // Cloud Architecture &amp; Platform Serverless
          </span>
          <div className="flex items-center gap-1.5 ml-3 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-emerald-400 text-[11px] font-bold tracking-wider">LIVE</span>
          </div>
        </motion.div>

        {/* Video card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden
                     border border-white/10
                     shadow-[0_0_60px_rgba(0,242,254,0.10),0_30px_80px_rgba(0,0,0,0.7)]"
        >
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}assets/projects/platformserverless/PlatformServerless_System_Architecture.mp4`}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          />

          {/* Subtle inner vignette */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 8%, transparent 92%, rgba(0,0,0,0.12) 100%)`
            }}
          />
        </motion.div>

      </div>

      {/* Bottom scanline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent z-20" />
    </section>
  );
};

export default Architecture;
