import './globals.css'
import { Route, Routes } from 'react-router-dom'
import { RootLayout } from './_root/RootLayout'
import { Toaster } from 'react-hot-toast'

export const App = () => {

  return (
    <main>
      <Routes>
        {/*public routes*/}
        <Route index element={<RootLayout/>}>
        </Route>
      </Routes>
      <Toaster position='bottom-left'/>
    </main>
  )
}

