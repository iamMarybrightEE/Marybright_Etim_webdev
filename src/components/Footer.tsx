import { Code2, Mail, Phone, MapPin, Github, Linkedin, Send, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Work', href: '/work' },
    { name: 'Training', href: '/training' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Frontend Development',
    'Full-Stack Development',
    'UI/UX Implementation',
    'Web Development Training',
    'Website Optimization',
    'Responsive Design',
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMzB4MmI0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Code2 className="w-10 h-10 text-blue-400" />
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-30"></div>
              </div>
              <span className="text-2xl font-bold">Marybright</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creative and innovative web developer specializing in building functional, user-friendly, and mobile-responsive websites and applications.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/iamMarybrightEE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-blue-500 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-blue-500 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/256707260809"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-blue-500 transition-all duration-300 group"
              >
                <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:em193273@students.cavendish.ac.ug"
                  className="flex items-start gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">em193273@students.cavendish.ac.ug</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/256707260809"
                  className="flex items-start gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+256 707 260 809</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Kampala, Uganda</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Marybright Etim. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy & Cookies
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/admin"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Admin
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Marybright Etim
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
