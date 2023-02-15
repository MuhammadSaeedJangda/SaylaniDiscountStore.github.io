// Features
import React from 'react';
import './Features.css';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          Our
          {' '}
          <span>features</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="../feature-img-1.png" alt="" />
            <h3>fresh and organic</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
            <a href="/" className="btn_feature">Read More</a>
          </div>
          <div className="box">
            <img src="../feature-img-2.png" alt="" />
            <h3>free delivery</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
            <a href="/" className="btn_feature">Read More</a>
          </div>
          <div className="box">
            <img src="../feature-img-3.png" alt="" />
            <h3>easy payment</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
            <a href="/" className="btn_feature">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}