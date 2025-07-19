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

  // 2. Only search based on that query:
// const searchedProducts = searchQuery
// ? products.filter((p) =>
//     p.name.toLowerCase().includes(searchQuery)
//   )
// : products;

// 3. Apply category filter if needed:
// const filteredProducts =
// selectedCategories.length > 0
//   ? searchedProducts.filter((p) =>
//       selectedCategories.includes(p.category)
//     )
//   : searchedProducts;


  // // 1. First search filter
  const searchedProducts = searchText.trim()
    ? products.filter((p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase())
    )
    : products;

  // // 2. Category filter (optional since now category will also be in searchText)
  const filteredProducts = searchedProducts;




  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="relative">
      <SearchBar
      products={products}
      showFilter={showFilter}
      setShowFilter={setShowFilter}
      text={searchText}
      setText={setSearchText}
       
      />

      <div className="flex">
        <FilterSidebar          
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}        
            setSearchText={setSearchText}     
        />

        <div className="flex-1 p-4 ml-0 md:ml-64">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedProducts.map((product) => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="border rounded p-4 shadow hover:shadow-lg transition"
              >
                <h3 className="font-bold mb-2">{product.category}</h3>
                <p className="text-sm text-gray-600">{product.name}</p>
              </Link>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-2 z-50 flex justify-center">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              ⬅ Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;


