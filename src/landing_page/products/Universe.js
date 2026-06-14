import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platform</p>

                <div className='col-4 mb-4 mt-5'>
                    <img src='media/smallcaseLogo.png'/>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                 <div className='col-4 mt-5'>
                    <img src='media/streakLogo.png' style={{width:"40%"}}/>
                    <p className='text-small text-muted'>Algo & Strategy platform</p>
                </div>
                 <div className='col-4 mt-5'>
                    <img src='media/sensibullLogo.svg' style={{width:"40%"}}/>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>

                <div className='col-4  mt-5'>
                    <img src='media/zerodhaFundhouse.png' style={{width:"40%"}}/>
                    <p className='text-small text-muted'>Asset Management</p>
                </div>
                 <div className='col-4  mt-5'>
                    <img src='media/goldenpiLogo.png' style={{width:"40%"}}/>
                    <p className='text-small text-muted'>Bonds Trading platform</p>
                </div>
                 <div className='col-4  mt-5'>
                    <img src='media/dittoLogo.png' style={{width:"40%"}}/>
                    <p className='text-small text-muted'>Insurance</p>
                </div>

                <div className='mt-4'>
                    <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up now</button>
                </div>

            </div>
        </div>
     );
}

export default Universe;