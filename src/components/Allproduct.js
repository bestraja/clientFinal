import React from 'react'
import CardFeature from './CardFeature'
import FilterProduct from './FilterProduct'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dishe from '../asset/dashes.png'
import { CiForkAndKnife } from "react-icons/ci";
function Allproduct() {
  const productData=useSelector((state)=>state.product.productList)
  const categoryList = [...new Set(productData
    .filter((el) => el.category !== "Diet") 
    .map((el) => el.category))];

const [FilterBy,setFilterBy]=useState("")
const [Datafilter,setDatafilter]=useState([])

useEffect(() => {
  setDatafilter(productData);
}, [productData]);

const handleFilterProduct = (category) => {
  setFilterBy(category)
  const filter = productData.filter(
    (el) => el.category.toLowerCase() === category.toLowerCase()
  );
  setDatafilter(() => {
    return [...filter];
  });
};
const handleShowAll = () => {
  setDatafilter(productData); // Réinitialise pour afficher tous les produits
};
  return (
    <div>
        <div className='flex items-center gap-4 p-4  '>
    <img src={dishe} className="h-16 w-20 object-contain rounded-full" alt='Diet Food Logo' />
    <h2 className="font-bold text-3xl text-yellow-600 ">
    Our Dishes
    </h2>
</div>
 <div className='flex gap-4 justify-center overflow-scroll scrollbar-none mt-5'>
  <div className=''>
       <div onClick={handleShowAll} className="text-3xl p-5 bg-yellow-500 flex rounded-full gap-2 cursor-pointer">
            <CiForkAndKnife  />
          
          </div>
          <p className='text-center font-medium my-1 capitalize text-red-500'>ALL</p> 
   </div>
  {
    categoryList && categoryList.map((el)=> {return <FilterProduct  onClick={() => handleFilterProduct(el)} category={el} />})
  }
  
  
 </div>
 <div className=' flex flex-wrap mt-8 mx-4 gap-4'>

{
  Datafilter.map(el=>{return (<CardFeature  key={el._id}
    id={el._id}
    file={el.file}
    name={el.name}
    category={el.category}

    price={el.price}  />)})
}
 </div>
    </div>
  )
}

export default Allproduct