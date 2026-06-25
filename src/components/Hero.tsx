import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiUpload, FiBriefcase, FiCalendar } from 'react-icons/fi';
import { useTypingEffect } from '../hooks/useTypingEffect';
import profilePhoto from '../ProfilePicture.png';
import ustpLogo from '../ustp logo.jpg';
import columbiaLogo from '../ColumbiaLogo.png';

const titles = ['Computer Engineer', 'IoT Developer', 'Firmware Engineer', 'Full Stack Developer', 'Network Engineer'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

const education = [
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'University of Science and Technology of Southern Philippines',
    period: 'September 2022 – June 2026',
    honors: 'Dean\'s Lister (2022-2023)',
  },
];

const experience = [
  {
    role: 'Firmware & Software Engineering Intern',
    company: 'Columbia Computer Center Inc.',
    period: 'January 2026 – March 2026',
    highlights: [
      'Full-stack development with React + TypeScript + Node.js',
      'Database design and management with PostgreSQL',
      'Hardware diagnostics and computer and laptop repair',
      'Technical documentation and Agile workflow',
    ],
  },
];

export default function Hero() {
  const typedTitle = useTypingEffect(titles);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Hero row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left – text */}
          <div className="flex flex-col gap-6">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wider uppercase">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
              Hi, I'm <span className="gradient-text">Albert</span>
              <br />
              <span className="gradient-text">John C. Diaz</span>
            </motion.h1>

            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3 h-10">
              <span className="text-xl md:text-2xl font-semibold text-cyan-400 font-mono">
                I'm a {typedTitle}
                <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-0.5 animate-pulse" />
              </span>
            </motion.div>

            <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
             Computer Engineering graduate. I design and build embedded systems, IoT pipelines, full-stack applications, and networks. Architecting the physical world, rendering the digital one.
            </motion.p>

            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500
                           text-white font-medium text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5
                           text-white font-medium text-sm hover:border-blue-500/50 hover:bg-blue-500/10 hover:scale-105 transition-all duration-300"
              >
                <FiMail size={16} />
                Contact Me
              </button>
            </motion.div>

            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="flex gap-4 pt-2">
              {[
                { icon: FiGithub, label: 'GitHub', href: 'https://github.com/AlbertJohnDiaz' },
                { icon: FiLinkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/albert-john-diaz-6a1b5832b/', href: 'https://www.linkedin.com/in/albert-john-diaz-6a1b5832b/' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all">
                    <Icon size={16} />
                  </div>
                  {label}
                </a>
              ))}
            </motion.div>

            {/* Quick stats */}
            <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible" className="flex gap-6 pt-2">
              {[
                { value: '4+', label: 'Projects' },
                { value: '1', label: 'Internship' },
                { value: '4', label: 'Certifications' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold gradient-text">{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Animated glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-30 blur-xl animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 p-[2px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 glow-ring" />
              </div>

              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#050816] bg-white cursor-pointer group">
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Albert John C. Diaz"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-600 group-hover:text-slate-400 transition-colors">
                    <FiUpload size={32} />
                    <span className="text-xs text-center font-medium px-4">Click to upload<br />profile photo</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 shadow-xl shadow-black/40"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-white font-medium">Open to Work</span>
                </div>
              </motion.div>

              {/* Floating tech badge */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 glass-card px-4 py-2 shadow-xl shadow-black/40"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-300 font-mono">Firmware</span>
                </div>
              </motion.div>
              
              {/* Floating tech badge */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 shadow-xl shadow-black/40"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-300 font-mono">Networking</span>
                </div>
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 shadow-xl shadow-black/40"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-300 font-mono">Full-stack</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Education / Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6 hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <img src={ustpLogo} alt="USTP logo" className="h-full w-full object-contain p-1.5" />
              </div>
              <h3 className="font-semibold text-white">Education</h3>
            </div>
            {education.map((ed, i) => (
              <div key={i} className="relative pl-4 border-l border-blue-500/30">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500" />
                <p className="text-sm font-medium text-white">{ed.degree}</p>
                <p className="text-xs text-slate-500 mt-0.5">{ed.school}</p>
                <div className="flex items-center gap-2 mt-1">
                  <FiCalendar size={10} className="text-slate-600" />
                  <span className="text-xs text-slate-500">{ed.period}</span>
                </div>
                {ed.honors && (
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {ed.honors}
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <img src={columbiaLogo} alt="Columbia logo" className="h-full w-full object-contain p-1.5" />
              </div>
              <h3 className="font-semibold text-white">Experience</h3>
            </div>
            {experience.map((ex, i) => (
              <div key={i} className="relative pl-4 border-l border-cyan-500/30">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <p className="text-sm font-medium text-white">{ex.role}</p>
                <p className="text-xs text-cyan-400 mt-0.5">{ex.company}</p>
                <div className="flex items-center gap-2 mt-1 mb-2">
                  <FiCalendar size={10} className="text-slate-600" />
                  <span className="text-xs text-slate-500">{ex.period}</span>
                </div>
                <ul className="space-y-1">
                  {ex.highlights.slice(0, 4).map((h, j) => (
                    <li key={j} className="flex items-start gap-1.5 text-xs text-slate-500">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
