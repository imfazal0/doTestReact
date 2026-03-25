import { RiCheckboxCircleFill, RiQuestionFill, RiTimeLine } from '@remixicon/react'
import React from 'react'

const TestCard = () => {
  return (
    <div className='w-1/3 h-[40%] bg-gray-200 rounded-2xl mt-5 p-[1%] px-[2%]'>
            <div className='flex justify-between h-[15%]'>
                <div className='font-bold'>Python</div>
                <div className='text-gray-500 flex items-center bg-gray-300 px-2 rounded-2xl text-sm'>Date:12/12/2025 Monday</div>
            </div>
                    
            <div className='text-purple-800 h-1/2 flex items-center font-bold text-5xl '>
            88.0%
        </div>
        <div className='flex items-center justify-between h-[15%] '>
            <div className='flex items-center'><RiQuestionFill size={20} color='gray'/>50</div>
            <div className='flex items-center'><RiCheckboxCircleFill size={20} color='gray'/>25</div>
            <div className='flex items-center'><RiTimeLine size={20} color='gray'/>8m</div>
        </div>
        <div className='h-1/5 w-full flex flex-row items-center gap-x-2'>
            <div className='w-1/2 h-9/12 border border-gray-300 bg-gray-50 font-bold text-gray-500 rounded-sm flex items-center justify-center '>Review</div>
            <div className='w-1/2 h-9/12 border border-gray-300 bg-gray-50 font-bold text-gray-500 rounded-sm flex items-center justify-center '>Retake</div>
            
        </div>

    </div>
  )
}

export default TestCard