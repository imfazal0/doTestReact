import { RiBarChartLine, RiQuestionFill } from '@remixicon/react';
import React from 'react'

const TestCard = ({testData , selectedSub , allQuestion}) => {
    console.log(testData);
    
  return (
    <div className='w-[22%] h-[30vh] bg-gray-100 border border-purple-700 rounded-2xl p-[2%] grid m-2 hover:scale-[1.02] hover:shadow-2xl transition-all transition-50'>
        <div className='font-bold'>
            Test Name : {selectedSub}
        </div>
        <div className='text-purple-700 font-bold'>
            Test Id : <span>{testData}</span>
        </div>
        <div className='text-purple-900 text-sm font-bold flex flex-row items-center gap-4 '>
            <RiQuestionFill size={16}/>
            {allQuestion}
        </div>
        <div className='flex font-bold bg-purple-700 rounded-lg text-white items-center justify-center'>
           <RiBarChartLine />
           View LeaderBoard
        </div>
    </div>
  )
}

export default TestCard