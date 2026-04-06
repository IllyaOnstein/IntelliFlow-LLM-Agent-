import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import WaitlistModal from './WaitlistModal';

export default function CoreCapabilities() {
  const { t } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    const applied = localStorage.getItem('hasApplied') === 'true';
    setHasApplied(applied);
  }, []);

  const handleWaitlistSuccess = () => {
    setHasApplied(true);
  };

  return (
    <div className="pt-32 pb-24 overflow-x-hidden" id="capabilities">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full mb-6 outline outline-1 outline-outline-variant/15"
        >
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#ffb4a8]"></span>
          <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{t('capabilities.badge')}</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-8 max-w-4xl"
        >
          {t('capabilities.title1')} <span className="text-primary-container">{t('capabilities.title2')}</span> {t('capabilities.title3')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-xl text-on-surface-variant max-w-2xl leading-relaxed"
        >
          {t('capabilities.desc')}
        </motion.p>
      </header>

      {/* Section 1: Few-shot Reverse Engineering */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4">{t('capabilities.mod1.label')}</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">{t('capabilities.mod1.title')}</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                {t('capabilities.mod1.desc1')}<span className="text-on-surface font-bold">{t('capabilities.mod1.desc2')}</span>{t('capabilities.mod1.desc3')}
              </p>
              <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-primary-container">
                <h3 className="text-on-surface font-bold mb-2">{t('capabilities.mod1.box.title')}</h3>
                <p className="text-sm">{t('capabilities.mod1.box.desc')}</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span>{t('capabilities.mod1.list1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span>{t('capabilities.mod1.list2')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-primary-container/10 blur-3xl rounded-full"></div>
            <div className="relative glass-panel rounded-2xl p-4 outline outline-1 outline-outline-variant/15 [transform:perspective(1000px)_rotateY(-5deg)_rotateX(2deg)] hover:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)] transition-transform duration-500 overflow-hidden">
              <img className="w-full h-96 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="Industrial computer interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVu_Myr1br8iAqqIGfzHzy0IaIseuofJkgY31W6ObWAJj5FpHqipaFZWKPDDj68mUf72IfEC0bfbf201hAGJsavna-3kBI9jNx7ZjR7sJTuPzxy7k5konWnYqp69MoISx6GWm-1R5lAF0J0-Kn5gnnUhhzr3lLBV61Ez7Vs1_kXhj58KUJUYr-NQ-H8krQh4a_le5S6k1Yx69q77_7fWCjKKk8l9Ez3X_LV-j_FJ9uUEBLILtOYljz7p8_keto2_d880ZnF95jtSY" />
              <div className="absolute bottom-8 right-8 bg-surface-container-highest/90 backdrop-blur-md p-4 rounded-xl border border-outline-variant/20 max-w-[200px]">
                <div className="text-[10px] font-label uppercase tracking-widest text-primary mb-1">{t('capabilities.mod1.stat.label')}</div>
                <div className="text-xl font-bold tracking-tighter">{t('capabilities.mod1.stat.value')}<br /></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Heterogeneous Pipeline */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4">{t('capabilities.mod2.label')}</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">{t('capabilities.mod2.title')}</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                {t('capabilities.mod2.desc1')}<span className="text-on-surface font-bold">{t('capabilities.mod2.desc2')}</span>{t('capabilities.mod2.desc3')}<span className="text-on-surface font-bold">{t('capabilities.mod2.desc4')}</span>{t('capabilities.mod2.desc5')}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-6 bg-surface-container-lowest rounded-xl outline outline-1 outline-outline-variant/10">
                  <div className="text-3xl font-black text-primary mb-2">45%</div>
                  <div className="text-xs font-label uppercase tracking-widest text-on-surface">{t('capabilities.mod2.stat1.label')}</div>
                  <p className="text-[10px] mt-2 opacity-60">{t('capabilities.mod2.stat1.desc')}</p>
                </div>
                <div className="p-6 bg-surface-container-lowest rounded-xl outline outline-1 outline-outline-variant/10">
                  <div className="text-3xl font-black text-on-surface mb-2">55%</div>
                  <div className="text-xs font-label uppercase tracking-widest text-on-surface">{t('capabilities.mod2.stat2.label')}</div>
                  <p className="text-[10px] mt-2 opacity-60">{t('capabilities.mod2.stat2.desc')}</p>
                </div>
              </div>
              <p className="italic text-sm border-l-2 border-outline-variant/30 pl-4 mt-6">
                {t('capabilities.mod2.quote')}
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative glass-panel rounded-2xl p-4 outline outline-1 outline-outline-variant/15 [transform:perspective(1000px)_rotateY(5deg)_rotateX(2deg)] hover:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)] transition-transform duration-500 overflow-hidden">
              <img className="w-full h-96 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="Interconnected metallic nodes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX3ewPMvvNqsoArlmZYO2HTjgYIjrVTCuVvp77FOl8f9H8eeJ13FecOZPDK9rt3f9Ag5ZQt0ruPW5SyeEU_9vN0mMmpU6jCyDhq5BSGsxPxlla7r2V3m0TUexJG1kSp5G0I-KQXqV5XDBggiJR1AwPjC3ZEwv2yOZsG6ecCMV9z1UZsTZ4S2abthITY51Tlxeq0095WN9suXA5oYD1WDEhs1HHrAUcac7eBdyZlJDo3nIjMHouJ21pGcN7QlUAfcIyDvluBEyyUo4" />
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                <div className="bg-primary-container text-white text-[10px] px-3 py-1 rounded-full font-label tracking-widest w-max">{t('capabilities.mod2.img.label1')}</div>
                <div className="bg-surface-container-highest/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-label tracking-widest outline outline-1 outline-outline-variant/20 w-max">{t('capabilities.mod2.img.label2')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Batch Processing & Routing */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4">{t('capabilities.mod3.label')}</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">{t('capabilities.mod3.title')}</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                {t('capabilities.mod3.desc1')}<span className="text-on-surface font-bold">{t('capabilities.mod3.desc2')}</span>{t('capabilities.mod3.desc3')}
              </p>
              <div className="bg-surface-container-high rounded-2xl p-8 outline outline-1 outline-outline-variant/15 mt-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="font-label text-[10px] uppercase tracking-widest">{t('capabilities.mod3.chart.label1')}</div>
                  <div className="text-primary text-xs font-bold">{t('capabilities.mod3.chart.label2')}</div>
                </div>
                <div className="flex items-end gap-2 h-24">
                  <div className="flex-1 bg-surface-container-highest h-12 rounded-t-sm"></div>
                  <div className="flex-1 bg-surface-container-highest h-16 rounded-t-sm"></div>
                  <div className="flex-1 bg-primary-container h-24 rounded-t-sm"></div>
                  <div className="flex-1 bg-surface-container-highest h-20 rounded-t-sm"></div>
                  <div className="flex-1 bg-primary-container h-22 rounded-t-sm"></div>
                  <div className="flex-1 bg-surface-container-highest h-14 rounded-t-sm"></div>
                  <div className="flex-1 bg-primary h-24 rounded-t-sm shadow-[0_0_15px_#ffb4a8]"></div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative glass-panel rounded-2xl p-4 outline outline-1 outline-outline-variant/15 [transform:perspective(1000px)_rotateY(-5deg)_rotateX(2deg)] hover:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)] transition-transform duration-500 overflow-hidden">
              <img className="w-full h-96 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="High-tech circuit board" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnh-doRK_fhsoMMgAL_DNHfe8R-P2UeMToTErrZ1bzme6fzvg-ZVNeUiZZxOf3bwKzcSy1HfcWUdgmG6nQiw_ctjchUOCD9e7VE-eqYWsikADg_l9xHxuMt-5RQsaYqSWk2YNMYqr29ZMV-538oDPW1m-CQZznbopGEmQhOgqkKLW41_ZOSnZpF_VXmqUp8JyKFGgATzqbAdNUpCZ1tdfvbgeu-BAPukm1AueTzWj-jaw_rYIVcY9RDsMljgEXlVVSSbGRJZug-fY" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento CTA */}
      <section className="max-w-7xl mx-auto px-8 mt-48 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 bg-gradient-to-br from-surface-container-high to-surface-container p-12 rounded-2xl outline outline-1 outline-outline-variant/15 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[160px]">rocket_launch</span>
            </div>
            <h3 className="text-4xl font-black mb-4">{t('capabilities.cta.title')}</h3>
            <p className="text-on-surface-variant max-w-md mb-8">{t('capabilities.cta.desc')}</p>
            <button 
              onClick={() => !hasApplied && setIsWaitlistOpen(true)}
              disabled={hasApplied}
              className={`px-8 py-4 rounded-xl font-bold uppercase tracking-tight flex items-center gap-2 transition-all duration-300 ${
                hasApplied 
                  ? 'bg-surface-container-highest text-on-surface-variant cursor-not-allowed border border-outline-variant/20'
                  : 'bg-primary-container text-on-primary-container hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(139,0,0,0.3)]'
              }`}
            >
              {hasApplied ? t('capabilities.cta.btn.applied') : t('capabilities.cta.btn')} 
              {!hasApplied && <span className="material-symbols-outlined">arrow_forward</span>}
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-surface-container-lowest p-8 rounded-2xl outline outline-1 outline-outline-variant/15 flex flex-col justify-between"
          >
            <div>
              <div className="text-primary-container text-4xl font-black mb-2">94.5%</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{t('capabilities.cta.sla.label')}</div>
            </div>
            <div className="border-t border-outline-variant/10 pt-4">
              <p className="text-xs text-on-surface-variant leading-relaxed">{t('capabilities.cta.sla.desc')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
        onSuccess={handleWaitlistSuccess}
      />
    </div>
  );
}
