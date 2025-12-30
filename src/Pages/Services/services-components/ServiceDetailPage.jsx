import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import serviceData from './serviceData';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const service = serviceData.find(s => s.slug === serviceSlug);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy-800 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-navy-600 hover:text-navy-800 underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-navy-600 to-navy-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">{service.icon || '🔧'}</span>
              <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            </div>
            <p className="text-xl text-blue-100">{service.subtitle || ''}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <div className="text-center mb-6">
                  <span className="text-5xl block mb-4">{service.icon || '🔧'}</span>
                  <h3 className="text-2xl font-bold text-navy-800">Book This Service</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{service.duration || 'Not specified'}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-green-600 text-lg">
                      {service.pricing || 'Contact for pricing'}
                    </span>
                  </div>
                  
                  {service.availableTimes && (
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 block mb-2">Available:</span>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(service.availableTimes) ? (
                          service.availableTimes.map((time, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {time}
                            </span>
                          ))
                        ) : (
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {service.availableTimes}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Booking CTA */}
                {service.bookingLink && (
                  <>
                    <a
                      href={service.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-center transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      Book Appointment Now
                    </a>
                    
                    <p className="text-center text-gray-500 text-sm mt-4">
                      Secure booking via Calendly
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              {/* Main Content */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-navy-800 mb-6">Service Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {service.shortDescription || ''}
                </p>
                
                {service.extendedDescription && (
                  <div className="space-y-4 mb-8">
                    {Array.isArray(service.extendedDescription) ? (
                      service.extendedDescription.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-700 leading-relaxed">
                        {service.extendedDescription}
                      </p>
                    )}
                  </div>
                )}

                {/* Benefits */}
                {service.benefits && service.benefits.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-navy-800 mb-4">What You'll Get</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                          <span className="text-green-600 text-xl mt-1">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Q&A Section */}
              {service.questions && service.questions.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-navy-800 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {service.questions.map((item, index) => (
                      <div 
                        key={index} 
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(index)}
                          className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                        >
                          <h3 className="text-lg font-semibold text-navy-800 pr-4">
                            {item.question || ''}
                          </h3>
                          <span className="text-navy-600 text-xl flex-shrink-0">
                            {expandedQuestion === index ? '−' : '+'}
                          </span>
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            expandedQuestion === index ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="p-6 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer || ''}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Booking CTA */}
                  {service.bookingLink && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-navy-800 mb-3">
                          Ready to get started?
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Book your appointment now and take the first step toward achieving your goals.
                        </p>
                        <a
                          href={service.bookingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                          </svg>
                          Book Your Session
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;