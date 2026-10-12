import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FiTerminal, 
  FiCheckCircle, 
  FiGitCommit, 
  FiCalendar, 
  FiMapPin, 
  FiCpu, 
  FiLayers, 
  FiServer, 
  FiCode 
} from 'react-icons/fi';

const experiences = [
  {
    id: 'job-01',
    year: '2026',
    period: '01/2026 – 08/2026',
    stage: 'STAGE 01 // PRODUCTION PAAS CLOUD',
    jobId: 'DEPLOY_JOB #9824',
    title: 'Stagiaire Ingénieur Cloud & DevOps – PFE',
    company: 'NextStep IT',
    location: 'Tunis, Tunisie',
    theme: 'Cloud PaaS Architecture & Serverless',
    status: 'SUCCESS',
    exitCode: '0',
    duration: '0.42s',
    commit: 'a9f24c1',
    icon: <FiCpu className="text-accent-cyan text-lg" />,
    description: 'Conception et déploiement de PlatformServerless, une plateforme PaaS Cloud Native multi-tenant avec autoscaling et facturation Pay-as-You-Go.',
    summary: 'Conception et déploiement de PlatformServerless, une plateforme PaaS Cloud Native multi-tenant avec autoscaling et facturation Pay-as-You-Go.',
    terminalLogs: [
      'Provisioning on-prem Kubernetes cluster with Cilium CNI & MetalLB',
      'Configured Knative Serving (autoscaling & scale-to-zero) & Knative Eventing',
      'Engineered event mesh pipeline with Apache Kafka (Strimzi Operator)',
      'Automated CI/CD with Jenkins, Maven & in-cluster container builds via Kaniko',
      'Enforced enterprise multi-tenant security via Keycloak OIDC/RBAC & NetworkPolicies',
      'Deployed full-stack observability with Prometheus, Alertmanager & Grafana',
    ],
    skills: [
      'Kubernetes',
      'Knative',
      'Kafka',
      'Spring Boot',
      'React',
    ],
  },
  {
    id: 'job-02',
    year: '2025',
    period: '06/2025 – 08/2025',
    stage: 'STAGE 02 // CI/CD & DEVSECOPS PIPELINE',
    jobId: 'DEPLOY_JOB #8410',
    title: 'Stagiaire DevOps – CI/CD & Kubernetes',
    company: 'Sotunol',
    location: 'Tunis, Tunisie',
    theme: 'Chaîne CI/CD Automatisée & DevSecOps',
    status: 'SUCCESS',
    exitCode: '0',
    duration: '0.28s',
    commit: 'b7c82e0',
    icon: <FiLayers className="text-accent-blue text-lg" />,
    description: "Conception d'une chaîne CI/CD automatisée, analyse statique de sécurité (Trivy) et déploiement d'infrastructure de supervision.",
    summary: "Conception d'une chaîne CI/CD automatisée, analyse statique de sécurité (Trivy) et déploiement d'infrastructure de supervision.",
    terminalLogs: [
      'Automated end-to-end CI/CD build, test & deploy pipeline with Jenkins',
      'Implemented container image security scanning with Trivy (blocking critical CVEs)',
      'Packaged microservices into versioned, modular Helm Charts',
      'Orchestrated multi-environment container deployments on Kubernetes',
      'Configured cluster & application telemetry with Prometheus exporters & Grafana',
    ],
    skills: [
      'Jenkins',
      'Docker',
      'Helm',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    id: 'job-03',
    year: '2024',
    period: '07/2024 – 08/2024',
    stage: 'STAGE 03 // ENTERPRISE INFRASTRUCTURE',
    jobId: 'DEPLOY_JOB #7102',
    title: 'Ingénieur Infrastructure IT',
    company: 'ATU Duty Free',
    location: 'Djerba, Tunisie',
    theme: 'Administration Active Directory & Réseaux',
    status: 'SUCCESS',
    exitCode: '0',
    duration: '0.19s',
    commit: 'c4e10d9',
    icon: <FiServer className="text-accent-violet text-lg" />,
    description: 'Administration Active Directory, gestion des accès, support IT niveau 2/3 et maintenance réseau.',
    summary: 'Administration Active Directory, gestion des accès, support IT niveau 2/3 et maintenance réseau.',
    terminalLogs: [
      'Administered Windows Server directory services, Active Directory & Group Policies (GPO)',
      'Configured enterprise network segmentation, access rights & security permissions',
      'Monitored inter-department corporate network with proactive anomaly detection',
      'Maintained mission-critical POS point-of-sale systems and data migration tasks',
      'Delivered Level 2/3 technical support ensuring 99.9% service uptime',
    ],
    skills: [
      'Windows Server',
      'Active Directory',
      'Réseaux',
      'Support IT',
    ],
  },
  {
    id: 'job-04',
    year: '2023',
    period: '02/2023 – 06/2023',
    stage: 'STAGE 04 // FULL-STACK WEB DEVELOPMENT',
    jobId: 'DEPLOY_JOB #6045',
    title: 'Stagiaire Développeur Web – PFE',
    company: 'OCTA HUB',
    location: 'Djerba, Tunisie',
    theme: 'Full-Stack Web Development & Academic Platform',
    status: 'SUCCESS',
    exitCode: '0',
    duration: '0.15s',
    commit: 'd3a78f2',
    icon: <FiCode className="text-emerald-400 text-lg" />,
    description: 'Développement de Blumaschool, une plateforme web et mobile de gestion académique avec tableaux de bord analytiques.',
    summary: 'Développement de Blumaschool, une plateforme web et mobile de gestion académique avec tableaux de bord analytiques.',
    terminalLogs: [
      'Architected cross-platform responsive interface using Symfony & Ionic framework',
      'Engineered RESTful backend APIs for student, teacher & schedule management',
      'Designed relational database schema and queries with MySQL optimization',
      'Integrated dynamic analytics dashboards for course evaluation & tracking',
      'Ensured seamless cross-device mobile execution and responsive web UX',
    ],
    skills: [
      'Symfony',
      'Ionic',
      'JavaScript',
      'MySQL',
    ],
  },
];

const Experience = () => {
  const containerRef = useRef(null);

  // Scroll tracking for the glowing CI/CD pipeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 90%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="relative w-full py-20 lg:py-24 px-6 lg:px-14 xl:px-20 overflow-hidden bg-space-950/80"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-accent-cyan/10 rounded-full blur-[170px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-10 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1500px] mx-auto">
        
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
            <span>01 // DEPLOYMENT PIPELINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            <span className="text-accent-cyan">01 // </span>EXPERIENCE &amp; CI/CD PIPELINE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Tracing execution history of cloud architectures, automated deployments, and enterprise infrastructure jobs.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* THE CENTRAL CI/CD PIPELINE AXIS & NODES */}
        {/* ========================================================= */}
        <div className="relative w-full">
          
          {/* Static Background Rail with Glowing Hint */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-accent-cyan/20 shadow-[0_0_10px_rgba(0,242,254,0.3)] z-0" />

          {/* Dynamic Glowing CI/CD Pipeline (High-Intensity Cyan to Blue) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[3px] bg-gradient-to-b from-accent-cyan to-blue-600 shadow-[0_0_20px_rgba(0,242,254,0.6)] origin-top z-10"
          />

          {/* Experience Pipeline Jobs */}
          <div className="space-y-16 lg:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={exp.id}
                  className="relative flex flex-col md:flex-row items-center justify-between w-full"
                >
                  
                  {/* =================================================== */}
                  {/* CENTRAL NODE ON THE TIMELINE */}
                  {/* =================================================== */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-10 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20, delay: 0.15 }}
                      className="relative w-9 h-9 rounded-full bg-space-950 border-2 border-accent-cyan flex items-center justify-center shadow-[0_0_22px_rgba(0,242,254,0.8)] cursor-pointer group"
                    >
                      {/* Pulse Ring */}
                      <span className="absolute inset-0 rounded-full border border-accent-cyan/60 animate-ping opacity-60" />
                      
                      {/* Inner Glowing Core */}
                      <div className="w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_10px_#00f2fe] group-hover:scale-125 transition-transform" />
                      
                      {/* Year Tooltip Badge Above Node */}
                      <div className="hidden md:block absolute -top-7 px-2.5 py-0.5 rounded bg-space-900 border border-accent-cyan/30 text-[11px] font-mono font-bold text-accent-cyan shadow-[0_0_12px_rgba(0,242,254,0.3)] whitespace-nowrap">
                        {exp.year}
                      </div>
                    </motion.div>
                  </div>

                  {/* =================================================== */}
                  {/* HORIZONTAL GLOWING CONNECTOR LINES */}
                  {/* =================================================== */}
                  {/* Desktop connector (Left card: right-1/2 to card) */}
                  {isEven && (
                    <div className="hidden md:block absolute top-[58px] right-1/2 w-12 lg:w-16 h-[2px] bg-gradient-to-r from-accent-blue to-accent-cyan shadow-[0_0_12px_rgba(0,242,254,0.8)] z-10 pointer-events-none" />
                  )}

                  {/* Desktop connector (Right card: left-1/2 to card) */}
                  {!isEven && (
                    <div className="hidden md:block absolute top-[58px] left-1/2 w-12 lg:w-16 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-blue shadow-[0_0_12px_rgba(0,242,254,0.8)] z-10 pointer-events-none" />
                  )}

                  {/* Mobile connector (left-6 to card pl-16) */}
                  <div className="md:hidden absolute left-6 top-[58px] w-10 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-blue shadow-[0_0_10px_rgba(0,242,254,0.8)] z-10 pointer-events-none" />

                  {/* =================================================== */}
                  {/* DESKTOP LAYOUT: STAGGERED COLUMN */}
                  {/* =================================================== */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    
                    {/* =================================================== */}
                    {/* JOB CARD: TERMINAL & GLASSMORPHISM AESTHETIC */}
                    {/* =================================================== */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -6 }}
                      className="glass-card p-6 md:p-7 border border-white/10 hover:border-accent-cyan/60 hover:shadow-[0_0_35px_rgba(0,242,254,0.25)] transition-all duration-300 relative group overflow-hidden"
                    >
                      {/* Top Corner Glow on Hover */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-accent-cyan/5 rounded-full blur-2xl group-hover:bg-accent-cyan/20 transition-all pointer-events-none" />

                      {/* 1. Terminal Window Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/5 font-mono text-xs">
                        {/* Terminal Control Dots */}
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                          <span className="text-slate-400 font-semibold ml-1.5 flex items-center gap-1.5">
                            <FiTerminal className="text-accent-cyan" />
                            {exp.stage}
                          </span>
                        </div>

                        {/* Pipeline Status Green Badge */}
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-bold text-[11px] flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.35)]">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            STATUS: {exp.status}
                          </span>
                          <span className="text-slate-400 text-[11px] hidden sm:inline">
                            [{exp.duration}]
                          </span>
                        </div>
                      </div>

                      {/* 2. Job Title, Company & Meta */}
                      <div className="mb-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                            {exp.title}
                          </h3>
                          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 shadow-[0_0_10px_rgba(0,242,254,0.15)]">
                            {exp.year}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
                          <span className="text-slate-200 font-semibold text-sm">
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiMapPin className="text-accent-cyan" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiCalendar className="text-slate-400" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Theme / Stage Description */}
                      <div className="mb-3 inline-block px-3 py-1 rounded-lg bg-space-900/80 border border-white/5 text-xs text-slate-300 font-mono">
                        <span className="text-accent-cyan font-semibold">Stage Focus:</span> {exp.theme}
                      </div>

                      {/* Official Experience Description */}
                      <p className="mb-5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* 3. Terminal Execution Logs (Technical Achievements) */}
                      <div className="mb-6 p-4 rounded-xl bg-space-950/70 border border-white/5 font-mono text-xs text-slate-300 space-y-2.5 leading-relaxed">
                        <div className="text-slate-400 text-[11px] flex items-center justify-between border-b border-white/5 pb-1.5 mb-2">
                          <span>$ pipeline-exec --commit={exp.commit}</span>
                          <span className="text-emerald-400 font-bold">exit: {exp.exitCode}</span>
                        </div>
                        {exp.terminalLogs.map((log, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-accent-cyan font-bold select-none">&gt;</span>
                            <span className="text-slate-300">{log}</span>
                          </div>
                        ))}
                      </div>

                      {/* 4. Tech Stack Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-space-900 transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </motion.div>

                  </div>

                  {/* Spacer for the opposite side in desktop staggered layout */}
                  <div className={`hidden md:block w-full md:w-[45%] ${isEven ? 'md:order-2' : 'md:order-1'}`} />

                </div>
              );
            })}
          </div>

          {/* Pipeline Completion Termination Node */}
          <div className="relative flex justify-center mt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-space-950 border border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.35)] text-emerald-400 font-mono text-xs font-bold"
            >
              <FiCheckCircle className="text-base animate-pulse" />
              <span>PIPELINE EXECUTION: 100% COMPLETE // ALL 4 JOBS PASSED</span>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
