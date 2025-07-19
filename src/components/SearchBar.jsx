import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ products, showFilter, setShowFilter, text, setText }) => {
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (value.trim()) {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    
    if (text.trim()) {
      navigate(`/products?search=${text}`);
    } else {
      navigate("/products");
    }
    setSuggestions([]);
  };

  const handleSuggestionClick = (name) => {
    setText(name);
    navigate(`/products?search=${name}`);
    setSuggestions([]);
  };

  return (
    <div className="static top-16 left-0 z-20 w-full p-4 shadow flex md:flex-row items-center md:justify-center bg-white gap-2 md:gap-4">
      <div className="relative w-full md:w-auto flex-1 max-w-md">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={(e) => {
            if(e.key === "Enter"){
              handleSearch();
            }
          }}
          placeholder="Search products..."
          className="border rounded px-4 py-2 w-full"
        />
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border mt-1 max-h-48 overflow-y-auto rounded shadow w-full z-50">
            {suggestions.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSuggestionClick(item.name)}
                className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleSearch}
          className="border py-1 px-2 rounded text-2xl  hover:bg-gray-800"
        >
          <i className="ri-search-line"></i>
        </button>

        <button
          onClick={() => setShowFilter(!showFilter)}
          className="border p-1 rounded text-2xl md:hidden"
        >
          {showFilter ? <i className="ri-filter-off-line mr-1"></i> : <i className="ri-filter-line mr-1"></i>}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
