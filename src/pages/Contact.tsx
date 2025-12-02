import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Newsletter } from '../components/Newsletter';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase.from('contacts').insert([formData]);

      if (error) throw error;

      setMessage('Thank you for reaching out! I will get back to you soon.');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setMessage('Something went wrong. Please try again or contact me directly via email.');
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 animate-bounce-slow">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            Have a project in mind or want to learn web development? Let's connect and make it happen!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Talk</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6 animate-fade-in-delay">
                <a
                  href="mailto:em193273@students.cavendish.ac.ug"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">em193273@students.cavendish.ac.ug</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/256707260809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Phone / WhatsApp</h3>
                    <p className="text-gray-600">+256 707 260 809</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Kampala, Uganda</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-white animate-fade-in-delay-2">
                <h3 className="text-xl font-bold mb-3">Response Time</h3>
                <p className="text-blue-100">
                  I typically respond to messages within 24 hours during business days. For urgent matters, feel free to reach out via WhatsApp.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100 animate-fade-in-delay"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 resize-none disabled:opacity-50"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {message && (
                    <div
                      className={`p-4 rounded-xl flex items-center gap-3 animate-slide-down ${
                        status === 'success'
                          ? 'bg-green-50 border border-green-200 text-green-800'
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}
                    >
                      {status === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className="text-sm">{message}</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};
