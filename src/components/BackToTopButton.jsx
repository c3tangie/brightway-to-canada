import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPageLong, setIsPageLong] = useState(false);

  const handleScroll = () => {
    const quarterHeight = document.documentElement.scrollHeight / 4;
    setIsVisible(window.pageYOffset > quarterHeight);
  };

  const checkPageLength = () => {
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    setIsPageLong(pageHeight > viewportHeight * 2);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    checkPageLength();
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkPageLength);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkPageLength);
    };
  }, []);

  const showButton = isVisible && isPageLong;

  return (
    <div className="scroll-to-top">
      {showButton && (
        <button 
          onClick={scrollToTop}
          className="back-to-top fixed bottom-8 right-0 bg-gradient-to-l from-white/60 to-white/40 backdrop-blur-md shadow-lg hover:from-white/80 hover:to-white/60 hover:shadow-xl transition-all duration-300 w-10 h-20 flex items-center justify-center text-gray-800 hover:text-gray-900 border border-gray-300/50 border-r-0 rounded-l-full hover:pl-2 group"
          aria-label="Back to top"
        >
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold transform -rotate-90 group-hover:-translate-y-1 transition-transform duration-300">↑</span>
            <span className="text-xs font-medium transform -rotate-90 mt-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              Top
            </span>
          </div>
          {/* Optional decorative shadow/glow effect */}
          <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-gradient-to-r from-gray-300/20 to-transparent rounded-r-full"></div>
        </button>
      )}
    </div>
  );
};

export default BackToTop;