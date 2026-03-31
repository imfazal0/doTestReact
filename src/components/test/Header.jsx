import React, { useContext, useState } from 'react'
import { formatText } from '../../utils/FormatText'
import testData from '../../context/testData'
import Timer from '../../utils/Timer';

const Header = ({ setTimeSpent , lst}) => {
    const tc = useContext(testData);

  return (
    <div className='w-full h-[15%] bg-linear-to-br from-purple-700 to-purple-500 rounded-2xl grid grid-cols-4 items-center justify-center text-white'>
        <div className='w-full  flex flex-col items-center justify-center '>
            <div>Subject</div>
            <div className='font-bold text-l'>{formatText(tc.testResult.subject)}</div>
        </div>
        <div className='w-full  flex flex-col items-center justify-center '>
            <div>Test</div>
            <div className='font-bold text-l'>{formatText(tc.testResult.testId)}</div>
        </div>
        <div className='w-full  flex flex-col items-center justify-center '>
            <div>Question</div>
            <div className='font-bold text-l'>{tc.test[0].data().questionCount}</div>

        </div>
        <div className='w-full  flex flex-col items-center justify-center '>
            <div>Time</div>
            <Timer setTimeSpent={setTimeSpent} lst={lst} />
        </div>
    </div>
  )
}

export default Header