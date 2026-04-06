import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown, Activity } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useModals } from '../contexts/ModalContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { openLoginModal } = useModals();
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isDocsPage = location.pathname === '/docs';

  const navLinks = [
    { id: 'workflow', label: t('nav.workflow') },
    { id: 'features', label: t('nav.features') },
    { id: 'architecture', label: t('nav.architecture') },
    { id: 'capabilities', label: t('nav.capabilities') },
    { id: 'alignment', label: t('nav.alignment') },
    { id: 'vision', label: t('nav.vision') },
    { id: 'pricing', label: t('nav.pricing') },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.id);
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is above the middle of the viewport
          // and the bottom is below the top of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-0'}`}>
      <div className={`mx-auto transition-all duration-500 ${scrolled ? 'max-w-6xl px-4' : 'max-w-7xl px-8'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-[#131313]/80 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-outline-variant/20 rounded-full py-2 px-6' : 'bg-[#131313]/60 backdrop-blur-xl bg-gradient-to-b from-[#1b1b1b] to-transparent shadow-[0_60px_60px_-10px_rgba(0,0,0,0.5)] py-4'}`}>
          
          <div className="flex items-center gap-8">
            <Link to="/" onClick={(e) => { if (!isDocsPage) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} className="text-xl font-black tracking-tighter text-[#8B0000] font-headline flex-shrink-0 flex items-center gap-2">
              <Activity className="w-6 h-6 stroke-[3]" />
              IntelliFlow
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 relative">
              {!isDocsPage ? navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollTo(e, link.id)}
                  className={`relative font-headline font-bold tracking-tight text-xs uppercase px-4 py-2 rounded-full transition-colors duration-300 ease-in-out z-10 ${
                    activeSection === link.id 
                      ? 'text-white' 
                      : 'text-[#e3beb8]/70 hover:text-white hover:bg-surface-container-high/30'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary-container rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              )) : (
                <Link
                  to="/"
                  className="relative font-headline font-bold tracking-tight text-xs uppercase px-4 py-2 rounded-full transition-colors duration-300 ease-in-out z-10 text-[#e3beb8]/70 hover:text-white hover:bg-surface-container-high/30"
                >
                  {t('nav.home')}
                </Link>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="relative" ref={langDropdownRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 font-headline font-bold tracking-tight text-xs uppercase text-[#e3beb8]/80 hover:text-white transition-all px-3 py-2 rounded-full hover:bg-surface-container-high/30"
              >
                <Globe className="w-4 h-4" />
                {language === 'zh' ? '简体中文' : 'English'}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-36 bg-[#1b1b1b] border border-outline-variant/20 rounded-xl shadow-xl overflow-hidden z-50 backdrop-blur-xl"
                  >
                    <button
                      onClick={() => { setLanguage('zh'); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${language === 'zh' ? 'bg-primary-container/20 text-primary' : 'text-[#e3beb8]/80 hover:bg-surface-container hover:text-white'}`}
                    >
                      简体中文
                    </button>
                    <button
                      onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${language === 'en' ? 'bg-primary-container/20 text-primary' : 'text-[#e3beb8]/80 hover:bg-surface-container hover:text-white'}`}
                    >
                      English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={openLoginModal} className="font-headline font-bold tracking-tight text-xs uppercase text-[#e3beb8]/80 hover:text-white transition-all px-3 py-2">{t('nav.login')}</button>
            <button onClick={openLoginModal} className="bg-primary-container text-on-primary-container font-headline font-bold tracking-tight text-xs uppercase px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-container/20">{t('nav.start')}</button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container focus:outline-none relative"
            >
              <Globe className="w-5 h-5" />
              <span className="sr-only">Toggle Language</span>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-36 bg-[#1b1b1b] border border-outline-variant/20 rounded-xl shadow-xl overflow-hidden z-50 backdrop-blur-xl"
                  >
                    <div
                      onClick={(e) => { e.stopPropagation(); setLanguage('zh'); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${language === 'zh' ? 'bg-primary-container/20 text-primary' : 'text-[#e3beb8]/80 hover:bg-surface-container hover:text-white'}`}
                    >
                      简体中文
                    </div>
                    <div
                      onClick={(e) => { e.stopPropagation(); setLanguage('en'); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${language === 'en' ? 'bg-primary-container/20 text-primary' : 'text-[#e3beb8]/80 hover:bg-surface-container hover:text-white'}`}
                    >
                      English
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container focus:outline-none"
            >
              <span className="sr-only">打开主菜单</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-full left-0 w-full px-4 mt-2"
        >
          <div className="bg-surface-container-low border border-surface-container-high rounded-2xl shadow-2xl p-4 flex flex-col gap-2 backdrop-blur-xl">
            {!isDocsPage ? navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollTo(e, link.id)}
                className={`block px-4 py-3 rounded-xl text-sm font-bold tracking-tight uppercase transition-colors ${
                  activeSection === link.id
                    ? 'bg-primary-container/20 text-primary border-l-4 border-primary-container'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-white'
                }`}
              >
                {link.label}
              </a>
            )) : (
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-bold tracking-tight uppercase transition-colors text-on-surface-variant hover:bg-surface-container hover:text-white"
              >
                {t('nav.home')}
              </Link>
            )}
            <div className="mt-4 pt-4 border-t border-surface-container-high flex flex-col gap-3">
              <button onClick={() => { openLoginModal(); setIsOpen(false); }} className="w-full text-center font-bold tracking-tight text-sm uppercase text-on-surface-variant hover:text-white py-3 rounded-xl hover:bg-surface-container transition-colors">{t('nav.login')}</button>
              <button onClick={() => { openLoginModal(); setIsOpen(false); }} className="w-full bg-primary-container text-on-primary-container font-bold tracking-tight text-sm uppercase px-6 py-3 rounded-xl hover:bg-on-primary-fixed-variant transition-all shadow-lg">{t('nav.start')}</button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
