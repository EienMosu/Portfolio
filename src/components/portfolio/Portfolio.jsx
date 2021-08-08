import React, { useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "python",
      title: "Python",
    },
    {
      id: "javascript",
      title: "Javascript",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/963/324/861/persona-4-persona-3-persona-series-persona-5-wallpaper-preview.jpg"
            alt=""
          />
          <h3>Github</h3>
        </div>
        <div className="item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/963/324/861/persona-4-persona-3-persona-series-persona-5-wallpaper-preview.jpg"
            alt=""
          />
          <h3>Github</h3>
        </div>
        <div className="item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/963/324/861/persona-4-persona-3-persona-series-persona-5-wallpaper-preview.jpg"
            alt=""
          />
          <h3>Github</h3>
        </div>
        <div className="item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/963/324/861/persona-4-persona-3-persona-series-persona-5-wallpaper-preview.jpg"
            alt=""
          />
          <h3>Github</h3>
        </div>
        <div className="item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/963/324/861/persona-4-persona-3-persona-series-persona-5-wallpaper-preview.jpg"
            alt=""
          />
          <h3>Github</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
