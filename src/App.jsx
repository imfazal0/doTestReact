import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='/login' Component={LoginPage}/>
    </Routes>
  )
}

export default App