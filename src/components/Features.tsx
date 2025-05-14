import React, { useEffect, useRef } from 'react';
import { LineChart, AlertTriangle, BarChart4, Globe, Database, Shield } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const features = [
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Plant Health Analysis",
    description: "Monitor crop vitality with advanced image processing that detects early signs of stress and disease.",
    image: "https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg",
    stats: {
      value: "95%",
      label: "Detection Accuracy"
    }
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Early Warning System",
    description: "Receive timely alerts about potential issues before they become serious problems.",
    image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
    stats: {
      value: "48hrs",
      label: "Advanced Warning"
    }
  },
  {
    icon: <BarChart4 className="h-6 w-6" />,
    title: "Yield Forecasting",
    description: "Predict harvest yields with machine learning models trained on historical data.",
    image: "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg",
    stats: {
      value: "92%",
      label: "Forecast Accuracy"
    }
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Weather Integration",
    description: "Make informed decisions with real-time weather data and forecasting.",
    image: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg",
    stats: {
      value: "24/7",
      label: "Real-time Updates"
    }
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Analytics",
    description: "Transform raw agricultural data into actionable insights for better decision-making.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    stats: {
      value: "10TB+",
      label: "Data Processed"
    }
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Crop Protection",
    description: "Implement preventive measures based on risk analysis and historical patterns.",
    image: "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg",
    stats: {
      value: "85%",
      label: "Loss Prevention"
    }
  }
];

const Features = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = document.querySelectorAll('.feature-card');
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
    <section id="features" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block p-2 px-4 bg-green-100 rounded-full mb-4">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
          </div>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Advanced Agricultural Analytics
          </p>
          <p className="mt-6 max-w-2xl text-xl text-gray-500 mx-auto">
            Our platform combines cutting-edge image analysis with intuitive reporting to deliver insights that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              stats={feature.stats}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;