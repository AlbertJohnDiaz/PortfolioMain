import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUpload } from 'react-icons/fi';
import type { Project } from '../data/projects';

interface Props {
  project: Project | null;
  onClose: () => void;
}

interface ImagePreviewBoxProps {
  label: string;
  src?: string;
  className?: string;
  onClick?: () => void;
}

function ImagePreviewBox({ label, src, className = '', onClick }: ImagePreviewBoxProps) {
  if (src) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`group relative w-full overflow-hidden rounded-2xl border border-white/8 bg-slate-900/60 ${className} ${onClick ? 'cursor-pointer' : ''}`}
      >
        <img src={src} alt={label} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-3 py-2">
          <span className="text-xs text-white/90 font-medium">{label}</span>
        </div>
      </button>
    );
  }

  return (
    <div className={`upload-container ${className}`}>
      <FiUpload size={24} className="text-slate-600" />
      <span className="text-xs text-center font-medium">{label}</span>
    </div>
  );
}

export default function ProjectModal({ project, onClose }: Props) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, selectedImage]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-6 lg:p-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-4xl bg-[#0B1120] border border-white/8 rounded-[24px] shadow-2xl shadow-black/60 my-auto"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/15 transition-all"
              aria-label="Close"
            >
              <FiX size={18} />
            </button>

            <div className="p-6 md:p-8">
              {/* Cover image */}
              <ImagePreviewBox
                label={project.images[0]?.label || 'Project Cover Image'}
                src={project.images[0]?.uploaded}
                className="mb-6 h-56 md:h-80"
                onClick={() => project.images[0]?.uploaded && setSelectedImage({ src: project.images[0].uploaded, label: project.images[0].label })}
              />

              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                <p className="text-cyan-400 font-medium mt-1">{project.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column */}
                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Project Overview</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.overview}</p>
                  </div>

                  {/* My Role */}
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">My Role</h3>
                    <p className="text-slate-300 text-sm font-medium">{project.role}</p>
                  </div>

                  {/* What I Did */}
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">What I Did</h3>
                    <ul className="space-y-2">
                      {project.whatIDid.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-cyan-400 mt-0.5 flex-shrink-0">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration */}
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Project Duration</h3>
                    <p className="text-slate-300 text-sm">{project.duration}</p>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  {/* Frameworks */}
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Frameworks & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.frameworks.map((f) => (
                        <span key={f} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/8 font-mono">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hardware */}
                  {project.hardware.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Hardware / Components</h3>
                      <ul className="space-y-1.5">
                        {project.hardware.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="text-blue-400 mt-0.5 flex-shrink-0">·</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Features */}
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Features</h3>
                    <ul className="space-y-1.5">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Solutions */}
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Challenges & Solutions</h3>
                    <div className="space-y-3">
                      {project.challenges.map((c, i) => (
                        <div key={i} className="glass-card p-3">
                          <p className="text-xs text-orange-400 font-medium mb-1">Challenge</p>
                          <p className="text-xs text-slate-400">{c}</p>
                          <p className="text-xs text-emerald-400 font-medium mt-2 mb-1">Solution</p>
                          <p className="text-xs text-slate-400">{project.solutions[i]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture diagram (only for projects that have one) */}
              {project.architectureImage?.uploaded && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Architecture Diagram</h3>
                  <ImagePreviewBox
                    label={project.architectureImage.label}
                    src={project.architectureImage.uploaded}
                    className="h-40"
                    onClick={() => project.architectureImage?.uploaded && setSelectedImage({ src: project.architectureImage.uploaded, label: project.architectureImage.label })}
                  />
                </div>
              )}

              {/* Gallery */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.gallery.map((img) => (
                    <ImagePreviewBox
                      key={img.id}
                      label={img.label}
                      src={img.uploaded}
                      className="h-28"
                      onClick={() => img.uploaded && setSelectedImage({ src: img.uploaded, label: img.label })}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15"
              aria-label="Close image preview"
            >
              <FiX size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.label} className="max-h-[90vh] max-w-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
