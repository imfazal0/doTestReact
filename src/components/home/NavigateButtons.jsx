import { RiBook3Fill, RiHistoryLine, RiLineChartFill } from '@remixicon/react'
import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

const NavigateButtons = () => {

    const navigate = useNavigate()
    
    const handleNavigation = {
        test:()=>{ navigate('/test')},
        analytics:()=>{ navigate('/analytics')},
        history:()=>{ navigate('/history')}
    }




  return (
    <div className='w-full h-1/3  p-[1%] flex justify-evenly'>
        <div className='w-1/4 border border-gray-200 h-full bg-linear-to-tr from-blue-800 to-blue-400 rounded-2xl font-bold text-white text-shadow-2xs flex flex-col items-start px-[2%] justify-center hover:scale-[1.02] hover:relative hover:-top-1  transition-all duration-300' onClick={handleNavigation.test}>
                <RiBook3Fill color='white' size={50}/>
                <h1 className='text-xl pt-5'>Take A Test</h1>
                <p>Start A new Test To improve Your Skills</p>
        </div>
        <div className='w-1/4 border border-gray-200 h-full bg-linear-to-tr from-green-400 to-green-500 rounded-2xl font-bold text-white text-shadow-2xs flex flex-col items-start px-[2%] justify-center hover:scale-[1.02] hover:relative hover:-top-1 transition-all duration-300' onClick={handleNavigation.analytics}>
                <RiLineChartFill color='white' size={50}/>
                <h1 className='text-xl pt-5'>View Analytics</h1>
                <p>See detailed analytics</p>
        </div>
        <div className='w-1/4 border border-gray-200 h-full bg-linear-to-tr from-orange-300 to-orange-500 rounded-2xl font-bold text-white text-shadow-2xs flex flex-col items-start px-[2%] justify-center hover:scale-[1.02] hover:relative hover:-top-1 transition-all duration-300' onClick={handleNavigation.history}>
                <RiHistoryLine color='white' size={50} />
                <h1 className='text-xl pt-5'>Test History</h1>
                <p>Check Your Test History</p>
        </div>
    </div>
  )
}

export default NavigateButtons