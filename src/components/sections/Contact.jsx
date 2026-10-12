import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import brandLogo from '../../assets/Gemini_Generated_Image_qh18hfqh18hfqh18.jpg';
import { 
  FiTerminal, 
  FiSend, 
  FiMail, 
  FiMapPin, 
  FiGlobe, 
  FiCpu, 
  FiCheckCircle, 
  FiActivity, 
  FiCopy, 
  FiCornerDownLeft, 
  FiRadio, 
  FiShield, 
  FiClock, 
  FiExternalLink,
  FiUser,
  FiMessageSquare,
  FiLayers
} from 'react-icons/fi';

// ==========================================
// PRE-FILLED RESUME DATA FOR COMMANDS
// ==========================================
const PORTFOLIO_DATA = {
  name: 'Adel Bettaieb',
  role: 'Ingénieur Cloud & DevOps',
  location: 'Djerba / Tunis, Tunisie',
  email: 'adelbettaieb97@gmail.com',
  phone: '+216 26 315 442',
  linkedin: 'https://linkedin.com/in/adel-bettaieb',
  github: 'https://github.com/Adelbett',
  skills: [
    'Kubernetes', 'Knative', 'Docker', 'Jenkins', 'Spring Boot', 'React',
    'Cilium CNI', 'MetalLB', 'Apache Kafka', 'Strimzi', 'Kaniko', 'OpenStack',
    'Ansible', 'Terraform', 'Prometheus', 'Grafana', 'Keycloak', 'PostgreSQL'
  ],
  experience: [
    {
      period: '01/2026 – 08/2026',
      company: 'NextStep IT',
      role: 'Cloud & DevOps Engineer (PFE)',
      desc: 'PlatformServerless: PaaS multi-tenant Cloud Native, Knative, Kubernetes, Cilium, Kafka.'
    },
    {
      period: '06/2025 – 08/2025',
      company: 'Sotunol',
      role: 'DevOps Engineer Intern',
      desc: 'Chaîne CI/CD automatisée, Jenkins, Docker, Kubernetes, Helm, Trivy, DevSecOps.'
    },
    {
      period: '07/2024 – 08/2024',
      company: 'ATU Duty Free',
      role: 'IT Infrastructure Engineer',
      desc: 'Administration Active Directory, haute disponibilité réseau, migration données.'
    },
    {
      period: '02/2023 – 06/2023',
      company: 'OCTA HUB',
      role: 'Web Developer Intern (PFE)',
      desc: 'Plateforme académique e-learning & analytics, Symfony, Ionic, MySQL.'
    },
    {
      period: '2026',
      company: 'Freelance',
      role: 'Full-Stack & Cloud Developer',
      desc: 'Atlasi Platform: SaaS commercial déployé sur VPS Contabo avec Docker Compose.'
    }
  ]
};

const INITIAL_LOGS = [
  { type: 'system', text: 'DEVOPS-CLI v4.2.0 [x86_64-pc-linux-gnu] • Adel Bettaieb Mission Control' },
  { type: 'system', text: 'Type "help" to display available commands or "mail" to send a transmission.' },
  { type: 'system', text: '───────────────────────────────────────────────────────────────────────' },
];

