import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import TrustCenterModal from './TrustCenterModal';

export default function Alignment() {
  const { t } = useLanguage();
  const [isTrustCenterOpen, setIsTrustCenterOpen] = useState(false);

  return (
    <div id="alignment">
      {/* Hero Section for Alignment */}
      <section className="max-w-7xl mx-auto px-8 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_2px_#ffb4a8]"></span>
            <span className="font-label text-xs uppercase tracking-widest text-primary">{t('alignment.badge')}</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 text-on-surface">
            {t('alignment.title1')} <span className="text-primary-container">{t('alignment.title2')}</span>
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
            {t('alignment.desc')}
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => setIsTrustCenterOpen(true)}
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-tight flex items-center gap-2 hover:bg-on-primary-fixed-variant transition-colors hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined">shield</span>
              {t('alignment.btn')}
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-5 relative"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="glass-panel border border-outline-variant/15 p-6 rounded-2xl" 
            style={{ transform: 'rotateY(-12deg) rotateX(8deg)', transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <div className="bg-surface-container-lowest rounded-lg p-4 font-label text-[10px] text-primary space-y-2">
              <div className="flex justify-between border-b border-outline-variant/10 pb-1">
                <span>{t('alignment.stat1.label')}</span>
                <span>0.0023</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/10 pb-1 text-on-surface">
                <span>{t('alignment.stat2.label')}</span>
                <span>99.98%</span>
              </div>
              <div className="pt-4 flex flex-col gap-2">
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-[92%] shadow-[0_0_8px_#8B0000]"></div>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[45%]"></div>
                </div>
              </div>
            </div>
            <img alt="Abstract 3D mathematical neural network structure" className="mt-4 rounded-lg grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBQJxJMpYzJWk79ksLAcelHyWiYGAbdd4S340ueOZd0igpi6FrocmkuVIGuofE4OAoQOtxX5XKmgRbV0Tk3Mpu98YyixExiRvmtEQCSNKqZ-5kV_FO7q-cERuzXZrcYXWLRsxgGJGG_zb6rr6svA1X9qhX5bn93ma9GwIdLMLJrrDDOybQBarl1k7ZCVcD-jho8p1VFtflnkKm5KCTWEIqzEgEQcJ11mCoaDilGcCqNQmm0ky6fYgGtvVVh3vR1BML8FFWRGCvnUM" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 1: DAG Decomposition */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl"
            >
              <span className="font-label text-sm text-primary uppercase tracking-[0.2em] block mb-4">{t('alignment.mod1.label')}</span>
              <h2 className="text-4xl font-black tracking-tight mb-6">{t('alignment.mod1.title')}</h2>
              <p className="text-on-surface-variant leading-relaxed">
                {t('alignment.mod1.desc')}
              </p>
            </motion.div>
            <div className="font-label text-6xl font-black text-surface-container-highest/50">01</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-surface p-8 rounded-2xl border border-outline-variant/10 hover:border-primary-container transition-colors group"
            >
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-xl mb-6 group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white">account_tree</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('alignment.mod1.card1.title')}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{t('alignment.mod1.card1.desc')}</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-surface p-8 rounded-2xl border border-outline-variant/10 hover:border-primary-container transition-colors group"
            >
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-xl mb-6 group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white">fact_check</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('alignment.mod1.card2.title')}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{t('alignment.mod1.card2.desc')}</p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-surface p-8 rounded-2xl border border-outline-variant/10 hover:border-primary-container transition-colors group"
            >
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-xl mb-6 group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white">gavel</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('alignment.mod1.card3.title')}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{t('alignment.mod1.card3.desc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Visualized CoT & HITL */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="space-y-4">
              {/* Chain of Thought Mockup */}
              <div className="bg-surface-container-highest rounded-xl p-6 border border-outline-variant/20 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label text-[10px] text-primary">{t('alignment.mockup.thread')}</span>
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-surface-container"></span>
                  </span>
                </div>
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3 bg-surface-container-low rounded-lg border-l-4 border-primary-container">
                    <p className="text-on-surface-variant mb-2">{t('alignment.mockup.step1')}</p>
                    <p className="text-on-surface">{t('alignment.mockup.step1.res')}</p>
                  </div>
                  <div className="p-3 bg-error-container/20 rounded-lg border-l-4 border-error">
                    <p className="text-error mb-2">{t('alignment.mockup.step2.err')}</p>
                    <p className="text-on-surface-variant italic">{t('alignment.mockup.step2.reason')}</p>
                    <button className="mt-3 px-3 py-1 bg-error text-[10px] rounded font-bold text-on-error uppercase">{t('alignment.mockup.step2.btn')}</button>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-lg border-l-4 border-outline opacity-50">
                    <p className="text-on-surface-variant">{t('alignment.mockup.step3')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="font-label text-sm text-primary uppercase tracking-[0.2em] block mb-4">{t('alignment.mod2.label')}</span>
            <h2 className="text-5xl font-black tracking-tight mb-8">{t('alignment.mod2.title')}</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              {t('alignment.mod2.desc')}
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary-container">visibility</span>
                <div>
                  <span className="block font-bold mb-1">{t('alignment.mod2.list1.title')}</span>
                  <span className="text-sm text-on-surface-variant">{t('alignment.mod2.list1.desc')}</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary-container">ads_click</span>
                <div>
                  <span className="block font-bold mb-1">{t('alignment.mod2.list2.title')}</span>
                  <span className="text-sm text-on-surface-variant">{t('alignment.mod2.list2.desc')}</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary-container">safety_check</span>
                <div>
                  <span className="block font-bold mb-1">{t('alignment.mod2.list3.title')}</span>
                  <span className="text-sm text-on-surface-variant">{t('alignment.mod2.list3.desc')}</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <TrustCenterModal 
        isOpen={isTrustCenterOpen} 
        onClose={() => setIsTrustCenterOpen(false)} 
      />
    </div>
  );
}
