import React from 'react';

function Awards() {
    return ( 
     <div className='container mb-5'>
        <div className='row'>    

          {/* left part  */}
            <div className='col-6 p-5'>
              <img src='media/largestBroker.svg'/>
            </div>

            {/* right part */}
            <div className='col-6 p-5 mt-3'>
              <h1>Largest Stock Broker In India</h1>
              <p className='mb-5 mt-4 fs-5'> 2+ million Zerodha clients to over 15% of all retail order volumes in india daily by trading and investing in: </p>
                {/* text divide */}
                <div className='row'>
                  <div className='col-6'>
                    <ul>
                      <li>Future and Options</li>
                      <li>Community derivatives</li>
                      <li>Currency derivatives</li>
                    </ul>
                  </div>
                  <div className='col-6'>
                    <ul>
                      <li>Stocks and IPOs</li>
                      <li>Direct mutual funds</li>
                      <li>Bonds and Govt. Securities</li>
                    </ul>
                  </div>
                </div>
                <img src='media/pressLogos.png' style={{width:"80%"}}/>
            </div>
      
    </div>
  </div>
     );
}

export default Awards;