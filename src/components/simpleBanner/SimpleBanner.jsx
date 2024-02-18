import React from 'react'

const SimpleBanner = () => {
  return (
    <>
    <div className='bg-primary'>
    <div data-aos="fade-up" className='container py-8 md:py-12'>
        <div className='grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8'>
         <div className='px-2'>
         <iframe 
         className='aspect-video w-full'
          
        src="https://www.youtube.com/embed/JstT4jCyrOM?si=lVTDcMbLAobzrzDT" 
        title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture; web-share"  
        allowfullscreen>
        </iframe>
        </div>   
        
        <div className='flex flex-col items-center gap-4 text-center dark:text-white text-black md:col-span-2 
        md:items-start md:text-left '>
            <h1 className='text-3xl font-bold'>
            Embark on Your Next Project with Our Professional Expertise
            </h1>
            <p className='text-2xl'>Elevate your project outcomes by partnering with 
                our highly skilled and experienced experts. From innovative 
                solutions to strategic planning, our team brings a wealth of 
                proficiency to every endeavor. We are committed to delivering 
                excellence, ensuring your projects not only meet but surpass 
                expectations with tailored and impactful results.
            </p>
            <button className='btn-primary !bg-white !text-black'>Get Started</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default SimpleBanner