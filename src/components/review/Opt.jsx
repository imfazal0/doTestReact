import React, { useEffect } from 'react'

const Opt = ({ opt, qidx , selectedAnswer ,correctAnswer  }) => {
            
   const correct =  selectedAnswer && correctAnswer ;
   const wrong =  selectedAnswer && !correctAnswer;
   const all = !selectedAnswer && !correctAnswer
            
         
    return (
        <div className={`w-full h-full rounded-xl flex p-[2%] gap-2 border-l-2 border-purple-700 ${correct && 'bg-green-400/40 text-green-900'} ${wrong && 'bg-red-500/50 text-red-900'} ${all && "bg-white"} ${correctAnswer && 'bg-green-400/40 text-green-900'} `} >
            <div className={`h-full aspect-square  rounded-lg text-white flex items-center justify-center uppercase ${correct && 'bg-green-700'} ${wrong && 'bg-red-800'} ${correctAnswer && 'bg-green-700'} ${all && 'bg-gray-400'}`}>
                {qidx}
            </div>
            {opt}
        </div>
    )
}

export default Opt