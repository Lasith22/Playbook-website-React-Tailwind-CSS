import React from 'react'
import phone from '../assest/phone.png'

import { FaAppStoreIos,FaGooglePlay } from "react-icons/fa";

const Home = () => {
  return (
    <div name='home' className='w-full h-[488px] bg-blue-600 flex  justify-between items-center '>

        <div className=' mx-auto px-8 flex flex-col justify-center gap-5   '>
            <h1 className='text-white text-5xl font-bold  '> Download the App</h1>
            <p className='text-white font-bold text-2xl'>You are a few clicks away from joining the future of <br /> sports and recreation booking and coordination! </p>
        
            
            <div className='flex gap-2'>
                <button className='  bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 text-white rounded-lg px-4 py-3 my-8 mx-auto flex items-center gap-6'><FaAppStoreIos size={30}/>  Get it on the App Store</button>
                <button className=' bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600 text-white rounded-lg px-4 py-3 my-8 mx-auto flex items-center gap-6'><FaGooglePlay size={30}/> Get it on the Google Play</button>
            </div>

        </div>

        
        <div className=''>
            <img className='' src={phone} alt="" />
        </div>
        

        

    </div>
  )
}

export default Home