import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import About from '../pages/About';
import Login from '../pages/Login';

const AllRoutes = () => {
    return (      
          <Routes>           
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />         
        </Routes>  
    );
}

export default AllRoutes;