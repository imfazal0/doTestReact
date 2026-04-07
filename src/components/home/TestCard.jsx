import { RiCheckboxCircleFill, RiQuestionFill, RiTimeLine } from '@remixicon/react'
import dayjs from 'dayjs';
import { Link, useNavigate } from 'react-router-dom';


const TestCard = ({test}) => {
    const navigate = useNavigate()
 
            
  return (
    <div className='md:w-[30%] md:h-1/2 h-[30vh] w-full flex flex-col  bg-gray-200 rounded-2xl mt-5 py-[3%] md:py-[1%]  px-[2%]'>
            <div className='flex justify-between h-[15%]'>
                <div className='font-bold'>{test.subject}</div>
                <div className='text-gray-500 flex items-center bg-gray-300 px-2 rounded-2xl text-sm'>{dayjs.unix(test.timestamp.seconds).format("DD MMM YYYY")}</div>
            </div>
                    
            <div className='text-purple-800 h-1/2 flex items-center font-bold md:text-5xl text-3xl'>
            {test.score.toFixed(1)}%
        </div>
        <div className='flex items-center justify-between h-[15%] '>
            <div className='flex items-center text-xs'><RiQuestionFill size={20} color='gray'/>{test.totalQuestions} Question</div>
            <div className='flex items-center text-xs'><RiCheckboxCircleFill size={20} color='gray'/>{test.correctAnswers} Correct</div>
            <div className='flex items-center text-xs'><RiTimeLine size={20} color='gray'/>{test.timeSpent}m</div>
        </div>
        <div className='h-1/5 w-full flex flex-row items-center gap-x-2 ' >
           
            <Link to={`review/${test.testId}`} state={test} className='w-1/2 h-9/12 border border-gray-300 bg-gray-100 font-bold text-purple-700 md:rounded-xl rounded-md flex items-center justify-center hover:bg-gray-200 hover:shadow-2xl transition-all  '>Review</Link>
            <Link  className='w-1/2 h-9/12 border-0 border-gray-300 bg-purple-700 font-bold text-white md:rounded-xl rounded-md flex items-center justify-center  hover:bg-purple-900 hover:shadow-2xl transition-all '>Retake</Link>
            
        </div>

    </div>
  )
}

export default TestCard