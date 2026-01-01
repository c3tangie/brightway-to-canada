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
        question: "My child is entering secondary school with average academic performance. How can you develop an effective plan to ensure their academic success?",
        answer: "We create personalized academic roadmaps that focus on skill-building, language preparation, and strategic school placement based on your child's strengths and learning style.",
        image: StudyImageOne
      },
      {
        question: "My child has completed middle school with average grades and wants to attend high school in Canada. How can you develop an effective plan to help my child get into a good university?",
        answer: "We work with Canadian high schools that offer university pathway programs, academic upgrading, and personalized guidance to strengthen university applications over 2-4 years.",
        image: StudyImageOne
      },
      {
        question: "My child is used to highly structured educational systems. How can they adapt to Canada's more independent learning environment?",
        answer: "We provide academic monitoring, regular check-ins, and time management coaching to help students adapt to different learning approaches and maintain academic performance.",
        image: StudyImageOne
      },
      {
        question: "What additional English language support will my child need when transitioning to study in Canada?",
        answer: "We offer specialized Academic English preparation focusing on classroom participation, academic writing, and subject-specific vocabulary to ensure smooth transition.",
        image: DocsImageTwo
      },
      {
        question: "What are the key stages of academic planning for students studying abroad?",
        answer: "1) Foundation building, 2) Language & cultural adaptation, 3) Academic pathway development, 4) University preparation and application strategy.",
        image: ConnectImageThree
      },
      {
        question: "What is the optimal time for students to begin studying abroad—during secondary school or after high school graduation?",
        answer: "We assess each student's situation to determine the optimal timing based on academic goals, language readiness, and emotional maturity.",
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
        question: "How does Canada ensure the safety of international students?",
        answer: "Canadian schools have strict safety protocols, 24/7 supervision for boarding students, and mandatory reporting systems. We also conduct thorough homestay vetting.",
        image: CareImageOne
      },
      {
        question: "What healthcare support is available for international students in Canada?",
        answer: "All international students must have comprehensive health insurance. We assist with enrollment and provide guidance on accessing medical services, including 24/7 emergency support.",
        image: CareImageThree
      },
      {
        question: "Who should my child contact in case of an emergency during their studies?",
        answer: "Your child will have access to our 24/7 emergency hotline, local coordinators, school contacts, and a personalized emergency response plan.",
        image: ConnectImageOne
      },
      {
        question: "What living arrangement is better for international students—homestay or school dormitory?",
        answer: "We assess each student's needs to recommend the best living arrangement. We maintain weekly check-ins, monthly reports, and coordinate closely with schools and host families.",
        image: ConnectImageThree
      },
      {
        question: "How will you support my child's emotional well-being and help them cope with stress?",
        answer: "We provide access to school counselors, cultural adaptation workshops, regular emotional check-ins, and connect families with mental health professionals when needed.",
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
        question: "How can international students integrate into local student communities?",
        answer: "We organize orientation programs, buddy systems with local students, cultural exchange activities, and social integration workshops throughout the school year.",
        image: EmotionImageTwo
      },
      {
        question: "What realistic expectations should families have about studying abroad?",
        answer: "While many students thrive, success requires proper preparation and support. We focus on realistic expectations, gradual adaptation, and ongoing monitoring to ensure positive outcomes.",
        image: ConnectImageEight
      },
      {
        question: "How can students maintain emotional balance while adjusting to life abroad?",
        answer: "We provide mentorship programs, healthy relationship education, and access to counselors who understand the unique challenges of studying abroad.",
        image: EmotionImageOne
      },
      {
        question: "How does studying abroad compare to domestic education systems?",
        answer: "Studying abroad presents different challenges and opportunities. We help families understand realistic expectations and prepare for academic, social, and emotional adjustments.",
        image: ConnectImageFive
      },
      {
        question: "What support is provided during the first month after arriving in Canada?",
        answer: "We provide a comprehensive first-month plan including airport pickup, orientation, school registration, banking setup, and weekly check-ins to ensure smooth transition.",
        image: ConnectImageTwo
      },
      {
        question: "How can parents support their children after they go abroad to study?",
        answer: "We offer parental guidance on communication strategies, emotional support techniques, and how to stay involved while respecting their child's growing independence.",
        image: ConnectImageFour
      }
    ]
  },
  {
    id: 4,
    slug: 'financial-practical-preparation',
    title: 'Financial & Practical Preparation',
    featuredImage: ConnectImageSeven,
    
    questions: [
      {
        question: "What is the most cost-effective way to plan for Canadian secondary school study expenses?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "What legal documents need to be prepared before studying abroad?",
        answer: "We provide a comprehensive checklist including study permits, guardianship documents, medical records, and insurance policies with step-by-step guidance.",
        image: DocsImageOne
      },
      {
        question: "What medical preparations are needed before studying abroad?",
        answer: "We provide a complete vaccination checklist based on Canadian requirements and recommendations for appropriate medical preparation.",
        image: CareImageTwo
      }
    ]
  },
  {
    id: 5,
    slug: 'academic-niche',
    title: 'Academic Niche Issues Support',
    featuredImage: ConnectImageSeven,
    
    questions: [
      {
        question: "My children showed me their grade reports, why do i only see teachers' comments on behavior and attitude but no specific scores?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "I used to have a well formed plan for my child, however looking at other international students' plans I am not certain anymore. How can I be sure my child's plan is effective?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My child wants to apply to a specific university but that institution's QS scores and popularity seem to be quite low. Will that affect their future?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "Should I encourage or discourage my child to take 'Grade-Booster' courses offered by some schools to improve their grades?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "I just got a panicked phone call from my child saying they may have to delay graduation due to available course sections being full. How common is this and what can be done to prevent it?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My child's favorite teacher and the school counselor is suggesting a career path for my child that I don't agree with. What should I do?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      }
    ]
  },
  {
    id: 6,
    slug: 'well-being-niche',
    title: 'Well-Being Niche Issues Support',
    featuredImage: ConnectImageSeven,
    
    questions: [
      {
        question: "My child received some medical help and they are charging them? Didn't we enroll in health insurance?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My child forgot to renew their health insurance and they are too afarid to contact officials thinking they will get 'arrested' or 'expelled'. What should we do?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My child's favorite food/snack is not available in Canada, and border controls are preventing us from sending them packages. How can we help them cope with this?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      }
    ]
  },
  {
    id: 7,
    slug: 'emotional-social-niche',
    title: 'Emotional-Social Niche Issues Support',
    featuredImage: ConnectImageSeven,
    
    questions: [
      {
        question: "My child is only contacting me every few months while my friend's child contacts their parents weekly. Is this normal?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My child seems to be missing home so much they video call us every day and sometimes cries during the call. How can we help them adjust better?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "I miss my child so much and demands them to call me but it seems that they are not happy to do so. How can I improve our communication?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "I do not wish to force relationship advises on my child, but I am worried they may be too lonely and may fall into unhealthy relationships. How can I help them?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My child is doing fine but us parents are developing serious anxiety about their well-being and safety. How can we ease our worries?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My child is integrating well socially, a bit too well perhaps. They seem to care about their friends more than family now. Is this normal?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "After a few months abroad, my child are starting to use niche slangs and phrases I do not understand. How can I keep up with their language?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My child seems to be losing the friendships they had back home due to the distance, time difference, and even jealousy. How can we help them maintain those important relationships?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      }
    ]
  },
  {
    id: 8,
    slug: 'financial-niche',
    title: 'Financial Niche Issues Support',
    featuredImage: ConnectImageSeven,
    
    questions: [
      {
        question: "Why do we see so many additional fees and charges on our child's school statements? Can we dispute any of them?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "We had issues with our bank and our child's tuition payment was delayed. The school is now charging us late fees but we felt that was out of our control. What can we do?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "Our child wants to open a credit card to build their credit history, is that a good idea?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "For reasons We cannot cover our child's expenses for a few months. What options do we have to manage the situation without jeopardizing our child's studies?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "There are temporary holds due to delayed payments, would this affect our child's study permit or visa status?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My child received a scholarship but we do not understand the terms and conditions. How can we ensure we comply with all requirements?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My child says their homestay family is receving a tax return. Does that mean we can get some money back too?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      }
    ]
  },
  {
    id: 9,
    slug: 'documentation-niche',
    title: 'Documentation Niche Issues Support',
    featuredImage: DocsImageOne,
    
    questions: [
      {
        question: "My child graduated but lost their paper diploma. Now our home country won't recognize their degree without it. What's the secret to getting replacement documents from Canadian institutions?",
        answer: "[Real answer about registrar office relationships, notarization workarounds, and timeline management]",
        image: DocsImageOne
      },
      {
        question: "We forgot the medical records. Now my child needs surgery and the hospital wants history we don't have. Is this a deal-breaker or is there a workaround?",
        answer: "[Real answer about emergency medical protocols, international record retrieval, and Canadian healthcare system navigation]",
        image: CareImageThree
      },
      {
        question: "IRCC changed requirements AFTER we prepared everything. Are we back to square one or are there grandfathering clauses nobody talks about?",
        answer: "[Real answer about policy transition periods, alternative documentation, and advisor connections with immigration officers]",
        image: DocsImageTwo
      },
      {
        question: "My child's home country status expired, but renewal requires physical presence. They can't leave Canada during studies. Is this an impossible situation?",
        answer: "[Real answer about consulate exceptions, power of attorney setups, and timing strategies that preserve both statuses]",
        image: ConnectImageSeven
      },
      {
        question: "The school says they sent the transcript but it never arrived. Now university applications are due. Who actually tracks these things down?",
        answer: "[Real answer about courier investigations, digital workarounds, and institutional escalation contacts]",
        image: DocsImageOne
      }
    ]
  },
  {
    id: 10,
    slug: 'student-niche',
    title: 'Student-Oriented Niche Issues Support',
    featuredImage: ConnectImageSeven,
    
    questions: [
      {
        question: "My homestay does not allow me to lock my bedroom doors and I do not feel secure at all...",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "I stored a lot of photos and projects on my school's Google Account/other cloud platforms and after graduating they disabled my account before I managed to create a backup. Now I felt like a part of my memory has been taken away from me...",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "I was hanging out with my friends and they saw the personal conversations my parents sent me on my phone, I feel so embarrassed...",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      },
      {
        question: "My Youtube/other social media account was linked to my phone number back in my home country and my old phone number has been deactivated due to inactivity. Does that mean I'll lose my account permanently if something goes wrong? my saved playlists, friend lists...all can be lost...what can i do?",
        answer: "We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations.",
        image: ConnectImageSeven
      }
    ]
  }
];

export default serviceData;