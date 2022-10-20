import React from 'react'

const Body = () => {
  return (
    <div className='w-full h-[400px] bg-white flex flex-col   text-black mt-20 gap-8'>

        
        
       

        <div className='flex flex-col justify-between items-center text-4xl font-bold'>
             <h1 className=' '>Let's launch a rocket into outer </h1>
             <h1 className=''>Space</h1>
        </div>
        
        
        <div className='flex flex-col justify-between items-center text-gray-700'>
               
               <p className=' '>Leave your frustrations behind, and stop wasting time arranging your next   </p> 

                     <p> Session!</p>
        </div>
        

        {/* 3 Boxes */}

        <div className='flex justify-between     '>

            {/* 1st Box */}
            <div className='flex flex-col    border-orange-200 border-2 border-dashed p-4 m-5 hover:scale-110 duration-500 '>
                <h1 className='font-bold text-2xl '>Search</h1>
                <p>Use our new location based search to see all <br /> the venues near you, and easily browse their availability.</p>
            </div>

            <div className='flex flex-col   border-orange-500 border-2 border-dashed p-4 m-5 hover:scale-110 duration-500 '>
                <h1 className='font-bold text-2xl '>Book</h1>
                <p>Book by yourself, or use Club mode to chat with <br /> friends and make group bookings.</p>
             </div>

            <div className='flex flex-col   border-orange-900 border-2  p-4 m-5 hover:scale-110 duration-500 '>
                <h1 className='font-bold text-2xl '>Search</h1>
                <p>Don’t worry about bringing cash, or finding change,  <br /> just bring your phone to the v </p>
             </div>

            
            
            

        </div>

       



    </div>
  )
}

export default Body