import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/history/Header'
import Filters from '../components/history/Filters'
import AllTestGrid from '../components/history/AllTestGrid'
import useAuth from '../utils/useAuth'
import LoginPage from './LoginPage';
import { getAllTest, getSubject } from '../utils/FetchData'
import UserInfo from '../context/userInfo'
import dayjs from 'dayjs'
import DeleteModal from './DeleteModal'

const HistoryPage = () => {
  const [allSubject , setAllSubject] = useState([]);
  const [loading , setLoading] = useState(true);
  const [allResults , setAllResults] = useState([]);
  const [filterData , setFilterData] = useState([]);
  const [selectedSub ,  setSelectedSub] = useState('all_Subject');
  const [test , setTest] = useState('')
  const [date , setDate] = useState(0)
  const [score , setScore] = useState(0)
  const [selectedTest , setSelectedTest] = useState('')


  const uc = useContext(UserInfo);


  useEffect(()=>{
    getSubject().then((result)=>{
      setAllSubject(result.subject)
      setLoading(result.loading)
    });
  },[])

  useEffect(()=>{
      changeTest();
  },[allSubject])

  function changeTest(){
     if (allSubject.length) {
        getAllTest(uc.user.uid).then((res)=>{
          setAllResults(res.results)
          
        })
      }
  }


  useEffect(()=>{
      if (selectedSub === 'all_Subject' ) {
        setFilterData(allResults)
      }
      else{
      setFilterData(allResults.filter(({data})=>{
        return ((data.subject).toLowerCase().startsWith(selectedSub.toLowerCase()) && (data.timestamp.seconds>=date) ) ? true :  false ; 
      }))
    }

    
  },[selectedSub , allResults])

  useEffect(()=>{
      setFilterData(
        allResults.filter(({data})=>{
          return (data.testId).toLowerCase().includes(test.toLowerCase().trim()) && ((data.subject).toLowerCase().startsWith(selectedSub.toLowerCase()) || selectedSub.toLowerCase() === 'all_subject') ? true :  false ; 
        }
      ))
  },[test])
  
  useEffect(()=>{
      setFilterData(
        allResults.filter(({data})=>{

        
          
          return (data.timestamp.seconds>=date) && ((data.subject).toLowerCase().startsWith(selectedSub.toLowerCase())|| selectedSub.toLowerCase() === 'all_subject') ? true :  false ; 
        }
      ))
  },[date])

  useEffect(()=>{
        console.log(score);

      setFilterData(
        allResults.filter(({data})=>{
          return (data.score>=score) && ((data.subject).toLowerCase().startsWith(selectedSub.toLowerCase())|| selectedSub.toLowerCase() === 'all_subject') ? true :  false ; 
        }
      ))
  },[score])

  useEffect(()=>{
    if (selectedTest) {
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "scroll"
    }
    changeTest();

  },[selectedTest])


function  clearFilter() {
    setSelectedSub('all_Subject');
    setDate(0);
    setFilterData(allResults);
    setTest('')

}


  const user = useAuth();  

  return user ? (
    <>
    {
      selectedTest && 
      <DeleteModal setSelectedTest={setSelectedTest} id={selectedTest} />
    }

    <div className='w-screen h-screen px-[5%] py-[1%] flex flex-col gap-5'>
        <Header/>
        <Filters subject={allSubject}   setSelectedSub={setSelectedSub}  setTest={setTest} setDate={setDate} clearFilter={clearFilter} setScore={setScore} />
        {
          !loading &&
          <AllTestGrid filterData={filterData} setSelectedTest={setSelectedTest} />
        }
        {
          loading && 
            <div className='w-full flex flex-wrap gap-3 justify-center '>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>
              <div className='w-[25vw] h-[30vh] bg-gray-300 rounded-2xl animate-pulse'></div>

            </div>

        }
        
    </div>

    </>

  ):(
    <LoginPage/>
  )
}

export default HistoryPage