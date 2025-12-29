import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isPageLong, setIsPageLong] = useState(false);

  const handleScroll = () => {
    setIsAtTop(window.pageYOffset === 0);
  };

  const checkPageLength = () => {
    // Check if page content is at least 2x the viewport height
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
    // Initial check
    checkPageLength();
    handleScroll();

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkPageLength);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkPageLength);
    };
  }, []);

  // Only show button when not at top AND page is long enough
  const showButton = !isAtTop && isPageLong;

  return (
    <div className="scroll-to-top">
      {showButton && (
        <button 
          onClick={scrollToTop}
          className="back-to-top fixed bottom-8 right-8 bg-white/40 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 w-12 h-12 flex items-center justify-center text-gray-700 hover:text-gray-900 border border-gray-200/50"
          aria-label="Back to top"
        >
          <span className="text-xl font-semibold">⇑</span>
        </button>
      )}
    </div>
  );
};

export default BackToTop;