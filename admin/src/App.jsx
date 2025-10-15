import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-white to-gray-400 min-h-screen' >
      <>
      <Navbar />
      <hr />
      <div className='flex w-full'>
        <Sidebar />
      </div>
      </>
    </div>
  )
}

export default App 