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
          
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              我的孩子12/13/15岁, 在国内时成绩很普通, 你们如何制定有效方案, 让她学业有成？
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              我的孩子今年初中毕业，在国内时成绩很普通，想来加拿大上高中，你们如何制定有效方案，让我的孩子能上一个比较好的大学？
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              我的孩子年纪这么小，在心理和身体上都不成熟，你们会如何帮助孩子克服压力和心理问题？
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              我们孩子在国内高中都是填鸭式教育方式，到了那里学生没有严格管理，孩子成绩下降怎么办？
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              加拿大如何保障我未成年孩子的安全？
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              加拿大初高中学习费用如何计划最划算？
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              孩子从国内转到加拿大读书，除了国内英语学习，还需要哪些英语培培训？
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              孩子出国前要打哪些疫苗？在哪里打？
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              孩子出国前要要准备哪些法律材料？
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              当我们和孩子飞机落地加拿大第一个月我们将如何开始新的学习和生活？
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              我们觉得国内读书太卷，听说国外学习比较轻松，所以我们想出去读书
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              孩子到了国外一切都会变好，比如心情会好起来，成绩会好起来，人生也会好起来...真的是这样吗？
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              女孩子到了国外，在情感上产生困惑的可能性增大，如何避免出现情感问题而影响生活和学习？
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              虽然留学生都是同龄人，但是中国的小留学生如果没有人为帮助，很难“融入”当地学生群体，该怎么办？
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              孩子上中学出去合适还是高中毕业出去留学合适？
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              留学孩子的学业规划分哪四个层次？
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              孩子出国留学后，家长需要做哪些事请帮助孩子？
            </a>
            
            <a 
              href="#/services/graduating-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              小留学生的是住寄宿家庭好还是住学校集体宿舍好？学校和你们如何保持与每一个孩子的联系？
            </a>

            <a 
              href="#/services/prospective-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              如果孩子在留学过程中发生突发事件，他们该去找谁？
            </a>
            
            <a 
              href="#/services/current-students"
              className="bg-gray-100 hover:bg-blue-50 text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md"
            >
              孩子生病了，怎么办？留学生在医疗上有什么政策吗？
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceArticle