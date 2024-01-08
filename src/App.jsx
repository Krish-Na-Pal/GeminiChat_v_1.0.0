import './globals.css'
import { Route, Routes } from 'react-router-dom'
import { RootLayout } from './_root/RootLayout'
import { HistoryLayout } from './_root/HistoryLayout'
import { Toaster } from 'react-hot-toast'
import Signin from './_auth/forms/Signin'
import Signup from './_auth/forms/Signup'
import AuthLayout from './_auth/AuthLayout'
import { useState } from 'react'

export const App = () => {
  const [history, setHistory] = useState([]);

  return (
    <main>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path='sign-in' element={<Signin />}/>
          <Route path='sign-up' element={<Signup />}/>
        </Route> 
        
        {/* Private routes */}
        <Route index element={<RootLayout/>}/>
        <Route path='history' element={<HistoryLayout/>} />
      </Routes>
      <Toaster position='bottom-left'/>
    </main>
  )
}

