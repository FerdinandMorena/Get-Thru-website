import { useState } from 'react';
import Hero from '../components/Hero';
import AuthModal from '../components/AuthModal';

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleGetStarted = () => {
    setShowAuthModal(true);
  };

  const handleCloseModal = () => {
    setShowAuthModal(false);
  };

  return (
    <>
      <Hero onGetStarted={handleGetStarted} />
      <AuthModal isOpen={showAuthModal} onClose={handleCloseModal} />
    </>
  );
}
