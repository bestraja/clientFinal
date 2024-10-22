import React from 'react';
import image from '../asset/Cover.jpg';
import pimage from '../asset/pa1.jpg';
import aimage from '../asset/pa2.jpg';
import bimage from '../asset/pa3.jpg';

function About() {
  return (
    < div className='bg-white'>
   <div className='bg-white mt-4'> <h1 className='text-center text-2xl font-bold mb-4 text-black'>About Us</h1></div>
      <div className=' flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden'>
      
        <div className='flex flex-col md:flex-row items-stretch p-6'>
          <div className='md:w-1/2'>
            <img src={image} alt='Plat délicieux' className="w-full h-full rounded-lg object-cover" />
          </div>
          <div className='md:w-1/2 p-4 rounded-lg flex flex-col justify-between'>
            <div>
              <h2 className='text-orange-500 text-2xl font-bold mb-2'>Delevero</h2>
              <p className='text-black mb-4'>
                Is your go-to destination for delicious, homemade dishes,
                all from the comfort of your home. Whether you're craving Italian,
                Asian, Mediterranean, or local specialties, our diverse menu is sure to satisfy every palate.
              </p>
            </div>
            <button className='bg-yellow-400 text-slate-500 font-semibold py-2 px-4 rounded hover:bg-red-700'>
              Explore Menu
            </button>
          </div>
        </div>
      </div>

      <div className='mt-8 p-6 bg-white'>
        <h1 className='text-center text-2xl font-bold mb-4 text-black'>How It Works</h1>
        <div className='flex justify-center space-x-6 gap-14 mt-7'>
          <div className='flex flex-col items-center'>
            <img src={pimage} className='w-32 h-32 shadow-orange-500 shadow-lg rounded-full' alt=''/>
            <p className='text-center pt-6 text-orange-500 font-bold'>Choose your favorite food</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={aimage} className='w-32 h-32 shadow-orange-500 shadow-lg rounded-full'alt='' />
            <p className='text-center pt-6 text-orange-500 font-bold'>Fast Delivery</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={bimage} className='w-32 h-32 shadow-orange-500 shadow-lg rounded-full' alt='' />
            <p className='text-center pt-6 text-orange-500 font-bold'>Easy Payment Methods</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-center text-2xl font-bold mb-4 text-black mt-5'>What Our Customer Say</h1>
      </div>
    </div>
  );
}

export default About;
