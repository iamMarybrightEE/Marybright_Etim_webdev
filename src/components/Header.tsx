import { useState, useEffect } from 'react';
import { Menu, X, Code2, Home, User, Briefcase, Mail, BookOpen, Shield } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Our Work', href: '/work', icon: Briefcase },
    { name: 'Training', href: '/training', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    window.history.pushState({}, '', href);
    setCurrentPath(href);
    setIsMobileMenuOpen(false);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Code2
                className={`w-10 h-10 transition-all duration-300 ${
                  isScrolled ? 'text-blue-600' : 'text-white'
                } group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Marybright Etim
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group relative ${
                    isActive
                      ? isScrolled
                        ? 'text-blue-600 font-semibold'
                        : 'text-white font-semibold'
                      : isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-blue-500 animate-expand"></div>
                  )}
                </a>
              );
            })}
            {/* <a
              href="/admin"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/admin');
              }}
              className={`flex items-center gap-2 ml-4 px-5 py-2.5 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
                  : 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span className="font-medium">Admin</span>
            </a> */}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-900 hover:bg-blue-50' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-blue-100 shadow-2xl animate-slide-down">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold shadow-sm'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <a
              href="/admin"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/admin');
              }}
              className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 mt-4"
            >
              <Shield className="w-5 h-5" />
              <span className="font-medium">Admin Dashboard</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
