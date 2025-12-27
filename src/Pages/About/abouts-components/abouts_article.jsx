import React, { useState } from 'react';
import TeamMember from './teamMember';
import teamData from './teamData';
import TeamMemberDetailModal from './TeamMemberDetailModal';

const Abouts_Article = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null); // Add this
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Function to handle opening modal
  const handleOpenModal = (member) => {
    setSelectedMember(member);
    setShowDetailModal(true);
  };

  // Function to handle closing modal
  const handleCloseModal = () => {
    setShowDetailModal(false);
    setSelectedMember(null);
  };

  // Define all possible categories
  const categories = [
    { id: 'all', label: 'All Team', icon: '👥' },
    { id: 'founder', label: 'Founders', icon: '👑' },
    { id: 'development', label: 'Developers', icon: '💻' },
    { id: 'design', label: 'Designers', icon: '🎨' },
    { id: 'marketing', label: 'Marketing', icon: '📢' },
    { id: 'it-support', label: 'IT Support', icon: '🔧' },
    { id: 'content', label: 'Content', icon: '✍️' },
    { id: 'tutor', label: 'Tutor', icon: '📖' }
  ]

  // Filter team members based on active filter
  const filteredTeam = activeFilter === 'all' 
    ? teamData 
    : teamData.filter(member => 
        // Check if member has this category in their categories array
        member.categories && member.categories.includes(activeFilter)
      )

  // Count members in each category (for badges)
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return teamData.length
    return teamData.filter(member => 
      member.categories && member.categories.includes(categoryId)
    ).length
  }

  // Get all categories from team members (dynamic)
  const getAllUniqueCategories = () => {
    const allCategories = new Set()
    teamData.forEach(member => {
      if (member.categories) {
        member.categories.forEach(cat => allCategories.add(cat))
      }
    })
    return Array.from(allCategories)
  }

  return (
    <div className='mt-5 max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6 font-RobotoFlex'>
      
      {/* Hero Section */}
      <section className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-navy-900 mb-6'>
          Meet Our Brightway Team
        </h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
          We're a passionate group of innovators, creators, and problem-solvers 
          dedicated to building amazing solutions for your journey to Canada.
        </p>
      </section>

      {/* Company Story */}
      <section className='mb-16'>
        <h2 className='text-3xl font-bold text-navy-800 mb-8 text-center'>
          Our Story
        </h2>
        <div className='space-y-6 text-gray-700 max-w-4xl mx-auto'>
          <p className='text-lg leading-relaxed'>
            Brightway to Canada was founded with a simple yet powerful vision: 
            to make the Canadian dream accessible to everyone. What started as 
            a small consultancy has grown into a comprehensive immigration 
            services provider, helping thousands of individuals and families 
            successfully navigate their path to Canada.
          </p>
          <p className='text-lg leading-relaxed'>
            Our team combines decades of immigration law expertise with 
            cutting-edge technology to provide personalized, efficient, 
            and successful immigration solutions. We believe in building 
            lasting relationships with our clients, guiding them through 
            every step of their journey.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-navy-700 mb-6 text-center'>
          Filter by Expertise
        </h2>
        
        {/* Category Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-3 mb-8'>
          {categories.map(category => (
            <button
              key={category.id}
              className={`
                relative inline-flex items-center gap-2 
                px-5 py-2.5 rounded-full transition-all duration-300 
                ${activeFilter === category.id 
                  ? 'bg-navy-600 text-white shadow-lg ring-2 ring-navy-400 ring-offset-2' 
                  : 'bg-gray-100 text-navy-700 hover:bg-gray-200'
                }
              `}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.label}</span>
              <span className={`
                absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold
                ${activeFilter === category.id 
                  ? 'bg-white text-red-600' 
                  : 'bg-red-50 text-red-700'
                }
              `}>
                {getCategoryCount(category.id)}
              </span>
            </button>
          ))}
        </div>

        {/* Active Filter Info */}
        {activeFilter !== 'all' && (
          <div className='text-center mb-8'>
            <p className='text-gray-600'>
              Showing {filteredTeam.length} team member{filteredTeam.length !== 1 ? 's' : ''} 
              in <span className='font-semibold text-navy-600'>
                {categories.find(c => c.id === activeFilter)?.label}
              </span>
            </p>
          </div>
        )}
      </section>

      {/* Team Grid - Pass the handler to TeamMember */}
      <section className='mb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredTeam.length > 0 ? (
            filteredTeam.map(member => (
              <TeamMember 
                key={member.id} 
                member={member}
                onViewDetails={() => handleOpenModal(member)} // Pass handler
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No team members found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Tutoring Expertise Matrix */}
      <section className='mb-16 bg-gray-50 rounded-2xl p-8'>
        <h2 className='text-3xl font-bold text-navy-800 mb-8 text-center'>
          Tutoring Expertise Matrix
        </h2>
        
        {/* Filter team members who are tutors */}
        {(() => {
          const tutorMembers = teamData.filter(member => 
            member.categories && member.categories.includes('tutor')
          );
          
          if (tutorMembers.length === 0) {
            return (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">No tutoring experts available.</p>
              </div>
            );
          }

          // Get all unique tutoring expertise from tutor members with sorting
          const allTutorExpertise = new Set();
          tutorMembers.forEach(member => {
            if (member.tutor_expertise && Array.isArray(member.tutor_expertise)) {
              member.tutor_expertise.forEach(expertise => allTutorExpertise.add(expertise));
            }
          });
          
          // Sort the expertise - languages first, then others alphabetically
          const uniqueExpertise = Array.from(allTutorExpertise).sort((a, b) => {
            // Check if both are language-related
            const isALanguage = a.toLowerCase().includes('language') || a.toLowerCase().includes('mandarin') || a.toLowerCase().includes('chinese') || a.toLowerCase().includes('esl');
            const isBLanguage = b.toLowerCase().includes('language') || b.toLowerCase().includes('mandarin') || b.toLowerCase().includes('chinese') || b.toLowerCase().includes('esl');
            
            // If both are languages, sort alphabetically within languages
            if (isALanguage && isBLanguage) {
              return a.localeCompare(b);
            }
            // If only A is language, A comes first
            if (isALanguage && !isBLanguage) {
              return -1;
            }
            // If only B is language, B comes first
            if (!isALanguage && isBLanguage) {
              return 1;
            }
            // If neither are languages, sort alphabetically
            return a.localeCompare(b);
          });

          return (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-navy-50">
                    <th className="p-4 text-left border border-gray-200 text-navy-800">Tutor</th>
                    {uniqueExpertise.map(expertise => {
                      // Add appropriate icons for each expertise
                      let icon = '📚'; // Default icon for general tutoring
                      if (expertise.toLowerCase().includes('language') || expertise.toLowerCase().includes('mandarin') || expertise.toLowerCase().includes('chinese') || expertise.toLowerCase().includes('esl')) {
                        icon = '🗣️';
                      } else if (expertise.toLowerCase().includes('math')) {
                        icon = '🧮';
                      } else if (expertise.toLowerCase().includes('science')) {
                        icon = '🔬';
                      }
                      
                      return (
                        <th key={expertise} className="p-4 text-center border border-gray-200">
                          <div className="flex flex-col items-center">
                            <span className="text-xl mb-1">{icon}</span>
                            <span className="text-sm font-medium text-navy-700">{expertise}</span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {tutorMembers.map(member => (
                    <tr key={member.id} className="border-b border-gray-200 hover:bg-navy-50/30">
                      <td className="p-4 border border-gray-200">
                        <div className="flex items-center gap-3">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-navy-100"
                          />
                          <div>
                            <p className="font-semibold text-navy-800">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.role}</p>
                          </div>
                        </div>
                      </td>
                      {uniqueExpertise.map(expertise => (
                        <td key={expertise} className="p-4 text-center border border-gray-200">
                          {member.tutor_expertise && member.tutor_expertise.includes(expertise) ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full border border-green-200">
                              ✓
                            </span>
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })()}
      </section>

      {/* Stats Section */}
      <section className='bg-gradient-to-r from-navy-600 via-navy-700 to-navy-800 rounded-2xl p-8 md:p-12 mb-16 text-white'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <h3 className='text-4xl font-bold mb-2'>5000+</h3>
            <p className='text-blue-100'>Successful Cases</p>
          </div>
          <div className='text-center'>
            <h3 className='text-4xl font-bold mb-2'>98%</h3>
            <p className='text-blue-100'>Success Rate</p>
          </div>
          <div className='text-center'>
            <h3 className='text-4xl font-bold mb-2'>15+</h3>
            <p className='text-blue-100'>Years Experience</p>
          </div>
          <div className='text-center'>
            <h3 className='text-4xl font-bold mb-2'>24/7</h3>
            <p className='text-blue-100'>Client Support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='text-center mb-12'>
        <h2 className='text-3xl font-bold text-navy-800 mb-6'>
          Ready to Start Your Journey?
        </h2>
        <p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
          Our team is here to guide you through every step of your 
          immigration process. Contact us today for a free consultation.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <a 
            href="/contact" 
            className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold"
          >
            Contact Us
          </a>
          <a 
            href="/services" 
            className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Render the modal at the root level */}
      {selectedMember && (
        <TeamMemberDetailModal
          member={selectedMember}
          isOpen={showDetailModal}
          onClose={handleCloseModal}
        />
      )}

    </div>
  )
}

export default Abouts_Article