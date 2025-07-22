import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      className="fixed top-0 left-0 w-full h-full bg-[#f3ece6] flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Spinning Circle */}
        <motion.div
          className="w-55 h-50 border-4 border-[#d7c0b1] border-t-[#7e6659] rounded-full absolute animate-spin"
        ></motion.div>

        {/* Center Text */}
        <motion.div
          className="text-[#7e6659] text-xl font-semibold"
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          🌿 Beauty Care
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
