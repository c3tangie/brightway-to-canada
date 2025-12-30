import React, { useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import serviceData from './serviceData';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const [searchParams] = useSearchParams();
  const questionIndexParam = searchParams.get('q');
  
  const service = serviceData.find(s => s.slug === serviceSlug);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy-800 mb-4">Service Not Found</h1>
          <Link to="/servicesX" className="text-navy-600 hover:text-navy-800 underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Get current question index from URL or default to 0 (first question)
  const currentQuestionIndex = questionIndexParam 
    ? parseInt(questionIndexParam) 
    : 0;
  
  // Ensure index is within bounds
  const validQuestionIndex = Math.min(
    Math.max(0, currentQuestionIndex),
    service.questions.length - 1
  );

  const currentQuestion = service.questions[validQuestionIndex];
  
  // Use question-specific image if available, otherwise fall back to service image
  const displayImage = currentQuestion.image || service.featuredImage;

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-navy-600 to-navy-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentQuestion.question}</h1>
            <p className="text-xl text-blue-100">
              Question {validQuestionIndex + 1} of {service.questions.length}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Question-specific Image */}
            {displayImage && (
              <div className="mb-8">
                <img 
                  src={displayImage} 
                  alt={currentQuestion.question}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  {currentQuestion.image ? 'Question-specific image' : 'Service image'}
                </p>
              </div>
            )}
            
            {/* Question Navigation */}
            {service.questions.length > 1 && (
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
                <div>
                  <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                    {service.title}
                  </span>
                </div>
                <div className="flex gap-2">
                  {validQuestionIndex > 0 && (
                    <Link
                      to={`/servicesX/${service.slug}?q=${validQuestionIndex - 1}`}
                      className="px-4 py-2 text-sm font-medium text-navy-700 bg-white border border-navy-300 rounded-lg hover:bg-navy-50 transition-colors"
                    >
                      ← Previous
                    </Link>
                  )}
                  {validQuestionIndex < service.questions.length - 1 && (
                    <Link
                      to={`/servicesX/${service.slug}?q=${validQuestionIndex + 1}`}
                      className="px-4 py-2 text-sm font-medium text-white bg-navy-600 rounded-lg hover:bg-navy-700 transition-colors"
                    >
                      Next Question →
                    </Link>
                  )}
                </div>
              </div>
            )}
            
            {/* Answer Section */}
            <div className="mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {currentQuestion.answer}
                </p>
              </div>
            </div>

            {/* All Questions List */}
            <div className="border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">
                All questions about {service.title}:
              </h3>
              <div className="space-y-3">
                {service.questions.map((q, index) => (
                  <Link
                    key={index}
                    to={`/servicesX/${service.slug}?q=${index}`}
                    className={`block p-4 border rounded-lg transition-colors ${index === validQuestionIndex 
                      ? 'bg-navy-50 border-navy-300' 
                      : 'border-gray-200 hover:bg-gray-50 hover:border-navy-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Remove the thumbnail div completely */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-navy-600 text-white">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${index === validQuestionIndex 
                          ? 'text-navy-800' 
                          : 'text-navy-700'
                        }`}>
                          {q.question}
                        </p>
                        {index === validQuestionIndex && (
                          <p className="text-sm text-navy-600 mt-1">Currently viewing</p>
                        )}
                        {/* Remove the "Includes visual guide" text since we're not showing thumbnails */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Booking Section */}
            <div className="border-t border-gray-200 pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-navy-800 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Book a one-on-one consultation to discuss {service.title} in detail.
                </p>
                
                <div className="mt-6">
                  <a 
                    href="#/consultation" 
                    className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book a Consultation
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link 
                    to="/servicesX" 
                    className="text-navy-600 hover:text-navy-800 font-medium inline-flex items-center gap-2"
                  >
                    ← Back to all services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;