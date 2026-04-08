import { RiArrowLeftLine, RiFileExcelLine, RiHistoryLine } from '@remixicon/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ handlExport }) => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-[20vh] gap-5 bg-linear-to-l from-purple-700 to-purple-500 rounded-2xl p-[2%] px-[5%] text-white flex justify-between flex-col md:flex-row'>
            <div className='flex flex-col'>
                <div className=' font-bold md:text-3xl flex  items-center gap-2'>
                    <RiHistoryLine />
                    Test History
                </div>
                <div>
                    Review all your previous test attempts and track your progress
                </div>
            </div>
            <div className='flex items-center gap-3 h-full text-sm'>
                <div className='flex items-center font-bold p-[1%] md:h-full  md:rounded-2xl rounded-xl px-2 md:bg-purple-500 bg-purple-800  whitespace-nowrap' onClick={() => { navigate('/') }}>
                    <RiArrowLeftLine />
                    Back to DashBoard
                </div>
                <div className='flex items-center font-bold p-[1%] md:h-full  md:rounded-2xl rounded-xl px-2 bg-white text-purple-700  whitespace-nowrap ' onClick={handlExport}>
                    <RiFileExcelLine className='mr-2' />
                    Export All Data
                </div>
            </div>

        </div>
    )
}

export default Header