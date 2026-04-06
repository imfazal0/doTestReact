import React from 'react'
import TestCard from './TestCard'
import { data } from 'react-router-dom'
import { RiFolderInfoLine } from '@remixicon/react'

const AllTestGrid = ({ filterData , setSelectedTest }) => {




  return (
    <div className='w-full flex flex-wrap gap-3 justify-center '>
      {
        filterData.length > 0 &&
        filterData.map((data) => (
          <TestCard data={data.data}  key={data.id} id={data.id} setSelectedTest={setSelectedTest} />
        ))
      }
      {
        filterData.length <= 0 &&
        <div className='w-full h-full flex flex-col items-center justify-center text-3xl font-bold text-gray-300 mt-25' >
          <RiFolderInfoLine size={100}  />
          No Tests Found
        </div>
      }


    </div>
  )
}

export default AllTestGrid