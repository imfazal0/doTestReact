import React from 'react'
import ReviewQuestionCard from './ReviewQuestionCard'
import { useLocation } from 'react-router-dom'

const AllQuestionGrid = ({test}) => {
  const data = useLocation();
  
  

  return (
    <div className='w-full  flex flex-wrap justify-center'>
          {
            test.id.map((doc , idx)=>(
              <ReviewQuestionCard data={test.questionData[idx]} id={test.id[idx]}  key={idx} userAnswer={data.state.userAnswers[idx]} />
            ))
          }
    </div> 
  )
}

export default AllQuestionGrid