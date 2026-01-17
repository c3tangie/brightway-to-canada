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
  const [cardsPerView, setCardsPerView] = useState(3);
  const [pageIndex, setPageIndex] = useState(0);
  
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

  const totalCards = cards.length;
  const maxPageIndex = Math.max(0, totalCards - cardsPerView);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      const next = w >= 1024 ? 3 : w >= 640 ? 2 : 1; // lg / sm breakpoints
      setCardsPerView(next);
    };

    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  useEffect(() => {
    // Clamp when breakpoint changes
    setPageIndex((prev) => Math.min(prev, Math.max(0, totalCards - cardsPerView)));
  }, [cardsPerView, totalCards]);

  const showLeftFade = pageIndex > 0;
  const showRightFade = pageIndex < maxPageIndex;

  const handleScrollLeft = () => setPageIndex((p) => Math.max(0, p - 1));
  const handleScrollRight = () => setPageIndex((p) => Math.min(maxPageIndex, p + 1));

  return (
    <div className='mt-8 max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6 font-RobotoFlex text-xl leading-normal text-gray-600'>
      <div className="mt-12 text-4xl font-bold text-blue-900 mb-4 text-center">
        Welcome to Brightway to Canada
      </div>
      <p className="mb-12 text-center text-xl leading-relaxed">
        Brightway to Canada is an education consulting company that helps international students navigate the Canadian K-12 education system. We specialize in school selection, study planning, academic support, and insightful stepping stones to post-secondary institutions. With deep experience working alongside Canadian schools, educators, and homestay families, we guide students toward environments where they can learn, adapt, and grow with confidence.
      </p>

      {/* NEW: separator between welcome intro and cards */}
      <hr className="my-10 border-t border-gray-200" />

  {/* Cards carousel (deterministic slider: always exactly 3/2/1 cards, no peeking) */}
  {/* Reduced side padding on mobile (px-10) so the card is wider; full padding on sm+ */}
  <div className="relative mb-12 overflow-x-hidden overflow-y-visible px-10 sm:px-16">
        {/* Side controls (match About Us gallery style) — slightly smaller on mobile */}
        <button
          type="button"
          onClick={handleScrollLeft}
          aria-label="Scroll left"
          disabled={!showLeftFade}
          className={`absolute left-0.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-blue-900 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-800 transition active:scale-95 ${
            !showLeftFade ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleScrollRight}
          aria-label="Scroll right"
          disabled={!showRightFade}
          className={`absolute right-0.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-blue-900 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-800 transition active:scale-95 ${
            !showRightFade ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        {/*
          IMPORTANT: Don't add horizontal padding to the sliding viewport.
          Padding changes the math and causes the next card to peek.
          We reserve space for the buttons using absolute overlay gutters instead.
        */}
  <div className="relative w-full overflow-x-hidden overflow-y-visible py-5">
          {/* Gutters — narrower on mobile to match tighter carousel padding */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-white/0" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-white/0" />

          <div
            className="transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: `translateX(-${pageIndex * (100 / cardsPerView)}%)` }}
          >
            <div className="flex">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[620px] sm:h-[650px] md:h-[760px]">
              <div className="w-full h-48 sm:h-56 md:h-72 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
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
                </div>
              ))}
            </div>
          </div>
        </div>
        
    {/* Scroll indicators for mobile */}
    <div className="flex justify-center mt-4 md:hidden">
          <div className="flex space-x-2">
      {Array.from({ length: Math.max(1, totalCards - cardsPerView + 1) }).map((_, index) => (
              <div 
                key={index}
        className={`w-2 h-2 rounded-full ${index === pageIndex ? 'bg-blue-600' : 'bg-blue-200'}`}
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
          <div className="mt-11 flex items-start gap-3">
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
              <div className="text-xl leading-relaxed text-gray-700 mb-4">
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
              <div className="text-xl leading-relaxed text-gray-700 mb-4">
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
              <div className="text-xl leading-relaxed text-gray-700 mb-4">
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
                Students learn at their best when they feel secure and understood. For this reason, we support the full educational experience: learning adaptation, mental well-being, and consistent communication with families as students adjust to their new environment.
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