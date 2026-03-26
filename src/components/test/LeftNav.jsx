import React, { useContext, useEffect, useRef, useState } from 'react'
import UserInfo from '../../context/userInfo'
import { collection, getDocs, getFirestore,  orderBy,  query } from 'firebase/firestore';
import app, { db } from '../../../firebaseConfig/config';
import { RiArrowLeftFill, RiArrowLeftLine, RiDashboard3Line, RiFileFill, RiFolderOpenLine, RiGraduationCapFill } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import { log } from 'firebase/firestore/pipelines';
import { formatText } from '../../utils/FormatText';

const LeftNav = ({setStartExam , setTestData}) => {
  const uc = useContext(UserInfo);
  const [subject, setSubject] = useState([]);
  const [showSubject , setShowSubject] = useState(true)
  const [test , setTest]  = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {

    async function getSubject(db) {
      const subjectRef = collection(db, 'All_Subjects');
      const subjectSnapshot = await getDocs(subjectRef);
      setSubject(subjectSnapshot.docs);
      subjectSnapshot.forEach((doc)=>{
        
      })
    }

    return () => getSubject(db);

  }, [])

  const selSub = (e)=>{
    setShowSubject(false)

    const getTest = async ()=>{
      const q = query(
        collection(db,e.target.id),
        orderBy("uploadedAt")
      )
    const snapshot = await getDocs(q);
      setTest(snapshot.docs)
      
    }
    
    getTest();
    
  }


  
  const navigate = useNavigate(null);
  const handleStartExam = (e)=>{
      setStartExam(true)
      const selectedTest = test.filter((test)=>{
        
        
        return test.data().testName === e.target.id 

      });
      setTestData(selectedTest);
      
  }

  return (
    <div className='w-100 shrink-0 h-full overflow-hidden  bg-gray-100 rounded-2xl border border-gray-200 px-5 flex flex-col gap-2'>
      {/* Header */}

      <div className='w-full h-[20%] border-b border-gray-300'>
        <div className='flex w-full h-1/2 gap-2'>
          <div className='flex w-[20%] p-[2%]'>
            <img src={uc.user.profilePicture} alt="" className='h-full  aspect-square rounded-full' />
          </div>
          <div className='font-bold text-gray-600 flex flex-col justify-center'>
            <p>{uc.user.name}</p>
            <p className='text-sm'>{uc.user.email}</p>
          </div>
        </div>
        <div className='h-1/2 w-full p-[3%]'>
            <div className='h-full w-1/2 text-xl font-bold flex justify-center items-center text-white  bg-purple-700 rounded-2xl hover:border-2 hover:border-purple-700 hover:bg-white hover:text-purple-700  ' onClick={()=>{navigate('/')}}>
                <div className='w-1/4 flex items-center justify-center'>
                <RiDashboard3Line/> 
                </div>
                <div className='flex-1 items-center justify-center'>
                  DashBoard
                </div>
            </div>
        </div>
      </div>

      {/* Seelct Subject */}
      {showSubject && 
      <div className='overflow-scroll w-full h-[80%] shrink-0 ' >
         <div className='w-1/2 gap-2 h-[10%] border border-purple-700  bg-gray-100 flex items-center rounded-2xl justify-center font-bold text-purple-700  ' >
            <RiGraduationCapFill /> Select Subject
        </div>
        {
          subject.map((sub) => (
            <div  className='relative hover:bg-gray-200  hover:border-l-5 border-purple-700  w-full h-[10%] bg-gray-300 mt-[3%]  rounded-2xl flex p-[2%] items-center gap-x-2 border ' key={crypto.randomUUID()} >
              <div className='absolute z-100 w-full h-full top-0 left-0 rounded-2xl ' onClick={selSub} id={sub.data().subject}  ></div>
              <img src={sub.data().icon} alt="" className='h-full aspect-square'/>
              <p className='flex font-bold text-sm'>{formatText(sub.data().subject)}</p>
            </div>
          ))
        }
      </div>
      }
      {
        !showSubject && 
      <div className=' w-full h-[80%] shrink-0 ' >
        <div className='w-1/2 h-[10%] border border-gray-500 hover:bg-gray-300 bg-gray-100 flex items-center rounded-2xl justify-center font-bold text-gray-500  ' onClick={()=>{setShowSubject(true); setTest([])}}>
            <RiArrowLeftLine />
            Back to Subject
        </div>
        <div className='w-full h-full overflow-scroll'> 



          {test.length>0 && test.map((test)=>{
          return(
            <div  className='relative hover:bg-gray-200 w-[90%] h-[10%] bg-gray-300 mt-[3%]  rounded-2xl flex p-[2%] items-center gap-x-2 border hover:border-l-4 hover:border-purple-700' key={crypto.randomUUID()} >
              <div className='absolute z-100 w-full h-full top-0 left-0 rounded-2xl ' id={test.data().testName} onClick={handleStartExam}  ></div>
              <RiFileFill />
              <p>{formatText(test.data().testName)}</p>
          </div>
          )
        })}
      {
          test.length<=0 && 
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
      }

    </div>
  )
}

export default LeftNav
