import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  FiTerminal, 
  FiExternalLink, 
  FiGithub, 
  FiPlay, 
  FiLayers, 
  FiServer, 
  FiCheckCircle, 
  FiCpu, 
  FiFolder, 
  FiCode, 
  FiCopy, 
  FiRefreshCw, 
  FiShield, 
  FiActivity, 
  FiBox,
  FiCheck,
  FiZap,
  FiSliders,
  FiMaximize2
} from 'react-icons/fi';

const BASE = import.meta.env.BASE_URL;

// ==========================================
// TASK 1: PROJECT DATA STRUCTURE
// Enriched with real information from CV
// ==========================================
const projectsData = [
  {
    id: 'platform-serverless',
    title: 'PlatformServerless',
    type: 'PaaS Cloud Native',
    badge: 'PaaS & Event-Driven Serverless',
    period: '01/2026 – 08/2026 (PFE NextStep IT)',
    location: 'Tunis, Tunisie',
    image: null, // Tests the smart Code Terminal fallback!
    description: "Architecture orientée événements avec autoscaling jusqu'à zéro et isolation multi-tenant.",
    highlights: [
      'Orchestration serverless avec Knative (Serving & Eventing) sur cluster Kubernetes privé.',
      'Réseau SDN haute performance et sécurité eBPF avec Cilium CNI & équilibrage MetalLB.',
      'Architecture orientée événements avec Apache Kafka et Strimzi Operator.',
      'Isolation multi-tenant robuste : Authentification OIDC/OAuth2 Keycloak, RBAC & NetworkPolicies.',
      'Pipeline CI/CD in-cluster avec Jenkins, Kaniko et observabilité Prometheus / Alertmanager / Grafana.'
    ],
    tech: [
      'Kubernetes',
      'Knative',
      'Cilium',
      'Kafka',
      'Spring Boot'
    ],
    demoUrl: 'https://github.com/Adelbett/platform-serverless',
    repoUrl: 'https://github.com/Adelbett/platform-serverless',
    cliMeta: {
      host: 'knative-control-plane',
      target: 'cluster.local / ns: serverless-mesh',
      status: 'HEALTHY',
      runtime: 'containerd v1.7.13'
    },
    terminalLogs: [
      { text: '$ kubectl get nodes -o wide', type: 'cmd' },
      { text: 'NAME            STATUS   ROLES           AGE   VERSION   INTERNAL-IP', type: 'output' },
      { text: 'k8s-master-01   Ready    control-plane   42d   v1.29.2   [REDACTED]', type: 'success' },
      { text: 'k8s-worker-01   Ready    worker          42d   v1.29.2   [REDACTED]', type: 'success' },
      { text: 'k8s-worker-02   Ready    worker          42d   v1.29.2   [REDACTED]', type: 'success' },
      { text: '', type: 'output' },
      { text: '$ cilium status --brief', type: 'cmd' },
      { text: 'KVStore: Ok | Kubernetes: Ok | Cilium: Ok (v1.15.2, eBPF Host-Routing enabled)', type: 'info' },
      { text: 'NetworkPolicy enforcement: Strict multi-tenant namespace isolation [ACTIVE]', type: 'success' },
      { text: '', type: 'output' },
      { text: '$ kubectl get ksvc -n serverless-tenant-a', type: 'cmd' },
      { text: 'NAME                   URL                                            LATESTCREATED          READY   REASON', type: 'output' },
      { text: 'order-processor-func   https://order-func.serverless.nextstep.tn      order-func-00003-rev   True    ', type: 'accent' },
      { text: '', type: 'output' },
      { text: '[Knative Autoscaler] Scale-to-zero active: Target pods idling -> Scale down to 0 replicas [STANDBY]', type: 'info' },
      { text: '[Kafka Strimzi] Ingress CloudEvent received on topic "orders.v1" (partition 2, offset 8192)', type: 'accent' },
      { text: '[Knative Activator] Cold start triggered -> Pod scheduled and serving traffic in 680ms [OK]', type: 'success' },
      { text: 'Health Check /actuator/health status: 200 OK (Latency: 12ms) [READY]', type: 'success' }
    ]
  },
  {
    id: 'atlasi-platform',
    title: 'Atlasi Platform',
    type: 'Plateforme Freelance B2B',
    badge: 'Commercial Enterprise SaaS',
    period: '2026 (Projet Freelance)',
    location: 'Production VPS',
    image: `${BASE}assets/atlasi.png`, // Real image loaded from public/assets/atlasi.png
    description: "Conception et hébergement complet d'une plateforme web de gestion commerciale (B2B).",
    highlights: [
      'Assistant de configuration 3D/visuel avec estimation tarifaire interactive en temps réel.',
      'API REST Spring Boot sécurisée pour la gestion des prospects, devis et prise de rendez-vous.',
      'Module de géolocalisation pour interventions et installation sur site.',
      'Déploiement en production sur VPS Contabo avec Docker Compose, Nginx Reverse-Proxy & SSL Certbot.'
    ],
    tech: [
      'React',
      'Spring Boot',
      'PostgreSQL',
      'Contabo VPS'
    ],
    demoUrl: 'https://github.com/Adelbett',
    repoUrl: 'https://github.com/Adelbett',
    cliMeta: {
      host: 'vps.atlasi.pro',
      target: 'contabo-cloud-de / docker-compose',
      status: 'ONLINE',
      runtime: 'Docker Engine 26.0'
    },
    terminalLogs: [
      { text: '$ docker compose -f docker-compose.prod.yml ps', type: 'cmd' },
      { text: 'NAME                    IMAGE                      COMMAND                  SERVICE      STATUS', type: 'output' },
      { text: 'atlasi-nginx-gateway    nginx:alpine-slim          "/docker-entrypoint…"    nginx        Up (healthy) 443/tcp', type: 'success' },
      { text: 'atlasi-spring-backend   atlasi/backend:v2.4        "java -jar app.jar"      backend      Up (healthy) 8080/tcp', type: 'success' },
      { text: 'atlasi-postgres-db      postgres:16-alpine         "docker-entrypoint…"     database     Up (healthy) 5432/tcp', type: 'success' },
      { text: '', type: 'output' },
      { text: '[PostgreSQL] Connection pool established: HikariCP (pool-size: 20, max_lifetime: 30m)', type: 'info' },
      { text: '[Spring Boot 3.2] Started AtlasiApplication in 2.348 seconds (JVM running for 2.812s)', type: 'success' },
      { text: '[Nginx SSL] Certificate validity: valid until Dec 2026 (Let\'s Encrypt RSA 4096)', type: 'info' },
      { text: '[Commercial Engine] Multi-step quotation computed: €1,450.00 (Customer: ID #8491)', type: 'accent' },
      { text: 'HTTP 200 POST /api/v1/quotes/generate completed in 34ms [OK]', type: 'success' }
    ]
  },
  {
    id: 'farmmate',
    title: 'FarmMate',
    type: 'Infrastructure IaaS & Web',
    badge: 'Private IaaS & Container Cluster',
    period: '2024 – 2025 (ESPRIT)',
    location: 'ESPRIT Lab Cluster',
    image: null, // Demonstrates smart Code Terminal fallback!
    description: "Provisionnement d'une infrastructure IaaS privée OpenStack et conteneurisation d'application multi-tiers.",
    highlights: [
      'Provisionnement automatisé d’instances virtuelles et réseaux isolés sur OpenStack (Nova, Neutron).',
      'Déploiement d’un cluster Kubernetes bare-metal / VM via des playbooks Ansible idempotents.',
      'Architecture multi-tiers conteneurisée : backend REST Spring Boot et frontend SPA Angular.',
      'Mise en place de règles de sécurité strictes, isolation réseau et monitoring des charges système.'
    ],
    tech: [
      'OpenStack',
      'Kubernetes',
      'Angular',
      'Ansible'
    ],
    demoUrl: 'https://github.com/Adelbett/farmmate',
    repoUrl: 'https://github.com/Adelbett/farmmate',
    cliMeta: {
      host: 'openstack-controller-01',
      target: 'tenant: farmmate-prod / regionOne',
      status: 'PROVISIONED',
      runtime: 'OpenStack Yoga / Ansible 2.15'
    },
    terminalLogs: [
      { text: '$ openstack server list --project farmmate-prod', type: 'cmd' },
      { text: '> initializing OpenStack cluster... [OK]', type: 'info' },
      { text: 'ID                                     Name                   Status   Networks', type: 'output' },
      { text: '8f7a1c4b-[REDACTED]   farmmate-k8s-master    ACTIVE   farmmate-net=[REDACTED]', type: 'success' },
      { text: 'c2b4e891-[REDACTED]   farmmate-k8s-node-01   ACTIVE   farmmate-net=[REDACTED]', type: 'success' },
      { text: 'e5d3a987-[REDACTED]   farmmate-k8s-node-02   ACTIVE   farmmate-net=[REDACTED]', type: 'success' },
      { text: '', type: 'output' },
      { text: '$ ansible-playbook -i inventory/hosts provision-cluster.yml --tags k8s-security', type: 'cmd' },
      { text: 'PLAY [Hardening and Orchestrating FarmMate Cluster] *******************************', type: 'info' },
      { text: 'TASK [neutron : Apply Security Groups & Port Forwarding] ******* ok: [localhost]', type: 'success' },
      { text: 'TASK [k8s : Deploy Calico NetworkPolicy default-deny-ingress] *** changed: [master]', type: 'accent' },
      { text: 'TASK [k8s : Replicate Spring Boot API across 3 worker pods] **** ok: [master]', type: 'success' },
      { text: 'PLAY RECAP ************************************************************************', type: 'output' },
      { text: 'farmmate-k8s-master        : ok=14   changed=3    unreachable=0    failed=0', type: 'success' },
      { text: '> cluster health check: all pods RUNNING | load-balancer status: 200 OK [OK]', type: 'success' }
    ]
  },
  {
    id: 'studyland',
    title: 'StudyLand',
    type: 'E-Learning Platform',
    badge: 'Cross-Platform Academic Suite',
    period: '2024 (ESPRIT)',
    location: 'Multiplatform Client',
    image: null, // Demonstrates smart Code Terminal fallback!
    description: "Plateforme e-learning multiplateforme (Web, Mobile, Desktop).",
    highlights: [
      'Conception multiplateforme unifiée : Client Desktop JavaFX, Application Mobile Codename One, Web Symfony.',
      'Gestion centralisée des plannings, évaluations, présence et notes des étudiants.',
      'Base de données relationnelle MySQL optimisée pour la synchronisation multi-clients.',
      'Intégration d’un lecteur multimédia vidéo pour cours asynchrones et évaluations interactives.'
    ],
    tech: [
      'Java',
      'Symfony',
      'MySQL'
    ],
    demoUrl: 'https://github.com/Adelbett/studyland',
    repoUrl: 'https://github.com/Adelbett/studyland',
    cliMeta: {
      host: 'studyland-sync-node',
      target: 'Multi-Target (Desktop/Mobile/Web)',
      status: 'SYNCHRONIZED',
      runtime: 'OpenJDK 21 / Symfony 6'
    },
    terminalLogs: [
      { text: '$ studyland-cli status --all-clients', type: 'cmd' },
      { text: 'TARGET PLATFORM    RUNTIME             BUILD STATUS    SYNC CHANNEL', type: 'output' },
      { text: 'Desktop Client     JavaFX 21 SDK       READY           Active (Socket.IO)', type: 'success' },
      { text: 'Mobile Client      Codename One (iOS)  READY           Active (REST Polling)', type: 'success' },
      { text: 'Web Portal         Symfony 6.4 (PHP)   READY           Active (HTTP/2)', type: 'success' },
      { text: '', type: 'output' },
      { text: '[MySQL DB] Database connection pool healthy: 34 tables synced, InnoDB engine [OK]', type: 'info' },
      { text: '[Media Streamer] HLS chunk segmenting verified for Course #104 (Cloud Architecture)', type: 'accent' },
      { text: '[Sync Daemon] Multiplatform data parity verified across 250 active academic records', type: 'success' },
      { text: 'All StudyLand runtime endpoints operational [200 OK]', type: 'success' }
    ]
  },
  {
    id: 'blumaschool',
    title: 'Blumaschool',
    type: 'Gestion Académique',
    badge: 'Éducation & Présences',
    period: '02/2023 – 06/2023 (OCTA HUB)',
    location: 'Djerba, Tunisie',
    image: null, // Demonstrates smart Code Terminal fallback!
    description: "Application web et mobile pour l'éducation et la gestion des présences développée chez OCTA HUB.",
    highlights: [
      'Architecture cross-platform réactive développée avec Symfony et Ionic framework.',
      'Gestion centralisée et dynamique des présences, plannings de cours et évaluations des étudiants.',
      'APIs RESTful performantes et sécurisées pour la synchronisation fluide web & mobile.',
      'Tableaux de bord d’analyse dynamique des performances et suivi pédagogique temps réel.'
    ],
    tech: [
      'Symfony',
      'Ionic'
    ],
    demoUrl: 'https://github.com/Adelbett',
    repoUrl: 'https://github.com/Adelbett',
    cliMeta: {
      host: 'blumaschool-core',
      target: 'octahub / academic-net',
      status: 'ACTIVE',
      runtime: 'Symfony 6.4 / Ionic 7'
    },
    terminalLogs: [
      { text: '$ blumaschool-cli status --system', type: 'cmd' },
      { text: 'SERVICE              FRAMEWORK        STATUS    PORT', type: 'output' },
      { text: 'Academic API         Symfony 6.4      HEALTHY   443/https', type: 'success' },
      { text: 'Mobile Client (iOS)  Ionic Framework  HEALTHY   Native-Bridge', type: 'success' },
      { text: 'Database Relational  MySQL 8.0        ONLINE    3306/tcp', type: 'success' },
      { text: '', type: 'output' },
      { text: '[Attendance Module] Real-time student check-in validated for 1,200 active students', type: 'info' },
      { text: '[Analytics Engine] Dynamic performance dashboards synced with teaching faculty', type: 'accent' },
      { text: 'All academic micro-routes responding in <45ms [200 OK]', type: 'success' }
    ]
  }
];

