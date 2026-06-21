import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiUpload, FiAward, FiExternalLink, FiX } from 'react-icons/fi';
import { certifications, educationalExposures } from '../data/certifications';

function CertCard({ cert, index, onOpen }: { cert: typeof certifications[0]; index: number; onOpen: (src: string, label: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass-card overflow-hidden hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
    >
      {/* Certificate image */}
      <button
        type="button"
        onClick={() => cert.image && onOpen(cert.image, cert.title)}
        className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-[#111827] to-[#0B1120] flex flex-col items-center justify-center gap-2 text-slate-600 group-hover:text-slate-400 transition-colors border-b border-white/5"
      >
        {cert.image ? (
          <img src={cert.image} alt={cert.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <>
            <FiUpload size={20} />
            <span className="text-xs font-medium">Upload Certificate</span>
          </>
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
      </button>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
            <FiAward size={16} className="text-blue-400" />
          </div>
          <span className="text-xs text-slate-600 font-mono">{cert.year}</span>
        </div>
        <h3 className="text-sm font-semibold text-white leading-tight mb-1.5">{cert.title}</h3>
        <p className="text-xs text-slate-500">{cert.organization}</p>

        <button
          type="button"
          onClick={() => cert.image && onOpen(cert.image, cert.title)}
          className="mt-4 flex items-center gap-1.5 text-xs text-blue-400 hover:text-cyan-400 font-medium transition-colors"
        >
          View Certificate <FiExternalLink size={11} />
        </button>
      </div>
    </motion.div>
  );
}

function ExposureCard({ cert, index }: { cert: typeof educationalExposures[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="glass-card p-5 hover:border-blue-500/15 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/8 group"
    >
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden`}>
          {cert.logo ? (
            <img src={cert.logo} alt={`${cert.organization} logo`} className="h-full w-full object-contain p-1.5" />
          ) : (
            <span className="text-white text-xs font-semibold">Logo</span>
          )}
        </div>
        <div>
          <p className="text-xs text-slate-600 font-mono mb-0.5">{cert.year}</p>
          <h3 className="text-sm font-semibold text-white leading-tight">{cert.title}</h3>
          <p className="text-xs text-slate-500 mt-1">{cert.organization}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null);

  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-blue-500/20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium tracking-wider uppercase mb-4">
            Credentials
          </span>
          <h2 className="section-title gradient-text-purple">Certifications</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Professional certifications and educational exposures that validate technical expertise and industry knowledge.
          </p>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} onOpen={(src, label) => setSelectedImage({ src, label })} />
          ))}
        </div>

        {/* Educational exposure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider px-3">Educational Exposure</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {educationalExposures.map((cert, i) => (
              <ExposureCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </motion.div>
      </div>

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
              aria-label="Close certificate preview"
            >
              <FiX size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950"
            >
              <img src={selectedImage.src} alt={selectedImage.label} className="max-h-[90vh] max-w-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
