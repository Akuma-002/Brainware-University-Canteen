import React, { useContext } from 'react';
import { LoginDataContext } from '../Context/LoginContext';
import { UserDataContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';

function UserBox() {
  const loginData = useContext(LoginDataContext);
  const userData = useContext(UserDataContext);
  const { loginStatus } = loginData;
const {name, setName, email, setEmail, phoneNumber, setPhoneNumber, setStudentCode, password, setPassword,avatar, setAvatar, role, setRole, cart, setCart, orders, setOrders} = userData
    
  if (!loginStatus) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="userBox">
      <div className="flex flex-wrap justify-end gap-12 userAvtar">
        <div className="relative">
          <img className="pic rounded-full" src={avatar} alt="userImage1" />
        </div>
      </div>
      <div className='nameBox'>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h2>{phoneNumber==0 ? " " : phoneNumber}</h2>
        
      </div>
      
    </div>
  );
}

export default UserBox;
