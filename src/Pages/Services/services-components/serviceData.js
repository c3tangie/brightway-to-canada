import StudyImageOne from '../../../assets/services_assets/services_img_study1.webp';
import EmotionImageOne from '../../../assets/services_assets/services_img_emotion1.webp';
import EmotionImageTwo from '../../../assets/services_assets/services_img_emotion2.webp';
import ConnectImageOne from '../../../assets/services_assets/services_img_connect1.webp';
import ConnectImageTwo from '../../../assets/services_assets/services_img_connect2.webp';
import ConnectImageThree from '../../../assets/services_assets/services_img_connect3.webp';
import ConnectImageFour from '../../../assets/services_assets/services_img_connect4.webp';
import ConnectImageFive from '../../../assets/services_assets/services_img_connect5.webp';
import ConnectImageSix from '../../../assets/services_assets/services_img_connect6.webp';
import ConnectImageSeven from '../../../assets/services_assets/services_img_connect7.webp';
import ConnectImageEight from '../../../assets/services_assets/services_img_connect8.webp';
import CareImageOne from '../../../assets/services_assets/services_img_care1.webp';
import CareImageTwo from '../../../assets/services_assets/services_img_care2.webp';
import CareImageThree from '../../../assets/services_assets/services_img_care3.webp';
import DocsImageOne from '../../../assets/services_assets/services_img_docs1.webp';
import DocsImageTwo from '../../../assets/services_assets/services_img_docs2.webp';

