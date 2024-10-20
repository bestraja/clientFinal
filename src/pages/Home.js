import React, { useEffect, useRef, useState } from 'react';
import image from '../asset/im2.png';
import { useSelector } from 'react-redux';
import { GrPrevious, GrNext } from "react-icons/gr";
import diet from '../asset/hethy.png'
import dishe from '../asset/dashes.png'
import Allproduct from '../components/Allproduct';
import CardFeature from '../components/CardFeature';
import FilterProduct from '../components/FilterProduct';
import { CiForkAndKnife } from "react-icons/ci";
function Home() {
  const productData=useSelector((state)=>state.product.productList)
  const cartlistHelthy=productData.filter((el)=>el.category ==="Diet",[])
  console.log(cartlistHelthy)

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
  const categoryList = [...new Set(productData
    .filter((el) => el.category !== "Diet") 
    .map((el) => el.category))];
console.log(categoryList)
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
    <>
      <div className="p-2 md:p-0.5 bg-white">
        <section className="md:flex gap-2 py-2 mt-6">
          <div className="md:w-1/2 flex flex-col justify-center h-auto">
            <h2 className="text-xl md:text-xl font-bold py-3 ml-11 text-orange-500">
              It's time to eat...!
            </h2>
            <h2 className="text-xl md:text-xl font-bold py-3 ml-11">
              You don't have the wish to get out.
            </h2>
            <h1 className="text-xl md:text-xl font-bold py-3 ml-14 text-orange-500">Deliveroo.com</h1>
            <h2 className="text-xl md:text-xl font-bold ml-11">
              in your service
            </h2>
            <button
              className="font-bold bg-orange-600 mt-8 text-white ml-4 px-2 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
              aria-label="Order Now"
            >
              Order Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img src={image} alt="Delicious food delivery" className="max-w-full h-auto" />
          </div>
        </section>

        <section className='mt-6 ml-6'>
          <div className="flex w-full items-center mt-4">
          <div className='flex items-center gap-4 p-4  '>
    <img src={diet} className="h-16 w-16 object-contain" alt='Diet Food Logo' />
    <h2 className="font-bold text-3xl text-yellow-600 ">
        Diet Food
    </h2>
</div>
            <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded  "
            >
              <GrNext />
            </button>
          </div>
            </div>




            <div className='flex min-h-48 gap-5 overflow-scroll scrollbar-none scroll-smooth' ref={slideProductRef}>
            {cartlistHelthy && cartlistHelthy.map((el)=>  <CardFeature key={el._id} el={el}  />) }
          
           
          </div>
        </section>
        <div className="border-b border-gray-300 my-8"></div>
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
    categoryList && categoryList.map((el)=> {return <FilterProduct  onClick={() => handleFilterProduct(el)} category={el}/>})
  }
  
  
 </div>
 <div className=' flex flex-wrap mt-8 mx-4 gap-4'>

{
  Datafilter.map(el=>{return (<CardFeature key={el._id} el={el}  />)})
}
 </div>
      </div>
    </>
  );
}

export default Home;
