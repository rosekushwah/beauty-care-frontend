import { useEffect, useState } from "react";
import bowl from "../assets/images/bowl.png";
import ingredient1 from "../assets/images/ingredient1.png";
import ingredient2 from "../assets/images/ingredient2.png";
import ingredient3 from "../assets/images/ingredient3.png";
import ingredient4 from "../assets/images/ingredient4.png";
import ingredient5 from "../assets/images/ingredient5.png";
import ingredient6 from "../assets/images/ingredient6.png";
import facewash from "../assets/images/fashwash.png";
import shampoo1 from "../assets/images/shampoo1.png";
import facewash3 from "../assets/images/fashwah3.png";
import { motion } from "motion/react";



const AnimatedBowl = () => {
  const [step, setStep] = useState(0);

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 400) setStep(0);
      else if (scrollY < 800) setStep(1);       // bowl moving
      else if (scrollY < 1000) setStep(2);      // ingredient 1
      else if (scrollY < 1100) setStep(3);      // ingredient 2
      else if (scrollY < 1200) setStep(4);      // ingredient 3
      else if (scrollY < 1300) setStep(5);      // ingredient 4
      else if (scrollY < 1400) setStep(6);      // ingredient 5
      else if (scrollY < 1500) setStep(7);      // ingredient 6
      else setStep(8);                          // final facewash
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative w-full bg-[#fefcf8] overflow-hidden px-8  xl:px-8">
        {/* Heading */}
        <div className="pt-10 pb-4 px-8">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3d3d3d]">
            Crafted by Nature, Perfected for You 🌿
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-2 text-[#555]">
            Watch nature’s finest ingredients blend together in perfect harmony — creating the purest facewash, straight from the bowl of goodness. ✨
          </p>
        </div>



        {/* Ingredient 1 */}
        <div className="w-full  flex items-center justify-items-start">
          <motion.img
            src={ingredient1}
            alt="ingredient1"
            className="w-25 sm:w-40 md:w-50"
            initial={{ opacity: 1, y: 0, x: 0 }}
            animate={{
              opacity: step <= 1 ? 1 : 0,
              y: step >= 1 ? (isMobile ? 50 : 300) : -100,
              x: step >= 1 ? (isMobile ? 100 : 630) : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Ingredient 2 */}
        <div className="w-full flex items-center justify-end">
          <motion.img
            src={ingredient2}
            alt="ingredient1"
            className="w-25 sm:w-40 md:w-50"
            animate={{
              opacity: step <= 2 ? 1 : 0,
              y: step >= 2 ? (isMobile ? 50 : 250) : -100,
              x: step >= 2 ? (isMobile ? -100 : -600) : 0,
            }}
            transition={{ duration: 0.8 }}
          />

        </div>

        {/* Ingredient 3 */}
        <div className="w-full flex items-center">
          <motion.img
            src={ingredient3}
            alt="ingredient1"
            className="w-23 sm:w-40 md:w-50"
            animate={{
              opacity: step <= 3 ? 1 : 0,
              y: step >= 3 ? (isMobile ? 50 : 250) : -100,
              x: step >= 3 ? (isMobile ? 100 : 600) : 0,
            }}
            transition={{ duration: 0.8 }}
          />

        </div>

        {/* Ingredient 4 */}
        <div className="w-full flex items-center justify-end">
          <motion.img
            src={ingredient4}
            alt="ingredient1"
            className="w-25 sm:w-40 md:w-50"
            animate={{
              opacity: step <= 4 ? 1 : 0,
              y: step >= 4 ? (isMobile ? 50 : 250) : -100,
              x: step >= 4 ? (isMobile ? -100 : -600) : 0,
            }}
            transition={{ duration: 0.8 }}
          />

        </div>

        {/* Ingredient 5 */}
        <div className="w-full flex items-center">
          <motion.img
            src={ingredient5}
            alt="ingredient1"
            className="w-25 sm:w-40 md:w-50"
            animate={{
              opacity: step <= 5 ? 1 : 0,
              y: step >= 5 ? (isMobile ? 50 : 250) : -100,
              x: step >= 5 ? (isMobile ? 100 : 600) : 0,
            }}
            transition={{ duration: 0.8 }}
          />

        </div>

        {/* Ingredient 6 */}
        <div className="w-full flex items-center justify-end">
          <motion.img
            src={ingredient6}
            alt="ingredient1"
            className="w-25 sm:w-40 md:w-50"
            animate={{
              opacity: step <= 6 ? 1 : 0,
              y: step >= 6 ? (isMobile ? 100 : 250) : -100,
              x: step >= 6 ? (isMobile ? -100 : -600) : 0,
            }}
            transition={{ duration: 0.8 }}
          />

        </div>
        <div className="w-full flex items-center justify-center ">
          <motion.img
            src={bowl}
            alt="bowl"
            className="w-50 sm:w-50 md:w-90"
            animate={{
              y: step >= 7 ? (isMobile ? 10 : 50) : 0,
              rotate: step >= 7 ? 10 : 0, // X-axis 3D rotation
            }}
            transition={{ duration: 1 }}
          />
        </div>
  
        <section className="w-full px-6 md:px-16 py-12 bg-[#fefcf8]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            What People Love The Most ✨
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center transition hover:scale-105">
              <img
                src={shampoo1}
                alt="Aloe Facewash"
                className="w-32 sm:w-40 md:w-40  object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Herbal Shampoo</h3>
              <p className="text-gray-600">
                Gently cleanses scalp, strengthens roots & adds natural shine 🌿
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6 text-center transition hover:scale-105">
              {step >= 8 && (
                <motion.img
                  src={facewash}
                  alt="Aloe Facewash"
                  className="w-32 sm:w-40 md:w-40 mx-auto mb-4 rounded-full"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: step >= 7 ? (isMobile ? -110 : -250) : 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1.3,
                    rotate: 360,
                    y: step >= 7 ? (isMobile ? 10 : 30) : 0,
                  }}
                  transition={{ duration: 1.2 }}
                />
              )}
              <h3 className="text-xl font-semibold mb-2">Neem Facewash</h3>
              <p className="text-gray-600">
                Controls pimples, fades marks & reveals clear, glowing skin ✨
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6 text-center transition hover:scale-105">
              <img
                src={facewash3}
                alt="Glow Lotion"
                className="w-32 sm:w-40 md:w-40  object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">Glow Lotion</h3>
              <p className="text-gray-600">
                Intense hydration that brightens and softens your skin all day 💧
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnimatedBowl;
