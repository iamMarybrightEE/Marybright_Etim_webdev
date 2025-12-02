import { Award, BookOpen, Code2, GraduationCap, Target, Zap } from 'lucide-react';
import { Newsletter } from '../components/Newsletter';
import { FAQ } from '../components/FAQ';

export const About = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Bootstrap',
    'MongoDB',
    'Firebase',
    'Supabase',
    'Git & GitHub',
    'Figma',
    'UI/UX Design',
    'SEO',
    'AWS',
    'Google Cloud',
  ];

  const achievements = [
    'Winner of Oron Inter-School Quiz Competition (2 years)',
    'Best in Life Sciences - Science Association of Nigeria National Quiz',
    'Winner of Oro Next Generation Bible Quiz',
    'Winner of Handmaids of the Holy Child Jesus Quiz',
    'Second Best Clarinetist - Music Teachers Association of Nigeria',
    'Best Graduating Student 2020 - Infant Jesus Model Secondary School',
    'Senior Prefect - Leadership Excellence',
  ];

  const certifications = [
    {
      title: 'Meta Front-end Engineer Professional Certificate',
      issuer: 'Meta via Coursera',
      icon: Award,
    },
    {
      title: 'Certificate Program in Web Design',
      issuer: 'NIIT, Abuja',
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            A passionate developer dedicated to creating innovative solutions and empowering the next generation of web developers
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Creative & Innovative Developer
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a creative and innovative web developer highly skilled in building and developing static and dynamic websites and web applications. My work is characterized by clean design, functionality, user-friendliness, optimization, and mobile responsiveness.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I aspire to contribute to a purpose larger than life by employing a scientific approach through which I tackle problems optimally and ensure every pixel is aesthetically aligned. I take responsibility for every noticed or unnoticed bug, striving to deliver my very best while wearing various hats.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a lifelong learner and frontend developer, I continuously expand my knowledge and skills to stay at the forefront of web development technologies and best practices.
              </p>
            </div>

            <div className="relative animate-fade-in-delay">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur-2xl opacity-20 animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">My Mission</h3>
                      <p className="text-blue-100">
                        To create exceptional web experiences that solve real problems and empower businesses to thrive in the digital world.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-white/20"></div>
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">My Approach</h3>
                      <p className="text-blue-100">
                        Combining technical excellence with creative design, I deliver solutions that are both beautiful and functional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proficient in a wide range of modern web development technologies and tools
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 hover:-translate-y-1 animate-fade-in group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Bachelors in Computer Science
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">Cavendish University Uganda</p>
                  <p className="text-gray-600">2024 - Current</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 animate-fade-in-delay">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">A Levels | O Levels</h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    Infant Jesus Model Secondary School, Oron
                  </p>
                  <p className="text-gray-600 mb-2">2014 - 2020 | Science - Distinction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Certifications & Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                      <p className="text-blue-600 font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Academic & Leadership Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Newsletter />
    </div>
  );
};
