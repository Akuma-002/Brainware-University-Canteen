import React, { useContext } from 'react';
import { LoginDataContext } from '../Context/LoginContext';
import { UserDataContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';

function UserBox() {
  const loginData = useContext(LoginDataContext);
  const userData = useContext(UserDataContext);
  const { loginStatus } = loginData;
  const {
    avatar,
    cart
  } = userData;

  if (!loginStatus) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="userBox px-10">
      <div className="flex flex-wrap justify-center gap-12">
        <div className="relative">
          <img className="h-8 w-8 rounded-full" src={avatar} alt="userImage1" />
          <div className="absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 bg-blue-500 rounded-full">
            <p className="text-white text-xxs">{cart}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBox;
