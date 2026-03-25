import React from 'react'

const Scores = () => {




  return (
    <div className='w-full h-1/2 gap-x-2 gap-y-1 items-center justify-center  flex font-bold flex-wrap md:flex-nowrap'>
        <div className='md:h-full h-1/2 md:w-1/4 w-[45%] flex flex-col items-center justify-center bg-linear-to-t from-blue-200 to-white rounded-2xl shadow-xl border border-gray-100'>
            <div className='w-fulll h-1/2 flex items-end justify-center text-xl'>0</div>
            <div className='w-full h-1/2 flex  justify-center text-gray-500'>Total Test Taken</div>
        </div>
        <div className='md:h-full h-1/2 md:w-1/4 w-[45%] flex flex-col bg-linear-to-t from-blue-200 to-white rounded-2xl shadow-xl border border-gray-100'>
             <div className='w-fulll h-1/2 flex items-end justify-center md:text-xl'>0</div>
            <div className='w-full h-1/2 flex  justify-center text-gray-500'>Total Test Taken</div>
        </div>
        <div className='md:h-full h-1/2 md:w-1/4 w-[45%] flex flex-col bg-linear-to-t from-blue-200 to-white rounded-2xl shadow-xl border border-gray-100'>
              <div className='w-fulll h-1/2 flex items-end justify-center text-xl'>0</div>
            <div className='w-full h-1/2 flex  justify-center text-gray-500'>Total Test Taken</div>
        </div>
        <div className='md:h-full h-1/2 md:w-1/4 w-[45%] flex flex-col bg-linear-to-t from-blue-200 to-white rounded-2xl shadow-xl border border-gray-100'>
             <div className='w-fulll h-1/2 flex items-end justify-center text-xl'>0</div>
            <div className='w-full h-1/2 flex  justify-center text-gray-500'>Total Test Taken</div>
        </div>
    </div>
  )
}

export default Scores