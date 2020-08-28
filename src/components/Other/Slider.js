import React from "react";

import img1 from "../../slider-images/img1.jpg";
import img2 from "../../slider-images/img2.jpg";
import img3 from "../../slider-images/img3.jpg";

const Slider = () => {
  return (
    <div id="slider1" className="carousel slide mr-4 my-4" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item">
          <img className="d-block img-fluid" src={img1} alt="car"></img>
        </div>
        <div className="carousel-item active">
          <img className="d-block img-fluid" src={img2} alt="car2"></img>
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src={img3} alt="car3"></img>
        </div>
      </div>

      <a href="#slider1" className="carousel-control-prev" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>

      <a href="#slider1" className="carousel-control-next" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
};

export default Slider;
