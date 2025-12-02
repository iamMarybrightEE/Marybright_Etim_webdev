import { Code2, Rocket, Users, Award, ArrowRight, Sparkles } from 'lucide-react';
import { Newsletter } from '../components/Newsletter';
import { FAQ } from '../components/FAQ';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">Welcome to My Digital Space</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-delay leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-blue-200 to-white bg-clip-text text-transparent animate-gradient">
              Marybright Etim
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-blue-100 mb-8 animate-fade-in-delay-2 font-light">
            Creative Frontend Web Developer
          </p>

          <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-3">
            I craft beautiful, functional, and user-friendly web experiences using modern technologies.
            From stunning interfaces to powerful web applications, I bring your digital vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-delay-4">
            <a
              href="/work"
              className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-600/20 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-delay-5">
            {[
              { icon: Code2, label: 'Clean Code', value: '100%' },
              { icon: Rocket, label: 'Fast Delivery', value: 'Always' },
              { icon: Users, label: 'Happy Clients', value: '50+' },
              { icon: Award, label: 'Projects Done', value: '40+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expertise in modern web development with a focus on creating exceptional user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                description:
                  'Building responsive, performant, and beautiful interfaces using React, Next.js, and modern CSS frameworks like Tailwind CSS.',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                title: 'Full-Stack Solutions',
                description:
                  'Creating complete web applications with seamless frontend-backend integration using Node.js, Firebase, and Supabase.',
                gradient: 'from-blue-600 to-blue-700',
              },
              {
                title: 'Training & Mentorship',
                description:
                  'Empowering aspiring developers through hands-on training programs in HTML, CSS, JavaScript, React, and more.',
                gradient: 'from-blue-700 to-blue-800',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient} rounded-t-2xl`}
                ></div>
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative parallax-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life. Whether it's a new website, web application, or learning web development, I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  Start a Project
                </a>
                <a
                  href="/training"
                  className="px-8 py-4 bg-blue-500/20 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Explore Training
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Newsletter />
    </div>
  );
};
