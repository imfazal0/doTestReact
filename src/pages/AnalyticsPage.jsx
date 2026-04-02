import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/analytics/Header'
import { db } from '../../firebaseConfig/config';
import { collection, getDocs, orderBy, query, where  } from 'firebase/firestore';
import LoginPage from './LoginPage';
import useAuth from '../utils/useAuth'
import AllTestGrid from '../components/analytics/AllTestGrid';
import UserInfo from '../context/userInfo';

const AnalyticsPage = () => {
  const uc = useContext(UserInfo);
  const [subject , setSubject] = useState([]);
  const [error , setError] = useState(null);
  const [selectedSub , setSelectedSub] = useState('Python');
  const [testResults , setTestResults] = useState([])
  const [allTest, setAllTest ] = useState([])
  useEffect(()=>{
           async function getSubject(db) {
            try{
              const subjectRef = collection(db, 'All_Subjects');
              const subjectSnapshot = await getDocs(subjectRef);
          
              subjectSnapshot.docs.forEach((elm)=>{
                setSubject(prev=>([...prev , {
                  sub: elm.data().subject,
                  icon: elm.data().icon,
                }]));
              })
              // console.log(subject);

            } catch (err){
                setError(err);
            }
              }
          
              return () => getSubject(db);
      },[uc.user])
  
      useEffect(()=>{
        console.log(subject);
        
      },[subject])

      useEffect(()=>{
          const getAllTest = async ()=>{
            const subjectsRef = collection(db, selectedSub);
            const q = query(
              subjectsRef,
            )
            const snapShot = await getDocs(q);
            setAllTest(snapShot.docs);

          }
          getAllTest();

      },[selectedSub])
      
      
   
   
   
   
      useEffect(()=>{
      const getAllTest = async ()=>{
        const subjectRef = collection(db , "testResults")
        const q = query(
            subjectRef,
            where("subject" , "==" , selectedSub )
        )
        const snapShot = await getDocs(q)
        console.log(snapShot.docs);
        

      }

      getAllTest()
    },[selectedSub])




    const user = useAuth();

    return !user ? (
      <LoginPage/>
    ):(
    <div className='w-full h-full p-[2%] '>
      <Header subject={subject} selectedSub={selectedSub} setSelectedSub={setSelectedSub} />
      {/* <AllTestGrid allTest={allTest} selectedSub={selectedSub}  /> */}
      
    </div>
  )
}

export default AnalyticsPage