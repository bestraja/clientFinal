import React from 'react'

import { CiForkAndKnife } from "react-icons/ci";

function FilterProduct({category,onClick}) {
  return (
    <div onClick={onClick}>
    <div className='text-3xl p-5 bg-yellow-500 flex rounded-full gap-2 cursor-pointer'>
         <CiForkAndKnife/>
    </div>
    <p className='text-center font-medium my-1 capitalize text-red-500'>{category}</p>
    </div>
  )
}

export default FilterProduct