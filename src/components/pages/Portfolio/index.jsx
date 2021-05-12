import React, { useState } from "react";
import PortfolioContainer from "./PortfolioContainer";
import PortfolioModal from "./PortfolioModal";
import projects from "./projects.json";
import "../../../styles/Portfolio.css";

import projectImg0 from "../../../images/bear-share.png";
import projectImg1 from "../../../images/the-night-planner.png";
import projectImg2 from "../../../images/google-books-search.png";
import projectImg3 from "../../../images/employee-directory.png";
import projectImg4 from "../../../images/party-perfect.png";
import projectImg5 from "../../../images/budget-tracker.png";

const Portfolio = () => {
  const [clickState, setClickState] = useState({
    projectTitle: "",
    gitHubRepoText: "",
    gitHubRepoLink: "",
    deploymentText: "",
    deploymentLink: "",
    imgSrc: "",
    imgAlt: "",
    dataProject: "",
    summary: "",
    tech: "",
  });

  const displayProjectInfo = (event) => {
    let source = event.target.src.slice(21);
    let dataValue = parseInt(event.target.getAttribute("data-value"));
    setClickState({
      ...projects[dataValue],
      imgSrc: source,
    });
  };

  return (
    <>
      <PortfolioContainer displayProjectInfo={displayProjectInfo} />
      <PortfolioModal clickState={clickState} />
    </>
  );
};

export default Portfolio;
