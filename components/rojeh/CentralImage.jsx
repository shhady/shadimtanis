import React from 'react';

const CentralImage = ({ src, alt }) => {
  return (
    <div className="absolute z-10">
      <img
        src={src} // Path to your image
        alt={alt}
        className="w-[150px] h-[200px] object-cover"
      />
    </div>
  );
};

export default CentralImage;