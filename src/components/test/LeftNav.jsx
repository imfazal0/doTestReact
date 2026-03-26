import React, { useContext, useEffect } from 'react'
import UserInfo from '../../context/userInfo'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../../firebaseConfig/config';

const LeftNav = () => {
  const uc = useContext(UserInfo);

  useEffect(()=>{
      console.log(uc);
      
    const db = getFirestore(app);
    async function getSubject(db){
      const subjectRef = collection(db,'All_Subjects');
      const subjectSnapshot = await getDocs(subjectRef);
      // console.log(subjectSnapshot.docs);
      
    }

    return () => getSubject(db);
  },[])


  return (
    <div className='w-1/4 h-full bg-gray-100 rounded-2xl border border-gray-200 p-[1%]'>
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
        

    </div>
  )
}

export default LeftNav