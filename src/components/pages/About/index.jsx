import React from "react";
import Jumbotron from "../../Jumbotron";
import { Link } from "react-router-dom";
// import selfie from "../../../images/joel-selfie.jpg";
import resume from "../../../images/Joel's_Resume.pdf";
import linkedInImg from "../../../images/unsplash_inlyitcs_linkedIn.jpg";
import resumeImg from "../../../images/unsplash_jessBailey_resume.jpg";
import gitHubImg from "../../../images/unsplash_richyGreat_gitHub.jpg";
import beachImg from "../../../images/napaliCoast.jpg";
import airplaneCodeImg from "../../../images/unsplash_martenBjork_airplaneCode.jpg";
import suzzalloImg from "../../../images/unsplash_cameronStewart_suzzallo.jpg";
import "../../../styles/About.css";

const About = () => {
  return (
    <>
      <Jumbotron classComp="jumboAbout">
        <h1>JOEL ESTRADA</h1>
        <br />
        <h2>I'm a Full Stack Software Engineer based out of Seattle, WA.</h2>
        <br />
        <Link to="/portfolio">
          <a
            href="#"
            className="btn btn-lg btn-secondary fw-bold border-white bg-secondary btnSize"
          >
            Checkout my Portfolio
          </a>
        </Link>
      </Jumbotron>
      <br /> <br /> <br />
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
                Who am I?
                <span className="text-muted"> I'm an Engineer.</span>
              </h2>
              <p className="lead">
                I like science. I like math. I like to code. I like to learn. I
                like to figure things out. I like technology. I also love dogs,
                ice cream, hanging out with family and friends, running, lifting
                weights, the beach, and traveling.
              </p>
            </div>
            <div className="col-md-5">
              <img
                src={beachImg}
                className="rounded-circle img-fluid featuretteImg"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Transitioning Careers.
                <span className="text-muted"> Aerospace to Software</span>
              </h2>
              <p className="lead">
                Due to COVID-19 the Aerospace Industry was turned upside down,
                influencing my decision to switch careers. I recently earned my
                Certificate of Completion in Full Stack Web Development and am
                eager to start my career in Software Engineering.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                src={airplaneCodeImg}
                className="rounded-circle  img-fluid featuretteImg"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Lifelong Learner.
                <span className="text-muted">
                  {" "}
                  Looking for the next opportunity.
                </span>
              </h2>
              <p className="lead">
                I'm currently searching for entry level Software Engineering
                positions while continuing to learn new languages and skills.
                Thanks for reading!
              </p>
            </div>
            <div className="col-md-5">
              <img
                src={suzzalloImg}
                className="rounded-circle  img-fluid featuretteImg"
              />
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
      </main>
    </>
  );
};

export default About;
