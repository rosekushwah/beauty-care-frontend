import { useState, useEffect } from 'react';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import { ProductProvider } from './ContextData/ProductContext';
import Loader from './components/Loader'; // 👈 make sure path is correct
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // loader visible for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ProductProvider>
          <Navbar />
          <div className="pt-14">
            <AllRoutes />
          </div>
          <BackToTop/>
        </ProductProvider>
      )}
    </>
  );
}

export default App;
