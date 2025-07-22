import React from "react";
import { motion } from "framer-motion";

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
    <div className="bg-[#f3ece6]  py-10 px-4 md:px-20 font-sans">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#5a4b41] mb-2">
          Glow Naturally, Shine Confidently ✨
        </h1>
        <p className="text-lg ">
          Herbal care, made with love and tradition 💖
        </p>
      </motion.div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
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

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/2"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#5a4b41]">
            Our Roots
          </h2>
          <p className="mb-4 leading-relaxed">
            We specialize in <strong>Herbal Personal Care Products</strong> — rooted in ancient traditions and powered by natural ingredients.
          </p>
          <p className="leading-relaxed">
            With each product, we bring nature’s purity to your skin and hair — because true beauty begins with care and honesty. 🌿
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="text-center mb-16"
      >
        <h2 className="text-2xl font-bold text-[#5a4b41] mb-4">Our Offerings</h2>
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

      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20"
      >
        {["🌱 Natural Ingredients", "🧪 Chemical-Free", "🧖‍♀️ Handcrafted Care", "🇮🇳 Made in India"].map((text, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#5a4b41] text-xl font-medium block">{text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Founder Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="py-10 px-4 md:px-16 rounded-xl shadow-md bg-[#ebe3dd]"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-[#5a4b41]">Meet the Founder</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="/founder-image.jpg" alt="Founder" className="rounded-xl shadow-xl" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Nilesh Thakriya</h3>
            <p className="text-gray-600">
              Nilesh, a passionate creator from Betma — a small town near Indore — always believed in the healing power of nature. With a deep-rooted love for skincare and a dream to bring chemical-free beauty solutions to Indian households, he started this handmade skincare brand in 2022. His journey wasn’t easy — from experimenting with natural ingredients in his kitchen to building a trusted local community of buyers, it was driven purely by dedication and honesty. Today, the brand reflects his belief in slow, mindful beauty and making self-care a ritual, not a luxury.
            </p>
          </div>
        </div>

      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#5a4b41]">Our Journey</h2>
        <div className="relative border-l-4 border-[f3ece6] pl-6 space-y-6">
          {["2023: The idea was born — to create a clean beauty brand for every skin type.", "2024: We launched our first handmade facewash and reached 1000+ happy users.", "2025: Expanding into haircare and bodycare with love from across India 💗"].map((entry, index) => (
            <div key={index}>
              <p className="font-semibold text-gray-800">{entry}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#5a4b41]">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            quote: "My skin feels fresh and soft after using their products. Totally worth it!",
            author: "– Anjali, Delhi",
          }, {
            quote: "Affordable, natural, and effective. The best skincare I’ve ever used.",
            author: "– Priya, Mumbai",
          }].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md p-6 rounded-xl"
              whileHover={{ scale: 1.03 }}
            >
              <p className="italic">"{t.quote}"</p>
              <p className="text-right font-semibold mt-2">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        className="text-center mt-16"
      >
        <h2 className="text-xl font-semibold text-[#5a4b41] mb-2">Get in Touch</h2>
        <p className="max-w-xl mx-auto mb-4">
          Have questions or want to place an order? Call us at <strong>9907368327</strong>
        </p>
        <p className="mb-4">
          🏪 <strong>Outlet Address:</strong><br /> Dhar - Mandu Road, Nalchha, District Dhar (M.P.)
        </p>
        <p className="italic text-[a89d94] text-sm">
          Led with dedication and vision by <strong>Mr. Nilesh Thakriya</strong>
        </p>
      </motion.div>
    </div>
  );
};

export default About;
