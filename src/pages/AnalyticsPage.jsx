import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/analytics/Header'
import { db } from '../../firebaseConfig/config';
import { collection, getDocs, orderBy, query, where  } from 'firebase/firestore';
import LoginPage from './LoginPage';
import useAuth from '../utils/useAuth'
import AllTestGrid from '../components/analytics/AllTestGrid';
import UserInfo from '../context/userInfo';
import LeaderBoard from '../components/analytics/LeaderBoard';

const AnalyticsPage = () => {
  const uc = useContext(UserInfo);
  const [subject , setSubject] = useState([]);
  const [error , setError] = useState(null);
  const [selectedSub , setSelectedSub] = useState('Python');
  const [allTest, setAllTest ] = useState([])
  const [selectedTest, setSelectedTest ] = useState(null)
  const [allResults ,  setAllResults] = useState([]);
  const [showSelSub ,setShowSelSub  ] = useState(true);


  useEffect(()=>{
           async function getSubject(db) {
            try{
              const subjectRef = collection(db, 'All_Subjects');
              const subjectSnapshot = await getDocs(subjectRef);
              setSubject([])
              subjectSnapshot.docs.forEach((elm)=>{
                setSubject(prev=>([...prev , {
                  sub: elm.data().subject,
                  icon: elm.data().icon,
                }]));
              })

            } catch (err){
                setError(err);
            }

              }
          
              return () => getSubject(db);
      },[uc.user])
  
      useEffect(()=>{
        
      },[subject])

      useEffect(()=>{
          const getAllTest = async ()=>{
            const subjectsRef = collection(db, selectedSub);
            const q = query(
              subjectsRef,
            )
            const snapShot = await getDocs(q);
            setAllTest(snapShot.docs);
            setShowSelSub(true)
          }
          getAllTest();

      },[selectedSub])
      
      
   
   
   
   
      useEffect(()=>{
      const getAllTest = async ()=>{
        const subjectRef = collection(db , "testResults")
        const q = query(
            subjectRef,
            where("testId" , "==" , selectedTest ),
            orderBy("score" , 'desc'),
            orderBy("timeSpent" , 'asc'),
        )
        const snapShot = await getDocs(q)
        setAllResults(snapShot.docs);
        
      }

    
      

      getAllTest()
    },[selectedTest])

    





    const user = useAuth();

    return !user ? (
      <LoginPage/>
    ):(
    <div className='w-full h-full p-[2%] '>
      <Header subject={subject} selectedSub={selectedSub} setSelectedSub={setSelectedSub} />
      {
        showSelSub &&
        <AllTestGrid allTest={allTest} selectedSub={selectedSub} setSelectedTest={setSelectedTest} setShowSelSub={setShowSelSub} />
      }
      {
        !showSelSub &&
      <LeaderBoard selectedTest={selectedTest} allResults={allResults} setShowSelSub={setShowSelSub}/>
      }
    </div>
  )
}

export default AnalyticsPage