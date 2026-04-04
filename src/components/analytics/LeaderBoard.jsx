import React, { useEffect, useRef, useState } from 'react'
import { formatText } from '../../utils/FormatText'
import { RiArrowLeftLine, RiFileExcel2Line, RiFolderInfoLine } from '@remixicon/react'
import dayjs from 'dayjs'
const LeaderBoard = ({ selectedTest, allResults,setShowSelSub , loading }) => {
    const [bestResults, setBestResults] = useState([]);
    const [allBestResults, setAllBestResults] = useState([]);
    const seenUsers = new Set();

    useEffect(() => {
        const seen = new Set();
        const filtered = [];

        allResults.forEach(doc => {
            const data = doc.data();
            const userId = data.userId;

            if (!seen.has(userId)) {
                seen.add(userId);
                filtered.push(doc);
            }
        });

        setBestResults(filtered);
        setAllBestResults(filtered);
    }, [allResults]);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();

        setBestResults(
            allBestResults.filter(doc =>
                doc.data().userName.toLowerCase().includes(value)
            )
        );
    };

    return (
        <div className='w-full min-h-full bg-gray-100 border mt-5 overflow-hidden rounded-2xl'>
            <div className='bg-blue-50 w-full h-1/5 font-bold uppercase p-[2%] text-black text-4xl border-b border-gray-300 '>
                <div>{formatText(selectedTest)} - LeaderBoard</div>
                <div> 
                    <button className='text-xl mt-5 bg-gray-300 p-2 rounded-xl hover:bg-gray-400 flex items-center justify-center' onClick={()=>{setShowSelSub(true)}}>
                        <RiArrowLeftLine />
                        GoBack
                    </button>
                </div>
            </div>
            <div className='w-full h-[10vh] bg-white flex justify-between items-center px-[2%]'>
                <div className='w-1/12 h-9/12 bg-purple-700 text-white font-bold rounded-xl  flex items-center justify-center'>All Time</div>
                <div className='w-1/2 h-full flex'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <input onChange={handleSearch} type="text" placeholder='Search User' className='w-8/12 bg-gray-200 h-7/12 border border-gray-400 outline-0  rounded-lg p-[2%] ' />
                    </div>
                    <div className='w-3/12 h-full flex justify-center items-center' >
                        <button className='bg-purple-700 text-white w-full rounded-sm flex h-7/12 items-center justify-center font-bold'>
                            <RiFileExcel2Line />
                            Export Data
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full '>
                <table className='w-full h-full table-fixed text-xl '>
                    <tr className='h-[10vh] border-b  border-gray-300'>
                        <th className=' w-1/20'>Rank</th>
                        <th className=' w-[15%]'>Name Of Candidate</th>
                        <th className=' w-1/20'>Score</th>
                        <th className=' w-1/20'>Time</th>
                        <th className=' w-1/20'>Date</th>
                    </tr>

                    {
                        !loading && 
                        bestResults.map((res, idx) => (
                            <tr className='h-[5vh] border-b  border-gray-300 text-lg font-'>
                                <th className=' w-1/20 '>
                                <div className='w-full flex justify-center items-center flex-col'>
                                    {idx===0 && <img src='./public/medal_01.gif' className='h-10 mix-blend-multiply'/>}
                                    {idx + 1}
                                </div>
                                </th>
                                <th className=' w-[15%]'>{res.data().userName}</th>
                                <th className=' w-1/20'>{(res.data().score).toFixed(1)} %</th>
                                <th className=' w-1/20'>{res.data().timeSpent}m</th>
                                <th className=' w-1/20'>{dayjs.unix(res.data().timestamp.seconds).format("DD MMM YYYY")}</th>
                            </tr>

                        ))


                    }
                   



                </table>
                 {
                        loading &&
                        <>
                            <div className='w-full h-[5vh] border-b border-gray-300 bg-gray-200 animate-pulse text-lg font-'></div>
                            <div className='w-full h-[5vh] border-b border-gray-300 bg-gray-200 animate-pulse text-lg font-'></div>
                            <div className='w-full h-[5vh] border-b border-gray-300 bg-gray-200 animate-pulse text-lg font-'></div>
                            <div className='w-full h-[5vh] border-b border-gray-300 bg-gray-200 animate-pulse text-lg font-'></div>
                            <div className='w-full h-[5vh] border-b border-gray-300 bg-gray-200 animate-pulse text-lg font-'></div>
                            <div className='w-full h-[5vh] border-b border-gray-300 bg-gray-200 animate-pulse text-lg font-'></div>
                        </>

                    }
                    {
                        bestResults.length<=0 && !loading &&
                        <div className='w-full h-full flex flex-col items-center justify-center text-3xl font-bold text-gray-300 mt-25' >
                            <RiFolderInfoLine size={100}  />
                            No Results Found
                        </div>

                    }
            </div>
        </div>
    )
}

export default LeaderBoard