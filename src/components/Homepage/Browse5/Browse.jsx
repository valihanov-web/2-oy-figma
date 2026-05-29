import React from "react";
import "./Browse.css";

import img11 from "../../../assets/img11.png";
import img12 from "../../../assets/img12.png";
import img13 from "../../../assets/img13.png";
import img14 from "../../../assets/img14.png";

const Browse = () => {
  return (
    <section className="style-section">
      <div className="container">
        <h2 className="title">BROWSE BY DRESS STYLE</h2>

        <div className="grid">
          <div className="card small">
            <span>Casual</span>
            <img src={img11} alt="casual" />
          </div>

          <div className="card small">
            <span>Formal</span>
            <img src={img12} alt="formal" />
          </div>

          <div className="card large">
            <span>Party</span>
            <img src={img13} alt="party" />
          </div>

          <div className="card large">
            <span>Gym</span>
            <img src={img14} alt="gym" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;