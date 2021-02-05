import React from "react";
import projects from "./projects.json";

const PortfolioContainer = props => {
  return (
    <>
      {/* <!-- main container to house rows and columns --> */}
      <main className="container my-5 pt-4">
        {/* <!-- row and column for h1 title --> */}
        <div className="row">
          <section className=" col-12 col-md-8 pt-4 pl-4 pr-4 portfolio-background">
            <header>
              <h1 className="text-md-center">Portfolio</h1>
            </header>
            <hr />
          </section>
        </div>
        <div className="row">
          <div className=" col-12 col-md-8 pl-4 pr-4 portfolio-background">
            <h6 className="text-center">Click on an image below to get the links to the GitHub Repository and to the
            deployed application
             for that project!</h6>
          </div>
        </div>
        {/* <!-- row and columns for images --> */}
        <div className="row">
          {/* <!-- first column --> */}
          <div className="col-12 col-md-4 pl-4 pr-4 pr-lg-3 portfolio-background">
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt={projects[0].imgAlt} src={projects[0].imgSrc}
              data-project={projects[0].projectTitle} onClick={props.displayProjectInfo} data-value="0" />
            <br />
            <br />
            <br />
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt={projects[1].imgAlt} src={projects[1].imgSrc}
              data-project={projects[1].projectTitle} onClick={props.displayProjectInfo} data-value="1" />
            <br />
            <br />
            <br />
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt={projects[2].imgAlt} src={projects[2].imgSrc}
              data-project={projects[2].projectTitle} onClick={props.displayProjectInfo} data-value="2" />
            <br />
            <br />
            <br />
          </div>
          {/* <!-- second column for images to expand to for larger screen widths  --> */}
          <div className="col-12 col-md-4 pl-4 pr-4 pl-lg-3 pr-lg-4 portfolio-background">
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt={projects[3].imgAlt} src={projects[3].imgSrc}
              data-project={projects[3].projectTitle} onClick={props.displayProjectInfo} data-value="3" />
            <br />
            <br />
            <br />
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt={projects[4].imgAlt} src={projects[4].imgSrc}
              data-project={projects[4].projectTitle} onClick={props.displayProjectInfo} data-value="4" />
            <br />
            <br />
            <br />
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt={projects[5].imgAlt} src={projects[5].imgSrc}
              data-project={projects[5].projectTitle} onClick={props.displayProjectInfo} data-value="5" />
            <br />
            <br />
            <br />
          </div>
        </div>
      </main>
    </>
  )
}

export default PortfolioContainer;