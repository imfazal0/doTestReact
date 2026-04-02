import { useContext, useEffect } from "react"
import testData from "../../context/testData"


const Question = ({question, qIdx}) => {
  return (
    <div className="w-full md:min-h-1/5 min-h-1/12 border-l-5 border-purple-700 rounded-2xl bg-gray-100 px-[3%] flex items-center py-[1%]">
        <div className="font-semibold h-full md:text-2xl select-none flex items-center py-5">
            <div className="md:h-full h-[70%] rounded-xl aspect-square flex items-center justify-center m-2 bg-linear-to-b from-purple-700 to bg-purple-500 md:rounded-2xl text-white font-bold shadow-md shadow-purple-400">
                <p>
                Q.{qIdx}
                </p>
            </div>
            <div className="items-center justify-center"> 
           {question}
            </div>

        </div>
    </div>
  )
}

export default Question