import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import CommunityWaitlistModal from './CommunityWaitlistModal';

export default function Vision() {
  const { t } = useLanguage();
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [hasAppliedCommunity, setHasAppliedCommunity] = useState(false);

  useEffect(() => {
    const applied = localStorage.getItem('hasAppliedCommunity') === 'true';
    setHasAppliedCommunity(applied);
  }, []);

  const handleCommunitySuccess = () => {
    setHasAppliedCommunity(true);
  };

  return (
    <div id="vision" className="relative bg-[radial-gradient(circle,#353535_1px,transparent_1px)] bg-[length:40px_40px]">
      {/* Hero Section: The Mission */}
      <section className="max-w-7xl mx-auto px-8 py-32 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="md:w-3/5 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,180,168,0.8)]"></span>
            <span className="font-label text-[10px] uppercase tracking-widest text-primary">{t('vision.mission.badge')}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] text-on-surface">
            {t('vision.mission.title1')} <span className="text-primary-container drop-shadow-[0_0_15px_rgba(139,0,0,0.6)]">{t('vision.mission.title2')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
            {t('vision.mission.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/10 sm:w-1/2">
              <span className="material-symbols-outlined text-primary mb-4">terminal</span>
              <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-2">{t('vision.mission.feat1.title')}</h3>
              <p className="text-sm text-on-surface-variant">{t('vision.mission.feat1.desc')}</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/10 sm:w-1/2">
              <span className="material-symbols-outlined text-primary mb-4">hub</span>
              <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-2">{t('vision.mission.feat2.title')}</h3>
              <p className="text-sm text-on-surface-variant">{t('vision.mission.feat2.desc')}</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="md:w-2/5 relative"
        >
          <div className="absolute -inset-4 bg-primary-container/10 blur-3xl rounded-full"></div>
          <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              alt="Hardware insight" 
              className="w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcdUJUf6MPC182BlCe3D7YKRBbjJrwqzsqeyPC7ngFfJVzQXyzJesa77yJCIxPaCnHfHO_IKS7IJMNpm1QEPqlY00vwspl7MBlirn8SVXVS_CzDHTJeHFc9MrcwlPGGkQv6d18A2bYzkmKcQKesmcbLPn8SY6MGsw_owFNB0915xHEIN793qtp21EcxcFc_pI1TLpSkr99urKWEA-2O8DQ0VTcF1z_Trqzgl4D-ebyDd6eiqIREWhVNTaNQ25Vo2QSABzEIwPR90A" 
            />
          </div>
        </motion.div>
      </section>

      {/* Vision Bento Grid */}
      <section className="bg-surface-container-lowest/90 backdrop-blur-sm py-32 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-on-surface">{t('vision.roadmap.title')}</h2>
            <p className="font-label text-sm uppercase tracking-widest text-primary-container mt-2">{t('vision.roadmap.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Short Term */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 bg-[#353535]/40 backdrop-blur-[40px] p-10 rounded-2xl border border-outline-variant/10 flex flex-col justify-between group hover:border-primary-container/30 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="font-label text-[10px] bg-primary-container text-white px-3 py-1 rounded-full uppercase tracking-widest">{t('vision.roadmap.q3q4.badge')}</span>
                  <span className="text-5xl font-black text-white/5 group-hover:text-primary-container/20 transition-colors">Q3-Q4</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{t('vision.roadmap.q3q4.title')}</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  {t('vision.roadmap.q3q4.desc1')}<span className="font-bold text-on-surface">{t('vision.roadmap.q3q4.desc2')}</span>{t('vision.roadmap.q3q4.desc3')}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md bg-surface-container-highest text-[10px] font-label text-on-surface-variant uppercase">{t('vision.roadmap.q3q4.tag1')}</span>
                <span className="px-3 py-1 rounded-md bg-surface-container-highest text-[10px] font-label text-on-surface-variant uppercase">{t('vision.roadmap.q3q4.tag2')}</span>
                <span className="px-3 py-1 rounded-md bg-surface-container-highest text-[10px] font-label text-on-surface-variant uppercase">{t('vision.roadmap.q3q4.tag3')}</span>
              </div>
            </motion.div>

            <div className="flex flex-col gap-6">
              {/* Future 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/5 hover:border-primary-container/30 transition-all flex-1"
              >
                <span className="material-symbols-outlined text-primary-container text-4xl mb-6">visibility</span>
                <h3 className="text-xl font-bold mb-4">{t('vision.roadmap.r1.title')}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {t('vision.roadmap.r1.desc')}
                </p>
                <div className="mt-8 pt-6 border-t border-outline-variant/10">
                  <span className="font-label text-[10px] text-primary uppercase tracking-tighter">{t('vision.roadmap.r1.target')}</span>
                </div>
              </motion.div>

              {/* Future 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/5 hover:border-primary-container/30 transition-all flex-1"
              >
                <span className="material-symbols-outlined text-primary-container text-4xl mb-6">shopping_cart</span>
                <h3 className="text-xl font-bold mb-4">{t('vision.roadmap.r2.title')}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {t('vision.roadmap.r2.desc')}
                </p>
                <div className="mt-8 pt-6 border-t border-outline-variant/10">
                  <span className="font-label text-[10px] text-primary uppercase tracking-tighter">{t('vision.roadmap.r2.target')}</span>
                </div>
              </motion.div>
            </div>

            {/* Tech Stack / Team Vibe */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="md:col-span-3 relative rounded-2xl overflow-hidden group h-80 mt-2"
            >
              <img 
                alt="Lab" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKuN7g7OHj-Nbvj2340ApaIbyPB1vSIt4YBVLTPPuxeOLqrMIX47F5lZ4d85k7Oes9CkU6iyCEsTcIdmfz6DUR3XQmNERjfN293nb2tF4xFIF1MFeJMmlIVylgIVGFg7sC4hGypM0Ed9oVSztLFxi-J35AjvVCwd0Ex71TOkymQp_hi68aK1QE_EjGSpSm4Cx4jLuFGiYxuhECLDVP87B_N356yv_LrQ76xCWxyIePRg0DhsR9uBe2yngl17sm2KxCy23vSmMrAAw" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="text-2xl font-bold mb-2">{t('vision.roadmap.team.title')}</h3>
                <p className="text-on-surface-variant max-w-md">{t('vision.roadmap.team.desc')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-32 border-t border-outline-variant/10">
        {/* Hero Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter font-headline bg-gradient-to-r from-white via-on-surface-variant to-outline bg-clip-text text-transparent">
              {t('vision.eco.title1')}<br/>{t('vision.eco.title2')}
            </h2>
            <div className="self-start mt-2 px-3 py-1 bg-[#8b0000]/20 border border-[#8b0000]/50 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d4d] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff4d4d]">{t('community.badge')}</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            {t('vision.eco.desc')}
          </p>
        </motion.header>

        {/* Bento Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[450px] md:auto-rows-[600px]">
          {/* Left Side: Private Hub (60%) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-7 rounded-3xl bg-surface-container-low overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 to-transparent pointer-events-none"></div>
            <div className="p-8 md:p-12 relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cached</span>
                </div>
                <h3 className="text-2xl font-bold font-headline">{t('vision.eco.private.title')}</h3>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#ffb4a8]"></span>
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">{t('vision.eco.private.feat1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#ffb4a8]"></span>
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">{t('vision.eco.private.feat2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#ffb4a8]"></span>
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">{t('vision.eco.private.feat3')}</span>
                </li>
              </ul>
              {/* Visual Mockup Area */}
              <div className="mt-auto relative flex-grow [perspective:1000px] overflow-hidden">
                <div className="absolute inset-0 bg-surface-container-lowest/50 rounded-xl border border-outline-variant/20 [transform:rotateY(-10deg)_rotateX(5deg)] p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="h-4 w-32 bg-surface-container-highest rounded-full"></div>
                    <div className="h-8 w-8 rounded-full bg-primary-container/30 border border-primary-container/50"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-surface-container-high rounded-xl p-4 flex flex-col justify-end">
                      <div className="h-2 w-12 bg-primary/40 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-surface-variant rounded-full"></div>
                    </div>
                    <div className="h-24 bg-surface-container-high rounded-xl p-4 flex flex-col justify-end border border-primary-container/20">
                      <div className="h-2 w-12 bg-primary-container rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-surface-variant rounded-full"></div>
                    </div>
                    <div className="h-24 bg-surface-container-high rounded-xl p-4 flex flex-col justify-end">
                      <div className="h-2 w-12 bg-primary/40 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-surface-variant rounded-full"></div>
                    </div>
                    <div className="h-24 bg-surface-container-high rounded-xl p-4 flex flex-col justify-end">
                      <div className="h-2 w-12 bg-primary/40 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-surface-variant rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Public Explorer (40%) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="md:col-span-5 rounded-3xl bg-surface-container overflow-hidden relative group"
          >
            {/* Locked Overlay */}
            <div className="absolute inset-0 z-20 bg-[#0a0a0a]/40 backdrop-blur-[2px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/20 flex items-center justify-center mb-4 shadow-2xl">
                <Lock className="w-6 h-6 text-on-surface-variant" />
              </div>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant bg-surface-container-highest/80 px-4 py-1.5 rounded-full border border-outline-variant/20">
                {t('community.badge')}
              </span>
            </div>

            <div className="p-8 md:p-12 h-full flex flex-col relative z-10 transition-transform duration-500 group-hover:scale-[0.98]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <h3 className="text-2xl font-bold font-headline">{t('vision.eco.public.title')}</h3>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
                      <img className="w-full h-full object-cover" alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASh1BiWatJG3pdsj2c0lFfHtOYEVtq3etNMfoGNIrOI2m28QD2JMpiZUnUvJh4lckPmghr_gMYGIIhis78yLiLe-ENOcFXpEwzENZoD-Yanen57KNigm9UJuldyZuJxMrGrxX6eAX4LoQaDzYM3zWDr3UYVrSyflmsaqaa2Zv4FJdol5UNRSR0LO6rZo3MUFGnxymWE1WcA3UKeCSl0XADQJg56AlIfWFMpt3HdnxGhM5WBrCkNg55HBFz4dSAdXSta5UmKrmeweM"/>
                    </div>
                    <div>
                      <p className="text-xs font-bold font-headline text-on-surface">@void_runner</p>
                      <p className="text-[10px] font-label text-primary uppercase">{t('vision.eco.public.user1.role')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-4">{t('vision.eco.public.user1.action')}</p>
                  <div className="h-24 w-full bg-[#080808] rounded-lg p-3 font-mono text-[10px] text-green-400/70 overflow-hidden border border-outline-variant/5">
                    {t('vision.eco.public.user1.code1')}<br/>
                    {t('vision.eco.public.user1.code2')}<br/>
                    {t('vision.eco.public.user1.code3')}
                  </div>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10 opacity-60">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
                      <img className="w-full h-full object-cover" alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCypBBTc83EZ7k7IXUNlVeG18AFYcMJheaQNxSJJ0uizXTiiGxYxEfkejDgMXHzxMv48XSLAWwMQWyQO3_2Z6w9vD4eI_qLD_-uzyozNFXFtOHmIVxBbpFu9ngjjmBgojvc1sE5SsABxIfio2pcJo2458_oXPynsUbO_eFnx9cTE7fKY-RaCAJRZLFORLrBXT5fOc7N_AxWTo5LzzuOjeKmD9qVq_aj54Lzfu_Kc1_t3iQaDxJHDZu3_VzRxDcVJ4_uW6-aT_wPFQ4"/>
                    </div>
                    <div>
                      <p className="text-xs font-bold font-headline text-on-surface">@pixel_forge</p>
                      <p className="text-[10px] font-label text-on-surface-variant uppercase">{t('vision.eco.public.user2.role')}</p>
                    </div>
                  </div>
                  <div className="h-4 w-full bg-surface-variant rounded-full mb-2"></div>
                  <div className="h-4 w-2/3 bg-surface-variant rounded-full"></div>
                </div>
              </div>
              <div className="mt-auto pt-8">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-high">
                    <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">{t('vision.eco.public.link1')}</span>
                    <span className="material-symbols-outlined text-xs text-primary">arrow_forward_ios</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-high">
                    <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">{t('vision.eco.public.link2')}</span>
                    <span className="text-[10px] font-bold text-primary">+450 CR</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Atmospheric background element */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-container/10 blur-[100px] pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Centered CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 flex flex-col items-center"
        >
          <button 
            onClick={() => !hasAppliedCommunity && setIsCommunityModalOpen(true)}
            disabled={hasAppliedCommunity}
            className={`group relative px-12 py-5 rounded-full font-headline font-black text-lg uppercase tracking-widest transition-all duration-500 overflow-hidden ${
              hasAppliedCommunity 
                ? 'bg-surface-container-highest text-on-surface-variant cursor-not-allowed border border-outline-variant/20'
                : 'bg-primary-container text-white shadow-[0_0_40px_rgba(139,0,0,0.3)] hover:shadow-[0_0_60px_rgba(139,0,0,0.5)] active:scale-95'
            }`}
          >
            <span className="relative z-10">
              {hasAppliedCommunity ? t('capabilities.cta.btn.applied') : t('vision.eco.cta.btn')}
            </span>
            {!hasAppliedCommunity && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-[#920703] to-primary-container translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            )}
          </button>
          <p className="mt-6 font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60">{t('vision.eco.cta.desc')}</p>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="max-w-5xl mx-auto px-8 py-48 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="material-symbols-outlined text-primary-container text-6xl mb-12 opacity-50">format_quote</span>
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-on-surface mb-12">
            {t('vision.quote.text1')}<span className="text-primary italic">{t('vision.quote.text2')}</span>{t('vision.quote.text3')}
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-[2px] bg-primary-container mb-6"></div>
            <p className="font-label text-sm uppercase tracking-[0.3em] text-on-surface">{t('vision.quote.author')}</p>
          </div>
        </motion.div>
      </section>

      <CommunityWaitlistModal 
        isOpen={isCommunityModalOpen} 
        onClose={() => setIsCommunityModalOpen(false)} 
        onSuccess={handleCommunitySuccess}
      />
    </div>
  );
}
