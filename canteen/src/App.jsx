import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Veg from './Components/Veg';
import NonVeg from './Components/NonVeg';
import Both from './Components/Both';
import React from 'react';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Login from './Components/Login';
import LoginContext from './Context/LoginContext';
import 
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <LoginContext>
    {!isLoginPage && <Navbar />}
    
    <Routes>
    <Route path='/login' element={<Login/>} />


      <Route path="/home/*" element={<Home />}>
        <Route path="veg" element={<Veg />} />
        <Route path="non-veg" element={<NonVeg />} />
        <Route path="both" element={<Both />} />
        
        {/* Optional: Default content for /home */}
        {/* <Route index element={<Veg />} /> */}
      </Route>
    </Routes>
    {!isLoginPage && (
        <>
          <hr />
          <Footer />
        </>
      )}
    </LoginContext>
  );
}

export default App;
