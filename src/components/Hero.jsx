import { motion } from "framer-motion";
import hero from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section className="bg-[#f3ece6] py-16 px-6 md:px-20 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* ✅ Left Content with Animation */}
        <motion.div
          className="flex justify-center w-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#5a4b41] leading-tight"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              Glow Naturally
              <br className="hidden md:block" /> Shine Confidently
            </motion.h1>

            <motion.p
              className="mt-4 text-[#a89d94] text-base md:text-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Skincare that’s clean, gentle, and made to <br /> love your skin — naturally.
            </motion.p>

            <motion.button
              className="mt-6 bg-[#fffaf6] border border-[#c2b3a8] text-[#7e6659] 
              hover:bg-[#e9e2db] hover:text-[#5a4b41] 
              py-3 px-6 rounded-lg text-sm md:text-base 
              transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Your Glow
            </motion.button>
          </div>
        </motion.div>

        {/* ✅ Right Side Image with Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={hero}
            alt="Beauty Product"
            className="w-64 h-auto md:w-80 object-contain drop-shadow-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
