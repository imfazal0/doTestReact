import { RiGraduationCapFill } from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import { db } from '../../../../firebaseConfig/config'
import { collection, getDocs } from 'firebase/firestore'
import { formatText } from '../../../utils/FormatText'
const NavSubject = ({setSubject , subject , selSub}) => {
  const [error , setError] = useState(null);


    useEffect(()=>{
         async function getSubject(db) {
          try{
            const subjectRef = collection(db, 'All_Subjects');
            const subjectSnapshot = await getDocs(subjectRef);
            setSubject(subjectSnapshot.docs);
            subjectSnapshot.forEach((doc)=>{
            })
          } catch (err){
              setError(err);
          }
            }
        
            return () => getSubject(db);
    },[])

    
  return (
    <div className='overflow-scroll w-full h-[80%] shrink-0 ' >
         <div className='w-1/2 gap-2 h-[10%] text-sm border border-purple-700  bg-gray-100 flex items-center rounded-2xl justify-center font-bold text-purple-700  ' >
            <RiGraduationCapFill /> Select Subject
        </div>
        {
          subject.map((sub,idx) => (
            <div  className='relative hover:bg-gray-200  hover:border-l-5 border-purple-700  w-full h-[10%] bg-gray-300 mt-[3%]  rounded-2xl flex p-[2%] items-center gap-x-2 border ' key={idx} >
              <div className='absolute z-100 w-full h-full top-0 left-0 rounded-2xl ' 
                onClick={selSub} id={sub.data().subject}  ></div>
              <img src={sub.data().icon} alt="" className='h-full aspect-square'/>
              <p className='flex font-bold text-sm'>{formatText(sub.data().subject)}</p>
            </div>
          ))
        }
    </div>
    
  )
}

export default NavSubject