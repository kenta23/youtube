import React from "react";
import Announcement from "../Components/Announcement";
import Category from "../Components/Category";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Product from "../Components/ProductComponent";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import App from "../App";
import ProductList from "./ProductList";
import Cart from "./Cart";

function Homepage() {
    return(
        <div>
           <Announcement />
           <Navbar />

           <Routes>
               <Route path="sign-in" element={<Login />}/>
               <Route path="sign-up" element={<Signup />}/> 
               <Route path='/' element={<App />}/>        
               <Route path="product-list" element={<ProductList />}/>   
               <Route path="add-to-cart" element={<Cart />}/>   
          </Routes>
        </div>
    )
}

export default Homepage