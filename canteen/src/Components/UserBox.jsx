import React, { useContext } from 'react';
import { LoginDataContext } from '../Context/LoginContext';
import { UserDataContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function UserBox() {
  const loginData = useContext(LoginDataContext);
  const userData = useContext(UserDataContext);
  const navigate = useNavigate();
  const { loginStatus } = loginData;
const {name, setName, email, setEmail, phoneNumber, setPhoneNumber, setStudentCode, password, setPassword,avatar, setAvatar, role, setRole, cart, setCart, orders, setOrders} = userData
    
  if (!loginStatus) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="userBox">
      <div className='userInfo'>
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
        <div className='edit'>
          
        </div>
      </div>
      
      <div className='items'>
        <div className='orderBox'onClick={()=>{navigate("/orders")}}>
          <h3>Orders</h3>
          <hr />
          <p>{orders.length}</p>
        </div>
        <div className='cartBox'>
          <h3>Cart</h3>
          <hr />
          <p>{cart.length}</p>
        </div>
      </div>
      
    </div>
  );
}

export default UserBox;
