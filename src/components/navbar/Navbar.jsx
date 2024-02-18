import React, { useEffect, useState } from 'react';
import {BiPhoneCall, BiSolidMoon, BiSolidSun} from "react-icons/bi";
import {FaCaretDown} from "react-icons/fa";
import {HiMenuAlt1, HiMenuAlt3} from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import { Link } from 'react-router-dom';
import Hero from '../hero/Hero';
import AboutusImg from '../../assets/aboutUs.jpg';
import Logo from '../../assets/devTeamLogo.png';
// import Image1 from "./images/africanwich.jpg";


const Navbar = () => {
const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : 'light');
const [showMenu, setShowMenu] = useState('false')
const element = document.documentElement;

useEffect(() => {
  if(theme==="dark") {
    element.classList.add('dark');
    localStorage.setItem("theme", "dark");
  }else{
    element.classList.remove('dark');
    localStorage.removeItem("theme");
  }
},[theme]);

const toggleMenu = ()=>{
  setShowMenu(!showMenu);
}

  return (
    <>
    <header className=" fixed top-0 left-0 right-0 z-[99] bg-navbar text-white border-b-[1px]  sm:w-auto border-primary/50">
    <nav className="container flex items-center justify-between h-[70px] py-2">
       {/* Logo Section */}
       <div className='text-2xl md:text-3xl text-white flex items-center'>
        <img src={Logo } alt='logo' className='h-[25px] w-[35px] md:h-[50px] md:w-[70px]'/>
        <a href="#">
          <span className='text-xl md:text-2xl'>Dev</span>
          <span className=" text-xl md:text-2xl inline-block font-bold text-orange-500">Team</span> 
          <span className=" text-xl md:text-2xlinline-block font-bold text-primary">Tech</span>
          </a> <br/>
        
       </div>
       {/* Desktop menu Section */}
       <div className='hidden md:block'>
        <ul className=' items-center flex gap-10'>
          <li className='group relative cursor-pointer'>
            <Link to='/'>Home</Link>
            
          </li>

          <li className='group cursor-pointer'>
          <Link to="/contact" className="flex items-center gap-[2px] h-[72px]">
            Contact Us{" "}
            {/* <span> <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>  </span> */}
            </Link>
            {/* Dropdown Full With Section */}
            {/* <div className='absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white p-2 shadow-md 
            group-hover:block text-black '>
              <div className='grid grid-cols-3 gap-5'>
                <div className='overflow-hidden'>
                  <img src={Logo}  alt='africanwitch' className='max-h-[450px] w-full rounded-b-3xl object-fill'/>
                </div>
                <div className='col-span-2'>
                  <h1 className='text-3xl font-semibold pb-3'>DevTeam Tech</h1>
                  <p className='text-xl text-slate-600'>DevTeam Tech is a dynamic and innovative technology 
                    company at the forefront of cutting-edge solutions
                    We pride ourselves on our ability to blend traditional wisdom with modern technological 
                    advancements, symbolized by our distinctive name. With a team of skilled professionals 
                    and a passion for transformative technology, African Witch Tech Limited is dedicated to 
                    empowering businesses and individuals across the continent, 
                    creating a future where innovation and tradition coalesce for unparalleled success
                    <div className='grid grid-cols-3 mt-4'>
                      <div>
                        <h1 className='pb-1 text-xl font-semibold'>Development</h1>
                        <ul className='space-y-2'>
                          <li className='cursor-pointer text-black/80 hover:text-primary'>Web Development</li>
                          <li className='cursor-pointer text-black/80 hover:text-primary'>Mobile Development</li>
                          <li className='cursor-pointer text-black/80 hover:text-primary'>Software Development</li>
                        </ul>
                      </div>
                      <div>
                      <h1 className='pb-1 text-xl font-semibold'>Development</h1>
                        <ul className='space-y-2'>
                          <li className='cursor-pointer text-black/80 hover:text-primary'>Web Development</li>
                          <li className='cursor-pointer text-black/80 hover:text-primary'>Mobile Development</li>
                          <li className='cursor-pointer text-black/80 hover:text-primary'>Software Development</li>
                        </ul>
                      </div>
                      <div>
                        <img src={Logo} alt="image not found"/>
                      </div>
                    </div>
                    </p>

                </div>
              </div>
              
            </div> */}
          </li>
          <li className='group cursor-pointer'>
            <Link className='flex items-center gap-[2px] h-[72px]' to='/about'>  About Us</Link>
          {/* <a href="/about" className="flex items-center gap-[2px] h-[72px]"> */}
           {/* {" "} */}
            {/* <span> <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>  </span> */}
            
            {/* Dropdown Full With Section */}
            {/* <div className='absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white p-2 shadow-md 
            group-hover:block text-black '>
              <div className='grid grid-cols-3 gap-5'>
                <div className='overflow-hidden'>
                  <img src={Logo}  alt='logo' className='max-h-[450px] w-full rounded-b-3xl object-fill'/>
                </div>
                <div className='col-span-2'>
                  <h1 className='text-3xl font-semibold pb-3'>About Dev Team Tech</h1>
                  <p className='text-xl text-slate-600'>Welcome to DevTeam, where our unwavering 
                  commitment is to confront the challenges of insecurity through the transformative force of 
                  technology. Rooted in the heartbeat of Africa, our vision extends beyond conventional 
                  boundaries, aiming to harness the power of innovation 
                  to safeguard communities and empower businesses.
                    <div className='grid grid-cols-3 mt-4'>
                      <div>
                        <h1 className='rounded-md text-white m-3  bg-green-800 p-2 pb-1 text-xl font-semibold'>African Witch Tech</h1>
                        <ul className='space-y-2'>
                          <li className=' rounded-md text-white m-3  bg-green-800 p-2 cursor-pointer text-black/80 hover:text-primary'>Mission and Values</li>
                          <li className='rounded-md text-white m-3  bg-green-800 p-2 cursor-pointer text-black/80 hover:text-primary'>History and Milestones</li>
                          <li className='rounded-md text-white m-3  bg-green-800 p-2 cursor-pointer text-black/80 hover:text-primary'>Our Apps</li>
                        </ul>
                      </div>
                      <div>
                      <h1 className='rounded-md text-white m-3  bg-green-800 p-2 pb-1 text-xl font-semibold'>Teams</h1>
                        <ul className='space-y-2'>
                          <li className='rounded-md text-white m-3  bg-green-800 p-2 cursor-pointer text-black/80 hover:text-primary'>Innovation and Technology</li>
                          <li className=' rounded-md text-white m-3  bg-green-800 p-2 cursor-pointer text-black/80 hover:text-primary'>Community Engagement</li>
                          <li className=' rounded-md text-white m-3  bg-green-800 p-2 cursor-pointer text-black/80 hover:text-primary'>Contact Information</li>
                        </ul>
                      </div>
                      <div>
                        <img src={Logo} alt="image not found"/>
                      </div>
                    </div>
                    </p>

                </div>
              </div>
              
            </div> */}
          </li>
          {/* <l1>
            <Link to="/privacy">Privacy Policy</Link>
          </l1> */}
          
          <li>
            <div className='flex items-center gap-4'>
            <div>
              <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90"/>
              
            </div>
            <div>
              <p>Call us on</p>
              <p><a href='tell: +1959929-8757'> +1(959)929-8757</a> </p>
              
            </div>

            </div>
            
            
          </li>
          {/* Light and Dark mode switcher */}
          {
            theme==='dark' ?(
              <BiSolidSun 
              className='text-2xl' 
              onClick={()=> 
                setTheme('light')}/>
            ): (
              <BiSolidMoon 
              className='text-2xl' 
              onClick={()=> 
                setTheme('dark')}/>
            )
          }
          
        </ul>
       </div>
       {/* Mobile menu Header */}
       <div className="flex items-center gap-4 md:hidden">
       {
            theme==='dark' ?(
              <BiSolidSun 
              className='text-2xl' 
              onClick={()=> 
                setTheme('light')}/>
            ): (
              <BiSolidMoon 
              className='text-2xl' 
              onClick={()=> 
                setTheme('dark')}/>
            )
          }
          {
            showMenu? 
            <HiMenuAlt1
            onClick={toggleMenu}
            className='cursor-pointer transition-all'
            size={30}
            />: 
            <HiMenuAlt3
            onClick={toggleMenu}
            className='cursor-pointer transition-all'
            size={30}
            />
          }
       </div>

     </nav>
    </header>
    {/* Mobile Menu Section */}
    <ResponsiveMenu showMenu={showMenu}/>
    </>
  );
}

export default Navbar