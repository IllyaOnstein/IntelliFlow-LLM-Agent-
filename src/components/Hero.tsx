import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useModals } from '../contexts/ModalContext';

export default function Hero() {
  const { t } = useLanguage();
  const { openLoginModal } = useModals();

  return (
    <main className="relative min-h-screen flex flex-col items-center pt-48 pb-32 overflow-hidden">
      {/* Radial Spotlight Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-[radial-gradient(circle_at_center,_#1b1b1b_0%,_#131313_70%)] -z-10 opacity-60"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-outline-variant/15 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#ffb4a8]"></span>
          <span className="text-[0.65rem] font-label uppercase tracking-widest text-on-surface-variant">{t('hero.badge')}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-tight"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-on-surface-variant font-body mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t('hero.desc')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <button onClick={openLoginModal} className="bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary-container px-10 py-4 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(139,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95">
            {t('hero.start')}
          </button>
          <Link to="/docs" className="glass-panel bg-surface-container-high/40 border border-outline-variant/15 text-on-surface px-10 py-4 rounded-full text-lg font-medium hover:bg-surface-container-highest/60 transition-all duration-300 hover:scale-105 active:scale-95 inline-block">
            {t('hero.docs')}
          </Link>
        </motion.div>
      </div>

      {/* Hero 3D Mockup Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative w-full max-w-7xl perspective-grid px-8"
      >
        <div className="relative w-full rotate-3d mx-auto">
          {/* Floating Nodes */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-12 left-[15%] z-20 glass-panel bg-surface-container-high/80 border border-primary/20 rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          >
            <span className="material-symbols-outlined text-primary">table_chart</span>
            <span className="font-label text-xs tracking-wider uppercase">{t('hero.node1')}</span>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute top-24 -right-4 z-20 glass-panel bg-primary-container/20 border border-primary/30 rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_10px_40px_rgba(139,0,0,0.4)]"
          >
            <span className="material-symbols-outlined text-primary">psychology</span>
            <span className="font-label text-xs tracking-wider uppercase">{t('hero.node2')}</span>
          </motion.div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-12 left-1/4 z-20 glass-panel bg-surface-container-high/80 border border-outline-variant/30 rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          >
            <span className="material-symbols-outlined text-tertiary">api</span>
            <span className="font-label text-xs tracking-wider uppercase">{t('hero.node3')}</span>
          </motion.div>
          
          {/* Main Mockup Image */}
          <div className="relative rounded-2xl overflow-hidden border border-outline-variant/10 shadow-[0_0_80px_rgba(139,0,0,0.15)]">
            <img className="w-full h-auto grayscale-[0.2] brightness-90" alt="Dashboard visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8DSsv9IUtHMqE3E4MY4jQK9S5yyQsBJ0jzdvBq0KNYgeYSYDns0fzlzOFByvS1byX4qZU_dmXKEwOPyNo8p9BrNfwOmlZJGzJIuh4T4Yq1D-G106wNpqY9nk049jR-rMkgoqVJUsxhCwNue2TUMRuTiiC9y11xO5hbnyihGZTZvxpdvdR_LQx8j-BfwtL-5cVEwt1uXbZYEq9xDWQQOr2rcdvc5RmxxTviBb5-UrTDHJ_pVn2vyA4na8yV3TfhujowZt5m65e0Uc" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
