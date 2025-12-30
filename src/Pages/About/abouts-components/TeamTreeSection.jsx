import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Card Layout Configuration - NO BACKGROUNDS, NO BORDERS
const CARD_LAYOUTS = {
  // CEO/Founder Layout - EXTRA WIDE (85% of page)
  FOUNDER_CEO: {
    width: 'w-full md:w-11/12 lg:w-10/12', // This is approximately 85% width
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
    roleSize: 'text-xl',
    descriptionSize: 'text-lg'
  },
  // Single Member Layout - WIDE like CEO (85% of page)
  SINGLE_MEMBER: {
    width: 'w-full md:w-11/12 lg:w-10/12', // This is approximately 85% width
    height: 'h-auto min-h-64',
    direction: 'vertical',
    avatarSize: 'w-56 h-56 md:w-64 md:h-64',
    shadow: 'shadow-lg',
    priority: 1.5, // Between CEO and other members
    showDescription: true,
    maxLines: 4,
    spacing: 'p-6 md:p-8',
    avatarBorder: 'border-8 border-white',
    showRole: true,
    nameSize: 'text-3xl md:text-4xl',
    roleSize: 'text-xl',
    descriptionSize: 'text-lg'
  },
  // Leadership Layout
  LEADERSHIP: {
    width: 'w-full', // Will be set dynamically
    height: 'h-auto min-h-96',
    direction: 'vertical',
    avatarSize: 'w-44 h-44',
    shadow: 'shadow-lg',
    priority: 2,
    showDescription: true,
    maxLines: 3,
    spacing: 'p-5',
    avatarBorder: 'border-4 border-white',
    showRole: true,
    nameSize: 'text-xl',
    roleSize: 'text-base',
    descriptionSize: 'text-sm',
    textWrap: true,
    showSubjects: false // REMOVED: No subjects for leadership
  },
  // Tutor Layout
  TUTOR: {
    width: 'w-full', // Will be set dynamically
    height: 'h-auto min-h-96',
    direction: 'vertical',
    avatarSize: 'w-44 h-44',
    shadow: 'shadow-md',
    priority: 3,
    showSubjects: false, // CHANGED: Disabled subject tags
    showDescription: true,
    maxLines: 3,
    spacing: 'p-5',
    avatarBorder: 'border-4 border-white',
    showRole: true,
    nameSize: 'text-xl',
    roleSize: 'text-base',
    descriptionSize: 'text-sm',
    textWrap: true
  },
  // STEM Tutor Layout
  STEM_TUTOR: {
    width: 'w-full', // Will be set dynamically
    height: 'h-auto min-h-96',
    direction: 'vertical',
    avatarSize: 'w-44 h-44',
    shadow: 'shadow-md',
    priority: 3,
    showSubjects: false, // CHANGED: Disabled subject tags
    showDescription: true,
    maxLines: 3,
    spacing: 'p-5',
    avatarBorder: 'border-4 border-white',
    showRole: true,
    nameSize: 'text-xl',
    roleSize: 'text-base',
    descriptionSize: 'text-sm',
    textWrap: true
  },
  // Design Team Layout
  DESIGN: {
    width: 'w-full', // Will be set dynamically
    height: 'h-auto min-h-96',
    direction: 'vertical',
    avatarSize: 'w-44 h-44',
    shadow: 'shadow-md',
    priority: 4,
    showDescription: true,
    maxLines: 3,
    spacing: 'p-5',
    avatarBorder: 'border-4 border-white',
    showRole: true,
    nameSize: 'text-xl',
    roleSize: 'text-base',
    descriptionSize: 'text-sm',
    textWrap: true,
    showSubjects: false // REMOVED: No subjects for design
  },
  // Default Layout
  DEFAULT: {
    width: 'w-full', // Will be set dynamically
    height: 'h-auto min-h-96',
    direction: 'vertical',
    avatarSize: 'w-44 h-44',
    shadow: 'shadow',
    priority: 5,
    showDescription: true,
    maxLines: 3,
    spacing: 'p-5',
    avatarBorder: 'border-4 border-white',
    showRole: true,
    nameSize: 'text-xl',
    roleSize: 'text-base',
    descriptionSize: 'text-sm',
    textWrap: true,
    showSubjects: false // REMOVED: No subjects for default
  }
};

