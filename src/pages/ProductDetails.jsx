import { Link, useLocation, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useProductContext } from "../ContextData/ProductContext";
import { useEffect, useState } from "react";
import CustomDropdown from "../components/CustomDropdown";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { products } = useProductContext();

  const product = products.find((item) => item.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState(null);

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const [searchText, setSearchText] = useState(searchQuery);

  useEffect(() => {
    if (product && product.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="p-6 text-center text-xl font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <div className="relative">
      <SearchBar
        products={products}
        text={searchText}
        setText={setSearchText}
      />

      <div className="p-4 md:px-8 flex flex-col lg:flex-row gap-6 lg:items-start">
        {/* Image + Variant Section */}
        <div className="lg:w-1/2 w-full flex flex-col items-center gap-4 ">
        <div className="max-w-xs ">
          {selectedVariant && (
            <div className="w-full h-[450px] overflow-hidden rounded shadow-md">
              <img
                src={selectedVariant.image}
                alt="variant"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}

          <CustomDropdown
            variants={product.variants}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />

        </div>
        </div>
      

        {/* Details Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>



          <p className="text-gray-700 text-base mt-2 leading-relaxed">
            {product.description}
          </p>

          {selectedVariant && (
            <p className="text-2xl font-semibold text-black mt-4">
              ₹ {selectedVariant.price}
            </p>
          )}
          <p className="text-yellow-500 font-semibold">⭐ {product.rating}</p>

          <button className="mt-6 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>


      {/* Related Products */}
      <div className="mt-12 p-4 md:p-8">
        <h3 className="text-xl font-bold mb-4">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-6">
          {products
            .filter(
              (p) => p.category === product.category && p.id !== product.id
            )
            .map((related) => (
              <Link
                to={`/products/${related.id}`}
                key={related.id}
                className="border text-center rounded-md shadow-sm hover:shadow-md transition block p-3"
              >
                <img
                  src={related.variants[0].image}
                  alt={related.name}
                  className="h-50 w-full md:h-50 xl:h-70 object-cover rounded transition-transform duration-300 hover:scale-105"
                />
                <h4 className="font-semibold text-sm md:text-base">
                  {related.name}
                </h4>
                <p className="text-gray-600 text-sm">₹ {related.variants[0].price}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
