 
import React from 'react'
import map from '../assest/map.png'
const Contact = () => {
  return (
    <div name='contact' className='  w-full h-[600px] flex flex-col justify-between items-center      '>

        <h1 className='text-5xl text font-bold pt-5  '>
            Get in touch with us!
        </h1>

     
       <div className='  flex justify-between items-center gap-20 pt-5 '>

        <img className='' src={map} alt="" />
 
         <div>

            <form  className='flex flex-col max-w-[600px] w-full gap-5 '   >
                <h1 className='text-2xl font-bold'>Feedback</h1>
                <p>Get in touch</p>
                <input type="text" placeholder='Name' className='border-2 border-red-300 w-50 h-10 p-3' />
                <input type="email" placeholder='Email' className='border-2 border-red-300 w-50 h-10 p-3' />
                <textarea   cols="30" rows="10" placeholder='Message' className='border-2 border-red-300  '></textarea>
                <button className='bg-blue-600 border-2 p-2 rounded-lg'> Send</button>
             </form>
         </div>

       </div>

    </div>
  )
}

export default Contact