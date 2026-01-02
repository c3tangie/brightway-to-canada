import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import teamData from './teamData';
import TeamTreeSection from './TeamTreeSection';
import BannerImage from '../../../assets/about_us_assets/abouts_banner6.jpg';

const Abouts_Article_Teams = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Define hierarchy sections
  const hierarchySections = [
    {
      id: 'founder',
      title: 'Founders & Leadership',
      description: 'The visionaries guiding Brightway to Canada',
      icon: '👑',
      color: 'bg-gradient-to-r from-navy-700 to-navy-900',
      filterFn: (member) => member.hierarchyCategory === 'founder'
    },
    {
      id: 'tutor_lang',
      title: 'Language Instructing Team',
      description: 'Expert instructors for academic success',
      icon: '📚',
      color: 'bg-gradient-to-r from-navy-500 to-navy-700',
      filterFn: (member) => member.hierarchyCategory === 'tutor_lang'
    },
    {
      id: 'tutor_stem',
      title: 'STEM Instructing Team',
      description: 'Expert instructors for academic success',
      icon: '📚',
      color: 'bg-gradient-to-r from-navy-500 to-navy-700',
      filterFn: (member) => member.hierarchyCategory === 'tutor_stem'
    },
    {
      id: 'design',
      title: 'Education Consulting',
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
              Meet Our Brightway Team
            </h1>

            {/* Hero Description */}
            <p className="text-white text-2xl sm:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto mb-8">
              We're a passionate team dedicated to building personalized solutions for your journey to Canada.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className='mt-16 max-w-screen-2xl mx-auto' id="team-section">

        {/* Team Hierarchy Tree */}
        <section className='mb-20'>
          <div className="space-y-36">
            {hierarchySections.map(section => {
              // Filter members for this section
              const sectionMembers = teamData.filter(section.filterFn);
              
              // Only render section if there are members
              if (sectionMembers.length === 0) return null;
              
              return (
                <div key={section.id} className="w-full">
                  <TeamTreeSection
                    title={section.title}
                    description={section.description}
                    icon={section.icon}
                    members={sectionMembers}
                    color={section.color}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <TutoringExpertiseMatrix />

        {/* separator before CTA (match matrix width) */}
        <hr className="my-10 border-t border-gray-200 mx-6 xl:mx-20 2xl:mx-20" />

        {/* CTA Section */}
        <section className='text-center mb-12 mx-6 xl:mx-20 2xl:mx-20'>
          <h2 className='text-3xl font-bold text-navy-800 mb-6'>
            Ready to Start Your Journey?
          </h2>
          <p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
            Our team is here to support you at every stage of your educational journey in Canada. Book a free consultation or explore our services to learn more.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link 
              to="/consultation" 
              className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold text-lg"
            >
              Book a Consultation
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold text-lg"
            >
              Our Services
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Abouts_Article_Teams

const TutoringExpertiseMatrix = () => {
  const scrollContainerRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const tutorMembers = useMemo(() => (
    teamData
      .filter(member => member.categories && (
        member.categories.includes('tutor_lang') || member.categories.includes('tutor_stem')
      ))
      .sort((a, b) => (a.hierarchyLevel ?? 999) - (b.hierarchyLevel ?? 999))
  ), []);

  const uniqueExpertise = useMemo(() => {
    const allTutorExpertise = new Set();
    tutorMembers.forEach(member => {
      if (member.tutor_expertise && Array.isArray(member.tutor_expertise)) {
        member.tutor_expertise.forEach(expertise => allTutorExpertise.add(expertise));
      }
    });

    return Array.from(allTutorExpertise).sort((a, b) => {
      const isALanguage = a.toLowerCase().includes('language') || a.toLowerCase().includes('mandarin') || a.toLowerCase().includes('chinese') || a.toLowerCase().includes('esl');
      const isBLanguage = b.toLowerCase().includes('language') || b.toLowerCase().includes('mandarin') || b.toLowerCase().includes('chinese') || b.toLowerCase().includes('esl');

      if (isALanguage && isBLanguage) return a.localeCompare(b);
      if (isALanguage && !isBLanguage) return -1;
      if (!isALanguage && isBLanguage) return 1;
      return a.localeCompare(b);
    });
  }, [tutorMembers]);

  // Keep column widths stable when horizontal scrolling starts.
  // These should match the CSS vars in src/index.css under .tutor-matrix.
  const TUTOR_COL_MIN_PX = 170;
  const EXPERTISE_COL_MIN_PX = 92;
  const tableMinWidthPx = TUTOR_COL_MIN_PX + (EXPERTISE_COL_MIN_PX * uniqueExpertise.length);

  useEffect(() => {
    const update = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const canScroll = scrollWidth > clientWidth + 1;

      setIsScrollable(canScroll);

      if (!canScroll) {
        setShowLeftFade(false);
        setShowRightFade(false);
        return;
      }

      const scrollRight = scrollWidth - clientWidth - scrollLeft;
      setShowLeftFade(scrollLeft > 10);
      setShowRightFade(scrollRight > 10);
    };

    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', update);
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(update);
    });
    resizeObserver.observe(container);

    // Initial check
    setTimeout(update, 0);

    return () => {
      container.removeEventListener('scroll', update);
      resizeObserver.disconnect();
    };
  }, []);

  if (tutorMembers.length === 0) {
    return (
      <section className='mb-16 bg-gray-50 rounded-2xl p-8 mx-6 xl:mx-20 2xl:mx-20'>
        <h2 className='text-3xl font-bold text-navy-800 mb-8 text-center'>
          Tutoring Expertise Summary
        </h2>
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No tutoring experts available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className='mb-16 bg-gray-50 rounded-2xl p-8 mx-6 xl:mx-20 2xl:mx-20'>
      <div className="flex items-center justify-between mb-8">
        <h2 className='text-3xl font-bold text-navy-800 text-center flex-1'>
          Tutoring Expertise Summary
        </h2>
      </div>

      {isScrollable && (
        <p className="text-sm text-gray-500 text-center mb-3">
          ← Scroll to see more →
        </p>
      )}

      <div className="relative tutor-matrix">
        {/* Left fade overlay */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-10 pointer-events-none z-10 transition-opacity duration-300 ${isScrollable && showLeftFade ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'linear-gradient(90deg, rgba(249,250,251,1) 0%, rgba(249,250,251,0.75) 35%, rgba(249,250,251,0) 100%)',
          }}
        />

        {/* Right fade overlay */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-10 pointer-events-none z-10 transition-opacity duration-300 ${isScrollable && showRightFade ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'linear-gradient(270deg, rgba(249,250,251,1) 0%, rgba(249,250,251,0.75) 35%, rgba(249,250,251,0) 100%)',
          }}
        />

        <div ref={scrollContainerRef} className="tutor-matrix__scroller overflow-x-auto">
          <table
            className="w-full border-collapse table-fixed"
            style={{ minWidth: `${tableMinWidthPx}px` }}
          >
            <thead>
              <tr className="bg-navy-50">
                <th className="tutor-matrix__tutor-col p-3 sm:p-4 text-left border border-gray-200 text-navy-800">
                  Tutor
                </th>

                {uniqueExpertise.map(expertise => {
                  let icon = '📚';
                  if (expertise.toLowerCase().includes('language') || expertise.toLowerCase().includes('mandarin') || expertise.toLowerCase().includes('chinese') || expertise.toLowerCase().includes('esl')) {
                    icon = '🗣️';
                  } else if (expertise.toLowerCase().includes('math')) {
                    icon = '🧮';
                  } else if (expertise.toLowerCase().includes('science')) {
                    icon = '🔬';
                  }

                  return (
                    <th
                      key={expertise}
                      className="tutor-matrix__expertise-col p-2 sm:p-3 text-center border border-gray-200"
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-xl mb-1">{icon}</span>
                        <span
                          className="tutor-matrix__expertise-label block w-full text-xs sm:text-sm font-medium text-navy-700 leading-tight"
                          title={expertise}
                        >
                          {expertise}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {tutorMembers.map(member => (
                <tr key={member.id} className="border-b border-gray-200 hover:bg-navy-50/30">
                  <td className="tutor-matrix__tutor-col p-3 sm:p-4 border border-gray-200 align-top">
                    <div className="flex items-start gap-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-navy-100 flex-shrink-0 mt-1"
                      />
                      <div className="overflow-hidden flex-1">
                        <p className="font-semibold text-navy-800 mb-1 break-words">
                          {member.name}
                        </p>
                        <p className="text-sm text-gray-600 break-words leading-snug">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </td>

                  {uniqueExpertise.map(expertise => (
                    <td
                      key={expertise}
                      className="tutor-matrix__expertise-col p-2 sm:p-3 text-center border border-gray-200"
                    >
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
      </div>

      {isScrollable && (
        <p className="text-sm text-gray-500 text-center mt-3">
          ← Scroll to see more →
        </p>
      )}
    </section>
  );
};