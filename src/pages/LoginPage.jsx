import React, { useContext, useEffect } from 'react'
import LoginContainer from '../components/login/LoginContainer'
import { getAuth , GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebaseConfig/config'
import UserInfo  from '../context/userInfo';

function LoginPage() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth()
  const uc = useContext(UserInfo);


  function handleLogin(){
    signInWithPopup(auth , provider).then((result)=>{
      
      
    })
  }

  return (
    <div className='w-full h-full p-[2%]'>
        <div className='w-full h-full bg-[url("https://img.freepik.com/premium-vector/dotted-grid-seamless-pattern-bullet-journal-black-point-texture-blue-dot-grid-notebook-paper-vector-illustration-white-background_192280-937.jpg?semt=ais_hybrid&w=740&q=80")]  flex justify-center items-center'>
                {/* Login Element Container */}
                <LoginContainer handleLogin={handleLogin}/>
        </div>
    </div>
  )
}

export default LoginPage