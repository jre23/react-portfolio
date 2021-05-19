import React from "react";
import projects from "./projects.json";
import PortfolioProjects from "./PortfolioProjects";

const PortfolioContainer = (props) => {
  return (
    <>
      {/* <!-- main container to house rows and columns --> */}
      <main className="bg-dark">
        <div className="container px-4 py-5">
          {/* <!-- row and columns for images --> */}
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
            {projects.map((item, index) => (
              <PortfolioProjects
                key={index}
                {...item}
                displayImages={props}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioContainer;
