import React from 'react'
import p from '../assest/playLogo.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='w-full h-[100px] justify-between flex  items-center px-10 bg-blue-600  sticky top-0 z-50  '>

        {/* Image */}
        <div className=' w-[200px]   '>
            <img src={p} alt="" />
          </div>

          {/* Menu */}
          <ul className='flex gap-5 px-5    text-white '>

            <li className='  '>
            <Link className='hover:text-orange-400 text-xl cursor-pointer'  to="home"   smooth={true}   duration={500}  >
           Home
        </Link>
            </li>
            <li className='  '>
            <Link className='hover:text-orange-400 text-xl cursor-pointer'  to="about"   smooth={true}   duration={500}  >
           About
        </Link>
            </li>
            <li className='  '>
            <Link className='hover:text-orange-400 text-xl cursor-pointer'  to="contact"   smooth={true}   duration={500}  >
           Contact us
        </Link>
            </li>
            
          </ul>
        
    </div>
  )
}

export default Navbar