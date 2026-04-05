import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Safety() {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-8 mb-32" id="safety">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-2xl p-10 flex flex-col justify-between border border-outline-variant/10"
        >
          <div>
            <h3 className="text-3xl font-black mb-4">{t('safety.core.title')}</h3>
            <p className="text-on-surface-variant">{t('safety.core.desc')}</p>
          </div>
          <img alt="Security Core" className="rounded-xl grayscale opacity-40 hover:opacity-100 transition-all duration-500 mt-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdkOAifdS5RgctSATlQpnl55DTTQnjdZG59hTQA7C-iBAnI9bPgaQNaJLNomVfux8b-1dGdDFhKfJecWvk3S1ojjZTnO5DCCiipJAenhO5PvyOA3cDaBWmAeYqTGbhgycFerDnfX-MGf0yxjt6tMoXcUxC-rvOQ1sdxdz9oGOxd1YDBSsE8gczUXHP1Y1KjXI-im-L49PF5W2pJyYnllg_mtUe1qOZ9NVLHqEsi0ZmkKqJ_60C812YmNWR94icqMJJIK3USZ9hivM" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 bg-surface-container-high rounded-2xl p-8 border border-outline-variant/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>lock_open</span>
            <h4 className="font-bold">{t('safety.redteam.title')}</h4>
          </div>
          <p className="text-sm text-on-surface-variant">{t('safety.redteam.desc')}</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 bg-primary-container rounded-2xl p-8 flex flex-col justify-center items-center text-center"
        >
          <div className="text-3xl font-black text-on-primary-container mb-2">94.5%</div>
          <div className="font-label text-[10px] uppercase tracking-widest text-on-primary-container/80">{t('safety.reliability.title')}</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-1 bg-surface-container-lowest rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-primary-container/30"
        >
          <span className="material-symbols-outlined text-primary text-4xl mb-4">policy</span>
          <div className="font-label text-[10px] uppercase tracking-widest text-primary">{t('safety.compliance.title')}</div>
        </motion.div>
      </div>
    </section>
  );
}
