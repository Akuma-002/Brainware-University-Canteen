import React, { useContext } from 'react';
import { LoginDataContext } from '../Context/LoginContext';
import { UserDataContext } from '../Context/UserContext';
import data from './data.json'
import { useNavigate } from 'react-router-dom';

const Both = () => {
  const navigate = useNavigate();
  const loginData = useContext(LoginDataContext);
  const { loginStatus } = loginData;
  const userData = useContext(UserDataContext);
  const {name, setName, email, setEmail, phoneNumber, setPhoneNumber, setStudentCode, password, setPassword,avatar, setAvatar, role, setRole, cart, setCart, orders, setOrders} = userData;
  return (
    <div className='main'>
      {data.map((item)=>{
        let addItem = ()=>{setCart(cart, {"name" : item.Name, "type": item.Type, "description": item.Description, "price":item.Price}); console.log("Add"); console.log(cart)}
        return(
          <div className="containter border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white max-w-56">
    <div className="group cursor-pointer flex items-center justify-center px-2">
        <img className="prductImage group-hover:scale-105 transitionName max-w-[160px]" src={`${item.Image}`} alt={`${item.Name}`} />
    </div>
    
    <div key={0} className="text-gray-500/60 text-sm">
        <p>{item.Type}</p>
        <p className="text-gray-700 font-medium text-lg truncate w-full">{item.Name}</p>

        <div className="flex items-center gap-0.5">
            <p>{item.Description}</p>
        </div>

        <div className="flex items-end justify-between mt-2">
            <p className="md:text-xl text-base font-medium text-indigo-500">
                {`₹${item.Price}`}
            </p>
            <button className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium" onClick={()=>{loginStatus? addItem():navigate("/login")}}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round"/>
                </svg>
                Add
            </button>
        </div>
    </div>
</div>
        )
      })}
    </div>
  )
}
export default Both;