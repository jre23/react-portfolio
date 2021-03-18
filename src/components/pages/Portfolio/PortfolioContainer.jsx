import React from "react";
import projects from "./projects.json";
import PortfolioProjects from "./PortfolioProjects";

const PortfolioContainer = (props) => {
  return (
    <>
      {/* <!-- main container to house rows and columns --> */}
      <main className="container my-5 pt-4">
        {/* <!-- row and column for h1 title --> */}
        <div className="row justify-content-center">
          <section className="col-12 pt-4 pl-4 pr-4 portfolio-background">
            <header>
              <h1 className="text-center">Portfolio</h1>
            </header>
            <hr />
          </section>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 pl-4 pr-4 portfolio-background">
            <h6 className="text-center pb-2">
              Click on an image below to see a summary of the project, the
              technologies used, and to get the links to the GitHub Repository
              and to the deployed application!
            </h6>
          </div>
        </div>
        {/* <!-- row and columns for images --> */}
        <div className="row justify-content-center">
          {/* <!-- first column --> */}
          <div className="col-12 col-md-6 pl-2.8 pr-2.8 portfolio-background">
            {projects.slice(0, 3).map((item, index) => (
              <PortfolioProjects
                key={index}
                {...item}
                displayImages={props}
                index={index}
              />
            ))}
          </div>
          <div className="col-12 col-md-6 pl-2.8 pr-2.8 portfolio-background">
            {projects.slice(3).map((item, index) => (
              <PortfolioProjects
                key={index}
                {...item}
                displayImages={props}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioContainer;
