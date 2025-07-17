import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
        <Navbar />
          <div className="pt-14">
        <AllRoutes />
      </div>

    </>
  )
}

export default App