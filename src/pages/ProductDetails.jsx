import { Link, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useProductContext } from "../ContextData/ProductContext";
import ReactImageMagnify from "react-image-magnify";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProductContext();
  const product = products.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="p-6 text-center text-xl font-semibold">Product not found</div>;
  }

  return (
    <div className="relative">
      <SearchBar products={products} />

      <div className="p-4 md:p-8 flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md">
            <ReactImageMagnify
              {...{
                smallImage: {
                  isFluidWidth: true,
                  src: product.image,
                  alt: product.name,
                },
                largeImage: {
                  src: product.image,
                  width: 1200,
                  height: 1600,
                },
                enlargedImageContainerStyle: { zIndex: 10 },
              }}
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
      <div className="mt-12 px-4 md:px-8">
        <h3 className="text-xl font-bold mb-4">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .map((related) => (
              <Link
                to={`/product/${related.id}`}
                key={related.id}
                className="border rounded-md shadow-sm hover:shadow-md transition block p-3"
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="mb-2 w-full h-40 object-cover rounded"
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
