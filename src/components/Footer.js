import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div>
         <footer className="bg-black text-white py-6 mt-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Connect with us</h2>
          
          <div className="flex flex-col justify-center space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="hover:text-blue-600 transition-colors" />
              <span  className='pl-3 text-blue-600'>FACEBOOK</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-400 transition-colors" />
              <span  className='pl-3 text-yellow-500'>TWITTER</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500 transition-colors" />
              <span className='pl-3 text-purple-600'>INSTGRAM</span>
            </a>
          </div>
        </div>
        <div className='flex flex-col'>
          <a href="mailto:contact@example.com" className="text-xl hover:underline text-red-600">
          Delivero@gmail.com
          </a>
          <span>phone :2587496587</span>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Deliviroo. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer