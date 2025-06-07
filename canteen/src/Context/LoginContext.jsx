import React, { createContext, useState } from 'react'

export const LoginDataContext = createContext();
const LoginContext = ({children}) => {
        const [name, setName] = useState("");
        const [studentCode, setStudentCode] = useState("");
        const [email, setEmail] = useState("");
        const [phoneNumber, setPhoneNumber] = useState(0);
        const [role, setRole] = useState("customer");
        const [password, setPassword] = useState("");
        const [loginStatus, setLoginStatus] = useState(false);
    return (
    <LoginDataContext.Provider value={{name, setName, studentCode, setStudentCode, email, setEmail, phoneNumber, setPhoneNumber, password, setPassword, loginStatus, setLoginStatus}}>
        {children}
    </LoginDataContext.Provider>
    )
}
export default LoginContext