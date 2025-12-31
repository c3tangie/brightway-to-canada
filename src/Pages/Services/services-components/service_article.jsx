import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import

const ServiceArticle = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  // Update to use service slugs instead of general links
  const parentQuestions = {
    "Academic Planning & School Selection": [
      { text: "My children are 12/13/15 years old and had average grades in China. How can you develop an effective plan to ensure their academic success?", serviceSlug: "academic-planning-school-selection", questionIndex: 0 },
      { text: "My child just graduated from junior high in China with average grades and wants to attend high school in Canada. How can you develop an effective plan to help my child get into a relatively good university?", serviceSlug: "academic-planning-school-selection", questionIndex: 1 },
      { text: "My child is used to the 'cramming' teaching style in Chinese high schools. If there is less strict management there and my child's grades drop, what then?", serviceSlug: "academic-planning-school-selection", questionIndex: 2 },
      { text: "Besides English studies in China, what other English training will my child need when transferring to study in Canada?", serviceSlug: "academic-planning-school-selection", questionIndex: 3 },
      { text: "What are the four levels of academic planning for children studying abroad?", serviceSlug: "academic-planning-school-selection", questionIndex: 4 },
      { text: "Is it better for children to go abroad during middle school or after graduating from high school?", serviceSlug: "academic-planning-school-selection", questionIndex: 5 }
    ],
    "Well-being, Safety & Daily Life": [
      { text: "How does Canada ensure the safety of my underage child?", serviceSlug: "wellbeing-safety-daily-life", questionIndex: 0 },
      { text: "What if my child gets sick? What policies are there regarding healthcare for international students?", serviceSlug: "wellbeing-safety-daily-life", questionIndex: 1 },
      { text: "Which vaccines does my child need before going abroad? Where can they get them?", serviceSlug: "wellbeing-safety-daily-life", questionIndex: 2 },
      { text: "What legal documents need to be prepared before my child goes abroad?", serviceSlug: "wellbeing-safety-daily-life", questionIndex: 3 },
      { text: "If an emergency occurs during my child's studies abroad, who should they contact?", serviceSlug: "wellbeing-safety-daily-life", questionIndex: 4 },
      { text: "Is it better for young international students to live in a homestay or in a school dormitory? How does the school and your organization maintain contact with each child?", serviceSlug: "wellbeing-safety-daily-life", questionIndex: 5 },
      { text: "My child is so young and not yet mature physically or mentally. How will you help them cope with stress and psychological issues?", serviceSlug: "wellbeing-safety-daily-life", questionIndex: 6 }
    ],
    "Social & Emotional Adaptation": [
      { text: "Although international students are peers, young Chinese students studying abroad may find it difficult to 'integrate' into local student groups without help. What should be done?", serviceSlug: "social-emotional-adaptation", questionIndex: 0 },
      { text: "Will everything become better once my child goes abroad? For example, will their mood improve, will their grades improve, will their life get better... Is that really true?", serviceSlug: "social-emotional-adaptation", questionIndex: 1 },
      { text: "For girls going abroad, the likelihood of experiencing emotional confusion increases. How to avoid emotional issues affecting life and studies?", serviceSlug: "social-emotional-adaptation", questionIndex: 2 },
      { text: "We think studying in China is too intense and competitive. We hear studying abroad is easier, so we want to go study abroad...", serviceSlug: "social-emotional-adaptation", questionIndex: 3 },
      { text: "How will my child and I begin our new study and life in the first month after landing in Canada?", serviceSlug: "social-emotional-adaptation", questionIndex: 4 },
      { text: "What should parents do to help their children after they go abroad to study?", serviceSlug: "social-emotional-adaptation", questionIndex: 5 }
    ],
    "Financial & Practical Preparation": [
      { text: "What is the most cost-effective way to plan for Canadian junior high/high school study expenses?", serviceSlug: "financial-practical-preparation", questionIndex: 0 },
      { text: "What legal documents need to be prepared before my child goes abroad?", serviceSlug: "financial-practical-preparation", questionIndex: 1 },
      { text: "Which vaccines does my child need before going abroad? Where can they get them?", serviceSlug: "financial-practical-preparation", questionIndex: 2 },
      { text: "What if my child gets sick? What policies are there regarding healthcare for international students?", serviceSlug: "financial-practical-preparation", questionIndex: 3 }
    ]
  };

  const studentQuestions = [
    { text: "Where the heck do i even begin?", link: "/services/prospective-students" },
    { text: "Now that I'm here, what next?", link: "/services/current-students" },
    { text: "The diploma is in my hand, what now?", link: "/services/graduating-students" }
  ];

  return (
    <div className='max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6 font-RobotoFlex py-16'>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Professional Immigration Services
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At Brightway to Canada, we provide comprehensive immigration and education consulting services 
          to help you navigate your journey to Canada with confidence and success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Student Visa Services</h3>
          <p className="text-gray-600">Complete assistance with study permit applications, school selection, and academic planning.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Immigration Consulting</h3>
          <p className="text-gray-600">Expert guidance through various immigration programs and pathways to Canadian residency.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Documentation Support</h3>
          <p className="text-gray-600">Professional assistance with preparing and reviewing all required immigration documents.</p>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4"> 
            School Selection & Education Planning
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Selecting the right school is a critical decision that can shape a student's academic and personal development. Brightway to Canada works closely with families to understand each student's strengths, interests, and long-term goals. We provide informed guidance on suitable schools and programs within the Canadian education system, helping families make confident, well-considered choices. Our focus is on identifying learning environments where students can grow, adapt, and succeed, both academically and socially.
        </p><br></br>
        
        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4"> 
            Homestay Placement and Support
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          A supportive home environment is essential for students studying abroad. Brightway to Canada carefully places students with welcoming homestay families who provide a safe, stable, and nurturing living experience. We emphasize compatibility between students and host families, taking into account lifestyle, routines, and individual needs. Beyond placement, we remain actively involved to ensure students feel comfortable, supported, and cared for throughout their stay.
        </p><br></br>
        
        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4"> 
            Arrival Settlement and Support
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Transitioning to a new country can be overwhelming, especially during the initial adjustment period. Brightway to Canada supports students as they adapt to daily life in Canada, helping them understand local customs, school expectations, and everyday routines. Our guidance is designed to ease uncertainty, build confidence, and help students establish a sense of belonging in their new environment.
        </p><br></br>
        
        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4"> 
            Ongoing Guidance and Family Communication
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Brightway to Canada believes that ongoing support is just as important as initial planning. We maintain open communication with families and provide continued guidance as students progress through their studies. Whether addressing academic challenges, adjustment concerns, or general questions, we strive to offer timely support and reassurance, ensuring both students and parents feel informed and supported throughout the experience.
        </p><br></br>
        
        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4"> 
            Consultation and Personalized Planning
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Every family's situation is unique, which is why our services begin with a personalized consultation. This process allows us to better understand the student's background, goals, and specific needs. By gathering relevant information early on, we are able to provide thoughtful recommendations and create a clear plan that supports a smooth and successful education journey in Canada.
        </p><br></br>
        
        {/* Book Consultation Button */}
        <div className="mt-12">
          <Link 
            to="/consultation" 
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Student Questions Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            As A Student, You May Be Thinking About:
          </h3>
          
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {studentQuestions.map((question, index) => (
              <Link 
                key={index}
                to={question.link}
                className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
              >
                {question.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Parent Questions Section with Dropdown Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            As A Parent, You May Be Wondering:
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {Object.entries(parentQuestions).map(([category, questions], index) => (
              <div key={index} className="border border-blue-200 rounded-lg overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 text-lg text-left flex justify-between items-center transition-colors duration-300"
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
                    {questions.map((question, qIndex) => (
                      <Link
                        key={qIndex}
                        to={`/service/${question.serviceSlug}?q=${question.questionIndex}`}
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