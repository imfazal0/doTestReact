import React, { useContext } from 'react'
import UserInfo from '../../../context/userInfo'
import { RiDashboard3Line } from '@remixicon/react';

const NavHeader = () => {
    const uc = useContext(UserInfo);
  return (
     <div className='w-full h-[20%] border-b border-gray-300'>
        <div className='flex w-full h-1/2 gap-2'>
          <div className='flex w-[20%] p-[2%]'>
            <img src={uc.user.profilePicture} alt="" className='h-full  aspect-square rounded-full' />
          </div>
          <div className='font-bold text-gray-600 flex flex-col justify-center'>
            <p>{uc.user.name}</p>
            <p className='text-sm'>{uc.user.email}</p>
          </div>
        </div>
        <div className='h-1/2 w-full p-[3%] '>
            <div className='h-full w-1/2 text-xl font-bold flex justify-center items-center text-white  bg-purple-700 rounded-2xl hover:border-2 hover:border-purple-700 hover:bg-white hover:text-purple-700  ' onClick={()=>{navigate('/')}}>
                <div className='w-1/4 flex items-center justify-center'>
                <RiDashboard3Line/> 
                </div>
                <div className='flex-1 text-sm md:text-xl items-center justify-center'>
                  DashBoard
                </div>
            </div>
        </div>
      </div>
  )
}

export default NavHeader