import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchSite, highlightSearchTerm } from '../../utils/searchContent';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Get search query from URL params
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    
    setSearchQuery(query);
    
    if (query) {
      const searchResults = searchSite(query);
      setResults(searchResults);
    }
  }, [location.search]);

  const handleNewSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newQuery = formData.get('search');
    
    if (newQuery && newQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(newQuery.trim())}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6">
        
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Search Results</h1>
          
          {/* Search box */}
          <form onSubmit={handleNewSearch} className="flex gap-3">
            <input
              type="text"
              name="search"
              defaultValue={searchQuery}
              placeholder="Search our website..."
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
              autoFocus
            />
            <button
              type="submit"
              className="px-4 sm:px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center font-semibold"
              aria-label="Search"
            >
              {/* Icon for mobile */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-40 -40 591.78128 591.45334"
                className="w-6 h-6 sm:hidden"
                fill="none"
                stroke="currentColor"
              >
                <circle
                  cx="199.98663"
                  cy="200.31458"
                  r="172.81909"
                  strokeWidth={80}
                  stroke="currentColor"
                  strokeLinejoin="round"
                />
                <path
                  d="M 330.28188,330.28188 487.00386,487.00386"
                  strokeWidth={70}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Text for larger screens */}
              <span className="hidden sm:inline">Search</span>
            </button>
          </form>
        </div>

        {/* Results Summary */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-gray-600 text-lg">
              {results.length === 0 ? (
                <>No results found for <span className="font-semibold text-gray-800">"{searchQuery}"</span></>
              ) : (
                <>Found <span className="font-semibold text-blue-900">{results.length}</span> result{results.length !== 1 ? 's' : ''} for <span className="font-semibold text-gray-800">"{searchQuery}"</span></>
              )}
            </p>
          </div>
        )}

        {/* Results List */}
        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <a
                  href={`#${result.path}`}
                  className="block group"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-blue-900 group-hover:text-blue-700 mb-3 sm:mb-4">
                    {result.title}
                  </h2>
                  {/* <p className="text-sm text-gray-500 mb-3">
                    {result.path === '/' ? 'Home' : result.path}
                  </p> */}
                  <div
                    className="text-gray-700 leading-relaxed text-base sm:text-lg max-h-32 sm:max-h-none overflow-hidden"
                    dangerouslySetInnerHTML={{
                      __html: highlightSearchTerm(result.excerpt, searchQuery)
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Results Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any pages matching "{searchQuery}". Try different keywords or check your spelling.
            </p>
            <div className="text-left max-w-md mx-auto">
              <p className="font-semibold text-gray-700 mb-2">Suggestions:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Try more general keywords</li>
                <li>Check for typos</li>
                <li>Try different word combinations</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">Enter a search term above to find content on our website.</p>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Popular Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#/" className="text-blue-700 hover:text-blue-900 hover:underline">
              Home
            </a>
            <a href="#/about" className="text-blue-700 hover:text-blue-900 hover:underline">
              About Us
            </a>
            <a href="#/services" className="text-blue-700 hover:text-blue-900 hover:underline">
              Our Services
            </a>
            <a href="#/about_teams" className="text-blue-700 hover:text-blue-900 hover:underline">
              Our Team
            </a>
            <a href="#/consultation" className="text-blue-700 hover:text-blue-900 hover:underline">
              Book a Consultation
            </a>
            <a href="#/contact" className="text-blue-700 hover:text-blue-900 hover:underline">
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default SearchResults;
