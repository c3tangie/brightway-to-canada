import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPageLong, setIsPageLong] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleScroll = () => {
    const quarterHeight = document.documentElement.scrollHeight / 4;
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollPos > quarterHeight);
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
    setMounted(true);
    checkPageLength();
    handleScroll();

    // Add both scroll and touchmove listeners for mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    window.addEventListener('resize', checkPageLength);
    
    // Force check on mount
    const checkTimer = setInterval(() => {
      handleScroll();
      checkPageLength();
    }, 500);
    
    setTimeout(() => clearInterval(checkTimer), 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('resize', checkPageLength);
      clearInterval(checkTimer);
    };
  }, []);

  const shouldShow = isVisible && isPageLong;

  return (
    <div className="scroll-to-top">
      <button 
        onClick={scrollToTop}
        className={`z-[99] back-to-top fixed bottom-8 right-0 bg-gradient-to-l from-white/60 to-white/40 backdrop-blur-md shadow-lg hover:from-white/80 hover:to-white/60 hover:shadow-xl transition-all duration-500 w-10 h-20 flex items-center justify-center text-gray-800 hover:text-gray-900 border border-gray-300/50 border-r-0 rounded-l-full hover:pl-2 group
          ${shouldShow 
            ? 'translate-x-0 opacity-100 visible' 
            : 'translate-x-full opacity-0 invisible'
          } 
          ${mounted ? 'transition-all duration-500 ease-out' : 'opacity-0'}`}
        aria-label="Back to top"
        style={{
          pointerEvents: shouldShow ? 'auto' : 'none',
          cursor: shouldShow ? 'pointer' : 'default'
        }}
      >
        <div className={`flex flex-col items-center transition-all duration-300
          ${shouldShow ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
          <span className="text-xl font-bold transform -rotate-90 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300">↑</span>
          <span className="text-xs font-medium transform -rotate-90 mt-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            Top
          </span>
        </div>
        
        {/* Decorative element that also transitions */}
        <div className={`absolute -left-1 top-1/2 transform -translate-y-1/2 w-0 h-0 bg-gradient-to-r from-gray-300/30 to-transparent rounded-r-full transition-all duration-500
          ${shouldShow ? 'opacity-100' : 'opacity-0'}`}></div>
      </button>
    </div>
  );
};

export default BackToTop;