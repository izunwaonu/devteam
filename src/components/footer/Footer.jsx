import React from 'react'
import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt} from "react-icons/fa";
import FooterLinks from './FooterLinks';

const Footer = () => {
  const importantLinks = [
    {
      name: 'Home',
    },
    {
      name: 'About',
    },
    {
      name: 'Service',
    },
    {
      name: 'Download',
    },
  ];
  const Links = [
    {
      name: 'Privacy Policy',
    },
    {
      name: 'Services',
    },
    {
      name: 'About Us',
    },
   
  ];

  return (
    <footer className="text-white rounded-t-xl bg-gradient-to-r from-green-950 to to-green-900">
        <div className="mx-auto max-w-[1200px] p-4">
          {/* Footer Container Section */}
          <div className="grid py-5 md:grid-cols-3">
            <div className='px-4 py-8'> 
              <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl'>
                <a href="/Home" className="">
                  Dev
                  <span className="inline-block text-bold text-primary">Team</span>
                </a>

              </h1>
              <p>
              DevTeam crafts innovative solutions, 
              blending tradition and the avant-garde to 
              weave transformative spells in the realm of technology{""}.
              </p>
              <br/>
              <div className="flex items-center gap-3">
              <FaLocationArrow/>
              <p>Devteamtech Limited <br/>
              South Lake Drive,<br/>
              Lexington, SC 29072609<br/>
              United States</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+19599298757</p> <br/>
              <FaEnvelope/>
              <p>info@devteamtech.com</p>
              </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2">
                <div className="px-4 py-8">
                  <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">Important Links</h1>
                  <ul className="flex flex-col gap-3">
                  <FooterLinks links = {importantLinks}/>
                  </ul>
                </div>
                <div className="px-4 py-8">
                  <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">Links</h1>
                  <ul className="flex flex-col gap-3">
                  <FooterLinks links = {Links}/>
                  </ul>
                </div>
                <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">Social Links</h1>
                <div className='flex flex-col gap-3'>
                  <h1>Subscribe to our newsletter</h1>
                  <div>
                  <input type="email" placeholder="Enter your email" className='rounded-full px-3 py-1
                   focus:border-sky-500 focus:outline-none text-black focus:ring-2 focus:ring-sky-500'/>
                   <button className='btn btn-primary mt-2'>Subscribe </button>
                  </div>
                   <div className='flex gap-3 mt-6 items-center'>
                    <a className='duration-200 hover:scale-105' href="#">
                      <FaInstagram className='text-3xl'/>
                    </a>
                    <a className='duration-200 hover:scale-105' href="#">
                      <FaFacebook className='text-3xl'/>
                    </a>
                    <a className='duration-200 hover:scale-105' href="#">
                    <FaLinkedin className='text-3xl'/>
                    </a>
                   </div>
                </div>
                </div>
                
              </div>
            </div>

            {/* Footer Copyright (c) section */}
            <div className='bottom-footer'>
              <p className='border-t-2 border-gray-300/50 py-6 text-center'>Copyright &copy; 2024 . All rights reserved.</p>

            </div>
        </div>
    </footer>
  )
}

export default Footer