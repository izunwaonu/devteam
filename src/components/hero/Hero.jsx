import React from 'react'
import HeroImg from "../../assets/Bannaizu.png";

const Hero = () => {
  return (
    <div className='h-[650px] bg-gradient-to-r md:h-[500px] from-green-950 to-green-900 pt-20 '>
      <section className='container flex flex-col items-center justify-between'>
        <div className='grid grid-cols-1 md:grid-cols-2  items-center gap-8 text-white'>
          {/* Hero text Container */}
          <div
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-one="true"
          className='flex flex-col items-center text-center gap-4 md:items-start md:text-left'>
            <h1 className=' text-xl md:text-2xl'>We Develop Apps that Become Popular on AppWorld</h1>
            <p className=' text-xl md:text-2xl text-white dark:text-slate-400'>We specialize in creating innovative and trending apps, 
              ensuring visibility and popularity on AppWorld, offering 
              users exciting and cutting-edge experiences.</p>
              <div className='space-x-4'>
                <button className='btn-primary'>Get Started</button>
                <button className='btn-outlined'>Download Brochure</button>
              </div>
          </div>
          {/* Hero image Container */}
          <div
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-one="true"
          
          >
            <img src={HeroImg} alt='not found' className=''/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero