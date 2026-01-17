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
        title: question.question,  // Just the question, not "Service - Question"
        category: service.title,   // Store category separately for grouping
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
      title: member.name,           // Just the name
      subtitle: member.role,        // Role as subtitle for display
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

// Common stop words that shouldn't influence search relevance
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should',
  'may', 'might', 'must', 'shall', 'can', 'need', 'dare', 'ought', 'used',
  'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves',
  'you', 'your', 'yours', 'yourself', 'yourselves',
  'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself',
  'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves',
  'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those',
  'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing',
  'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while',
  'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between',
  'into', 'through', 'during', 'before', 'after', 'above', 'below',
  'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under',
  'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where',
  'why', 'how', 'all', 'each', 'few', 'more', 'most', 'other', 'some',
  'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than',
  'too', 'very', 'just', 'also', 'now', 'get', 'got', 'getting'
]);

/**
 * Search function that matches query against all site content.
 * Supports multi-word search: splits query into words and matches any of them.
 * Results are ranked by relevance (keyword matches weighted higher than stop words).
 * @param {string} query - The search term(s)
 * @returns {Array} - Array of matching results with excerpts
 */
export function searchSite(query) {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const trimmedQuery = query.trim().toLowerCase();
  
  // Split query into individual words (filter out empty strings and very short words)
  const allWords = trimmedQuery
    .split(/\s+/)
    .filter(word => word.length >= 2); // ignore single-character words
  
  if (allWords.length === 0) {
    return [];
  }

  // Separate keywords from stop words
  const keywords = allWords.filter(word => !STOP_WORDS.has(word));
  const stopWords = allWords.filter(word => STOP_WORDS.has(word));
  
  // If ALL words are stop words, use them anyway (otherwise no results)
  const searchWords = keywords.length > 0 ? keywords : stopWords;
  const hasKeywords = keywords.length > 0;

  const results = [];

  siteContent.forEach(item => {
    const lowerContent = item.content.toLowerCase();
    const lowerTitle = item.title.toLowerCase();
    const combined = lowerTitle + ' ' + lowerContent;

    // Count keyword matches (weighted higher) and stop word matches
    let keywordMatchCount = 0;
    let stopWordMatchCount = 0;
    let titleKeywordMatchCount = 0;
    const matchedWords = [];

    // Count keyword matches
    keywords.forEach(word => {
      if (combined.includes(word)) {
        keywordMatchCount++;
        matchedWords.push(word);
      }
      if (lowerTitle.includes(word)) {
        titleKeywordMatchCount++;
      }
    });

    // Count stop word matches (only if they were in the query)
    stopWords.forEach(word => {
      if (combined.includes(word)) {
        stopWordMatchCount++;
        if (!matchedWords.includes(word)) {
          matchedWords.push(word);
        }
      }
    });

    // Calculate relevance score:
    // - Keywords are worth 10 points each
    // - Title keyword matches are worth 5 extra points
    // - Stop words are worth 1 point each (minor boost)
    const relevanceScore = 
      (keywordMatchCount * 10) + 
      (titleKeywordMatchCount * 5) + 
      (stopWordMatchCount * 1);

    // Only include if at least one meaningful word matches
    // If we have keywords, require at least one keyword match
    // If no keywords (all stop words), require at least one stop word match
    const hasMatch = hasKeywords ? keywordMatchCount > 0 : stopWordMatchCount > 0;

    if (hasMatch) {
      results.push({
        ...item,
        excerpt: createExcerpt(item.content, matchedWords),
        keywordMatchCount,
        titleKeywordMatchCount,
        stopWordMatchCount,
        relevanceScore,
        matchedWords
      });
    }
  });

  // Sort by relevance score (descending)
  results.sort((a, b) => {
    // Primary: relevance score
    if (b.relevanceScore !== a.relevanceScore) {
      return b.relevanceScore - a.relevanceScore;
    }
    // Secondary: keyword matches in title
    if (b.titleKeywordMatchCount !== a.titleKeywordMatchCount) {
      return b.titleKeywordMatchCount - a.titleKeywordMatchCount;
    }
    // Tertiary: alphabetical
    return a.title.localeCompare(b.title);
  });

  return results;
}

/**
 * Create an excerpt that highlights the first matched word found.
 * @param {string} content - Full content text
 * @param {string|string[]} searchTerms - Word(s) to look for
 * @param {number} maxLength - Max excerpt length
 * @returns {string} - Excerpt text
 */
function createExcerpt(content, searchTerms, maxLength = 800) {
  const terms = Array.isArray(searchTerms) ? searchTerms : [searchTerms];
  const lowerContent = content.toLowerCase();
  
  // Find the first matching term's position
  let index = -1;
  let matchedTerm = terms[0] || '';
  
  for (const term of terms) {
    const idx = lowerContent.indexOf(term);
    if (idx !== -1 && (index === -1 || idx < index)) {
      index = idx;
      matchedTerm = term;
    }
  }

  if (index === -1) {
    // Return first part of content if no match
    return content.trim().substring(0, maxLength) + '...';
  }

  // Get text around the match
  const start = Math.max(0, index - 250);
  const end = Math.min(content.length, index + matchedTerm.length + 550);
  
  let excerpt = content.substring(start, end).trim();
  
  // Add ellipsis if needed
  if (start > 0) excerpt = '...' + excerpt;
  if (end < content.length) excerpt = excerpt + '...';

  return excerpt;
}

/**
 * Highlight search terms in text (for display).
 * Supports multi-word queries: highlights each word individually.
 * @param {string} text - Text to highlight
 * @param {string} searchTerm - Term(s) to highlight (space-separated)
 * @returns {string} - HTML string with highlighted terms
 */
export function highlightSearchTerm(text, searchTerm) {
  if (!searchTerm || !text) return text;

  // Split into individual words and filter short ones
  const words = searchTerm
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length >= 2);

  if (words.length === 0) return text;

  // Escape special regex characters in each word
  const escapedWords = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  
  // Create a regex that matches any of the words
  const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');
  
  return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
}
