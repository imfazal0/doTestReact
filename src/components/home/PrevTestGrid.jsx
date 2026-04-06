import { RiArrowDropRightLine, RiHistoryLine } from '@remixicon/react'
import React, { useContext, useEffect, useState } from 'react'
import TestCard from './TestCard'
import UserInfo from '../../context/userInfo'
import { useNavigate } from 'react-router-dom'

const PrevTestGrid = () => {
    const uc = useContext(UserInfo);
    const [test , setTest] = useState(uc.user.totalTestData);
    const navigate = useNavigate();
    useEffect(()=>{
        setTest(uc.user.totalTestData)
    },[uc.user])


  return (
    <div className='md:w-full md:h-full h-full'>
        <div className='flex justify-between items-center'>
            <div className='flex h-[10%] font-bold text-xl items-center justify-center'><RiHistoryLine />Recent Test</div>
            <div className='flex h-[10%]   text-l bg-gray-100 items-center justify-center border border-gray-300  rounded-sm' 
                onClick={()=>{navigate('/history')}}
            >View-All <RiArrowDropRightLine /></div>
        </div>
        <div className='w-full md:h-full flex  flex-col md:flex-row md:flex-wrap md:gap-2 md:justify-center '>

        {
            test &&
            test.map((test,idx)=>{
                return idx<6 ? <TestCard test={test} key={crypto.randomUUID()} /> : ''
            })
            
        }{
            !test && <div>
                loading data
            </div>
        }
        </div>

    </div>
  )
}

export default PrevTestGrid