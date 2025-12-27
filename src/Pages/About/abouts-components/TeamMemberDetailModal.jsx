import React from 'react';

const TeamMemberDetailModal = ({ member, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Category config (same as in TeamMember)
  const categoryConfig = {
    'founder': { label: 'Founder', color: 'bg-navy-100 text-navy-800', icon: '👑' },
    'development': { label: 'Developer', color: 'bg-navy-100 text-navy-800', icon: '💻' },
    'design': { label: 'Designer', color: 'bg-navy-100 text-navy-800', icon: '🎨' },
    'marketing': { label: 'Marketing', color: 'bg-red-50 text-red-700', icon: '📢' },
    'it-support': { label: 'IT Support', color: 'bg-navy-100 text-navy-800', icon: '🔧' },
    'content': { label: 'Content', color: 'bg-red-50 text-red-700', icon: '✍️' },
    'tutor': { label: 'Tutor', color: 'bg-gray-100 text-gray-800', icon: '📖' }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal Container */}
        <div 
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-navy-100 p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-navy-900">Team Member Details</h2>
            <button
              onClick={onClose}
              className="text-navy-500 hover:text-navy-800 text-2xl p-2 hover:bg-navy-50 rounded-full"
            >
              ✕
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-8">
            {/* Member Info Row */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              {/* Image */}
              <div className="md:w-1/3">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-auto rounded-xl object-cover shadow-lg"
                />
              </div>

              {/* Basic Info */}
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold text-navy-900 mb-2">{member.name}</h3>
                <p className="text-xl text-navy-600 mb-4">{member.role}</p>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-navy-800 mb-3">Roles & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.categories && member.categories.map(categoryId => {
                      const config = categoryConfig[categoryId] || { 
                        label: categoryId, 
                        color: 'bg-gray-100 text-gray-800',
                        icon: '👤'
                      };
                      return (
                        <span
                          key={categoryId}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${config.color} border border-navy-200`}
                        >
                          <span className="text-lg">{config.icon}</span>
                          <span className="font-medium">{config.label}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Tutor Expertise (if applicable) */}
                {member.tutor_expertise && member.tutor_expertise.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-navy-800 mb-3">Tutoring Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.tutor_expertise.map((expertise, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {expertise}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                <div className="space-y-3">
                  {member.email && (
                    <div className="flex items-center gap-3">
                      <span className="text-navy-500">📧</span>
                      <a href={`mailto:${member.email}`} className="text-navy-700 hover:text-navy-900">
                        {member.email}
                      </a>
                    </div>
                  )}
                  {member.linkedin && (
                    <div className="flex items-center gap-3">
                      <span className="text-navy-500">🔗</span>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-navy-700 hover:text-navy-900"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  )}
                  {member.phone && (
                    <div className="flex items-center gap-3">
                      <span className="text-navy-500">📱</span>
                      <span className="text-navy-700">{member.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="border-t border-navy-100 pt-8">
              <h4 className="text-xl font-semibold text-navy-800 mb-4">About {member.name.split(' ')[0]}</h4>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-4">{member.description}</p>
                
                {/* Extended bio if available */}
                {member.extended_bio && (
                  <div className="mt-6">
                    {Array.isArray(member.extended_bio) ? (
                      // If it's an array (Option 2), render each paragraph
                      member.extended_bio.map((paragraph, index) => (
                        <p key={index} className="text-lg leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))
                    ) : typeof member.extended_bio === 'string' && member.extended_bio.includes('\n') ? (
                      // If it's a string with \n (Option 3), split and render
                      member.extended_bio.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-lg leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      // Default string rendering (backward compatible)
                      <p className="text-lg leading-relaxed mb-4">{member.extended_bio}</p>
                    )}
                  </div>
                )}

                {/* Education if available */}
                {member.education && (
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold text-navy-800 mb-2">Education</h5>
                    <p className="text-gray-700">{member.education}</p>
                  </div>
                )}

                {/* Experience if available */}
                {member.experience && (
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold text-navy-800 mb-2">Experience</h5>
                    <p className="text-gray-700">{member.experience}</p>
                  </div>
                )}

                {/* Skills if available */}
                {member.skills && member.skills.length > 0 && (
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold text-navy-800 mb-2">Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-navy-50 text-navy-700 rounded-lg text-sm border border-navy-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Fun Facts or Personal Info */}
            {member.fun_fact && (
              <div className="mt-8 p-4 bg-navy-50 rounded-xl border border-navy-200">
                <h5 className="text-lg font-semibold text-navy-800 mb-2">✨ Fun Fact</h5>
                <p className="text-gray-700 italic">{member.fun_fact}</p>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="sticky bottom-0 bg-white border-t border-navy-100 p-6 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-navy-300 text-navy-700 rounded-lg hover:bg-navy-50 transition-colors"
            >
              Close
            </button>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="px-6 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors font-medium"
              >
                Contact {member.name.split(' ')[0]}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberDetailModal;