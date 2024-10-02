import React, { useState } from 'react';
import SignupImage from "../asset/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link,useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
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
        image:"",
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
            navigate("/login");
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
     const handleUploadProfileImage = async(e)=>{
        const data = await ImagetoBase64(e.target.files[0])
    
  
        setData((preve)=>{
            return{
              ...preve,
              image : data
            }
        })
  
    }
    return (
        <div className="p-3 md:p-4">
            <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
                <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
                    <img src={SignupImage} className="w-full h-full" alt='' />
                    <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
          </label>
                </div>
                <form onSubmit={handlsubmit} className="w-full py-3 flex flex-col">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={data.firstname}
                        onChange={handleOnChange}
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-orange-300"
                    />

                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={data.lastname}
                        onChange={handleOnChange}
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-orange-300"
                    />

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

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-orange-300">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onChange={handleOnChange}
                            className="w-full bg-slate-200 border-none outline-none"
                        />
                        <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>
                            {showConfirmPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>

                    <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Signup</button>
                </form>
                <p className='text-left text-sm mt-2'>
                    Already have an account?
                    <Link to="/login" className="text-red-500 underline">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup
