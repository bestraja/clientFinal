import React, { useRef} from 'react';
import image from '../asset/im2.png';
import { useSelector } from 'react-redux';
import { GrPrevious, GrNext } from "react-icons/gr";
import diet from '../asset/hethy.png'
import Allproduct from '../components/Allproduct';
import CardFeature from '../components/CardFeature';

function Home() {
  const productData=useSelector((state)=>state.product.productList)
  const cartlistHelthy=productData.filter((el)=>el.category ==="Diet",[])
  

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
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
            {cartlistHelthy && cartlistHelthy.map((el)=>  <CardFeature  key={el._id+"Diet"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    file={el.file}  />) }
          
           
          </div>
        </section>
        <div className="border-b border-gray-300 my-8"></div>
        <Allproduct/>
      </div>
    </>
  );
}

export default Home;
