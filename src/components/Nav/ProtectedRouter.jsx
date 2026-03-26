import React from 'react'
import { auth } from '../../../firebaseConfig/config'
import { useNavigate } from 'react-router-dom';

const ProtectedRouter = ({children}) => {
  const user = auth.currentUser;
  const navigate = useNavigate()
  if (!user) {
     return navigate('/login');
  }else{
    return children
  }
}

export default ProtectedRouter