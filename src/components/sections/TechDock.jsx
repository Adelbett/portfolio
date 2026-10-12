import React from 'react';
import { motion } from 'framer-motion';

const techItems = [
  { name: 'React', icon: '/assets/technology-icons/react.svg', glow: 'hover:shadow-[0_0_15px_rgba(97,218,251,0.5)]' },
  { name: 'Spring Boot', icon: '/assets/technology-icons/springboot.svg', glow: 'hover:shadow-[0_0_15px_rgba(109,179,63,0.5)]' },
  { name: 'Kubernetes', icon: '/assets/technology-icons/kubernetes.svg', glow: 'hover:shadow-[0_0_15px_rgba(50,108,229,0.5)]' },
  { name: 'Kafka', icon: '/assets/technology-icons/apachekafka.svg', glow: 'hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]' },
  { name: 'Docker', icon: '/assets/technology-icons/docker.svg', glow: 'hover:shadow-[0_0_15px_rgba(36,150,237,0.5)]' },
  { name: 'Jenkins', icon: '/assets/technology-icons/jenkins.svg', glow: 'hover:shadow-[0_0_15px_rgba(211,56,51,0.5)]' },
  { name: 'Prometheus', icon: '/assets/technology-icons/prometheus.svg', glow: 'hover:shadow-[0_0_15px_rgba(230,82,44,0.5)]' },
  { name: 'Grafana', icon: '/assets/technology-icons/grafana.svg', glow: 'hover:shadow-[0_0_15px_rgba(244,104,36,0.5)]' },
  { name: 'Keycloak', icon: '/assets/technology-icons/keycloak.svg', glow: 'hover:shadow-[0_0_15px_rgba(0,184,212,0.5)]' },
  { name: 'Terraform', icon: '/assets/technology-icons/terraform.svg', glow: 'hover:shadow-[0_0_15px_rgba(132,79,186,0.5)]' },
];

const TechDock = () => {
  return (
    <div className="fixed bottom-6 inset-x-0 z-40 flex justify-center items-center pointer-events-none px-4">
      <motion.aside
        aria-label="Core Technology Dock"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pointer-events-auto w-full max-w-4xl"
      >
        <div className="glass-card px-4 sm:px-6 py-3 flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto no-scrollbar border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl bg-space-950/70 rounded-2xl">
          {techItems.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -6, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center min-w-[54px] sm:min-w-[58px] cursor-pointer group py-1 px-1.5 sm:px-2 rounded-xl transition-all duration-300 ${tech.glow}`}
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 group-hover:text-white transition-colors duration-200 tracking-tight whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.aside>
    </div>
  );
};

export default TechDock;
