import React, { useState } from "react";
import PortfolioContainer from "./PortfolioContainer";
import PortfolioModal from "./PortfolioModal";
import projects from "./projects.json";
import "../../../styles/Portfolio.css";
// have to import images for them to show up even though these variables aren't used
import projectImg0 from "../../../images/bear-share.png";
import projectImg1 from "../../../images/the-night-planner.png";
import projectImg2 from "../../../images/google-books-search.png";
import projectImg3 from "../../../images/employee-directory.png";
import projectImg4 from "../../../images/party-perfect.png";
import projectImg5 from "../../../images/budget-tracker.png";
import Jumbotron from "../../Jumbotron";

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

  // to get rid of warnings that projectImg variables aren't being used
  console.log(
    toString(
      projectImg0,
      projectImg1,
      projectImg2,
      projectImg3,
      projectImg4,
      projectImg5
    )
  );

  const displayProjectInfo = (event) => {
    let checkLocal = event.target.src;
    let source = "";
    if (checkLocal.includes("https")) {
      // production
      source = checkLocal.slice(23);
    } else {
      // local
      source = checkLocal.slice(21);
    }
    let dataValue = parseInt(event.target.getAttribute("data-value"));
    setClickState({
      ...projects[dataValue],
      imgSrc: source,
    });
  };

  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">
            Web Development Portfolio
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Checkout some of the projects I've worked on by clicking on an
              image below! All of these are from the Coding Boot Camp I just
              completed. I'm working on creating projects of my own to keep on
              learning!
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Custom button
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
              >
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>
      <PortfolioContainer displayProjectInfo={displayProjectInfo} />
      <PortfolioModal clickState={clickState} />
    </>
  );
};

export default Portfolio;
