import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import imgg from '../asset/food.jpg';
import iimg from '../asset/food1.png';
import background from '../asset/Background2.png';

function Welcome() {
    const [currentImage, setCurrentImage] = useState(iimg);

    const handleFood1Click = () => {
        setCurrentImage(iimg);
    };

    const handleFood2Click = () => {
        setCurrentImage(imgg);
    };

    return (
        <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${background})` }}>
            <div className="flex justify-between items-center h-20 px-5 md:px-10">
                <div className="text-2xl text-orange-500">Deliveroo</div>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly pt-16 items-center px-4">
                <div className="text-white text-center md:text-left">
                    <p className="text-2xl italic">Are You Hungry?</p>
                    <h1 className="text-5xl md:text-9xl">Don't Wait</h1>
                    <p className="text-2xl italic text-orange-500">Let’s start to order food now</p>
                    <Link to={"menu/670e719f56803cf90c773fa4"}>
                        <button className="mt-5 px-4 py-1 border-2 border-white rounded-full bg-transparent text-white">Check out Menu</button>
                    </Link>
                </div>
              <Link to={"home"}>
                <figure className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden mx-auto bg-cover bg-center flex justify-center items-center">
                    <img
                        src={currentImage}
                        className="absolute inset-0 w-full h-full border-2 border-white rounded-full"
                        alt="Food"
                        style={{ objectFit: 'cover' }}
                    />
                </figure>
                </Link>
                <div className="absolute right-0 flex flex-col items-center w-10 h-52 gap-2 text-2xl">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} className="hover:text-white" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="hover:text-white" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="hover:text-white" />
                    </a>
                    <a href="https://wa.me/NUMERO_DE_TELEPHONE" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className="hover:text-white" />
                    </a>
                </div>
            </div>

            <div className="flex justify-center mt-11 mx-4 md:mx-20 pb-4">
                <div id="food1" onClick={handleFood1Click} className="bg-cover w-20 h-20 md:w-24 md:h-24 rounded-full cursor-pointer" style={{ backgroundImage: `url(${iimg})` }} />
                <div id="food2" onClick={handleFood2Click} className="bg-cover w-20 h-20 md:w-24 md:h-24 rounded-full cursor-pointer mx-5" style={{ backgroundImage: `url(${imgg})` }} />
            </div>
        </div>
    );
}

export default Welcome;
