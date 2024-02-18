import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import Logo from "../../assets/devTeamLogo.png"
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${showMenu?  "-left-[100%]" : "left-0" }
     h-screen w-[75%] bg-slate-950 fixed 
     top-0 z-50 transition-all duration-500 pt-24 ps-8 flex flex-col justify-between text-white`}>
        <div>
            <div className='flex items-center justify-start gap-3'>
                {/* <FaUserCircle size={50}/> */}
                <div>
                    <img src={Logo} alt="logo" className="h-[70]"/>
                    <h1 className='text-sm text-slate-500'>Dev Team Tech</h1>
                </div>

            </div>
            <nav className='mt-12'>
                <ul className='space-y-4 text-xl'>
                    <li>
                        <Link to='/' title='Home' />
                        
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/">About Our Team</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="footer">
            <h1> @copyright 2024 | All Rights Reserved <a href="#">Dev Team Tech</a> </h1> 
        </div>
     </div>
  )
}

export default ResponsiveMenu