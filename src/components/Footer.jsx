import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f3ece6] text-[#5a4b41] pt-10 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Beauty Care 🌿</h2>
          <p className="text-sm text-[#7e6659]">
            Clean. Gentle. Effective. At Beauty Care, we believe in skincare rooted in nature and backed by love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Return Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-[#d16c6c]"><i className="ri-instagram-line text-xl"></i></a>
            <a href="#" className="hover:text-[#d16c6c]"><i className="ri-facebook-box-line text-xl"></i></a>
            <a href="#" className="hover:text-[#d16c6c]"><i className="ri-twitter-x-line text-xl"></i></a>
            <a href="#" className="hover:text-[#d16c6c]"><i className="ri-youtube-line text-xl"></i></a>
          </div>
          <p className="text-sm mb-2">Subscribe to our newsletter 🌸</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-lg border border-[#d5c7bd] text-sm w-full"
            />
            <button
              type="submit"
              className="bg-[#5a4b41] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#7e6659]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-[#d5c7bd] pt-4 text-center text-sm text-[#a89d94]">
        © {new Date().getFullYear()} Beauty Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
