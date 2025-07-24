import { useState } from "react";

const CustomDropdown = ({ variants, selectedVariant, setSelectedVariant }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (variant) => {
    setSelectedVariant(variant);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center border border-gray-300 p-2 rounded shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-black"
      >
        <span>{selectedVariant?.size || "Select Size"}</span>
        <i
  className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
    isOpen ? "rotate-180" : ""
  } pointer-events-none`} 
></i>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-48 overflow-auto">
          {variants.map((variant) => (
           <li
           key={variant.size}
           onClick={() => handleSelect(variant)}
           className={`p-2 cursor-pointer truncate hover:bg-gray-100 ${
             selectedVariant?.size === variant.size ? "bg-gray-200 font-semibold" : ""
           }`}
         >
           {variant.size}
         </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
