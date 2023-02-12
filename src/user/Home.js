import React from "react";
import "./Home.css";
import Navbar from "../nav/Navbar";
import { Button } from "antd";
import Features from "../features/Features";
import Products from "../product/Product";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <img src="../Banner.png" />
      <h2 className="Main_text">Fresh & Organic Products</h2>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <div>
        <button className="shopnow">Shop Now</button>
      </div>
      <Features />
      <Products />
      <Categories />
      <Footer/>
    </div>
  );
};

export default Home;
