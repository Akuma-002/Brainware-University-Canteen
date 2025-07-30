import React, { useState, useEffect } from 'react'
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
    const [loginStatus, setLoginStatus] = useState(false);

    // Restore user data from localStorage on mount
    useEffect(() => {
        const savedUser = localStorage.getItem('userData');
        console.log('[UserContext] Restoring from localStorage:', savedUser);
        if (savedUser) {
            const data = JSON.parse(savedUser);
            setName(data.name || "");
            setEmail(data.email || "");
            setPhoneNumber(data.phoneNumber || 0);
            setStudentCode(data.studentCode || "");
            setPassword("");
            setAvatar(data.avatar || '');
            setRole(data.role || "");
            setCart(data.cart || []);
            setOrders(data.orders || []);
            setLoginStatus(!!data.studentCode);
        }
    }, []);

    // Save user data to localStorage on change
    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify({
            name, email, phoneNumber, studentCode, password, avatar, role, cart, orders, loginStatus
        }));
    }, [name, email, phoneNumber, studentCode, password, avatar, role, cart, orders, loginStatus]);
    return (
        <UserDataContext.Provider value={{name, setName, email, setEmail, phoneNumber, setPhoneNumber, studentCode, setStudentCode, password, setPassword,
            avatar, setAvatar, role, setRole, cart, setCart, orders, setOrders, loginStatus, setLoginStatus
        }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext