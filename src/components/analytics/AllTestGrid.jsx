import React from 'react'
import TestCard from './TestCard'
import { RiFolderInfoLine } from '@remixicon/react'

const AllTestGrid = ({allTest , selectedSub , setSelectedTest , setShowSelSub , loading}) => {
  return (
    <div className='w-full  flex flex-wrap justify-center p-5'>
        {
            !loading &&
            allTest.map((test )=>(
                <TestCard key={test.id} testData={test.id} selectedSub={selectedSub} allQuestion={test.data().questionCount} setSelectedTest={setSelectedTest} setShowSelSub={setShowSelSub} />
            ))
        }
        {
          loading &&
          <>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          <div className='md:w-[22%] w-full md:h-[30vh] h-[20vh] bg-gray-200   rounded-2xl  m-2 animate-pulse '></div>
          </>
        }
        {
            allTest.length<=0 && !loading &&
                      <div className='w-full h-full flex flex-col items-center justify-center text-3xl font-bold text-gray-300 mt-25' >
                            <RiFolderInfoLine size={100}  />
                            No Tests Found
                        </div>
        }

    </div>
  )
}

export default AllTestGrid