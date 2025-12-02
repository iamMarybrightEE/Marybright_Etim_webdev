import { Shield, Cookie, Lock, Eye, Database, FileText } from 'lucide-react';

export const Privacy = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 animate-bounce-slow">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Privacy & Cookies Policy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            Your privacy is important to us. Learn how we collect, use, and protect your data.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-12">
              <p className="text-gray-700 leading-relaxed m-0">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="space-y-12">
              <div className="animate-fade-in">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-0">Introduction</h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Marybright Etim's portfolio website. This Privacy & Cookies Policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services. By using this website, you agree to the terms outlined in this policy.
                </p>
              </div>

              <div className="animate-fade-in-delay">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-0">Information We Collect</h2>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      When you contact us through our contact form or subscribe to our newsletter, we may collect:
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="text-gray-700">Your name</li>
                      <li className="text-gray-700">Email address</li>
                      <li className="text-gray-700">Phone number (if provided)</li>
                      <li className="text-gray-700">Message content</li>
                      <li className="text-gray-700">Any other information you choose to provide</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      When you visit our website, we may automatically collect:
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="text-gray-700">Browser type and version</li>
                      <li className="text-gray-700">Operating system</li>
                      <li className="text-gray-700">IP address</li>
                      <li className="text-gray-700">Pages visited and time spent on pages</li>
                      <li className="text-gray-700">Referring website addresses</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-delay-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-0">How We Use Your Information</h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Communication</h4>
                    <p className="text-gray-700 text-sm">To respond to your inquiries and provide customer support</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Newsletter</h4>
                    <p className="text-gray-700 text-sm">To send you updates, tips, and news (only if you subscribe)</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Improvement</h4>
                    <p className="text-gray-700 text-sm">To improve our website and services based on user feedback</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Analytics</h4>
                    <p className="text-gray-700 text-sm">To understand how visitors interact with our website</p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-delay-3">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-0">Cookies Policy</h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and improve website functionality.
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Types of Cookies We Use</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                        <p className="text-gray-700 text-sm">Required for the website to function properly. These cannot be disabled.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Functional Cookies</h4>
                        <p className="text-gray-700 text-sm">Remember your preferences and choices to provide a personalized experience.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                        <p className="text-gray-700 text-sm">Help us understand how visitors use our website to improve performance and content.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Managing Cookies</h4>
                    <p className="text-gray-700 text-sm">
                      You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of this website. You can also manage your cookie preferences using the cookie consent banner that appears on your first visit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-delay-4">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-0">Data Security</h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We take the security of your personal information seriously. We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. This includes:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="text-gray-700">Secure data encryption (SSL/TLS)</li>
                  <li className="text-gray-700">Regular security audits and updates</li>
                  <li className="text-gray-700">Access controls and authentication</li>
                  <li className="text-gray-700">Secure database storage with Supabase</li>
                  <li className="text-gray-700">Regular backups and disaster recovery procedures</li>
                </ul>
              </div>

              <div className="animate-fade-in-delay-5">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-0">Your Rights</h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Access</h4>
                    <p className="text-gray-700 text-sm">Request a copy of the personal data we hold about you</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Correction</h4>
                    <p className="text-gray-700 text-sm">Request correction of inaccurate or incomplete data</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Deletion</h4>
                    <p className="text-gray-700 text-sm">Request deletion of your personal information</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Opt-Out</h4>
                    <p className="text-gray-700 text-sm">Unsubscribe from marketing communications at any time</p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-delay-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-0">Third-Party Services</h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites and uses third-party services including:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="text-gray-700">Supabase for database and authentication services</li>
                  <li className="text-gray-700">GitHub for project repositories</li>
                  <li className="text-gray-700">LinkedIn for professional networking</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These third-party services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party websites.
                </p>
              </div>

              <div className="animate-fade-in-delay-7">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-0">Changes to This Policy</h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy & Cookies Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on this page with a new "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="animate-fade-in-delay-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-0">Contact Us</h2>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions, concerns, or requests regarding this Privacy & Cookies Policy or your personal information, please contact us:
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:em193273@students.cavendish.ac.ug" className="text-blue-600 hover:text-blue-700">
                        em193273@students.cavendish.ac.ug
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone / WhatsApp</h4>
                      <a href="https://wa.me/256707260809" className="text-blue-600 hover:text-blue-700">
                        +256 707 260 809
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-700">Kampala, Uganda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Privacy Matters
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We are committed to protecting your personal information and being transparent about our data practices.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:scale-105"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
};
