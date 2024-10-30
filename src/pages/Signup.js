import React, { useState } from 'react';
import axios from 'axios';
import SignupImage from "../asset/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

function Signup() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(prev => !prev);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleShowConfirmPassword = () => setShowConfirmPassword(prev => !prev);

    const [Data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        telephone: "",
        address: "",
        file: "",
    });

    const [img, setImg] = useState(SignupImage);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImg(URL.createObjectURL(file));
            setData(prev => ({ ...prev,file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const datasignup = new FormData();
        datasignup.append("firstname", Data.firstname);
        datasignup.append("lastname", Data.lastname);
        datasignup.append("email", Data.email);
        datasignup.append("password", Data.password);
        datasignup.append("confirmPassword", Data.confirmPassword);
        datasignup.append("telephone", Data.telephone);
        datasignup.append("address", Data.address);
        datasignup.append("file", Data.file);

        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/user/signup`, datasignup);
            toast(res.data.msg);
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.data) {
                toast(error.response.data.msg || 'Une erreur est survenue.');
            } else {
                toast('Erreur de connexion.');
            }
        }
    };

    return (
        <>
            <div className="p-3 md:p-4 flex mt-5 bg-white justify-center items-center">
                <div className="w-full max-w-sm bg-white flex flex-col p-6 border border-gray-300 rounded-lg shadow-lg">
                    <div className='w-24 h-24 overflow-hidden rounded-full drop-shadow-lg m-auto relative'>
                        <img src={img} className="w-full h-full object-cover" alt='' />
                        <label htmlFor="profileImage">
                            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                                <p className="text-sm p-1 text-white">Upload</p>
                            </div>
                            <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleImageChange} />
                        </label>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full py-3 flex flex-col">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={Data.firstname}
                            onChange={handleOnChange}
                            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded-lg border border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        />

                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={Data.lastname}
                            onChange={handleOnChange}
                            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded-lg border border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        />

                        <label htmlFor="telephone">Phone Number</label>
                        <input
                            type="text"
                            id="telephone"
                            name="telephone" 
                            value={Data.telephone}
                            onChange={handleOnChange}
                            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded-lg border border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        />

                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={Data.address}
                            onChange={handleOnChange}
                            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded-lg border border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={Data.email}
                            onChange={handleOnChange}
                            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded-lg border border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        />

                        <label htmlFor="password">Password</label>
                        <div className="flex px-2 py-1 bg-slate-200 rounded-lg border border-gray-300 shadow-sm mt-1 mb-2 focus-within:outline focus-within:outline-orange-300">
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

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="flex px-2 py-1 bg-slate-200 rounded-lg border border-gray-300 shadow-sm mt-1 mb-2 focus-within:outline focus-within:outline-orange-300">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={Data.confirmPassword}
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
        </>
    );
}

export default Signup;
