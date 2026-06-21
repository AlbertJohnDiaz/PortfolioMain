import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">AJ</span>
              </div>
              <span className="font-semibold text-white text-sm">Albert John C. Diaz</span>
            </div>
            <p className="text-xs text-slate-600">Computer Engineer · IoT Developer · Full Stack</p>
          </div>


          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: FiGithub, label: 'GitHub', href: 'https://github.com/AlbertJohnDiaz' },
              { icon: FiLinkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/albert-john-diaz-6a1b5832b/', href: 'https://www.linkedin.com/in/albert-john-diaz-6a1b5832b/' },
              { icon: FiMail, label: 'Email', value: 'diaz.albertjohn123@gmail.com', href: 'mailto:diaz.albertjohn123@gmail.com' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/8 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 pt-6 border-t border-white/4 text-center">
          <p className="text-xs text-slate-700">
            © {year} Albert John C. Diaz. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
