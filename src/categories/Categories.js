// Categories
import React from "react";
import "./Categories.css";

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        Products <span>Categories</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="../cat-1.png" alt="" />
          <h3>Vegetables</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">
            Shop Now
          </button>
        </div>

        <div className="box">
          <img src="../cat-2.png" alt="" />
          <h3>Fresh Fruits</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">
            Shop Now
          </button>
        </div>

        <div className="box">
          <img src="../cat-3.png" alt="" />
          <h3>Dairy Products</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">
            Shop Now
          </button>
        </div>

        <div className="box">
          <img src="../cat-4.png" alt="" />
          <h3>Fresh Meat</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
