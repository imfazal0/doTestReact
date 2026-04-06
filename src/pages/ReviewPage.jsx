import React, { useContext } from 'react'
import testData from '../context/testData';
import ReviewDataContext from '../context/ReviewDataContext';
import AllQuestionGrid from '../components/review/AllQuestionGrid';

const ReviewPage = () => {


  return (
    <ReviewDataContext>
      <div className=''>
          <AllQuestionGrid/>
      </div>
    </ReviewDataContext>
  )
}

export default ReviewPage