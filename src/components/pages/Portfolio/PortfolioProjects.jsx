import React from "react";

const PortfolioProjects = (props) => {
  return (
    <>
      <div
        className="col p-3"
        data-bs-toggle="modal"
        data-bs-target="#projectModal"
        data-value={props.index}
        data-src={props.imgSrc}
        onClick={props.displayImages.displayProjectInfo}
      >
        <div className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg bg-dark">
          <img
            className="card-img"
            src={props.imgSrc}
            style={{ opacity: "0.23" }}
            alt={props.imgAlt}
          ></img>
          <div
            className="d-flex text-white text-shadow-1 justify-content-center align-items-center card-img-overlay"
            data-value={props.index}
            data-src={props.imgSrc}
          >
            <h2
              className="display-6 lh-1 fw-bold"
              data-value={props.index}
              data-src={props.imgSrc}
            >
              {props.projectTitle}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioProjects;
