import React from "react";
import { motion } from "framer-motion";

// Animations for different sections
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="bg-[#F9F5FF] text-black py-10 px-4 md:px-20 font-sans">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"       
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#6B21A8] mb-2">
          Glow Naturally, Shine Confidently ✨
        </h1>
        <p className="text-lg text-black">
          Herbal care, made with love and tradition 💖
        </p>
      </motion.div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        {/* Image */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"         
          className="w-full lg:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1625096278556-7d7437a2cf83"
            alt="Herbal Products"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"         
          className="w-full lg:w-1/2"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#6B21A8]">
            Our Roots
          </h2>
          <p className="mb-4 leading-relaxed">
            We specialize in <strong>Herbal Personal Care Products</strong> — rooted in ancient traditions and powered by natural ingredients. Our goal is to promote safe, chemical-free beauty that's as effective as it is elegant.
          </p>
          <p className="leading-relaxed">
            With each product, we bring nature’s purity to your skin and hair — because true beauty begins with care and honesty. 🌿
          </p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"       
        className="text-center mb-16"
      >
        <h2 className="text-2xl font-bold text-[#6B21A8] mb-4">Our Offerings</h2>
        <p className="max-w-2xl mx-auto">
          We proudly manufacture a wide range of herbal products including:
        </p>
        <ul className="list-disc list-inside max-w-2xl mx-auto mt-4 text-left space-y-1">
          <li>Creams</li>
          <li>Body Lotions</li>
          <li>Herbal Shampoos</li>
          <li>Facewash & Aloevera Gel</li>
          <li>Soaps</li>
          <li>Face & Hair Serums</li>
          <li>Ayurvedic Pain Balm, Rest Rub</li>
          <li>Hair Oils</li>
          <li>And pure Herbs</li>
        </ul>
      </motion.div>

      {/* Features Section */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"       
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20"
      >
        {[
          { icon: "🌱", label: "Natural Ingredients" },
          { icon: "🧪", label: "Chemical-Free" },
          { icon: "🧖‍♀️", label: "Handcrafted Care" },
          { icon: "🇮🇳", label: "Made in India" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#6B21A8] text-2xl font-bold">{item.icon}</span>
            <p className="mt-2 font-medium text-black">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact & Founder */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
       
        className="text-center"
      >
        <h2 className="text-xl font-semibold text-[#6B21A8] mb-2">Get in Touch</h2>
        <p className="max-w-xl mx-auto mb-4">
          Have questions or want to place an order? Call us at <strong>9907368327</strong>
        </p>

        <p className="mb-4">
          🏪 <strong>Outlet Address:</strong><br />
          Dhar - Mandu Road, Nalchha, District Dhar (M.P.)
        </p>

        <p className="italic text-[#6B21A8] text-sm">
          Led with dedication and vision by <strong>Mr. Nilesh Thakriya</strong>
        </p>
      </motion.div>
    </div>
  );
};

export default About;
