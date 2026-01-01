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
    slug: 'academic-planning',
    title: 'Academic Planning',
    featuredImage: '/images/services/academic-planning.jpg',
    questions: [
      {
        question: "My child is entering secondary school with average academic performance. How can you develop an effective plan to ensure their academic success?",
        answer: ["We create personalized academic roadmaps that focus on skill-building, language preparation, and strategic school placement based on your child's strengths and learning style."],
        image: StudyImageOne,
        id: 0
      },
      {
        question: "My child has completed middle school with average grades and wants to attend high school in Canada. How can you develop an effective plan to help my child get into a good university?",
        answer: ["We work with Canadian high schools that offer university pathway programs, academic upgrading, and personalized guidance to strengthen university applications over 2-4 years."],
        image: StudyImageOne,
        id: 1
      },
      {
        question: "My child is used to highly structured educational systems. How can they adapt to Canada's more independent learning environment?",
        answer: ["We provide academic monitoring, regular check-ins, and time management coaching to help students adapt to different learning approaches and maintain academic performance."],
        image: StudyImageOne,
        id: 2
      },
      {
        question: "What additional English language support will my child need when transitioning to study in Canada?",
        answer: ["We offer specialized Academic English preparation focusing on classroom participation, academic writing, and subject-specific vocabulary to ensure smooth transition."],
        image: DocsImageTwo,
        id: 3
      },
      {
        question: "What are the key stages of academic planning for students studying abroad?",
        answer: ["1) Foundation building, 2) Language & cultural adaptation, 3) Academic pathway development, 4) University preparation and application strategy."],
        image: ConnectImageThree,
        id: 4
      },
      {
        question: "What is the optimal time for students to begin studying abroad—during secondary school or after high school graduation?",
        answer: ["We assess each student's situation to determine the optimal timing based on academic goals, language readiness, and emotional maturity."],
        image: ConnectImageSix,
        id: 5
      }
    ]
  },
  {
    id: 2,
    slug: 'wellbeing-safety',
    title: 'Well-being & Safety',
    featuredImage: '/images/services/wellbeing-support.jpg',
    questions: [
      {
        question: "How does Canada ensure the safety of international students?",
        answer: ["Canadian schools have strict safety protocols, 24/7 supervision for boarding students, and mandatory reporting systems. We also conduct thorough homestay vetting."],
        image: CareImageOne,
        id: 0
      },
      {
        question: "What healthcare support is available for international students in Canada?",
        answer: ["All international students must have comprehensive health insurance. We assist with enrollment and provide guidance on accessing medical services, including 24/7 emergency support."],
        image: CareImageThree,
        id: 1
      },
      {
        question: "Who should my child contact in case of an emergency during their studies?",
        answer: ["Your child will have access to our 24/7 emergency hotline, local coordinators, school contacts, and a personalized emergency response plan."],
        image: ConnectImageOne,
        id: 2
      }
    ]
  },
  {
    id: 3,
    slug: 'daily-life-support',
    title: 'Daily Life Support',
    featuredImage: ConnectImageSeven,
    questions: [
      {
        question: "What living arrangement is better for international students—homestay or school dormitory?",
        answer: ["We assess each student's needs to recommend the best living arrangement. We maintain weekly check-ins, monthly reports, and coordinate closely with schools and host families."],
        image: ConnectImageThree,
        id: 0
      },
      {
        question: "What support is provided during the first month after arriving in Canada?",
        answer: ["We provide a comprehensive first-month plan including airport pickup, orientation, school registration, banking setup, and weekly check-ins to ensure smooth transition."],
        image: ConnectImageTwo,
        id: 1
      }
    ]
  },
  {
    id: 4,
    slug: 'social-integration',
    title: 'Social Integration',
    featuredImage: '/images/services/adaptation-support.jpg',
    questions: [
      {
        question: "How can international students integrate into local student communities?",
        answer: ["We organize orientation programs, buddy systems with local students, cultural exchange activities, and social integration workshops throughout the school year."],
        image: EmotionImageTwo,
        id: 0
      },
      {
        question: "What realistic expectations should families have about studying abroad?",
        answer: ["While many students thrive, success requires proper preparation and support. We focus on realistic expectations, gradual adaptation, and ongoing monitoring to ensure positive outcomes."],
        image: ConnectImageEight,
        id: 1
      },
      {
        question: "How does studying abroad compare to domestic education systems?",
        answer: ["Studying abroad presents different challenges and opportunities. We help families understand realistic expectations and prepare for academic, social, and emotional adjustments."],
        image: ConnectImageFive,
        id: 2
      }
    ]
  },
  {
    id: 5,
    slug: 'emotional-support',
    title: 'Emotional Support',
    featuredImage: EmotionImageOne,
    questions: [
      {
        question: "How can students maintain emotional balance while adjusting to life abroad?",
        answer: ["We provide mentorship programs, healthy relationship education, and access to counselors who understand the unique challenges of studying abroad."],
        image: EmotionImageOne,
        id: 0
      },
      {
        question: "How will you support my child's emotional well-being and help them cope with stress?",
        answer: ["We provide access to school counselors, cultural adaptation workshops, regular emotional check-ins, and connect families with mental health professionals when needed."],
        image: ConnectImageFour,
        id: 1
      },
      {
        question: "How can parents support their children after they go abroad to study?",
        answer: ["We offer parental guidance on communication strategies, emotional support techniques, and how to stay involved while respecting their child's growing independence."],
        image: ConnectImageFour,
        id: 2
      }
    ]
  },
  {
    id: 6,
    slug: 'financial-documentation',
    title: 'Financial & Documentation',
    featuredImage: ConnectImageSeven,
    questions: [
      {
        question: "What is the most cost-effective way to plan for Canadian secondary school study expenses?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageSeven,
        id: 0
      },
      {
        question: "What legal documents need to be prepared before studying abroad?",
        answer: ["We provide a comprehensive checklist including study permits, guardianship documents, medical records, and insurance policies with step-by-step guidance."],
        image: DocsImageOne,
        id: 1
      },
      {
        question: "What medical preparations are needed before studying abroad?",
        answer: ["We provide a complete vaccination checklist based on Canadian requirements and recommendations for appropriate medical preparation."],
        image: CareImageTwo,
        id: 2
      }
    ]
  },
  {
    id: 7,
    slug: 'academic-niche',
    title: 'Specialized Academic Support',
    featuredImage: ConnectImageSeven,
    isNiche: true,
    questions: [
      {
        question: "My children showed me their grade reports, why do i only see teachers' comments on behavior and attitude but no specific scores?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: DocsImageTwo,
        id: 0
      },
      {
        question: "I used to have a well formed plan for my child, however looking at other international students' plans I am not certain anymore. How can I be sure my child's plan is effective?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: StudyImageOne,
        id: 1
      },
      {
        question: "My child wants to apply to a specific university but that institution's QS scores and popularity seem to be quite low. Will that affect their future?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: DocsImageTwo,
        id: 2
      },
      {
        question: "Should I encourage or discourage my child to take 'Grade-Booster' courses offered by some schools to improve their grades? Would that be viewed negatively by the prestigious universities they are applying to?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: StudyImageOne,
        id: 3
      },
      {
        question: "I just got a panicked phone call from my child saying they may have to delay graduation due to available course sections being full. How common is this and what can be done to prevent it?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: DocsImageTwo,
        id: 4
      },
      {
        question: "My child's favorite teacher and the school counselor is suggesting a career path for my child that I don't agree with. What should I do?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: StudyImageOne,
        id: 5
      }
    ]
  },
  {
    id: 8,
    slug: 'well-being-niche',
    title: 'Specialized Well-Being Support',
    featuredImage: ConnectImageSeven,
    isNiche: true,
    questions: [
      {
        question: "My child received some medical help and they are charging them? Didn't we enroll in health insurance?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageOne,
        id: 0
      },
      {
        question: "My child forgot to renew their health insurance and they are too afraid to contact officials thinking they will get 'arrested' or 'expelled'. What should we do?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageOne,
        id: 1
      },
      {
        question: "My child's favorite food/snack is not available in Canada, and border controls are preventing us from sending them packages. How can we help them cope with this?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageOne,
        id: 2
      }
    ]
  },
  {
    id: 9,
    slug: 'emotional-social-niche',
    title: 'Specialized Emotional-Social Support',
    featuredImage: ConnectImageSeven,
    isNiche: true,
    questions: [
      {
        question: "My child is only contacting me every few months while my friend's child contacts their parents weekly. Is this normal?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageFour,
        id: 0
      },
      {
        question: "My child seems to be missing home so much they video call us every day and sometimes cries during the call. How can we help them adjust better?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageFour,
        id: 1
      },
      {
        question: "I miss my child so much and demands them to call me but it seems that they are not happy to do so. How can I improve our communication?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageFour,
        id: 2
      },
      {
        question: "I do not wish to force relationship advises on my child, but I am worried they may be too lonely and may fall into unhealthy relationships. How can I help them?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageFour,
        id: 3
      },
      {
        question: "My child is doing fine but us parents are developing serious anxiety about their well-being and safety. How can we ease our worries?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageFour,
        id: 4
      },
      {
        question: "My child is integrating well socially, a bit too well perhaps. They seem to care about their friends more than family now. Is this normal?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageFour,
        id: 5
      },
      {
        question: "After a few months abroad, my child are starting to use niche slangs and phrases I do not understand. How can I keep up with their language?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageFour,
        id: 6
      },
      {
        question: "My child seems to be losing the friendships they had back home due to the distance, time difference, and even jealousy. How can we help them maintain those important relationships?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageFour,
        id: 7
      }
    ]
  },
  {
    id: 10,
    slug: 'financial-niche',
    title: 'Specialized Financial Support',
    featuredImage: ConnectImageSeven,
    isNiche: true,
    questions: [
      {
        question: "Why do we see so many additional fees and charges on our child's school statements? Can we dispute any of them?",
        answer: ["This is a very common confusion for parents and students. Schools often have various fees beyond tuition, such as activity fees, technology fees, and lab fees. It's important to review the fee breakdown provided by the school carefully. If you believe any charges are incorrect or unjustified, we can assist you in reviewing the statements and communicating with the school to clarify or dispute any questionable fees. In many cases, schools are willing to work with families to resolve billing issues amicably.",
          "One thing to note is that as your child progresses through their studies, they may choose to participate in optional activities or courses that incur additional costs. It's a good idea to discuss these options with your child and the school beforehand to understand any potential financial implications. We can help you navigate these discussions and ensure that you have a clear understanding of all costs involved.",
          "These types of fees are often more nuanced at higher year levels, particularly colleges and universities. If your child is approaching such levels, we can provide more specific guidance based on the institution and program they are enrolled in.",
          "Note that not all fees are as unnecessary as they seem. For example, some schools' student union may provide extended dental/optical plans that are more affordable than private options and shows up with a generic name on the statement. We can help you identify such beneficial fees as well."
        ],
        image: ConnectImageSeven,
        id: 0
      },
      {
        question: "We had issues with our bank and our child's tuition payment was delayed. The school is now charging us late fees but we felt that was out of our control. What can we do?",
        answer: ["A more general advise is to notify the school as soon as you are aware of any potential payment delays. Many schools have policies in place to accommodate unforeseen circumstances, especially when families communicate proactively. If you can provide documentation of the bank issues, the school may be willing to waive or reduce late fees as a gesture of goodwill. It's also helpful to establish a clear payment plan moving forward to avoid similar situations in the future. We can assist you in drafting communication to the school and negotiating on your behalf if needed."],
        image: ConnectImageSeven,
        id: 1
      },
      {
        question: "Our child wants to open a credit card to build their credit history, is that a good idea?",
        answer: ["Credit cards can be a useful tool for building credit history, but they also come with risks such as high interest rates and potential debt accumulation. We recommend starting with a secured credit card or a student credit card that has lower limits and fewer fees. It's important to educate your child on responsible credit use, including paying off the balance in full each month and avoiding unnecessary purchases. We can help you and your child understand the options available and guide you through the application process.",
          "Based on our experience, many international students found the need to apply for a credit card simply because many online transactions (Amazon, Spotify, Netflix, etc.) require a credit card for payment. In such cases, a prepaid card or a virtual credit card linked to a bank account may be a safer alternative. These options allow your child to make online purchases without the risk of accumulating debt. We can help you explore these alternatives and find the best solution for your child's needs.",
        ],
        image: ConnectImageSeven,
        id: 2
      },
      {
        question: "For reasons We cannot cover our child's expenses for a few months. What options do we have to manage the situation without jeopardizing our child's studies?",
        answer: ["The exact time frame and severity of financial difficulties can vary greatly between families. In general, we recommend open communication with the school as soon as possible. Many institutions have emergency funds or payment plans available for families facing temporary financial hardships. By discussing your situation with the school's financial aid office, you may be able to arrange a payment plan that allows your child to continue their studies without interruption.",
          "Most notably, if the financial difficulty occured near the beginning of the school year, the stress will be mostly due to the large single time school fee payment as the associated interest and holds. On the other hand, if the finanicial difficulty occured later in the school year or during a break, then the stress will be mostly coming from the never-ending daily expenses. We are not saying either one is easier as they can both bite students hard: financial holds can prevent course registrations and transcripts requests, while some regular expenses such as transit fees, phone plans, and homestay fees can be unavoidable. We can help you analyze your specific situation and develop a tailored plan to manage the financial challenges effectively.",
          "Additionally, we can help you explore alternative funding options, such as scholarships, bursaries, or part-time work opportunities for your child (if they are eligible). It's important to address financial challenges proactively to minimize stress and ensure your child's academic progress remains on track. We are here to support you through this process and help you find the best solutions for your family's unique situation."
        ],
        image: ConnectImageSeven,
        id: 3
      },
      {
        question: "There are temporary holds due to delayed payments, would this affect our child's study permit or visa status?",
        answer: ["It is quite rare for financial holds to occur during peak visa/study permit application periods. However, if a hold is placed on your child's account due to delayed payments, it is important to resolve the issue promptly. Financial holds can sometimes impact a student's ability to register for courses or obtain official documents like transcripts, which may indirectly affect their study permit status. We recommend contacting the school's financial aid office immediately to understand the nature of the hold and how to resolve it.",
          "In most cases, financial holds are administrative and do not directly affect visa status. However, if a hold is placed on your child's account due to unpaid fees or other financial obligations, it is crucial to address these issues as soon as possible. Failure to do so could potentially lead to academic consequences that might indirectly impact their study permit or visa status.",
          "We can go over the specific details of your child's situation and help you communicate with the school to resolve any holds quickly. Our goal is to ensure that your child's studies continue smoothly without any unnecessary complications related to their visa or study permit."
        ],
        image: ConnectImageSeven,
        id: 4
      },
      {
        question: "My child received a scholarship but we do not understand the terms and conditions. How can we ensure we comply with all requirements?",
        answer: ["The conditions and requirements of scholarships can vary widely depending on the institution and the specific scholarship program. Common requirements may include maintaining a certain GPA, participating in extracurricular activities, or fulfilling community service hours. We recommend carefully reviewing the scholarship agreement and any accompanying documentation to understand the expectations fully.",
          "If there are any terms that are unclear, we can help you reach out to the scholarship provider for clarification. It's important to keep track of all deadlines and requirements to ensure your child remains in good standing with the scholarship program. We can also assist in setting up a monitoring system to help your child stay on top of their obligations throughout the duration of the scholarship.",
          "In practice, many families find it helpful to create a checklist or calendar of important dates and requirements related to the scholarship. This proactive approach can help prevent any misunderstandings or missed obligations. We are here to support you in navigating the scholarship process and ensuring your child benefits fully from the opportunity.",
          "Also note that the way scholarship funds are disbursed can be nuanced. Some scholarships may be applied directly to tuition fees (so you see seemingly lower tuition fees), while others may provide a lump sum payment to the student. Some shows how much funds are provided directly, some might just say 'we will cover 15% of your tuition'. Understanding how the funds will be distributed can help you plan your finances accordingly. We can help you clarify these details with the scholarship provider as well."
        ],
        image: ConnectImageSeven,
        id: 5
      },
      {
        question: "My child says their homestay family is receving a tax return. Does that mean we can get some money back too?",
        answer: ["After living for a while in Canada, your child may have witnessed their host family or even local friends stressing over tax reports and returns. While it is true that Canadian residents can file annual tax returns to potentially receive refunds on overpaid taxes, international students typically have different tax obligations. Depending on your child's income sources while studying in Canada, they may need to file a tax return, but this does not necessarily mean they will receive a refund. It's important to understand the specific tax rules that apply to international students, including any scholarships or part-time work income. We recommend consulting with a tax professional who is familiar with international student tax situations to ensure compliance and optimize any potential benefits.",
          "For similar reasons, schools may demand a SIN (Social Insurance Number) from your child during enrollment (less common for public highschools, but commonly seen for universities and some private institutions) or when they start working part-time. A SIN is required for tax reporting purposes, and having one does not automatically mean your child will owe taxes or receive refunds. It is simply a way for the government to track income and tax obligations. If your child does not plan to work or earn income in Canada, they may not need a SIN at all. We can help you understand when a SIN is necessary and guide you through the application process if needed."
        ],
        image: ConnectImageSeven,
        id: 6
      }
    ]
  },
  {
    id: 11,
    slug: 'documentation-niche',
    title: 'Specialized Documentation Support',
    featuredImage: DocsImageOne,
    isNiche: true,
    questions: [
      {
        question: "My child graduated but lost their paper diploma. Now our home country won't recognize their degree without it. What's the secret to getting replacement documents from Canadian institutions?",
        answer: ["[Real answer about registrar office relationships, notarization workarounds, and timeline management]"],
        image: DocsImageOne,
        id: 0
      },
      {
        question: "We forgot the medical records. Now my child needs surgery and the hospital wants history we don't have. Is this a deal-breaker or is there a workaround?",
        answer: ["In practice, hospitals can often work with partial records, and we have connections to help expedite gathering missing information from previous providers. Remember, Canadian hospitals are not allowed to refuse treatment simply due to incomplete records. Given Canada's rich history of international students and immigrants, many institutions have established protocols for handling such situations.",
          "You also do not need to worry about language barriers. Hospitals often have translation services available to assist non-English speaking patients. Additionally, many healthcare providers are accustomed to working with international patients and may have experience dealing with incomplete medical histories. If your child is under a health insurance plan, which is mandatory for international students, the insurance provider may also offer support in navigating these situations. In fact, some private insurance providers even held multi-lingual support as their key service feature to better serve international clients. If you wish, we can help you review your insurance policy to see what support options are available to you.",
          "There still might be a urge to fetch and send the records however possible, and while that's understandable, it's important to prioritize your child's immediate health needs. Focus on getting them the care they need first, and then work on gathering any missing documentation as a secondary step. If you can still speak to the previous healthcare provider, request any available records or summaries of care that can be shared with the new medical team. Even partial information can be helpful in guiding treatment decisions. Also contact your child (if they are able), their homestay/landlord, or even their Canadian friends, to fetch the 'key' documents first: government-issued ID, health insurance card, and any recent medical records or prescriptions (even a recent vaccination card or non emergency clinic visit records count!). These will be the most critical for immediate care. If you are unsure who to contact or are overstressing as you wait for the surgery date, please reach out to us for assistance. We have experience navigating these situations and can help guide you through the process."
        ],
        image: CareImageThree,
        id: 1
      },
      {
        question: "IRCC changed requirements AFTER we prepared everything. Are we back to square one or are there grandfathering clauses nobody talks about?",
        answer: ["Generally, IRCC does provide grandfathering clauses for applicants who have already submitted their applications or are in the process of doing so when new requirements are introduced. This means that if you have already applied under the old requirements, your application may still be processed based on those criteria. However, it's important to note that grandfathering clauses can vary depending on the specific changes made and the type of application involved. It's always best to consult directly with IRCC or a qualified immigration consultant to understand how the changes may impact your specific situation.",
          "It is also quite common for immigration-related policy changes to have a grace period during which applicants can comply with the new requirements without being penalized or even stay under the old rules. This is especially true for significant changes that may require applicants to gather new documentation or meet additional criteria. Again, the specifics can vary, so we can help you stay informed through official IRCC channels while seeking professional advice.",
          "In practice, we have found that many families are able to navigate these changes successfully by staying proactive and seeking guidance early. If you find yourself facing new requirements, don't hesitate to reach us for help."
        ],
        image: DocsImageTwo,
        id: 2
      },
      {
        question: "My child's home country status expired, but renewal requires physical presence. They can't leave Canada during studies. Is this an impossible situation?",
        answer: ["The exact severity and implications of an expired home country status can vary depending on the specific country and its regulations. In some cases, an expired status may lead to complications when trying to renew or re-enter the home country, while in others, it may not have significant immediate consequences. It's important to research the specific policies of your child's home country to understand the potential impact of an expired status. If you are uncertain, feel free to leave us a message.",
          "If it is just the passport that expired, many countries allow for passport renewal through their embassies or consulates abroad. This means your child may be able to renew their passport without having to return to their home country. Contact the nearest embassy or consulate of your child's home country in Canada to inquire about the renewal process and requirements. There also have been development in passport renewal via online applications and mail-in services for certain countries, which can be more convenient for international students. We can help researching the passport renewal options available for your child and leverage our experiences to suggest the most hastle free methods or renewal schedules that are least likely to impact your child's studies.",
        ],
        image: ConnectImageSeven,
        id: 3
      },
      {
        question: "The school says they sent the transcript but it never arrived. Now university applications are due. Who actually tracks these things down?",
        answer: ["Lost transcripts can happen for various reasons, including technical issues or miscommunication between institutions. In such cases, it's important to first confirm the status of the transcript with the sending school and then follow up with the receiving university or college. Many institutions have dedicated staff who can help track down missing documents or provide alternative solutions. If you're concerned about a specific transcript, reach out to both schools directly and ask for assistance in locating it.",
          "You may also be annoyed that it often costs money to request a final transcripts, especially when you need to send again due to unfortunate conditions. One good news is that the exact department responsible for handling transcripts are not as rigid as you may think. In our experience, many schools have staff who are willing to expedite requests or waive fees in certain situations, especially for international students facing tight deadlines. If you explain the urgency of the situation and provide any necessary documentation, they may be able to assist you more quickly and at a lower cost. We can help you draft effective communication to the schools involved to increase the chances of a favorable outcome."
        ],
        image: DocsImageOne,
        id: 4
      }
    ]
  },
  {
    id: 12,
    slug: 'student-niche',
    title: 'Student-Oriented Specialized Support',
    featuredImage: ConnectImageSeven,
    isNiche: true,
    questions: [
      {
        question: "My homestay does not allow me to lock my bedroom doors and I do not feel secure at all...",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageSeven,
        id: 0
      },
      {
        question: "I stored a lot of photos and projects on my school's Google Account/other cloud platforms and after graduating they disabled my account before I managed to create a backup. Now I felt like a part of my memory has been taken away from me...",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageSeven,
        id: 1
      },
      {
        question: "I was hanging out with my friends and they saw the personal conversations my parents sent me on my phone, I feel so embarrassed...",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageSeven,
        id: 2
      },
      {
        question: "My Youtube/other social media account was linked to my phone number back in my home country and my old phone number has been deactivated due to inactivity. Does that mean I'll lose my account permanently if something goes wrong? my saved playlists, friend lists...all can be lost...what can i do?",
        answer: ["We provide budgeting templates, compare public vs. private school costs, recommend scholarship opportunities, and suggest financial strategies for different family situations."],
        image: ConnectImageSeven,
        id: 3
      }
    ]
  }
];

export default serviceData;