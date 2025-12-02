import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';
import { Training } from './pages/Training';
import { Privacy } from './pages/Privacy';
import { AdminLogin } from './pages/admin/Login';
import { AdminDashboard } from './pages/admin/Dashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const AppRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const { isAdmin, loading } = useAuth();

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (currentPath === '/admin') {
    return <AdminLogin />;
  }

  if (currentPath === '/admin/dashboard') {
    if (!isAdmin) {
      window.history.pushState({}, '', '/admin');
      window.dispatchEvent(new PopStateEvent('popstate'));
      return <AdminLogin />;
    }
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {currentPath === '/' && <Home />}
        {currentPath === '/about' && <About />}
        {currentPath === '/work' && <Work />}
        {currentPath === '/contact' && <Contact />}
        {currentPath === '/training' && <Training />}
        {currentPath === '/privacy' && <Privacy />}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
