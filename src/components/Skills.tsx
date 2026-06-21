import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiLayers, FiZap, FiUsers } from 'react-icons/fi';
import { skillCategories, type SkillCategory } from '../data/skills';

const iconMap: Record<string, React.ReactNode> = {
  cpu: <FiCpu size={20} />,
  code: <FiCode size={20} />,
  layers: <FiLayers size={20} />,
  bot: <FiZap size={20} />,
  users: <FiUsers size={20} />,
};

function SkillBadge({ name, delay }: { name: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/8 text-slate-300 text-sm font-medium
                 hover:border-blue-500/40 hover:bg-blue-500/8 hover:text-white transition-all duration-300 cursor-default"
    >
      {name}
    </motion.div>
  );
}

function CategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
          {iconMap[category.icon]}
        </div>
        <h3 className="font-semibold text-white">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <SkillBadge key={skill} name={skill} delay={index * 0.05 + i * 0.03} />
        ))}
      </div>
    </motion.div>
  );
}

const techIcons = ['ESP32', 'React', 'TS', 'Py', 'C++', 'Node', 'SQL', 'IoT'];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Floating tech icons background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {techIcons.map((icon, i) => (
          <motion.div
            key={icon}
            className="absolute text-xs font-mono text-white/4 select-none"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${15 + (i * 17) % 70}%`,
              fontSize: `${14 + (i % 4) * 4}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.03, 0.07, 0.03],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-wider uppercase mb-4">
            Expertise
          </span>
          <h2 className="section-title gradient-text">Skills & Technologies</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            From bare-metal firmware to cloud-connected full-stack applications — a broad technical toolkit for end-to-end solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {/* Skills cloud / marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 overflow-hidden"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-3 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/6 text-slate-500 text-xs font-medium whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
