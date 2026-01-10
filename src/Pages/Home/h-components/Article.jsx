import React, { useRef, useState, useEffect, useCallback } from 'react'
import videoFile from '@assets/video.mp4'
import imgFileFour from '@assets/card_4.jpg'
import imgFileFive from '@assets/card_5.jpg'
import home01Image from '@assets/home01.jpg'
import home02Image from '@assets/home02.jpg'
import DocsImageTwo from '@services-assets/services_img_docs2.webp';
import ConnectImageSix from '@services-assets/services_img_connect6.webp';
import ConnectImageFive from '@services-assets/services_img_connect5.webp';
import { Link } from 'react-router-dom';

const Article = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const isScrollingRef = useRef(false);
  
  const cards = [
    {
      id: 1,
      image: ConnectImageSix,
      title: "Troubles Picking Schools?",
      description: "When the parents think about sending their children to study abroad, Choosing the right school in Canada can feel overwhelming. Rankings, locations, programs, and future pathways all matter.",
      helpTitle: "How we help:",
      helpText: "Meeting 1:1 with our consultant is the best and quickest way. We take time to understand each student's academic background, personality, and long-term goals. Using firsthand experience within Canadian school districts, we recommend schools where students can succeed academically and feel supported socially and emotionally."
    },
    {
      id: 2,
      image: ConnectImageFive,
      title: "Eyeing A Study Permit?",
      description: "Study permit applications can be complex and stressful for families. No Problem, we have professional staff to provide step-by-step guidance. With many years of successful application cases, we can help to get study permits and visas as you need.",
      helpTitle: "How we help:",
      helpText: "We follow throughout the application process, ensuring documents are complete, accurate, and aligned with each student's study plan. Our goal is to reduce uncertainty and help families move forward with clarity and confidence."
    },
    {
      id: 3,
      image: DocsImageTwo,
      title: "Trouble Adapting to Canadian Studies?",
      description: "Many students struggle during the transition to a new education system, language environment, and culture.",
      helpTitle: "How we help:",
      helpText: "Brightway to Canada supports students beyond admission. We help them understand classroom expectations, learning styles, and communication norms, while providing ongoing guidance to ease academic and cultural adjustment."
    },
    {
      id: 4,
      image: imgFileFour,
      title: "Wanting Better Grades?",
      description: "Academic pressure can increase when students are studying in a second language or unfamiliar system.",
      helpTitle: "How we help:",
      helpText: "Our experienced language and STEM instructors offer personalized tutoring focused on building understanding, confidence, and long-term academic skills."
    },
    {
      id: 5,
      image: imgFileFive,
      title: "Planning for University and Beyond?",
      description: "University preparation starts earlier than many families expect.",
      helpTitle: "How we help:",
      helpText: "We assist students with long-term academic planning, course selection, and realistic pathway development. Our advice balances university reputation, program suitability, and the student's strengths, helping families make informed, strategic decisions."
    }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const checkScrollPosition = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        
        // Use a small buffer to avoid edge cases
        const buffer = 5;
        const isAtStart = scrollLeft <= buffer;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - buffer;
        
        setShowLeftFade(!isAtStart);
        setShowRightFade(!isAtEnd);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      // Check immediately
      checkScrollPosition();
      
      // Set up scroll listener
      container.addEventListener('scroll', checkScrollPosition);
      
      // Check on resize
      window.addEventListener('resize', checkScrollPosition);
      
      // Wait for images to load and check again
      const images = container.querySelectorAll('img');
      let imagesLoaded = 0;
      
      const checkAfterImagesLoad = () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          // All images loaded, check scroll position
          setTimeout(checkScrollPosition, 100);
        }
      };
      
      images.forEach(img => {
        if (img.complete) {
          imagesLoaded++;
        } else {
          img.addEventListener('load', checkAfterImagesLoad);
          img.addEventListener('error', checkAfterImagesLoad); // Also check if image fails to load
        }
      });
      
      // If all images are already loaded or there are no images
      if (imagesLoaded === images.length) {
        setTimeout(checkScrollPosition, 100);
      }
      
      // Additional checks after delays
      const timeout1 = setTimeout(checkScrollPosition, 300);
      const timeout2 = setTimeout(checkScrollPosition, 1000);

      return () => {
        if (container) {
          container.removeEventListener('scroll', checkScrollPosition);
        }
        window.removeEventListener('resize', checkScrollPosition);
        
        // Clean up image listeners
        images.forEach(img => {
          img.removeEventListener('load', checkAfterImagesLoad);
          img.removeEventListener('error', checkAfterImagesLoad);
        });
        
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [isMounted]);

  const handleScrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Use responsive scroll amount based on screen size
      const scrollAmount = window.innerWidth < 640 ? -280 : -350;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Use responsive scroll amount based on screen size
      const scrollAmount = window.innerWidth < 640 ? 280 : 350;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToStart = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollToEnd = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ 
        left: container.scrollWidth - container.clientWidth, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className='mt-8 max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6 font-RobotoFlex text-xl leading-normal text-gray-600'>
      <div className="mt-12 text-4xl font-bold text-blue-900 mb-4 text-center">
        Welcome to Brightway to Canada
      </div>
      <p className="mb-12 text-center text-xl leading-relaxed">
        Brightway to Canada is an education consulting company dedicated to helping international students and their families confidently navigate the Canadian K-12 education system. We specialize in school selection, study planning, academic support, student well-being, and smooth transitions to post-secondary institutions. Through this comprehensive support, Brightway to Canada helps students achieve academic success while building a meaningful and fulfilling life in Canada. With deep experience working alongside Canadian primary and high schools, educators, and homestay families, we guide students toward environments where they can learn, adapt, and grow with confidence.
      </p>

      {/* NEW: separator between welcome intro and cards */}
      <hr className="my-10 border-t border-gray-200" />

      {/* Scroll navigation */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={scrollToStart}
            className="flex items-center text-blue-900 text-sm font-medium p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll to start"
            disabled={!showLeftFade}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
            Start
          </button>
          <button 
            onClick={handleScrollLeft}
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll left"
            disabled={!showLeftFade}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center text-blue-900 text-sm font-medium">
          <span className="mr-2 hidden sm:inline">Scroll to see more</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleScrollRight}
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll right"
              disabled={!showRightFade}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={scrollToEnd}
              className="flex items-center text-blue-900 text-sm font-medium p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll to end"
              disabled={!showRightFade}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
              </svg>
              End
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container with dynamic fade effects */}
      <div className="relative mb-12">
        {/* Left fade gradient - dynamic */}
        <div 
          className={`absolute left-0 top-0 bottom-0 w-4 md:w-24 z-10 pointer-events-none transition-opacity duration-300 ${
            showLeftFade 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-r from-white via-white/80 to-transparent md:from-white md:via-white/90 md:to-transparent"></div>
        </div>
        
        {/* Right fade gradient - dynamic */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-4 md:w-24 z-10 pointer-events-none transition-opacity duration-300 ${
            showRightFade 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-l from-white via-white/80 to-transparent md:from-white md:via-white/90 md:to-transparent"></div>
        </div>
        
        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 space-x-6 md:space-x-8 scrollbar-hide"
        >
          {/* Hide scrollbar but keep functionality */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden
                min-w-[75vw] sm:min-w-[300px] md:min-w-[350px]
                max-w-[300px] sm:max-w-[350px] md:max-w-[400px]
                flex-shrink-0 snap-start hover:shadow-xl transition-shadow duration-300
                flex flex-col
                h-[620px] sm:h-[650px] md:h-[760px]"
            >
              <div className="w-full h-48 sm:h-56 md:h-72 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-3 sm:p-4 md:p-6 flex-1 flex flex-col gap-3 min-h-0">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-900">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-2">
                  {card.description}
                </p>

                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-blue-900 mt-2">
                  {card.helpTitle}
                </h4>

                {/* Long text area: keeps card heights consistent, still shows full text via internal scroll */}
                <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                    {card.helpText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll indicators for mobile */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex space-x-2">
            {cards.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-blue-200"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW: separator between cards and "Why Brightway to Canada?" */}
      <hr className="my-10 border-t border-gray-200" />

      <div className="mt-12 text-4xl font-bold text-blue-900 mb-4 text-center">
        Why Brightway to Canada?
      </div>

      <div className="text-xl leading-relaxed text-gray-700 mb-6">
        Choosing the right education partner makes a meaningful difference in a student’s success. Brightway to Canada stands out because we combine long-term experience, personalized planning, and true educational insight, not just placement services.
      </div>

      {/* Two-column layout: left points, right photo (no text wrapping) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left: points (slightly shifted right) */}
        <div className="pl-3 sm:pl-6">
          <div className="mt-12 flex items-start gap-3">
            <svg
              className="mt-1 inline-block w-6 h-6 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3.5" y="3.5" width="17" height="17" />
              <path d="M7 12.5l3.2 3.2L17.5 8.5" />
            </svg>
            <div>
              <div className="text-3xl font-bold text-navy-800 mb-4">
                18 Years of Proven Experience
              </div>
              <div className="text-xl leading-relaxed text-gray-700 mb-6">
                With nearly two decades of experience supporting international students and families, we understand the real challenges students face  academically, emotionally, and socially. We know what families worry about, and we know how to prepare for it.
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-start gap-3">
            <svg
              className="mt-1 inline-block w-6 h-6 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3.5" y="3.5" width="17" height="17" />
              <path d="M7 12.5l3.2 3.2L17.5 8.5" />
            </svg>
            <div>
              <div className="text-3xl font-bold text-navy-800 mb-4">
                Personalized Planning from Day One
              </div>
              <div className="text-xl leading-relaxed text-gray-700 mb-6">
                From the moment students arrive in Canada, we create a customized education plan that grows with them from high school course selection to graduation and a smooth transition into university life. Every decision is made with long-term goals in mind.
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-start gap-3">
            <svg
              className="mt-1 inline-block w-6 h-6 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3.5" y="3.5" width="17" height="17" />
              <path d="M7 12.5l3.2 3.2L17.5 8.5" />
            </svg>
            <div>
              <div className="text-3xl font-bold text-navy-800 mb-4">
                Guidance by Real Education Professionals
              </div>
              <div className="text-xl leading-relaxed text-gray-700 mb-6">
                 Our team includes experienced educators, language instructors, and academic consultants who have worked directly within Canadian schools. This insider knowledge allows us to provide practical, realistic guidance that truly supports student success.
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-start gap-3">
            <svg
              className="mt-1 inline-block w-6 h-6 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3.5" y="3.5" width="17" height="17" />
              <path d="M7 12.5l3.2 3.2L17.5 8.5" />
            </svg>
            <div>
              <div className="text-3xl font-bold text-navy-800 mb-4">
                Real Life Support
              </div>
              <div className="text-xl leading-relaxed text-gray-700 mb-6">
                We believe academic success depends on feeling supported and secure. That’s why we focus on the full student experience: learning adaptation, well-being, and ongoing communication with families.
              </div>
            </div>
          </div>
        </div>

        {/* Right: photos */}
        <div className="w-full mt-12 space-y-6">
          <img
            src={home01Image}
            alt="Brightway to Canada"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
          {home02Image && (
            <img
              src={home02Image}
              alt="Brightway to Canada"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* NEW: separator before CTA */}
      <hr className="my-10 border-t border-gray-200" />

       {/* CTA Section */}
        <section className='text-center mb-6'>
          <h2 className='text-3xl font-bold text-navy-800 mb-6'>
            Ready to Start Your Journey?
          </h2>
          <p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
            Our team is here to support you at every stage of your educational journey in Canada. Book a free consultation or explore our services to learn more.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a 
              href="#/consultation" 
              className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold text-lg"
            >
              Book a Consultation
            </a>
            <a 
              href="#/services" 
              className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold text-lg"
            >
              Our Services
            </a>
          </div>
        </section>
    </div>
  )
}

export default Article