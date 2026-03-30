import React, { useContext, useEffect, useRef, useState } from 'react'
import UserInfo from '../../context/userInfo'
import { collection, getDocs, getFirestore,  orderBy,  query } from 'firebase/firestore';
import app, { db } from '../../../firebaseConfig/config';
import { RiArrowLeftFill, RiArrowLeftLine, RiDashboard3Line, RiFileFill, RiFolderOpenLine, RiGraduationCapFill } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import { log } from 'firebase/firestore/pipelines';
import { formatText } from '../../utils/FormatText';
import NavHeader from './leftnavcomponents/NavHeader';
import NavSubject from './leftnavcomponents/NavSubject';
import NavTest from './leftnavcomponents/NavTest';
import testData from '../../context/testData';
import TestStarted from './leftnavcomponents/TestStarted';

const LeftNav = ({setStartExam , setTestData}) => {
  const tc = useContext(testData);
  const [subject, setSubject] = useState([]);
  const [showSubject , setShowSubject] = useState(true)
  const [error , setError] = useState(null);


  const selSub = (e)=>{
    
    setShowSubject(false)
    tc.setTestResult(prev=>({...prev , subject:e.target.id}));
    const getTest = async ()=>{
      try {
        const q = query(
        collection(db,e.target.id),
      )
        const snapshot = await getDocs(q);
        tc.setTestData(snapshot.docs)
        
      } catch (error) {
          setError(error);
      }
      
      
    }
    
    getTest();
    
  }


  


 return tc.startExam ? <TestStarted / > : (
    <div className='md:w-100 w-full shrink-0 h-full overflow-hidden  bg-gray-100 rounded-2xl border border-gray-200 px-5 flex flex-col gap-2'>
      {/* Header */}
      <NavHeader/>
     
      {/* Seelct Subject */}
      {showSubject && 
        <NavSubject setSubject={setSubject} subject={subject} selSub={selSub} />
      }
      {
        !showSubject && 
          <NavTest setShowSubject={setShowSubject} />
      }

    </div>
  )
}

export default LeftNav
