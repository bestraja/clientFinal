import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCard } from '../redux/productSlide';

import axios from 'axios';
import { toast } from "react-hot-toast";

function FormulaireEdite({ file, name, price,id, category, description, onClose }) {
    const dispatch = useDispatch();
   
    const [formData, setFormData] = useState({
        name: name  ,
        price: price ,
        category: category ,
        description: description ,
        file: file,
    });
    const [img, setImg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

   const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file)); // Create a URL for the uploaded image
      setFormData(prev => ({ ...prev, file })); // Store the file if needed
    }
  };

  const handleUploadClick = () => {
    document.getElementById('imageInput').click();
  };


    
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newproduct = new FormData();
        newproduct.append("name", formData.name);
        newproduct.append("category", formData.category);
        newproduct.append("price",formData.price);
        newproduct.append("description", formData.description);
        newproduct.append("file", formData.file);
    
        try {
            const response= await axios.patch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/product/${id}`, newproduct);
           
            dispatch(editCard({ id, edit: formData }));
            toast.success('Product update!');
            onClose();
        } catch (error) {
            toast.error('Failed to update product!');
            
        }
    };

    return (
        <div>
            <div className="p-8 bg-gray-100">
                <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white rounded-lg' onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input
                        type="text"
                        name="name"
                        className='bg-slate-50 p-1 my-1 border border-orange-300 rounded'
                        onChange={handleChange}
                        value={formData.name}
                        placeholder={formData.name}
                    />

                    <label htmlFor='category'>Category</label>
                    <select
                        className='bg-slate-200 p-1 my-1'
                        id='category'
                        name='category'
                        onChange={handleChange}
                        value={formData.category}
                    >
                        <option value="">Select category</option>
                        <option value="fruits">Fruits</option>
                        <option value="Diet">Diet</option>
                        <option value="Dishes">Dishes</option>
                        <option value="BreakFast">BreakFast</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Rice">Rice</option>
                        <option value="Sweet">Sweet</option>
                        <option value="Burger">Burger</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Juice">Juice</option>
                        <option value="SeaFood">SeaFood</option>
                        <option value="Box">Box</option>
                        <option value="Pastires">Pastires</option>
                        <option value="sandwich">Sandwich</option>
                    </select>

                    <label htmlFor='image'>Image</label>
                    <div
                        className='h-40 w-full bg-slate-50 rounded flex items-center justify-center cursor-pointer border border-orange-300'
                        onClick={handleUploadClick}
                    >
                       
                            <img src={formData.file} className="h-full object-cover" alt="Uploaded preview" />
                       
                           
                     
                        <input
                            type="file"
                            accept="image/*"
                            id="imageInput"
                            className="hidden"
                            onChange={handleImageChange}
                           
                        />
                    </div>

                    <label htmlFor='price' className='my-1'>Price</label>
                    <input
                        type="text"
                        className='bg-slate-50 p-1 my-1 border border-orange-300 rounded'
                        name='price'
                        onChange={handleChange}
                        value={formData.price}
                        placeholder="Enter product price"
                    />

                    <label htmlFor='description'>Description</label>
                    <textarea
                        rows={2}
                        className='bg-slate-50 p-1 my-1 resize-none border border-orange-300 rounded'
                        name='description'
                        onChange={handleChange}
                        value={formData.description}
                        placeholder="Enter product description"
                    ></textarea>

                    <div className="flex gap-3">
                        <button type="submit" className="bg-yellow-500 py-1 rounded hover:bg-yellow-600 min-w-[100px]">
                            Save
                        </button>
                        <button type="button" onClick={onClose} className="bg-gray-500 py-1 rounded hover:bg-gray-600 min-w-[100px]">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormulaireEdite;
