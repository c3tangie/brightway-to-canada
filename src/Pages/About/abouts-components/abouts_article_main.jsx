import React, { useEffect, useMemo, useRef, useState } from 'react';
import BannerImage from '../../../assets/about_us_assets/abouts_banner2.jpg';

const Abouts_Article_Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Optional: explicit ordering (filenames only). Any not listed fall back to alphabetical.
  // Example:
  // const GALLERY_ORDER = ['01.jpg', '02.jpg', 'team.png'];
  const GALLERY_ORDER = [];

  // Force recompute on Vite HMR updates (adding images can preserve old memo via React Refresh)
  const [assetsVersion, setAssetsVersion] = useState(0);
  useEffect(() => {
    if (!import.meta.hot) return;
    const bump = () => setAssetsVersion((v) => v + 1);
    import.meta.hot.on?.('vite:afterUpdate', bump);
    import.meta.hot.on?.('vite:beforeFullReload', bump);
    return () => {
      import.meta.hot.off?.('vite:afterUpdate', bump);
      import.meta.hot.off?.('vite:beforeFullReload', bump);
    };
  }, []);

  // Vite: pull all images from src/assets/about_us_assets/main_assets (sorted, HMR-safe)
  const galleryImages = useMemo(() => {
    const modules = import.meta.glob(
      '../../../assets/about_us_assets/main_assets/*.{png,jpg,jpeg,webp,gif,svg}',
      { eager: true, import: 'default' }
    );

    const basename = (p) => String(p).split(/[\\/]/).pop() || String(p);
    const orderMap = new Map(GALLERY_ORDER.map((name, idx) => [name, idx]));

    return Object.entries(modules)
      .sort(([a], [b]) => {
        const ai = orderMap.has(basename(a)) ? orderMap.get(basename(a)) : Number.POSITIVE_INFINITY;
        const bi = orderMap.has(basename(b)) ? orderMap.get(basename(b)) : Number.POSITIVE_INFINITY;
        if (ai !== bi) return ai - bi;          // manual order first
        return a.localeCompare(b);              // then alphabetical by path
      })
      .map(([, src]) => src)
      .filter(Boolean);
  }, [assetsVersion, GALLERY_ORDER.join('|')]);

  const len = galleryImages.length;

  // Infinite carousel indices:
  // slides = [lastClone, ...realSlides, firstClone]
  // slideIndex starts at 1 (first real slide)
  const slides = useMemo(() => {
    if (!len) return [];
    return [galleryImages[len - 1], ...galleryImages, galleryImages[0]];
  }, [galleryImages, len]);

  const [slideIndex, setSlideIndex] = useState(1);
  const [disableTransition, setDisableTransition] = useState(false);

  // refs to avoid animation/state races
  const lenRef = useRef(len);
  useEffect(() => {
    lenRef.current = len;
  }, [len]);

  const slideIndexRef = useRef(slideIndex);
  useEffect(() => {
    slideIndexRef.current = slideIndex;
  }, [slideIndex]);

  const disableTransitionRef = useRef(disableTransition);
  const setDisable = (v) => {
    disableTransitionRef.current = v;
    setDisableTransition(v);
  };
  useEffect(() => {
    disableTransitionRef.current = disableTransition;
  }, [disableTransition]);

  const isAnimatingRef = useRef(false);

  const clampIndex = (n) => {
    const min = 0;
    const max = lenRef.current + 1;
    return Math.max(min, Math.min(max, n));
  };

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const go = (delta) => {
    if (lenRef.current <= 1) return;

    // IMPORTANT: no queuing; ignore spam while animating/snapping
    if (isAnimatingRef.current || disableTransitionRef.current) return;

    if (prefersReducedMotion()) {
      const next = slideIndexRef.current + delta;
      const wrapped = next <= 0 ? lenRef.current : next >= lenRef.current + 1 ? 1 : next;
      slideIndexRef.current = wrapped;
      setSlideIndex(wrapped);
      return;
    }

    const nextIdx = clampIndex(slideIndexRef.current + delta);
    if (nextIdx === slideIndexRef.current) return;

    isAnimatingRef.current = true;
    slideIndexRef.current = nextIdx;
    setSlideIndex(nextIdx);
  };

  const next = () => go(1);
  const prev = () => go(-1);

  // Keep index valid when images load/change (also reset flags)
  useEffect(() => {
    if (!len) return;
    isAnimatingRef.current = false;
    setDisable(false);
    slideIndexRef.current = 1;
    setSlideIndex(1);
  }, [len]);

  // Add back: dot indicator should reflect the "real" slide (not the clones)
  const activeIndex = len ? (slideIndex - 1 + len) % len : 0;

  useEffect(() => {
    if (len <= 1) return;
    const id = window.setInterval(() => {
      // don't let auto-advance stack up during transitions
      if (isAnimatingRef.current || disableTransitionRef.current) return;
      go(1);
    }, 4500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [len]);

  // Snap clone -> real slide WITHOUT any animated "jump across all slides"
  const snapTo = (snappedIndex) => {
    // 1) ensure transition is OFF in the DOM first
    setDisable(true);

    window.requestAnimationFrame(() => {
      // 2) now do the jump with transition disabled (no jitter)
      slideIndexRef.current = snappedIndex;
      setSlideIndex(snappedIndex);

      // 3) re-enable transitions on the next frame
      window.requestAnimationFrame(() => {
        setDisable(false);
      });
    });
  };

  return (
    <div className='font-RobotoFlex'>
      
      {/* Combined Hero Banner Section */}
      <div className="relative w-full overflow-hidden " style={{ height: '500px' }}>
        {/* Banner Image */}
        <img
          src={BannerImage}
          alt="About Us Banner"
          className="absolute top-0 w-full h-full object-cover "
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
            <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              About Brightway to Canada
            </h1>

            {/* Hero Description */}
            <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 drop-shadow-xl">
              We're a passionate group of innovators, creators, and problem-solvers 
              dedicated to building amazing solutions for international students' journey to Canada.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className='mt-5 max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6' id="team-section">
        
        {/* Main Article Section */}
        <section className='pt-12'>
          <h2 className='text-4xl font-bold text-navy-800 mb-6 text-center'>
            Our Story and Philosophy
          </h2>
            <p className='text-xl leading-relaxed space-y-6 text-gray-700 max-w-8xl mx-auto mb-6'>
              Brightway to Canada was founded with a simple yet powerful vision: 
              to make the Canadian dream accessible to everyone. What started as 
              a small consultancy has grown into a comprehensive immigration 
              services provider, helping thousands of individuals and families 
              successfully navigate their path to Canada.  Our team combines decades of immigration law expertise with cutting-edge technology to provide personalized, efficient, 
              and successful immigration solutions. We believe in building 
              lasting relationships with our clients, guiding them through 
              every step of their journey.
            </p>
            
            <p className='text-xl leading-relaxed space-y-6 text-gray-700 max-w-8xl mx-auto mb-16'>
              Studying in Canada is not a single decision. It is a long‑term journey that unfolds academically, socially, and emotionally. At Brightway to Canada, we take a student‑first and family‑informed approach, recognizing that each student arrives with unique strengths, challenges, and aspirations. Rather than offering one‑broad, vague, and size‑fits‑all solutions, we emphasize careful planning, attentive guidance, and ongoing support on a case by case basis. Our role is not only to help students enter the Canadian education system, but to ensure they are prepared to navigate it with resilience and confidence.
            </p>

            <h2 className='mt-12 text-4xl font-bold text-navy-800 mb-6'>
              Experience and Perspective
            </h2>

            {/* Wrap block: gallery floats right, paragraph text wraps left */}
            <div className="max-w-8xl mx-auto mb-16">
              {/* was: lg:w-[420px] lg:ml-8 */}
              <div className="w-full lg:w-[640px] lg:float-right lg:ml-10 mb-6">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-[4/3]">
                  {/* inside the gallery track */}
                  {len > 0 ? (
                    <div
                      className={`absolute inset-0 flex ${disableTransition ? '' : 'transition-transform duration-300 ease-out'} motion-reduce:transition-none`}
                      style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                      onTransitionEnd={() => {
                        if (disableTransitionRef.current) return;

                        isAnimatingRef.current = false;

                        const idx = slideIndexRef.current;
                        const L = lenRef.current;

                        // If we're on a clone, snap to the corresponding real slide cleanly
                        if (idx === 0) snapTo(L);
                        else if (idx === L + 1) snapTo(1);
                      }}
                    >
                      {slides.map((src, i) => (
                        <div key={`${i}-${src}`} className="relative w-full h-full flex-[0_0_100%]">
                          <img
                            src={src}
                            alt={`Gallery image ${((i - 1 + len) % len) + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                      No images found in assets/about_us_assets/main_assets
                    </div>
                  )}

                  {/* Controls */}
                  {len > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prev}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-blue-800 w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition active:scale-95"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-7 h-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={next}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-blue-800 w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition active:scale-95"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-7 h-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {galleryImages.map((_, i) => (
                          <span
                            key={i}
                            className={`h-2 w-2 rounded-full ${i === activeIndex ? 'bg-white' : 'bg-white/50'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <p className='text-xl leading-relaxed space-y-6 text-gray-700'>
                Our understanding of international education comes from lived experience. We understand the uncertainty of arrival, the adjustment to academic expectations, and the process of building confidence and belonging. Beyond academics, everyday experiences such as forming friendships, participating in school activities, and spending time outdoors play an important role in a student’s success. These moments help students feel connected and supported, allowing them to engage more fully in both school and community life. <br></br><br></br>

                For many students, this balance between responsibility and independence is what makes the experience rewarding. They learn to manage their studies while developing communication skills, cultural awareness, and personal resilience through real life experiences. Because our team, along with many of the students we support, has been through this journey, we are able to guide students with practical insight and realistic expectations while providing families with reassurance that their children are being supported with care and understanding.
              </p>

              <h2 className='mt-12 text-4xl font-bold text-navy-800 mb-6'>
                Commitment to Students and Families
              </h2>

              <p className='text-xl leading-relaxed space-y-6 text-gray-700'>
                We view education as a long term journey rather than a single transition point. As students progress through their studies, we remain engaged and attentive to their development. Families are kept informed, and students are supported as they build independence and confidence over time. Our goal is to reduce uncertainty for parents while helping students feel supported, prepared, and capable of navigating their academic lives in Canada.
              </p>

              {/* clears the float so following sections layout normally */}
              <div className="clear-both" />
            </div>
        </section>

        {/* CTA Section */}
        <section className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-navy-800 mb-6'>
            Ready to Start Your Journey?
          </h2>
          <p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
            Our team is here to guide you through every step of your 
            immigration process. Contact us today for a free consultation.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a 
              href="#/contact" 
              className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold"
            >
              Contact Us
            </a>
            <a 
              href="#/services" 
              className="px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold"
            >
              Our Services
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Abouts_Article_Main;