import React from 'react';

function Hero() {
    return ( 
       <div className='container mb-5 border-bottom mt-5'>
        <div className='row text-center mt-5 p-3 mb-5'>
            <h1>Technology</h1>
            <h3 className='text-muted mt-3 fs-4'>Sleek, modern and intitutive trading platform</h3>
            <p className='mt-3'>
                check out our{" "}
                 <a style={{textDecoration:"none"}}>investment offering{" "}
                 <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </p>

        </div>
       </div>
     );
}

export default Hero;