import React, { useContext, useEffect, useState } from 'react'
import LoginPage from './LoginPage';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import Dashboard from '../components/home/Dashboard';
import UserInfo from '../context/userInfo';

const HomePage = () => {
  const [user , setUser]   = useState(null);
  const auth = getAuth();
  const uc = useContext(UserInfo);
  
  useEffect(()=>{

      const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
          if (currentUser) {
                setUser(currentUser);
                // console.log(currentUser);
                
                uc.setUser(prev=>({
                    name:currentUser.displayName,
                    email:currentUser.email,
                    profilePicture:currentUser.photoURL,
                    uid:currentUser.uid,
                }))
          }else{
            setUser(null)
          }

          
      })

        return () => unSubscribe();
    },[])

    function handleSignOut(){
        signOut(auth).then(()=>{
          return <LoginPage/>
        })
    }

    return !user ? <LoginPage/> : (
      <div className='w-full h-full px-[5%] py-[2%] '>
        
        <Dashboard user={uc.user} handleSignOut={handleSignOut}/>
      </div>
    )
}

export default HomePage