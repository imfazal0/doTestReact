import React from 'react'
import TestCard from './TestCard'
import { data } from 'react-router-dom'

const AllTestGrid = ({filterData}) => {




  return (
    <div className='w-full flex flex-wrap gap-3 justify-center '>
      {
        filterData.map((data,idx) =>(
          <TestCard data={data} key={idx}/>
        ))

      }
        
    </div>
  )
}

export default AllTestGrid