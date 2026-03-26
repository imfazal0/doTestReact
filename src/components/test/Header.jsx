import React from 'react'
import { formatText } from '../../utils/FormatText'

const Header = ({testData}) => {
  return (
    <div className='w-full h-[15%] bg-linear-to-br from-purple-700 to-purple-500 rounded-2xl grid grid-cols-4 items-center justify-center text-white'>
        <div className='w-full  flex flex-col items-center justify-center '>
            <div>Subject</div>
            <div className='font-bold text-l'>{formatText(testData[0].data().testName)}</div>
        </div>
        <div className='w-full  flex flex-col items-center justify-center '>
            <div>Test</div>
            <div className='font-bold text-l'>{formatText(testData[0].data().testName)}</div>
        </div>
        <div className='w-full  flex flex-col items-center justify-center '>
            <div>Question</div>
            <div className='font-bold text-l'>{testData[0].data().questionCount}</div>

        </div>
        <div className='w-full  flex flex-col items-center justify-center '>
            <div>Time</div>
            <div className='font-bold text-l'>30</div>
        </div>
    </div>
  )
}

export default Header