import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Veg from './Components/Veg';
import NonVeg from './Components/NonVeg';
import Both from './Components/Both';
import React from 'react';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <div className='heading'><h1>Brainware University Canteen</h1></div>
    <Routes>
      <Route path="/home/*" element={<Home />}>
        <Route path="veg" element={<Veg />} />
        <Route path="non-veg" element={<NonVeg />} />
        <Route path="both" element={<Both />} />
        {/* Optional: Default content for /home */}
        {/* <Route index element={<Veg />} /> */}
      </Route>
    </Routes>
    <hr/>
    <Footer/>
    </>
  );
}

export default App;
