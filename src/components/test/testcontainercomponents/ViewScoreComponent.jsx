import React, { useContext, useEffect } from 'react'
import testData from '../../../context/testData'
import { RiHome5Line } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';

const ViewScoreComponent = () => {
    const tc = useContext(testData);
    useEffect(()=>{
        
    })
    const navigate = useNavigate();
  return (
    <div className='w-full h-full flex items-center flex-col text-center'>
            <div className=' w-[20vh] aspect-square bg-purple-400 rounded-2xl rotate-6 flex items-center justify-center '>
                <img src="./public/document.gif" alt="submitted" className='w-[90%] rounded-2xl -rotate-6' />
            </div>
            <div className='text-6xl font-bold  text-center text-purple-700 '>
                Test Submitted SuccessFully!
            </div>
            <div className='w-full h-[10vh] flex gap-5 px-20 text-xl mt-10'>
                <div className='w-1/2 h-full bg-gray-300 text-purple-600 rounded-2xl  flex items-center justify-center font-bold text-center'>{tc.testResult.score.toFixed(1)} %<br/>Accuracy</div>
                <div className='w-1/2 h-full bg-emerald-200 rounded-2xl  flex items-center justify-center font-bold text-green-900 text-center'>{tc.testResult.correctAnswers}/{tc.testResult.totalQuestions}<br/> Score</div>                
            </div>
            <div className='w-full h-[8vh] flex gap-5 mt-10'>
                <div className='w-1/2 h-full bg-purple-700 hover:bg-purple-900 shadow-xl shadow-purple-400  rounded-2xl  text-white font-bold text-xl flex items-center justify-center '>
                    <img src="./public/evolution.gif" alt="chart" className='h-[50%] aspect-square mix-blend-color-burn md:mr-1' />
                    Get Complete Review
                </div>
                <div className='w-1/2 h-full bg-gray-300 hover:bg-gray-400  shadow-xl shadow-gray-400 rounded-2xl  text-purple-700 font-bold text-xl flex items-center justify-center ' onClick={()=>{
                    navigate('/')
                }}>
                    <RiHome5Line className='md:mr-2 ml-2 font-bold' />
                    Back To DashBoard
                </div>
            </div>
    </div>
  )
}

export default ViewScoreComponent