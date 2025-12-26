import React, { useState } from 'react';

const TeamMember = ({ member }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img 
          src={imageError ? '/default-avatar.jpg' : member.image} 
          alt={member.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {/* Role Badge */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white py-2 px-4 text-sm font-semibold">
          {member.role}
        </div>
      </div>
      
      {/* Info Container */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
        
        {/* Contact Links */}
        {/* <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
          <a 
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            Email
          </a>
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default TeamMember;