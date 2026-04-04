import { RiCalendarLine, RiFileTextLine, RiFilterFill, RiRulerLine, RiSearchLine } from '@remixicon/react'
import React from 'react'

const Filters = () => {
    return (
        <div className='w-full h-[25vh] bg-gray-300  rounded-2xl border-t-5 py-[2%] border-purple-700 text-gray-600 p-[1%] font-semibold '>
            <div className='flex justify-between'>
                <div className='flex items-center font-bold text-2xl'>
                    <RiFilterFill size={40} />
                    Filter Tests
                </div>
                <div className='bg-gray-400 p-[1%] text-white rounded-xl '>
                    Clear Filters
                </div>
            </div>
            <div className='flex h-full items-center gap-5 '>
                
                <div className='w-1/4 flex justify-center  flex-col'>
                    <div className='flex text-xl items-center'>
                        <RiSearchLine />
                        Search 
                    </div>
                    <div>
                        <input type="text" className='w-full h-[5vh] bg-gray-200 border rounded-lg pl-3 '  placeholder='Search By Test Id'/>
                    </div>
                </div>

                <div className='w-1/4 flex justify-center  flex-col'>
                    <div className='flex text-xl items-center'>
                         <RiFileTextLine />
                        Subject
                    </div>
                    <div>
                        <select name="Select Subject" id="" className='w-full h-[5vh] bg-gray-200 border rounded-lg pl-3 '>
                                <option value="" disabled>Select Subject</option>
                                    {
                                        
                                    }
                        </select>
                    </div>
                </div>

                <div className='w-1/4 flex justify-center  flex-col'>
                    <div className='flex text-xl items-center'>
                        <RiCalendarLine size={20} />
                        Select Date Range
                    </div>
                    <div>
                         <select name="Select Subject" id="" className='w-full h-[5vh] bg-gray-200 border rounded-lg pl-3 '>
                                <option value="" disabled>All Time</option>
                                <option value="" >All Time</option>
                                <option value="" >Today</option>
                                <option value="" >Last Week</option>
                                <option value="" >Last Month</option>
                                   
                        </select>
                    </div>
                </div>


                <div className='w-1/4 flex justify-center  flex-col'>
                    <div className='flex text-xl items-center'>
                      <RiRulerLine />
                        Select Score Range
                    </div>
                    <div>
                        <input type="range" className='w-full h-[5vh] bg-gray-200 border rounded-lg pl-3 '  placeholder='Search Test'/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Filters