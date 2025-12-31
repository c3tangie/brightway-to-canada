import React, { useState, useEffect } from "react";
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
          <Link to="/service" className="text-navy-600 hover:text-navy-800 underline">
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Updated Header Section - Removed gradient header */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Hero Section - Updated to match TeamMemberDetailPage */}
            <div className="pt-8 md:pt-12 px-6 md:px-10 pb-4 md:pb-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Left: Square Image */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  {displayImage && (
                    <img
                      src={displayImage}
                      alt={currentQuestion.question}
                      loading="lazy"
                      className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
                      // Fallback for older browsers
                      onLoad={(e) => {
                        if (!('loading' in HTMLImageElement.prototype)) {
                          // Implement your own lazy loading if needed
                          console.log('Browser does not support native lazy loading');
                        }
                      }}
                    />
                  )}
                  {!displayImage && (
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gray-200 flex items-center justify-center shadow-lg">
                      <span className="text-gray-500">No image available</span>
                    </div>
                  )}
                </div>

                {/* Right: Text Details */}
                <div className="flex-1">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                      {service.title}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-3">
                    {currentQuestion.question}
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-6">
                    Question {validQuestionIndex + 1} of {service.questions.length}
                  </p>

                  {/* Question Navigation - Moved here */}
                  {service.questions.length > 1 && (
                    <div className="flex gap-2 mb-6">
                      {validQuestionIndex > 0 && (
                        <Link
                          to={`/service/${service.slug}?q=${validQuestionIndex - 1}`}
                          className="px-4 py-2 text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 rounded-lg transition-colors"
                        >
                          ← Previous
                        </Link>
                      )}
                      {validQuestionIndex < service.questions.length - 1 && (
                        <Link
                          to={`/service/${service.slug}?q=${validQuestionIndex + 1}`}
                          className="px-4 py-2 text-sm font-medium text-white bg-navy-600 rounded-lg hover:bg-navy-700 transition-colors"
                        >
                          Next Question →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 mx-6 md:mx-10 mb-2" />

            {/* Main Content - Updated layout */}
            <div className="px-6 md:px-10 pb-6 md:pb-8 pt-2 md:pt-4">
              <div className="grid grid-cols-1 md:grid-cols-[20rem,1fr] gap-6 md:gap-8">
                {/* Left Column - Service Info */}
                <div>
                  {/* Service Categories/Tags */}
                  {service.tags && service.tags.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-navy-800 mb-3">Related Topics</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-navy-100 text-navy-800 rounded-lg font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Service Features/Highlights */}
                  {service.highlights && service.highlights.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800 mb-3">Key Highlights</h3>
                      <div className="space-y-2">
                        {service.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column - Answer Content */}
                <div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-navy-800 mb-6">Detailed Answer</h2>
                    <div className="prose prose-lg max-w-none">
                      <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                        {currentQuestion.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Questions List - Keep original styling */}
            <div className="border-t border-gray-200 pt-8 px-6 md:px-10 pb-8">
              <h3 className="text-xl font-bold text-navy-800 mb-6">
                All questions about {service.title}:
              </h3>
              
              {/* Main container with relative positioning for absolute children */}
              <div className="relative">
                
                {/* Scrollable Questions Container with fixed height */}
                <div 
                  className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-navy-300 scrollbar-track-gray-100 relative"
                  style={{
                    scrollBehavior: 'smooth',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'thin',
                  }}
                >
                  {/* Top Fade Effect - Inside scroll container */}
                  <div className="sticky top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                  
                  {/* Questions Content */}
                  <div className="space-y-3 px-1 pb-6">
                    {service.questions.map((q, index) => (
                      <Link
                        key={index}
                        to={`/service/${service.slug}?q=${index}`}
                        className={`block p-4 border rounded-lg transition-all duration-200 ${index === validQuestionIndex 
                          ? 'bg-navy-50 border-navy-300 shadow-sm' 
                          : 'border-gray-200 hover:bg-gray-50 hover:border-navy-300 hover:shadow-sm'
                        }`}
                      >
                        <div className="flex items-start gap-3">
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
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Bottom Fade Effect - Inside scroll container at the bottom */}
                  <div className="sticky bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
                </div>
                
                {/* Scroll Indicator (only shows when content is scrollable) */}
                {service.questions.length > 6 && (
                  <div className="text-center mt-3">
                    <p className="text-xs text-gray-500">
                      Scroll to see more questions
                    </p>
                    <div className="mt-1 flex justify-center">
                      <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Booking Section */}
            <div className="border-t border-gray-200 pt-8 px-6 md:px-10 pb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-navy-800 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Book a one-on-one consultation to discuss {service.title} in detail.
                </p>
                
                <div className="mt-6">
                  <Link 
                    to="/consultation" 
                    className="inline-block bg-navy-600 hover:bg-navy-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book a Consultation
                  </Link>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link 
                    to="/service-list"
                    className="text-navy-600 hover:text-navy-800 font-medium inline-flex items-center gap-2"
                  >
                    ← Back to all service categories
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