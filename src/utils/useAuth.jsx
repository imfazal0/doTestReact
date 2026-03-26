import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig/config";
import { useContext, useEffect, useState } from "react";
import UserInfo from "../context/userInfo";

const useAuth = () => {
    const uc = useContext(UserInfo);
      const [user , setUser]   = useState(null);
    
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
      if (currentUser) {
        setUser(currentUser);
        
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
        
        return ()=> unSubscribe()
      },[])

      return user;
  }

  export default useAuth;