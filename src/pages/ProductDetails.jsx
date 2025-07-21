import { Link, useLocation, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useProductContext } from "../ContextData/ProductContext";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProductContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const [searchText, setSearchText] = useState(searchQuery);
  const product = products.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="p-6 text-center text-xl font-semibold">Product not found</div>;
  }

  return (
    <div className="relative">
      <SearchBar
        products={products}
        text={searchText}
        setText={setSearchText}
      />

      <div className="p-4 md:px-8 flex flex-col lg:flex-row gap-4">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-sm overflow-hidden rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="mt-4 text-lg font-semibold text-black">₹ {product.price}</p>
          <button className="mt-6 bg-black hover:bg-gray-900 text-white px-6 py-2 rounded transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12 p-4 md:p-8">
        <h3 className="text-xl font-bold mb-4">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-6">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .map((related) => (
              <Link
                to={`/products/${related.id}`}
                key={related.id}
                className="border text-center rounded-md shadow-sm hover:shadow-md transition block p-3"
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="h-40 w-full md:h-50 xl:h-60 object-cover rounded transition-transform duration-300 hover:scale-105"
                />
                <h4 className="font-semibold text-sm md:text-base">{related.name}</h4>
                <p className="text-gray-600 text-sm">₹ {related.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
