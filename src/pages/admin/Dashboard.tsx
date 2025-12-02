import { useState, useEffect } from 'react';
import {
  Mail,
  Users,
  Star,
  HelpCircle,
  LogOut,
  Trash2,
  CheckCircle,
  XCircle,
  Eye,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, Contact, NewsletterSubscriber, Testimonial, FAQ } from '../../lib/supabase';

export const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<'contacts' | 'subscribers' | 'testimonials' | 'faqs'>(
    'contacts'
  );
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contactsRes, subscribersRes, testimonialsRes, faqsRes] = await Promise.all([
        supabase.from('contacts').select('*').order('created_at', { ascending: false }),
        supabase
          .from('newsletter_subscribers')
          .select('*')
          .order('subscribed_at', { ascending: false }),
        supabase.from('testimonials').select('*').order('created_at', { ascending: false }),
        supabase.from('faqs').select('*').order('order_index', { ascending: true }),
      ]);

      if (contactsRes.data) setContacts(contactsRes.data);
      if (subscribersRes.data) setSubscribers(subscribersRes.data);
      if (testimonialsRes.data) setTestimonials(testimonialsRes.data);
      if (faqsRes.data) setFaqs(faqsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;
    await supabase.from('contacts').delete().eq('id', id);
    fetchData();
  };

  const handleDeleteSubscriber = async (id: string) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return;
    await supabase.from('newsletter_subscribers').delete().eq('id', id);
    fetchData();
  };

  const handleApproveTestimonial = async (id: string, isApproved: boolean) => {
    await supabase.from('testimonials').update({ is_approved: isApproved }).eq('id', id);
    fetchData();
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    await supabase.from('testimonials').delete().eq('id', id);
    fetchData();
  };

  const handleSignOut = async () => {
    await signOut();
    window.history.pushState({}, '', '/admin');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const stats = [
    { label: 'Total Contacts', value: contacts.length, icon: Mail, color: 'blue' },
    { label: 'Newsletter Subscribers', value: subscribers.length, icon: Users, color: 'green' },
    { label: 'Testimonials', value: testimonials.length, icon: Star, color: 'yellow' },
    { label: 'FAQs', value: faqs.length, icon: HelpCircle, color: 'purple' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-blue-100 mt-1">Welcome back, {user?.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/20"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                { id: 'contacts', label: 'Contacts', icon: Mail },
                { id: 'subscribers', label: 'Subscribers', icon: Users },
                { id: 'testimonials', label: 'Testimonials', icon: Star },
                { id: 'faqs', label: 'FAQs', icon: HelpCircle },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-300 border-b-2 ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            ) : (
              <>
                {activeTab === 'contacts' && (
                  <div className="space-y-4">
                    {contacts.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">No contacts yet</p>
                    ) : (
                      contacts.map((contact) => (
                        <div
                          key={contact.id}
                          className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-lg font-bold text-gray-900">{contact.name}</h3>
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    contact.status === 'new'
                                      ? 'bg-blue-100 text-blue-600'
                                      : 'bg-gray-100 text-gray-600'
                                  }`}
                                >
                                  {contact.status}
                                </span>
                              </div>
                              <p className="text-gray-600 mb-2">{contact.email}</p>
                              {contact.subject && (
                                <p className="text-sm text-gray-700 font-medium mb-2">
                                  Subject: {contact.subject}
                                </p>
                              )}
                              <p className="text-gray-700 mb-3">{contact.message}</p>
                              <p className="text-sm text-gray-500">
                                {new Date(contact.created_at).toLocaleString()}
                              </p>
                            </div>
                            <button
                              onClick={() => handleDeleteContact(contact.id)}
                              className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {activeTab === 'subscribers' && (
                  <div className="space-y-4">
                    {subscribers.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">No subscribers yet</p>
                    ) : (
                      subscribers.map((subscriber) => (
                        <div
                          key={subscriber.id}
                          className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 flex items-center justify-between"
                        >
                          <div>
                            <p className="text-lg font-semibold text-gray-900">{subscriber.email}</p>
                            <p className="text-sm text-gray-500">
                              Subscribed: {new Date(subscriber.subscribed_at).toLocaleDateString()}
                            </p>
                          </div>
                          <button
                            onClick={() => handleDeleteSubscriber(subscriber.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {activeTab === 'testimonials' && (
                  <div className="space-y-4">
                    {testimonials.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">No testimonials yet</p>
                    ) : (
                      testimonials.map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-lg font-bold text-gray-900">
                                  {testimonial.name}
                                </h3>
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    testimonial.is_approved
                                      ? 'bg-green-100 text-green-600'
                                      : 'bg-yellow-100 text-yellow-600'
                                  }`}
                                >
                                  {testimonial.is_approved ? 'Approved' : 'Pending'}
                                </span>
                              </div>
                              <p className="text-gray-600 mb-2">{testimonial.role}</p>
                              <p className="text-gray-700 mb-3 italic">"{testimonial.message}"</p>
                              <div className="flex items-center gap-1 mb-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                              </div>
                              <p className="text-sm text-gray-500">
                                {new Date(testimonial.created_at).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2 ml-4">
                              {!testimonial.is_approved && (
                                <button
                                  onClick={() => handleApproveTestimonial(testimonial.id, true)}
                                  className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                  title="Approve"
                                >
                                  <CheckCircle className="w-5 h-5" />
                                </button>
                              )}
                              {testimonial.is_approved && (
                                <button
                                  onClick={() => handleApproveTestimonial(testimonial.id, false)}
                                  className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                                  title="Unapprove"
                                >
                                  <XCircle className="w-5 h-5" />
                                </button>
                              )}
                              <button
                                onClick={() => handleDeleteTestimonial(testimonial.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {activeTab === 'faqs' && (
                  <div className="space-y-4">
                    {faqs.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">No FAQs yet</p>
                    ) : (
                      faqs.map((faq) => (
                        <div
                          key={faq.id}
                          className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                                  {faq.category}
                                </span>
                                {faq.is_active && (
                                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                                    Active
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-700">{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
