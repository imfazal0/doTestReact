import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Question from './Question'
import TestDataContext from '../../context/TestDataContext'
import testData from '../../context/testData'
import OptionsGrid from './OptionsGrid'
import ButtonsNav from './testcontainercomponents/ButtonsNav'

const TestContainer = () => {
  const tc = useContext(testData);
  

  return (

    <div className='w-[70%] h-full  bg-gray-200 border border-gray-300 p-[2%] rounded-2xl flex flex-col gap-5'>
      {
        tc.test.length > 0 &&
        <>
          <Header  />
          <Question  />
          <OptionsGrid/>
          <ButtonsNav/>
        </>

      }
    </div>

  )
}

export default TestContainer