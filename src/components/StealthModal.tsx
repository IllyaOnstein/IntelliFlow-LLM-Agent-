import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface StealthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StealthModal({ isOpen, onClose }: StealthModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
            className="relative w-full max-w-lg bg-[#131313]/95 backdrop-blur-2xl border border-outline-variant/20 rounded-3xl p-10 shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-container/20 border border-primary/20 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              </div>
              <h2 className="text-3xl font-headline font-black text-white mb-4 tracking-tight">Stealth Mode</h2>
              <p className="text-on-surface-variant leading-relaxed">
                IntelliFlow 目前处于 Stealth Mode（隐匿研发模式）。我们是一群来自顶尖高校与科技公司的架构师，正在重新定义大模型时代的工业级工作流。
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
