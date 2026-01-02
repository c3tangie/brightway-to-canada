import React, { useRef, useState, useEffect } from 'react'
import videoFile from '@assets/video.mp4'
import DocsImageTwo from '@services-assets/services_img_docs2.webp';
import ConnectImageSix from '@services-assets/services_img_connect6.webp';
import ConnectImageFive from '@services-assets/services_img_connect5.webp';
import { Link } from 'react-router-dom';

const Article = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  
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
      image: DocsImageTwo,
      title: "Wanting Better Grades?",
      description: "Academic pressure can increase when students are studying in a second language or unfamiliar system.",
      helpTitle: "How we help:",
      helpText: "Our experienced language and STEM instructors offer personalized tutoring focused on building understanding, confidence, and long-term academic skills — not just short-term results."
    },
    {
      id: 5,
      image: DocsImageTwo,
      title: "Planning for University and Beyond?",
      description: "University preparation starts earlier than many families expect.",
      helpTitle: "How we help:",
      helpText: "We assist students with long-term academic planning, course selection, and realistic pathway development. Our advice balances university reputation, program suitability, and the student's strengths — helping families make informed, strategic decisions."
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
      container.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 350, behavior: 'smooth' });
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
          <div className="flex items-center gap-1">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
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
          className={`absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none transition-opacity duration-300 ${
            showLeftFade 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-r from-white via-white/80 to-transparent md:from-white md:via-white/90 md:to-transparent"></div>
        </div>
        
        {/* Right fade gradient - dynamic */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none transition-opacity duration-300 ${
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
          className="flex overflow-x-auto pb-6 space-x-6 md:space-x-8 snap-x snap-mandatory scrollbar-hide"
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
              className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[85vw] sm:min-w-[350px] max-w-[400px] flex-shrink-0 snap-start hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-64 md:h-72 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl text-center font-semibold text-blue-900 mb-3 md:mb-4">{card.title}</h3>
                <p className="text-gray-600 text-center text-base md:text-lg mb-3 md:mb-4">{card.description}</p>
                <h4 className="text-base md:text-lg text-center font-semibold text-blue-900 mb-3 md:mb-4">{card.helpTitle}</h4>
                <p className="text-gray-600 text-center text-base md:text-lg mb-6 md:mb-8">{card.helpText}</p>
                <div className="text-center">
                  <Link 
                    to="/consultation" 
                    className="inline-block bg-navy-600 hover:bg-navy-700 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                  >
                    Book a Consultation
                  </Link>
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

      {/* Rest of the content remains the same */}
      <p className="mb-6">
        Brightway to Canada is an education-focused consulting and homestay support service built around one simple belief: students succeed best when they feel supported, understood, and at home. We work closely with international students and their families to help them navigate the Canadian education system with clarity, confidence, and peace of mind.
      </p>
      <p className="mb-6">
        Choosing a school in a new country can be overwhelming. Academic programs, school culture, language environment, location, safety, and long-term pathways all matter — and every student's situation is different. Brightway to Canada takes a personalized approach, carefully matching students with schools that align with their academic goals, personal strengths, and future aspirations. We don't rely on one-size-fits-all recommendations; instead, we focus on what will genuinely help each student thrive.
      </p>
      {/* Video positioned in the middle with text wrapping */}
      <div className="float-right ml-6 mb-6 max-w-xl">
        <video 
          controls 
          className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> 
      <p className="mb-6">
        Equally important is where students live. A supportive homestay environment can shape a student's entire experience in Canada — academically, emotionally, and socially. We work with carefully selected host families who provide more than just a place to stay. Our homestays offer a welcoming household, a safe and stable environment, and daily opportunities for cultural exchange and language development. Students gain independence while still having the guidance and care they need during an important stage of their lives.
      </p>      
      
      <p className="mb-6">
        Our support extends well beyond initial placement. Brightway to Canada assists families throughout the transition process, helping them understand school expectations, daily life in Canada, and common challenges international students may face. We aim to reduce uncertainty for parents and empower students to adapt confidently to their new surroundings.
      </p>
      <p className="mb-6">
        What sets Brightway to Canada apart is our commitment to long-term success. We care not only about getting students to Canada, but about how they grow once they arrive. Whether it's adjusting to classroom expectations, building routines, or settling comfortably into a new home and community, we are there to provide guidance and reassurance when it matters most.
      </p>
      <p>
        With a deep understanding of both international families' concerns and the Canadian education environment, Brightway to Canada serves as a trusted bridge between home and a new beginning. We believe that with the right preparation, the right school, and the right home, students can focus on learning, personal growth, and building a strong foundation for their future.
      </p>
    </div>
  )
}

export default Article