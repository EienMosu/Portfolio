import React, { useState, useEffect } from "react";

import "./portfolio.scss";

import PortfolioList from "../portfolioList/PortfolioList";

import {
  javascriptPortfolio,
  pythonPortfolio,
  reactPortfolio,
  featuredPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

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

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "python":
        setData(pythonPortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (
          <a href={data.link}>
            <div className="item">
              <img src={data.img} alt="" />
              <h3>{data.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
