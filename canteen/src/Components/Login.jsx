import React, { useContext } from 'react'
import { LoingDataContext } from '../Context/LoginContext'
import bgImage from '/assets/images/loginBG.png';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const data = useContext(LoingDataContext);
  const {email, phoneNumber, password, setEmail, setPhoneNumber, setPassword} = data
  return (
    <>
    <div className='loginBackground' style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className='loginBox items-center justify-center'>
        <form className="border-2 border-black bg-[#FFF8F0] text-gray-500 max-w-[350px] max-h-[400px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_10px] shadow-black ">
          <h2 className="text-2xl font-semibold mb-6 text-center text-black">Login Now</h2>
          <input id="email" className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required/>
          <input id="password" className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required/>
          <div className="text-right py-4">
              <NavLink className="text-blue-600 underline" to="#">Forgot Password</NavLink>
          </div>
          <button type="submit" className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>
          <p className="text-center mt-4">Don’t have an account? <NavLink to="/signup" className="text-blue-500 underline">Signup Now</NavLink></p>
        </form>
      </div>
    </>
  )
};

export default Login
