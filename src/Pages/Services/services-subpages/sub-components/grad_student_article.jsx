import React, { useEffect } from 'react'

const Grad_Student_Article = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []); // Empty dependency array means it runs only once on mount
  
  return (
    <div className='mt-5 ml-64 mr-64 font-RobotoFlex text-center text-xl'>
        
        <p>
            [Placeholder for Graduating Students Article]
        </p>

        <p>
            In order to be qualified for a post-graduation work permit (PGWP) you need to be enrolled in one of Canada's<a href='https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html' className="text-blue-600 underline"> DLI (Designated Learning Institutions) </a>
        </p>
        
    </div>
  )
}

export default Grad_Student_Article