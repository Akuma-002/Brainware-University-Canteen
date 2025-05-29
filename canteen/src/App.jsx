import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}
export default App;