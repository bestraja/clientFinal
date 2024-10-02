import React from 'react';
import videoBg from '../asset/Food.mp4';

function Annonce() {
  return (
    <div className='relative w-full h-1/2'> {/* Hauteur réduite */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      <video src={videoBg} autoPlay loop muted className="w-full h-full object-cover" />
      
    </div>
  );
}

export default Annonce;
