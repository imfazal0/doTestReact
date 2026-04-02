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
    console.log(testJson);
    allAns.forEach((element, idx) => {
      if (element.correctAnswer.toLowerCase() === tc.testResult.userAnswers[idx].toLowerCase()) {
        totalMarks += 1;
      }
    });
    percentage = (totalMarks / maxMarks) * 100

    setSubmitDone(true);

    
    tc.setTestResult(prev => ({
      ...prev,
      correctAnswers:totalMarks,
      score: percentage,
      timestamp: serverTimestamp(),
      timeSpent: timeSpent,
      totalQuestions: maxMarks,
      name: uc.user.name,
      email: uc.user.email,
      userId: uc.user.uid
    }))

    if (!uc.user) {
      navigate('/')
    } else {
      const docRef = await addDoc(collection(db, 'testResults'),
        {
          ...tc.testResult,
          correctAnswers:totalMarks,
          score: percentage,
          timestamp: serverTimestamp(),
          timeSpent: timeSpent,
          totalQuestions: maxMarks,
          name: uc.user.name,
          email: uc.user.email,
          userId: uc.user.uid
        }

      )
      console.log("Test result saved with ID: ", docRef.id);
    }



  }






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

    <div className='w-[70%] h-full  bg-gray-200 border border-gray-300 p-[2%] rounded-2xl flex flex-col gap-5'>
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
            lst &&
            <SubmitTest />
          }


          <ButtonsNav submitDone={submitDone} submitTest={submitTest} qIdx={qIdx} setQIdx={setQIdx} checkedOpt={checkedOpt} setCheckedOpt={setCheckedOpt} allKeys={allKeys.length - 1} setLst={setLst} lst={lst} />
        </>

      }
    </div>

  )
}

export default TestContainer