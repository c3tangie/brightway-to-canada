# Dynamic Search System

## Overview
The search system now **automatically updates** when you add or modify content in your data files. You no longer need to manually maintain the search index!

## How It Works

### Automatic Content Indexing
The search system (`src/utils/searchContent.js`) automatically imports and indexes content from:

1. **Services** - `src/Pages/Services/services-components/serviceData.js`
   - All service categories (Academic Planning, Well-being & Safety, etc.)
   - All questions and answers within each service
   - Both regular and niche services

2. **Team Members** - `src/Pages/About/abouts-components/teamData.js`
   - All team member profiles
   - Names, roles, descriptions, and extended bios

3. **Static Pages** - Home, About, Contact, Network, Consultation
   - Core page content for navigation

### What's Searchable

Users can now search for:
- **Service topics**: "academic planning", "homestay", "health insurance", "grade booster"
- **Specific questions**: "transcript", "study permit", "emotional support"
- **Team members**: "Ling Wang", "Jonathan Tang", "Jay Zang", names and roles
- **General topics**: "tutor", "consultant", "visa", "university"

### Search Features

- **Dynamic excerpts**: Shows up to 2000 characters of context around search terms
- **Smart highlighting**: Search terms are highlighted in yellow
- **Flexible bubbles**: Result cards expand/shrink based on content length
- **Relevance sorting**: Title matches appear before content matches

## Adding New Content

### To Add a New Service
1. Edit `src/Pages/Services/services-components/serviceData.js`
2. Add your new service object with questions and answers
3. **That's it!** The search will automatically include it

### To Add a New Team Member
1. Edit `src/Pages/About/abouts-components/teamData.js`
2. Add your new team member object
3. **That's it!** The search will automatically include it

### To Update Existing Content
1. Simply edit the question, answer, or bio in the respective data file
2. Save the file
3. **The search automatically reflects the changes**

## No Manual Updates Needed

Previously, you had to:
1. Update content in your data files
2. Remember to also update `searchContent.js` manually
3. Keep them synchronized

Now, you only need to:
1. Update content in your data files
2. Done! ✅

## Technical Details

### Files Modified
- `src/utils/searchContent.js` - Now imports and auto-generates search index
- Imports: `serviceData` and `teamData`
- Function: `generateSiteContent()` dynamically builds the search index

### Backup
- Old manual search file backed up to: `src/utils/searchContent_old.js`
- Can be deleted once you verify the new system works

## Testing the Search

Try searching for:
- "homestay privacy" - Should find student niche services
- "transcript" - Should find documentation services
- "Jonathan" - Should find team member
- "academic planning" - Should find service category
- "grade booster" - Should find specific question
