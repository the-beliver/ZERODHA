import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 p-3'>
            <div className='row'p-5>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>

                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crores Customer Trust Zerodha with 2.5+ lack crore worth of equity investments.</p>

                    <h2 className='fs-4'>No spams or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification". or annoying push notifications. Hight equity app that you use in you space, the way you like.</p>

                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just app but whole ecosystem. Our investments in 30+ fintech startup offer you toilered service specific to your needs</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>with intitative Nudge and Kill switch, we dont just facilitate transaction, but but actively help you do better with your money</p>

                </div>


                <div className='col-6 p-5'>
                    <img src='media/ecosystem.png' style={{width:"90%"}}/>
                    <div className='text-center'>
                        <a className='mx-5' style={{textDecoration:"none"}} href=''>Explore our Products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a  style={{textDecoration:"none"}} href=''>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Stats;