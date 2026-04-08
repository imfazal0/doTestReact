import React from 'react'

const ScoreCard = ({value , text ,stats , color}) => {
    
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - value / 100);
  return (
       <div className=" ml-2 min-w-1/4 h-40 bg-white rounded-2xl border border-l-4 border-lime-600 flex p-2 shadow-">

                    <div className="h-full aspect-square relative flex">

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
                                r={radius}
                                stroke={color}
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={circumference}
                                strokeDashoffset={offset} // 50%
                                strokeLinecap="round"
                                className="transition-all duration-500"
                            />

                        </svg>

                        {/* Center text */}
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                            {value.toFixed(1)}%
                        </div>

                    </div>
                     <div className='flex flex-col items-center justify-center font-semibold uppercase'>
                        <div className={`text-xl font-bold`} style={{color:color}}>{stats}</div>
                        <div className='font-bold'>{text}</div>
                     </div>
                </div>
  )
}

export default ScoreCard