import React from 'react';
import Test1 from '../assets/testim01.jpg';
import Test2 from '../assets/casa.jpg';
import Test3 from '../assets/faith.jpg';
import Test4 from '../assets/yola.png';



const people = [
    {
      name: 'Kosisochukwu Agu',
      role: 'CEO/ Casa De Cariño',
      desc: 'Working with African Dev Team Tech was a game-changer for our business',
      imageUrl: Test2,
    },
    {
        name: 'Bernice',
        role: 'Co-Founder / CEO',
        desc: ' I know Dev Team Tech for delivering a seamless user experience',
        imageUrl: Test4,
        
      },
      {
        name: 'Faith Ugochi',
        role: 'Medical Laboratory Scientist (MLS)',
        desc: 'African Dev Team Tech brought our vision to life with their innovative software solutions',
        imageUrl: Test3,
      },
      {
        name: 'Matthew Ameh',
        role: 'Co-Founder /OlivaBest Group',
        desc: 'We are thrilled with the website African Dev Team Tech created for us; it is modern, responsive, and user-friendly',
        imageUrl: Test1,
       
      },
]

const Testimonial = () => {
  return (
    <>
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div
        data-aos="fade-right"
        data-aos-duration="400"
        data-aos-one="true"

         className="max-w-2xl">
          <h2 className="text-3xl  dark:text-white font-bold tracking-tight text-gray-900 sm:text-4xl">Praise for Dev Team Tech</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600  dark:text-slate-200">
          Hear directly from our satisfied clients as they share their 
          experiences and feedback about  Dev Team Tech's services and solutions
          </p>
        </div>
        <ul data-aos="fade-up"
          data-aos-duration="400"
          data-aos-one="true"
        
        role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-[150px] w-[150px]  rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="  dark:text-slate-200 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="  text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  <p className="  dark:text-slate-200 text-sm font-semibold leading-6 text-slate-600">{person.desc}</p>
                  
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Testimonial