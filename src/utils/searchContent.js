// searchContent.js - Site-wide search utility
// Automatically generates search index from actual site data

import serviceData from '../Pages/Services/services-components/serviceData';
import teamData from '../Pages/About/abouts-components/teamData';

/**
 * Dynamically generate searchable content from site data.
 * This automatically updates when you change content in serviceData.js or teamData.js
 */
function generateSiteContent() {
  const content = [];

  // Home page (static)
  content.push({
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
  });

  // About page (static)
  content.push({
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
  });

  // Services - dynamically generated from serviceData
  // Create individual entries for each question within each service
  serviceData.forEach(service => {
    service.questions.forEach((question, index) => {
      const answers = Array.isArray(question.answer) ? question.answer.join(' ') : question.answer;
      
      content.push({
        title: `${service.title} - ${question.question}`,
        path: `/service/${service.slug}?q=${index}`,
        type: 'service',
        content: `${service.title} ${question.question} ${answers}`
      });
    });
  });

  // General services page
  content.push({
    title: 'Our Services',
    path: '/services',
    type: 'page',
    content: `
      Our Services
      Comprehensive support for international students in Canada.
      We offer academic planning, well-being support, daily life assistance, social integration, emotional support, and financial documentation.
      ${serviceData.map(s => s.title).join(' ')}
    `
  });

  // Team members - dynamically generated from teamData
  teamData.forEach(member => {
    const bioText = Array.isArray(member.extended_bio) 
      ? member.extended_bio.join(' ') 
      : member.extended_bio || '';
    
    content.push({
      title: `${member.name} - ${member.role}`,
      path: `/team/${member.slug}`,
      type: 'team',
      content: `${member.name} ${member.role} ${member.description} ${bioText}`
    });
  });

  // Team page
  content.push({
    title: 'Our Team',
    path: '/about_teams',
    type: 'page',
    content: `
      Our Team
      Meet the dedicated professionals who make Brightway to Canada possible.
      ${teamData.map(m => `${m.name} ${m.role} ${m.description}`).join(' ')}
    `
  });

  // Consultation page (static)
  content.push({
    title: 'Book a Consultation',
    path: '/consultation',
    type: 'page',
    content: `
      Book a Free Consultation
      Schedule a meeting with our education consultants.
      We offer personalized guidance for school selection, study planning, and academic support.
    `
  });

  // Contact page (static)
  content.push({
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
  });

  // Network page (static)
  content.push({
    title: 'Our Network',
    path: '/network',
    type: 'page',
    content: `
      Our Network
      Partnering with schools, homestays, and education professionals across Canada.
    `
  });

  return content;
}

// Generate content dynamically
export const siteContent = generateSiteContent();

/**
 * Search function that matches query against all site content
 * @param {string} query - The search term
 * @returns {Array} - Array of matching results with excerpts
 */
export function searchSite(query) {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const lowerQuery = query.toLowerCase().trim();
  const results = [];

  siteContent.forEach(item => {
    const lowerContent = item.content.toLowerCase();
    const lowerTitle = item.title.toLowerCase();

    // Check if query matches title or content
    if (lowerTitle.includes(lowerQuery) || lowerContent.includes(lowerQuery)) {
      results.push({
        ...item,
        excerpt: createExcerpt(item.content, lowerQuery)
      });
    }
  });

  // Sort by relevance (title matches first, then content matches)
  results.sort((a, b) => {
    const aInTitle = a.title.toLowerCase().includes(lowerQuery);
    const bInTitle = b.title.toLowerCase().includes(lowerQuery);
    
    if (aInTitle && !bInTitle) return -1;
    if (!aInTitle && bInTitle) return 1;
    return 0;
  });

  return results;
}

function createExcerpt(content, searchTerm, maxLength = 800) {
  const lowerContent = content.toLowerCase();
  const index = lowerContent.indexOf(searchTerm);

  if (index === -1) {
    // Return first part of content if no match
    return content.trim().substring(0, maxLength) + '...';
  }

  // Get text around the match
  const start = Math.max(0, index - 250);
  const end = Math.min(content.length, index + searchTerm.length + 550);
  
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
 * @returns {string} - HTML string with highlighted terms
 */
export function highlightSearchTerm(text, searchTerm) {
  if (!searchTerm || !text) return text;

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
}
