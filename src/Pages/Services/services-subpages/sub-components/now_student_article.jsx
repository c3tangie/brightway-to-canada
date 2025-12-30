import React from 'react'
import Logo from "../../../../assets/logo.png"

const Now_Student_Article = () => {
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
        
    </div>
  )
}

export default Now_Student_Article