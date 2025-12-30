const serviceData = [
  {
    id: 1,
    slug: 'career-counseling',
    title: 'Career Counseling',
    subtitle: 'Personalized career guidance and planning',
    icon: '💼',
    shortDescription: 'Get expert guidance on career transitions, job search strategies, and professional development.',
    featuredImage: '/images/services/career-counseling.jpg',
    
    // Q&A Section
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
    ],
    
    // Service Details
    extendedDescription: [
      "Our career counseling service is designed to help professionals at all stages of their career journey.",
      "Whether you're just starting out, considering a career change, or looking to advance in your current field, we provide personalized guidance.",
      "We combine industry insights with practical tools to help you achieve your career objectives."
    ],
    
    benefits: [
      "Personalized career assessment",
      "Industry-specific guidance",
      "Resume and portfolio review",
      "Interview preparation",
      "Networking strategies",
      "Long-term career planning"
    ],
    
    // Booking Information
    duration: "60 minutes",
    pricing: "From $99/session",
    availableTimes: ["Weekdays", "Evenings", "Weekends"],
    bookingLink: "https://calendly.com/your-link/career-counseling",
    
    // Categories for filtering
    categories: ['career', 'professional', 'consulting'],
    featured: true
  },
  {
    id: 2,
    slug: 'academic-tutoring',
    title: 'Academic Tutoring',
    subtitle: 'One-on-one subject tutoring',
    icon: '📚',
    shortDescription: 'Personalized tutoring for students at all academic levels.',
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
    ],
    
    // ... more service data
  }
];

export default serviceData;