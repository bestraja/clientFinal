import React from 'react';
import image from '../asset/Cover.jpg';
import pimage from '../asset/pa1.jpg';
import aimage from '../asset/pa2.jpg';
import bimage from '../asset/pa3.jpg';
import customerImage from '../asset/cus1.jpg';
import customerImage2 from '../asset/cus2.jpg';
import customerImage3 from '../asset/cus3.jpg';

const reviews = [
  {
    image: customerImage,
    review: "This product exceeded my expectations! The quality is outstanding and the service was excellent.",
    name: "John Doe",
    date: "October 29, 2024"
  },
  {
    image: customerImage2,
    review: "An amazing experience! Will definitely order again.",
    name: "Jane Smith",
    date: "October 30, 2024"
  },
  {
    image: customerImage3,
    review: "Delicious food and quick delivery. Highly recommend!",
    name: "Michael Brown",
    date: "October 31, 2024"
  }
];

function About() {
  return (
    <div className='bg-white'>
      <div className='mt-4'>
        <h1 className='text-center text-2xl font-bold mb-4 text-black'>About Us</h1>
      </div>
      <div className='flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='flex flex-col md:flex-row items-stretch p-6'>
          <div className='md:w-1/2'>
            <img src={image} alt='Delicious Dish' className="w-full h-full rounded-lg object-cover" />
          </div>
          <div className='md:w-1/2 p-4 rounded-lg flex flex-col justify-between'>
            <div>
              <h2 className='text-orange-500 text-2xl font-bold mb-2'>Deliveroo</h2>
              <div className='border border-orange-500 p-4 rounded-lg'>
  <p className='text-black text-2xl mt-4'>
    Your go-to destination for delicious, homemade dishes, all from the comfort of your home. 
    Whether you're craving Italian, Asian, Mediterranean, or local specialties, our diverse menu 
    is sure to satisfy every palate.
  </p>
</div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8 p-6 bg-white'>
        <h1 className='text-center text-2xl font-bold mb-4 text-black'>How It Works</h1>
        <div className='flex flex-col md:flex-row justify-center gap-14 mt-7'>
          <div className='flex flex-col items-center'>
            <img src={pimage} className='w-32 h-32 shadow-orange-500 shadow-lg rounded-full' alt='Choose Food'/>
            <p className='text-center pt-4 text-orange-500 font-bold'>Choose your favorite food</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={aimage} className='w-32 h-32 shadow-orange-500 shadow-lg rounded-full' alt='Fast Delivery'/>
            <p className='text-center pt-4 text-orange-500 font-bold'>Fast Delivery</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={bimage} className='w-32 h-32 shadow-orange-500 shadow-lg rounded-full' alt='Easy Payment'/>
            <p className='text-center pt-4 text-orange-500 font-bold'>Easy Payment Methods</p>
          </div>
        </div>
      </div>

      <div className='mt-8 p-6'>
        <h1 className='text-center text-2xl font-bold mb-4 text-black'>What Our Customers Say</h1>
        <div className='flex flex-col md:flex-row gap-4 justify-center'>
          {reviews.map((review, index) => (
            <div key={index} className="max-w-sm bg-white border-2 border-orange-500 rounded-lg shadow-md shadow-orange-500 overflow-hidden">
              <div className="flex justify-center mt-3">
                <img src={review.image} alt="Customer" className="w-20 h-20 object-cover rounded-full"/>
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Customer Review</h2>
                <p className="mt-2 sm:mt-4 text-gray-600">"{review.review}"</p>
                <div className="flex items-center mt-2 sm:mt-4">
                  <span className="text-yellow-500 text-lg sm:text-xl">★★★★★</span>
                  <span className="ml-2 text-gray-500 text-sm sm:text-base">{review.name}</span>
                </div>
              </div>
              <div className="bg-gray-100 p-4">
                <p className="text-gray-500 text-xs sm:text-sm">Reviewed on: {review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
