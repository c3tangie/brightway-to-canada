import React, { useState, useEffect } from 'react';
import TeamMember from './teamMember';
import teamData from './teamData';
import TeamMemberDetailModal from './TeamMemberDetailModal';
import TeamTreeSection from './TeamTreeSection';
import BannerImage from '../../../assets/about_us_assets/abouts_banner.jpg'; // Import banner image

const Abouts_Article_Main = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
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
    // { id: 'marketing', label: 'Marketing', icon: '📢' },
    { id: 'advising', label: 'Advising', icon: '💡' },
    // { id: 'content', label: 'Content', icon: '✍️' },
    { id: 'tutor', label: 'Tutor', icon: '📚' }
  ]

  // Filter team members based on active filter
  const filteredTeam = activeFilter === 'all' 
    ? teamData 
    : teamData.filter(member => 
        member.categories && member.categories.includes(activeFilter)
      )

  // Count members in each category (for badges)
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return teamData.length
    return teamData.filter(member => 
      member.categories && member.categories.includes(categoryId)
    ).length
  }

  // Define hierarchy sections
  const hierarchySections = [
    {
      id: 'founders',
      title: 'Founders & Leadership',
      description: 'The visionaries guiding Brightway to Canada',
      icon: '👑',
      color: 'bg-gradient-to-r from-navy-700 to-navy-900',
      filterFn: (member) => member.hierarchyCategory === 'founders'
    },
    
    {
      id: 'tutors',
      title: 'Tutoring Team',
      description: 'Expert instructors for academic success',
      icon: '📚',
      color: 'bg-gradient-to-r from-navy-500 to-navy-700',
      filterFn: (member) => member.hierarchyCategory === 'tutors'
    },
    {
      id: 'design',
      title: 'Design & Creative',
      description: 'Crafting engaging visual experiences',
      icon: '🎨',
      color: 'bg-gradient-to-r from-navy-600 to-navy-800',
      filterFn: (member) => member.hierarchyCategory === 'design'
    },
    {
      id: 'administration',
      title: 'Administration & Operations',
      description: 'Managing daily operations and client services',
      icon: '⚙️',
      color: 'bg-gradient-to-r from-navy-600 to-navy-800',
      filterFn: (member) => member.hierarchyCategory === 'administration'
    }
  ];

  // Group team members by hierarchy
  const groupedTeam = {};
  hierarchySections.forEach(section => {
    groupedTeam[section.id] = teamData.filter(section.filterFn);
  });

  return (
    <div className='font-RobotoFlex'>
      
      {/* Combined Hero Banner Section */}
      <div className="relative w-full overflow-hidden " style={{ height: '500px' }}>
        {/* Banner Image */}
        <img
          src={BannerImage}
          alt="About Us Banner"
          className="absolute top-0 w-full h-full object-cover "
          style={{
            minWidth: '1920px',
            objectPosition: 'center center',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />

        {/* Single gradient overlay - properly fading to white */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/25 z-5"></div>

        {/* Hero Content Inside Banner */}
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              YEEHAW
            </h1>

            {/* Hero Description */}
            <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8">
              We're a passionate group of innovators, creators, and problem-solvers 
              dedicated to building amazing solutions for your journey to Canada.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className='mt-5 max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6' id="team-section">
        
        {/* Company Story */}
        <section className='mb-12 pt-12'>
          <h2 className='text-5xl font-bold text-navy-800 mb-6 text-center'>
            Our Story
          </h2>
          <div className='space-y-6 text-gray-700 max-w-8xl mx-auto'>
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
              href="#/contact" 
              className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold"
            >
              Contact Us
            </a>
            <a 
              href="#/services" 
              className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold"
            >
              Our Services
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Abouts_Article_Main