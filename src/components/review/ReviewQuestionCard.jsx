import React, { useState } from 'react'
import Opt from './Opt'
import { explainQuestion } from '../../utils/Explanation'

const ReviewQuestionCard = ({ data, id , userAnswer }) => {
    const qidx = ['a', 'b', 'c', 'd']
    const [loading , setLoading ] = useState(true);
    const [explanation , setExplanation ] = useState('');
    const[show , setShow] = useState(false);
    const handleExplanation = async ()=>{
        setShow(!show);
        if (!explanation.length) {
        try{
            explainQuestion(data ).then((result)=>{
                setExplanation(result);
                setLoading(false);

            })
        }catch(err){
                console.log(err);       
        }}
    }

    return (
        <div className='md:w-[25vw] w-full md:min-h-[50vh]  bg-gray-200 rounded-2xl  md:p-[1%] p-[5%] font-semibold border-t-4 border-purple-700 flex  flex-col md:gap-2 gap-5 shadow-xl' >
            <div className='grid'>
                <div className='flex h-10 gap-2' >
                    <div className='h-full aspect-square bg-purple-700 rounded-xl shadow-xl text-white uppercase flex items-center justify-center font-bold' >{id}</div>
                    <div className='w-full bg-white  rounded-xl shadow-xl text-purple-700 uppercase flex items-center justify-center font-bold' 
                        onClick={handleExplanation}
                    >View Explanation</div>
                </div>
                <div className='w-full text-lg'>{data.question}</div>
            </div>
            {   show && 
                <div className='w-full px-[2%] flex flex-col gap-2 relative'>
                    {
                        loading &&
                        <>
                        <div className='flex items-center justify-center'><img src="/public/ai.gif" className=' h-15 aspect-square z-10 mix-blend-multiply' alt="" /><span className='font-bold uppercase text-sm animate-pulse '>Generating</span></div>
                        <div className='w-full bg-gray-400 h-5 rounded-2xl animate-pulse z-0'></div>
                        <div className='w-full bg-gray-400 h-5 rounded-2xl animate-pulse z-0'></div>
                        <div className='w-full bg-gray-400 h-5 rounded-2xl animate-pulse z-0'></div>
                        <div className='w-full bg-gray-400 h-5 rounded-2xl animate-pulse z-0'></div>
                        </>
                    }
                    {
                        !loading && 
                        <>
                        {explanation}
                        </>
                    }
                </div>
            }
            <div className='w-full h-[25vh] flex flex-col gap-2'>
                        {
                            Object.values(data.options).map((opt,idx)=>(
                                   <Opt opt={opt} key={idx} qidx={qidx[idx]} selectedAnswer={userAnswer === qidx[idx]} correctAnswer={data.correctAnswer === qidx[idx]} />
                            ))
                        }
            </div>
            <div>
                You Selected <span className='font-bold uppercase text-green-700 text-xl'>{userAnswer}</span> The Write Answer is <span className='font-bold uppercase text-green-700 text-xl '>{data.correctAnswer}</span>
            </div>

        </div>
    )
}

export default ReviewQuestionCard