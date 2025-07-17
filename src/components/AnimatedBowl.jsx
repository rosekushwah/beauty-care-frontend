import { useEffect, useRef, useState } from "react";
import bowl from "../assets/images/bowl.png";
import ingredient1 from "../assets/images/ingredient1.png";
import ingredient2 from "../assets/images/ingredient2.png";
import ingredient3 from "../assets/images/ingredient3.png";
import ingredient4 from "../assets/images/ingredient4.png";
import ingredient5 from "../assets/images/ingredient5.png";
import ingredient6 from "../assets/images/ingredient6.png";
import facewash from "../assets/images/fashwash.png";
import { motion } from "framer-motion";

const ingredients = [
  { src: ingredient1, direction: "left" },
  { src: ingredient2, direction: "right" },
  { src: ingredient3, direction: "left" },
  { src: ingredient4, direction: "right" },
  { src: ingredient5, direction: "left" },
  { src: ingredient6, direction: "right" },
];

const AnimatedBowl = () => {
  const [step, setStep] = useState(0);
  const bowlRef = useRef(null);
 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 300) setStep(0);
      else if (scrollY >= 400 && scrollY < 600) setStep(1);
      else if (scrollY >= 600 && scrollY < 1000) setStep(2);
      else setStep(3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-[250vh] bg-[#fefcf8] overflow-hidden">
      <div className="pt-10 pb-4">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-[#3d3d3d]">
          Crafted by Nature, Perfected for You 🌿
        </h1>
        <p className="text-center text-lg md:text-xl px-4 max-w-3xl mx-auto mt-2 text-[#555]">
          Watch nature’s finest ingredients blend together in perfect harmony — creating the purest facewash, straight from the bowl of goodness. ✨
        </p>
      </div>

      {/* Bowl */}
      <motion.img
        src={bowl}
        alt="bowl"
        className="w-60 md:w-80 absolute left-1/2 -translate-x-1/2 top-[22vh] z-20"
        animate={{
          y: step >= 1 ? 400 : 0,
          rotate: step >= 1 ? 10 : 0,
        }}
        transition={{ duration: 4 }}
        ref={bowlRef}
      />
      {ingredients.map((item, idx) => (
        <motion.img
          key={idx}
          src={item.src}
          alt={`ingredient-${idx}`}
          className={`w-16 h-16 md:w-20 md:h-20 object-contain absolute z-10 ${item.direction === "left" ? "left-10" : "right-10"
            }`}
          style={{
            top: `${20 + idx * 8}vh`,
          }}
          initial={{ opacity: 1, y: 0, x: 0 }}
          animate={{
            opacity: step === 3 ? 0 : 1, // 👈 ingredient disappear on step 3
            y: step > 1 ? 250 : -100,
            x:
              step > 1
                ? item.direction === "left"
                  ? 700
                  : -650
                : 0,
          }}
          transition={{
            duration: 1,
            delay: step > 1 ? idx * 0.3 : 0,
          }}
        />
      ))}

      {/* Facewash appears */}
      {step >= 3 && (
        <motion.img
          src={facewash}
          alt="facewash"
          className="w-24 md:w-36 absolute left-1/2 -translate-x-1/2 top-[85vh] z-20"
          initial={{ opacity: 0, scale: 0.5, top: "80vh" }}
          animate={{ opacity: 1, scale: 2, top: "120vh", rotate: 360 }}
          transition={{ duration: 1.5 }}
        />
      )}

      {/* Final Products Section */}
      {step >= 3 && (
        <div className="absolute top-[150vh] w-full flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-bold">Our Natural Products 🌿</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center">Product 1</div>
            <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center">Product 2</div>
            <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center">Product 3</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedBowl;
