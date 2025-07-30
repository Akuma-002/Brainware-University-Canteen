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
import UserContext from './Context/UserContext';
import SignUp from './Components/SignUp';
import UserBox from './Components/UserBox';
import Cart from './Components/Cart';
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';

  return (
    <LoginContext>
      <UserContext>
      {!isLoginPage && !isSignUpPage && <Navbar />}
      <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/user' element={<UserBox/>}/>
      <Route path='/cart' element={<Cart/>}/>
        <Route path="/home/*" element={<Home />}>
          <Route path="veg" element={<Veg />} />
          <Route path="non-veg" element={<NonVeg />} />
          <Route path="both" element={<Both />} />
          
          {/* Optional: Default content for /home */}
          {/* <Route index element={<Veg />} /> */}
        </Route>
      </Routes>
      {!isLoginPage && !isSignUpPage && (
          <>
            <hr />
            <Footer />
          </>
        )
      }
      </UserContext>
    </LoginContext>
  );
}

export default App;
