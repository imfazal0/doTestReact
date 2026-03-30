import { RiArrowLeftLine, RiFileFill, RiFolderOpenLine } from '@remixicon/react';
import React, { useContext } from 'react'
import testData from '../../../context/testData';
import { formatText } from '../../../utils/FormatText';

const NavTest = ({setShowSubject}) => {

    const tc = useContext(testData);

      const selTest = (e)=>{
      const selectedTest = tc.testData.filter((test)=>{
        return test.data().testName === e.target.id });
        tc.setTest(selectedTest);
        tc.setTestResult(prev=>({...prev , testId:e.target.id}));
        tc.setStartExam(true);
  }


  return (
     <div className=' w-full h-[80%] shrink-0 ' >
        <div className='w-1/2 h-[10%] border border-gray-500 hover:bg-gray-300 bg-gray-100 flex items-center rounded-2xl justify-center font-bold text-gray-500  '
         onClick={()=>{
            setShowSubject(true);
            tc.setTestData([])}}>
            <RiArrowLeftLine />
            Back to Subject
        </div>
        <div className='w-full max-h-[95%] overflow-scroll  pb-10'> 



          {tc.testData.length > 0 &&
          
          tc.testData.reverse().map((test,idx)=>{
          return(
            <div  className='relative hover:bg-gray-200 w-[90%] h-[10%] mt-[3%] bg-gray-300  rounded-2xl flex p-[2%] items-center gap-x-2 border hover:border-l-4 hover:border-purple-700' key={idx} >
              <div className='absolute z-100 w-full h-full top-0 left-0 rounded-2xl ' id={test.data().testName} 
              onClick={selTest}  ></div>
              <RiFileFill />
              <p>{formatText(test.data().testName)}</p>
          </div>
          )
        })}
      {
          tc.testData.length<= 0 && 
          <div className='w-full h-full flex  flex-col items-center justify-center text-3xl font-bold text-gray-300'>
            <div className='w-full flex justify-center'>
              <RiFolderOpenLine size={200}/>
            </div>
            <div className='w-full flex justify-center'>
              No Test Available
            </div>
          </div>
        }

      </div>
      </div>
  )
}

export default NavTest