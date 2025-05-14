import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface SolutionDetailsProps {
  onBack: () => void;
  solution: {
    title: string;
    description: string;
    features: string[];
    details: {
      overview: string;
      implementation: {
        step: string;
        description: string;
      }[];
      results: {
        metric: string;
        value: string;
        description: string;
      }[];
      testimonial?: {
        quote: string;
        author: string;
        role: string;
      };
    };
  };
}

const SolutionDetails: React.FC<SolutionDetailsProps> = ({ onBack, solution }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Solutions
        </button>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-green-600 px-6 py-8 text-white">
            <h1 className="text-3xl font-bold">{solution.title}</h1>
            <p className="mt-2 text-green-100">{solution.description}</p>
          </div>

          <div className="p-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 mb-8">{solution.details.overview}</p>

              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <div className="space-y-6 mb-8">
                {solution.details.implementation.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{step.step}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-4">Key Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {solution.details.results.map((result, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600">{result.value}</div>
                    <div className="font-medium text-gray-900">{result.metric}</div>
                    <div className="text-sm text-gray-600">{result.description}</div>
                  </div>
                ))}
              </div>

              {solution.details.testimonial && (
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "{solution.details.testimonial.quote}"
                  </blockquote>
                  <div className="font-medium text-gray-900">
                    {solution.details.testimonial.author}
                  </div>
                  <div className="text-green-600">{solution.details.testimonial.role}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetails;