import React from "react";
import { useSelector } from "react-redux";
import emptyCartImage from "../asset/empty.gif"
import Cardproduct from "../components/Cardproduct";

function Card() {
  const productCartItem = useSelector((state) => state.product.cartItem);
  
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
 
  return (
    < div className="bg-white">
    
      <div className="p-2 md:p-4 bg-white">
        <h2 className="text-lg md:text-2xl font-bold text-orange-600">
          Your Cart Items
        </h2>

        {productCartItem[0] ?
        <div className="my-4 flex gap-3">
          {/* display cart items  */}
          <div className="w-full max-w-3xl ">
            {productCartItem.map((el) => {
              return (
                <Cardproduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  file={el.file}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                />
              );
            })}
          </div>

          {/* total cart item  */}
          <div className="w-full max-w-md  ml-auto">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Qty :</p>
              <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Price</p>
              <p className="ml-auto w-32 font-bold">
              {totalPrice}<span className="text-red-500">$</span>
              </p>
            </div>
            <button className="bg-red-500 w-full text-lg font-bold py-2 text-white">
              Payment
            </button>
          </div>
        </div>

        : 
        <>
          <div className="flex w-full justify-center items-center flex-col">
            <img src={emptyCartImage} className="w-full max-w-sm"/>
            <p className="text-red-600 text-3xl font-bold">Empty Cart</p>
          </div>
        </>
      }
      </div>
    
    </div>
  );
};

export default Card;