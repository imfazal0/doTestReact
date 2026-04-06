import { RiArrowLeftLine, RiRestartLine, RiTrophyFill } from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';

const Header = ({ subject , selectedSub , setSelectedSub , loading }) => {
  


const navigate = useNavigate()



    return (
        <div className='w-full md:h-4/12 bg-linear-to-br from-purple-700 to-purple-300 rounded-2xl text-white text-2xl p-[2%] flex flex-col overflow-hidden'>
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
                    <div  className='md:text-xl text-lg  font-bold flex items-center justify-center bg-white text-purple-700 p-3 rounded-xl'
                        onClick={()=>{window.location.reload()}}
                    >
                        <RiRestartLine />
                        <div>
                            Refresh Data
                        </div>
                    </div>
                </div>
            </div>

            {/* selectSub */}
            <div className='w-full md:h-1/2  flex flex-col-reverse  md:items-center bg-purple-800 rounded-2xl md:justify-center  md:flex-row-reverse flex-nowrap overflow-x-auto gap-5 p-1 '>
                {
                    !loading &&
                    subject.map((subject, index) => {
                        return (
                            <div key={index} className={`min-w-40 md:h-full h-[5vh] rounded-xl text-sm flex items-center md:justify-center font-bold px-5 ${selectedSub === subject.subject ?' bg-white text-purple-800' : 'bg-transparent'}` } 

                                onClick={()=>{setSelectedSub(subject.subject)}}
                            >
                                <img src={subject.icon} alt="Subject Image" className='h-1/2 aspect-square' />
                                <p className='pr-5'>{subject.subject}</p>
                            </div>
                        )
                    })
                }
                {
                    loading &&
                    <>
                            <div  className='w-full h-full bg-gray-300 animate-pulse rounded-xl text-sm flex items-center justify-center font-bold px-5 '> </div>
                            <div  className='w-full h-full bg-gray-300 animate-pulse rounded-xl text-sm flex items-center justify-center font-bold px-5 '> </div>
                            <div  className='w-full h-full bg-gray-300 animate-pulse rounded-xl text-sm flex items-center justify-center font-bold px-5 '> </div>
                            <div  className='w-full h-full bg-gray-300 animate-pulse rounded-xl text-sm flex items-center justify-center font-bold px-5 '> </div>
                            <div  className='w-full h-full bg-gray-300 animate-pulse rounded-xl text-sm flex items-center justify-center font-bold px-5 '> </div>
                            <div  className='w-full h-full bg-gray-300 animate-pulse rounded-xl text-sm flex items-center justify-center font-bold px-5 '> </div>
                    </>

                }

            </div>
        </div>
    )
}

export default Header