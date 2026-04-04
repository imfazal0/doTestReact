import React from 'react'

const TestCard = () => {
  return (
    <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl border-l-4 border-purple-700 p-[1%] grid grid-row-5 font-semibold text-xl'>
        <div className=''> Python</div>
        <div className=''> </div>
        <div className=' text-sm text-purple-700'> Test Id : python_7148 </div>
        <div className=' text-3xl text-purple-700 font-bold'> 66 %</div>
        <div className=' text-xs text-purple-700 font-bold flex justify-evenly'> 
            <div>Correct : 25 </div>
            <div>Total : 50 </div>
        </div>
        <div className='flex justify-around text-white'>
            <button className='bg-gra'>Complte Review</button>
            <button>Delete Test</button>
        </div>
    </div>
  )
}

export default TestCard