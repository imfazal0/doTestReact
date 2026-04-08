import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'
import React, { useContext, useEffect, useState } from 'react'
import testData from '../../../context/testData'

const ButtonsNav = ({submitDone, qIdx , setQIdx, setCheckedOpt, checkedOpt, allKeys ,lst ,setLst , submitTest}) => {
  const opt = ["a", 'b', 'c', 'd']
  const tc = useContext(testData);
 
  const tst = tc.testResult.userAnswers;

  const bt = {
    handleNext: () => {
      if (checkedOpt && !lst ) {
        setQIdx(
          (prev) => {
            return prev < allKeys ? prev + 1 : prev
          }
        )
        tc.setTestResult(prev => ({
          ...prev,
          userAnswers: [...prev.userAnswers, (opt[Number(checkedOpt)])]
        }));
        
        setCheckedOpt(null)
      }else{
        submitTest()
      }
      
      if(allKeys === tst.length){
        setLst(true)
      }
    },
    handlePrev: () => {
      if (!submitDone) {
        
      
      setLst(false)
      setQIdx(
        prev => {
          return prev > 0 ? prev - 1 : prev
        }

      )
        tc.setTestResult(
        prev => ({
          ...prev,
          userAnswers: tst.slice(0,tst.length === 2 ?tst.length-1: tst.length - 2)
        })
      );




      if (tst.length <= 0) {
        setCheckedOpt(null)
      } else {
        setCheckedOpt(opt.indexOf(tst[tst.length - 1]));
      }

    
    }},
   


  }
  
  return (
    <div className='w-full md:h-1/3 md:p-[2%] py-[12%] justify-center flex gap-2 md:text-2xl md:flex-row flex-col-reverse text-xl'>
      <div className='md:w-[40%] md:h-4/5  bg-linear-to-tl from-purple-700 to bg-purple-500 rounded-2xl text-white font-extrabold flex  px-[2%] items-center '
        onClick={bt.handlePrev}
      >
        <RiArrowLeftLine size={35} />
        <p>Previous</p>
      </div>
      <div className='md:w-[40%] md:h-4/5 bg-linear-to-tr from-green-500 to bg-green-400 rounded-2xl  text-white font-extrabold flex  px-[2%] justify-end items-center '
        onClick={bt.handleNext}
      >
        <p>{!lst ? "Next Question" : "Submit Test" }</p>
        <RiArrowRightLine size={35} />
      </div>
    </div>
  )
}

export default ButtonsNav