import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  isWaitlistModalOpen: boolean;
  openWaitlistModal: (title?: string) => void;
  closeWaitlistModal: () => void;
  waitlistTitle?: string;
  isStealthModalOpen: boolean;
  openStealthModal: () => void;
  closeStealthModal: () => void;
  isPrivacyModalOpen: boolean;
  openPrivacyModal: () => void;
  closePrivacyModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [waitlistTitle, setWaitlistTitle] = useState<string | undefined>(undefined);
  const [isStealthModalOpen, setIsStealthModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isLoginModalOpen,
        openLoginModal: () => setIsLoginModalOpen(true),
        closeLoginModal: () => setIsLoginModalOpen(false),
        isWaitlistModalOpen,
        openWaitlistModal: (title?: string) => {
          setWaitlistTitle(title);
          setIsWaitlistModalOpen(true);
        },
        closeWaitlistModal: () => {
          setIsWaitlistModalOpen(false);
          setWaitlistTitle(undefined);
        },
        waitlistTitle,
        isStealthModalOpen,
        openStealthModal: () => setIsStealthModalOpen(true),
        closeStealthModal: () => setIsStealthModalOpen(false),
        isPrivacyModalOpen,
        openPrivacyModal: () => setIsPrivacyModalOpen(true),
        closePrivacyModal: () => setIsPrivacyModalOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
}
