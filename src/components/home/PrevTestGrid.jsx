import { RiArrowDropRightLine, RiHistoryLine } from '@remixicon/react'
import React from 'react'
import TestCard from './TestCard'

const PrevTestGrid = () => {
  return (
    <div className='w-full h-full p-[1%]'>
        <div className='flex justify-between items-center'>
            <div className='flex h-[10%] gap-2 font-bold text-xl items-center justify-center'><RiHistoryLine />Recent Test</div>
            <div className='flex h-[10%] gap-2  text-l bg-gray-100 items-center justify-center border border-gray-300 px-2 rounded-sm'>View-All <RiArrowDropRightLine /></div>
        </div>
        <TestCard/>
    </div>
  )
}

export default PrevTestGrid