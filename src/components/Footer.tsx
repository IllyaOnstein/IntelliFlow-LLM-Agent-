import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
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

  return (
    <footer className="bg-surface border-t border-surface-container-high pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <a href="#" className="font-headline text-2xl font-bold text-primary tracking-tight mb-4 block">
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
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.features')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.integrations')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.pricing')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.changelog')}</a></li>
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
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.docs')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.api')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.community')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.blog')}</a></li>
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
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.careers')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a></li>
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
