import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AllQuestionGrid from '../components/review/AllQuestionGrid'
import { getTestById } from '../utils/FetchData'
import ReviewHeader from '../components/review/ReviewHeader'

const ReviewPage = () => {
  const data = useLocation()
  const navigate = useNavigate();
  const [test, setTest] = useState({
    questionData: [],
    id: [],
  });

  useEffect(() => {
    if (!data.state ) {
        navigate('/')
    } else {
      getTestById(data.state.subject, data.state.testId).then((result) => {
        console.log(result);
        
        return setTest({
          questionData: Object.values(JSON.parse(result.exam)),
          id: Object.keys(JSON.parse(result.exam)),
        })
      })
    }


  }, [])
 

  return (
    <div className='w-screen h-screen px-[5%] py-[2%]'>
      <ReviewHeader data={data}/>
      <AllQuestionGrid test={test} />
    </div>
  )
}

export default ReviewPage