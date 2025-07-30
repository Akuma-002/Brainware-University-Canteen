import React, { createContext, useState, useEffect } from 'react'

export const LoginDataContext = createContext();
const LoginContext = ({children}) => {
        const [name, setName] = useState("");
        const [studentCode, setStudentCode] = useState("");
        const [email, setEmail] = useState("");
        const [phoneNumber, setPhoneNumber] = useState(0);
        const [role, setRole] = useState("customer");
        const [password, setPassword] = useState("");
        const [loginStatus, setLoginStatus] = useState(false);

        // Restore login state from localStorage on mount
        useEffect(() => {
            const savedUser = localStorage.getItem('userData');
            console.log('[LoginContext] Restoring from localStorage:', savedUser);
            if (savedUser) {
                const user = JSON.parse(savedUser);
                setName(user.name || "");
                setStudentCode(user.studentCode || "");
                setEmail(user.email || "");
                setPhoneNumber(user.phoneNumber || 0);
                setRole(user.role || "customer");
                setPassword("");
                setLoginStatus(!!user.studentCode);
            }
        }, []);

        // Save login state to localStorage on change
        useEffect(() => {
            localStorage.setItem('loginData', JSON.stringify({
                name, studentCode, email, phoneNumber, role, password, loginStatus
            }));
        }, [name, studentCode, email, phoneNumber, role, password, loginStatus]);
    return (
    <LoginDataContext.Provider value={{name, setName, studentCode, setStudentCode, email, setEmail, phoneNumber, setPhoneNumber, password, setPassword, loginStatus, setLoginStatus}}>
        {children}
    </LoginDataContext.Provider>
    )
}
export default LoginContext