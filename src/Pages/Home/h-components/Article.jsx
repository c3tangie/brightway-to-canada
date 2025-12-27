import React from 'react'
import videoFile from '../../../assets/video.mp4'

const Article = () => {
  return (
    <div className='mt-8 max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6 font-RobotoFlex text-xl leading-normal'>
      <p className="mb-6">
        Brightway to Canada is an education-focused consulting and homestay support service built around one simple belief: students succeed best when they feel supported, understood, and at home. We work closely with international students and their families to help them navigate the Canadian education system with clarity, confidence, and peace of mind.
      </p>
      <p className="mb-6">
        Choosing a school in a new country can be overwhelming. Academic programs, school culture, language environment, location, safety, and long-term pathways all matter — and every student’s situation is different. Brightway to Canada takes a personalized approach, carefully matching students with schools that align with their academic goals, personal strengths, and future aspirations. We don’t rely on one-size-fits-all recommendations; instead, we focus on what will genuinely help each student thrive.
      </p>
      {/* Video positioned in the middle with text wrapping */}
      <div className="float-right ml-6 mb-6 max-w-xl">
        <video 
          controls 
          className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="mb-6">
        Equally important is where students live. A supportive homestay environment can shape a student’s entire experience in Canada — academically, emotionally, and socially. We work with carefully selected host families who provide more than just a place to stay. Our homestays offer a welcoming household, a safe and stable environment, and daily opportunities for cultural exchange and language development. Students gain independence while still having the guidance and care they need during an important stage of their lives.
      </p>      
      
            <p className="mb-6">
        Our support extends well beyond initial placement. Brightway to Canada assists families throughout the transition process, helping them understand school expectations, daily life in Canada, and common challenges international students may face. We aim to reduce uncertainty for parents and empower students to adapt confidently to their new surroundings.
      </p>
      <p className="mb-6">
        What sets Brightway to Canada apart is our commitment to long-term success. We care not only about getting students to Canada, but about how they grow once they arrive. Whether it’s adjusting to classroom expectations, building routines, or settling comfortably into a new home and community, we are there to provide guidance and reassurance when it matters most.
      </p>
      <p>
        With a deep understanding of both international families’ concerns and the Canadian education environment, Brightway to Canada serves as a trusted bridge between home and a new beginning. We believe that with the right preparation, the right school, and the right home, students can focus on learning, personal growth, and building a strong foundation for their future.
      </p>
    </div>
  )
}

export default Article