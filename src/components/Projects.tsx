import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiUpload, FiArrowRight } from 'react-icons/fi';
import { projects, type Project } from '../data/projects';
import ProjectModal from './ProjectModal';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="glass-card overflow-hidden cursor-pointer group hover:border-blue-500/25 transition-all duration-400 hover:shadow-xl hover:shadow-blue-500/10"
    >
      {/* Image area */}
      <div className="relative bg-gradient-to-br from-[#111827] to-[#0B1120] border-b border-white/5 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        {project.images[0]?.uploaded ? (
          <div className="relative w-full overflow-hidden">
            <img
              src={project.images[0].uploaded}
              alt={`${project.title} preview`}
              className="w-full h-auto object-contain block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/10 to-transparent" />
          </div>
        ) : (
          <div className="flex h-44 items-center justify-center flex-col gap-2 text-slate-600 group-hover:text-slate-400 transition-colors">
            <FiUpload size={24} />
            <span className="text-xs font-medium">Upload Project Image</span>
          </div>
        )}

        {/* Gradient accent bar */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/15 font-medium">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-white mb-1 group-hover:gradient-text transition-all">
          {project.title}
        </h3>
        <p className="text-xs text-cyan-400 font-medium mb-3">{project.subtitle}</p>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.frameworks.slice(0, 4).map((f) => (
            <span key={f} className="text-xs px-2 py-0.5 rounded-md bg-white/4 text-slate-400 border border-white/6 font-mono">
              {f}
            </span>
          ))}
          {project.frameworks.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-white/4 text-slate-500 border border-white/6">
              +{project.frameworks.length - 4}
            </span>
          )}
        </div>

        <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-cyan-400 font-medium transition-colors group/btn">
          View Details
          <FiArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  return (
    <>
      <section id="projects" className="relative py-24 px-6">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wider uppercase mb-4">
              Portfolio
            </span>
            <h2 className="section-title gradient-text">Featured Projects</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              A collection of projects spanning embedded systems, IoT platforms, full-stack applications, and mobile development.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProjectId(project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {projects.map((project) => (
        selectedProjectId === project.id && (
          <ProjectModal
            key={project.id}
            project={project}
            onClose={() => setSelectedProjectId(null)}
          />
        )
      ))}
    </>
  );
}
