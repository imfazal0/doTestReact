import {  useEffect, useState } from 'react';
import TestDataWrap from './testData';

const TestDataContext = ({children}) => {
    const [testData, setTestData] = useState([]);
    const [test , setTest] = useState([]);
    const [startExam, setStartExam] = useState(false);
    const [testResult, setTestResult] = useState({
      userAnswers:[],
    });

    useEffect(()=>{
    },[testResult])


  return (
    <TestDataWrap.Provider value={{testData , setTestData ,test , setTest , startExam , setStartExam , testResult , setTestResult}} >
        {children}
    </TestDataWrap.Provider>
  )
}

export default TestDataContext