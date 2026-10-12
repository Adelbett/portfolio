import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCloud, 
  FiCpu, 
  FiDatabase, 
  FiLayout, 
  FiCheckCircle, 
  FiActivity, 
  FiServer,
  FiTerminal,
  FiBox,
  FiShield,
  FiLayers,
  FiSmartphone
} from 'react-icons/fi';
import { 
  SiKubernetes, 
  SiKnative, 
  SiCilium, 
  SiOpenstack, 
  SiContainerd, 
  SiLinux, 
  SiVmware, 
  SiJenkins, 
  SiTerraform, 
  SiAnsible, 
  SiHelm, 
  SiApachemaven, 
  SiGnubash, 
  SiPython, 
  SiSpringboot, 
  SiApachekafka, 
  SiPostgresql, 
  SiKeycloak, 
  SiPrometheus, 
  SiGrafana, 
  SiMysql, 
  SiMongodb, 
  SiFirebase, 
  SiSpring, 
  SiReact, 
  SiAngular, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript, 
  SiThreedotjs, 
  SiSymfony, 
  SiIonic, 
  SiFramer 
} from 'react-icons/si';
import { FaAws, FaDocker, FaJava } from 'react-icons/fa';

// Helper to return official technology icon for each skill
const getSkillIcon = (name) => {
  switch (name) {
    case 'Kubernetes': return <SiKubernetes className="text-accent-cyan" />;
    case 'Knative (Serving & Eventing)': return <SiKnative className="text-accent-cyan" />;
    case 'Cilium CNI (eBPF)': return <SiCilium className="text-accent-cyan" />;
    case 'MetalLB': return <FiLayers className="text-accent-cyan" />;
    case 'OpenStack': return <SiOpenstack className="text-accent-cyan" />;
    case 'AWS (Cloud Operations)': return <FaAws className="text-[#ff9900]" />;
    case 'containerd': return <SiContainerd className="text-accent-cyan" />;
    case 'Minikube': return <SiKubernetes className="text-accent-cyan" />;
    case 'Linux (Ubuntu, AlmaLinux)': return <SiLinux className="text-accent-cyan" />;
    case 'VMware & VirtualBox': return <SiVmware className="text-accent-cyan" />;
    case 'Jenkins': return <SiJenkins className="text-accent-blue" />;
    case 'Terraform': return <SiTerraform className="text-accent-blue" />;
    case 'Ansible': return <SiAnsible className="text-accent-blue" />;
    case 'Docker': return <FaDocker className="text-accent-blue" />;
    case 'Docker Hub': return <FaDocker className="text-accent-blue" />;
    case 'Helm Charts': return <SiHelm className="text-accent-blue" />;
    case 'Trivy (Vulnerability Scan)': return <FiShield className="text-accent-blue" />;
    case 'Kaniko (In-Cluster Build)': return <FiBox className="text-accent-blue" />;
    case 'Apache Maven': return <SiApachemaven className="text-accent-blue" />;
    case 'Bash Scripting': return <SiGnubash className="text-accent-blue" />;
    case 'Python': return <SiPython className="text-accent-blue" />;
    case 'Java 21': return <FaJava className="text-emerald-400" />;
    case 'Spring Boot': return <SiSpringboot className="text-emerald-400" />;
    case 'Apache Kafka': return <SiApachekafka className="text-emerald-400" />;
    case 'Strimzi Operator': return <SiApachekafka className="text-emerald-400" />;
    case 'PostgreSQL': return <SiPostgresql className="text-emerald-400" />;
    case 'Keycloak (OIDC/RBAC)': return <SiKeycloak className="text-emerald-400" />;
    case 'Prometheus': return <SiPrometheus className="text-emerald-400" />;
    case 'Grafana': return <SiGrafana className="text-emerald-400" />;
    case 'Alertmanager': return <FiActivity className="text-emerald-400" />;
    case 'MySQL': return <SiMysql className="text-emerald-400" />;
    case 'MongoDB': return <SiMongodb className="text-emerald-400" />;
    case 'Firebase': return <SiFirebase className="text-emerald-400" />;
    case 'Spring Data JPA': return <SiSpring className="text-emerald-400" />;
    case 'Fabric8 K8s Client': return <SiKubernetes className="text-emerald-400" />;
    case 'React': return <SiReact className="text-purple-400" />;
    case 'Angular': return <SiAngular className="text-purple-400" />;
    case 'TypeScript': return <SiTypescript className="text-purple-400" />;
    case 'Tailwind CSS': return <SiTailwindcss className="text-purple-400" />;
    case 'JavaScript (ES6+)': return <SiJavascript className="text-purple-400" />;
    case 'Three.js': return <SiThreedotjs className="text-purple-400" />;
    case 'Spline 3D': return <FiBox className="text-purple-400" />;
    case 'Symfony': return <SiSymfony className="text-purple-400" />;
    case 'Ionic': return <SiIonic className="text-purple-400" />;
    case 'Framer Motion': return <SiFramer className="text-purple-400" />;
    case 'JavaFX (Desktop)': return <FaJava className="text-purple-400" />;
    case 'Codename One': return <FiSmartphone className="text-purple-400" />;
    default: return <FiTerminal className="text-accent-cyan" />;
  }
};

