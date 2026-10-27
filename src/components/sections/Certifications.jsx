import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiAward, 
  FiExternalLink, 
  FiCheckCircle, 
  FiShield, 
  FiDownload, 
  FiMaximize2, 
  FiX, 
  FiCpu,
  FiCalendar,
  FiUserCheck,
  FiKey
} from 'react-icons/fi';

// ==========================================
// TASK 1: DATA STRUCTURE (4 CERTIFICATIONS)
// ==========================================
const BASE = import.meta.env.BASE_URL;

const certificationsData = [
  {
    id: 'aws-cloud-ops',
    title: 'AWS Academy Graduate – Cloud Operations',
    issuer: 'Amazon Web Services (AWS)',
    date: '2025',
    credentialId: 'AWS-ACAD-892401',
    image: `${BASE}assets/certificates/aws-cloud-operations.webp`,
    pdfUrl: `${BASE}assets/certificates/aws-cloud-operations.pdf`,
    skills: ['AWS Cloud Operations', 'EC2 & VPC Architecture', 'CloudWatch Monitoring', 'IAM & Cloud Security'],
    status: 'ACTIVE & VERIFIED',
    type: 'Cloud Computing',
    accentColor: '#ff9900' // AWS Orange Accent
  },
  {
    id: 'cisco-ccna',
    title: 'CCNAv7 : Switching, Routing & Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    credentialId: 'CSCO-NET-773190',
    image: `${BASE}assets/certificates/cisco-network-security.webp`,
    pdfUrl: `${BASE}assets/certificates/cisco-network-security.pdf`,
    skills: ['Enterprise Networking', 'VLANs & Inter-VLAN Routing', 'DHCP/DNS & IPv6', 'Network Security'],
    status: 'ACTIVE & VERIFIED',
    type: 'Infrastructure & Networks',
    accentColor: '#00bceb' // Cisco Cyan Accent
  },
  {
    id: 'hashgraph-dev',
    title: 'Hashgraph Developer Course',
    issuer: 'The Hashgraph Association',
    date: '2025',
    credentialId: 'HBAR-DEV-554218',
    image: `${BASE}assets/certificates/hashgraph-developer-course.webp`,
    pdfUrl: `${BASE}assets/certificates/hashgraph-developer-course.pdf`,
    skills: ['Hedera Hashgraph DLT', 'Smart Contracts', 'Consensus Service', 'Decentralized Architecture'],
    status: 'ACTIVE & VERIFIED',
    type: 'Distributed Systems',
    accentColor: '#222222' // Hedera Monogram
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [imageErrorMap, setImageErrorMap] = useState({});

  const handleImageError = (id) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section 
      id="credentials" 
      className="relative pt-28 sm:pt-32 pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-[#070d1e] overflow-hidden select-none"
    >
      {/* ==================================================== */}
      {/* TASK 2: PURE CSS 3D PERSPECTIVE CYBER-VAULT FLOOR    */}
      {/* ==================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Horizon Nebula Ambient Spotlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-r from-accent-cyan/15 via-accent-blue/15 to-accent-violet/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-accent-cyan/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-accent-blue/10 blur-[120px] rounded-full" />

        {/* Cyber-Vault 3D Perspective Plane */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[650px] w-full"
          style={{
            perspective: '750px',
            perspectiveOrigin: '50% 25%'
          }}
        >
          {/* The Tilted Cyber Grid Floor */}
          <div 
            className="w-full h-[180%] origin-top opacity-35"
            style={{
              transform: 'rotateX(72deg) translateY(-80px)',
              backgroundImage: `
                linear-gradient(to right, rgba(0, 242, 254, 0.45) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 242, 254, 0.45) 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse 95% 70% at 50% 20%, black 15%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse 95% 70% at 50% 20%, black 15%, transparent 75%)'
            }}
          />

          {/* Glowing Laser Horizon Line */}
          <div className="absolute top-[28%] inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan/80 to-transparent shadow-[0_0_25px_#00f2fe]" />
          
          {/* Subtle Cyber Floor Vignette Shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-transparent to-transparent" />
        </div>

        {/* Ambient Top Vignette */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#070d1e] to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1450px] mx-auto">
        
        {/* ==================================================== */}
        {/* SECTION HEADER                                       */}
        {/* ==================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-medium mb-3 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <FiShield className="text-sm" />
            <span>05 // VERIFIED ACCREDITATIONS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            <span className="text-accent-cyan">05 // </span>CERTIFICATIONS &amp; CREDENTIALS
          </h2>
          
          <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
            Holographic vault of professional accreditations, cloud certifications, and verified infrastructure competencies.
          </p>
        </div>

        {/* ==================================================== */}
        {/* TASK 2 & 3: THE HOLOGRAPHIC VAULT BADGES (3 CARDS)   */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 sm:gap-8">
          {certificationsData.map((cert, index) => {
            const hasFailedImage = imageErrorMap[cert.id];

            return (
              <motion.div
                key={cert.id}
                // Continuous slow floating levitation (staggered period so cards move organically)
                animate={{
                  y: [-8, 8, -8]
                }}
                transition={{
                  duration: 5 + index * 0.7,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                // Task 3: Interactive hover scaling & holographic pause
                whileHover={{
                  scale: 1.04,
                  y: -12,
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                className="group relative aspect-[4/5] sm:aspect-square rounded-[2.5rem] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer
                           bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] ring-1 ring-white/10
                           hover:border-accent-cyan hover:ring-accent-cyan/50 hover:shadow-[0_0_35px_rgba(0,242,254,0.4),0_0_70px_rgba(0,242,254,0.2)]"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Holographic Specular Glare Effect on Hover */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-accent-cyan/0 via-accent-cyan/[0.05] to-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Corner Technical Registration Marks (+) */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-slate-600 group-hover:text-accent-cyan transition-colors select-none">+</div>
                <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-600 group-hover:text-accent-cyan transition-colors select-none">+</div>
                <div className="absolute bottom-4 left-4 text-[10px] font-mono text-slate-600 group-hover:text-accent-cyan transition-colors select-none">+</div>
                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-600 group-hover:text-accent-cyan transition-colors select-none">+</div>

                {/* Card Top: Issuer Tag & Status */}
                <div className="relative z-10 flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-accent-cyan/40 group-hover:text-accent-cyan transition-colors">
                    {cert.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Circular Holographic Badge Container */}
                <div className="relative z-10 my-4 flex items-center justify-center">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-space-950/90 border-2 border-accent-cyan/40 group-hover:border-accent-cyan flex items-center justify-center p-4 transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.15),inset_0_0_25px_rgba(0,242,254,0.15)] group-hover:shadow-[0_0_40px_rgba(0,242,254,0.4),inset_0_0_35px_rgba(0,242,254,0.3)]">
                    
                    {/* Concentric Hologram Rings */}
                    <div className="absolute inset-2 rounded-full border border-white/10 pointer-events-none group-hover:border-accent-cyan/30 transition-colors" />
                    <div className="absolute inset-5 rounded-full border border-dashed border-accent-cyan/20 pointer-events-none" />

                    {!hasFailedImage ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        onError={() => handleImageError(cert.id)}
                        className="w-full h-full object-contain rounded-2xl filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      /* Pure CSS Holographic Badge Fallback */
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-2 rounded-full bg-gradient-to-b from-space-900 to-space-950">
                        <div className="w-12 h-12 rounded-full bg-accent-cyan/15 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan text-2xl mb-1 shadow-[0_0_15px_rgba(0,242,254,0.4)]">
                          <FiAward />
                        </div>
                        <span className="text-[11px] font-bold text-white tracking-wide">{cert.issuer}</span>
                        <span className="text-[9px] font-mono text-accent-cyan">{cert.credentialId}</span>
                      </div>
                    )}

                    {/* Holographic Scanline Overlay */}
                    <div 
                      className="absolute inset-0 rounded-full pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 242, 254, 0.15) 0px, transparent 1px, transparent 3px)'
                      }}
                    />

                    {/* Quick Expand Icon on Hover */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="p-1 rounded-full bg-space-950/90 border border-accent-cyan/40 text-accent-cyan text-xs shadow-glow-cyan">
                        <FiMaximize2 />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Meta & Title */}
                <div className="relative z-10 mt-3 space-y-1.5">
                  <div className="text-[11px] font-mono text-accent-cyan font-semibold truncate">
                    {cert.issuer}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-accent-cyan transition-colors leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="text-[11px] font-mono text-slate-500 flex items-center justify-between pt-1 border-t border-white/5">
                    <span>ID: {cert.credentialId}</span>
                    <span className="text-emerald-400 font-medium">VERIFIED</span>
                  </div>
                </div>

                {/* Card Bottom: Interactive Action Pill */}
                <div className="relative z-10 mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors flex items-center gap-1.5">
                    <FiCheckCircle className="text-accent-cyan text-xs" />
                    <span>Inspect Hologram</span>
                  </span>

                  <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-accent-cyan group-hover:text-space-950 text-slate-400 transition-all duration-300">
                    <FiExternalLink className="text-xs" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Footer Telemetry Bar */}
        <div className="mt-16 p-4 rounded-2xl bg-space-950/70 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span>IMMUTABLE CREDENTIAL VAULT // SHARD_05</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <div>
              ISSUING AUTHORITIES: <span className="text-slate-200">AWS • CISCO • HEDERA • CNCF</span>
            </div>
            <div className="hidden md:inline">
              ENCRYPTION: <span className="text-emerald-400">SHA-256 VERIFIED</span>
            </div>
          </div>
        </div>

      </div>

      {/* ==================================================== */}
      {/* HOLOGRAPHIC DETAIL MODAL / LIGHTBOX                  */}
      {/* ==================================================== */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop Blur Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-space-950/80 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl rounded-3xl bg-[#070e24] border border-accent-cyan/50 shadow-[0_0_60px_rgba(0,242,254,0.3)] p-6 sm:p-8 overflow-hidden font-sans"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_8px_#00f2fe]" />
                  <span className="font-mono text-xs text-accent-cyan font-bold tracking-wider">
                    CREDENTIAL INSPECTION // {selectedCert.credentialId}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <FiX className="text-base" />
                </button>
              </div>

              {/* Modal Body Preview */}
              <div className="my-6">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-space-950 border border-white/10 flex items-center justify-center p-4 shadow-inner">
                  {!imageErrorMap[selectedCert.id] ? (
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  ) : (
                    <div className="text-center p-6 space-y-2">
                      <FiAward className="text-4xl text-accent-cyan mx-auto" />
                      <h4 className="text-lg font-bold text-white">{selectedCert.title}</h4>
                      <p className="text-xs font-mono text-accent-cyan">{selectedCert.issuer}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Metadata Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-sm font-mono text-accent-cyan mt-0.5">
                    Issued by {selectedCert.issuer} • Validated in {selectedCert.date}
                  </p>
                </div>

                {/* Skills tags */}
                <div>
                  <div className="text-[11px] font-mono text-slate-400 mb-2">VERIFIED DOMAINS &amp; COMPETENCIES:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                    <FiCheckCircle />
                    <span>STATUS: {selectedCert.status}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {selectedCert.pdfUrl && (
                      <a
                        href={selectedCert.pdfUrl}
                        download
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-mono transition-colors"
                      >
                        <FiDownload />
                        <span>Download PDF</span>
                      </a>
                    )}
                    {selectedCert.pdfUrl && (
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-cyan text-space-950 font-bold text-xs font-mono shadow-[0_0_15px_rgba(0,242,254,0.4)] hover:shadow-[0_0_25px_rgba(0,242,254,0.6)] transition-all"
                      >
                        <FiExternalLink />
                        <span>Open Official Document</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
