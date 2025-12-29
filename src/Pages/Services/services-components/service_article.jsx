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
Selecting the right school is a critical decision that can shape a student’s academic and personal development. Brightway to Canada works closely with families to understand each student’s strengths, interests, and long-term goals. We provide informed guidance on suitable schools and programs within the Canadian education system, helping families make confident, well-considered choices. Our focus is on identifying learning environments where students can grow, adapt, and succeed, both academically and socially.
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
Every family’s situation is unique, which is why our services begin with a personalized consultation. This process allows us to better understand the student’s background, goals, and specific needs. By gathering relevant information early on, we are able to provide thoughtful recommendations and create a clear plan that supports a smooth and successful education journey in Canada.
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
      </div>
    </div>

    
  )
}

export default ServiceArticle