import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import { sendContactEmail, type ContactFormData } from '../utils/email';

const contactInfo = [
  { icon: FiPhone, label: 'Phone', value: '+63 919 927 7304', href: 'tel:+63XXXXXXXXXX' },
  { icon: FiMail, label: 'Email', value: 'diaz.albertjohn123@gmail.com', href: 'mailto:diaz.albertjohn123@gmail.com' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/albert-john-diaz-6a1b5832b/', href: 'https://www.linkedin.com/in/albert-john-diaz-6a1b5832b/' },
  { icon: FiMapPin, label: 'Location', value: 'Philippines', href: undefined },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    setError('');
    try {
      await sendContactEmail(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError('Failed to send. Please check your EmailJS configuration or try again.');
    }
  };

  const inputCls = `w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8 text-white placeholder-slate-600
                    focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all duration-200 text-sm`;

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="section-title gradient-text">Contact Me</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind, an opportunity to share, or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-1">Let's Connect</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                I'm currently open to full-time roles, freelance engagements, and collaboration on interesting projects.
              </p>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-medium uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm text-slate-300 hover:text-white transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-300">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <div>
                  <p className="text-sm font-semibold text-white">Available for Work</p>
                  <p className="text-xs text-slate-500 mt-0.5">Immediate start · Full-time or freelance</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <FiCheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Message Sent!</h4>
                    <p className="text-sm text-slate-500">Thank you for reaching out. I'll get back to you shortly.</p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-6 py-2.5 rounded-xl border border-white/10 text-sm text-slate-300 hover:text-white hover:border-white/20 transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5 font-medium">Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5 font-medium">Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5 font-medium">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5 font-medium">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/8 border border-red-500/20 text-red-400 text-xs">
                      <FiAlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="glow-btn w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                               bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm
                               shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:scale-[1.02]
                               disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {status === 'loading' ? (
                      <>
                        <FiLoader size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
