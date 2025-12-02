import { useState, useEffect } from 'react';
import { BookOpen, Users, Award, Clock, Star, CheckCircle } from 'lucide-react';
import { supabase, Testimonial } from '../lib/supabase';
import { Newsletter } from '../components/Newsletter';
import { FAQ } from '../components/FAQ';

export const Training = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const programs = [
    {
      title: 'Web Development Fundamentals',
      description: 'Master the core technologies of web development including HTML5, CSS3, and JavaScript',
      duration: '8 weeks',
      level: 'Beginner',
      topics: ['HTML5 & Semantic Markup', 'CSS3 & Responsive Design', 'JavaScript Basics', 'DOM Manipulation', 'Git & GitHub'],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Advanced Frontend Development',
      description: 'Build modern web applications with React.js, Next.js, and advanced JavaScript',
      duration: '12 weeks',
      level: 'Intermediate',
      topics: ['React.js & Hooks', 'Next.js & SSR', 'State Management', 'API Integration', 'TypeScript'],
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      title: 'Full-Stack Web Development',
      description: 'Complete web development training from frontend to backend and deployment',
      duration: '16 weeks',
      level: 'Advanced',
      topics: ['Frontend Frameworks', 'Node.js & Express', 'Database Design', 'Authentication', 'Deployment'],
      gradient: 'from-blue-700 to-blue-800',
    },
  ];

  const benefits = [
    'Hands-on project-based learning',
    'One-on-one mentorship',
    'Real-world project experience',
    'Portfolio development assistance',
    'Career guidance and support',
    'Lifetime access to course materials',
    'Certificate of completion',
    'Job placement assistance',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 animate-bounce-slow">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Web Development Training
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            Transform your passion for technology into a rewarding career with comprehensive, hands-on training
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Learn With Me?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I provide personalized training that focuses on practical skills and real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '50+', label: 'Students Trained' },
              { icon: Award, value: '100%', label: 'Success Rate' },
              { icon: Clock, value: '500+', label: 'Training Hours' },
              { icon: Star, value: '5.0', label: 'Average Rating' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the program that best fits your goals and experience level
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      {program.level}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 text-sm">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  <div className="space-y-3 mb-6">
                    {program.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/contact"
                    className="block w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold text-center hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What You'll Gain</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive benefits that go beyond just learning to code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from students who have transformed their careers through my training programs
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.message}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards becoming a professional web developer. Contact me to discuss your learning goals and get started today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Enroll Now
            </a>
            <a
              href="https://wa.me/256707260809"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-500/20 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FAQ />
      <Newsletter />
    </div>
  );
};
