import { RiCalendarLine, RiFileTextLine, RiFilterFill, RiRulerLine, RiSearchLine } from '@remixicon/react'
import React from 'react'
import { formatText } from '../../utils/FormatText'
import dayjs from 'dayjs';

const Filters = ({ subject, setSelectedSub, setTest, setDate ,clearFilter }) => {
    const timestamps = {
        today: dayjs().startOf('day').unix(),
        last_week: dayjs().subtract(7, 'day').startOf('day').unix(),
        last_month: dayjs().subtract(1, 'month').startOf('day').unix(),
        all_time:'0'
    };

    function handleSub(e) {
        setSelectedSub(e.target.value);
    }
    function handleSearch(e) {
        setTest(e.target.value)
    }

    function handleDate(e) {
        setDate(timestamps[e.target.value]);
    }


    return (
        <div className='w-full h-[25vh] bg-gray-300  rounded-2xl border-t-5 py-[2%] border-purple-700 text-gray-600 p-[1%] font-semibold '>
            <div className='flex justify-between'>
                <div className='flex items-center font-bold text-2xl'>
                    <RiFilterFill size={40} />
                    Filter Tests
                </div>
                <div className='bg-gray-400 p-[1%] text-white rounded-xl ' onClick={clearFilter}>
                    Clear Filters
                </div>
            </div>
            <div className='flex h-full items-center gap-5 '>

                <div className='w-1/4  flex justify-center  flex-col'>
                    <div className='flex gap-2 text-xl items-center'>
                        <RiSearchLine />
                        Search
                    </div>
                    <div>
                        <input type="text" onChange={handleSearch} className='w-full h-[5vh] bg-gray-200 border rounded-lg pl-3 ' placeholder='Search By Test Id' />
                    </div>
                </div>

                <div className='w-1/4  flex justify-center  flex-col'>
                    <div className='flex gap-2 text-xl items-center'>
                        <RiFileTextLine />
                        Subject
                    </div>
                    <div>
                        <select name="Select Subject" onChange={handleSub} className='w-full h-[5vh] bg-gray-200 border rounded-lg pl-3 '>
                            <option value="all_Subject" >All Subject</option>
                            {
                                subject.map((sub, idx) => {
                                    return (
                                        <option value={sub.subject} key={idx}>{sub.subject}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className='w-1/4  flex justify-center  flex-col'>
                    <div className='flex gap-2 text-xl items-center'>
                        <RiCalendarLine />
                        Select Date Range
                    </div>
                    <div>
                        <select name="Select Subject" onChange={handleDate} className='w-full h-[5vh] bg-gray-200 border rounded-lg pl-3 '>
                            <option value="all_time" >All Time</option>
                            <option value="today" >Today</option>
                            <option value="last_week" >Last Week</option>
                            <option value="last_month" >Last Month</option>

                        </select>
                    </div>
                </div>


                <div className='w-1/4  flex justify-center  flex-col'>
                    <div className='flex  gap-2 text-xl items-center'>
                        <RiRulerLine />
                        Select Score Range
                    </div>
                    <div>
                        <input type="range" className='w-full h-[5vh] bg-gray-200 border rounded-lg pl-3 ' placeholder='Search Test' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Filters