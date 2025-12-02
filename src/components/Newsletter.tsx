import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setMessage('You are already subscribed to our newsletter!');
          setStatus('error');
        } else {
          throw error;
        }
      } else {
        setMessage('Thank you for subscribing! Check your inbox for updates.');
        setStatus('success');
        setEmail('');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-float-delayed"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 animate-bounce-slow">
          <Mail className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          Stay Updated!
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          Subscribe to my newsletter for the latest web development tips, project updates, and exclusive training opportunities.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-fade-in-delay-2">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading'}
              className="flex-1 px-6 py-4 rounded-xl bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Subscribe</span>
                </>
              )}
            </button>
          </div>

          {message && (
            <div
              className={`mt-4 p-4 rounded-lg flex items-center gap-3 animate-slide-down ${
                status === 'success'
                  ? 'bg-green-500/20 border border-green-400 text-green-100'
                  : 'bg-red-500/20 border border-red-400 text-red-100'
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
        </form>

        <p className="mt-6 text-blue-200 text-sm animate-fade-in-delay-3">
          No spam, unsubscribe at any time. Your privacy is important to us.
        </p>
      </div>
    </section>
  );
};
