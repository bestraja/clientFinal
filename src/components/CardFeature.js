import React from 'react'

function CardFeature({el}) {
  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col transition-transform transform hover:scale-105 border border-orange-500 shadow-lg shadow-orange-300 p-4 rounded-lg">
    
    <div className="h-28 flex flex-col justify-center items-center">
      <img src={el.file} alt={el.name} className="h-full object-cover rounded-md" />
    </div>
    <h3 className="font-semibold  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
      {el.name}
    </h3>
    <p className="text-red-700 font-medium">{el.category}</p>
    <p className="font-bold">
     
      <span>{el.price}</span>
    </p>
 
  <button
    className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full"
  >
    Add to Cart
  </button>
</div>
  )
}

export default CardFeature