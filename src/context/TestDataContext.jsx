import {  useState } from 'react';
import TestDataWrap from './testData';

const TestDataContext = ({children}) => {
    const [testData, setTestData] = useState([]);
    const [test , setTest] = useState([]);
  return (
    <TestDataWrap.Provider value={{testData , setTestData ,test , setTest}} >
        {children}
    </TestDataWrap.Provider>
  )
}

export default TestDataContext