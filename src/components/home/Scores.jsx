import React, { useEffect, useState } from 'react'
import app from '../../../firebaseConfig/config';
import { loadStatistics } from '../../utils/StatisticLogic';
const Scores = ({user,setUser}) => {
   
    const [stats , setStats] = useState({
        totalTests: '',
        avgScore: '',
        totalTime:'',
        streak:'',
    })

    useEffect(()=>{
        loadStatistics(user.uid).then((result)=>{
            setStats(result)
            setUser(prev=>({...prev , totalTestData:result.totalTestData}))
        })
    },[])


  return (
    <div className='w-full h-1/2 gap-x-2 gap-y-1 items-center justify-center  flex font-bold flex-wrap md:flex-nowrap text-white'>
        <div className='md:h-full h-1/2 md:w-1/4 w-[45%] flex flex-col items-center justify-center bg-linear-to-t from-purple-800 to-purple-700 rounded-2xl shadow-xl '>
            <div className='w-fulll h-1/2 flex items-end justify-center text-xl'>{stats.totalTests}</div>
            <div className='w-full h-1/2 flex  justify-center '>Total Test Taken</div>
        </div>
        <div className='md:h-full h-1/2 md:w-1/4 w-[45%] flex flex-col bg-linear-to-t from-purple-800 to-purple-700 rounded-2xl shadow-xl '>
             <div className='w-fulll h-1/2 flex items-end justify-center md:text-xl'>{stats.avgScore}</div>
            <div className='w-full h-1/2 flex  justify-center '>Average Score</div>
        </div>
        <div className='md:h-full h-1/2 md:w-1/4 w-[45%] flex flex-col bg-linear-to-t from-purple-800 to-purple-700 rounded-2xl shadow-xl '>
              <div className='w-fulll h-1/2 flex items-end justify-center text-xl'>{stats.totalTime}</div>
            <div className='w-full h-1/2 flex  justify-center '>Total Time Spent</div>
        </div>
        <div className='md:h-full h-1/2 md:w-1/4 w-[45%] flex flex-col bg-linear-to-t from-purple-800 to-purple-700 rounded-2xl shadow-xl '>
             <div className='w-fulll h-1/2 flex items-end justify-center text-xl'>{stats.streak}</div>
            <div className='w-full h-1/2 flex  justify-center '>Day Streak</div>
        </div>
    </div>
  )
}

export default Scores