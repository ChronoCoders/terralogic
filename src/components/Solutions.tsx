import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

interface SolutionItemProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  isImageLeft: boolean;
}

const SolutionItem: React.FC<SolutionItemProps> = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  isImageLeft
}) => {
  const content = (
    <>
      <div className="md:w-1/2 animate-on-scroll">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-500 mb-6">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 animate-on-scroll">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-lg shadow-lg object-cover w-full h-[400px]"
        />
      </div>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-8 hover:bg-gray-50 transition-colors duration-300 rounded-xl p-6">
      {isImageLeft ? (
        <>
          <div className="md:w-1/2 animate-on-scroll">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>
          <div className="md:w-1/2 animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-lg text-gray-500 mb-6">{description}</p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        content
      )}
    </div>
  );
};

const solutions = [
  {
    title: "Crop Health Monitoring",
    description: "Monitor your crops throughout the growing season with advanced image analysis that detects health issues before they become visible to the naked eye.",
    features: [
      "Early disease detection",
      "Nutrient deficiency analysis",
      "Water stress monitoring",
      "Growth rate tracking"
    ],
    imageSrc: "https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg",
    imageAlt: "Drone monitoring crops from above showing agricultural fields"
  },
  {
    title: "Precision Irrigation",
    description: "Optimize water usage with AI-driven irrigation scheduling based on real-time soil moisture data and weather forecasts.",
    features: [
      "Smart water management",
      "Weather-based scheduling",
      "Soil moisture tracking",
      "Resource optimization"
    ],
    imageSrc: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",
    imageAlt: "Modern irrigation system in agricultural field"
  },
  {
    title: "Yield Prediction",
    description: "Leverage machine learning to forecast crop yields and optimize harvest timing based on historical data and current conditions.",
    features: [
      "Accurate yield forecasting",
      "Harvest optimization",
      "Market timing insights",
      "Resource planning"
    ],
    imageSrc: "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg",
    imageAlt: "Harvested crop field with modern agricultural equipment"
  }
];

const Solutions = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
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
    <section id="solutions" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Agricultural Intelligence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Tailored solutions for various crops and agricultural needs
          </p>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <SolutionItem
              key={index}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              imageSrc={solution.imageSrc}
              imageAlt={solution.imageAlt}
              isImageLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;