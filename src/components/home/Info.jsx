import React from 'react'
import { RiDashboard3Line, RiLogoutBoxRLine } from '@remixicon/react'

const Info = ({ user, handleSignOut }) => {
    return (
        <div className='w-full h-1/2 flex md:flex-row flex-col  justify-between items-center text-white md:items-start'>
            <div className='h-full flex flex-col justify-center'>
                <div className='flex text-3xl font-bold flex-row items-center  gap-2'><div>
                    <RiDashboard3Line size={40} />
                </div><h1>Dashboard</h1></div>
                <div className='text-sm text-white font-bold'>
                    Track your progress and test history
                </div>
            </div>
            <div className='md:w-1/2 h-full flex '>
                <div className='w-3/4  flex gap-2 justify-center items-center '>
                    <div className='w-4/5 h-full flex flex-col items-center justify-center '>
                        <div className='w-full flex items-center justify-end md:text-xl font-bold'>{user.name}</div>
                        <div className='w-full font-medium flex items-center justify-end text-white'>{user.email}</div>
                    </div>
                    <div className='w-1/5 h-full flex items-center'>
                        <img className='w-9/12 rounded-full object-cover aspect-square' src={user.profilePicture} alt="Profile" />
                    </div>
                </div>
                <div className=' w-1/4  h-full flex items-center justify-end '>
                    <button onClick={handleSignOut} className='flex gap-2 w-full h-1/2 rounded-2xl bg-gray-500 hover:bg-gray-400 opacity-[0.8] items-center justify-center font-bold text-white text-xs'>
                        <p>LogOut</p>
                        <div className='hidden md:flex'>
                        <RiLogoutBoxRLine />
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Info