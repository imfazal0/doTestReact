import { RiArrowLeftLine, RiBarChartLine, RiFileExcelLine, RiPrinterFill } from '@remixicon/react'
import React from 'react'
import ScoreCard from './ScoreCard';
import { Link } from 'react-router-dom';

const ReviewHeader = ({ data }) => {



    return (
        <div className='w-full md:h-[40vh]  shadow-xl rounded-2xl p-[1%] flex flex-col font-semibold gap-5'>
            <div className='w-full md:h-1/2 gap-5 h-full text-yellow-500 flex text-2xl items-center md:flex-row flex-col justify-between border-b border-gray-300'>
                <div className='flex items-center justify-center gap-5'>
                    <RiBarChartLine />
                    Performance Summary
                </div>
                <div className='flex h-full font-semibold md:h-full gap-2 pb-5'>
                    <Link to={'/'} className='text-white h-full px-5 bg-purple-700 p-1 md:text-lg text-xs rounded-lg hover:bg-purple-700 flex items-center'><RiArrowLeftLine /> Back To DashBoard</Link>
                    <button onClick={()=>{
                        window.print()
                    }} className='text-black px-5 h-full bg-gray-200 p-1 md:text-lg text-xs rounded-lg hover:bg-gray-300 flex items-center'><RiPrinterFill /> Export The Data</button>
                </div>
            </div>
            <div className='w-full h-full flex md:flex-row flex-col  py-1 gap-2'>
                <ScoreCard value={data.state.score} text={"Overall Score"} stats={`${data.state.correctAnswers}/${data.state.totalQuestions}`} color={'#5EA500'} />
                <ScoreCard value={100 - data.state.score} text={"Incorrect Answers"} stats={`${data.state.totalQuestions - data.state.correctAnswers}/${data.state.totalQuestions}`} color={'#FF6A6A'} />
                <div className='w-full h-full  p-[2%] font-semibold flex text-center'>
                    <table className='w-full '>
                        <tbody >
                            <tr >
                                <td>
                                    TimeSpent :
                                </td>
                                <td

                                >{(data.state.timeSpent / 60).toFixed(1)} min</td>
                            </tr>
                            <tr>
                                <td>
                                    Subject :
                                </td>
                                <td>
                                    {data.state.subject}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Test Id :
                                </td>
                                <td>
                                    {data.state.testId}
                                </td>
                            </tr>
                            <tr>
                                <td>

                                    User Name :
                                </td>
                                <td>
                                    {data.state.userName}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ReviewHeader