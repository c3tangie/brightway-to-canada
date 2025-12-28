// TeamMemberDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import teamData from './teamData';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const TeamMemberDetailPage = () => {
  const { memberId } = useParams();
  const member = teamData.find(m => m.id.toString() === memberId);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy-800 mb-4">Member Not Found</h1>
          <Link to="/about" className="text-navy-600 hover:text-navy-800 underline">
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
        <Navbar />
        <hr></hr>
        <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4">
            <Link 
                to="/about" 
                className="inline-flex items-center text-navy-600 hover:text-navy-800"
            >
                ← Back to Team
            </Link>
            </div>
        </div>

        {/* Member Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-64 md:h-96">
                <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{member.name}</h1>
                <p className="text-xl opacity-90">{member.role}</p>
                </div>
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Basic Info */}
                <div className="lg:col-span-1">
                    {/* Categories */}
                    {member.categories && member.categories.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-navy-800 mb-3">Roles</h3>
                        <div className="flex flex-wrap gap-2">
                        {member.categories.map(category => (
                            <span
                            key={category}
                            className="px-4 py-2 bg-navy-100 text-navy-800 rounded-lg font-medium"
                            >
                            {category}
                            </span>
                        ))}
                        </div>
                    </div>
                    )}

                    {/* Tutor Expertise */}
                    {member.tutor_expertise && member.tutor_expertise.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-navy-800 mb-3">Expertise</h3>
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

                    {/* Contact Info */}
                    <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-navy-800">Contact</h3>
                    {member.email && (
                        <a 
                        href={`mailto:${member.email}`}
                        className="block text-navy-600 hover:text-navy-800 hover:underline"
                        >
                        ✉️ {member.email}
                        </a>
                    )}
                    {member.phone && (
                        <p className="text-gray-700">📱 {member.phone}</p>
                    )}
                    </div>
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

            {/* Related Members */}
            <div className="border-t border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-navy-800 mb-6">Other Team Members</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamData
                    .filter(m => m.id !== member.id)
                    .slice(0, 3)
                    .map(relatedMember => (
                    <Link
                        key={relatedMember.id}
                        to={`/team/${relatedMember.id}`}
                        className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-4">
                        <img
                            src={relatedMember.image}
                            alt={relatedMember.name}
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-semibold text-navy-800">{relatedMember.name}</h4>
                            <p className="text-sm text-gray-600">{relatedMember.role}</p>
                        </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
            </div>
        </div>
        </div>
        <hr></hr>
        <Footer />
    </div>
  );
};

export default TeamMemberDetailPage;