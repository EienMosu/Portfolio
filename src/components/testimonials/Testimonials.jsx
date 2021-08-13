import React from "react";
import "./testimonials.scss";
import { testimonialsData } from "../../data";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialsData.map((data) => (
          <div className={data.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/arrowleft.png" alt="" className="left" />
              <img className="user" src={data.img} alt="" />
              <img className="right" src={data.icon} alt="" />
            </div>
            <div className="center">{data.desc}</div>
            <div className="bottom">
              <h3>{data.name}</h3>
              <h4>{data.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
