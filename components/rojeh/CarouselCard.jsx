import { motion } from 'framer-motion';
import React from 'react';

const CarouselCard = ({ content, index, angle }) => {
  return (
    <motion.div
      className="absolute w-[150px] h-[200px] bg-white transform-gpu transform-origin-center shadow-lg rounded-lg flex items-center justify-center transition-transform duration-500 ease-in-out"
      style={{
        transform: `rotateY(${index * angle}deg) translateZ(300px)`,
      }}
      whileHover={{ scale: 1.1 }}
    >
      {content}
    </motion.div>
  );
};

export default CarouselCard;
