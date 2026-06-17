import React from 'react';

function Hero() {
    return ( 
       <div className='container'>
        <div className='row p-5 mt-5 border-bottom text-center'>
            <h1>Pricing</h1>
            <h3 className='text-muted mt-3 fs-5'>free equity investment and flat <i class="fa fs-5 fa-inr" aria-hidden="true"></i> 20 trategy and F&O trades</h3>
        </div>
        <div className='row p-5 text-center'>
            <div className='col-4 p-5'>
                <img src='media/pricingEquity.svg'/>
                <h1  className='fs-2'>Free equity delivery</h1>
                <p className='text-muted'>All equity delivery investment (NSE, BSE), are absolutely free - <i class="fa fs-7 fa-inr" aria-hidden="true"></i> 0 brokerage.</p>
            </div>
            <div className='col-4 p-5'>
                <img src='media/intradayTrades.svg'/>
                <h1 className='fs-2'>Intraday an F&O</h1>
                <p className='text-muted'>
                    Flat RS.20 or 0.03%(whether is lower) per executed order on intraday
                    trades across equity, currency, and commodity trades.  
                </p>
            </div>
            <div className='col-4 p-5'>
                <img src='media/pricingEquity.svg'/>
                <h1  className='fs-2'>Free equity delivery</h1>
                <p className='text-muted'>
                    All direct mutual funds investments are absolutely free - <i class="fa fs-7 fa-inr" aria-hidden="true"></i>0commission and DP charges
                </p>
            </div>
        </div>
       </div>
     );
}

export default Hero;