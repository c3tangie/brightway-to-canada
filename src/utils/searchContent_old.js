// searchContent.js - Site-wide search utility

/**
 * All searchable content from the site.
 * Each entry should have: title, path, content (text to search), and type.
 */
export const siteContent = [
  // Home page
  {
    title: 'Home - Welcome to Brightway to Canada',
    path: '/',
    type: 'page',
    content: `
      Welcome to Brightway to Canada
      Brightway to Canada is an education consulting company dedicated to helping international students and their families confidently navigate the Canadian K-12 education system.
      We specialize in school selection, study planning, academic support, student well-being, and smooth transitions to post-secondary institutions.
      Troubles Picking Schools? Choosing the right school in Canada can feel overwhelming.
      Eyeing A Study Permit? Study permit applications can be complex and stressful for families.
      Trouble Adapting to Canadian Studies? Many students struggle during the transition to a new education system.
      Wanting Better Grades? Academic pressure can increase when studying in a second language.
      Planning for University and Beyond? University preparation starts earlier than many families expect.
      Why Brightway to Canada?
      18 Years of Proven Experience
      Personalized Planning from Day One
      Guidance by Real Education Professionals
      Real Life Support
    `
  },

  // About page
  {
    title: 'About Us',
    path: '/about',
    type: 'page',
    content: `
      About Brightway to Canada
      Our Story and Philosophy
      Brightway to Canada was founded with a simple yet powerful vision: to make the Canadian dream accessible to everyone.
      Experience and Perspective
      Our understanding of international education comes from lived experience.
      Commitment to Students and Families
      We view education as a long term journey rather than a single transition point.
    `
  },

  // Team page
  {
    title: 'Our Team',
    path: '/about_teams',
    type: 'page',
    content: `
      Our Team
      Meet the dedicated professionals who make Brightway to Canada possible.
      Our team includes experienced educators, language instructors, and academic consultants.
    `
  },

  // Services page
  {
    title: 'Our Services',
    path: '/services',
    type: 'page',
    content: `
      Our Services
      Comprehensive education consulting services for international students.
      School Selection and Application Support
      Study Permit and Visa Guidance
      Academic Tutoring and Support
      Student Well-being and Adaptation
      University Planning and Transition Support
      We help students and families navigate the Canadian education system with confidence.
    `
  },

  // Consultation page
  {
    title: 'Book a Consultation',
    path: '/consultation',
    type: 'page',
    content: `
      Book a Free Consultation
      Schedule a meeting with our education consultants.
      We offer personalized guidance for school selection, study planning, and academic support.
    `
  },

  // Contact page
  {
    title: 'Contact Us',
    path: '/contact',
    type: 'page',
    content: `
      Contact Brightway to Canada
      Get in touch with our team.
      Office: PO Box 886, Nanaimo, BC, V9T 5N2
      Phone: +1 (250) 797-7886
      Email: info@brightwaytocanada.ca
    `
  },

  // Network page
  {
    title: 'Our Network',
    path: '/network',
    type: 'page',
    content: `
      Our Network
      Partnering with schools, homestays, and education professionals across Canada.
    `
  }
];

/**
 * Search function that matches query against all site content
 * @param {string} query - The search term
 * @returns {Array} Array of matching results with excerpts
 */
export function searchSite(query) {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results = [];

  siteContent.forEach(item => {
    const titleMatch = item.title.toLowerCase().includes(searchTerm);
    const contentMatch = item.content.toLowerCase().includes(searchTerm);

    if (titleMatch || contentMatch) {
      // Create an excerpt showing the match context
      const excerpt = createExcerpt(item.content, searchTerm);
      
      results.push({
        title: item.title,
        path: item.path,
        type: item.type,
        excerpt: excerpt,
        // Boost title matches in ranking
        relevance: titleMatch ? 2 : 1
      });
    }
  });

  // Sort by relevance (title matches first)
  return results.sort((a, b) => b.relevance - a.relevance);
}

/**
 * Creates an excerpt showing the search term in context
 * @param {string} content - The full content
 * @param {string} searchTerm - The search term
 * @returns {string} Excerpt with the search term highlighted
 */
function createExcerpt(content, searchTerm, maxLength = 1200) {
  const lowerContent = content.toLowerCase();
  const index = lowerContent.indexOf(searchTerm);

  if (index === -1) {
    // Return first part of content if no match
    return content.trim().substring(0, maxLength) + '...';
  }

  // Get text around the match
  const start = Math.max(0, index - 400);
  const end = Math.min(content.length, index + searchTerm.length + 800);
  
  let excerpt = content.substring(start, end).trim();
  
  // Add ellipsis if needed
  if (start > 0) excerpt = '...' + excerpt;
  if (end < content.length) excerpt = excerpt + '...';

  return excerpt;
}

/**
 * Highlight search terms in text (for display)
 * @param {string} text - Text to highlight
 * @param {string} searchTerm - Term to highlight
 * @returns {string} Text with <mark> tags around matches
 */
export function highlightSearchTerm(text, searchTerm) {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
}
