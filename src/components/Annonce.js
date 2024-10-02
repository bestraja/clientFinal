import React from 'react'
import videoBg from '../asset/Food.mp4'
function Annonce() {
  return (
    <div className='relative w-full h-screen '> 
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
    <video src={videoBg} autoPlay loop muted className="w-full h-full object-cover" /> 
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
      
    </div>
  </div>
   
  )
}

export default Annonce




