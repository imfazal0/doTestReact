import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Question from './Question'
import TestDataContext from '../../context/TestDataContext'
import testData from '../../context/testData'
import OptionsGrid from './OptionsGrid'
import ButtonsNav from './testcontainercomponents/ButtonsNav'

const TestContainer = () => {
  const tc = useContext(testData);
  const [testJson , setTestJson] = useState({});
  const [currentQuestion , setCurrentQuestion] = useState({});
  const [currentOptions , setCurrentOptions] = useState([]);
  const [allKeys, setAllKeys] = useState([]);
  const [qIdx, setQIdx] = useState(0);
  const [checkedOpt , setCheckedOpt] = useState(null);

  useEffect(()=>{
    if (tc.startExam) {
        const Test = JSON.parse(tc.test[0].data().exam)
        const keys = Object.keys(Test)
        setTestJson(Test);
        setAllKeys(keys);
    }

  },[tc.startExam])

  useEffect(()=>{
    chageCurrentQuestion()
   
  },[qIdx , testJson])






  const chageCurrentQuestion = ()=>{
     if (tc.startExam) {
        setCurrentQuestion(
          testJson[allKeys[qIdx]]          
        )
        setCurrentOptions(
          Object.values(
            testJson[allKeys[qIdx]].options
          )
          
        )
    }
  }



  useEffect(()=>{
    
  },[testJson])
 
  useEffect(()=>{
   
    
    
  },[currentQuestion])




  return (

    <div className='w-[70%] h-full  bg-gray-200 border border-gray-300 p-[2%] rounded-2xl flex flex-col gap-5'>
      {
        tc.startExam &&
        <>
          <Header  />
          <Question  question={currentQuestion?.question} qIdx={qIdx+1} />
          {
            currentOptions.length && 
            <OptionsGrid options={currentOptions} checkedOpt={checkedOpt} setCheckedOpt={setCheckedOpt}/>
          }
          <ButtonsNav setQIdx={setQIdx} checkedOpt={checkedOpt} setCheckedOpt={setCheckedOpt} allKeys={allKeys.length-1}/>
        </>

      }
    </div>

  )
}

export default TestContainer