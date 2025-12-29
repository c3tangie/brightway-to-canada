import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TeamTreeSection = ({ title, description, icon, members, onViewDetails }) => {
  const [shouldCenter, setShouldCenter] = useState(false);
  const containerRef = useRef(null);

  if (!members || members.length === 0) return null;

  // Sort members alphabetically by name
  const sortedMembers = [...members].sort((a, b) => 
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  );

  // Check if all cards fit in the viewport
  useEffect(() => {
    const checkIfShouldCenter = () => {
      if (containerRef.current && sortedMembers.length > 0) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalCardsWidth = sortedMembers.length * 56 * 4; // widths per card 
        const gapWidth = (sortedMembers.length - 1) * 2 * 4; // 32px gap (gap-8 = 2rem = 32px)
        const totalWidth = totalCardsWidth + gapWidth;
        
        // Center only if all cards fit in the container
        setShouldCenter(totalWidth <= containerWidth);
      }
    };

    checkIfShouldCenter();
    window.addEventListener('resize', checkIfShouldCenter);
    
    return () => window.removeEventListener('resize', checkIfShouldCenter);
  }, [sortedMembers.length]); // Updated dependency

  return (
    <section className="mb-16">
      {/* Minimal Centered Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-navy-800 mb-3">{title}</h2>
        {description && (
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      {/* Horizontal Scrollable Members */}
      <div className="relative" ref={containerRef}>
        {/* Conditionally apply justify-center */}
        <div className={`flex gap-2 pb-6 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-4 ${
          shouldCenter ? 'justify-center' : ''
        }`}>
          {sortedMembers.map(member => ( // Use sortedMembers here
            <div 
              key={member.id} 
              className="flex-shrink-0 w-56"
            >
              {/* Clean Member Card */}
              <div className="bg-white rounded-xl p-3 transition-all h-full flex flex-col">
                {/* Avatar & Basic Info - MADE CLICKABLE */}
                <Link 
                  to={`/team/${member.slug}`}
                  className="flex flex-col items-center text-center mb-4 no-underline hover:no-underline"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md mb-4 hover:opacity-90 transition-all duration-300 hover:scale-105 cursor-pointer"
                  />
                  {/* Add container with max-width */}
                  <div className="w-full px-3"> {/* Add padding for breathing room */}
                    <h3 className="font-bold text-xl text-navy-800 hover:text-navy-900 truncate">
                      {member.name}
                    </h3>
                    <p className="text-navy-600 text-sm mt-1 hover:text-navy-700 line-clamp-2">
                      {member.role}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Simple scroll hint - only show when NOT centered (when scrolling is needed) */}
        {!shouldCenter && sortedMembers.length > 0 && ( // Use sortedMembers here
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