import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchSite, highlightSearchTerm } from '../../utils/searchContent';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const RESULTS_PER_PAGE = 8;

// Category display configuration
const CATEGORY_CONFIG = {
  page: { label: 'General Pages', order: 1 },
  service: { label: 'Services', order: 2 },
  team: { label: 'Team Members', order: 3 },
};

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Get search query from URL params
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    
    setSearchQuery(query);
    setCurrentPage(1); // Reset to page 1 on new search
    
    if (query) {
      const searchResults = searchSite(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [location.search]);

  // Group results by type/category
  const groupedResults = useMemo(() => {
    const groups = {};
    
    results.forEach(result => {
      const type = result.type || 'page';
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(result);
    });

    // Sort groups by configured order
    return Object.entries(groups)
      .sort(([a], [b]) => {
        const orderA = CATEGORY_CONFIG[a]?.order || 99;
        const orderB = CATEGORY_CONFIG[b]?.order || 99;
        return orderA - orderB;
      });
  }, [results]);

  // Flatten grouped results for pagination
  const flatResults = useMemo(() => {
    const flat = [];
    groupedResults.forEach(([type, items]) => {
      items.forEach((item, idx) => {
        flat.push({ ...item, _type: type, _isFirstInGroup: idx === 0 });
      });
    });
    return flat;
  }, [groupedResults]);

  // Pagination calculations
  const totalPages = Math.ceil(flatResults.length / RESULTS_PER_PAGE);
  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const endIndex = startIndex + RESULTS_PER_PAGE;
  const paginatedResults = flatResults.slice(startIndex, endIndex);

  // Group paginated results for display with headers
  const displayGroups = useMemo(() => {
    const groups = {};
    let currentType = null;
    
    paginatedResults.forEach((result, idx) => {
      const type = result._type;
      if (!groups[type]) {
        groups[type] = { items: [], showHeader: false };
      }
      // Show header if this is the first item of this type on this page
      if (currentType !== type) {
        groups[type].showHeader = true;
        currentType = type;
      }
      groups[type].items.push(result);
    });

    return Object.entries(groups).sort(([a], [b]) => {
      const orderA = CATEGORY_CONFIG[a]?.order || 99;
      const orderB = CATEGORY_CONFIG[b]?.order || 99;
      return orderA - orderB;
    });
  }, [paginatedResults]);

  const handleNewSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newQuery = formData.get('search');
    
    if (newQuery && newQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(newQuery.trim())}`);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }
    
    return pages;
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
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-gray-600 text-lg">
              {results.length === 0 ? (
                <>No results found for <span className="font-semibold text-gray-800">"{searchQuery}"</span></>
              ) : (
                <>Found <span className="font-semibold text-blue-900">{results.length}</span> result{results.length !== 1 ? 's' : ''} for <span className="font-semibold text-gray-800">"{searchQuery}"</span></>
              )}
            </p>
            {totalPages > 1 && (
              <p className="text-gray-500 text-sm">
                Page {currentPage} of {totalPages}
              </p>
            )}
          </div>
        )}

        {/* Results List - Grouped by Category */}
        {results.length > 0 ? (
          <div className="space-y-8">
            {displayGroups.map(([type, group]) => (
              <div key={type} className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Category Header - inside the container */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {CATEGORY_CONFIG[type]?.label || type}
                  </h2>
                  <p className="text-blue-200 text-sm mt-1">
                    {group.items.length} result{group.items.length !== 1 ? 's' : ''} in this category
                  </p>
                </div>
                
                {/* Results nested inside category container */}
                <div className="p-4 sm:p-6 space-y-4 bg-gray-50">
                  {group.items.map((result, index) => (
                    <div
                      key={`${result.path}-${index}`}
                      className="bg-white rounded-lg border border-gray-200 p-4 sm:p-5 hover:shadow-md hover:border-blue-300 transition-all duration-200"
                    >
                      <a
                        href={`#${result.path}`}
                        className="block group"
                      >
                        {/* Title - larger text */}
                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 group-hover:text-blue-700 mb-1">
                          {result.title}
                        </h3>
                        
                        {/* Subtitle (for team members: role, for services: category) */}
                        {(result.subtitle || result.category) && (
                          <p className="text-sm sm:text-base text-blue-600 font-medium mb-3">
                            {result.subtitle || result.category}
                          </p>
                        )}
                        
                        {/* Excerpt - larger text with increased line height */}
                        <div
                          className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg line-clamp-3"
                          dangerouslySetInnerHTML={{
                            __html: highlightSearchTerm(result.excerpt, searchQuery)
                          }}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8 pt-6 border-t border-gray-200">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-blue-900 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  ← Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {getPageNumbers().map((page, idx) => (
                    page === '...' ? (
                      <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">...</span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-md font-medium transition-colors ${
                          currentPage === page
                            ? 'bg-blue-900 text-white'
                            : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-blue-900 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  Next →
                </button>
              </div>
            )}
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
