import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProcductPage() {
    return ( 
        <>
       <Hero/>
       <LeftSection 
        imageURL="media/kite.png"
        productName="kite"
         productDesription="Our ultra fast flaging trading platform with streaming market data,
             advanced charts, an elegent UI, and more,Enjoy kite experience seamlessly on you Android and ios device."
         tryDemo=""
         learnMore=""
         googlePlay=""
         appStore=""
       />
        <RightSection
        productName="Kite connect API"
        productDesription="Build powered traiding platform and experience with our super simple HTTPS/JSON APIS, if you are the startup build your investment app and show case with our client base"
        learnMore=""
        imageURL="media/kiteconnect.png"/>

        <LeftSection 
        imageURL="media/coin.png"
        productName="coin"
         productDesription="Buy mutual funds online , commission-free, delivered to you Demat account, Enjoy the investment experience on your Android and Ios device ."
         tryDemo=""
         learnMore=""
         googlePlay=""
         appStore=""
       />
        <RightSection
        productName="Console"
        productDesription="The central dashboard for your zerodha account. Gain insides into your trades and investment with in-depth report and visulization"
        learnMore=""
        imageURL=""/>
        <LeftSection 
        imageURL="media/varsity.png"
        productName="varsity mobile"
         productDesription="An easy to grasp stock market lesson with in-depth coverage and illustratations. content is broken down into bite-size card to help the learn and to go."
         tryDemo=""
         learnMore=""
         googlePlay=""
         appStore=""
       />
       <p className='text-center fs-5'>want to know more about our technology stack? check out the zerodha. tech blog.</p>
       <Universe/>
       </>
     );
}

export default ProcductPage;