import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import serviceData from './serviceData';

// Component for cycling questions with fade transition
const CyclingQuestions = ({ categoryId, questions, intervalTime = 3000, serviceSlug }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setFade(false);
      
      // Change question after fade completes
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === questions.length - 1 ? 0 : prevIndex + 1
        );
        // Start fade in
        setFade(true);
      }, 300);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [questions.length, intervalTime]);

  // Shuffle questions initially for random order
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  
  useEffect(() => {
    // Shuffle the questions array
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, [questions]);

  if (shuffledQuestions.length === 0) return null;

  // Get current question and its ID
  const currentQuestion = shuffledQuestions[currentIndex];
  const questionId = currentQuestion.id;

  return (
    <div>
      <div className="mt-6 mb-8 min-h-[160px] md:min-h-[140px] lg:min-h-[120px] flex flex-col justify-center">
        <div className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
            <p className="text-white text-lg font-medium italic text-center leading-relaxed line-clamp-4">
              "{currentQuestion.question}"
            </p>
          </div>
        </div>
        
      </div>
      <div className="text-center mt-4">
        <Link 
          to={`/service/${serviceSlug}?q=${currentQuestion.id}`} // Use ID, not originalIndex
          className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg text-base transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Get Answer to This Question
        </Link>
      </div>
    </div>
  );
};