// ==========================================
// SUB-COMPONENT: PURE CSS CODE TERMINAL FALLBACK
// (Smart rendering when project.image is NULL)
// ==========================================
const CodeTerminalFallback = ({ project }) => {
  const [copied, setCopied] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);
  const [visibleLogCount, setVisibleLogCount] = useState(project.terminalLogs.length);

  // Restart typing / log simulation
  const handleReplay = () => {
    setIsReplaying(true);
    setVisibleLogCount(1);
  };

  useEffect(() => {
    setVisibleLogCount(project.terminalLogs.length);
    setIsReplaying(false);
  }, [project.id]);

  useEffect(() => {
    if (!isReplaying) return;
    if (visibleLogCount < project.terminalLogs.length) {
      const timer = setTimeout(() => {
        setVisibleLogCount((prev) => prev + 1);
      }, 140);
      return () => clearTimeout(timer);
    } else {
      setIsReplaying(false);
    }
  }, [isReplaying, visibleLogCount, project.terminalLogs.length]);

  const handleCopyLogs = () => {
    const logText = project.terminalLogs.map((l) => l.text).join('\n');
    navigator.clipboard?.writeText(logText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#030712]/95 shadow-[0_0_35px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col font-mono text-xs sm:text-sm">
      {/* Terminal Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#060c1d] border-b border-white/10 text-slate-400 select-none">
        <div className="flex items-center gap-2">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
          </div>
          <FiTerminal className="text-accent-cyan text-sm ml-1" />
          <span className="text-slate-300 font-semibold tracking-wide text-xs">
            {project.cliMeta.host}:~
          </span>
          <span className="hidden sm:inline text-slate-500 text-[11px]">
            [{project.cliMeta.target}]
          </span>
        </div>

        {/* Status Pills & Interactive Actions */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.cliMeta.status}
          </span>

          <button
            onClick={handleReplay}
            disabled={isReplaying}
            title="Re-run terminal diagnostic logs"
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-accent-cyan transition-colors"
          >
            <FiRefreshCw className={`text-xs ${isReplaying ? 'animate-spin text-accent-cyan' : ''}`} />
          </button>

          <button
            onClick={handleCopyLogs}
            title="Copy terminal output"
            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-xs"
          >
            {copied ? (
              <>
                <FiCheck className="text-emerald-400 text-xs" />
                <span className="text-[11px] text-emerald-400 font-medium">Copied</span>
              </>
            ) : (
              <>
                <FiCopy className="text-xs" />
                <span className="text-[11px] hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div className="p-4 sm:p-5 h-[290px] sm:h-[320px] overflow-y-auto space-y-1.5 text-slate-300 font-mono scrollbar-thin scrollbar-thumb-space-700">
        {/* Terminal Header Banner */}
        <div className="pb-2 mb-3 border-b border-white/5 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-accent-cyan font-bold">DEVOPS-CLI v3.4.1</span>
            <span className="text-slate-500"> • </span>
            <span>Runtime: {project.cliMeta.runtime}</span>
          </div>
          <div className="text-slate-500 text-[10px]">
            Session: #{project.id.toUpperCase()}-STABLE
          </div>
        </div>

        {/* Dynamic Log Lines */}
        {project.terminalLogs.slice(0, visibleLogCount).map((log, index) => {
          if (!log.text) {
            return <div key={index} className="h-1" />;
          }

          if (log.type === 'cmd') {
            return (
              <div key={index} className="flex items-start gap-2 text-slate-100 font-semibold pt-1">
                <span className="text-accent-cyan select-none">adel@{project.id}:~$</span>
                <span className="text-white">{log.text.replace(/^\$\s*/, '')}</span>
              </div>
            );
          }

          if (log.type === 'success') {
            return (
              <div key={index} className="text-emerald-400/90 pl-3 border-l-2 border-emerald-500/40 text-xs sm:text-[13px] leading-relaxed">
                {log.text}
              </div>
            );
          }

          if (log.type === 'accent') {
            return (
              <div key={index} className="text-accent-cyan pl-3 border-l-2 border-accent-cyan/40 text-xs sm:text-[13px] leading-relaxed">
                {log.text}
              </div>
            );
          }

          if (log.type === 'info') {
            return (
              <div key={index} className="text-blue-300/80 pl-3 border-l-2 border-blue-500/30 text-xs sm:text-[13px] leading-relaxed">
                {log.text}
              </div>
            );
          }

          return (
            <div key={index} className="text-slate-400 pl-3 text-xs sm:text-[13px] leading-relaxed">
              {log.text}
            </div>
          );
        })}

        {/* Blinking CLI Cursor */}
        <div className="flex items-center gap-2 pt-2 text-slate-400 text-xs">
          <span className="text-accent-cyan select-none">adel@{project.id}:~$</span>
          <span className="w-2 h-4 bg-accent-cyan animate-pulse inline-block" />
        </div>
      </div>

      {/* Terminal Footer Indicator */}
      <div className="px-4 py-2 bg-[#050a18] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <FiActivity className="text-accent-cyan text-xs" />
          <span>Synthetic Live Output Stream</span>
        </div>
        <div className="font-mono text-slate-400">
          EXIT CODE: <span className="text-emerald-400 font-semibold">0</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT: PROJECTS SECTION
// ==========================================
const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);
  const [imageErrorMap, setImageErrorMap] = useState({});
  const [viewModeOverride, setViewModeOverride] = useState({}); // allows user to toggle CLI vs Image on any project

  const activeProject = projectsData.find((p) => p.id === activeProjectId) || projectsData[0];

  const handleImageError = (id) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  const toggleViewMode = (id) => {
    setViewModeOverride((prev) => ({
      ...prev,
      [id]: prev[id] === 'terminal' ? 'image' : 'terminal'
    }));
  };

  // Determine if we show image or terminal fallback
  // SMART CONDITIONAL LOGIC:
  // 1. If project has an image, and it hasn't errored out, and user hasn't explicitly toggled to terminal -> SHOW IMAGE.
  // 2. Otherwise -> RENDER PURE CSS CODE TERMINAL FALLBACK.
  const hasValidImage = activeProject.image && !imageErrorMap[activeProject.id];
  const currentView = viewModeOverride[activeProject.id] || (hasValidImage ? 'image' : 'terminal');
  const shouldRenderImage = hasValidImage && currentView === 'image';

  return (
    <section id="projects" className="relative pt-28 sm:pt-32 pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-accent-cyan/10 via-accent-blue/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-medium mb-3 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <FiFolder className="text-sm" />
            <span>04 // REPOSITORIES &amp; DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            <span className="text-accent-cyan">04 // </span>PROJECTS &amp; INFRASTRUCTURE
          </h2>
          <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
            Architectures Cloud Native, clusters Kubernetes, chaînes CI/CD automatisées et applications d’envergure conçues pour la haute disponibilité.
          </p>
        </div>

        {/* TASK 2: LARGE macOS-STYLE TERMINAL WINDOW (OUTER CONTAINER) */}
        <div className="relative rounded-3xl overflow-hidden bg-space-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all">
          
          {/* TOP BAR: Traffic lights + Title */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-[#070e22] border-b border-white/10 select-none">
            {/* macOS 3 Traffic Light Buttons */}
            <div className="flex items-center gap-2.5">
              <button 
                aria-label="Close"
                className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:brightness-110 shadow-[0_0_8px_rgba(255,95,86,0.6)] transition-all cursor-pointer" 
              />
              <button 
                aria-label="Minimize"
                className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:brightness-110 shadow-[0_0_8px_rgba(255,189,46,0.6)] transition-all cursor-pointer" 
              />
              <button 
                aria-label="Maximize"
                className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:brightness-110 shadow-[0_0_8px_rgba(39,201,63,0.6)] transition-all cursor-pointer" 
              />
              <span className="ml-3 hidden sm:inline text-xs font-mono text-slate-400 border-l border-white/10 pl-3">
                adel@devops-node: ~/portfolio/04-projects
              </span>
            </div>

            {/* Window Center Title */}
            <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-200 flex items-center gap-2">
              <FiCode className="text-accent-cyan text-sm hidden sm:inline" />
              <span>04 // PROJECTS &amp; REPOSITORIES</span>
            </div>

            {/* Right Status / Git Branch */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="hidden md:inline px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-accent-cyan text-[11px]">
                git:(main)
              </span>
              <span className="text-emerald-400 text-xs hidden sm:inline">● SYNCED</span>
            </div>
          </div>

          {/* BODY: SPLIT-SCREEN IDE INTERFACE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
            
            {/* ==================================================== */}
            {/* LEFT MENU: PROJECT SELECTOR (IDE EXPLORER PANE)       */}
            {/* ==================================================== */}
            <div className="lg:col-span-4 xl:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#040816]/90 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                {/* Explorer header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 font-mono text-xs text-slate-400 px-2">
                  <div className="flex items-center gap-2">
                    <FiLayers className="text-accent-cyan" />
                    <span className="font-semibold tracking-wider text-slate-300">EXPLORER // TARGETS</span>
                  </div>
                  <span className="text-[11px] bg-white/5 px-2 py-0.5 rounded text-slate-400">
                    5 PROJECTS
                  </span>
                </div>

                {/* TASK 4: MICRO-INTERACTIONS WITH LayoutGroup */}
                <LayoutGroup id="projects-sidebar">
                  <nav className="space-y-2">
                    {projectsData.map((project, idx) => {
                      const isActive = activeProjectId === project.id;
                      return (
                        <div
                          key={project.id}
                          onClick={() => setActiveProjectId(project.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setActiveProjectId(project.id);
                            }
                          }}
                          className={`group relative p-3.5 rounded-2xl cursor-pointer transition-all duration-300 select-none outline-none ${
                            isActive
                              ? 'border border-accent-cyan/50 shadow-[0_0_20px_rgba(0,242,254,0.18)] bg-gradient-to-r from-accent-cyan/10 via-space-850 to-transparent'
                              : 'border border-white/5 hover:border-accent-blue/30 hover:bg-white/[0.03] hover:shadow-[0_0_15px_rgba(79,172,254,0.1)]'
                          }`}
                        >
                          {/* Active sliding indicator background */}
                          {isActive && (
                            <motion.div
                              layoutId="active-project-glider"
                              className="absolute inset-0 rounded-2xl bg-accent-cyan/[0.08] pointer-events-none"
                              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                            />
                          )}

                          <div className="relative z-10 flex items-start justify-between gap-2">
                            <div className="flex items-start gap-3 min-w-0">
                              {/* Index / Status Icon */}
                              <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all ${
                                  isActive
                                    ? 'bg-accent-cyan text-space-950 shadow-[0_0_12px_rgba(0,242,254,0.6)]'
                                    : 'bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white'
                                }`}
                              >
                                {`0${idx + 1}`}
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <h3
                                    className={`text-sm font-bold truncate transition-colors ${
                                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                                    }`}
                                  >
                                    {project.title}
                                  </h3>
                                  {project.image && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" title="UI Screenshot Available" />
                                  )}
                                </div>

                                <p className="text-xs text-slate-400 truncate mt-0.5">
                                  {project.badge}
                                </p>
                              </div>
                            </div>

                            {/* Type Pill */}
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-full border whitespace-nowrap ${
                                isActive
                                  ? 'bg-accent-cyan/20 border-accent-cyan/40 text-accent-cyan'
                                  : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-slate-300'
                              }`}
                            >
                              {project.type}
                            </span>
                          </div>

                          {/* Quick Mini Tech Stack Line */}
                          <div className="relative z-10 mt-2.5 flex flex-wrap gap-1">
                            {project.tech.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-space-950/80 border border-white/5 text-slate-400"
                              >
                                {t}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-space-950/80 border border-white/5 text-slate-500">
                                +{project.tech.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </nav>
                </LayoutGroup>
              </div>

              {/* Sidebar bottom diagnostic box */}
              <div className="mt-4 p-3 rounded-xl bg-space-950/80 border border-white/5 font-mono text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-accent-cyan font-bold">KUBE-CTX</span>
                  <span className="text-emerald-400">production-eu-west</span>
                </div>
                <div className="text-[10px] text-slate-500">
                  Adel Bettaieb • Cloud &amp; DevOps Engineer
                </div>
              </div>
            </div>

            {/* ==================================================== */}
            {/* RIGHT CONTENT AREA: ACTIVE PROJECT SMART DETAILS     */}
            {/* ==================================================== */}
            <div className="lg:col-span-8 xl:col-span-8 p-5 sm:p-7 lg:p-9 bg-gradient-to-br from-space-900/90 via-space-950/90 to-[#020510] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  {/* ================================================== */}
                  {/* PART 1: HEADER & SPECS                             */}
                  {/* ================================================== */}
                  <div className="space-y-4">
                    {/* Top Row: Type Pill, Period & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-accent-cyan/15 border border-accent-cyan/40 text-accent-cyan text-xs font-mono font-semibold shadow-[0_0_12px_rgba(0,242,254,0.15)]">
                          {activeProject.type}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                          {activeProject.badge}
                        </span>
                      </div>

                      <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                        <span>{activeProject.period}</span>
                        <span>•</span>
                        <span className="text-slate-300">{activeProject.location}</span>
                      </div>
                    </div>

                    {/* Main Title & Action Buttons Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                          <span>{activeProject.title}</span>
                        </h3>
                        <p className="mt-1.5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                          {activeProject.description}
                        </p>
                      </div>

                      {/* TASK 3: TWO GLOWING BUTTONS ("Execute Project" & "View Repo") */}
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {/* Execute Project Button */}
                        <a
                          href={activeProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-cyan bg-[length:200%_auto] hover:bg-right text-space-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:shadow-[0_0_28px_rgba(0,242,254,0.6)] transition-all duration-300 active:scale-95"
                        >
                          <FiPlay className="text-space-950 fill-current text-xs" />
                          <span>Execute Project</span>
                        </a>

                        {/* View Repo Button */}
                        <a
                          href={activeProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-accent-cyan/50 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-glass hover:shadow-[0_0_15px_rgba(0,242,254,0.2)] transition-all duration-300 active:scale-95"
                        >
                          <FiGithub className="text-accent-cyan text-sm" />
                          <span>View Repo</span>
                        </a>
                      </div>
                    </div>

                    {/* CV Highlights Key Bullet Points */}
                    <div className="bg-space-950/60 rounded-xl p-3.5 border border-white/5 space-y-1.5">
                      <div className="text-[11px] font-mono text-accent-cyan font-bold tracking-wider uppercase mb-1">
                        Architecture &amp; Engineering Highlights (CV)
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                        {activeProject.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <FiCheckCircle className="text-accent-cyan text-xs mt-0.5 flex-shrink-0" />
                            <span className="leading-snug">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Glass Pills */}
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 mb-2 font-medium">
                        DEPLOYED STACK &amp; TOOLS:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/10 text-cyan-300 font-mono text-xs hover:border-accent-cyan/40 hover:bg-accent-cyan/10 hover:text-white transition-colors cursor-default"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ================================================== */}
                  {/* PART 2: VISUAL PREVIEW (THE SMART CONDITIONAL LOGIC) */}
                  {/* ================================================== */}
                  <div className="pt-2">
                    {/* Visual Preview Header with Smart Toggle */}
                    <div className="flex items-center justify-between mb-2.5 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="text-accent-cyan font-semibold">VIEWPORT:</span>
                        <span>
                          {shouldRenderImage ? 'Interactive Web Interface' : 'Pure CSS Code Terminal Fallback'}
                        </span>
                      </div>

                      {/* If project has an image, allow toggling between Screenshot and CLI logs */}
                      {hasValidImage && (
                        <button
                          onClick={() => toggleViewMode(activeProject.id)}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-accent-cyan border border-white/10 transition-colors text-[11px]"
                        >
                          <FiSliders className="text-xs" />
                          <span>
                            {currentView === 'image' ? 'Switch to CLI Logs' : 'Switch to UI Preview'}
                          </span>
                        </button>
                      )}
                    </div>

                    {/* SMART CONDITIONAL RENDERING */}
                    {shouldRenderImage ? (
                      /* ============================================== */
                      /* CONDITION 1: PROJECT.IMAGE EXISTS              */
                      /* Render <img> in a glowing glass container      */
                      /* ============================================== */
                      <div className="relative group rounded-2xl overflow-hidden border border-accent-cyan/40 bg-space-950/90 shadow-[0_0_35px_rgba(0,242,254,0.18)] transition-all">
                        {/* Browser Window Chrome */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-[#060c1d] border-b border-white/10 text-slate-400 select-none">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                            <span className="ml-2 text-xs font-mono text-slate-300 hidden sm:inline">
                              https://{activeProject.id}.prod.adelbettaieb.dev
                            </span>
                          </div>

                          <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>SSL VERIFIED (HTTPS)</span>
                          </div>
                        </div>

                        {/* Image Frame with glowing backdrop */}
                        <div className="relative aspect-[16/9] max-h-[340px] w-full overflow-hidden bg-space-950 flex items-center justify-center">
                          <img
                            src={activeProject.image}
                            alt={`${activeProject.title} Interface Preview`}
                            onError={() => handleImageError(activeProject.id)}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                          />

                          {/* Subtle holographic gradient shine */}
                          <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent pointer-events-none" />

                          {/* Hover floating quick action */}
                          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <a
                              href={activeProject.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-950/90 border border-accent-cyan/50 text-accent-cyan text-xs font-mono shadow-glow-cyan backdrop-blur-md"
                            >
                              <FiExternalLink />
                              <span>Open Live App</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ============================================== */
                      /* CONDITION 2: PROJECT.IMAGE IS NULL             */
                      /* Render pure CSS "Code Terminal" fallback       */
                      /* ============================================== */
                      <CodeTerminalFallback project={activeProject} />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
