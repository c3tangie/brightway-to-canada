import React, { useState, useEffect } from 'react'
import BannerImage from '../../../assets/banner.png'
import BannerImage2 from '../../../assets/banner2.png'
import BannerImage3 from '../../../assets/banner3.png'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSlogan, setShowSlogan] = useState(true);
  const [hasStartedCycling, setHasStartedCycling] = useState(false);


  // Banner content array
  const bannerContent = [
    {
      image: BannerImage,
      text: "Brightway to Canada helps international students find the right school and a suitable, caring homestay in Canada. We support families with trusted guidance, so students can thrive and parents can feel at ease."
    },
    {
      image: BannerImage2,
      text: "Our team is dedicated to making your transition to Canada smooth and successful.\nFrom choosing the best school to settling into your new home, we're here for you."
    },
    {
      image: BannerImage3,
      text: "Start your journey with confidence. Brightway to Canada is with you every step of the way."
    }
  ];

  useEffect(() => {
    // Show slogan first, then start cycling after 4 seconds
    const sloganTimer = setTimeout(() => {
      setShowSlogan(false);
      // Small delay to ensure first image appears instantly, then enable transitions
      setTimeout(() => {
        setHasStartedCycling(true);
      }, 100);
    }, 4000);

    return () => clearTimeout(sloganTimer);
  }, []);

  useEffect(() => {
    if (!showSlogan) {
      // Start cycling through content every 7 seconds
      const cycleTimer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerContent.length);
      }, 7000);

      return () => clearInterval(cycleTimer);
    }
  }, [showSlogan, bannerContent.length]);

  // Reset to slogan on page refresh
  useEffect(() => {
    setShowSlogan(true);
    setCurrentSlide(0);
    setHasStartedCycling(false);
  }, []);



  return (
    <>
      <div 
        className="relative w-full overflow-hidden transition-all duration-1000 ease-in-out"
        style={{
          height: '540px', // Constant height at all screen sizes
        }}
      >
        {/* Banner Images with Crossfade */}
        <div className="absolute top-0 w-full h-full">
          {/* Slogan Image */}
          <img
            src={BannerImage}
            alt="Banner"
            className={`absolute top-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              showSlogan ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              minWidth: '1920px',
              objectPosition: 'center center',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
          
          {/* Cycling Content */}
          {bannerContent.map((content, index) => (
            <img
              key={index}
              src={content.image}
              alt={`Banner ${index + 1}`}
              className={`absolute top-0 w-full h-full object-cover ${
                !showSlogan && currentSlide === index ? 'opacity-100' : 'opacity-0'
              } ${hasStartedCycling ? 'transition-opacity duration-1000 ease-in-out' : ''}`}
              style={{
                minWidth: '1920px',
                objectPosition: 'center center',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            />
          ))}
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

       {/* Content Container */}
      <div className="absolute inset-0 flex flex-col sm:items-center justify-start sm:justify-center px-4 z-10 pt-16 sm:pt-0">
        <div className="text-center max-w-6xl mx-auto mt-20 sm:mt-0">
          {/* Headline */}
          <h1
            className={`text-white text-4xl sm:text-4xl lg:text-6xl font-outfit font-bold
                        flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center
                        transition-all duration-700 ease-out will-change-transform
                        ${showSlogan ? 'translate-y-16 sm:translate-y-20' : '-translate-y-8 sm:translate-y-12'}`}
          >
            <span className={showSlogan ? 'opacity-0 animate-slogan-part1-slow' : ''}>
              YOUR FUTURE,
            </span>
            <span className={showSlogan ? 'opacity-0 animate-slogan-part2-slow' : ''}>
              OUR BRIGHTWAY.
            </span>
          </h1>

          {/* Reserved space for paragraph to avoid jump */}
          <div className="relative h-32 mt-8 sm:mt-20">
            {/* absolutely stacked; key forces re-run of fade-in per slide */}
            {!showSlogan && bannerContent[currentSlide].text && (
              <p
                key={`text-${currentSlide}`}
                className={`absolute inset-0 flex items-center justify-center
                          text-white text-lg sm:text-xl lg:text-2xl font-outfit leading-relaxed
                          max-w-6xl mx-auto text-center whitespace-pre-line
                          transition-opacity duration-700 ease-out opacity-0 animate-fade-in`}
              >
                {bannerContent[currentSlide].text}
              </p>
            )}
          </div>
        </div>
      </div>

        {/* Navigation Dots */}
        {!showSlogan && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {bannerContent.map((content, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  currentSlide === index 
                    ? 'opacity-100' 
                    : 'opacity-50 hover:opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`w-3 h-3 rounded-full bg-white`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Banner;