import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  stats: {
    value: string;
    label: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, image, stats }) => {
  return (
    <div className="feature-card group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">{stats.value}</span>
          <span className="text-sm text-gray-600">{stats.label}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-12 w-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-6 flex items-center justify-end">
          <button className="text-green-600 font-medium flex items-center space-x-1 group-hover:text-green-700 transition-colors duration-300">
            <span>Learn more</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;