const Contact = () => {
  // Terminal state
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form mode state: null | 'name' | 'email' | 'message' | 'transmitting'
  const [formStep, setFormStep] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Clock state for Tunisia local time (UTC+1)
  const [tunisiaTime, setTunisiaTime] = useState('');

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Keep clock updated
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Tunisia is UTC+1 (CET)
      const options = {
        timeZone: 'Africa/Tunis',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTunisiaTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, formStep, isProcessing]);

  // Focus input on terminal click
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  // Execute standard CLI commands
  const handleCommandExecution = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Add to command history
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    // Push the command prompt log
    const newLogs = [...logs, { type: 'cmd', text: cmd }];

    const lower = cmd.toLowerCase();

    if (lower === 'help') {
      newLogs.push(
        { type: 'info', text: 'AVAILABLE COMMANDS:' },
        { type: 'output', text: '  skills       - Print core Cloud Native, DevOps & Full-Stack technologies' },
        { type: 'output', text: '  experience   - Display summary of professional engineering roles' },
        { type: 'output', text: '  contact      - Display direct contact channels & social links' },
        { type: 'output', text: '  mail         - Launch interactive transmission form (Send Message)' },
        { type: 'output', text: '  whoami       - Display current session authorization level' },
        { type: 'output', text: '  uptime       - Print cluster uptime & health diagnostics' },
        { type: 'output', text: '  clear        - Flush terminal screen' }
      );
    } else if (lower === 'skills') {
      newLogs.push(
        { type: 'info', text: 'CORE CLOUD & DEVOPS TECH STACK:' },
        { type: 'accent', text: '  • Cloud & Containerization : Kubernetes, Knative, Docker, containerd, OpenStack, AWS' },
        { type: 'accent', text: '  • CI/CD & Automation      : Jenkins, Kaniko, Helm, Trivy, Ansible, Terraform' },
        { type: 'accent', text: '  • Networking & Security   : Cilium CNI, MetalLB, Keycloak OIDC/RBAC, NetworkPolicies' },
        { type: 'accent', text: '  • Event Mesh & Messaging  : Apache Kafka, Strimzi Operator, CloudEvents' },
        { type: 'accent', text: '  • Observability           : Prometheus, Grafana, Alertmanager, Real-Time SSE' },
        { type: 'accent', text: '  • Backend & Development   : Java 21, Spring Boot, Spring Security, REST APIs' },
        { type: 'accent', text: '  • Frontend & Databases    : React, Angular, TypeScript, PostgreSQL, MySQL, Redis' }
      );
    } else if (lower === 'experience') {
      newLogs.push({ type: 'info', text: 'PROFESSIONAL CAREER TRACK:' });
      PORTFOLIO_DATA.experience.forEach((exp) => {
        newLogs.push(
          { type: 'success', text: `  [${exp.period}] ${exp.company} — ${exp.role}` },
          { type: 'output', text: `    └─ ${exp.desc}` }
        );
      });
    } else if (lower === 'contact') {
      newLogs.push(
        { type: 'info', text: 'DIRECT CONTACT CHANNELS:' },
        { type: 'output', text: `  • Full Name : ${PORTFOLIO_DATA.name}` },
        { type: 'output', text: `  • Role      : ${PORTFOLIO_DATA.role}` },
        { type: 'output', text: `  • Location  : ${PORTFOLIO_DATA.location}` },
        { type: 'accent', text: `  • Email     : ${PORTFOLIO_DATA.email}` },
        { type: 'output', text: `  • Phone     : ${PORTFOLIO_DATA.phone}` },
        { type: 'output', text: `  • LinkedIn  : ${PORTFOLIO_DATA.linkedin}` },
        { type: 'output', text: `  • GitHub    : ${PORTFOLIO_DATA.github}` },
        { type: 'system', text: '  Tip: Type "mail" to dispatch an instant encrypted transmission.' }
      );
    } else if (lower === 'mail' || lower === 'send' || lower === 'send message') {
      newLogs.push(
        { type: 'info', text: 'INITIALIZING INTERACTIVE TRANSMISSION PROTOCOL...' },
        { type: 'output', text: 'Please complete the sequential prompts. (Type "cancel" anytime to abort).' },
        { type: 'accent', text: '> Enter your name:' }
      );
      setFormStep('name');
      setFormData({ name: '', email: '', message: '' });
      setLogs(newLogs);
      setInputVal('');
      return;
    } else if (lower === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else if (lower === 'whoami') {
      newLogs.push(
        { type: 'output', text: 'USER: guest@internet-gateway' },
        { type: 'output', text: 'ACCESS_LEVEL: READ_COMMERCIAL' },
        { type: 'output', text: 'ENCRYPTION: TLS 1.3 / ECDHE-RSA-AES256-GCM-SHA384' }
      );
    } else if (lower === 'uptime') {
      newLogs.push(
        { type: 'success', text: 'CLUSTER: production-eu-central-1 (Tunisia Node Relay)' },
        { type: 'output', text: 'UPTIME: 99.98% (214 days, 16 hours, 42 minutes)' },
        { type: 'output', text: 'LOAD AVERAGE: 0.14, 0.22, 0.18' }
      );
    } else {
      newLogs.push({
        type: 'error',
        text: `zsh: command not found: "${cmd}". Type "help" to view allowed commands.`
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  // Handle Form Mode Step Progression
  const handleFormProgression = (text) => {
    const value = text.trim();

    if (value.toLowerCase() === 'cancel' || value.toLowerCase() === 'exit') {
      setLogs((prev) => [
        ...prev,
        { type: 'cmd', text: value },
        { type: 'error', text: 'Transmission protocol aborted by user.' }
      ]);
      setFormStep(null);
      setFormData({ name: '', email: '', message: '' });
      setInputVal('');
      return;
    }

    if (!value) return;

    if (formStep === 'name') {
      setFormData((prev) => ({ ...prev, name: value }));
      setLogs((prev) => [
        ...prev,
        { type: 'cmd', text: value },
        { type: 'output', text: `  ✓ Name saved: "${value}"` },
        { type: 'accent', text: '> Enter your email:' }
      ]);
      setFormStep('email');
      setInputVal('');
    } else if (formStep === 'email') {
      setFormData((prev) => ({ ...prev, email: value }));
      setLogs((prev) => [
        ...prev,
        { type: 'cmd', text: value },
        { type: 'output', text: `  ✓ Email saved: "${value}"` },
        { type: 'accent', text: '> Enter payload (message):' }
      ]);
      setFormStep('message');
      setInputVal('');
    } else if (formStep === 'message') {
      const finalMessage = value;
      const finalName = formData.name;
      const finalEmail = formData.email;

      setLogs((prev) => [
        ...prev,
        { type: 'cmd', text: value },
        { type: 'info', text: 'Packaging encrypted transmission payload...' },
        { type: 'system', text: '[DEPLOY] Connecting to adel@devops-cluster message gateway...' }
      ]);
      setFormStep('transmitting');
      setIsProcessing(true);
      setInputVal('');

      // Simulate deployment loading progress
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { type: 'output', text: '[████████░░░░░░░░░░░░░░░░] 25% Establishing mTLS socket...' }
        ]);
      }, 500);

      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { type: 'output', text: '[████████████████░░░░░░░░] 60% Verifying SPF & DKIM signatures...' }
        ]);
      }, 1000);

      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { type: 'output', text: '[████████████████████████] 100% Finalizing payload delivery...' }
        ]);
      }, 1500);

      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { type: 'success', text: `[SUCCESS] Payload delivered to Adel's server.` },
          { type: 'success', text: `  TRANSMISSION RECEIPT: #MSG-${Math.floor(1000 + Math.random() * 9000)}-TUNISIA` },
          { type: 'output', text: `  Sender : ${finalName} <${finalEmail}>` },
          { type: 'output', text: `  Payload: "${finalMessage}"` },
          { type: 'info', text: `Adel will review your message and reply to ${finalEmail} promptly.` },
          { type: 'system', text: 'Terminal returned to standard shell mode. Type "help" for options.' }
        ]);
        setFormStep(null);
        setIsProcessing(false);
        setFormData({ name: '', email: '', message: '' });
      }, 2100);
    }
  };

  // Key Down Handler (Enter, Arrow Up/Down)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (formStep) {
        handleFormProgression(inputVal);
      } else {
        handleCommandExecution(inputVal);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!formStep && commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!formStep && historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  // Helper quick command triggers
  const executeHelper = (cmd) => {
    if (formStep && cmd !== 'cancel') return;
    setInputVal('');
    if (cmd === 'mail') {
      handleCommandExecution('mail');
    } else {
      handleCommandExecution(cmd);
    }
    inputRef.current?.focus();
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#020712] overflow-hidden select-none"
    >
      {/* Background Cybernetic Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-accent-cyan/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[450px] bg-accent-blue/10 blur-[140px] rounded-full" />
        
        {/* Subtle grid floor mesh */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#00f2fe 1px, transparent 1px), linear-gradient(90deg, #00f2fe 1px, transparent 1px)`,
            backgroundSize: '48px 48px' 
          }} 
        />
      </div>

      <div className="max-w-[1450px] mx-auto">
        
        {/* ==================================================== */}
        {/* SECTION HEADER                                       */}
        {/* ==================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-medium mb-3 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <FiRadio className="text-sm animate-pulse" />
            <span>07 // COMMAND CENTER</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            <span className="text-accent-cyan">07 // </span>COMMAND CENTER &amp; DIRECT UPLINK
          </h2>
          
          <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
            Execute interactive shell commands to query credentials, engineering telemetry, or transmit secure messages directly to my node.
          </p>
        </div>

        {/* ==================================================== */}
        {/* STANDALONE CENTERED MASTER TERMINAL CONSOLE          */}
        {/* ==================================================== */}
        <div className="w-full max-w-4xl mx-auto flex flex-col">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full flex flex-col"
          >
            {/* Terminal Window Shell */}
            <div 
              onClick={handleTerminalClick}
              className="relative flex-1 flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900/90 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(0,242,254,0.15)] transition-all cursor-text min-h-[560px] lg:min-h-[600px]"
            >
              {/* CRT Scanline Overlay Effect */}
              <div 
                className="pointer-events-none absolute inset-0 z-20 opacity-[0.06] mix-blend-overlay" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.75) 50%)', 
                  backgroundSize: '100% 4px' 
                }} 
              />

              {/* Terminal Top Window Bar */}
              <div className="relative z-10 flex items-center justify-between px-5 py-3.5 bg-[#060c1d] border-b border-white/10 select-none">
                {/* Mac 3 Traffic Lights */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
                  <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <FiTerminal className="text-accent-cyan text-xs" />
                    <span>adel@devops-node:~$ /bin/zsh</span>
                  </span>
                </div>

                {/* Status Indicator & Clock */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="hidden sm:inline text-slate-400">TUNIS (UTC+1): {tunisiaTime || '14:24:00'}</span>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Terminal Logs & Output Screen */}
              <div className="relative z-10 flex-1 p-5 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-1.5 text-slate-300 max-h-[440px] scrollbar-thin scrollbar-thumb-space-700">
                {logs.map((log, index) => {
                  if (log.type === 'cmd') {
                    return (
                      <div key={index} className="flex items-start gap-2 pt-1 text-white">
                        <span className="text-accent-cyan select-none">guest@adel-node:~$</span>
                        <span className="text-accent-cyan font-bold drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]">
                          {log.text}
                        </span>
                      </div>
                    );
                  }

                  if (log.type === 'system') {
                    return (
                      <div key={index} className="text-slate-500 text-xs py-0.5">
                        {log.text}
                      </div>
                    );
                  }

                  if (log.type === 'info') {
                    return (
                      <div key={index} className="text-blue-300 font-semibold pt-1">
                        {log.text}
                      </div>
                    );
                  }

                  if (log.type === 'accent') {
                    return (
                      <div key={index} className="text-accent-cyan pl-2 leading-relaxed">
                        {log.text}
                      </div>
                    );
                  }

                  if (log.type === 'success') {
                    return (
                      <div key={index} className="text-emerald-400 font-medium pl-2 leading-relaxed">
                        {log.text}
                      </div>
                    );
                  }

                  if (log.type === 'error') {
                    return (
                      <div key={index} className="text-red-400 font-medium pl-2">
                        {log.text}
                      </div>
                    );
                  }

                  return (
                    <div key={index} className="text-slate-300 pl-2 leading-relaxed">
                      {log.text}
                    </div>
                  );
                })}

                {/* Active Interactive Prompt Line */}
                <div className="flex items-center gap-2 pt-2 text-white">
                  <span className="text-accent-cyan select-none whitespace-nowrap">
                    {formStep === 'name' && '> Enter your name:'}
                    {formStep === 'email' && '> Enter your email:'}
                    {formStep === 'message' && '> Enter payload (message):'}
                    {formStep === 'transmitting' && '> [TRANSMITTING]'}
                    {!formStep && 'guest@adel-node:~$'}
                  </span>
                  
                  {!isProcessing ? (
                    <div className="flex-1 flex items-center">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        spellCheck="false"
                        autoComplete="off"
                        className="w-full bg-transparent outline-none border-none text-white font-mono text-xs sm:text-sm p-0 m-0 caret-accent-cyan"
                        placeholder={formStep ? '' : 'Type "help", "skills", "contact", or "mail"...'}
                      />
                      <span className="inline-block w-2 h-4 bg-accent-cyan animate-pulse ml-0.5 select-none" />
                    </div>
                  ) : (
                    <span className="text-accent-cyan animate-pulse">Processing socket transmission...</span>
                  )}
                </div>

                <div ref={terminalEndRef} />
              </div>

              {/* Interactive Helper Commands Toolbar */}
              <div className="relative z-10 p-3.5 bg-[#050a18] border-t border-white/5 flex flex-wrap items-center justify-between gap-2 select-none">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] font-mono text-slate-500 mr-1 hidden sm:inline">
                    QUICK CMD:
                  </span>
                  {['help', 'skills', 'experience', 'contact', 'mail', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => executeHelper(cmd)}
                      disabled={isProcessing}
                      className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-accent-cyan/15 hover:border-accent-cyan/40 border border-white/5 text-slate-300 hover:text-accent-cyan font-mono text-xs transition-colors active:scale-95"
                    >
                      {cmd === 'mail' ? 'mail (form)' : cmd}
                    </button>
                  ))}
                </div>

                {/* Send Message Special Action Trigger */}
                <button
                  onClick={() => executeHelper('mail')}
                  disabled={isProcessing}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-space-950 font-mono text-xs font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all active:scale-95"
                >
                  <FiSend className="text-xs" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Direct Channel Badges Below Terminal */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-accent-cyan/10 border border-white/10 hover:border-accent-cyan/40 text-slate-300 hover:text-white transition-all flex items-center justify-between group shadow-glass"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <FiMail className="text-accent-cyan text-base shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">{PORTFOLIO_DATA.email}</span>
                </div>
                <FiExternalLink className="text-slate-500 group-hover:text-accent-cyan shrink-0 ml-2" />
              </a>

              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-accent-cyan/10 border border-white/10 hover:border-accent-cyan/40 text-slate-300 hover:text-white transition-all flex items-center justify-between group shadow-glass"
              >
                <div className="flex items-center gap-2.5">
                  <FiUser className="text-accent-blue text-base shrink-0 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn Profile</span>
                </div>
                <FiExternalLink className="text-slate-500 group-hover:text-accent-cyan shrink-0 ml-2" />
              </a>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-slate-300 flex items-center justify-between shadow-glass">
                <div className="flex items-center gap-2.5">
                  <FiMapPin className="text-emerald-400 text-base shrink-0" />
                  <span>Tunis / Djerba, TN</span>
                </div>
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  READY
                </span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Global Footer Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <img
              src={brandLogo}
              alt="Adel Bettaieb"
              className="w-8 h-8 rounded-lg object-contain border border-accent-cyan/40 shadow-glow-cyan hover:scale-105 transition-transform duration-300"
            />
            <span>
              Designed &amp; Engineered by <strong className="text-slate-300">Adel Bettaieb</strong>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>Tunis &amp; Djerba, Tunisie</span>
            <span>•</span>
            <span className="text-emerald-400">© 2026 Cloud &amp; DevOps Portfolio</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
