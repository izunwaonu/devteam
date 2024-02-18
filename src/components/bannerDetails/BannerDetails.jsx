import React from 'react'
import BannImage2 from "../../assets/africanw.png";

const BannerDetails = () => {
  return (
    <section className="bg-green-100 dark:bg-slate-950 dark:text-white p-10">
        <div className="container flex flex-wrap flex-col items-center justify-center py-10 md:h-[500px]">
        <div className="grid grid-cols-1 px-2 items-center gap-4 md:grid-cols-2">
            {/* Text Container */}
            <div
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-one="true"
            >
            <h1 className=' text-xl md:text-2xl'>Tailored Solutions for Your Business Needs</h1>
            <p className=' text-xl md:text-2xl pt-2 text-slate-600 dark:text-slate-400'>
                Tailored services delivering innovative solutions, addressing 
            unique business needs, and fostering growth through strategic and 
            comprehensive technological expertise</p>
              <div>
                <ul className="flex text-xl md:text-2xl pt-3 list-inside list-disc flex-col gap-2 md:gap-4">
                    <li className='font-medium'>
                    We develop innovative and user-friendly mobile 
                    applications to meet diverse needs and enhance 
                    user experiences.
                    </li>
                    <li className='font-medium'>
                    We create cutting-edge web applications with responsive 
                    design for seamless interaction across various devices.
                    </li>
                    <li className='font-medium'>
                    Design and implement robust software solutions, 
                    tailored to address specific business challenges 
                    and optimize operations.
                    </li>
                </ul>
                <button className='btn btn-primary mt-2'>Contact Us</button>
              </div>
            </div>
            {/* image Container */}
            <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-one="true"
            >
                <img src={BannImage2} alt="image not found" className='mx-auto max-w-[400px]'/>
            </div>
            
        </div>

        </div>
        
    </section>
  )
}

export default BannerDetails