import React from 'react'
import Header from '../components/history/Header'
import Filters from '../components/history/Filters'
import AllTestGrid from '../components/history/AllTestGrid'

const HistoryPage = () => {
  return (
    <div className='w-screen h-screen px-[5%] py-[1%] flex flex-col gap-5'>
        <Header/>
        <Filters/>
        <AllTestGrid/>
    </div>
  )
}

export default HistoryPage