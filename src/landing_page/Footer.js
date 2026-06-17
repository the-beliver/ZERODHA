import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"#f4f0f0"}}>
       <div className='container border-top mt-5'>
        <div className='row mt-5'>
            <div className='col-3'>
                <img src='media/logo.svg' style={{width:"50%"}}/> <br/>
                <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd.
                     All rights reserved.</p>
            </div>
            <div className='col-3'>
                <p>company</p>
                <a href='#'>About</a> <br/>
                <a href='#'>Products</a> <br/>
                <a href='#'>Pricing</a> <br/>
                <a href='#'>Referral programme</a> <br/>
                <a href='#'>Careers</a> <br/>
                <a href='#'>Zerodha.tech</a> <br/>
                <a href='#'>Press & media</a> <br/>
                <a href='#'>Zerodha cares (CSR)</a> <br/>
            </div>
            <div className='col-3'>
                <p>Support</p>
                <a href='#'>Contact</a> <br/>
                <a href='#'>Support portal</a> <br/>
                <a href='#'>Z-Connect blog</a> <br/>
                <a href='#'>List of charges</a> <br/>
                <a href='#'>Downloads & resources</a> <br/>
            </div>
            <div className='col-3'>
                <p>Account</p>
                <a href='#'>Open an account</a> <br/>
                <a href='#'>Fund transfer</a> <br/>
                <a href='#'>60 day challenge</a> <br/>
            </div>
        </div>
        <div className='mt-5 text-small text-muted' style={{fontSize:"16px"}}>
            <p>Founded in 2010 by brothers Nithin and Nikhil Kamath, Zerodha fundamentally transformed the Indian financial landscape. Before its entry, retail investing in India was a cumbersome, expensive, and opaque endeavor dominated by traditional banking institutions and traditional brokers who charged hefty percentage-based commissions.</p>
            <p>Zerodha introduced the discount brokerage model to India, charging zero brokerage on equity delivery investments and a flat, minimal fee for intraday and derivative trades. By combining this disruptive pricing strategy with a cutting-edge, in-house technology stack, Zerodha grew bootstrapping its way to becoming India’s largest stockbroker by active clients without spending a single rupee on traditional marketing or raising external venture capital.</p>
            <p>This document provides a comprehensive blueprint and deep dive into how Zerodha works, analyzing its business model, core technological infrastructure, product ecosystem, regulatory framework, and financial mechanics.</p>
        </div>
       </div>
       </footer>
     );
}

export default Footer;