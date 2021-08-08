import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      cursorChar: "_",
      backDelay: 1500,
      strings: ["MERN Stack", "React", "Python", "JavaScript"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/persona5.png" alt="persona" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Ozkan Selcuk</h1>
          <h3>
            <span ref={textRef}></span> Developer
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrowDown.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
