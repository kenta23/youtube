import Category from "./Components/Category";
import React from "react";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Signup from "./pages/Signup";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import Product from "./pages/Product";
import Announcement from "./Components/Announcement";
import ProductContainer from "./Components/ProductComponent";
import CategoryItem from "./Components/CategoryItem";



const App = () => {
  return (
  <div>
     <Slider />
     <Category />
     <Newsletter />
     <Footer />
  </div> 
  )
};

export default App;