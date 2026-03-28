import React, { useEffect, useState } from 'react'
import LeftNav from '../components/test/LeftNav'
import useAuth from '../utils/useAuth'
import TestContainer from '../components/test/TestContainer'
import TestDataContext from '../context/TestDataContext'

const TestPage = () => {


  const user = useAuth()
  return !user ?  
    (
      <div> 

      </div>
    )
  :
   (
    <div className='w-screen flex md:flex-row flex-col gap-5 h-screen p-5'>
      <TestDataContext>
        <LeftNav/>  
        <TestContainer/>
      </TestDataContext>
    </div>
  )
}

export default TestPage