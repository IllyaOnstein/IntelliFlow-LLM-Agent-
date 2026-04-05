import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContentVisual() {
  const { t } = useLanguage();

  return (
    <section className="py-32 border-t border-outline-variant/10" id="architecture">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-label text-primary uppercase tracking-[0.2em] mb-6 block">{t('visual.label')}</span>
          <h2 className="text-5xl font-headline font-extrabold tracking-tighter mb-8">
            {t('visual.title1')}<br />
            {t('visual.title2')}
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
            {t('visual.desc')}
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              <div>
                <p className="font-bold">{t('visual.feature1.title')}</p>
                <p className="text-sm text-on-surface-variant">{t('visual.feature1.desc')}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              <div>
                <p className="font-bold">{t('visual.feature2.title')}</p>
                <p className="text-sm text-on-surface-variant">{t('visual.feature2.desc')}</p>
              </div>
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary-container/10 blur-3xl rounded-full"></div>
          <img 
            className="relative rounded-2xl border border-outline-variant/15 shadow-2xl" 
            alt="Professional engineering software interface" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqYQLAAK4ahN4JD0JhMMoLvjwxeTGW4Ihvv6er1k2GnoiG2Bmr1YBIilJViyVP_5FHCoJifgpar5XovzKYdSUpkFWF-ficyjejFpXLp--vA1xzCgR0HpRutZoUb15b8MybpjcWx-CZFDTd53ti5SOwsZeZDb3SIAplodUO3NL_PLz0vAHf8jnki9AXNN-ga7Kg3NXPQf1b28hNOR_1pev7jNynaCHvsZv04I93zXz8xgLZaqDza5sh0zqTwEO2q5S0kHvimgh-OYw" 
          />
        </motion.div>
      </div>
    </section>
  );
}
