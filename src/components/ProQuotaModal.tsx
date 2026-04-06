import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProQuotaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProQuotaModal({ isOpen, onClose }: ProQuotaModalProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [usage, setUsage] = useState('opt1');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setUsage('opt1');
      setIsSubmitting(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Fake loading for 1.5s
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-lg bg-[#131313]/90 backdrop-blur-2xl border border-outline-variant/20 rounded-3xl shadow-[0_0_60px_-15px_rgba(139,0,0,0.3)] overflow-hidden"
          >
            {/* Top Red Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-white hover:bg-surface-container rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,180,168,0.8)]"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Pro Compute</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-headline font-black text-white mb-3 tracking-tight">
                        {t('pricing.pro.modal.title')}
                      </h2>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {t('pricing.pro.modal.subtitle')}
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-white">
                          {t('pricing.pro.modal.email.label')} <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="cto@company.com"
                          className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-white placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-white">
                          {t('pricing.pro.modal.usage.label')} <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={usage}
                            onChange={(e) => setUsage(e.target.value)}
                            className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm appearance-none cursor-pointer"
                          >
                            <option value="opt1">{t('pricing.pro.modal.usage.opt1')}</option>
                            <option value="opt2">{t('pricing.pro.modal.usage.opt2')}</option>
                            <option value="opt3">{t('pricing.pro.modal.usage.opt3')}</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-on-surface-variant">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !email}
                        className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#8b0000] to-[#5a0000] text-white font-bold py-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(139,0,0,0.4)] mt-4"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              {t('pricing.pro.modal.btn.loading')}
                            </>
                          ) : (
                            t('pricing.pro.modal.btn.submit')
                          )}
                        </span>
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
                    className="flex flex-col items-center text-center py-6"
                  >
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full"></div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="relative w-24 h-24 bg-surface-container-low border border-green-500/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                      >
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-headline font-bold text-white mb-4">
                      {t('pricing.pro.modal.success.title')}
                    </h3>
                    
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {t('pricing.pro.modal.success.desc')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
