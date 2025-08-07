import React from 'react'
import Logo from "../../../assets/logo.png"

const Cs_Article = () => {
  return (
    <div className='mt-5 ml-64 mr-64 font-RobotoFlex text-center text-xl'>
        
        <p>
            [Placeholder for Current Students Article]
        </p>

        <p>
            In order to be qualified for a study permit you need to be enrolled in one of Canada's <a className="text-blue-600 underline" href='https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html'>DLI (Designated Learning Institutions)
            </a>
        </p>

        <div className='flex space-x-24 md:space-y-0 justify-center py-20'>

          <div className="imgcontainer">
            <img src={Logo} alt="Notebook" style={{"width":"100%"}}></img>
            <div className="imgcontent">
              <h1>Content 1</h1>
              <p>Content 1 Placeholder</p>
            </div>
            
          </div>
          <div class="imgcontainer">
            <img src={Logo} alt="Notebook" style={{"width":"100%"}}></img>
            <div class="imgcontent">
              <h1>Content 2</h1>
              <p>Content 2 Placeholder</p>
            </div>
            
          </div>
          <div class="imgcontainer">
            <img src={Logo} alt="Notebook" style={{"width":"100%"}}></img>
            <div class="imgcontent">
              <h1>Content 3</h1>
              <p>Content 3 Placeholder</p>
            </div>
            
          </div>
          
        </div>

        {/* <ul className='text-left text-5xl font-medium py-5 leading-loose'>
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
        </ul> */}
        
    </div>
  )
}

export default Cs_Article