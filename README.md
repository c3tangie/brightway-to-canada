# Brightway to Canada Consulting Web Source
Active development branch of the official website of Brightway to Canada Consulting Inc.

**Framework constructed by `ReactJS` + `Tailwind CSS v3.4.17`**

## Technologies
- `Javascript`
- `React`
- `Tailwind CSS`
- `HTML`
- `Vite`

## Features
- ### Utility-First Styling with Tailwind CSS:
  Uses Tailwind CSS v3 for consistent, responsive, and highly customizable UI styling across all pages.



- ### Multi-Page SPA Routing:
  Client-side routing powered by React Router, enabling seamless navigation between Home, About, Services, Team, Contact, Search without full page reloads.



- ### Dynamic Services System (Data-Driven):
  All services, FAQs, and answers are driven by a centralized serviceData.js file, making it easy to update content without touching page logic.



- ### Data-Driven Architecture:
  Core content (services, Q&A, team profiles) is centralized in structured data files and rendered dynamically, enabling scalable updates without modifying page logic.



- ### Client-Side Routing & URL State Management:
  Uses React Router with query parameters to deep-link specific service questions and preserve navigation state across reloads and shares.



- ### Custom Site-Wide Search Engine:
  Implements a lightweight search system that auto-indexes services, questions, pages, and team data, ranks results by relevance, highlights matches, and paginates results — all without external dependencies.



- ### Reusable Component System:
  Modular components (Navbar, Footer, banners, cards, detail layouts) are shared across pages to ensure consistency, maintainability, and low coupling.



- ### Performance-Focused SPA Setup:
  Built with Vite for fast builds and optimized bundles, combined with lazy image loading and controlled re-renders for smooth user experience.



- ### Form Handling & Validation Logic:
  Multi-section consultation and contact forms with client-side validation, confirmation prompts, and secure submission via Web3Forms API.



- ### UX & State Effects Management:
  Explicit scroll restoration, controlled animations, and WIP fallbacks ensure predictable behavior across route transitions.

## Process of Development
This project started off as a simple multi-page layout with a static navbar, banner, and footer centered around a three-button survey on the homepage to loosely filter user needs. As development progressed, the structure was iteratively refined with original static pages evolved into a fully dynamic and data-driven React application, with services, questions, and team content abstracted into structured datasets and rendered dynamically. Additional features such as client-side routing, deep-linked Q&A navigation, a custom site-wide search system, and reusable layout components were introduced which allowed for a robust, and efficient system for both the users and our team. Each iteration focused on reducing coupling, improving user experience, and aligning the architecture more closely with real-world production patterns.

## Preview
The figure below presents a screenshot of the website homepage, featuring the banner, navbar, and a glipse of article contents.

<img width="1906" height="1117" alt="Screenshot 2026-01-20 at 1 26 48 AM" src="https://github.com/user-attachments/assets/a3838a23-a72d-4a1a-876a-2beaefe3aea8" />

## Resources
The initial setup, as well as early portions of the backbone framework have been aided by youtube videos which you can access here in this playlist below:

Web Dev Youtube Playlist: https://youtube.com/playlist?list=PLwHe9S2oWFXi7v0_UztGQsLMVxnld3Rnk&si=gvrOjHu0qac5WU4L


