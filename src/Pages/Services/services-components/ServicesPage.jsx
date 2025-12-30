import React from 'react';
import { Link } from 'react-router-dom';
import serviceData from './serviceData';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-r from-navy-600 to-navy-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional services tailored to your needs. Book appointments and get expert guidance.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map(service => (
              <Link
                key={service.id}
                to={`/servicesX/${service.slug}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Service Header */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{service.icon || '🔧'}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-800">{service.title}</h3>
                      <p className="text-gray-600">{service.subtitle || ''}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{service.shortDescription || ''}</p>
                  
                  {/* Quick Q&A Preview - Only show if questions exist */}
                  {service.questions && service.questions.length > 0 && (
                    <div className="space-y-3 mb-6">
                      {service.questions.slice(0, 2).map((q, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-navy-700 mb-1">{q.question || ''}</h4>
                          <p className="text-sm text-gray-600 line-clamp-2">{q.answer || ''}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Quick Info */}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>⏱️ {service.duration || 'Not specified'}</span>
                    <span>💰 {service.pricing || 'Contact for pricing'}</span>
                  </div>
                </div>
                
                {/* Booking Footer */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-t border-gray-200 p-6">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-navy-800">
                      {service.availableTimes ? 'Available Now' : 'Contact for Availability'}
                    </span>
                    <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;