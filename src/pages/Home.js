import React from 'react'
import background from '../asset/im1.png'


function Home() {

  return (
    <>
      <div className="p-2 md:p-0.5">
        <div className="md:flex gap-2 py-2">
          <div
            className="md:w-full h"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '20px', // Ajustez le rembourrage selon vos besoins
              color: 'white', // Changez la couleur du texte pour une meilleure visibilité
              height: '450px',
            }}
          >
            <h2 className="text-4xl md:text-7xl font-bold py-3">
              The Fastest Delivery in{" "} <br />
              <span className="text-orange-600">Your Home</span>
            </h2>
            <p className="py-3 text-xl">
              Deliveroo offers a seamless food delivery experience,<br />
              connecting customers with a diverse selection of restaurants <br />
              and cuisines right at their fingertips. Whether you're craving comfort food, <br />
              healthy meals, or international dishes, our platform makes it easy to order <br />
              and enjoy delicious food from the comfort of your home or office.
            </p>
            <button className="font-bold bg-orange-500 text-slate-200 ml-14 px-9 py-2 rounded-md">
              Order Now
            </button>
          </div>

          
        </div>
         

         <div className=''>
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          </div>
          </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>
    </>
  );
}

export default Home;
