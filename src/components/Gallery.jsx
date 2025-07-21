import React from "react";
import { motion } from "framer-motion";
import product1 from "../assets/images/fashwash.png";
import product2 from "../assets/images/fashwah3.png";
import product3 from "../assets/images/shampoo1.png";

const productData = [
  {
    img: product1,
    title: "Refreshing Face Wash",
    description:
      "Gently cleanses your skin while maintaining its natural moisture. Ideal for everyday use and suitable for all skin types.",
    points: [
      "Infused with Aloe Vera",
      "Paraben-Free Formula",
      "Dermatologically Tested"
    ]
  },
  {
    img: product2,
    title: "Hydrating Gel",
    description:
      "Lightweight and deeply hydrating gel that gives your skin a dewy glow without any stickiness.",
    points: [
      "Non-comedogenic",
      "Quick Absorption",
      "Perfect for humid weather"
    ]
  },
  {
    img: product3,
    title: "Herbal Shampoo",
    description:
      "A perfect blend of herbs that strengthens your hair from the roots and adds natural shine.",
    points: ["No Sulphates", "Prevents Hair Fall", "Enriched with Neem & Amla"]
  }
];

const Galery = () => {
  return (
    <section className="w-full px-6 py-20 bg-[#fff9f4] space-y-24 md:px-20 xl:px-40">
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
          className={`flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-20 ${
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
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-[#fff6ec] rounded-full -z-10"></div>
              <div className="bg-[#fefefe] p-6 rounded-2xl shadow-lg w-64 md:w-80">
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