import {  useState } from 'react';
import TestDataWrap from './testData';

const TestDataContext = ({children}) => {
    const [testData, setTestData] = useState([]);
    const [test , setTest] = useState([]);
    const [startExam, setStartExam] = useState(false);
  return (
    <TestDataWrap.Provider value={{testData , setTestData ,test , setTest , startExam , setStartExam}} >
        {children}
    </TestDataWrap.Provider>
  )
}

export default TestDataContext