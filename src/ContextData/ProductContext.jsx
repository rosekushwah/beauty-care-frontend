import { createContext, useContext, useState } from "react";
import {productsData} from "../data/ProductsData"; 

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData); // optional for search

  return (
    <ProductContext.Provider value={{ products, setProducts, filteredProducts, setFilteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext  = () => useContext(ProductContext);
