import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useModals } from '../contexts/ModalContext';
import { Activity } from 'lucide-react';
import { 
  FaGithub, 
  FaXTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp, 
  FaLinkedin, 
  FaYoutube, 
  FaGoogle, 
  FaReddit, 
  FaDiscord, 
  FaTelegram, 
  FaTiktok 
} from 'react-icons/fa6';

export default function Footer() {
  const { t } = useLanguage();
  const { openStealthModal, openPrivacyModal } = useModals();
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <footer className="bg-surface border-t border-surface-container-high pt-16 pb-8 overflow-hidden relative">
      {/* Global Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-surface-container-highest border border-outline-variant/20 px-6 py-3 rounded-full shadow-2xl backdrop-blur-md text-sm font-medium text-on-surface"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <a href="#" className="font-headline text-2xl font-bold text-primary tracking-tight mb-4 flex items-center gap-2">
              <Activity className="w-8 h-8 stroke-[3]" />
              IntelliFlow
            </a>
            <p className="text-on-surface-variant text-sm">
              {t('footer.desc')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-on-surface font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a href="#features" className="hover:text-primary transition-colors">{t('footer.features')}</a></li>
              <li><button onClick={() => showToast("系统当前已原生集成 50+ 种数据源与 SaaS API，完整拓扑图即将于文档中心更新。")} className="hover:text-primary transition-colors text-left">{t('footer.integrations')}</button></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">{t('footer.pricing')}</a></li>
              <li>
                <button 
                  onClick={() => showToast(`Changelog v0.9.4-beta:\n- 优化了大模型的 Token 消耗熵值\n- 修复了沙箱边缘场景下的并发死锁\n- 增强了 DAG 逆向推导的鲁棒性`)} 
                  className="hover:text-primary transition-colors text-left"
                >
                  {t('footer.changelog')}
                </button>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-on-surface font-semibold mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><button onClick={() => showToast("当前 API 仅对内测白名单用户开放，请查阅您的入驻欢迎邮件获取完整阅读权限。")} className="hover:text-primary transition-colors text-left">{t('footer.docs')}</button></li>
              <li><button onClick={() => showToast("当前 API 仅对内测白名单用户开放，请查阅您的入驻欢迎邮件获取完整阅读权限。")} className="hover:text-primary transition-colors text-left">{t('footer.api')}</button></li>
              <li><button onClick={() => showToast("开发者社区当前仅对内测白名单用户开放。")} className="hover:text-primary transition-colors text-left">{t('footer.community')}</button></li>
              <li><a href="https://illyaornstein.substack.com/p/dag" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('footer.blog')}</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-on-surface font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><button onClick={openStealthModal} className="hover:text-primary transition-colors text-left">{t('footer.about')}</button></li>
              <li><button onClick={openStealthModal} className="hover:text-primary transition-colors text-left">{t('footer.careers')}</button></li>
              <li><button onClick={openPrivacyModal} className="hover:text-primary transition-colors text-left">{t('footer.privacy')}</button></li>
              <li><button onClick={openPrivacyModal} className="hover:text-primary transition-colors text-left">{t('footer.terms')}</button></li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-surface-container-high pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-on-surface-variant text-sm mb-4 md:mb-0 font-label tracking-widest uppercase text-[10px]">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end mt-6 md:mt-0">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">X (Twitter)</span>
              <FaXTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">YouTube</span>
              <FaYoutube className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">Google</span>
              <FaGoogle className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">Reddit</span>
              <FaReddit className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">Discord</span>
              <FaDiscord className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">Telegram</span>
              <FaTelegram className="h-6 w-6" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <span className="sr-only">TikTok</span>
              <FaTiktok className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
