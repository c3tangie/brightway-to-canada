import React, {useState, useRef, useEffect} from 'react'
import BannerImage from '../../../assets/banner.png'  
import ArrowUp from '../../../assets/arrow-up.svg'
import ArrowDown from '../../../assets/arrow-down.svg'



const Banner = () => {
  const [expanded, setExpanded] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const imgRef = useRef(null);

  // Function to update height based on actual rendered size
  const updateHeight = () => {
    if (imgRef.current) {
      setImageHeight(imgRef.current.clientHeight);
    }
  };

  useEffect(() => {
    updateHeight(); // on initial load
    window.addEventListener('resize', updateHeight); // update on tab resize
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <>
      {/* Hidden but rendered image used for measuring visible height */}
      <img
        ref={imgRef}
        src={BannerImage}
        alt="Measure height"
        className="absolute opacity-0 pointer-events-none w-full object-cover"
        style={{ zIndex: -1 }}
      />

            {/* Slogan */}
            <div className="absolute top-15 left-0 w-full h-[300px] md:h-[385px] flex items-center justify-center pointer-events-none z-20">
                <h1 className="text-white text-2xl sm:text-6xl font-outfit font-bold text-center px-4">
                    Empowering International Students in Canada
                </h1>
            </div>

      <div
        className="relative w-full overflow-hidden bg-no-repeat bg-cover transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundPositionY: expanded ? '0%' : '50%',
          height: expanded ? `${imageHeight}px` : '400px',
        }}
      >
        
        <div
  className={`absolute inset-0 bg-black transition-opacity duration-700 ease-in-out pointer-events-none z-0 ${
    expanded ? 'opacity-50' : 'opacity-0'
  }`}
/>

        {/* Expand/Collapse button strip */}
        <div
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="absolute bottom-0 left-0 w-full h-16 cursor-pointer group"
            >
            {/* Fading Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>

            {/* Expand/Collapse Button */}
            <div className="relative flex items-center justify-center h-full">
                 {expanded ? (
                    // Up arrow
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="85.486 49.32 103.492 35.81"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    className="mt-6 w-10 h-10 text-white opacity-50 group-hover:opacity-100 transition-all duration-300"
                    >
                    <path d="M 87.72104,80.901855 137.2319,54.729813 186.74276,80.901855" />
                    </svg>
                ) : (

                    // Down arrow
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="85.486 49.32 103.492 35.81"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    className="mt-6 w-10 h-10 text-white opacity-50 group-hover:opacity-100 transition-all duration-300"
                    >
                    <path d="M 87.72104,53.548348 137.2319,79.72039 186.74276,53.548348" />
                    </svg>
                )}
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;