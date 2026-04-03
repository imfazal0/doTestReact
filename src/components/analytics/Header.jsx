import { RiArrowLeftLine, RiRestartLine, RiTrophyFill } from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';

const Header = ({ subject , selectedSub , setSelectedSub }) => {
   
    useEffect(()=>{
        
    },[selectedSub])


const navigate = useNavigate()



    return (
        <div className='w-full h-4/12 bg-linear-to-br from-purple-700 to-purple-300 rounded-2xl text-white text-2xl p-[2%] flex flex-col overflow-hidden'>
            <div className='w-full h-1/2 flex md:flex-row flex-col justify-between mb-5'>
                <div className='md:w-1/3 w-full flex flex-col'>
                    <div className='flex items-center'>
                        <RiTrophyFill size={50} />
                        <p className='font-bold'>Analytics & Leaderboards</p>
                    </div>
                    <div className='text-sm'>
                        Track performance, compare scores, and see top performers
                    </div>
                </div>
                <div className='md:w-1/3 w-full flex justify-center items-center gap-x-2 mt-5'>
                    <div onClick={()=>{navigate('/')}} className='font-bold md:text-xl text-lg flex items-center justify-center bg-purple-800 p-3 rounded-xl'>
                        <RiArrowLeftLine />
                        <div>
                            Back To DashBoard
                        </div>
                    </div>
                    <div className='md:text-xl text-lg  font-bold flex items-center justify-center bg-white text-purple-700 p-3 rounded-xl'>
                        <RiRestartLine />
                        <div>
                            Refresh Data
                        </div>
                    </div>
                </div>
            </div>

            {/* selectSub */}
            <div className='w-full h-1/2 flex items-center bg-purple-800 rounded-2xl justify-center  flex-row-reverse flex-nowrap overflow-x-auto gap-5 p-1 '>
                {
                    subject.map((subject, index) => {
                        return (
                            <div key={index} className={`min-w-40 h-full rounded-xl text-sm flex items-center justify-center font-bold px-5 ${selectedSub === subject.sub ?' bg-white text-purple-800' : 'bg-transparent'}` } 

                                onClick={()=>{setSelectedSub(subject.sub)}}
                            >
                                <img src={subject.icon} alt="Subject Image" className='h-1/2 aspect-square' />
                                <p className='pr-5'>{subject.sub}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Header