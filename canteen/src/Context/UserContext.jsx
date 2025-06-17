import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const UserDataContext = createContext()
    const UserContext = ({children}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [studentCode, setStudentCode] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState('');
    const [role, setRole] = useState("");
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    return (
        <UserDataContext.Provider value={{name, setName, email, setEmail, phoneNumber, setPhoneNumber, studentCode, setStudentCode, password, setPassword,
            avatar, setAvatar, role, setRole, cart, setCart, orders, setOrders
        }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext