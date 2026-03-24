import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
    


  return (
    <Routes>
      <Route path='/login' Component={LoginPage}/>
    </Routes>
  )
}

export default App