// Helper function to determine layout
const getCardLayout = (role, hierarchyCategory, tutor_expertise, isSingleMember = false) => {
  const upperRole = role?.toUpperCase() || '';
  const upperCategory = hierarchyCategory?.toUpperCase() || '';
  
  // CEO/Founder - EXTRA WIDE
  if (upperRole.includes('CEO') || upperRole.includes('FOUNDER') || 
      upperCategory.includes('FOUNDER') || upperCategory.includes('LEADERSHIP')) {
    return CARD_LAYOUTS.FOUNDER_CEO;
  }
  
  // Single member layout - WIDE like CEO
  if (isSingleMember) {
    return CARD_LAYOUTS.SINGLE_MEMBER;
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
  const [cardWidthClass, setCardWidthClass] = useState('w-64'); // Default width
  const containerRef = useRef(null);

  if (!members || members.length === 0) return null;

  // Check if there's only one member in this section
  const isSingleMemberSection = members.length === 1;

  // Sort members by layout priority and then alphabetically
  const sortedMembers = useMemo(() => 
    [...members]
      .map(member => ({
        ...member,
        layout: getCardLayout(member.role, member.hierarchyCategory, member.tutor_expertise, isSingleMemberSection)
      }))
      .sort((a, b) => {
        // First by priority (CEO first, etc.)
        if (a.layout.priority !== b.layout.priority) {
          return a.layout.priority - b.layout.priority;
        }
        // Then alphabetically
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
      }),
    [members, isSingleMemberSection]
  );

  // Separate single/CEO cards from regular cards
  const wideCards = sortedMembers.filter(member => member.layout.priority < 2); // CEO (1) or SINGLE_MEMBER (1.5)
  const regularCards = sortedMembers.filter(member => member.layout.priority >= 2);

  // Calculate dynamic width for regular cards - only if there are multiple members
  useEffect(() => {
    const calculateCardWidth = () => {
      if (regularCards.length > 0 && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        
        // WIDER: Match CEO width - approximately 85% of screen (same as CEO card)
        const availableWidth = containerWidth * 0.85; // INCREASED from 75% to 85%
        
        // Determine optimal number of visible cards based on count
        let targetVisibleCards;
        if (regularCards.length <= 2) {
          targetVisibleCards = Math.min(2, regularCards.length);
        } else if (regularCards.length <= 4) {
          targetVisibleCards = Math.min(3, regularCards.length);
        } else {
          targetVisibleCards = Math.min(4, regularCards.length);
        }
        
        // Calculate width per card including gap (gap-8 = 32px)
        const gapSize = 32;
        const totalGapWidth = (targetVisibleCards - 1) * gapSize;
        const cardWidthPx = Math.floor((availableWidth - totalGapWidth) / targetVisibleCards);
        
        // Convert to valid Tailwind width classes
        // Use standard Tailwind sizes: 56(14rem), 64(16rem), 72(18rem), 80(20rem), 96(24rem)
        let widthClass;
        if (cardWidthPx <= 240) { // 15rem = 240px
          widthClass = 'w-60'; // 15rem
        } else if (cardWidthPx <= 256) { // 16rem = 256px
          widthClass = 'w-64'; // 16rem
        } else if (cardWidthPx <= 288) { // 18rem = 288px
          widthClass = 'w-72'; // 18rem
        } else if (cardWidthPx <= 320) { // 20rem = 320px
          widthClass = 'w-80'; // 20rem
        } else if (cardWidthPx <= 384) { // 24rem = 384px
          widthClass = 'w-96'; // 24rem
        } else {
          widthClass = 'w-[28rem]'; // 28rem - custom for very wide screens
        }
        
        setCardWidthClass(widthClass);
        
        // Calculate if all cards fit without scrolling
        let cardWidth;
        if (widthClass === 'w-[28rem]') {
          cardWidth = 28 * 16; // 28rem * 16px/rem
        } else {
          cardWidth = parseInt(widthClass.split('-')[1]) * 0.25 * 16; // Convert rem to px
        }
        
        const totalCardsWidth = regularCards.length * cardWidth + 
                              (regularCards.length - 1) * gapSize;
        setShouldCenter(totalCardsWidth <= availableWidth);
      }
    };

    // Add a small delay to ensure DOM is fully rendered
    setTimeout(calculateCardWidth, 100);
    window.addEventListener('resize', calculateCardWidth);
    
    return () => window.removeEventListener('resize', calculateCardWidth);
  }, [regularCards]);

  // Render Wide Card (CEO or Single Member) - EXTRA WIDE (85%)
  const renderWideCard = (member) => {
    const layout = member.layout;
    const isHorizontal = layout.direction === 'horizontal';
    
    return (
      <div key={member.id} className="w-full mb-12">
        <Link 
          to={`/team/${member.slug}`}
          className={`rounded-2xl ${layout.spacing} h-full flex ${isHorizontal ? 'flex-col md:flex-row md:items-center' : 'flex-col items-center'} 
            no-underline hover:no-underline transition-all duration-300 group mx-auto ${layout.width}`}
        >
          {/* Avatar - Larger for wide cards */}
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
            
            {/* Description for wide cards */}
            {layout.showDescription && member.description && (
              <div className="mt-4">
                <p className="text-gray-700 text-lg leading-relaxed line-clamp-4 md:line-clamp-none">
                  {typeof member.description === 'string' 
                    ? member.description 
                    : Array.isArray(member.description) 
                      ? member.description[0] 
                      : member.description}
                </p>
                {/* REMOVED: Read full bio link */}
              </div>
            )}
          </div>
        </Link>
      </div>
    );
  };

  // Render Regular Card - for sections with multiple members
  const renderRegularCard = (member) => {
    const layout = member.layout;
    
    return (
      <div 
        key={member.id} 
        className={`flex-shrink-0 ${cardWidthClass} transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}
        style={{ minWidth: '0' }} // IMPORTANT: Prevents flex item overflow
      >
        <Link 
          to={`/team/${member.slug}`}
          className={`rounded-xl ${layout.spacing} h-full flex flex-col items-center 
            no-underline hover:no-underline transition-all duration-300 group flex-1`}
        >
          {/* Avatar */}
          <div className="mb-4 flex-shrink-0">
            <img 
              src={member.image} 
              alt={member.name}
              className={`${layout.avatarSize} rounded-full object-cover ${layout.avatarBorder} 
                group-hover:scale-105 transition-transform duration-300 ${layout.shadow}`}
            />
          </div>
          
          {/* Content - Clean version without extra elements */}
          <div className="text-center w-full flex flex-col flex-1 min-w-0">
            {/* Name - Proper text wrapping */}
            <h3 className={`font-bold ${layout.nameSize} text-navy-800 group-hover:text-navy-900 
              break-words overflow-hidden mb-2 leading-tight line-clamp-2`}
              style={{ wordWrap: 'break-word' }}>
              {member.name}
            </h3>
            
            {/* Role - Proper text wrapping */}
            {layout.showRole && member.role && (
              <p className={`text-navy-600 ${layout.roleSize} font-medium break-words overflow-hidden mb-3 leading-snug line-clamp-2`}
                style={{ wordWrap: 'break-word' }}>
                {member.role}
              </p>
            )}
            
            {/* Description for all members - Clean and centered */}
            {layout.showDescription && member.description && (
              <div className="mt-2 flex-1 min-h-0">
                <p className={`text-gray-600 ${layout.descriptionSize} leading-snug break-words overflow-hidden line-clamp-3`}
                  style={{ wordWrap: 'break-word' }}>
                  {typeof member.description === 'string' 
                    ? member.description 
                    : Array.isArray(member.description) 
                      ? member.description[0] 
                      : member.description}
                </p>
              </div>
            )}
            
            {/* REMOVED: Subject tags for tutors */}
            {/* REMOVED: View profile link */}
          </div>
        </Link>
      </div>
    );
  };

  return (
    <section className="mb-16">
      {/* Clean Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-navy-800 mb-3">{title}</h2>
        {description && (
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      {/* Wide Cards Section (CEO or Single Members) - Already 85% wide */}
      {wideCards.length > 0 && (
        <div className="mb-12">
          {wideCards.map(renderWideCard)}
        </div>
      )}

      {/* Regular Cards Section (Multiple Members) - WIDER to match CEO (85%) */}
      {regularCards.length > 0 && (
        <div className="relative" ref={containerRef}>
          <div className={`flex gap-8 pb-6 overflow-x-auto scroll-smooth 
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent 
            ${shouldCenter ? 'justify-center' : ''} 
            w-[85%] mx-auto px-4`}> {/* CHANGED: w-[85%] to match CEO */}
            {regularCards.map(renderRegularCard)}
          </div>
          
          {/* Scroll hint */}
          {!shouldCenter && regularCards.length > 0 && (
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