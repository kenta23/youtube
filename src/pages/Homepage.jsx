import React from "react";
import Announcement from "../Components/Announcement";
import Category from "../Components/Category";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Product from "../Components/Product";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";


function Homepage() {
    return(
        <div>
           <Announcement />
           <Navbar />
           <Slider />
           <Category />
           <Product />
           <Newsletter />
           <Footer />
        </div>
    )
}

export default Homepage