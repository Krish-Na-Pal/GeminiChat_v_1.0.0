import './globals.css'
import { Route, Routes } from 'react-router-dom'
import { RootLayout } from './_root/RootLayout'

export const App = () => {

  return (
    <main className='flex h-screen bg-zinc-900'>
      <Routes>
        {/*public routes*/}
        <Route index element={<RootLayout/>}>
        </Route>
      </Routes>
    </main>
  )
}

