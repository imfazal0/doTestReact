import { RiBarChartLine } from '@remixicon/react'
import React from 'react'

const ReviewHeader = () => {
    const value = 50
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - value / 100);

    return (
        <div className='w-full  shadow-xl rounded-2xl p-[1%] flex flex-col font-semibold '>
            <div className='w-full text-yellow-500 flex text-2xl items-center '>
                <RiBarChartLine />
                Performance Summary
            </div>
            <div className='w-full h-full flex py-1'>

                <div className="w-1/4 h-40 bg-white rounded-2xl border border-l-4 border-lime-600 flex p-2">

                    <div className="h-full aspect-square relative">

                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">

                            {/* Background */}
                            <circle
                                cx="50"
                                cy="50"
                                r={40}
                                stroke="#e5e7eb"
                                strokeWidth="8"
                                fill="transparent"
                            />

                            {/* Progress */}
                            <circle
                                cx="50"
                                cy="50"
                                r={40}
                                stroke="#5EA500"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={251.2}
                                strokeDashoffset={125.6} // 50%
                                strokeLinecap="round"
                                className="transition-all duration-500"
                            />

                        </svg>

                        {/* Center text */}
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                            50%
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ReviewHeader