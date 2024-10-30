import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { setDataProduct } from "./redux/productSlide";
import Footer from "./components/Footer";
function App() {
 
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/product/listproduct`);
        dispatch(setDataProduct(response.data));
      } catch (error) {
       
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
        <Footer />
      </div>
     
      
    </>
  );
}

export default App;
