import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/history/Header'
import Filters from '../components/history/Filters'
import AllTestGrid from '../components/history/AllTestGrid'
import useAuth from '../utils/useAuth'
import LoginPage from './LoginPage';
import { getAllTest, getSubject } from '../utils/FetchData'
import UserInfo from '../context/userInfo'
import dayjs from 'dayjs'

const HistoryPage = () => {
  const [allSubject , setAllSubject] = useState([]);
  const [loading , setLoading] = useState(true);
  const [allResults , setAllResults] = useState([]);
  const [filterData , setFilterData] = useState([]);
  const [selectedSub ,  setSelectedSub] = useState('all_Subject');
  const [test , setTest] = useState('')
  const [date , setDate] = useState(0)
  const uc = useContext(UserInfo);

  useEffect(()=>{
    getSubject().then((result)=>{
      setAllSubject(result.subject)
      setLoading(result.loading)
    });
  },[])

  useEffect(()=>{
      if (allSubject.length) {
        getAllTest(uc.user.uid).then((res)=>{
          setAllResults(res.results)
          
        })
      }
  },[allSubject])



  useEffect(()=>{
      // console.log(allSubject);
      // console.log(loading);
      // console.log(dayjs().format("DD MMM YYYY"));
      
      
  },[allSubject])

  useEffect(()=>{
      if (selectedSub === 'all_Subject' ) {
        setFilterData(allResults)
      }
      else{
      setFilterData(allResults.filter((doc)=>{
        return (doc.subject).toLowerCase().startsWith(selectedSub.toLowerCase()) ? true :  false ; 
      }))
    }
    
    console.log(filterData);
    
    console.log(selectedSub);
    
  },[selectedSub , allResults])

  useEffect(()=>{
      setFilterData(
        allResults.filter((doc)=>{
          return (doc.testId).toLowerCase().includes(test.toLowerCase().trim()) && ((doc.subject).toLowerCase().startsWith(selectedSub.toLowerCase()) || selectedSub.toLowerCase() === 'all_subject') ? true :  false ; 
        }
      ))
  },[test])
  
  useEffect(()=>{
    console.log("date" , date);
      setFilterData(
        allResults.filter((doc)=>{

          console.log(doc.timestamp.seconds>= date);
          
          return (doc.timestamp.seconds>=date) && ((doc.subject).toLowerCase().startsWith(selectedSub.toLowerCase())|| selectedSub.toLowerCase() === 'all_subject') ? true :  false ; 
        }
      ))
  },[date])

function  clearFilter() {
    setSelectedSub('all_Subject');
    setDate(0);
    setFilterData(allResults);
    setTest('')

}


  const user = useAuth();  

  return user ? (
    <div className='w-screen h-screen px-[5%] py-[1%] flex flex-col gap-5'>
        <Header/>
        <Filters subject={allSubject}   setSelectedSub={setSelectedSub}  setTest={setTest} setDate={setDate} clearFilter={clearFilter} />
        <AllTestGrid filterData={filterData}/>
    </div>
  ):(
    <LoginPage/>
  )
}

export default HistoryPage