import React from 'react'   

const ServiceArticle = () => {
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
          <a 
            href="#/consultation" 
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Consultation
          </a>
        </div>

        {/* Quick Info Buttons Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            As A Student, You May Be Thinking About:
          </h3>
          
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              Where the heck do i even begin?
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              Now that I'm here, what next?
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              The diploma is in my hand, what now?
            </a>
          </div>
        </div>

        {/* Hooking Questions Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            As A Parent, You May Be Wondering:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              My children are 12/13/15 years old and had average grades in China. How can you develop an effective plan to ensure their academic success?
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              My child just graduated from junior high in China with average grades and wants to attend high school in Canada. How can you develop an effective plan to help my child get into a relatively good university?
            </a>
            
            {/* LOW RISK */}
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              My child is so young and not yet mature physically or mentally. How will you help them cope with stress and psychological issues?
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              My child is used to the 'cramming' teaching style in Chinese high schools. If there is less strict management there and my child's grades drop, what then?
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              How does Canada ensure the safety of my underage child?
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              What is the most cost-effective way to plan for Canadian junior high/high school study expenses?
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              Besides English studies in China, what other English training will my child need when transferring to study in Canada?
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              Which vaccines does my child need before going abroad? Where can they get them?
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              What legal documents need to be prepared before my child goes abroad?
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              How will my child and I begin our new study and life in the first month after landing in Canada?
            </a>
            
            {/* MEDIUM RISK */}
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              We think studying in China is too intense and competitive. We hear studying abroad is easier, so we want to go study abroad...
            </a>
            
            {/* MEDIUM RISK */}
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              Will everything become better once my child goes abroad? For example, will their mood improve, will their grades improve, will their life get better... Is that really true?
            </a>

            {/* HIGH RISK */}
            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              For girls going abroad, the likelihood of experiencing emotional confusion increases. How to avoid emotional issues affecting life and studies?
            </a>
            
            {/* MEDIUM RISK */}
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              Although international students are peers, young Chinese students studying abroad may find it difficult to 'integrate' into local student groups without help. What should be done?
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              Is it better for children to go abroad during middle school or after graduating from high school?
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              What are the four levels of academic planning for children studying abroad?
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              What should parents do to help their children after they go abroad to study?
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              Is it better for young international students to live in a homestay or in a school dormitory? How does the school and your organization maintain contact with each child?
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              If an emergency occurs during my child's studies abroad, who should they contact?
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              What if my child gets sick? What policies are there regarding healthcare for international students?
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceArticle