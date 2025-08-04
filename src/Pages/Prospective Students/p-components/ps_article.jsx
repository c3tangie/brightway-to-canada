import React, { useState } from 'react'

const Ps_Article = () => {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  const dropdownContent = {
    0: "You must first receive a letter of acceptance from a Designated Learning Institution (DLI) in Canada. This letter confirms that you have been accepted into a program of study. Make sure the institution is on the official DLI list and that your program is eligible for a study permit.",
    1: "You need to demonstrate that you have enough money to pay for your tuition fees, living expenses, and return transportation. The amount varies by province, but generally includes tuition fees plus at least $10,000-$12,000 CAD for living expenses per year.",
    2: "Depending on your program and country of origin, you may need to prove your English or French language proficiency through tests like IELTS, TOEFL, TEF, or other accepted language tests. Check with your institution for specific requirements.",
    3: "Submit all required documents including your letter of acceptance, proof of funds, language test results, passport, photographs, and any additional documents requested. Ensure all forms are completed accurately and submitted before the deadline."
  }

  return (
    <div className='mt-5 ml-64 mr-64 font-RobotoFlex text-center text-xl'>
        
        <p>
            [Placeholder for Prospective Students Article]
        </p>

        <p>
            In order to be qualified for a study permit you need to be enrolled in one of Canada's <a className="text-blue-600 underline" href='https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html'>DLI (Designated Learning Institutions)
            </a>
        </p>

        <ul className='text-left text-5xl font-medium py-5 leading-loose'>
          <li>
            <button 
              onClick={() => toggleDropdown(0)}
              className="w-full text-left hover:text-blue-600 transition-colors duration-200 focus:outline-none"
            >
              1. Be accepted by a DLI
            </button>
            {openDropdown === 0 && (
              <div className="mt-4 p-6 bg-gray-50 rounded-lg text-lg font-normal leading-relaxed">
                {dropdownContent[0]}
              </div>
            )}
          </li>
          <li>
            <button 
              onClick={() => toggleDropdown(1)}
              className="w-full text-left hover:text-blue-600 transition-colors duration-200 focus:outline-none"
            >
              2. Provide proof of sufficient funds
            </button>
            {openDropdown === 1 && (
              <div className="mt-4 p-6 bg-gray-50 rounded-lg text-lg font-normal leading-relaxed">
                {dropdownContent[1]}
              </div>
            )}
          </li>
          <li>
            <button 
              onClick={() => toggleDropdown(2)}
              className="w-full text-left hover:text-blue-600 transition-colors duration-200 focus:outline-none"
            >
              3. Meet the language requirements
            </button>
            {openDropdown === 2 && (
              <div className="mt-4 p-6 bg-gray-50 rounded-lg text-lg font-normal leading-relaxed">
                {dropdownContent[2]}
              </div>
            )}
          </li>
          <li>
            <button 
              onClick={() => toggleDropdown(3)}
              className="w-full text-left hover:text-blue-600 transition-colors duration-200 focus:outline-none"
            >
              4. Submit a complete application
            </button>
            {openDropdown === 3 && (
              <div className="mt-4 p-6 bg-gray-50 rounded-lg text-lg font-normal leading-relaxed">
                {dropdownContent[3]}
              </div>
            )}
          </li>
        </ul>
        
    </div>
  )
}

export default Ps_Article