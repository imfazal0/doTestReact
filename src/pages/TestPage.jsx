import React from 'react'
import LeftNav from '../components/test/LeftNav'
import useAuth from '../utils/useAuth'

const TestPage = () => {

  const user = useAuth()
  return !user ?  
    (
      <div>

      </div>
    )
  :
   (
    <div className='w-screen h-screen p-[1%]'>
        <LeftNav/>
    </div>
  )
}

export default TestPage