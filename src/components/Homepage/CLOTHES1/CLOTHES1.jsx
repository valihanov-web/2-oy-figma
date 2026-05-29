import React from "react";
import "./CLOTHES1.css";

import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";

const CLOTHES1 = () => {
  return (
    <section className="clothes">
      <div className="clothes-container">
        <div className="clothes-left">
          <h1>
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button>Shop Now</button>

          <div className="stats">
            <div className="stat">
              <h2>200+</h2>
              <span>International Brands</span>
            </div>

            <div className="line"></div>

            <div className="stat">
              <h2>2,000+</h2>
              <span>High-Quality Products</span>
            </div>

            <div className="line"></div>

            <div className="stat">
              <h2>30,000+</h2>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="clothes-right">
          <img src={img2} alt="" className="star star-top" />

          <img src={img2} alt="" className="star star-middle" />

          <img src={img1} alt="" className="model" />
        </div>
      </div>
    </section>
  );
};

export default CLOTHES1;
