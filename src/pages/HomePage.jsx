import React, { useContext, useEffect, useState } from 'react'
import LoginPage from './LoginPage';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import Dashboard from '../components/home/Dashboard';
import UserInfo from '../context/userInfo';
import NavigateButtons from '../components/home/NavigateButtons';
import PrevTestGrid from '../components/home/PrevTestGrid';
import checkUser from '../utils/useAuth';
import useAuth from '../utils/useAuth';
import ReviewDataContext from '../context/ReviewDataContext';

const HomePage = () => {
  const auth = getAuth();
  const uc = useContext(UserInfo);
  const user = useAuth();


  function handleSignOut() {
    signOut(auth).then(() => {
      localStorage.removeItem('scores')
      return <LoginPage />
    })

  }

  return !user ? <LoginPage /> : (
    <div className='relative w-screen h-screen px-[5%] py-[2%] gap-2 shrink-0'>
      <Dashboard user={uc.user} setUser={uc.setUser} handleSignOut={handleSignOut} />
      <NavigateButtons />
      <ReviewDataContext>
        <PrevTestGrid />
      </ReviewDataContext>
    </div>
  )
}

export default HomePage