// TeamMemberDetailPage.jsx - Updated with Side-by-Side Layout
import React, { useEffect } from 'react';
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

  const getRelatedMembers = () => {
    if (!member.categories || member.categories.length === 0) {
      return teamData
        .filter(m => m.slug !== member.slug)
        .slice(0, 3);
    }

    // Check if member is any type of tutor
    const isTutor = member.categories.includes('tutor') || 
                    member.categories.includes('tutor_stem');
    
    // Determine which tutor type if applicable
    const tutorType = member.categories.includes('tutor_stem') ? 'tutor_stem' : 
                      member.categories.includes('tutor') ? 'tutor' : null;

    const relatedMembers = teamData.filter(otherMember => {
      if (otherMember.slug === member.slug) return false;
      
      if (!otherMember.categories) return false;
      
      // If member is a tutor, only show same-type tutors
      if (isTutor && tutorType) {
        return otherMember.categories.includes(tutorType);
      }
      
      // If not a tutor, use the first non-tutor category
      const firstNonTutorCategory = member.categories.find(cat => 
        cat !== 'tutor' && cat !== 'tutor_stem'
      );
      
      if (firstNonTutorCategory) {
        return otherMember.categories.includes(firstNonTutorCategory);
      }
      
      // Fallback to hierarchy category
      return otherMember.hierarchyCategory === member.hierarchyCategory;
    });

    return relatedMembers
      .sort((a, b) => {
        if (a.hierarchyLevel && b.hierarchyLevel) {
          return a.hierarchyLevel - b.hierarchyLevel;
        }
        return a.name.localeCompare(b.name);
      })
      .slice(0, 3);
  };

  const relatedMembers = getRelatedMembers();

  const getRelatedSectionTitle = () => {
    if (!member.categories || member.categories.length === 0) {
      return 'Other Team Members';
    }

    // Check if member is a tutor
    const isTutor = member.categories.includes('tutor') || 
                    member.categories.includes('tutor_stem');
    
    if (isTutor) {
      const isStemTutor = member.categories.includes('tutor_stem');
      return isStemTutor ? 'Other STEM Instructors' : 'Other Language Instructors';
    }
    
    // Find first non-tutor category for title
    const firstNonTutorCategory = member.categories.find(cat => 
      cat !== 'tutor' && cat !== 'tutor_stem'
    );
    
    const categoryTitles = {
      'founder': 'Other Leadership',
      'development': 'Other Developers',
      'design': 'Other Designers',
      'advising': 'Other Advisors',
      'tutor': 'Other Language Instructors',
      'tutor_stem': 'Other STEM Instructors',
    };

    return categoryTitles[firstNonTutorCategory] || 'Other Team Members';
  };

  return (
    <div>
      <Navbar />
      <hr />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link 
              to="/about_teams" 
              className="inline-flex items-center text-navy-600 hover:text-navy-800"
            >
              ← Back to Team
            </Link>
          </div>
        </div>

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
                  {member.categories && member.categories.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-navy-800 mb-3">Roles</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.categories.map(category => {
                          const categoryLabels = {
                            'founder': '👑 Founder',
                            'development': '💻 Developer',
                            'design': '🎨 Designer',
                            'advising': '💡 Advisor',
                            'tutor': '📚 Language Instructor',
                            'tutor_stem': '📚 STEM Instructor',
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

            {/* Related Members - Updated with Scrollable Container */}
            {relatedMembers.length > 0 && (
              <div className="border-t border-gray-200 p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-navy-800">
                    {getRelatedSectionTitle()}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Scroll to see more →
                  </p>
                </div>
                <div className="relative">
                  <div className="flex space-x-6 pb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {relatedMembers.map(relatedMember => (
                      <Link
                        key={relatedMember.id}
                        to={`/team/${relatedMember.slug}`}
                        className="min-w-[300px] bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:bg-white hover:border-navy-100 hover:border flex-shrink-0"
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
                                {relatedMember.categories.slice(0, 2).map(category => {
                                  const categoryLabels = {
                                    'founder': '👑 Founder',
                                    'development': '💻 Developer',
                                    'design': '🎨 Designer',
                                    'advising': '💡 Advisor',
                                    'tutor': '📚 Language Instructor',
                                    'tutor_stem': '📚 STEM Instructor',
                                  };
                                  return (
                                    <span
                                      key={category}
                                      className="px-3 py-1 text-xs bg-navy-50 text-navy-700 rounded-full"
                                    >
                                      {categoryLabels[category] || category}
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
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default TeamMemberDetailPage;