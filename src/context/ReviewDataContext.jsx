import { createContext, useState } from "react"

export const ReviewData = createContext(null)


const ReviewDataContext = ({children}) => {
    const [reviewData , setReviewData] = useState({});
  return (
    <ReviewData.Provider value={{reviewData, setReviewData}}>
        {children}
    </ReviewData.Provider>

  )
}

export default ReviewDataContext