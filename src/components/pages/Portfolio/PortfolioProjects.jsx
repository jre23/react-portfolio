import React from "react";

const PortfolioProjects = (props) => {
  return (
    <>
      <img
        data-bs-toggle="modal"
        data-bs-target="#projectModal"
        className="img-fluid"
        alt={props.imgAlt}
        src={props.imgSrc}
        data-project={props.dataProject}
        onClick={props.displayImages.displayProjectInfo}
        data-value={props.index}
      />
      <br />
      <br />
    </>
  );
};

export default PortfolioProjects;
