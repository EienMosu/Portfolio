import React from "react";
import "./portfolioList.scss";

const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
