import React, { useRef, useEffect } from 'react';
import { Code2, Database, Cloud, Cpu, Shield, LineChart } from 'lucide-react';

const technologies = [
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI & Machine Learning",
    description: "Advanced algorithms for crop analysis, disease detection, and yield prediction powered by state-of-the-art machine learning models."
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Big Data Analytics",
    description: "Process and analyze vast amounts of agricultural data to derive actionable insights for better decision-making."
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Infrastructure",
    description: "Scalable cloud architecture ensuring reliable access to your agricultural data and analytics anywhere, anytime."
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "API Integration",
    description: "Seamless integration with existing farm management systems and third-party agricultural services."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Data Security",
    description: "Enterprise-grade security protocols protecting your sensitive agricultural data and business intelligence."
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Real-time Analytics",
    description: "Instant insights and alerts through real-time monitoring and analysis of farm conditions."
  }
];

const Technology = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.tech-card');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="technology" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block p-2 px-4 bg-green-100 rounded-full mb-4">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Technology Stack</h2>
          </div>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Powered by Innovation
          </p>
          <p className="mt-6 max-w-2xl text-xl text-gray-500 mx-auto">
            Our platform leverages cutting-edge technology to deliver precise agricultural insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card opacity-0 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl mb-6">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
              <p className="text-gray-600 leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;