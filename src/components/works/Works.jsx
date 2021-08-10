import React from "react";
import "./works.scss";

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/react.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  accusamus recusandae magni quis debitis magnam error possimus
                  voluptas ab illum cumque beatae excepturi illo earum eius
                  commodi dolores autem sint.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://www.filepicker.io/api/file/tjceKBtBSDOrAWAEx2EC" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" alt="" className="arrow left"/>
      <img src="assets/arrow.png" alt="" className="arrow right"/>
    </div>
  );
};

export default Works;
