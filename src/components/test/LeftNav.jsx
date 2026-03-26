import React, { useContext, useEffect, useRef, useState } from 'react'
import UserInfo from '../../context/userInfo'
import { collection, getDocs, getFirestore,  orderBy,  query } from 'firebase/firestore';
import app, { db } from '../../../firebaseConfig/config';
import { RiArrowLeftFill, RiArrowLeftLine, RiFileFill } from '@remixicon/react';

const LeftNav = () => {
  const uc = useContext(UserInfo);
  const [subject, setSubject] = useState([]);
  const [showSubject , setShowSubject] = useState(true)
  const [test , setTest]  = useState([]);
  useEffect(() => {

    async function getSubject(db) {
      const subjectRef = collection(db, 'All_Subjects');
      const subjectSnapshot = await getDocs(subjectRef);
      console.log(subjectSnapshot.docs);
      setSubject(subjectSnapshot.docs);
      subjectSnapshot.forEach((doc)=>{
        console.log(doc.data());
        
      })
    }

    return () => getSubject(db);

  }, [])

  const selSub = (e)=>{
    setShowSubject(false)
    console.log(e.target.id);

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


  return (
    <div className='w-100 h-full bg-gray-100 rounded-2xl border border-gray-200 px-[2%] flex flex-col gap-2'>
      {/* Header */}

      <div className='w-full h-[10%] border-b border-gray-300'>
        <div className='flex w-full h-full '>
          <div className='flex items-center justify-center'>
            <img src={uc.user.profilePicture} alt="" className='w-[50%] aspect-square rounded-full' />
          </div>
          <div className='font-bold text-gray-600 flex flex-col justify-center'>
            <p>{uc.user.name}</p>
            <p className='text-sm'>{uc.user.email}</p>
          </div>

        </div>
      </div>

      {/* Seelct Subject */}
      {showSubject && 
      <div className='overflow-scroll w-full h-[80%] shrink-0 ' >
         <div className='w-1/2 h-[10%] border border-purple-700  bg-gray-100 flex items-center rounded-2xl justify-center font-bold text-purple-700  ' >
            Select Subject
        </div>
        {
          subject.map((sub) => (
            <div  className='relative hover:bg-gray-200  hover:border-l-5 border-purple-700  w-full h-[10%] bg-gray-300 mt-[3%]  rounded-2xl flex p-[2%] items-center gap-x-2 border ' key={crypto.randomUUID()} >
              <div className='absolute z-100 w-full h-full top-0 left-0 rounded-2xl ' onClick={selSub} id={sub.data().subject}  ></div>
              <img src={sub.data().icon} alt="" className='h-full aspect-square'/>
              <p className='flex font-bold text-sm'>{sub.data().subject}</p>
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



          {test && test.map((test)=>{
          return(
            <div  className='relative hover:bg-gray-200 w-[90%] h-[10%] bg-gray-300 mt-[3%]  rounded-2xl flex p-[2%] items-center gap-x-2 border hover:border-l-4 hover:border-purple-700' key={crypto.randomUUID()} >
              <RiFileFill />
              <p>{test.data().testName}</p>
          </div>
          )
        })}
        {
          !test && 
          <div>
            No test Found
          </div>
        }


      </div>
      </div>
      }

    </div>
  )
}

export default LeftNav