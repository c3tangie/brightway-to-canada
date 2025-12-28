import React from 'react';
import { Link } from 'react-router-dom';

const TeamTreeSection = ({ title, description, icon, members, onViewDetails }) => {
  if (!members || members.length === 0) return null;

  return (
    <section className="mb-16">
      {/* Minimal Centered Header */}
      <div className="text-center mb-10">
        {icon && <span className="text-4xl mb-4 inline-block">{icon}</span>}
        <h2 className="text-3xl font-bold text-navy-800 mb-3">{title}</h2>
        {description && (
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      {/* Horizontal Scrollable Members */}
      <div className="relative">
        {/* Scrollable Container */}
        <div className="flex gap-8 pb-6 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-4">
          {members.map(member => (
            <div 
              key={member.id} 
              className="flex-shrink-0 w-72" // Fixed width for consistent cards
            >
              {/* Clean Member Card */}
              <div className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg h-full flex flex-col">
                {/* Avatar & Basic Info */}
                <div className="flex flex-col items-center text-center mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-4"
                  />
                  <h3 className="font-bold text-xl text-navy-800">{member.name}</h3>
                  <p className="text-navy-600 text-sm mt-1">{member.role}</p>
                </div>
                
                {/* Categories Tags (centered) */}
                {member.categories && member.categories.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mb-5">
                    {member.categories.slice(0, 3).map(category => (
                      <span
                        key={category}
                        className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-700 rounded-full border border-gray-200"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* View Details Button (centered at bottom) */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                        key={member.id}
                        to={`/team/${member.id}`}
                        className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-4">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-semibold text-navy-800">{member.name}</h4>
                            <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                        </div>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Simple scroll hint */}
        {members.length > 3 && (
          <div className="text-center mt-4">
            <span className="text-sm text-gray-400 inline-flex items-center gap-2">
              <span className="hidden sm:inline">← Scroll horizontally →</span>
              <span className="sm:hidden">← Swipe →</span>
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamTreeSection;