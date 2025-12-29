import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Card Layout Configuration - NO BACKGROUNDS, NO BORDERS
const CARD_LAYOUTS = {
  // CEO/Founder Layout - EXTRA WIDE (75% of page)
  FOUNDER_CEO: {
    width: 'w-full md:w-11/12 lg:w-10/12',
    height: 'h-auto min-h-64',
    direction: 'vertical',
    avatarSize: 'w-56 h-56 md:w-64 md:h-64',
    shadow: 'shadow-xl',
    priority: 1,
    showDescription: true,
    maxLines: 4,
    spacing: 'p-6 md:p-8',
    avatarBorder: 'border-8 border-white',
    showRole: true,
    nameSize: 'text-3xl md:text-4xl',
    roleSize: 'text-xl'
  },
  // Leadership Layout
  LEADERSHIP: {
    width: 'w-64 md:w-72',
    height: 'h-72',
    direction: 'vertical',
    avatarSize: 'w-44 h-44',
    shadow: 'shadow-lg',
    priority: 2,
    showDescription: false,
    maxLines: 2,
    spacing: 'p-5',
    avatarBorder: 'border-4 border-white',
    showRole: true,
    nameSize: 'text-lg',
    roleSize: 'text-sm'
  },
  // Tutor Layout
  TUTOR: {
    width: 'w-56 md:w-60',
    height: 'h-76',
    direction: 'vertical',
    avatarSize: 'w-44 h-44',
    shadow: 'shadow-md',
    priority: 3,
    showSubjects: true,
    showDescription: false,
    maxLines: 2,
    spacing: 'p-4',
    avatarBorder: 'border-4 border-white',
    showRole: true,
    nameSize: 'text-lg',
    roleSize: 'text-sm'
  },
  // STEM Tutor Layout
  STEM_TUTOR: {
    width: 'w-56 md:w-60',
    height: 'h-80',
    direction: 'vertical',
    avatarSize: 'w-44 h-44',
    shadow: 'shadow-md',
    priority: 3,
    showSubjects: true,
    showDescription: false,
    maxLines: 2,
    spacing: 'p-4',
    avatarBorder: 'border-4 border-white',
    showRole: true,
    nameSize: 'text-lg',
    roleSize: 'text-sm'
  },
  // Design Team Layout
  DESIGN: {
    width: 'w-60 md:w-64',
    height: 'h-72',
    direction: 'vertical',
    avatarSize: 'w-44 h-44',
    shadow: 'shadow-md',
    priority: 4,
    showDescription: false,
    maxLines: 2,
    spacing: 'p-5',
    avatarBorder: 'border-4 border-white',
    showRole: true,
    nameSize: 'text-lg',
    roleSize: 'text-sm'
  },
  // Default Layout
  DEFAULT: {
    width: 'w-56',
    height: 'h-68',
    direction: 'vertical',
    avatarSize: 'w-44 h-44',
    shadow: 'shadow',
    priority: 5,
    showDescription: false,
    maxLines: 2,
    spacing: 'p-4',
    avatarBorder: 'border-4 border-white',
    showRole: true,
    nameSize: 'text-lg',
    roleSize: 'text-sm'
  }
};

// Helper function to determine layout
const getCardLayout = (role, hierarchyCategory, tutor_expertise) => {
  const upperRole = role?.toUpperCase() || '';
  const upperCategory = hierarchyCategory?.toUpperCase() || '';
  
  // CEO/Founder - EXTRA WIDE
  if (upperRole.includes('CEO') || upperRole.includes('FOUNDER') || 
      upperCategory.includes('FOUNDER') || upperCategory.includes('LEADERSHIP')) {
    return CARD_LAYOUTS.FOUNDER_CEO;
  }
  
  // Tutors
  if (upperCategory.includes('TUTOR')) {
    if (upperCategory.includes('STEM') || 
        (tutor_expertise && tutor_expertise.some(e => 
          e.toLowerCase().includes('math') || 
          e.toLowerCase().includes('science')
        ))) {
      return CARD_LAYOUTS.STEM_TUTOR;
    }
    return CARD_LAYOUTS.TUTOR;
  }
  
  // Design
  if (upperCategory.includes('DESIGN')) {
    return CARD_LAYOUTS.DESIGN;
  }
  
  return CARD_LAYOUTS.DEFAULT;
};

