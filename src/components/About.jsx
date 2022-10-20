import React from 'react'
import bg from '../assest/bg.jpeg';
const About = () => {
  return (
    <div name='about' className='w-full h-[600px] bg-slate-800 flex justify-between  items-center px-10'>

        {/* about senetence */}
        <div className='text-white gap-4 justify-between flex flex-col'>
            <h1 className='text-5xl font-bold text-white'>About PlayBook</h1>
           
            <p>Playbook’s mission is to build healthier, happier, more unified <br /> communities through sports and recreation.</p>
            <p>Our first step towards that mission is launching Play.Book app. A one <br /> stop shop for players to find the perfect venue at the perfect time, and <br /> book themselves or as a group (using our group payment feature in Club <br /> mode Matchmaking). Spend less time organizing, and more time <br /> playing. We have an exciting road map of features to come- all with <br /> the same goal of making your existing sessions easier, and more fun, and <br /> enabling new ways of having a great session. Be it finding new players <br /> to play with, or bringing it coaches to help you and your friends be your <br /> very best on the next match day!</p>
        </div>

        <div>
            <img className=' rounded-full w-[30rem] h-[30rem] flex-shrink-0 object-cover' src={bg} alt="" />
        </div>

 
    </div>
  )
}

export default About