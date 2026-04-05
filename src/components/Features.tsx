import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="py-32 max-w-7xl mx-auto px-8" id="features">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="md:col-span-8 bg-surface-container-low rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative group"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">{t('features.dag.title')}</h3>
            <p className="text-on-surface-variant max-w-md">{t('features.dag.desc')}</p>
          </div>
          <div className="mt-12 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
            <img className="w-full h-48 object-cover rounded-xl shadow-2xl rotate-2" alt="DAG Editor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBisVqfp63QVuTddtgEFa39dUv4XiG8Bx88gpXjFTLakDWokiDywLJPsQFwBrV_jgxEp8n8_4KDDFJ12XuZtWBgfLrJq-52yJS-3uNsgxaIXIQVMGDvafbfQrpvR9uHAgi0giTOx-wcLjggk0mw1j9vLac8sgd0Q8HJ0h1hQuMB_d7VHLQG7yCjhbv_-GK5MM-IMyQYOvTI_MhkGv5w_n1MIbGxD5C0kOqb8hBhRW32xZL2kIbHtGTJO7WlW1leE5qcnTJSOZyMC4s" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="md:col-span-4 bg-primary-container rounded-3xl p-10 flex flex-col justify-between text-on-primary-container"
        >
          <div>
            <h3 className="text-3xl font-headline font-bold mb-4">{t('features.latency.title')}</h3>
            <p className="opacity-80">{t('features.latency.desc')}</p>
          </div>
          <div className="mt-8 flex justify-end">
            <span className="material-symbols-outlined text-6xl opacity-50" style={{ fontVariationSettings: '"FILL" 1' }}>speed</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="md:col-span-4 bg-surface-container-low rounded-3xl p-10"
        >
          <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-primary">lock</span>
          </div>
          <h3 className="text-xl font-headline font-bold text-on-surface mb-2">{t('features.encryption.title')}</h3>
          <p className="text-on-surface-variant text-sm">{t('features.encryption.desc')}</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="md:col-span-4 bg-surface-container-low rounded-3xl p-10"
        >
          <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-primary">hub</span>
          </div>
          <h3 className="text-xl font-headline font-bold text-on-surface mb-2">{t('features.integration.title')}</h3>
          <p className="text-on-surface-variant text-sm">{t('features.integration.desc')}</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="md:col-span-4 bg-surface-container-low rounded-3xl p-10"
        >
          <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-primary">monitoring</span>
          </div>
          <h3 className="text-xl font-headline font-bold text-on-surface mb-2">{t('features.telemetry.title')}</h3>
          <p className="text-on-surface-variant text-sm">{t('features.telemetry.desc')}</p>
        </motion.div>
      </div>
    </section>
  );
}
