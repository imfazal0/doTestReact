import dayjs from 'dayjs'
import React from 'react'

const TestCard = ({ data, setSelectedTest, id }) => {

  function handleDelete(e) {
    setSelectedTest(id)
    console.log(id);
  }



  return (
    <div className='md:w-[25vw] h-[30vh] bg-gray-300 rounded-2xl border-l-4 border-purple-700 p-[1%] flex flex-col md:gap-5 gap-1  font-semibold text-xl'>
      <div className='grid grid-cols-2 w-full h-[50%] px-2'>
        <div className="flex flex-col justify-center" >
          <div className='flex justify-between'><div>{data.subject}</div></div>
          <div className=' text-sm text-purple-700'> Test Id : {data.testId} </div>
        </div >
        <div className=' text-5xl text-purple-700 font-bold drop-shadow-sm flex items-center justify-center'> {(data.score).toFixed(1)}%</div>
      </div>
      <div className='text-sm'>{dayjs.unix(data.timestamp.seconds).format("DD MMM YYYY")}</div>
      <div className=' text-xs text-black font-bold flex gap-5 w-full h-1/12 '>
        <div>Correct Answer : {data.correctAnswers} </div>
        <div>Total Question : {data.totalQuestions} </div>
      </div>
      <div className='grid grid-cols-2 gap-2 justify-around text-white w-full h-1/4'>
        <button className='text-lg bg-purple-700 px-2 rounded-xl hover:bg-purple-600 '>Complte Review</button>
        <button className='text-lg bg-red-300 px-2 text-red-700 rounded-xl hover:bg-red-400 ' onClick={handleDelete} >Delete Test</button>
      </div>
    </div>
  )
}



export default TestCard