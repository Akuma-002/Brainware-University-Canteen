import axios from 'axios'
import React, { useContext } from 'react'
import { LoginDataContext } from '../Context/LoginContext'
import bgImage from '/assets/images/loginBG.png';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const data = useContext(LoginDataContext);
  const navigate = useNavigate();
  const {name, studentCode, email, phoneNumber, password,setName, setStudentCode, setEmail, setPhoneNumber, setPassword} = data;
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:2007/signup", {name, email, phoneNumber, studentCode, password})
        .then((result)=>{console.log(result); navigate("/login")})
        .catch((error)=>{console.log(error)});
    }
  return (
    <>
    <div className='loginBackground' style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className='loginBox items-center justify-center'>
        <form onSubmit={submitHandler} className="border-2 border-black bg-[#FFF8F0] text-gray-500 max-w-[350px] max-h-[600px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_10px] shadow-black ">
            <h2 className="text-2xl font-semibold mb-6 text-center text-black">Register Now</h2>
            <input id="name" className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="text" placeholder="Enter your name" value={name} onChange={(e)=>{let temp = e.target.value.toUpperCase(); setName(temp)}} required/>
            <input id="stdCode" className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="text" placeholder="Enter your student code" value={studentCode} onChange={(e)=>{let temp = e.target.value.toUpperCase(); setStudentCode(temp)}} required/>
            <input id="phoneNumber" className="hide-number-spinner w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="number" placeholder="Enter your mobile number" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} required/>
            <input id="email" className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            
            <input id="password" className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
            
            <button type="submit" className="w-full mb-3 mt-2 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white">Sign Up</button>
            <p className="text-center mt-4">Already have an account? <NavLink to="/login" className="text-blue-500 underline">Login Now</NavLink></p>
        </form>
      </div>
    </>
  )
};

export default SignUp
