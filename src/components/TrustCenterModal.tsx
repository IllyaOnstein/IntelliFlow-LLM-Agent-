import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Server, Lock, Eye, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TrustCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrustCenterModal({ isOpen, onClose }: TrustCenterModalProps) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#131313] border border-outline-variant/20 rounded-3xl shadow-[0_0_80px_-20px_rgba(139,0,0,0.4)] overflow-hidden flex flex-col"
          >
            {/* Top Red Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

            {/* Header */}
            <div className="flex-shrink-0 p-8 border-b border-outline-variant/10 bg-surface-container-lowest/50 backdrop-blur-md relative z-10 flex justify-between items-start">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Trust Center</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-black text-white mb-2 tracking-tight">
                  {t('trust.title')}
                </h2>
                <p className="text-lg text-on-surface-variant font-medium">
                  {t('trust.subtitle')}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-3 text-on-surface-variant hover:text-white hover:bg-surface-container rounded-full transition-colors bg-surface-container-low border border-outline-variant/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12">
              <div className="max-w-4xl mx-auto space-y-16">
                
                {/* Intro */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-xl leading-relaxed text-on-surface-variant border-l-4 border-primary pl-6">
                    {t('trust.intro')}
                  </p>
                </div>

                {/* Core 1 */}
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Server className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{t('trust.core1.title')}</h3>
                      <p className="text-on-surface-variant mt-1">{t('trust.core1.desc')}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        {t('trust.core1.p1.title')}
                      </h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t('trust.core1.p1.desc')}</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        {t('trust.core1.p2.title')}
                      </h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t('trust.core1.p2.desc')}</p>
                    </div>
                  </div>
                </section>

                {/* Core 2 */}
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{t('trust.core2.title')}</h3>
                      <p className="text-on-surface-variant mt-1">{t('trust.core2.desc')}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                      <h4 className="text-lg font-bold text-white mb-3">{t('trust.core2.p1.title')}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t('trust.core2.p1.desc')}</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                      <h4 className="text-lg font-bold text-white mb-3">{t('trust.core2.p2.title')}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t('trust.core2.p2.desc')}</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                      <h4 className="text-lg font-bold text-white mb-3">{t('trust.core2.p3.title')}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t('trust.core2.p3.desc')}</p>
                    </div>
                  </div>
                </section>

                {/* Core 3 */}
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{t('trust.core3.title')}</h3>
                      <p className="text-on-surface-variant mt-1">{t('trust.core3.desc')}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                      <h4 className="text-lg font-bold text-white mb-3">{t('trust.core3.p1.title')}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t('trust.core3.p1.desc')}</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                      <h4 className="text-lg font-bold text-white mb-3">{t('trust.core3.p2.title')}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t('trust.core3.p2.desc')}</p>
                    </div>
                  </div>
                </section>

                {/* Core 4 */}
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{t('trust.core4.title')}</h3>
                      <p className="text-on-surface-variant mt-1">{t('trust.core4.desc')}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                      <h4 className="text-lg font-bold text-white mb-3">{t('trust.core4.p1.title')}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t('trust.core4.p1.desc')}</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                      <h4 className="text-lg font-bold text-white mb-3">{t('trust.core4.p2.title')}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t('trust.core4.p2.desc')}</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                      <h4 className="text-lg font-bold text-white mb-3">{t('trust.core4.p3.title')}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t('trust.core4.p3.desc')}</p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
            
            {/* Bottom Gradient for scrolling cue */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#131313] to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
