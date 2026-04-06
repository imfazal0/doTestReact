import React, { useContext, useEffect } from 'react'
import { ReviewData } from '../../context/ReviewDataContext';

const AllQuestionGrid = () => {
    const rc = useContext(ReviewData);
    useEffect(()=>{ 
        console.log(rc);
        },[rc.reviewData])

  return (
    <div className='text-black'>
    </div>
  )
}

export default AllQuestionGrid