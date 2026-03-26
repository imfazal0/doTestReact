import React, { useEffect, useState } from 'react'
import LeftNav from '../components/test/LeftNav'
import useAuth from '../utils/useAuth'
import TestContainer from '../components/test/TestContainer'

const TestPage = () => {

  const [startExam , setStartExam] = useState(false)
  const [testData , setTestData] = useState([])

  useEffect(()=>{
    console.log(testData);
    
  },[testData])


  const user = useAuth()
  return !user ?  
    (
      <div> 

      </div>
    )
  :
   (
    <div className='w-screen flex gap-5 h-screen p-5'>
        <LeftNav setStartExam={setStartExam} setTestData={setTestData} />
        {
          startExam &&
        <TestContainer startExam={startExam} testData={testData}  />
        }
    </div>
  )
}

export default TestPage