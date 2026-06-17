import React from 'react';

function Education() {
    return ( 
        <div className='container mb-5'>
          <div className='row'>
            <div className='col-6'>
              <img src='media/education.svg' alt='education' style={{width:"85%"}}/>
            </div>

            <div className='col-6'> 
              <div className='col mt-5'>

                <div className='row'>
                  <h1 className='mb-4 fs-2 mt-4'>Free and open market education</h1>
                  <p>Varsity, the largest stock market eduacation book in the world covering everything from the basic to advance trading </p>
                  <a  style={{textDecoration:"none"}} href=''>Versity  <i class="fa fa-long-arrow-right mb-3" aria-hidden="true"></i></a>
                </div>
                <div className='row'>
                  
                  <p>Trading Q&A, the most active trading and investing community in india for all your market releted queries</p>
                  <a  style={{textDecoration:"none"}} href=''> Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
              </div>
              
            </div>
           
            
          </div>
       </div>
     );
}

export default Education;