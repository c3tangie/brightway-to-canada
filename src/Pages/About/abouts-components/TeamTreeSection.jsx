import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

// Card Layout Configuration
const CARD_LAYOUTS = {
  // All cards use the same layout - consistent across all types
  DEFAULT: {
    width: 'w-full',
    height: 'h-auto min-h-64',
    direction: 'horizontal',
    avatarSize: 'w-56 h-56 md:w-64 md:h-64',
    shadow: 'shadow-md',
    priority: 1,
    showDescription: true,
    maxLines: 4,
    spacing: 'p-6 md:p-8',
    avatarBorder: 'ring-4 ring-white',
    showRole: true,
    nameSize: 'text-3xl md:text-4xl',
    roleSize: 'text-xl',
    descriptionSize: 'text-lg'
  }
};

// Helper function to determine layout - Now returns DEFAULT for all
const getCardLayout = (role, hierarchyCategory, tutor_expertise, isSingleMember = false) => {
  return CARD_LAYOUTS.DEFAULT;
};

const TeamTreeSection = ({ title, description, icon, color, members, onViewDetails }) => {
  if (!members || members.length === 0) return null;

  // Sort members alphabetically
  const sortedMembers = useMemo(() => 
    [...members]
      .map(member => ({
        ...member,
        layout: getCardLayout(member.role, member.hierarchyCategory, member.tutor_expertise, true)
      }))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })),
    [members]
  );

  // Render Member Card - All cards use the same layout
  const renderMemberCard = (member) => {
    const layout = member.layout;
    const isHorizontal = layout.direction === 'horizontal';
    
    return (
      <div key={member.id} className="w-full">
        <Link 
          to={`/team/${member.slug}`}
          aria-label={`View details for ${member.name}`}
          className={`rounded-3xl ${layout.spacing} h-full flex ${isHorizontal ? 'flex-col md:flex-row md:items-center' : 'flex-col items-center'}
            bg-white ring-1 ring-navy-100 shadow-sm hover:shadow-lg hover:ring-navy-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400
            no-underline hover:no-underline transition-all duration-300 group w-full`}
        >
          {/* Avatar - Larger for all cards */}
          <div className={`${isHorizontal ? 'md:mr-10 mb-6 md:mb-0' : 'mb-6'} flex-shrink-0`}>
            <img 
              src={member.image} 
              alt={member.name}
              loading="lazy"
              className={`${layout.avatarSize} rounded-full object-cover ${layout.avatarBorder}
                group-hover:scale-[1.03] transition-transform duration-300 ${layout.shadow}`}
            />
          </div>
          
          {/* Content - Left aligned for all */}
          <div className={`text-left ${isHorizontal ? 'md:flex-1' : 'w-full'}`}>
            {/* Name with special styling */}
            <h3 className={`font-bold ${layout.nameSize} text-navy-900 group-hover:text-navy-800 mb-3`}>
              {member.name}
            </h3>
            
            {/* Role */}
            {layout.showRole && member.role && (
              <p className={`${layout.roleSize} text-navy-700 font-semibold mb-4`}>
                {member.role}
              </p>
            )}
            
            {/* Description */}
            {layout.showDescription && member.description && (
              <div className="mt-4">
                <p className="text-gray-700 text-xl leading-relaxed line-clamp-4 md:line-clamp-5">
                  {typeof member.description === 'string' 
                    ? member.description 
                    : Array.isArray(member.description) 
                      ? member.description[0] 
                      : member.description}
                </p>
              </div>
            )}
          </div>
        </Link>
      </div>
    );
  };

  return (
    <section className="mb-20 px-6 xl:px-20 2xl:px-20">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-1">
          {title}
        </h2>
        <div className="mt-3 h-px w-28 bg-navy-100 mx-auto" />
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="space-y-10">
          {sortedMembers.map(renderMemberCard)}
        </div>
      </div>
    </section>
  );
};

export default TeamTreeSection;