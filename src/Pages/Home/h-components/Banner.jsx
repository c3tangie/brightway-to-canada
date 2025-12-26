import React, { useState, useEffect, useRef } from 'react'
import BannerImage from '../../../assets/banner.png'
import BannerImage2 from '../../../assets/banner2.png'
import BannerImage3 from '../../../assets/banner3.png'
import VideoAd from '../../../assets/video.mp4'
import PlayButton from '../../../assets/play_button.png'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSlogan, setShowSlogan] = useState(true);
  const [hasStartedCycling, setHasStartedCycling] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isWatchingVideo, setIsWatchingVideo] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);


  // Banner content array
  const bannerContent = [
    {
      image: BannerImage,
      text: "Brightway to Canada helps international students find the right school and a suitable, caring homestay in Canada. We support families with trusted guidance every step of the way, so students can thrive — and parents can feel at ease."
    },
    {
      image: BannerImage2,
      text: "Our team is dedicated to making your transition to Canada smooth and successful.\nFrom choosing the best school to settling into your new home, we're here for you."
    },
    {
      image: BannerImage3,
      text: "Start your journey with confidence. Brightway to Canada is with you every step of the way."
    },
    {
      video: VideoAd,
    },
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
    if (!showSlogan && !isWatchingVideo) {
      // Start cycling through content every 7 seconds (only when not watching video)
      const cycleTimer = setInterval(() => {
        const nextSlide = (currentSlide + 1) % bannerContent.length;
        const nextContent = bannerContent[nextSlide];
        
        // If next slide is video, start transition early
        if (nextContent?.video) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentSlide(nextSlide);
            setIsTransitioning(false);
          }, 500); // 500ms fade out before slide change
        } else {
          setCurrentSlide(nextSlide);
        }
      }, 7000);

      return () => clearInterval(cycleTimer);
    }
  }, [showSlogan, bannerContent.length, isWatchingVideo, currentSlide]);

  // Reset to slogan on page refresh
  useEffect(() => {
    setShowSlogan(true);
    setCurrentSlide(0);
    setHasStartedCycling(false);
    setIsVideoPlaying(false);
    setIsWatchingVideo(false);
    setIsTransitioning(false);
  }, []);

  // Reset video playing state when slide changes
  useEffect(() => {
    setIsVideoPlaying(false);
    // If leaving video slide while watching, stop watching mode
    if (isWatchingVideo && !bannerContent[currentSlide]?.video) {
      setIsWatchingVideo(false);
    }
    // Pause any video that might be playing
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [currentSlide]);

  // Handle slogan visibility based on current slide
  useEffect(() => {
    if (!hasStartedCycling) return; // Don't change slogan during initial phase
    
    const currentContent = bannerContent[currentSlide];
    if (currentContent?.video) {
      // On video slide - completely hide slogan
      setShowSlogan(null); // Use null to indicate complete hiding
    } else if (currentContent?.image) {
      // On image slide - show slogan in cycling mode
      setShowSlogan(false); // false = show slogan without animation
    }
  }, [currentSlide, hasStartedCycling]);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      console.log('Setting volume to 0.1 in handleVideoPlay');
      videoRef.current.volume = 0.1; // Set volume to 10%
      console.log('Actual volume:', videoRef.current.volume);
      videoRef.current.play()
        .then(() => {
          setIsVideoPlaying(true);
          setIsWatchingVideo(true); // Enter watching mode - stops cycling
        })
        .catch((error) => {
          console.error('Error playing video:', error);
        });
    }
  };

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
            content.image ? (
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
            ) : content.video ? (
              <div key={index} className="absolute top-0 w-full h-full">
                <video
                  ref={currentSlide === index ? videoRef : null}
                  loop
                  playsInline
                  preload="metadata"
                  volume="0.1"
                  className={`absolute top-0 w-full h-full object-cover ${
                    !showSlogan && currentSlide === index ? 'opacity-100' : 'opacity-0'
                  } ${hasStartedCycling ? 'transition-opacity duration-1000 ease-in-out' : ''}`}
                  style={{
                    minWidth: '1920px',
                    objectPosition: 'center center',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                  onEnded={() => {
                    setIsVideoPlaying(false);
                    setIsWatchingVideo(false); // Exit watching mode when video ends
                  }}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => {
                    setIsVideoPlaying(false);
                    setIsWatchingVideo(false); // Exit watching mode when paused
                  }}
                  onLoadedMetadata={() => {
                    // Ensure video is paused when loaded and set volume
                    if (videoRef.current) {
                      videoRef.current.pause();
                      videoRef.current.volume = 0.1; // Set volume to 10%
                      console.log('Setting volume to 0.1 in onLoadedMetadata');
                      console.log('Actual volume after setting:', videoRef.current.volume);
                    }
                  }}
                >
                  <source src={content.video} type="video/mp4" />
                </video>
                
                {/* Video Play Button Overlay */}
                {!showSlogan && currentSlide === index && !isVideoPlaying && (
                  <div 
                    className="absolute flex items-center justify-center z-50 pointer-events-none"
                    style={{
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '540px', // Match banner height
                    }}
                  >
                    <img 
                      src={PlayButton} 
                      alt="Play" 
                      onClick={handleVideoPlay}
                      className="w-28 h-32 opacity-50 hover:opacity-80 scale-100 hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto"
                    />
                  </div>
                )}
              </div>
            ) : null
          ))}
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

       {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Headline (no DOM swap; just translate) - Hide completely on video slides */}
          {showSlogan !== null && (
            <h1
              className={`text-white text-3xl sm:text-4xl lg:text-6xl font-outfit font-bold
                          flex gap-4 justify-center items-center
                          transition-all duration-700 ease-out will-change-transform
                          ${showSlogan ? 'translate-y-16' : '-translate-y-3'}
                          ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            >
              <span className={showSlogan ? 'opacity-0 animate-slogan-part1-slow' : ''}>
                YOUR FUTURE,
              </span>
              <span className={showSlogan ? 'opacity-0 animate-slogan-part2-slow' : ''}>
                OUR BRIGHTWAY.
              </span>
            </h1>
          )}

          {/* Reserved space for paragraph to avoid jump */}
          <div className="relative h-32 mt-4">
            {/* absolutely stacked; key forces re-run of fade-in per slide */}
            {!showSlogan && bannerContent[currentSlide].text && (
              <p
                key={`text-${currentSlide}`}
                className={`absolute inset-0 flex items-center justify-center
                          text-white text-lg sm:text-xl lg:text-2xl font-outfit leading-relaxed
                          max-w-6xl mx-auto text-center whitespace-pre-line
                          transition-opacity duration-700 ease-out
                          ${isTransitioning ? 'opacity-0' : 'opacity-0 animate-fade-in'}`}
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
                {content.video ? (
                  // Triangular play button for video (pointing right with rounded corners)
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    className={`${currentSlide === index ? 'opacity-100' : 'opacity-100'}`}
                  >
                    <path 
                      d="M2.5 2 L9.5 6 L2.5 10 Z" 
                      fill="white" 
                      stroke="white" 
                      strokeWidth="4"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  // Regular dot for images
                  <div className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-white' : 'bg-white'
                  }`} />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Banner;