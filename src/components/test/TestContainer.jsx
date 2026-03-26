import React from 'react'
import Header from './Header'

const TestContainer = ({testData}) => {
  return (
    <div className='w-[70%] h-full  bg-gray-200 border border-gray-300 p-[2%] rounded-2xl'>
      <Header testData={testData}/>
    </div>
  )
}

export default TestContainer