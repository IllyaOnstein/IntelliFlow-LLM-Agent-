import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Clock, Map } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RoadmapModal({ isOpen, onClose }: RoadmapModalProps) {
  const { t } = useLanguage();

  const roadmapItems = [
    {
      status: t('roadmap.item1.status'),
      desc: t('roadmap.item1.desc'),
      color: 'text-green-400',
      bg: 'bg-green-400/10',
      border: 'border-green-400/20',
      dot: 'bg-green-400',
      icon: <CheckCircle2 className="w-4 h-4" />
    },
    {
      status: t('roadmap.item2.status'),
      desc: t('roadmap.item2.desc'),
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      border: 'border-blue-400/20',
      dot: 'bg-blue-400',
      icon: <Loader2 className="w-4 h-4 animate-spin" />
    },
    {
      status: t('roadmap.item3.status'),
      desc: t('roadmap.item3.desc'),
      color: 'text-orange-400',
      bg: 'bg-orange-400/10',
      border: 'border-orange-400/20',
      dot: 'bg-orange-400',
      icon: <Clock className="w-4 h-4" />
    },
    {
      status: t('roadmap.item4.status'),
      desc: t('roadmap.item4.desc'),
      color: 'text-on-surface-variant',
      bg: 'bg-surface-container-highest',
      border: 'border-outline-variant/20',
      dot: 'bg-outline-variant',
      icon: <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/50" />
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-lg bg-[#131313]/90 backdrop-blur-2xl border border-outline-variant/20 rounded-3xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-white hover:bg-surface-container rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-surface-container-highest border border-outline-variant/20 rounded-xl">
                  <Map className="w-5 h-5 text-on-surface-variant" />
                </div>
                <h2 className="text-2xl font-headline font-bold text-white tracking-tight">
                  {t('roadmap.title')}
                </h2>
              </div>

              <div className="relative pl-4 border-l border-outline-variant/20 space-y-8">
                {roadmapItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="relative pl-6"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${item.dot} shadow-[0_0_8px_currentColor]`} style={{ color: item.dot.replace('bg-', '') }}></div>
                    
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${item.bg} ${item.border} ${item.color} mb-2`}>
                      {item.icon}
                      <span className="text-[10px] font-bold uppercase tracking-widest">{item.status}</span>
                    </div>
                    <p className={`text-sm ${index === 3 ? 'text-on-surface-variant/60' : 'text-white'}`}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