// ==========================================
// SKILLS EXTRACTED DIRECTLY FROM ADEL'S CV
// ==========================================
const skillCategories = [
  {
    id: 'cloud-native',
    title: 'Cloud Native & Infra',
    subtitle: 'K8s, Virtualization & Mesh Networking',
    icon: <FiCloud className="text-xl text-accent-cyan" />,
    color: 'from-accent-cyan/20 via-space-850 to-transparent',
    borderColor: 'border-accent-cyan/30',
    glowColor: 'shadow-[0_0_30px_rgba(0,242,254,0.15)]',
    skills: [
      'Kubernetes',
      'Knative (Serving & Eventing)',
      'Cilium CNI (eBPF)',
      'MetalLB',
      'OpenStack',
      'AWS (Cloud Operations)',
      'containerd',
      'Minikube',
      'Linux (Ubuntu, AlmaLinux)',
      'VMware & VirtualBox'
    ]
  },
  {
    id: 'devops-automation',
    title: 'DevOps & Automation',
    subtitle: 'CI/CD Pipelines, IaC & DevSecOps',
    icon: <FiCpu className="text-xl text-accent-blue" />,
    color: 'from-accent-blue/20 via-space-850 to-transparent',
    borderColor: 'border-accent-blue/30',
    glowColor: 'shadow-[0_0_30px_rgba(79,172,254,0.15)]',
    skills: [
      'Jenkins',
      'Terraform',
      'Ansible',
      'Docker',
      'Docker Hub',
      'Helm Charts',
      'Trivy (Vulnerability Scan)',
      'Kaniko (In-Cluster Build)',
      'Apache Maven',
      'Bash Scripting',
      'Python'
    ]
  },
  {
    id: 'backend-data',
    title: 'Backend & Data',
    subtitle: 'Event-Driven, Security & Observability',
    icon: <FiDatabase className="text-xl text-emerald-400" />,
    color: 'from-emerald-500/20 via-space-850 to-transparent',
    borderColor: 'border-emerald-500/30',
    glowColor: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    skills: [
      'Java 21',
      'Spring Boot',
      'Apache Kafka',
      'Strimzi Operator',
      'PostgreSQL',
      'Keycloak (OIDC/RBAC)',
      'Prometheus',
      'Grafana',
      'Alertmanager',
      'MySQL',
      'MongoDB',
      'Firebase',
      'Spring Data JPA',
      'Fabric8 K8s Client'
    ]
  },
  {
    id: 'frontend-3d',
    title: 'Frontend & 3D',
    subtitle: 'Modern Web, Interactive UIs & 3D',
    icon: <FiLayout className="text-xl text-purple-400" />,
    color: 'from-purple-500/20 via-space-850 to-transparent',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'Three.js',
      'Spline 3D',
      'Symfony',
      'Ionic',
      'Framer Motion',
      'JavaFX (Desktop)',
      'Codename One'
    ]
  }
];

// Motion Variants for Staggered Pill Appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1
    }
  }
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 350, damping: 25 } 
  }
};

const Skills = () => {
  return (
    <section 
      id="stack" 
      className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Background Decorative Laser Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-accent-cyan/10 via-accent-blue/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1450px] mx-auto">
        
        {/* ==================================================== */}
        {/* SECTION HEADER                                       */}
        {/* ==================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-medium mb-3 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <FiTerminal className="text-sm" />
            <span>02 // CORE ENGINEERING NODES</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            <span className="text-accent-cyan">02 // </span>TECH STACK &amp; CORE SKILLS
          </h2>
          
          <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
            Technologies maîtrisées, plateformes cloud et outils industriels déployés en environnement de production réelle.
          </p>
        </div>

        {/* ==================================================== */}
        {/* FUTURISTIC TECH NODE GRID (4 GLOWING PANELS)         */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className={`relative rounded-3xl p-6 sm:p-8 bg-space-950/80 backdrop-blur-2xl border ${cat.borderColor} ${cat.glowColor} hover:border-accent-cyan/60 transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
            >
              {/* Subtle Corner Hologram Registration Crosshairs */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-700 select-none">+</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-700 select-none">+</div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-700 select-none">+</div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-700 select-none">+</div>

              {/* Panel Top Header Bar */}
              <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glass">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-accent-cyan transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-slate-400">
                  {`NODE_0${index + 1}`}
                </div>
              </div>

              {/* Glowing Neon Pills with Staggered Motion */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-2.5 sm:gap-3 py-2"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="inline-flex items-center gap-2 bg-accent-cyan/10 text-slate-200 border border-accent-cyan/30 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-mono font-medium shadow-[0_0_12px_rgba(0,242,254,0.1)] hover:bg-accent-cyan/20 hover:border-accent-cyan/60 hover:shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:text-white transition-all cursor-default select-none group/pill"
                  >
                    <span className="text-sm shrink-0 transition-transform group-hover/pill:scale-110">
                      {getSkillIcon(skill)}
                    </span>
                    <span>{skill}</span>
                  </motion.span>
                ))}
              </motion.div>

              {/* Panel Bottom Telemetry Line */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <FiActivity className="text-accent-cyan text-xs" />
                  <span>Production Ready</span>
                </div>
                <div className="text-slate-400">
                  STATUS: <span className="text-emerald-400">VERIFIED</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
