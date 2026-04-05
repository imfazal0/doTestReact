import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/analytics/Header'
import { db } from '../../firebaseConfig/config';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import LoginPage from './LoginPage';
import useAuth from '../utils/useAuth'
import AllTestGrid from '../components/analytics/AllTestGrid';
import UserInfo from '../context/userInfo';
import LeaderBoard from '../components/analytics/LeaderBoard';
import { getSubject } from '../utils/FetchData';

const AnalyticsPage = () => {
  const uc = useContext(UserInfo);
  const [subject, setSubject] = useState([]);
  const [error, setError] = useState(null);
  const [selectedSub, setSelectedSub] = useState('Python');
  const [allTest, setAllTest] = useState([])
  const [selectedTest, setSelectedTest] = useState(null)
  const [allResults, setAllResults] = useState([]);
  const [showSelSub, setShowSelSub] = useState(true);
  const [loading, setLoading] = useState({
    header: true,
    testGrid: true,
    lb: true,
  });


  useEffect(() => {
    getSubject().then((result)=>{
      setSubject(result.subject);
      setLoading(result.loading);
    })
  }, [uc.user])



  useEffect(() => {
    if (!loading.testGrid) {
      setLoading(prev => ({ ...prev, testGrid: true }))
    }

    const getAllTest = async () => {
      try {

        const subjectsRef = collection(db, selectedSub);
        const q = query(
          subjectsRef,
        )
        const snapShot = await getDocs(q);
        setAllTest(snapShot.docs);
        setShowSelSub(true)
      }
      catch (err) {
        console.error(err);
      } finally {
        setLoading(prev => ({ ...prev, testGrid: false }))
      }

    }
    getAllTest();




  }, [selectedSub])


  useEffect(() => {
    if (!loading.lb) {
      setLoading(prev => ({ ...prev, lb: true }))

    }

    const getAllTest = async () => {
      try {
        const subjectRef = collection(db, "testResults")
        const q = query(
          subjectRef,
          where("testId", "==", selectedTest),
          orderBy("score", 'desc'),
          orderBy("timeSpent", 'asc'),
        )
        const snapShot = await getDocs(q)
        setAllResults(snapShot.docs);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(prev => ({ ...prev, lb: false }))
      }

    }




    getAllTest()
  }, [selectedTest])







  const user = useAuth();

  return !user ? (
    <LoginPage />
  ) : (
    <div className='w-full h-full p-[2%] '>
      <Header subject={subject} selectedSub={selectedSub} setSelectedSub={setSelectedSub} loading={loading.header} />
      {
        showSelSub &&
        <AllTestGrid allTest={allTest} selectedSub={selectedSub} setSelectedTest={setSelectedTest} setShowSelSub={setShowSelSub} loading={loading.testGrid} />
      }
      {
        !showSelSub &&
        <LeaderBoard selectedTest={selectedTest} allResults={allResults} setShowSelSub={setShowSelSub} loading={loading.lb} />
      }
    </div>
  )
}

export default AnalyticsPage