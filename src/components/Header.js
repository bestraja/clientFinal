import React, { useState } from "react";
import logo from '../asset/logo.jpg'
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { ImCart } from "react-icons/im";
import {  useSelector , useDispatch } from "react-redux";
import { logoutRedux } from "../redux/userSlice"
import { toast } from "react-hot-toast";


function Header() {
    const userData = useSelector((state) => state.user);
    console.log(userData.image);
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu((el) => !el);
      };
      const handleLogout = () => {
        dispatch(logoutRedux());
        toast("Logout successfully");
      };
    
    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
            {/*desktop */}
            <div className='flex items-center h-full justify-between'>
                <Link to={""}>
                    <div className="h-16 flex  flex-row ">
                        <img src={logo} className="h-full" alt='logo' />
                        <h1 className='text-orange-400 mt-5'>Deliveroo</h1>
                    </div>
                </Link>
                <div className=' flex items-center gap-4 md:gap-7'>
                    <nav className='gap-4 md:gap-6 text-base md:text-lg hidden md:flex text-orange-400'>
                        <Link to={""}>Home</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>
                    </nav>

                    <div className='text-2xl text-slate-600 relative'>
                        <ImCart />
                        <div className='absolute -top-3 -right-0 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>0</div>

                    </div>
                    <div className='text-slate-600 '  onClick={handleShowMenu} >
                    <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" alt="" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
                             <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                             {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                               <Link
                                 to={"newproduct"}
                                 className="whitespace-nowrap cursor-pointer px-2"
                               >
                                 New product
                               </Link>
                             )}
             
                                
                                {userData.image ? (
                                    <p className="cursor-pointer text-white px-2 bg-red-500" onClick={handleLogout}>
                                        Logout ({userData.firstname})
                                    </p>
                                ) : (
                                    <Link to='login' className='whitespace-nowrap cursor-pointer'>Login</Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header