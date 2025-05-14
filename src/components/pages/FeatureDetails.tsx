import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface FeatureDetailsProps {
  onBack: () => void;
  feature: {
    title: string;
    description: string;
    details: {
      overview: string;
      benefits: string[];
      technicalSpecs: string[];
      useCases: {
        title: string;
        description: string;
      }[];
    };
  };
}

const FeatureDetails: React.FC<FeatureDetailsProps> = ({ onBack, feature }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Features
        </button>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-green-600 px-6 py-8 text-white">
            <h1 className="text-3xl font-bold">{feature.title}</h1>
            <p className="mt-2 text-green-100">{feature.description}</p>
          </div>

          <div className="p-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 mb-8">{feature.details.overview}</p>

              <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
              <ul className="space-y-2 mb-8">
                {feature.details.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
                {feature.details.technicalSpecs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {feature.details.useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;