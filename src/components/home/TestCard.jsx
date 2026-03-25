import { RiCheckboxCircleFill, RiQuestionFill, RiTimeLine } from '@remixicon/react'


const TestCard = ({test}) => {
     
    const date = test.timestamp ? 
                new Date(test.timestamp.seconds * 1000).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }) : 'Recent';
   
  return (
    <div className='w-[30%] h-[40%] bg-gray-200 rounded-2xl mt-5 p-[1%] px-[2%]'>
            <div className='flex justify-between h-[15%]'>
                <div className='font-bold'>{test.subject}</div>
                <div className='text-gray-500 flex items-center bg-gray-300 px-2 rounded-2xl text-sm'>{date}</div>
            </div>
                    
            <div className='text-purple-800 h-1/2 flex items-center font-bold text-5xl '>
            {test.score.toFixed(1)}%
        </div>
        <div className='flex items-center justify-between h-[15%] '>
            <div className='flex items-center'><RiQuestionFill size={20} color='gray'/>{test.totalQuestions} Question</div>
            <div className='flex items-center'><RiCheckboxCircleFill size={20} color='gray'/>{test.correctAnswers} Correct</div>
            <div className='flex items-center'><RiTimeLine size={20} color='gray'/>{test.timeSpent}m</div>
        </div>
        <div className='h-1/5 w-full flex flex-row items-center gap-x-2'>
            <div className='w-1/2 h-9/12 border border-gray-300 bg-gray-50 font-bold text-gray-500 rounded-sm flex items-center justify-center '>Review</div>
            <div className='w-1/2 h-9/12 border border-gray-300 bg-gray-50 font-bold text-gray-500 rounded-sm flex items-center justify-center '>Retake</div>
            
        </div>

    </div>
  )
}

export default TestCard