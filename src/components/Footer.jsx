import React from 'react'
import play from '../assest/playLogo.png';
import { FaLinkedin,FaFacebook,FaTwitterSquare } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full h-[300px] bg-slate-800  pt-20 mt-10 '>
       
       
        <div className='flex   text-white  justify-between   mx-10'>
            
            <div className='   flex flex-col  gap-3  '> 
            {/* img and other */}
         <img className='w-[200px]' src={play} alt="" />
         <h1>Playbook Technologies is a Sri Lanka based, globally oriented <br /> startup exploring digital optimization & enhancement of the <br /> sports & recreational activity domain.</h1>
           
           <ul className='flex gap-3'>
        
      <a    
      href="https://www.linkedin.com/in/lasith-herath-b7a937209/">
         <FaLinkedin size={30}/>
      </a>
     
       <a href="https://www.linkedin.com/in/lasith-herath-b7a937209/</ul>">
        <FaFacebook size={30}/>
       </a>
       <a href="https://www.linkedin.com/in/lasith-herath-b7a937209/</ul>">
        <FaTwitterSquare size={30}/>
       </a>

    </ul>

           
            </div>
           
            
   

    {/* about */}
<div className='flex flex-col  gap-3 '>
    <h1 className='text-2xl font bold'>About</h1>
    <p className='text-white hover:border-b-2'>Company</p>
    <p className='text-white hover:border-b-2'>Community</p>
    <p className='text-white hover:border-b-2'>Carries</p>

    
 

    
</div>

<div className='flex flex-col  gap-3 '>
    <h1 className='text-2xl font bold'>Blog</h1>
    <p className='text-white hover:border-b-2'>Tec</p>
    <p className='text-white hover:border-b-2'>Music</p>
    <p className='text-white hover:border-b-2'>Viedio</p>
</div>
<div className='flex flex-col  gap-3 '>
    <h1 className='text-2xl font bold'>Products</h1>
    <p className='text-white hover:border-b-2'>Terms and Conditions</p>
    <p className='text-white hover:border-b-2'>Privacy Policy</p>
   
</div>

<div className='flex flex-col  gap-3 '>
    <h1 className='text-2xl font bold'>Contact</h1>
    <p className='text-white hover:border-b-2'>0714074978</p>
    <p className='text-white hover:border-b-2'>lasithherath00@gmail.com</p>
   
</div>


           </div>   

    </div>
  )
}

export default Footer