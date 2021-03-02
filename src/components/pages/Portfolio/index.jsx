import React, { useState } from "react";
import PortfolioContainer from "./PortfolioContainer";
import PortfolioModal from "./PortfolioModal";
import projects from "./projects.json";
import projectImg0 from "../../../images/bear-share.png";
import projectImg1 from "../../../images/the-night-planner.png";
import projectImg2 from "../../../images/google-books-search.png";
import projectImg3 from "../../../images/employee-directory.png";
import projectImg4 from "../../../images/party-perfect.png";
import projectImg5 from "../../../images/budget-tracker.png";
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
    let dataProject = event.target.getAttribute("data-project");
    let projectImg = "";
    switch (dataProject) {
      case "bear-share":
        projectImg = projectImg0;
        break;
      case "the-night-planner":
        projectImg = projectImg1;
        break;
      case "google-books-search":
        projectImg = projectImg2;
        break;
      case "employee-directory":
        projectImg = projectImg3;
        break;
      case "party-perfect":
        projectImg = projectImg4;
        break;
      case "budget-tracker":
        projectImg = projectImg5;
        break;
      default:
        return;
    }
    setClickState({ ...projects[dataValue], imgSrc: projectImg });
  };

  const projectImg = [
    projectImg0,
    projectImg1,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
  ];

  return (
    <>
      <PortfolioContainer
        displayProjectInfo={displayProjectInfo}
        projectImages={projectImg}
      />
      <PortfolioModal clickState={clickState} />
    </>
  );
};

export default Portfolio;
