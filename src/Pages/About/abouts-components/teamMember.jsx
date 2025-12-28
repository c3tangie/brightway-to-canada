import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Category mapping with icons and colors - Updated for navy/red/white theme
const categoryConfig = {
  'founder': { label: 'Founder', color: 'bg-navy-100 text-navy-800', icon: '👑' },
  'development': { label: 'Developer', color: 'bg-navy-100 text-navy-800', icon: '💻' },
  'design': { label: 'Designer', color: 'bg-navy-100 text-navy-800', icon: '🎨' },
  // 'marketing': { label: 'Marketing', color: 'bg-red-50 text-red-700', icon: '📢' },
  'advising': { label: 'Advising', color: 'bg-gray-100 text-gray-800', icon: '💡' },
  // 'content': { label: 'Content', color: 'bg-red-50 text-red-700', icon: '✍️' },
  'tutor': { label: 'Tutor', color: 'bg-gray-100 text-gray-800', icon: '📚' }
};

const TeamMember = ({ member, onViewDetails }) => { // Add onViewDetails prop
  const [imageError, setImageError] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Get first 2 categories to show by default
  const displayedCategories = showAllCategories 
    ? member.categories 
    : (member.categories || []).slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-navy-100">
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 via-navy-900/65 to-transparent text-white py-3 px-4">
          <p className="text-lg font-bold">{member.name}</p>
          <p className="text-sm opacity-90">{member.role}</p>
        </div>

        {/* Category count badge */}
        {member.categories && member.categories.length > 0 && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-navy-800 border border-navy-200">
            {member.categories.length} role{member.categories.length > 1 ? 's' : ''}
          </div>
        )}
      </div>
      
      {/* Info Container */}
      <div className="p-6 min-h-[220px] flex flex-col">
        {/* Categories Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {displayedCategories.map(categoryId => {
              const config = categoryConfig[categoryId] || { 
                label: categoryId, 
                color: 'bg-gray-100 text-gray-800',
                icon: '👤'
              };
              return (
                <span
                  key={categoryId}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium ${config.color} border border-navy-200`}
                >
                  <span>{config.icon}</span>
                  {config.label}
                </span>
              );
            })}
          </div>
          
          {/* Show more/less toggle */}
          {member.categories && member.categories.length > 3 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="text-sm text-navy-600 hover:text-navy-800 font-medium"
            >
              {showAllCategories ? 'Show less' : `+${member.categories.length - 2} more`}
            </button>
          )}
        </div>

        {/* <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p> */}
        
        {/* Contact Links - Updated to use onViewDetails */}
        <div className="pt-4 border-t border-navy-100 flex flex-col sm:flex-row gap-3 mt-auto">
            <Link 
              to={`/team/${member.id}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors font-medium flex-1 text-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              View Details
            </Link>
            
            {member.email && (
            <a 
                href={`mailto:${member.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex-1 text-center"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Email
            </a>
            )}
        </div>
      </div>

    </div>
    
  );
};

export default TeamMember;