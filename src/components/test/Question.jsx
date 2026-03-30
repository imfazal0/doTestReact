import { useContext, useEffect } from "react"
import testData from "../../context/testData"


const Question = ({question, qIdx}) => {
  return (
    <div className="w-full min-h-1/5 border-l-5 border-purple-700 rounded-2xl bg-gray-100 px-[3%] flex items-center py-[1%]">
        <div className="font-semibold text-xl select-none">
            <div className="inline p-2 m-2 bg-linear-to-b from-purple-700 to bg-purple-500 rounded-2xl text-white font-bold shadow-md shadow-purple-400">
               Q.{qIdx}
            </div>
           {question}

        </div>
    </div>
  )
}

export default Question