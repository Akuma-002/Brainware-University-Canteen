import React from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginDataContext } from '../Context/LoginContext';
import { UserDataContext } from '../Context/UserContext';
import { useEffect } from 'react';
const Navbar = () => {
    const navigate = useNavigate()
    const loginData = useContext(LoginDataContext);
    const userData = useContext(UserDataContext);
    const {loginStatus, setLoginStatus, studentCode} = loginData;
    const {name, setName, email, setEmail, phoneNumber, setPhoneNumber, setStudentCode, password, setPassword,avatar, setAvatar, role, setRole, cart, setCart, orders, setOrders} = userData
    
    useEffect(() => {
        if (loginStatus && studentCode) {
            axios.get("http://localhost:2007/user", { params: { studentCode } })
                .then((result) => {
                    setName(result.data.name);
                    setEmail(result.data.email);
                    setPhoneNumber(result.data.phoneNumber);
                    setStudentCode(result.data.studentCode);
                    setCart(result.data.cart);
                    setOrders(result.data.orders);
                    setAvatar(result.data.avatar);
                })  
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [loginStatus, studentCode]);
    const navLinks = [
        { name: 'Home', path: '/home' },
        { name: 'Products', path: '/product' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    console.log(name);
    console.log(avatar);
    return (
        <nav  className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
            {/* Logo */}
            <NavLink to="/home" >
            <div className="flex gap-2 justify-center">
                <img src={"/logo.png"} alt="logo" className={`h-11 ${isScrolled ? "box-shadow: var(--shadow-10xs)" : ""}`} />
                <p className={`h-11 text-md py-2  ${isScrolled ? "text-black" : "text-white"}`}>Brainware University Canteen</p>
            </div>
                
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <NavLink key={i} to={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </NavLink>
                ))}
                <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                    New Launch
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <svg className={`h-6 w-6 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                {!loginStatus?(<button onClick={()=>{navigate("/login")}} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                    Login
                </button>) : (
                    <div class="flex flex-wrap justify-center gap-12">
    <div className="relative">
        <img className="h-8 w-8 rounded-full"
            src={avatar}
            alt="userImage1"/>
        <div className="absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 bg-blue-500 rounded-full">
            <p className="text-white text-xxs">{cart}</p>
        </div>
    </div>
</div>)}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <NavLink key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </NavLink>
                ))}

                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    New Launch
                </button>

                {!loginStatus?(<button onClick={()=>{navigate("/login")}} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                    Login
                </button>) : (
                    <div class="flex flex-wrap justify-center gap-12">
    <div className="relative">
        <img className="h-8 w-8 rounded-full"
            src={avatar}
            alt="userImage1"/>
        <div className="absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 bg-blue-500 rounded-full">
            <p className="text-white text-xxs">{cart}</p>
        </div>
    </div>
</div>)}
            </div>
        </nav>
    );
};

export default Navbar;
