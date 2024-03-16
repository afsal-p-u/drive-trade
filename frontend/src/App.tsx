import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Chat, Home, VehicleInfo, Vehicles } from './pages'
import { Footer, Navbar } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/vehicle' element={<VehicleInfo />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
