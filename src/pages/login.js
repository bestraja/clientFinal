
import React, { useState } from 'react';
import SignupImage from "../asset/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
function Login() 
{
  const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(prev => !prev);
    };

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    console.log(data);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    const handlsubmit = async (e) =>
     {
        e.preventDefault()
        const { firstname, lastname, email, password, confirmPassword } = data;
        if (firstname && lastname && email && password && confirmPassword) 
        {
            if(password === confirmPassword)
            {
            alert('succefuly');
            }
        
        else {

            alert('bad creditel');
        }
    }
    else
    {
        alert('Please insert correct information');
    }
     }
  return (
    <div className="p-3 md:p-4">
    <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
            <img src={SignupImage} className="w-full h-full" alt='' />
        </div>
        <form onSubmit={handlsubmit} className="w-full py-3 flex flex-col">
           
           
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-orange-300"
            />

            <label htmlFor="password">Password</label>
            <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-orange-300">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleOnChange}
                    className="w-full bg-slate-200 border-none outline-none"
                />
                <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>
                    {showPassword ? <BiShow /> : <BiHide />}
                </span>
            </div>

            <button
                type='submit'
     className="w-full max-w-[100px] m-auto bg-orange-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
            >
               Login
            </button>
        </form>
        <p className='text-left text-sm mt-2'>
        Don't  have account ?
            <Link to="/login" className="text-red-500 underline">Login</Link>
        </p>
    </div>
</div>
);
}
  


export default Login