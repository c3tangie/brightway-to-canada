import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    setIsAtTop(window.pageYOffset === 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {!isAtTop && (
        <button 
          onClick={scrollToTop}
          className="back-to-top fixed bottom-8 right-8"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTop;