import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'
import React from 'react'

const ButtonsNav = () => {
  return (
    <div className='w-full flex-1 p-[2%] justify-center flex gap-2 '>
        <div className='w-[40%] h-4/5 bg-linear-to-tl from-purple-700 to bg-purple-500 rounded-2xl text-white font-extrabold flex  px-[2%] items-center text-2xl'>
            <RiArrowLeftLine size={35}/>
            <p>Previous</p>
        </div>
        <div className='w-[40%] h-4/5 bg-linear-to-tr from-green-500 to bg-green-400 rounded-2xl  text-white font-extrabold flex  px-[2%] justify-end items-center text-2xl'>
            <p>Next Question</p>
            <RiArrowRightLine size={35}/>

        </div>
    </div>
  )
}

export default ButtonsNav