const ServiceArticle = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  // Now fetches info and updates accordingly
  const parentQuestions = {};
  serviceData.forEach(service => {
    parentQuestions[service.title] = service.questions.map(question => ({
      text: question.question,
      serviceSlug: service.slug,
      questionId: question.id
    }));
  });

  const targetedQuestions = {};
  serviceData.forEach(service => {
    // Check if service has isNiche attribute and it's set to true
    if (service.isNiche === true) {
      parentQuestions[service.title] = service.questions.map(question => ({
        text: question.question,
        serviceSlug: service.slug,
        questionId: question.id
      }));
    }
  });

  // Extract niche services
  const academicNicheService = serviceData.find(service => service.slug === 'academic-niche');
  const wellbeingNicheService = serviceData.find(service => service.slug === 'well-being-niche');
  const emotionalSocialNicheService = serviceData.find(service => service.slug === 'emotional-social-niche');

  // Extract questions for each section
  const wellbeingNicheQuestions = wellbeingNicheService?.questions || [];
  const emotionalSocialNicheQuestions = emotionalSocialNicheService?.questions || [];
  const academicNicheQuestions = academicNicheService?.questions || [];

  // Financial questions for dropdown
  const financialQuestions = serviceData
    .find(service => service.slug === 'financial-practical-preparation')
    ?.questions.map(q => q.question) || [];

  const studentQuestions = [
    { text: "Where the heck do i even begin?", link: "/services/prospective-students" },
    { text: "Now that I'm here, what next?", link: "/services/current-students" },
    { text: "The diploma is in my hand, what now?", link: "/services/graduating-students" }
  ];

  return (
    <div className='max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6 font-RobotoFlex py-16'>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Personalized Support Backed By Real Experience
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Our company's strength lies in its deeply rooted expertise. The founder brings years of firsthand experience, not only as a homestay host but also from working within a BC School District. This insider perspective is amplified by our team, many of whom are former international students or have served as instructors in BC schools. We leverage this unique background to expertly place students in supportive living environments, from nurturing homestays to structured boarding, and provide unparalleled guidance to help adolescents navigate cultural transitions, ensuring their academic, social, and emotional well-being.
        </p>
      </div>

      {/* Horizontal Sections with Backgrounds */}
      <div className="space-y-8 mb-16">
        {/* Section 1 - Wellbeing & Safety */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-navy-600 opacity-90"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Safety & Well-Being Questions You Won't Find Elsewhere</h3>
              
              {/* Cycling Questions Preview - NICHE ONLY */}
              <div className="my-6">
                <h4 className="text-white text-xl font-semibold mb-2 text-center">Specific Well-being & Safety Questions:</h4>
                <CyclingQuestions 
                  categoryId="wellbeing-niche"
                  questions={wellbeingNicheQuestions}
                  intervalTime={8900}
                  serviceSlug="well-being-niche"
                />
              </div>
              
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                To study in Canada is to live in Canada. We understand that academic success is deeply intertwined with a student's ability to adapt to and thrive within their new cultural environment. Our approach goes beyond mere academic placement; we focus on holistic lifestyle integration. By fostering connections within the community, encouraging participation in local activities, and providing ongoing support, we help students build a fulfilling life abroad. This comprehensive support system ensures that students not only excel academically but also develop the social and emotional skills necessary for long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 - Emotional Support */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-600 to-slate-700 opacity-90"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Emotional Challenges Others Don't Address</h3>
              
              {/* Cycling Questions Preview - NICHE ONLY */}
              <div className="my-6">
                <h4 className="text-white text-xl font-semibold mb-2 text-center">Specific Emotional & Social Questions:</h4>
                <CyclingQuestions 
                  categoryId="emotional-niche"
                  questions={emotionalSocialNicheQuestions}
                  intervalTime={9000}
                  serviceSlug="emotional-social-niche"
                />
              </div>
              
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                We believe that every child is unique and strong, yet we also recognize that they are still growing and may experience mental challenges, the ones their parents would like to overcome by their side yet cannot. Some of our staffs even experienced this first-hand. That's why we...
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 - Academic Planning */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-navy-600 opacity-90"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Academic Nuances Most Companies Miss</h3>
              
              {/* Cycling Questions Preview - NICHE ONLY */}
              <div className="my-6">
                <h4 className="text-white text-xl font-semibold mb-2 text-center">Specific Academic Planning Questions:</h4>
                <CyclingQuestions 
                  categoryId="academic-niche"
                  questions={academicNicheQuestions}
                  intervalTime={9100}
                  serviceSlug="academic-niche"
                />
              </div>
              
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                We understand and emphasize both the student's and the parent's ambitions, struggles, and concerns. Therefore, we...
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-4"> 
            School Selection & Education Planning
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed">
          Selecting the right school is a critical decision that can shape a student's academic and personal development. Brightway to Canada works closely with families to understand each student's strengths, interests, and long-term goals. We provide informed guidance on suitable schools and programs within the Canadian education system, helping families make confident, well-considered choices. Our focus is on identifying learning environments where students can grow, adapt, and succeed, both academically and socially.
        </p><br></br>
        
        <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-4"> 
            Homestay Placement and Support
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed">
          A supportive home environment is essential for students studying abroad. Brightway to Canada carefully places students with welcoming homestay families who provide a safe, stable, and nurturing living experience. We emphasize compatibility between students and host families, taking into account lifestyle, routines, and individual needs. Beyond placement, we remain actively involved to ensure students feel comfortable, supported, and cared for throughout their stay.
        </p><br></br>
        
        <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-4"> 
            Arrival Settlement and Support
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed">
          Transitioning to a new country can be overwhelming, especially during the initial adjustment period. Brightway to Canada supports students as they adapt to daily life in Canada, helping them understand local customs, school expectations, and everyday routines. Our guidance is designed to ease uncertainty, build confidence, and help students establish a sense of belonging in their new environment.
        </p><br></br>
        
        <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-4"> 
            Ongoing Guidance and Family Communication
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed">
          Brightway to Canada believes that ongoing support is just as important as initial planning. We maintain open communication with families and provide continued guidance as students progress through their studies. Whether addressing academic challenges, adjustment concerns, or general questions, we strive to offer timely support and reassurance, ensuring both students and parents feel informed and supported throughout the experience.
        </p><br></br>
        
        <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-4"> 
          Consultation and Personalized Planning
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed">
          Every family's situation is unique, which is why our services begin with a personalized consultation. This process allows us to better understand the student's background, goals, and specific needs. By gathering relevant information early on, we are able to provide thoughtful recommendations and create a clear plan that supports a smooth and successful education journey in Canada.
        </p><br></br>
        
        {/* Book Consultation Button */}
        <div className="mt-12">
          <Link 
            to="/consultation" 
            className="inline-block bg-navy-600 hover:bg-navy-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Link to view all services */}
        <div className="mt-8 text-center">
          <Link 
            to="/service-list" 
            className="inline-block bg-navy-600 hover:bg-navy-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Service Categories
          </Link>
        </div>

        {/* Parent Questions Section with Dropdown Categories */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            As a parent, you may be wondering:
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {Object.entries(parentQuestions).map(([category, questions], index) => (
              <div key={index} className="border border-blue-200 rounded-lg overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full bg-navy-600 hover:bg-navy-700 text-white font-semibold py-4 px-6 text-lg text-left flex justify-between items-center transition-colors duration-300"
                >
                  <span>{category}</span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-300 ${openCategory === category ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* Questions Dropdown */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openCategory === category ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-4 bg-blue-50 space-y-3">
                    {questions.map((question) => (
                      <Link
                        key={question.questionId} // Use questionId
                        to={`/service/${question.serviceSlug}?q=${question.questionId}`} // Use questionId
                        className="block bg-white hover:bg-blue-100 text-blue-900 font-medium py-3 px-4 rounded-lg text-base transition-all duration-300 border border-blue-100 hover:border-blue-300 hover:shadow-sm"
                      >
                        {question.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceArticle;