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
            <div className="col p-3">
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Short title, long jacket
                  </h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col p-3">
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Short title, long jacket
                  </h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col p-3">
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Short title, long jacket
                  </h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col p-3">
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Short title, long jacket
                  </h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col p-3">
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Short title, long jacket
                  </h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col p-3">
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Short title, long jacket
                  </h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioContainer;
