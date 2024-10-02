import React from 'react';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/login';
import Newproduct from './pages/Newproduct';
import Signout from './pages/Signout';





const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
  <Route index element={<Home/>} />
     <Route path="menu" element={<Menu/>} />
   <Route path="about" element={<About/>} />
   <Route path="contact" element={<Contact/>} />
   <Route path="login" element={<Login/>} />
   <Route path="newproduct" element={<Newproduct/>} />
   <Route path ="signout" element={<Signout/>}/>
  </Route>
));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