const TeamTreeSection = ({ title, description, members, onViewDetails }) => {
  const [shouldCenter, setShouldCenter] = useState(false);
  const containerRef = useRef(null);

  if (!members || members.length === 0) return null;

  // Sort members by layout priority and then alphabetically
  const sortedMembers = useMemo(() => 
    [...members]
      .map(member => ({
        ...member,
        layout: getCardLayout(member.role, member.hierarchyCategory, member.tutor_expertise)
      }))
      .sort((a, b) => {
        // First by priority (CEO first, etc.)
        if (a.layout.priority !== b.layout.priority) {
          return a.layout.priority - b.layout.priority;
        }
        // Then alphabetically
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
      }),
    [members]
  );

  // Dynamic width calculation - SPECIAL HANDLING FOR WIDE CEO CARD
  useEffect(() => {
    const checkIfShouldCenter = () => {
      if (containerRef.current && sortedMembers.length > 0) {
        const containerWidth = containerRef.current.offsetWidth;
        let totalWidth = 0;
        let hasWideCard = false;
        
        // Calculate based on actual card layouts
        sortedMembers.forEach((member, index) => {
          const layout = member.layout;
          
          // Special handling for CEO wide card
          if (layout.priority === 1) { // CEO card
            hasWideCard = true;
            // CEO card takes full width, so we don't need to calculate
            // It will be handled separately
          } else {
            // Calculate width for regular cards
            let cardWidth = 224; // Default 56 * 4
            
            if (layout.width.includes('w-')) {
              // Parse Tailwind width classes
              if (layout.width.includes('/')) {
                // Fractional width (e.g., w-11/12)
                const [numerator, denominator] = layout.width
                  .split('w-')[1]
                  .split(' ')[0]
                  .split('/')
                  .map(Number);
                cardWidth = (containerWidth * numerator) / denominator;
              } else {
                // Fixed width (e.g., w-64)
                const widthValue = parseInt(layout.width.split('w-')[1].split(' ')[0]);
                cardWidth = widthValue * 4; // Convert rem to px
              }
            }
            
            totalWidth += cardWidth;
            
            // Add gap if not the last card
            if (index < sortedMembers.length - 1) {
              totalWidth += 32; // gap-8 = 32px
            }
          }
        });
        
        // If there's a CEO wide card, it takes its own row
        // Other cards should be centered only if they fit
        if (hasWideCard) {
          // For CEO section, check if OTHER cards fit
          const otherCardsWidth = totalWidth;
          setShouldCenter(otherCardsWidth <= containerWidth);
        } else {
          setShouldCenter(totalWidth <= containerWidth);
        }
      }
    };

    checkIfShouldCenter();
    window.addEventListener('resize', checkIfShouldCenter);
    
    return () => window.removeEventListener('resize', checkIfShouldCenter);
  }, [sortedMembers]);

  // Separate CEO card from other cards
  const ceoMembers = sortedMembers.filter(member => member.layout.priority === 1);
  const otherMembers = sortedMembers.filter(member => member.layout.priority !== 1);

  // Render CEO Card - EXTRA WIDE
  const renderCeoCard = (member) => {
    const layout = member.layout;
    const isHorizontal = layout.direction === 'horizontal';
    
    return (
      <div key={member.id} className="w-full mb-12">
        <Link 
          to={`/team/${member.slug}`}
          className={`rounded-2xl ${layout.spacing} h-full flex ${isHorizontal ? 'flex-col md:flex-row md:items-center' : 'flex-col items-center'} 
            no-underline hover:no-underline transition-all duration-300 group`}
        >
          {/* Avatar - Larger for CEO */}
          <div className={`${isHorizontal ? 'md:mr-8 mb-6 md:mb-0' : 'mb-6'} flex-shrink-0`}>
            <img 
              src={member.image} 
              alt={member.name}
              className={`${layout.avatarSize} rounded-full object-cover ${layout.avatarBorder} 
                group-hover:scale-105 transition-transform duration-300 ${layout.shadow}`}
            />
          </div>
          
          {/* Content */}
          <div className={`${isHorizontal ? 'md:text-left' : 'text-center'} ${isHorizontal ? 'md:flex-1' : 'w-full'}`}>
            {/* Name with special styling */}
            <h3 className={`font-bold ${layout.nameSize} text-navy-900 group-hover:text-navy-950 mb-3`}>
              {member.name}
            </h3>
            
            {/* Role */}
            {layout.showRole && member.role && (
              <p className={`${layout.roleSize} text-navy-700 font-semibold mb-4`}>
                {member.role}
              </p>
            )}
            
            {/* Description for CEO */}
            {layout.showDescription && member.description && (
              <div className="mt-4">
                <p className="text-gray-700 text-lg leading-relaxed line-clamp-4 md:line-clamp-none">
                  {typeof member.description === 'string' 
                    ? member.description 
                    : Array.isArray(member.description) 
                      ? member.description[0] 
                      : member.description}
                </p>
                {Array.isArray(member.description) && member.description.length > 1 && (
                  <div className="mt-4">
                    <span className="inline-flex items-center text-navy-600 hover:text-navy-800 font-medium">
                      Read full bio →
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </Link>
      </div>
    );
  };

  // Render Regular Card
  const renderRegularCard = (member) => {
    const layout = member.layout;
    const isHorizontal = layout.direction === 'horizontal';
    
    return (
      <div 
        key={member.id} 
        className={`flex-shrink-0 ${layout.width} transition-all duration-300 hover:-translate-y-2`}
      >
        <Link 
          to={`/team/${member.slug}`}
          className={`rounded-xl ${layout.spacing} h-full flex ${isHorizontal ? 'flex-row items-center' : 'flex-col items-center'} 
            no-underline hover:no-underline transition-all duration-300 group`}
        >
          {/* Avatar */}
          <div className={`${isHorizontal ? 'mr-4' : 'mb-4'} flex-shrink-0`}>
            <img 
              src={member.image} 
              alt={member.name}
              className={`${layout.avatarSize} rounded-full object-cover ${layout.avatarBorder} 
                group-hover:scale-105 transition-transform duration-300 ${layout.shadow}`}
            />
          </div>
          
          {/* Content */}
          <div className={`${isHorizontal ? 'text-left' : 'text-center'} ${isHorizontal ? 'flex-1' : 'w-full'}`}>
            {/* Name */}
            <h3 className={`font-bold ${layout.nameSize} text-navy-800 group-hover:text-navy-900 
              ${isHorizontal ? '' : 'truncate'} mb-1`}>
              {member.name}
            </h3>
            
            {/* Role */}
            {layout.showRole && member.role && (
              <p className={`text-navy-600 ${layout.roleSize} ${layout.maxLines === 1 ? 'truncate' : 'line-clamp-2'} mb-2`}>
                {member.role}
              </p>
            )}
            
            {/* Subjects for Tutors - Minimal inline */}
            {layout.showSubjects && member.tutor_expertise && member.tutor_expertise.length > 0 && (
              <div className="mt-2">
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.tutor_expertise.slice(0, 2).map((subject, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 text-gray-600"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Link>
      </div>
    );
  };

  return (
    <section className="mb-16">
      {/* Clean Header - NO ICONS/EMOJIS */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-navy-800 mb-3">{title}</h2>
        {description && (
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      {/* CEO Section (if any) - Full width */}
      {ceoMembers.length > 0 && (
        <div className="mb-12">
          {ceoMembers.map(renderCeoCard)}
        </div>
      )}

      {/* Other Members Section */}
      {otherMembers.length > 0 && (
        <div className="relative" ref={containerRef}>
          <div className={`flex gap-8 pb-6 overflow-x-auto scroll-smooth 
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-4 
            ${shouldCenter ? 'justify-center' : ''}`}>
            {otherMembers.map(renderRegularCard)}
          </div>
          
          {/* Scroll hint only for other members */}
          {!shouldCenter && otherMembers.length > 0 && (
            <div className="text-center mt-4">
              <span className="text-sm text-gray-400 inline-flex items-center gap-2">
                <span className="hidden sm:inline">← Scroll horizontally →</span>
                <span className="sm:hidden">← Swipe →</span>
              </span>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default TeamTreeSection;