import React, { createContext, useState } from 'react'

export const LoingDataContext = createContext();
const LoginContext = ({children}) => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [phoneNumber, setPhoneNumber] = useState(0);
        const [role, setRole] = useState("customer");
        const [password, setPassword] = useState("");
        const [loginStatus, setLoginStatus] = useState(false);
    return (
    <LoingDataContext.Provider value={[name, setName, email, setEmail, phoneNumber, setPhoneNumber, password, setPassword, loginStatus, setLoginStatus]}>
        {children}
    </LoingDataContext.Provider>
    )
}
export default LoginContext