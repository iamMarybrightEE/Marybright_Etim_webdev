import { useState, useEffect } from 'react';

export const useCookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setHasConsent(true);
      setShowConsent(false);
    } else {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setHasConsent(true);
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setHasConsent(false);
    setShowConsent(false);
  };

  return { showConsent, hasConsent, acceptCookies, declineCookies };
};
