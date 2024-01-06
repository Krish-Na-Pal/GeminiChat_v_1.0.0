import './globals.css'
import { Route, Routes } from 'react-router-dom'
import { RootLayout } from './_root/RootLayout'
import { Toaster } from 'react-hot-toast'
import Signin from './_auth/forms/Signin'
import Signup from './_auth/forms/Signup'
import AuthLayout from './_auth/AuthLayout'

export const App = () => {

  return (
    <main>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path='sign-in' element={<Signin />}/>
          <Route path='sign-up' element={<Signup />}/>
        </Route> 
        
        {/* Private routes */}
        <Route index element={<RootLayout/>} />
      </Routes>
      <Toaster position='bottom-left'/>
    </main>
  )
}

