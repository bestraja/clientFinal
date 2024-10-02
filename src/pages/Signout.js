import React, { useState } from 'react'
import SignupImage from "../asset/login-animation.gif"
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
function Signout() {
   const [showpassoword,setshowpassoword]=useState(false)
    const handlshowpassoword=()=>
    {
        setshowpassoword(el=>!el)
    }
    const [showconfirmpassoword,setshowconfirmpassoword]=useState(false)
    const handlshowconfirmpassoword=()=>
    {
        setshowconfirmpassoword(el=>!el)
    }
    const [data,setdata]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:"",

    })
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setdata((preve) => {
          return {
            ...preve,
            [name]: value,
          };
        });
      };
  return (
   
    <div className="p-3 md:p-4">
        <div  className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
            <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
            <img src={SignupImage} className="w-full h-full "  alt=''/>
            </div>
            <form className="w-full py-3 flex flex-col">
            <label htmlFor="firstName">First Name</label>
          <input type={"text"} id="firstName" onChange={handleOnChange} name="firstName" value={data.firstname} className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-orange-300"/>


          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-orange-300"
            value={data.lastname} 
            onChange={handleOnChange}/>

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-orange-300"
            value={data.email} 
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-orange-300">
            <input
        type={showpassoword?'text':'password'}
       
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password} 
              onChange={handleOnChange}
            />
           <spn className='flex text-xl cursor-pointer' onClick={handlshowpassoword}>{showpassoword?<BiShow />:<BiHide />}</spn>
          </div>

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-orange-300">
            <input
               type={showconfirmpassoword?'text':'password'}
              id="confirmpassword"
              name="confirmPassword"
             
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.confirmPassword} 
              onChange={handleOnChange}
            />
           <spn className='flex text-xl cursor-pointer' onClick={handlshowconfirmpassoword}>{showconfirmpassoword?<BiShow />:<BiHide />}</spn>
          </div>

          <button className="w-full max-w-[100px] m-auto  bg-orange-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign up
          </button>

            </form>
            <p className='text-left text-sm mt-2'>Alerdy have account ?<Link to ={"/login"} className="text-red-500 underline">Login</Link></p>
        </div>
        </div>
  )
}

export default Signout