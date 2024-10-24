import React from 'react'
import {  useSelector } from "react-redux";
import Edit from '../components/Edit';
function Editproduct() {
    const productData = useSelector((state) => state.product.productList);
  return (
    
<>

<div className="flex flex-wrap mt-8 mx-4 gap-4">
    { productData && productData.map((el)=>  <Edit key={el._id} el={el}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    description={el.description}
                    file={el.file}  />) }
</div>

</>
  )
}

export default Editproduct