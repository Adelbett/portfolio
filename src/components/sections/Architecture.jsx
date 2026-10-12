import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiShield, 
  FiZap, 
  FiGlobe, 
  FiDatabase, 
  FiActivity, 
  FiCheckCircle, 
  FiServer, 
  FiArrowUpRight,
  FiCpu
} from 'react-icons/fi';
import { SiKubernetes, SiApachekafka } from 'react-icons/si';

const architectureCards = [
  {
    id: 'api-gateway',
    title: 'API Gateway',
    status: 'Active',
    metrics: 'Latency: 12ms',
    detail: 'Ingress routing & TLS SSL termination',
    icon: <FiGlobe className="text-accent-cyan text-lg" />,
    desktopPos: 'top-[5%] left-[13%]',
    floatConfig: { duration: 4.5, delay: 0, yOffset: 6 },
  },
  {
    id: 'security-gateway',
    title: 'Security Gateway',
    status: 'Active',
    metrics: 'Requests: 14.2k/sec',
    detail: 'Keycloak OIDC & Cilium NetworkPolicy',
    icon: <FiShield className="text-accent-cyan text-lg" />,
    desktopPos: 'top-[2%] left-[48%]',
    floatConfig: { duration: 5.2, delay: 0.4, yOffset: 7 },
  },
  {
    id: 'serverless-compute',
    title: 'Serverless Compute',
    status: 'Active',
    tech: 'Knative',
    metrics: 'Scale-to-zero: Active',
    detail: 'Cold-start: <200ms // Concurrency auto',
    icon: <FiZap className="text-accent-cyan text-lg" />,
    desktopPos: 'top-[33%] left-[17%]',
    floatConfig: { duration: 4.8, delay: 0.8, yOffset: 6 },
  },
  {
    id: 'k8s-cluster',
    title: 'Kubernetes (K8s) Cluster',
    status: 'Stable',
    metrics: '99.9% UpTime',
    detail: 'Requests/sec: 8.2k // Multi-tenant nodes',
    icon: <SiKubernetes className="text-accent-cyan text-lg" />,
    desktopPos: 'top-[22%] right-[5%]',
    floatConfig: { duration: 5.6, delay: 0.2, yOffset: 8 },
  },
  {
    id: 'data-pipeline',
    title: 'Data Pipeline',
    status: 'Active',
    tech: 'Apache Kafka',
    metrics: 'Event-driven triggers',
    detail: 'Strimzi operator & high throughput streaming',
    icon: <SiApachekafka className="text-accent-cyan text-lg" />,
    desktopPos: 'bottom-[18%] right-[14%]',
    floatConfig: { duration: 5.0, delay: 1.2, yOffset: 6 },
  },
  {
    id: 'database-storage',
    title: 'NoSQL DB & Storage',
    status: 'Active',
    tech: 'PostgreSQL & Redis',
    metrics: 'Requests/sec: 14.2k',
    detail: 'High availability persistence & low latency cache',
    icon: <FiDatabase className="text-accent-cyan text-lg" />,
    desktopPos: 'bottom-[18%] left-[15%]',
    floatConfig: { duration: 5.4, delay: 0.6, yOffset: 7 },
  },
];

