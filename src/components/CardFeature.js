import React from 'react';
import { Link } from 'react-router-dom';

function CardFeature({ file, name, price, category,id }) {
  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col transition-transform transform hover:scale-105 border border-orange-500 shadow-lg shadow-orange-300 rounded-lg">
      <Link to={`/menu/${id}`}>
        <div className="h-28 flex flex-col justify-center items-center">
          <img src={file} alt={name} className="h-full object-cover rounded-md" />
        </div>
        <h3 className="font-semibold capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <p className="text-red-700 font-medium">{category}</p>
        <p className="font-bold">
          <span>{price}</span>
        </p>
      </Link>
      <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full">
        Add to Cart
      </button>
    </div>
  );
}

export default CardFeature;
