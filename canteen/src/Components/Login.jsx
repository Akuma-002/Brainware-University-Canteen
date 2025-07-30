import axios from 'axios';
import React, { useContext } from 'react'
import { LoginDataContext } from '../Context/LoginContext'
import { UserDataContext } from '../Context/UserContext';
import bgImage from '/assets/images/loginBG.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const data = useContext(LoginDataContext);
  const userData = useContext(UserDataContext);
  const navigate = useNavigate();
  const {studentCode, password, setStudentCode, setPassword, setLoginStatus} = data;
  const {setName, setEmail, setPhoneNumber, setAvatar, setRole, setCart, setOrders, setLoginStatus: setUserLoginStatus, setStudentCode: setUserStudentCode, setPassword: setUserPassword} = userData;
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:2007/login", { studentCode, password })
      .then((result) => {
        if (result.data.success) {
          const user = result.data.user;
          // Set all user data in both contexts
          setLoginStatus(true);
          setUserLoginStatus(true);
          setName(user.name || "");
          setEmail(user.email || "");
          setPhoneNumber(user.phoneNumber || 0);
          setAvatar(user.avatar || "");
          setRole(user.role || "customer");
          setCart(user.cart || []);
          setOrders(user.orders || []);
          setUserStudentCode(user.studentCode || "");
          setUserPassword("");
          // Save to localStorage immediately
          localStorage.setItem('userData', JSON.stringify({
            name: user.name || "",
            email: user.email || "",
            phoneNumber: user.phoneNumber || 0,
            studentCode: user.studentCode || "",
            password: "",
            avatar: user.avatar || "",
            role: user.role || "customer",
            cart: user.cart || [],
            orders: user.orders || [],
            loginStatus: true
          }));
          localStorage.setItem('loginData', JSON.stringify({
            name: user.name || "",
            studentCode: user.studentCode || "",
            email: user.email || "",
            phoneNumber: user.phoneNumber || 0,
            role: user.role || "customer",
            password: "",
            loginStatus: true
          }));
          navigate("/home");
        } else {
          setLoginStatus(false);
          setUserLoginStatus(false);
          setName("");
          setEmail("");
          setPhoneNumber(0);
          setAvatar("");
          setRole("");
          setCart([]);
          setOrders([]);
          setUserStudentCode("");
          setUserPassword("");
          // Remove from localStorage
          localStorage.removeItem('userData');
          localStorage.removeItem('loginData');
          alert(result.data.message || "Login failed");
        }
      })
      .catch((error) => { console.log(error); });
  }
  return (
    <>
    <div className='loginBackground' style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className='loginBox items-center justify-center'>
        <form onSubmit={submitHandler} className="border-2 border-black bg-[#FFF8F0] text-gray-500 max-w-[350px] max-h-[700px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_10px] shadow-black ">
          <h2 className="text-2xl font-semibold mb-6 text-center text-black">Login Now</h2>
          <input id="stdCode" className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" value={studentCode} onChange={(e)=>{let temp = e.target.value.toUpperCase(); setStudentCode(temp)}} type="text" placeholder="Enter your studen code" required/>
          <input id="password" className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
          <div className="text-right py-4">
              <NavLink className="text-blue-600 underline" to="">Forgot Password</NavLink>
          </div>
          <button type="submit" className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>
          <p className="text-center mt-4">Don’t have an account? <NavLink to="/signup" className="text-blue-500 underline">Signup Now</NavLink></p>
        </form>
      </div>
    </>
  )
};

export default Login
