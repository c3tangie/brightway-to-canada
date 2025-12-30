// TeamMemberDetailPage.jsx - Updated with Multiple Related Member Lists and Fade Effects
import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import teamData from './teamData';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const TeamMemberDetailPage = () => {
  const { memberSlug } = useParams();
  const member = teamData.find(m => m.slug === memberSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [memberSlug]);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy-800 mb-4">Member Not Found</h1>
          <Link to="/about_teams" className="text-navy-600 hover:text-navy-800 underline">
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  // Function to get related members for a specific category
  const getRelatedMembersByCategory = (category) => {
    // If no category, return empty array
    if (!category) {
      return [];
    }

    // Filter members based on category
    return teamData.filter(otherMember => {
      if (otherMember.slug === member.slug) return false;
      
      // Check if category exists in categories array
      if (otherMember.categories && otherMember.categories.includes(category)) {
        return true;
      }
      
      // Check if category matches hierarchyCategory
      if (otherMember.hierarchyCategory === category) {
        return true;
      }
      
      return false;
    }).slice(0, 3); // Limit to 3 members
  };

  // Get all unique categories for the member (including hierarchyCategory)
  const getDisplayCategories = () => {
    const categoriesSet = new Set();
    
    // Add all categories
    if (member.categories && member.categories.length > 0) {
      member.categories.forEach(cat => categoriesSet.add(cat));
    }
    
    // Add hierarchyCategory if it exists
    if (member.hierarchyCategory) {
      categoriesSet.add(member.hierarchyCategory);
    }
    
    return Array.from(categoriesSet);
  };

  const displayCategories = getDisplayCategories();

  // Function to get section title for a category
  const getCategorySectionTitle = (category) => {
    const categoryTitles = {
      'founder': 'Other Leadership',
      'development': 'Other Developers',
      'design': 'Other Designers',
      'advising': 'Other Advisors',
      'tutor_lang': 'Other Language Instructors',
      'tutor_stem': 'Other STEM Instructors',
      'administration': 'Other Administrative Team',
      'tutor': 'Other Tutors',
    };

    return categoryTitles[category] || `Other ${category.charAt(0).toUpperCase() + category.slice(1)}`;
  };

  // Sort categories to ensure hierarchyCategory comes first if present
  const sortedCategories = displayCategories.sort((a, b) => {
    // If a is hierarchyCategory, it should come first
    if (a === member.hierarchyCategory) return -1;
    if (b === member.hierarchyCategory) return 1;
    
    // For tutor categories, put them after non-tutor categories
    const isATutor = a === 'tutor_lang' || a === 'tutor_stem';
    const isBTutor = b === 'tutor_lang' || b === 'tutor_stem';
    
    if (isATutor && !isBTutor) return 1;
    if (!isATutor && isBTutor) return -1;
    
    // Otherwise alphabetical
    return a.localeCompare(b);
  });

  return (
    <div>
      <Navbar />
      <hr />
      <div className="min-h-screen bg-gray-50">
        {/* Member Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Hero Section - Updated */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Left: Square Profile Photo */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
                  />
                </div>

                {/* Right: Text Details */}
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-3">
                    {member.name}
                  </h1>
                  <p className="text-2xl text-gray-700 mb-6">{member.role}</p>

                  {member.tagline && (
                    <p className="text-lg text-gray-600 mb-6">{member.tagline}</p>
                  )}

                  <div className="flex flex-wrap gap-4">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-navy-100 text-navy-800 rounded-lg hover:bg-navy-200"
                      >
                        ✉️ Email
                      </a>
                    )}
                    {member.phone && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                        📱 {member.phone}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12 pt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Basic Info */}
                <div className="lg:col-span-1">
                  {/* Categories */}
                  {displayCategories.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-navy-800 mb-3">Roles</h3>
                      <div className="flex flex-wrap gap-2">
                        {displayCategories.map(category => {
                          const categoryLabels = {
                            'founder': '👑 Founder',
                            'development': '💻 Developer',
                            'design': '🎨 Designer',
                            'advising': '💡 Advisor',
                            'tutor_lang': '📚 Language Instructor',
                            'tutor_stem': '📚 STEM Instructor',
                            'administration': '📋 Administrative Team',
                          };
                          return (
                            <span
                              key={category}
                              className="px-4 py-2 bg-navy-100 text-navy-800 rounded-lg font-medium"
                            >
                              {categoryLabels[category] || category}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Tutor Expertise */}
                  {member.tutor_expertise && member.tutor_expertise.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-navy-800 mb-3">Teaching Expertise</h3>
                      <div className="space-y-2">
                        {member.tutor_expertise.map((expertise, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            <span className="text-gray-700">{expertise}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Extended Expertise - NEW SECTION */}
                  {member.extended_expertise && member.extended_expertise.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-navy-800 mb-3">Additional Expertise</h3>
                      <div className="space-y-2">
                        {member.extended_expertise.map((expertise, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-navy-600">★</span>
                            <span className="text-gray-700">{expertise}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column - Bio */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-navy-800 mb-6">About</h2>
                  
                  {/* Basic Description */}
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Extended Bio */}
                  {member.extended_bio && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-navy-800 mb-4">Detailed Biography</h3>
                      <div className="space-y-6">
                        {Array.isArray(member.extended_bio) ? (
                          member.extended_bio.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 leading-relaxed">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p className="text-gray-700 leading-relaxed">{member.extended_bio}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Additional Info Sections */}
                  {member.education && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-navy-800 mb-4">Education</h3>
                      <p className="text-gray-700">{member.education}</p>
                    </div>
                  )}

                  {member.skills && member.skills.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-navy-800 mb-4">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Multiple Related Members Sections with Fade Effects */}
            {displayCategories.length > 0 && (
              <div className="border-t border-gray-200">
                {sortedCategories.map((category, index) => {
                  const relatedMembers = getRelatedMembersByCategory(category);
                  
                  if (relatedMembers.length === 0) return null;
                  
                  return (
                    <RelatedMembersSection 
                      key={category}
                      category={category}
                      relatedMembers={relatedMembers}
                      getCategorySectionTitle={getCategorySectionTitle}
                    />
                  );
                })}
              </div>
            )}

            {/* Back to Team Button - Centered at Bottom */}
            <div className="p-8 border-t border-gray-200 text-center">
              <Link 
                to="/about_teams" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-600 text-white font-semibold rounded-lg hover:bg-navy-700 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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
                Back to Team
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

// New Component for Related Members with Fade Effects
const RelatedMembersSection = ({ category, relatedMembers, getCategorySectionTitle }) => {
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const scrollContainerRef = useRef(null);

  // Update fade effects based on scroll position
  useEffect(() => {
    const updateFadeEffects = () => {
      if (!scrollContainerRef.current) {
        setShowLeftFade(false);
        setShowRightFade(false);
        return;
      }

      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const scrollRight = scrollWidth - clientWidth - scrollLeft;

      // Show left fade if scrolled to the right
      setShowLeftFade(scrollLeft > 10);
      
      // Show right fade if there's more content to scroll
      setShowRightFade(scrollRight > 10);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateFadeEffects);
      // Initial check
      setTimeout(updateFadeEffects, 150);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', updateFadeEffects);
      }
    };
  }, []);

  return (
    <div className="p-8 border-b border-gray-100 last:border-b-0 relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-navy-800">
          {getCategorySectionTitle(category)}
        </h3>
        <p className="text-sm text-gray-500">
          Scroll to see more →
        </p>
      </div>
      
      {/* Relative container for fade overlays */}
      <div className="relative">
        {/* Left fade overlay */}
        <div 
          className={`absolute left-0 top-0 bottom-0 w-12 pointer-events-none z-10 
            transition-opacity duration-300 ${showLeftFade ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%)',
          }}
        />
        
        {/* Right fade overlay */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-12 pointer-events-none z-10 
            transition-opacity duration-300 ${showRightFade ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%)',
          }}
        />

        {/* Scroll container */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 pb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 relative"
        >
          {relatedMembers.map(relatedMember => (
            <Link
              key={relatedMember.id}
              to={`/team/${relatedMember.slug}`}
              className="min-w-[300px] bg-gray-50 rounded-lg p-6 transition-all duration-200 hover:bg-white flex-shrink-0 transform"
            >
              <div className="flex items-start gap-4">
                <img
                  src={relatedMember.image}
                  alt={relatedMember.name}
                  className="w-20 h-20 rounded-xl object-cover border-2 border-navy-100"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-navy-800 mb-1">{relatedMember.name}</h4>
                  <p className="text-gray-600 mb-2">{relatedMember.role}</p>
                  {relatedMember.categories && relatedMember.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {relatedMember.categories.slice(0, 2).map(cat => {
                        const categoryLabels = {
                          'founder': '👑 Founder',
                          'development': '💻 Developer',
                          'design': '🎨 Designer',
                          'advising': '💡 Advisor',
                          'tutor_lang': '📚 Language Instructor',
                          'tutor_stem': '📚 STEM Instructor',
                          'administration': '📋 Administrative Team',
                        };
                        return (
                          <span
                            key={cat}
                            className="px-3 py-1 text-xs bg-navy-50 text-navy-700 rounded-full"
                          >
                            {categoryLabels[cat] || cat}
                          </span>
                        );
                      })}
                    </div>
                  )}
                  <div className="text-sm text-navy-600 font-medium mt-3">
                    View Profile →
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Add extra padding on the right for better scrolling feel */}
          <div className="flex-shrink-0 w-4" />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetailPage;