import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: "Jack Ray Foster",
    role: "Farm Operations Manager, Midwest Grains Co.",
    quote: "Terra Logic's crop monitoring system has revolutionized how we manage our 5,000-acre wheat farm. We've reduced water usage by 30% while maintaining yield quality.",
    image: "https://images.pexels.com/photos/2382889/pexels-photo-2382889.jpeg"
  },
  {
    name: "Clara Mae Jenkins",
    role: "Agricultural Consultant",
    quote: "As a consultant working with multiple farms, Terra Logic's analytics platform has become indispensable. The early disease detection has saved my clients millions in potential crop losses.",
    image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg"
  },
  {
    name: "Ellie Rose Thompson",
    role: "Owner, Green Valley Organics",
    quote: "The precision agriculture insights from Terra Logic helped us optimize our organic farming practices. Our crop health scores have improved by 40% since implementation.",
    image: "https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
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
    <section id="testimonials" ref={sectionRef} className="py-20 bg-green-50 opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Agricultural Leaders
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear from farmers and agricultural professionals who have transformed their operations with Terra Logic.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <img 
                          className="h-48 w-full object-cover md:h-full md:w-48" 
                          src={testimonial.image} 
                          alt={testimonial.name}
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <blockquote className="italic text-gray-600 mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-green-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(() => {
                      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                    }, 8000);
                  }
                }}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;