import React from "react";
import Jumbotron from "../../Jumbotron";
// import selfie from "../../../images/joel-selfie.jpg";
import resume from "../../../images/Joel's_Resume.pdf";
import linkedInImg from "../../../images/unsplash_inlyitcs_linkedIn.jpg";
import resumeImg from "../../../images/unsplash_jessBailey_resume.jpg";
import gitHubImg from "../../../images/unsplash_richyGreat_gitHub.jpg";
import "../../../styles/About.css";

const About = () => {
  return (
    <>
      <Jumbotron classComp="jumboAbout">
        <h2>
          Hello! I'm Joel, a Full Stack Software Engineer from the University of
          Washington Coding Boot Camp!
        </h2>
      </Jumbotron>

      <main>
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <a href="https://www.linkedin.com/in/joelestrada23">
                <img src={linkedInImg} className="rounded-circle aboutImg" />
              </a>
              <h2>LinkedIn</h2>
              <p>Feel free to connect with me!</p>
            </div>
            <div className="col-lg-4">
              <a href="https://github.com/jre23">
                <img src={gitHubImg} className="rounded-circle aboutImg" />
              </a>
              <h2>GitHub</h2>
              <p>Checkout my GitHub for projects I've been working on!</p>
            </div>
            <div className="col-lg-4">
              <a href={resume} rel="noreferrer" target="_blank">
                <img src={resumeImg} className="rounded-circle aboutImg" />
              </a>
              <h2>Resume</h2>
              <p>Downloadable copy of my resume!</p>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                First featurette heading.{" "}
                <span className="text-muted">It’ll blow your mind.</span>
              </h2>
              <p className="lead">
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Oh yeah, it’s that good.{" "}
                <span className="text-muted">See for yourself.</span>
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                And lastly, this one.{" "}
                <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
      </main>

      {/* <!-- links to linkedin, github, and resume  --> */}
      <div className="container px-3">
        <div className="row align-items-center text-center gx-3">
          <div className="col-12 col-md-4">
            <div className="p-2 mb-3">
              <a href="https://www.linkedin.com/in/joelestrada23">
                <img
                  className="img-fluid aboutImg"
                  alt="LinkedIn"
                  src={linkedInImg}
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-2 mb-3">
              <a href="https://github.com/jre23">
                <img
                  className="img-fluid aboutImg"
                  alt="GitHub"
                  src={gitHubImg}
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-2 mb-3">
              <a href={resume} rel="noreferrer" target="_blank">
                <img
                  className="img-fluid aboutImg"
                  alt="Resume"
                  src={resumeImg}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
