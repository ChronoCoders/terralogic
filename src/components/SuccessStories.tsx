import React, { useRef, useEffect } from 'react';
import { TrendingUp, Droplet, Sprout, Sun } from 'lucide-react';

const stories = [
  {
    icon: <Sprout className="h-6 w-6" />,
    title: "Midwest Grain Belt Transformation",
    category: "Crop Yield Optimization",
    metrics: [
      { label: "Yield Increase", value: "35%" },
      { label: "Cost Reduction", value: "28%" }
    ],
    description: "Implemented precision agriculture across 50,000 acres of wheat fields, resulting in significant yield improvements and cost savings through optimized resource allocation.",
    image: "https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg"
  },
  {
    icon: <Droplet className="h-6 w-6" />,
    title: "California Water Conservation",
    category: "Smart Irrigation",
    metrics: [
      { label: "Water Saved", value: "42%" },
      { label: "ROI", value: "315%" }
    ],
    description: "Revolutionary water management system deployed across drought-prone regions, achieving remarkable water savings while maintaining crop quality.",
    image: "https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg"
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: "Sustainable Farming Initiative",
    category: "Environmental Impact",
    metrics: [
      { label: "Carbon Reduction", value: "45%" },
      { label: "Energy Savings", value: "38%" }
    ],
    description: "Partnership with organic farms to implement sustainable practices, resulting in significant environmental improvements and cost reductions.",
    image: "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Predictive Harvest Optimization",
    category: "AI-Driven Planning",
    metrics: [
      { label: "Accuracy Rate", value: "94%" },
      { label: "Revenue Growth", value: "52%" }
    ],
    description: "Machine learning models deployed to optimize harvest timing and resource allocation, leading to substantial improvements in yield quality and market value.",
    image: "https://images.pexels.com/photos/7675860/pexels-photo-7675860.jpeg"
  }
];

const SuccessStories = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.story-card');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, index * 200);
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
    <section id="success-stories" ref={sectionRef} className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Success Stories</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real Results, Real Impact
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover how our agricultural intelligence solutions drive measurable improvements in yield, efficiency, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="story-card opacity-0 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 text-green-600 rounded-lg">
                    {story.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-green-600 font-semibold">{story.category}</p>
                    <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{story.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;