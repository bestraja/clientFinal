import React, { useState } from 'react';
import FormulaireEdite from './FormulaireEdite';
import { useDispatch } from 'react-redux';
import { deleteProduct } from "../redux/productSlide"

function Edit({ file, name, price, category, id, description }) {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCloseEdit = () => {
        setIsEditing(false);
    };
    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
      };
    return (
        <div className=" flex flex-col">
            {isEditing && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-5">
                        <FormulaireEdite
                            file={file}
                            name={name}
                            price={price}
                            category={category}
                            id={id}
                            description={description}
                            onClose={handleCloseEdit}
                        />
                        <button
                            className="mt-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                            onClick={handleCloseEdit}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="w-full min-w-[300px] max-w-[300px] bg-white py-5 px-4 cursor-pointer flex flex-col border border-orange-500 shadow-lg shadow-orange-300 rounded-lg">
                <div className="h-28 flex flex-col justify-center items-center">
                    <img src={file} alt={name} className="h-full object-cover rounded-md" />
                </div>
                <h3 className="font-semibold capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
                    Name: {name}
                </h3>
                <div className="flex flex-row gap-2">
                    <p className="text-red-700 font-medium">Category: {category}</p>
                </div>
                <p className="font-bold">
                    <span>Price: {price}</span>
                    <span className="text-red-500">$</span>
                </p>
                <div className="mt-2 max-h-24 overflow-y-auto">
                    <p className="font-medium">Description:</p>
                    <p>{description}</p>
                </div>
                <div className="flex gap-3">
                    <button
                        className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
                        onClick={handleEditClick}
                    >
                        Edit
                    </button>
                    <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"  onClick={() => handleDelete(id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Edit;
