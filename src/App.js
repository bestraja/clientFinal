import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { setDataProduct } from "./redux/productSlide";
function App() {
 
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/product/listproduct");
        dispatch(setDataProduct(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);
  return (
    < >
      <Toaster />
      <div>
        <Header />
        
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
     
      
    </>
  );
}

export default App;
