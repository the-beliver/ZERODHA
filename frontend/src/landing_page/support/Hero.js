import React from 'react';

function Hero() {
    return ( 
       <section className='container-fluid' id='supportHero'>
        <div className='p-3 ' id='supportWrapper'>
           <h4>Support Portal</h4>
           <a href=''>Track Ticket</a>
        </div>
         <div className='row p-3' id='supportInfo'>
          <div className='col-6 p-5'>
            <h1 className='fs-3'>Search for an answer or browser help topics to create a ticket</h1>
            <input className='mb-3' placeholder='Eg: how do i activate F&O'/> <br/>
            <a href='#' style={{fontSize:"18px"}}>Track account opening</a> &nbsp;
            <a href='#' style={{fontSize:"18px"}}>Track segment activation</a> &nbsp;
            <a href='#' style={{fontSize:"18px"}}>Intraday margins</a> &nbsp;
            <a href='#' style={{fontSize:"18px"}}>Kite user manual</a> &nbsp;
          </div>
          <div className='col-6 p-5' id='features'>
                <h1 className='fs-3'>featured</h1>
                <ol style={{lineHeight:'2.2'}}>
                    <li> <a href='#'>Current Takeover and Delisting - january 2024</a></li>
                    <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
                </ol>
          </div>
         
        </div>
       </section>
     );
}

export default Hero;