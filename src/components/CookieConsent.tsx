import { X, Cookie } from 'lucide-react';
import { useCookieConsent } from '../hooks/useCookieConsent';

export const CookieConsent = () => {
  const { showConsent, acceptCookies, declineCookies } = useCookieConsent();

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 backdrop-blur-lg border-t border-blue-500/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <Cookie className="w-8 h-8 text-blue-300 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                  By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                  <a href="/privacy" className="text-blue-300 hover:text-blue-200 underline transition-colors">
                    Privacy & Cookies Policy
                  </a>
                  {' '}to learn more.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="flex-1 md:flex-none px-6 py-3 text-white border border-blue-400 rounded-lg hover:bg-blue-800 transition-all duration-300 font-medium"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 md:flex-none px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium shadow-lg shadow-blue-500/30"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
