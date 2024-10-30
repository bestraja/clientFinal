
import React, { useState } from 'react';
import SignupImage from "../asset/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link ,useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

function Login() 

{
    const navigate = useNavigate();
   const userData = useSelector(state => state)
    const dispatch = useDispatch()
  
  
  const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

   

    const [Data, setData] = useState({
        
        email: "",
        password: "",
       
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
           
            const res = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/user/login`, Data, {
                withCredentials: true 
            });
            
             
            toast('Welcom agin')
            dispatch(loginRedux(res.data))
            navigate("/");}

             catch (error) {
                if (error.response && error.response.data) {
                 
                    toast(error.response.data.msg || 'Une erreur est survenue.');
                } else {
                    toast('Erreur de connexion.');
                }
            }
      };
  return (
    <div className="p-3 md:p-4 mt-2">
    <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
            <img src={SignupImage} className="w-full h-full" alt='' />
        </div>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 pt-7 text-center text-3xl font-bold">Welcome </h2>
        <form onSubmit={handleSubmit} className="w-full py-3 flex flex-col">
           
           
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={Data.email}
                onChange={handleOnChange}
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-orange-300"
            />

            <label htmlFor="password">Password</label>
            <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-orange-300">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={Data.password}
                    onChange={handleOnChange}
                    className="w-full bg-slate-200 border-none outline-none"
                />
                <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>
                    {showPassword ? <BiShow /> : <BiHide />}
                </span>
            </div>

            <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>

        </form>
        <p className='text-left text-sm mt-2'>
        Don't  have account ?{""}
            <Link to="/signup" className="text-red-500 underline">Signup</Link>
        </p>
    </div>
</div>
);
}
  


export default Login