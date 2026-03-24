import { RiGoogleFill, RiLoginBoxLine } from '@remixicon/react'
import React from 'react'
const LoginContainer = ({handleLogin}) => {
  return (
    <div className='md:w-1/3 w-full shadow-2xl rounded-2xl md:h-[90%] bg-linear-to-b from-blue-200 to-white m-4 md:m-0  flex flex-col items-center gap-10 py-[5%]'>
       <div className="bg-white w-[15%] aspect-square rounded-2xl flex justify-center items-center">
        <RiLoginBoxLine size={50} color='rgb(0,0,0)'/>
        </div>
       <div className="text-black md:text-3xl  text-2xl font-bold flex items-center flex-col">
        <p>Sign In With Google </p>
        <p className='text-gray-600 w-[80%] text-center md:text-xl text-sm font-medium'>login to keep track all of your tests and get analysis of your progress</p>
       </div>
       <div className="button bg-linear-to-b from-black to-gray-700 text-white  flex items-center justify-center rounded-2xl p-[1%]">
        <button className='flex px-5 text-2xl justify-center items-center shadow-xl hover:text-blue-200 ' onClick={handleLogin}>
          <div className='pr-2'>Get Started</div>
          <div><RiGoogleFill /></div>
        </button>
       </div>
        <div className='w-[90%] h-full border-gray-400 border-t border-dashed flex items-center text-sm '>
            <ul className='text-gray-600 capitalize '>
            <li>Keep Track of all Your Scores</li>
            <li>Attempt Unlimited Free Tests</li>
            <li>get daily and weekly Analysis</li>
            <li>LeaderBord facility</li>
            </ul>
        </div>

    </div>
  )
}

export default LoginContainer