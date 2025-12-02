import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { Newsletter } from '../components/Newsletter';
import { FAQ } from '../components/FAQ';

export const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'UNOM Strategic Partners Ltd',
      description:
        'UNOM Strategic Partners Ltd is a forward-thinking consultancy and innovation-driven organization committed to empowering businesses, institutions, and entrepreneurs with strategic solutions that inspire growth, sustainability, and excellence. With a strong foundation in professionalism, integrity, and client-centred service delivery, UNOM stands as a trusted partner for organizations seeking clarity, direction, and measurable results in an ever-changing business environment.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      live: 'https://unomstrategicpartnersltd.vercel.app/',
      github: 'https://github.com/iamMarybrightEE/UNOM',
      image: '../../public/unom.png',
      category: 'Web Application',
    },
    {
      title: 'Mchango',
      description:
        'A blockchain web application with a functional admin dashboard. Built with Next.js and Tailwind CSS as part of a collaborative team including a project manager, UI/UX designer, and blockchain developer.',
      technologies: ['Next.js', 'Tailwind CSS', 'Blockchain', 'TypeScript'],
      live: 'https://mchango-frontend-kappa.vercel.app/',
      github: 'https://github.com/iamMarybrightEE/mchango_frontend',
      image: '../../public/mchango.png',
      category: 'Web Application',
    },
    {
      title: 'Arit Foundation Website',
      description:
        'A comprehensive website designed for an NGO focused on training and empowering children and youth. Built with HTML, CSS, and JavaScript with a focus on accessibility and user experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      live: 'https://arit-foundation.vercel.app/',
      github: 'https://github.com/iamMarybrightEE/Arit-Foundation',
      image: '../../public/arit.png',
      category: 'NGO Website',
    },
    {
      title: 'Reformer Blog',
      description:
        'A functional e-commerce admin dashboard built with React.js, Firebase Firestore for real-time database management, Firebase Authentication for secure user management, and styled with Tailwind CSS.',
      technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'Authentication'],
      github: 'https://github.com/iamMarybrightEE/reformer-blog',
      image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'Admin Dashboard',
    },
    {
      title: 'Uwem-Ima Foundation Website',
      description:
        'A modern website designed for an NGO dedicated to training and empowering children and youth. Features include responsive design, smooth animations, and optimized performance.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Animation'],
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'NGO Website',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 animate-bounce-slow">
            <Layers className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            Explore my portfolio of web development projects that showcase innovation, creativity, and technical excellence
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Showcasing my best work in web development and design
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                        <div className="space-y-6 flex flex-col justify-center">
                          <div>
                            <span className="px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-4xl md:text-5xl font-bold text-white">
                            {project.title}
                          </h3>
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-white/10 text-blue-200 rounded-lg text-sm border border-white/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-4 pt-4">
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                              >
                                <ExternalLink className="w-5 h-5" />
                                <span>View Live</span>
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                              >
                                <Github className="w-5 h-5" />
                                <span>GitHub</span>
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="relative rounded-2xl shadow-2xl w-full h-full object-cover border border-white/10 group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? 'w-12 h-3 bg-blue-500'
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my work and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Live</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's collaborate to bring your vision to life with modern web technologies
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <FAQ />
      <Newsletter />
    </div>
  );
};
