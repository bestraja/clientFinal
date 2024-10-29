import React from 'react';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Login from './pages/login';
import Newproduct from './pages/Newproduct';
import Signup from './pages/Signup';
import { store } from "./redux/index"
import { Provider } from "react-redux";
import Card from './pages/Card';
import Admin from './pages/Admin';
import FormulaireEdite from './components/FormulaireEdite';
import Succes from './pages/Succes';
import Cancel from './pages/Cancel';
import Welcome from './pages/welcom';




const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    
    <Route index element={<Welcome />} />
  <Route path="home" element={<Home/>} />
     <Route path="menu/:filterby" element={<Menu/>} />
   <Route path="about" element={<About/>} />
   <Route path="login" element={<Login/>} />
   <Route path="newproduct" element={<Newproduct/>} />
   <Route path="signup" element={<Signup />} />
   <Route path="card" element={<Card/>} />
   <Route path="admin" element={<Admin/>} />
   <Route path="edit/:id" element={<FormulaireEdite/>} />
   <Route path="success" element={<Succes/>} />
   <Route path="cancel" element={<Cancel/>}/>
  
  
  </Route>
));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
