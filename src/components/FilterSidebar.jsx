import { useProductContext } from "../ContextData/ProductContext";
import { useEffect, useState } from "react";

const FilterSidebar = ({
  showFilter,
  setShowFilter,
  selectedCategories,
  setSelectedCategories,
  setSearchText
}) => {
  const { products } = useProductContext();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // products ke andar se unique categories nikal lo
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    setCategories(uniqueCategories);
  }, [products]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories([category]); // single select
    setSearchText(category); // update search input
    setShowFilter(false);
  };

  return (
    <div
      className={`fixed md:static top-16 left-0 z-20 h-full bg-gray-100 w-64 p-4 shadow transition-transform duration-300 transform
      ${showFilter ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="flex justify-between">
        <h2 className="font-semibold mb-4">Filters</h2>
        <button
          className="md:hidden mb-4 text-black border px-2"
          onClick={() => setShowFilter(false)}
        >
          <i className="ri-close-line text-xl"></i>
        </button>
      </div>

      {categories.map((category) => (
        <label key={category} className="block mb-2 capitalize">
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default FilterSidebar;
