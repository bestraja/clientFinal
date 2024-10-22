import React from 'react'
import { useParams } from 'react-router-dom';
import {  useSelector,useDispatch } from "react-redux";
import Allproduct from '../components/Allproduct';
import { addCartItem } from "../redux/productSlide";
function Menu() {
  const dispatch = useDispatch()
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  console.log(productData)
  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay)
  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay))
  };
  return (
    <div className='p-2 md:p-4 mt-4 bg-white'>
      <div className='"w-full max-w-4xl m-auto md:flex bg-gray-400'>
      <div className="max-w-sm  overflow-hidden w-full p-5">
          <img
            src={productDisplay.file}
            className="hover:scale-105 transition-all h-full"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-red-600  capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className=" font-medium text-2xl">{productDisplay.category}</p>
          <p className=" font-bold md:text-2xl text-red-600">
            
            <span>{productDisplay.price}</span>
            <span className="text-red-500 ">$</span>
          </p>
          <div className="flex gap-3">
          <button  className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Buy</button>
          <button  className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]" onClick={handleAddCartProduct}>Add Cart</button>
          </div>
          <div>
            <p className=" font-medium">Description : </p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>
     <div className=''>
      <Allproduct />

     </div>
    </div>
  )
}

export default Menu