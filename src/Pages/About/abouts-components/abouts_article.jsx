import React, { useState } from 'react'
import TeamMember from './teamMember'
import teamData from './teamData'

const Abouts_Article = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Team' },
    { id: 'founder', label: 'Founders' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'employee', label: 'Team Members' }
  ]

  const filteredTeam = activeFilter === 'all' 
    ? teamData 
    : teamData.filter(member => member.category === activeFilter)

  return (
    <div className='mt-5 max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6 font-RobotoFlex'>
      
      {/* Hero Section */}
      <section className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 py-14'>
          Meet Our Brightway Team
        </h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
          We're a passionate group of innovators, creators, and problem-solvers 
          dedicated to building amazing solutions for your journey to Canada.
        </p>
      </section>

      {/* Company Story */}
      <section className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
          Our Story
        </h2>
        <div className='space-y-6 text-gray-700 max-w-4xl mx-auto'>
          <p className='text-lg leading-relaxed'>
            Brightway to Canada was founded with a simple yet powerful vision: 
            to make the Canadian dream accessible to everyone. What started as 
            a small consultancy has grown into a comprehensive immigration 
            services provider, helping thousands of individuals and families 
            successfully navigate their path to Canada.
          </p>
          <p className='text-lg leading-relaxed'>
            Our team combines decades of immigration law expertise with 
            cutting-edge technology to provide personalized, efficient, 
            and successful immigration solutions. We believe in building 
            lasting relationships with our clients, guiding them through 
            every step of their journey.
          </p>
        </div>
      </section>

      {/* Team Filter */}
      <section className='mb-12'>
        <div className='flex flex-wrap justify-center gap-3'>
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className='mb-20'>
        <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>
          Our Team
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredTeam.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 mb-16 text-white'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <h3 className='text-4xl font-bold mb-2'>5000+</h3>
            <p className='text-blue-100'>Successful Cases</p>
          </div>
          <div className='text-center'>
            <h3 className='text-4xl font-bold mb-2'>98%</h3>
            <p className='text-blue-100'>Success Rate</p>
          </div>
          <div className='text-center'>
            <h3 className='text-4xl font-bold mb-2'>15+</h3>
            <p className='text-blue-100'>Years Experience</p>
          </div>
          <div className='text-center'>
            <h3 className='text-4xl font-bold mb-2'>24/7</h3>
            <p className='text-blue-100'>Client Support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='text-center mb-12'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>
          Ready to Start Your Journey?
        </h2>
        <p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
          Our team is here to guide you through every step of your 
          immigration process. Contact us today for a free consultation.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <a 
            href="/contact" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
          >
            Contact Us
          </a>
          <a 
            href="/services" 
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-semibold"
          >
            Our Services
          </a>
        </div>
      </section>

    </div>
  )
}

export default Abouts_Article
