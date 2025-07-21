import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import { useProductContext } from "../ContextData/ProductContext";
import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const { products } = useProductContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchText, setSearchText] = useState(searchQuery);
  const [showFilter, setShowFilter] = useState(false);

  // Search logic
  const searchedProducts = searchText.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : products;

  // Optional: category filter (currently not used)
  const filteredProducts = searchedProducts;

  return (
    <div className="relative">
      <SearchBar
        products={products}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        text={searchText}
        setText={setSearchText}
      />

      <div className="flex gap-20">
        <FilterSidebar
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          setSearchText={setSearchText}
        />

        <div className="flex-1 p-4 ml-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="border rounded p-4 shadow hover:shadow-lg transition hover:scale-105"
              >
                <img src={product.image} alt="product img" className="bg-gray-100" />
                <p className="text-sm font-medium text-center text-gray-600">
                  {product.name}
                </p>
                <p className="text-gray-600 text-sm">₹ {product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
