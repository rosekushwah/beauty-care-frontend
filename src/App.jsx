import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import { ProductProvider } from './ContextData/ProductContext';

function App() {
  return (
    <>
      <ProductProvider>
        <Navbar />
        <div className="pt-14">
          <AllRoutes />
        </div>
      </ProductProvider>
    </>
  )
}

export default App