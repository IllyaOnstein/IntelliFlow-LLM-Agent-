import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'individual' | 'enterprise'>('individual');
  const { t } = useLanguage();

  return (
    <section className="max-w-[1200px] mx-auto px-8 py-20" id="pricing">
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
          {t('pricing.title1')} <span className="text-primary">{t('pricing.title2')}</span>
        </h1>
        <p className="text-xl text-on-surface-variant font-light max-w-2xl mx-auto">
          {t('pricing.desc')}
        </p>
      </header>

      <div className="flex justify-center mb-20">
        <div className="bg-surface-container-low p-1.5 rounded-full inline-flex items-center gap-1 border border-outline-variant/15 relative">
          <button 
            onClick={() => setActiveTab('individual')}
            className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-label font-bold uppercase tracking-widest transition-all ${activeTab === 'individual' ? 'text-on-primary-container' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            {t('pricing.tab.individual')}
          </button>
          <button 
            onClick={() => setActiveTab('enterprise')}
            className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-label font-bold uppercase tracking-widest transition-all ${activeTab === 'enterprise' ? 'text-on-primary-container' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            {t('pricing.tab.enterprise')}
          </button>
          {/* Active Background Pill */}
          <div 
            className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-primary-container rounded-full shadow-lg transition-transform duration-300 ease-in-out ${activeTab === 'enterprise' ? 'translate-x-[calc(100%+0.25rem)]' : 'translate-x-0'}`}
          ></div>
        </div>
      </div>

      <div className="mb-32 min-h-[500px]">
        <AnimatePresence mode="wait">
          {activeTab === 'individual' ? (
            <motion.div 
              key="individual"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto"
            >
              {/* Free Tier */}
              <div className="bg-surface-container-low rounded-xl p-10 border border-outline-variant/15 hover:bg-surface-container transition-all duration-500 group">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">{t('pricing.free.badge')}</div>
                    <h3 className="text-3xl font-black text-white">{t('pricing.free.title')}</h3>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">rocket_launch</span>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-black text-white" translate="no">{t('pricing.free.price')}</span>
                  <span className="text-on-surface-variant font-label text-sm uppercase tracking-widest">{t('pricing.free.period')}</span>
                </div>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span className="text-sm font-medium">{t('pricing.free.feat1')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span className="text-sm font-medium">{t('pricing.free.feat2')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span className="text-sm font-medium">{t('pricing.free.feat3')}</span>
                  </li>
                  <li className="flex items-center gap-3 opacity-30">
                    <span className="material-symbols-outlined text-xl">block</span>
                    <span className="text-sm font-medium">{t('pricing.free.feat4')}</span>
                  </li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-outline-variant text-on-surface-variant font-label font-bold uppercase tracking-widest hover:bg-surface-variant hover:text-white transition-all duration-300">
                  {t('pricing.free.btn')}
                </button>
              </div>

              {/* Paid Tier */}
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-container to-on-primary-fixed-variant rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative bg-surface-container-highest rounded-xl p-10 border border-primary-container/30 crimson-glow h-full flex flex-col">
                  <div className="absolute -top-4 right-8 bg-primary-container text-white text-[10px] font-label font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-xl">
                    {t('pricing.pro.popular')}
                  </div>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">{t('pricing.pro.badge')}</div>
                      <h3 className="text-3xl font-black text-white">{t('pricing.pro.title')}</h3>
                    </div>
                    <div className="p-3 bg-primary-container/20 rounded-lg">
                      <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>terminal</span>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white" translate="no">{t('pricing.pro.price')}</span>
                      <span className="text-on-surface-variant font-label text-sm uppercase tracking-widest">{t('pricing.pro.period')}</span>
                    </div>
                    <p className="text-primary text-xs font-bold mt-2 uppercase tracking-widest">{t('pricing.pro.limit')}</p>
                  </div>
                  <ul className="space-y-4 mb-12 flex-grow">
                    <li className="flex items-center gap-3 text-white">
                      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                      <span className="text-sm font-bold">{t('pricing.pro.feat1')}</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                      <span className="text-sm font-bold">{t('pricing.pro.feat2')}</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                      <span className="text-sm font-bold">{t('pricing.pro.feat3')}</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                      <span className="text-sm font-bold">{t('pricing.pro.feat4')}</span>
                    </li>
                  </ul>
                  <button className="w-full py-5 rounded-xl bg-primary-container text-white font-label font-bold uppercase tracking-widest hover:bg-on-primary-fixed-variant transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2">
                    {t('pricing.pro.btn')} <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="enterprise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* SaaS Professional */}
              <div className="glass-panel p-10 rounded-3xl flex flex-col hover:scale-[1.02] transition-all duration-500 bg-surface-container-low border border-outline-variant/15">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">{t('pricing.ent.saas.badge')}</span>
                <h3 className="font-headline font-bold text-3xl text-white mb-2">{t('pricing.ent.saas.title')}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-black text-white" translate="no">{t('pricing.ent.saas.price')}</span>
                  <span className="text-on-surface-variant ml-2">{t('pricing.ent.saas.period')}</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 h-12">
                  {t('pricing.ent.saas.desc')}
                </p>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                    {t('pricing.ent.saas.feat1')}
                  </li>
                  <li className="flex items-center text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                    {t('pricing.ent.saas.feat2')}
                  </li>
                  <li className="flex items-center text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                    {t('pricing.ent.saas.feat3')}
                  </li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-outline-variant hover:bg-surface-container-highest transition-all text-sm font-bold uppercase tracking-wider text-white">
                  {t('pricing.ent.saas.btn')}
                </button>
              </div>

              {/* Enterprise Private */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-b from-primary-container to-transparent rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative glass-panel p-10 rounded-3xl flex flex-col bg-surface-container-highest border border-primary-container/30 h-full scale-105 z-10 crimson-glow">
                  <div className="absolute top-4 right-8">
                    <span className="bg-primary-container text-white text-[10px] font-label px-3 py-1 rounded-full uppercase tracking-widest">{t('pricing.ent.private.rec')}</span>
                  </div>
                  <span className="font-label text-xs uppercase tracking-widest text-primary mb-4">{t('pricing.ent.private.badge')}</span>
                  <h3 className="font-headline font-bold text-3xl text-white mb-2">{t('pricing.ent.private.title')}</h3>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-black text-white" translate="no">{t('pricing.ent.private.price')}</span>
                    <span className="text-on-surface-variant ml-2">{t('pricing.ent.private.period')}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8 h-12">
                    {t('pricing.ent.private.desc')}
                  </p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-center text-sm text-white">
                      <span className="material-symbols-outlined text-primary mr-3 text-lg">verified_user</span>
                      {t('pricing.ent.private.feat1')}
                    </li>
                    <li className="flex items-center text-sm text-white">
                      <span className="material-symbols-outlined text-primary mr-3 text-lg">verified_user</span>
                      {t('pricing.ent.private.feat2')}
                    </li>
                    <li className="flex items-center text-sm text-white">
                      <span className="material-symbols-outlined text-primary mr-3 text-lg">verified_user</span>
                      {t('pricing.ent.private.feat3')}
                    </li>
                    <li className="flex items-center text-sm text-white">
                      <span className="material-symbols-outlined text-primary mr-3 text-lg">verified_user</span>
                      {t('pricing.ent.private.feat4')}
                    </li>
                  </ul>
                  <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#920703] hover:scale-[1.02] transition-all text-sm font-bold uppercase tracking-wider text-white shadow-[0_10px_20px_-5px_rgba(139,0,0,0.4)]">
                    {t('pricing.ent.private.btn')}
                  </button>
                </div>
              </div>

              {/* Custom Integration */}
              <div className="glass-panel p-10 rounded-3xl flex flex-col hover:scale-[1.02] transition-all duration-500 bg-surface-container-low border border-outline-variant/15">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">{t('pricing.ent.sdk.badge')}</span>
                <h3 className="font-headline font-bold text-3xl text-white mb-2">{t('pricing.ent.sdk.title')}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-black text-white" translate="no">{t('pricing.ent.sdk.price')}</span>
                  <span className="text-on-surface-variant ml-2">{t('pricing.ent.sdk.period')}</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 h-12">
                  {t('pricing.ent.sdk.desc')}
                </p>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary mr-3 text-lg">code</span>
                    {t('pricing.ent.sdk.feat1')}
                  </li>
                  <li className="flex items-center text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary mr-3 text-lg">code</span>
                    {t('pricing.ent.sdk.feat2')}
                  </li>
                  <li className="flex items-center text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary mr-3 text-lg">code</span>
                    {t('pricing.ent.sdk.feat3')}
                  </li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-outline-variant hover:bg-surface-container-highest transition-all text-sm font-bold uppercase tracking-wider text-white">
                  {t('pricing.ent.sdk.btn')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* The Credit System (算力无感) Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-surface-container-lowest py-20 md:py-32 border-t border-outline-variant/10 rounded-3xl mb-32 px-8 md:px-16"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center space-x-2"
            >
              <span className="material-symbols-outlined text-primary">bolt</span>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">{t('pricing.credit.badge')}</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="font-headline font-black text-4xl md:text-5xl tracking-tighter leading-tight"
            >
              {t('pricing.credit.title1')} <br />
              <span className="text-primary-container">{t('pricing.credit.title2')}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="text-on-surface-variant text-lg leading-relaxed"
            >
              {t('pricing.credit.desc')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8"
            >
              <div className="p-6 rounded-2xl bg-surface-container-low border-l-2 border-primary-container hover:bg-surface-container transition-colors">
                <h4 className="font-bold text-white mb-2">{t('pricing.credit.feat1.title')}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{t('pricing.credit.feat1.desc')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-low border-l-2 border-primary-container hover:bg-surface-container transition-colors">
                <h4 className="font-bold text-white mb-2">{t('pricing.credit.feat2.title')}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{t('pricing.credit.feat2.desc')}</p>
              </div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-1 relative w-full"
          >
            <div className="w-full aspect-video glass-panel rounded-3xl overflow-hidden border border-outline-variant/10 relative group">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Abstract digital visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBchB3Kc6pIDSnAITa16Bz9gvugQSLUqidK4tFESx7jSe-j2UGlswHOTh4RIBGr6A563mrMATc5oatpCCosoNEaqeniFc3WfxXxu6JoElUdWBGiKRiyJuhSQA2EeL6Yp4VPlYhYIykQK_JoWNY847S2WutQw5r3jBXV1wbwcbN01ARKuCYq2BdmdFNZ5EfISr8EhW323oUMMPZs59g6BTlsofPvS-x6_2YBAcQzCNobk-nbWm-4qbubE_BmkpVQVMDHJMLreJK9QWE" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <div className="bg-surface-container-highest/80 backdrop-blur-md px-4 py-2 rounded-lg border border-outline-variant/20">
                  <span className="font-label text-[10px] text-primary tracking-widest uppercase">{t('pricing.credit.img.label')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-5xl mx-auto text-center mb-32"
      >
        <h2 className="font-headline font-black text-4xl mb-6">{t('pricing.cta.title')}</h2>
        <p className="text-on-surface-variant mb-12 text-lg">{t('pricing.cta.desc')}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="bg-primary-container text-white px-10 py-5 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-on-primary-fixed-variant transition-all shadow-[0_20px_40px_-10px_rgba(139,0,0,0.5)] hover:scale-105 active:scale-95">
            {t('pricing.cta.btn1')}
          </button>
          <button className="border border-outline-variant text-on-surface-variant px-10 py-5 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-surface-container-high hover:text-white transition-all hover:scale-105 active:scale-95">
            {t('pricing.cta.btn2')}
          </button>
        </div>
      </motion.div>

      {/* Trusted By */}
      <div className="pt-20 border-t border-outline-variant/10 overflow-hidden">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant/60 mb-12"
        >
          {t('pricing.trusted')}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.7 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale contrast-125"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-black tracking-tighter flex items-center gap-2 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
          >
            <span className="material-symbols-outlined">school</span> STANFORD
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-black tracking-tighter flex items-center gap-2 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
          >
            <span className="material-symbols-outlined">science</span> MIT LABS
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-2xl font-black tracking-tighter flex items-center gap-2 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
          >
            <span className="material-symbols-outlined">hub</span> NEXUS AI
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-2xl font-black tracking-tighter flex items-center gap-2 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
          >
            <span className="material-symbols-outlined">architecture</span> ATOMICA
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
