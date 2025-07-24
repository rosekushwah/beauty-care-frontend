import React from "react";
import { motion } from "framer-motion";
import content1 from "../assets/images/Catelog1.png";
import content2 from "../assets/images/Catelog2.png";
import content3 from "../assets/images/content4.png";

const productData = [
  {
    img: content1,
    title: "Herbal Face Wash",
    description:
      "Gently cleanses the skin, removes impurities and controls excess oil while maintaining your skin's natural glow.",
    points: [
      "Enriched with Neem & Aloe Vera",
      "Prevents pimples and acne",
      "Suitable for all skin types"
    ]
  },
  {
    img: content2,
    title: "Ayurvedic Shampoo",
    description:
      "Strengthens hair from the roots, reduces hair fall and adds a healthy shine with natural herbs.",
    points: [
      "No Sulphates or Parabens",
      "Boosts hair growth",
      "Infused with Shikakai & Amla"
    ]
  },
  {
    img: content3,
    title: "Moisturizing Lotion",
    description:
      "Lightweight lotion that hydrates your skin deeply, leaving it soft and nourished all day long.",
    points: [
      "Non-greasy formula",
      "Absorbs quickly",
      "Ideal for dry to normal skin"
    ]
  }
];


const Galery = () => {
  return (
    <section className="w-full px-6 space-y-24 md:px-20 xl:px-40">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#3e2f27]"
        >
          🌸 Featured Glow Essentials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#7e6659] text-lg mt-2"
        >
          Natural care, visible results — feel the difference from first use ✨
        </motion.p>
      </div>

      {productData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse md:flex-row items-center md:items-center gap-8 md:gap-20 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image with Decorative Background */}
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}             
              className="flex-1 relative flex items-center justify-center"
            >
              <div className="absolute w-64 h-64 md:w-80 md:h-80 xl:h-80 bg-[#fff6ec] rounded-full -z-10"></div>
              <div className=" p-6 rounded-2xl w-64 md:w-80">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}        
            className="w-full md:w-1/2 text-[#4b3b32]"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              {item.title}
            </h3>
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              {item.description}
            </p>
            <ul className="list-disc list-inside space-y-1">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Galery;