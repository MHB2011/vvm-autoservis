import React from "react";
import Slider from "../Other/Slider";

const About = () => {
  return (
    <div className="about">
      <div className="row m-0">
        <div className="col-md ml-4 mt-4">
          <h1 className="text-animated">O nama</h1>
          <p>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quia voluptatem, fuga ratione laudantium corrupti
              veniam rem nobis assumenda quod amet cumque qui laborum repellat
              enim ipsam iure accusantium beatae.
            </strong>
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quae quasi necessitatibus cumque, et id iusto aut veritatis vel
            reiciendis nulla. Commodi magni porro non vero id voluptatum
            sapiente. Culpa, asperiores tenetur. Necessitatibus obcaecati enim
            totam quam debitis sint cum incidunt hic, fuga tempore dolorem,
            quidem ipsam aspernatur itaque reprehenderit?
          </p>
        </div>
        <div
          className="col-md p-0 m-0 d-flex align-items-center"
          id="carousel-col"
        >
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default About;
