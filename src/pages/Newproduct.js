import React, { useState } from 'react';
import { BsCloudUpload } from "react-icons/bs";
import axios from 'axios';

function Newproduct() {
  const [data, setData] = useState({
    name: "",
    category: "",
    file: null,
    price: "",
    description: ""
  });
  const [img, setImg] = useState("");
 
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file)); // Create a URL for the uploaded image
      setData(prev => ({ ...prev, file })); // Store the file if needed
    }
  };

  const handleUploadClick = () => {
    document.getElementById('imageInput').click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newproduct = new FormData();
    newproduct.append("name", data.name);
    newproduct.append("category", data.category);
    newproduct.append("price", data.price);
    newproduct.append("description", data.description);
    newproduct.append("file", data.file);

    try {
      const res = await axios.post("http://localhost:5050/api/product/uploadProduct", newproduct);
      console.log(res);
      // Clear form fields
      setData({
        name: "",
        category: "",
        file: null,
        price: "",
        description: ""
      });
      setImg(""); // Clear the image preview
    } catch (error) {
     
        if (error.response && error.response.data) {
         
            console.log(error.response.data.msg || 'Une erreur est survenue.');
        } else {
            console.log('Erreur de connexion.');
        }
    }
  };

  return (
    <div className="p-8 bg-gray-100">
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white rounded-lg' onSubmit={handleSubmit}>
       
        
        <label htmlFor='name'>Name</label>
        <input
          type="text"
          name="name"
          className='bg-slate-50 p-1 my-1 border border-orange-300 rounded' 
          onChange={handleOnChange}
          value={data.name}
          required
        />

       
<label htmlFor='category' >Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handleOnChange} value={data.category}  >
          <option value={"other"}>select category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"Diet"}>Diet</option>
          <option value={"Dishes"}>Dishes</option>
          <option value={"BreakFast"}>BreakFast</option>
          <option value={"Pizza"}>Pizza</option>
          <option value={"Rice"}>Rice</option>
          <option value={"Sweet"}>Sweet</option>
          <option value={"Burger"}>Burger</option>
          <option value={"Pasta"}>Pasta</option>
          <option value={"Juice"}>Juice</option>
          <option value={"SeaFood"}>SeaFood</option>
          <option value={"Box"}>Box</option>
          <option value={"Pastires"}>Pastires</option>
          <option value={"sandwich"}>sandwich</option>
        </select>

        <label htmlFor='image'>Image</label>
        <div
          className='h-40 w-full bg-slate-50 rounded flex items-center justify-center cursor-pointer border border-orange-300'
          onClick={handleUploadClick}
        >
          {img ? (
            <img src={img} className="h-full object-cover" alt="Uploaded preview" />
          ) : (
            <span className='text-5xl'><BsCloudUpload /></span>
          )}
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
          onChange={handleOnChange}
          value={data.price}
          required
        />

        <label htmlFor='description'>Description</label>
        <textarea
          rows={2}
          className='bg-slate-50 p-1 my-1 resize-none border border-orange-300 rounded' 
          name='description'
          onChange={handleOnChange}
          value={data.description}
        ></textarea>

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow' >
          Save
        </button>
      </form>
    </div>
  );
}

export default Newproduct;
