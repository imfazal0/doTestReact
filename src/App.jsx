import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import AnalyticsPage from './pages/AnalyticsPage'
import HistoryPage from './pages/HistoryPage'
import useAuth from './utils/useAuth'
import ReviewPage from './pages/ReviewPage'

function App() {

  return (
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='/login' Component={LoginPage}/>
      <Route path='/test' Component={TestPage}/>
      <Route path='/analytics' Component={AnalyticsPage}/>
      <Route path='/history' Component={HistoryPage}/>
      <Route path='/review/:id' Component={ReviewPage}/>
    </Routes>
  )
}

export default App