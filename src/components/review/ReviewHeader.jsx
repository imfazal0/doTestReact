import { RiBarChartLine } from '@remixicon/react'
import React from 'react'
import ScoreCard from './ScoreCard';

const ReviewHeader = ({data}) => {
    console.log(data.state);
    
  

    return (
        <div className='w-full  shadow-xl rounded-2xl p-[1%] flex flex-col font-semibold '>
            <div className='w-full text-yellow-500 flex text-2xl items-center '>
                <RiBarChartLine />
                Performance Summary
            </div>
            <div className='w-full h-full flex py-1'>
                <ScoreCard value={data.state.score} text={"Overall Score"} />
            </div>
        </div>
    )
}

export default ReviewHeader