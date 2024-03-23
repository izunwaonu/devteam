import React from 'react'
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import OverviewCounter from '../overview-counter/OverviewCounter';
import BannerDetails from '../bannerDetails/BannerDetails';
import SimpleBanner from '../simpleBanner/SimpleBanner';
import Blogs from '../blogs/Blogs';
import Footer from '../footer/Footer';
import HeroTwo from '../HeroTwo';
import Testimonial from '../Testimonial';
import Faqu from '../Faqu';
// import Team from '../team/Team'; 

const Home = () => {
    useEffect(()=>{
    AOS.init(
      {
        offset: 100,
        duration: 500,
        easing: "ease-in-sine",
        delay: 100,
      }
    );
    AOS.refresh();
  
  },[])
  return (

    <div className="dark:bg-slate-900 bg-white">
    < Navbar/>
   
    <Hero />
    {/* <HeroTwo/> */}
    <OverviewCounter />
    <BannerDetails />
    <SimpleBanner />
    {/* <Team/> */}
    <Faqu/>
    <Testimonial/>
    {/* <Blogs /> */}
    <Footer />
    </div>
    
  )
}

export default Home