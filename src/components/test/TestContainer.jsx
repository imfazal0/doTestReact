import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Question from './Question'
import testData from '../../context/testData'
import OptionsGrid from './OptionsGrid'
import ButtonsNav from './testcontainercomponents/ButtonsNav'
import SubmitTest from './testcontainercomponents/SubmitTest'
import UserInfo from '../../context/userInfo'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../firebaseConfig/config'
import { useNavigate } from 'react-router-dom'
import ViewScoreComponent from './testcontainercomponents/ViewScoreComponent'

const TestContainer = () => {
  const tc = useContext(testData);
  const uc = useContext(UserInfo);
  const [testJson, setTestJson] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentOptions, setCurrentOptions] = useState([]);
  const [allKeys, setAllKeys] = useState([]);
  const [qIdx, setQIdx] = useState(0);
  const [checkedOpt, setCheckedOpt] = useState(null);
  const [lst, setLst] = useState(false);
  const [timeSpent, setTimeSpent] = useState('');
  const [submitDone, setSubmitDone] = useState(false);
  const navigate = useNavigate()


  const submitTest = async () => {
    const timeStamp = serverTimestamp();
    let totalMarks = 0;
    const allAns = Object.values(testJson);
    const maxMarks = allAns.length;
    let percentage = 0;
    allAns.forEach((element, idx) => {
      if (element.correctAnswer.toLowerCase() === tc.testResult.userAnswers[idx].toLowerCase()) {
        totalMarks += 1;
      }
    });
    percentage = (totalMarks / maxMarks) * 100

    setSubmitDone(true);


    tc.setTestResult(prev => ({
      ...prev,
      correctAnswers: totalMarks,
      score: percentage,
      timestamp: serverTimestamp(),
      timeSpent: timeSpent,
      totalQuestions: maxMarks,
      userName: uc.user.name,
      email: uc.user.email,
      userId: uc.user.uid
    }))

    if (!uc.user) {
      navigate('/')
    } else {
      const docRef = await addDoc(collection(db, 'testResults'),
        {
          ...tc.testResult,
          correctAnswers: totalMarks,
          score: percentage,
          timestamp: serverTimestamp(),
          timeSpent: timeSpent,
          totalQuestions: maxMarks,
          userName: uc.user.name,
          email: uc.user.email,
          userId: uc.user.uid
        }

      )
    }



  }

useEffect(()=>{
  console.log(tc.testResult);
  
},[tc.testResult])






  useEffect(() => {
    if (tc.startExam) {
      const Test = JSON.parse(tc.test[0].data().exam)
      const keys = Object.keys(Test)
      setTestJson(Test);
      setAllKeys(keys);
    }

  }, [tc.startExam])

  useEffect(() => {
    chageCurrentQuestion()

  }, [qIdx, testJson])






  const chageCurrentQuestion = () => {
    if (tc.startExam) {
      setCurrentQuestion(
        testJson[allKeys[qIdx]]
      )
      setCurrentOptions(
        Object.values(
          testJson[allKeys[qIdx]].options
        )

      )
    }
  }



  useEffect(() => {

  }, [testJson])

  useEffect(() => {



  }, [currentQuestion])




  return (

    <div className='md:w-[70%] w-full h-full  bg-gray-200 border border-gray-300 p-[2%] rounded-2xl flex flex-col gap-5'>
      {
        tc.startExam &&
        <>
          <Header timeSpent={timeSpent} setTimeSpent={setTimeSpent} lst={lst} />
          {
            !lst &&
            <>
              <Question question={currentQuestion?.question} qIdx={qIdx + 1} />
              {
                currentOptions.length &&
                <OptionsGrid options={currentOptions} checkedOpt={checkedOpt} setCheckedOpt={setCheckedOpt} />
              }
            </>
          }
          {
            lst && !submitDone &&
            <SubmitTest />
          }


          {
            !submitDone && 
            <ButtonsNav submitDone={submitDone} submitTest={submitTest} qIdx={qIdx} setQIdx={setQIdx} checkedOpt={checkedOpt} setCheckedOpt={setCheckedOpt} allKeys={allKeys.length - 1} setLst={setLst} lst={lst} />
          }
          {
            submitDone &&
            <ViewScoreComponent/>
          }
        </>

      }
      {
        !tc.startExam &&
        <>
          <div className='w-full md:min-h-[15%] h-[10%] animate-pulse bg-gray-100 rounded-2xl grid grid-cols-4 items-center justify-center text-white md:text-xl text-sm'>

          </div>
          <div className="w-full md:min-h-1/5 min-h-1/12  rounded-2xl animate-pulse bg-gray-100 px-[3%] flex items-center py-[1%]">
          </div>
          <div className='w-full md:min-h-1/3  justify-center flex flex-wrap gap-5 relative'>
            <div className='relative w-[45%] h-1/2 animate-pulse bg-gray-100 rounded-2xl   flex items-center px-2 gap-5 ' ></div>
            <div className='relative w-[45%] h-1/2 animate-pulse bg-gray-100 rounded-2xl   flex items-center px-2 gap-5 ' ></div>
            <div className='relative w-[45%] h-1/2 animate-pulse bg-gray-100 rounded-2xl   flex items-center px-2 gap-5 ' ></div>
            <div className='relative w-[45%] h-1/2 animate-pulse bg-gray-100 rounded-2xl   flex items-center px-2 gap-5 ' ></div>
          </div>
          <div className='w-full md:h-1/3 md:p-[2%] py-[12%] justify-center flex gap-2 md:text-2xl md:flex-row flex-col-reverse text-xl'>
            <div className='md:w-[40%] md:h-4/5   animate-pulse bg-gray-100 rounded-2xl text-white font-extrabold flex  px-[2%] items-center '></div>
            <div className='md:w-[40%] md:h-4/5  animate-pulse bg-gray-100 rounded-2xl text-white font-extrabold flex  px-[2%] items-center '></div>
          </div>

        </>
      }
    </div>

  )
}

export default TestContainer