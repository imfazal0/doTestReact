import { useContext, useEffect } from "react"
import testData from "../../context/testData"


const Question = ({question}) => {
  return (
    <div className="w-full min-h-1/5 border-l-5 border-purple-700 rounded-2xl bg-gray-100 px-[3%] flex items-center py-[1%]">
        <p className="font-semibold text-xl">
            Q.{question}

        </p>
    </div>
  )
}

export default Question