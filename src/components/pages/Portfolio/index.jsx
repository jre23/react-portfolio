import React, { useState } from "react";
import PortfolioContainer from "./PortfolioContainer";
import PortfolioModal from "./PortfolioModal";
import projects from "./projects.json";
import "../../../styles/Portfolio.css";

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
    let dataValue = parseInt(event.target.getAttribute("data-value"));
    setClickState({ ...projects[dataValue] });
  };

  return (
    <>
      <PortfolioContainer displayProjectInfo={displayProjectInfo} />
      <PortfolioModal clickState={clickState} />
    </>
  );
};

export default Portfolio;