const Architecture = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section 
      id="architecture" 
      className="relative w-full py-20 lg:py-24 px-6 lg:px-14 xl:px-20 overflow-hidden bg-space-950/70"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-accent-cyan/10 rounded-full blur-[170px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-accent-blue/10 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-violet/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-medium mb-3 shadow-[0_0_15px_rgba(0,242,254,0.15)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span>03 // DISTRIBUTED ARCHITECTURE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            <span className="text-accent-cyan">03 // </span>CLOUD ARCHITECTURE &amp; PLATFORM SERVERLESS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Event-driven, scale-to-zero microservices and asynchronous distributed mesh architecture engineered for enterprise scalability and high-availability workloads.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* CENTRAL CONTAINER: 3D ISOMETRIC GRAPHIC & HUD OVERLAYS */}
        {/* ========================================================= */}
        <div className="relative w-full rounded-3xl border border-white/10 bg-space-900/40 backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
          
          {/* Subtle grid mesh backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: `linear-gradient(#00f2fe 1px, transparent 1px), linear-gradient(90deg, #00f2fe 1px, transparent 1px)`,
              backgroundSize: '36px 36px' 
            }} 
          />

          {/* Top-right Status Pill from Reference Mockup */}
          <div className="hidden lg:flex absolute top-6 right-8 z-20 items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              STABLE
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-accent-cyan font-bold shadow-[0_0_12px_rgba(0,242,254,0.25)]">
              99.9% UpTime
            </span>
          </div>

          {/* Bottom-left Latency Telemetry Monitor */}
          <div className="hidden lg:flex absolute bottom-6 left-8 z-20 flex-col gap-1.5 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <FiActivity className="text-accent-cyan" />
              <span>Network Latency:</span>
              <span className="text-emerald-400 font-bold">12ms (Optimal)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
                STABLE
              </span>
              <span className="text-slate-400 text-[11px]">
                Coordinates: #070D1E // Multi-Cluster
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3D GRAPHIC CONTAINER */}
          {/* ========================================================= */}
          <div className="relative w-full flex items-center justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[1400px] flex items-center justify-center"
            >
              <img
                src="/assets/architecture-3d.png"
                alt="Cloud Architecture & Platform Serverless 3D Infrastructure"
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_60px_rgba(0,242,254,0.2)] select-none pointer-events-none"
              />

              {/* ========================================================= */}
              {/* TASK 2 & 3: DESKTOP FLOATING GLASSMORPHISM CARDS */}
              {/* ========================================================= */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none">
                {architectureCards.map((card) => {
                  const { duration, delay, yOffset } = card.floatConfig;

                  return (
                    <motion.div
                      key={card.id}
                      animate={{ y: [-yOffset, yOffset, -yOffset] }}
                      transition={{ 
                        duration, 
                        repeat: Infinity, 
                        ease: 'easeInOut', 
                        delay 
                      }}
                      className={`absolute ${card.desktopPos} z-20 pointer-events-auto`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -6 }}
                        onHoverStart={() => setActiveCard(card.id)}
                        onHoverEnd={() => setActiveCard(null)}
                        className="bg-space-950/85 backdrop-blur-xl border border-white/10 hover:border-accent-cyan/70 rounded-xl p-3.5 shadow-[0_0_20px_rgba(0,242,254,0.18)] hover:shadow-[0_0_35px_rgba(0,242,254,0.4)] transition-all duration-300 min-w-[210px] cursor-pointer group"
                      >
                        {/* Header: Title & Status Badge */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-space-900 border border-white/10 flex items-center justify-center group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_10px_rgba(0,242,254,0.3)] transition-all">
                              {card.icon}
                            </div>
                            <span className="text-white font-bold text-xs group-hover:text-accent-cyan transition-colors whitespace-nowrap">
                              {card.title}
                            </span>
                          </div>

                          <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold flex items-center gap-1 shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {card.status}
                          </span>
                        </div>

                        {/* Metric & Tech Highlights */}
                        <div className="font-mono text-[11px] text-slate-300 flex items-center justify-between mb-1">
                          <span className="text-accent-cyan font-semibold">{card.metrics}</span>
                          {card.tech && (
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-space-900 border border-white/10 text-slate-400">
                              {card.tech}
                            </span>
                          )}
                        </div>

                        {/* Detail text */}
                        <p className="text-[10px] text-slate-400 font-mono leading-tight group-hover:text-slate-300 transition-colors">
                          {card.detail}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

            </motion.div>

          </div>

          {/* ========================================================= */}
          {/* RESPONSIVE MOBILE / TABLET GRID (Under the Graphic) */}
          {/* ========================================================= */}
          <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {architectureCards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -4 }}
                className="bg-space-950/90 backdrop-blur-xl border border-white/10 hover:border-accent-cyan/60 rounded-xl p-4 shadow-[0_0_20px_rgba(0,242,254,0.15)] transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-space-900 border border-white/10 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <span className="text-white font-bold text-sm">
                      {card.title}
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[11px] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {card.status}
                  </span>
                </div>

                <div className="font-mono text-xs text-accent-cyan mb-1">
                  {card.metrics}
                </div>

                <p className="text-xs text-slate-400 font-mono">
                  {card.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Architecture;
