import { RiArrowLeftLine, RiFileExcelLine, RiHistoryLine } from '@remixicon/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-[20vh] bg-linear-to-l from-purple-700 to-purple-500 rounded-2xl p-[2%] px-[5%] text-white flex justify-between'>
            <div className='flex flex-col'>
                <div className=' font-bold text-3xl flex  items-center'>
                    <RiHistoryLine size={50} />
                    Test History
                </div>
                <div>
                    Review all your previous test attempts and track your progress
                </div>

            </div>
            <div className='flex items-center gap-3'>
                <div className='flex items-center font-bold p-[1%] h-1/2 rounded-2xl bg-purple-500 whitespace-nowrap' onClick={()=>{navigate('/')}}>
                        <RiArrowLeftLine />
                        Back to DashBoard
                </div>
                <div className='flex items-center font-bold p-[1%] h-1/2 rounded-2xl bg-purple-500 whitespace-nowrap '>
                        <RiFileExcelLine className='mr-2' />
                        Export All Data
                </div>
            </div>

        </div>
    )
}

export default Header