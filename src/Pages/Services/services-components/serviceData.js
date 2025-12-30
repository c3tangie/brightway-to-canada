const serviceData = [
  {
    id: 1,
    slug: 'career-counseling',
    title: 'Career Counseling',
    featuredImage: '/images/services/career-counseling.jpg',
    
    // Q&A Section - Main focus
    questions: [
      {
        question: "What can I expect from a career counseling session?",
        answer: "Our sessions help you identify career goals, assess your skills, create an action plan, and develop job search strategies tailored to your unique situation."
      },
      {
        question: "How many sessions do I typically need?",
        answer: "Most clients see significant progress in 3-5 sessions, but we offer both single sessions and package options depending on your needs."
      },
      {
        question: "Do you help with resume and interview preparation?",
        answer: "Yes! We provide comprehensive support including resume reviews, cover letter writing, and mock interviews to boost your confidence."
      }
    ]
  },
  {
    id: 2,
    slug: 'academic-tutoring',
    title: 'Academic Tutoring',
    featuredImage: '/images/services/tutoring.jpg',
    
    questions: [
      {
        question: "What subjects do you tutor?",
        answer: "We cover STEM subjects, languages, humanities, and test preparation (SAT, ACT, GRE, GMAT)."
      },
      {
        question: "Are sessions conducted online or in-person?",
        answer: "We offer both! You can choose between virtual sessions via video call or in-person meetings at our center."
      }
    ]
  }
  // ... more services with only Q&A structure
];

export default serviceData;