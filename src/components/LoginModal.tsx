import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, AlertTriangle, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useModals } from '../contexts/ModalContext';

export default function LoginModal() {
  const { t } = useLanguage();
  const { isLoginModalOpen, closeLoginModal, openWaitlistModal } = useModals();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showApplyBtn, setShowApplyBtn] = useState(false);
  const [isShake, setIsShake] = useState(false);
  
  const [oauthLoading, setOauthLoading] = useState(false);
  const [oauthError, setOauthError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoginModalOpen) {
      setEmail('');
      setPassword('');
      setIsSubmitting(false);
      setError(null);
      setShowApplyBtn(false);
      setIsShake(false);
      setOauthLoading(false);
      setOauthError(null);
    }
  }, [isLoginModalOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsSubmitting(true);
    setError(null);
    setShowApplyBtn(false);

    // Fake communication
    setTimeout(() => {
      setIsSubmitting(false);
      setIsShake(true);
      setError(t('login.error.403'));
      
      // Remove shake class after animation
      setTimeout(() => setIsShake(false), 500);
      
      // Show apply button shortly after error
      setTimeout(() => setShowApplyBtn(true), 300);
    }, 1500);
  };

  const handleOAuth = (provider: 'google' | 'github' | 'microsoft' | 'apple' | 'slack' | 'twitter') => {
    setOauthLoading(true);
    setOauthError(null);
    
    setTimeout(() => {
      setOauthLoading(false);
      setOauthError(t('login.oauth.error'));
      
      // Hide toast after 5 seconds
      setTimeout(() => setOauthError(null), 5000);
    }, 1500);
  };

  const handleApplyClick = () => {
    closeLoginModal();
    openWaitlistModal();
  };

  return (
    <AnimatePresence>
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLoginModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* OAuth Error Toast */}
          <AnimatePresence>
            {oauthError && (
              <motion.div
                initial={{ opacity: 0, y: -20, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, y: -20, x: '-50%' }}
                className="fixed top-8 left-1/2 z-[60] max-w-md w-full px-4"
              >
                <div className="bg-surface-container-highest border border-yellow-500/30 shadow-2xl rounded-xl p-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-on-surface leading-relaxed">
                    {oauthError}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-md bg-[#131313]/60 backdrop-blur-3xl border border-outline-variant/30 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {/* Top Progress Bar for OAuth Loading */}
            {oauthLoading && (
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-1 bg-primary z-20"
              />
            )}

            {/* Close Button */}
            <button
              onClick={closeLoginModal}
              className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-white hover:bg-surface-container rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface-container-low border border-outline-variant/20 mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">lock</span>
                </div>
                <h2 className="text-2xl font-headline font-black text-white mb-2 tracking-tight">
                  {t('login.title')}
                </h2>
                <p className="text-sm text-on-surface-variant">
                  {t('login.subtitle')}
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('login.email')}
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-white placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
                  />
                  
                  <motion.div
                    animate={isShake ? { x: [-5, 5, -5, 5, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t('login.password')}
                      className={`w-full bg-surface-container-low border ${error ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50' : 'border-outline-variant/20 focus:border-primary/50 focus:ring-primary/50'} rounded-xl px-4 py-3 text-white placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 transition-all font-mono text-sm`}
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs font-mono text-red-400 mt-2">
                        {error}
                      </p>
                      
                      <AnimatePresence>
                        {showApplyBtn && (
                          <motion.button
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            type="button"
                            onClick={handleApplyClick}
                            className="mt-3 w-full py-2.5 rounded-lg border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider hover:bg-red-500/10 transition-colors"
                          >
                            {t('login.apply')}
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting || !email || !password || oauthLoading}
                  className="w-full relative group overflow-hidden rounded-xl bg-primary-container text-white font-bold py-3.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-on-primary-fixed-variant mt-2"
                >
                  <span className="relative flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t('login.btn.loading')}
                      </>
                    ) : (
                      t('login.btn')
                    )}
                  </span>
                </button>
              </form>

              <div className="mt-8">
                <div className="relative flex items-center py-2 mb-6">
                  <div className="flex-grow border-t border-outline-variant/20"></div>
                  <span className="flex-shrink-0 mx-4 text-xs text-on-surface-variant uppercase tracking-widest font-label">OR</span>
                  <div className="flex-grow border-t border-outline-variant/20"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleOAuth('google')}
                    disabled={oauthLoading || isSubmitting}
                    className="group w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 hover:bg-surface-container transition-all duration-300 text-xs font-medium text-on-surface-variant hover:text-white disabled:opacity-50"
                  >
                    <svg className="w-4 h-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Google
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => handleOAuth('microsoft')}
                    disabled={oauthLoading || isSubmitting}
                    className="group w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 hover:bg-surface-container transition-all duration-300 text-xs font-medium text-on-surface-variant hover:text-white disabled:opacity-50"
                  >
                    <svg className="w-4 h-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 21 21">
                      <path fill="#f25022" d="M1 1h9v9H1z"/>
                      <path fill="#00a4ef" d="M1 11h9v9H1z"/>
                      <path fill="#7fba00" d="M11 1h9v9h-9z"/>
                      <path fill="#ffb900" d="M11 11h9v9h-9z"/>
                    </svg>
                    Microsoft
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => handleOAuth('github')}
                    disabled={oauthLoading || isSubmitting}
                    className="group w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 hover:bg-surface-container transition-all duration-300 text-xs font-medium text-on-surface-variant hover:text-white disabled:opacity-50"
                  >
                    <Github className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-all duration-300" />
                    GitHub
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOAuth('apple')}
                    disabled={oauthLoading || isSubmitting}
                    className="group w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 hover:bg-surface-container transition-all duration-300 text-xs font-medium text-on-surface-variant hover:text-white disabled:opacity-50"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.56.04 2.87.74 3.65 1.9-3.13 1.98-2.6 6.11.53 7.36-.71 1.73-1.54 3.46-2.85 4.67zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    Apple
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOAuth('slack')}
                    disabled={oauthLoading || isSubmitting}
                    className="group w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 hover:bg-surface-container transition-all duration-300 text-xs font-medium text-on-surface-variant hover:text-white disabled:opacity-50"
                  >
                    <svg className="w-4 h-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 24 24">
                      <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"/>
                      <path fill="#E01E5A" d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
                      <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z"/>
                      <path fill="#36C5F0" d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
                      <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z"/>
                      <path fill="#2EB67D" d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
                      <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z"/>
                      <path fill="#ECB22E" d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                    </svg>
                    Slack
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOAuth('twitter')}
                    disabled={oauthLoading || isSubmitting}
                    className="group w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 hover:bg-surface-container transition-all duration-300 text-xs font-medium text-on-surface-variant hover:text-white disabled:opacity-50"
                  >
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X (Twitter)
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
