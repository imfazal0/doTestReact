import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserInfoContext from './context/userInfoContext.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter  basename="/doTestReact/">
  <StrictMode>
    <UserInfoContext>
      <App />
    </UserInfoContext>
  </StrictMode>
  </BrowserRouter>
)
