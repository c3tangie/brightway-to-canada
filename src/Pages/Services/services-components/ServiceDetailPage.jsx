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
  }, [validQuestionIndex, serviceSlug]); // Added dependencies

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
                {/* Left: Square Image and Navigation */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  {displayImage && (
                    <img
                      src={displayImage}
                      alt={currentQuestion.question}
                      loading="lazy"
                      className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg mb-6"
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
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gray-200 flex items-center justify-center shadow-lg mb-6">
                      <span className="text-gray-500">No image available</span>
                    </div>
                  )}
                  
                  {/* Question indicator and navigation under the image */}
                  <div className="w-64 md:w-80">
                    {/* Question indicator */}
                    <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
                      Question {validQuestionIndex + 1} of {service.questions.length}
                    </p>

                    {/* Question Navigation */}
                    {service.questions.length > 1 && (
                      <div className="flex flex-col sm:flex-row gap-2">
                        {validQuestionIndex > 0 && (
                          <Link
                            to={`/service/${service.slug}?q=${validQuestionIndex - 1}`}
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 rounded-lg transition-colors gap-2"
                          >
                            <svg 
                              className="w-5 h-5" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                              />
                            </svg>
                            <span>Previous</span>
                          </Link>
                        )}
                        {validQuestionIndex < service.questions.length - 1 && (
                          <Link
                            to={`/service/${service.slug}?q=${validQuestionIndex + 1}`}
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-navy-600 rounded-lg hover:bg-navy-700 transition-colors gap-2"
                          >
                            <span>Next Question</span>
                            <svg 
                              className="w-5 h-5 transform rotate-180" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Text Details */}
                <div className="flex-1">
                  {/* Main Header - Service Title */}
                  <div className="mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-navy-800 mb-3">
                      {service.title+":"}
                    </h1>
                  </div>
                  
                  {/* Question as secondary header */}
                  <h2 className="text-xl md:text-2xl font-semibold text-navy-700">
                    {currentQuestion.question}
                  </h2>
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

                {/* Right Column - Answer Content with Booking Button */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-navy-800 mb-6">Detailed Answer</h3>
                    <div className="prose prose-lg max-w-none">
                      <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                        {currentQuestion.answer}
                      </div>
                    </div>
                    
                    {/* Booking Consultation Button - Embedded in Answer Section */}
                    <div className="mt-10 p-6 bg-gradient-to-r from-navy-50 to-blue-50 rounded-xl border border-navy-100">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-navy-800 mb-2">
                            Need Personalized Help?
                          </h3>
                          <p className="text-gray-600">
                            Book a one-on-one consultation to discuss {service.title} in detail and get tailored advice.
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <Link 
                            to="/consultation" 
                            className="inline-block bg-navy-600 hover:bg-navy-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                          >
                            Book Consultation
                          </Link>
                        </div>
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

            {/* Removed the old Booking Section and replaced with Back to Services link only */}
            <div className="border-t border-gray-200 pt-8 px-6 md:px-10 pb-8">
              <div className="text-center">
                <div className="mt-8">
                  <Link 
                    to="/service-list"
                    className="text-white bg-navy-600 rounded-lg hover:bg-navy-700 transition-colors font-semibold inline-flex items-center gap-2 duration-300 py-4 px-8"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                      />
                    </svg>
                    <span>Back to all service categories</span>
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