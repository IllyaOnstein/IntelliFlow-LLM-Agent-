import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  title?: string;
}

export default function WaitlistModal({ isOpen, onClose, onSuccess, title }: WaitlistModalProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [useCase, setUseCase] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [queueNumber, setQueueNumber] = useState<number | null>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setUseCase('');
      setIsSubmitting(false);
      setIsSuccess(false);
      setQueueNumber(null);
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
      // Generate random queue number between 800 and 1300
      setQueueNumber(Math.floor(Math.random() * 500) + 800);
      
      // Persist state
      localStorage.setItem('hasApplied', 'true');
      
      // Notify parent
      onSuccess();
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
                      <h2 className="text-2xl sm:text-3xl font-headline font-black text-white mb-3 tracking-tight">
                        {title || t('waitlist.title')}
                      </h2>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {t('waitlist.subtitle')}
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-white">
                          {t('waitlist.email.label')} <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t('waitlist.email.placeholder')}
                          className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-white placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-white">
                          {t('waitlist.usecase.label')}
                        </label>
                        <div className="relative">
                          <select
                            value={useCase}
                            onChange={(e) => setUseCase(e.target.value)}
                            className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm cursor-pointer"
                          >
                            <option value="" disabled className="text-on-surface-variant/50">Select an option...</option>
                            <option value="edu">{t('waitlist.usecase.opt1')}</option>
                            <option value="finance">{t('waitlist.usecase.opt2')}</option>
                            <option value="enterprise">{t('waitlist.usecase.opt3')}</option>
                            <option value="other">{t('waitlist.usecase.opt4')}</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !email}
                        className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#8b0000] to-[#5a0000] text-white font-bold py-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(139,0,0,0.4)]"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              {t('waitlist.btn.loading')}
                            </>
                          ) : (
                            t('waitlist.btn.submit')
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

                    <h3 className="text-2xl font-headline font-bold text-white mb-2">
                      {t('waitlist.success.title')}
                    </h3>
                    
                    <div className="my-6 p-4 bg-[#8b0000]/10 border border-[#8b0000]/20 rounded-2xl w-full">
                      <p className="text-on-surface-variant text-sm mb-1 uppercase tracking-wider font-bold">
                        {t('waitlist.success.queue').replace('#', '')}
                      </p>
                      <p className="text-4xl font-mono font-black text-primary tracking-tighter">
                        #{queueNumber?.toLocaleString()}
                      </p>
                    </div>

                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {t('waitlist.success.desc')}
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