const serviceData = [
  {
    id: 1,
    slug: 'academic-planning-school-selection',
    title: 'Academic Planning & School Selection',
    featuredImage: '/images/services/academic-planning.jpg',
    
    questions: [
      {
        question: "My children are 12/13/15 years old and had average grades in China. How can you develop an effective plan to ensure their academic success?",
        answer: "We create personalized academic roadmaps that focus on skill-building, language preparation, and strategic school placement based on your child's strengths and learning style.",
        image: StudyImageOne
      },
      {
        question: "My child just graduated from junior high in China with average grades and wants to attend high school in Canada. How can you develop an effective plan to help my child get into a relatively good university?",
        answer: "We work with Canadian high schools that offer university pathway programs, academic upgrading, and personalized guidance to strengthen university applications over 2-4 years.",
        image: StudyImageOne
      },
      {
        question: "My child is used to the 'cramming' teaching style in Chinese high schools. If there is less strict management there and my child's grades drop, what then?",
        answer: "We provide academic monitoring, regular check-ins, and time management coaching to help students adapt to Canada's more independent learning environment.",
        image: StudyImageOne
      },
      {
        question: "Besides English studies in China, what other English training will my child need when transferring to study in Canada?",
        answer: "We offer specialized Academic English preparation focusing on classroom participation, academic writing, and subject-specific vocabulary to ensure smooth transition.",
        image: DocsImageTwo
      },
      {
        question: "What are the four levels of academic planning for children studying abroad?",
        answer: "1) Foundation building, 2) Language & cultural adaptation, 3) Academic pathway development, 4) University preparation and application strategy.",
        image: ConnectImageThree
      },
      {
        question: "Is it better for children to go abroad during middle school or after graduating from high school?",
        answer: "We assess each family's situation to determine the optimal timing based on academic goals, language readiness, and emotional maturity.",
        image: ConnectImageSix
      }
    ]
  },
  {
    id: 2,
    slug: 'wellbeing-safety-daily-life',
    title: 'Well-being, Safety & Daily Life Support',
    featuredImage: '/images/services/wellbeing-support.jpg',
    
    questions: [
      {
        question: "How does Canada ensure the safety of my underage child?",
        answer: "Canadian schools have strict safety protocols, 24/7 supervision for boarding students, and mandatory reporting systems. We also conduct thorough homestay vetting.",
        image: CareImageOne
      },
      {
        question: "What if my child gets sick? What policies are there regarding healthcare for international students?",
        answer: "All international students must have comprehensive health insurance. We assist with enrollment and provide guidance on accessing medical services, including 24/7 emergency support. We help enroll students in comprehensive health insurance plans and provide guidance on accessing clinics, hospitals, and understanding coverage details.",
        image: CareImageThree
      },
      {
        question: "If an emergency occurs during my child's studies abroad, who should they contact?",
        answer: "Your child will have access to our 24/7 emergency hotline, local coordinators, school contacts, and a personalized emergency response plan.",
        image: ConnectImageOne
      },
      {
        question: "Is it better for young international students to live in a homestay or in a school dormitory? How does the school and your organization maintain contact with each child?",
        answer: "We assess each student's needs to recommend the best living arrangement. We maintain weekly check-ins, monthly reports, and coordinate closely with schools and host families.",
        image: ConnectImageThree
      },
      {
        question: "My child is so young and not yet mature physically or mentally. How will you help them cope with stress and psychological issues?",
        answer: "We provide access to school counselors, cultural adaptation workshops, regular emotional check-ins, and connect families with Mandarin-speaking mental health professionals when needed.",
        image: ConnectImageFour
      }
    ]
  },
  {
    id: 3,
    slug: 'social-emotional-adaptation',
    title: 'Social & Emotional Adaptation Support',
    featuredImage: '/images/services/adaptation-support.jpg',
    
    questions: [
      {
        question: "Although international students are peers, young Chinese students studying abroad may find it difficult to 'integrate' into local student groups without help. What should be done?",
        answer: "We organize orientation programs, buddy systems with local students, cultural exchange activities, and social integration workshops throughout the school year.",
        image: EmotionImageTwo
      },
      {
        question: "Will everything become better once my child goes abroad? For example, will their mood improve, will their grades improve, will their life get better... Is that really true?",
        answer: "While many students thrive, success requires proper preparation and support. We focus on realistic expectations, gradual adaptation, and ongoing monitoring to ensure positive outcomes.",
        image: ConnectImageEight
      },
      {
        question: "For girls going abroad, the likelihood of experiencing emotional confusion increases. How to avoid emotional issues affecting life and studies?",
        answer: "We provide gender-specific support including mentorship programs, healthy relationship education, and access to female counselors who understand cultural nuances.",
        image: EmotionImageOne
      },
      {
        question: "We think studying in China is too intense and competitive. We hear studying abroad is easier, so we want to go study abroad...",
        answer: "Studying abroad presents different challenges. We help families understand realistic expectations and prepare for academic, social, and emotional adjustments.",
        image: ConnectImageFive
      },
      {
        question: "How will my child and I begin our new study and life in the first month after landing in Canada?",
        answer: "We provide a comprehensive first-month plan including airport pickup, orientation, school registration, banking setup, and weekly check-ins to ensure smooth transition.",
        image: ConnectImageTwo
      },
      {
        question: "What should parents do to help their children after they go abroad to study?",
        answer: "We offer parental guidance on communication strategies, emotional support techniques, and how to stay involved while respecting their child's growing independence.",
        image: ConnectImageFour
      }
    ]
  },
  {
    id: 4,
    slug: 'financial-practical-preparation',
    title: 'Financial & Practical Preparation',
    featuredImage: '/images/services/financial-planning.jpg',
    
    questions: [
      {
        question: "What is the most cost-effective way to plan for Canadian junior high/high school study expenses?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "What legal documents need to be prepared before my child goes abroad?",
        answer: "Study permits, notarized guardianship agreements, medical records, insurance policies, and power of attorney documents for emergency situations. We provide a comprehensive checklist including study permits, notarized guardianship documents, medical records, and insurance policies with step-by-step guidance.",
        image: DocsImageOne
      },
      {
        question: "Which vaccines does my child need before going abroad? Where can they get them?",
        answer: "Standard requirements include MMR, Tetanus, Hepatitis B. We provide a complete checklist and recommend International Travel Health Centers in major Chinese cities. We provide a complete vaccination checklist based on Canadian requirements and recommendations for local vaccination centers in China.",
        image: CareImageTwo
      }
    ]
  }
];

export default serviceData;