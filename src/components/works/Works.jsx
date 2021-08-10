import React from "react";
import "./works.scss";
import { worksData } from "../../data";

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="slider">
        {worksData.map((data) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data.icon} alt="" />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <a href={data.link}>
                    <span>Try it</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img src="assets/arrow.png" alt="" className="arrow left" />
      <img src="assets/arrow.png" alt="" className="arrow right" />
    </div>
  );
};

export default Works;
