import React from "react";

const styles = {
  modalBackground: {
    backgroundColor: "#c1c8e4",
  },
};

const PortfolioModal = (props) => {
  return (
    <>
      {/* <!-- modal  --> */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={styles.modalBackground}>
            <div className="modal-header">
              <h3 className="modal-title" id="project-info-title">
                {props.clickState.projectTitle}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <strong>Links: </strong>
              <ul>
                <li>
                  <a
                    id="project-github"
                    href={props.clickState.gitHubRepoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.clickState.gitHubRepoText}
                  </a>
                </li>
                <li>
                  <a
                    id="project-github-pages"
                    href={props.clickState.deploymentLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.clickState.deploymentText}
                  </a>
                </li>
              </ul>
              <p>
                <strong>Summary: </strong>
                {props.clickState.summary}
              </p>
              <p>
                <strong>Technologies: </strong>
                {props.clickState.tech}
              </p>
              <img
                className="img-fluid mb-2"
                alt={props.clickState.imgAlt}
                src={props.clickState.imgSrc}
                data-project={props.clickState.dataProject}
              />
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioModal;
