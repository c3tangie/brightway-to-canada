import React, { useEffect } from 'react'
import BannerImage from '../../../assets/banner.png'

const ServiceBanner = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      {/* Combined Hero Banner Section */}
      <div className="relative w-full overflow-hidden" style={{ height: '500px' }}>
        {/* Banner Image */}
        <img
          src={BannerImage}
          alt="Services Banner"
          className="absolute top-0 w-full h-full object-cover"
          style={{
            minWidth: '1920px',
            objectPosition: 'center center',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />

        {/* Single gradient overlay - properly fading to white */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/25 z-5"></div>

        {/* Hero Content Inside Banner */}
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 font-RobotoFlex">
              Our Services
            </h1>

            {/* Hero Description */}
            <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-6xl mx-auto mb-8 font-RobotoFlex">
              Brightway to Canada provides comprehensive education consulting and homestay support for international students and their families. From early planning to settling into daily life in Canada, our services are designed to remove uncertainty, reduce stress, and support long-term success.
                <br></br>
                <br></br>
                We take a personalized, student-first approach, recognizing that every family’s needs, goals, and circumstances are unique.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceBanner