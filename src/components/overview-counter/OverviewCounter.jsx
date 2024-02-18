import React from 'react'
import CountUp from 'react-countup'
const OverviewCounter = () => {
  return (
    <section className="container h-12 md:h-32 p-3">
        <div className="grid grid-cols-4 divide-x divide-slate-700  mx-auto w-full md:max-w-[800px]
        shadow-lg -translate-y-20 p-2 md:-translate-y-12 my-4 md:p-8 bg-white dark:bg-slate-800 dark:text-white/70" >
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl"><CountUp end={400} suffix="+" durations={2.75}/></h1>
            
            <h1 className='sm:text-md text-xs md:text-lg'>Clients</h1>
          </div>
           <div className='flex flex-col items-center justify-center'>
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl"><CountUp end={32} suffix="+" durations={2.75}/></h1>
            
            <h1 className='sm:text-md text-xs md:text-lg'>Projects</h1>
          </div>
           <div className='flex flex-col items-center justify-center'>
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl"><CountUp end={301} suffix="+" durations={2.75}/></h1>
            
            <h1 className='sm:text-md text-xs md:text-lg'>Subscribers</h1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl"><CountUp end={4008+9666} suffix="+" durations={2.75}/></h1>
            
            <h1 className='sm:text-md text-xs md:text-lg'>Followers</h1>
          </div>
        </div>
    </section>
  )
}

export default OverviewCounter