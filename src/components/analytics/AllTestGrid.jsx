import React from 'react'
import TestCard from './TestCard'

const AllTestGrid = ({allTest , selectedSub , setSelectedTest , setShowSelSub}) => {
  return (
    <div className='w-full  flex flex-wrap justify-center p-5'>
        {
            allTest.map((test )=>(
                <TestCard key={test.id} testData={test.id} selectedSub={selectedSub} allQuestion={test.data().questionCount} setSelectedTest={setSelectedTest} setShowSelSub={setShowSelSub} />
            ))
        }
    </div>
  )
}

export default AllTestGrid