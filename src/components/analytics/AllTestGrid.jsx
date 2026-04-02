import React from 'react'
import TestCard from './TestCard'

const AllTestGrid = ({allTest , selectedSub}) => {
  return (
    <div className='w-full  flex flex-wrap justify-center p-5'>
        {
            allTest.map((test )=>(
                <TestCard key={test.id} testData={test.id} selectedSub={selectedSub} allQuestion={test.data().questionCount}/>
            ))
        }
    </div>
  )
}

export default AllTestGrid