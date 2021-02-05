import React, { useState } from "react";

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
  })

  const displayProjectInfo = event => {
    let projectInfo = event.target.getAttribute("data-project");
    let title, repoText, repoLink, deployText, deployLink, imageSource, imageAlt, dataTitle;
    // switch statement to determine what links to display based off what screenshot is clicked 
    switch (projectInfo) {
      case "bear-share":
        title = projectInfo;
        repoText = "GitHub Repository";
        repoLink = "https://github.com/jre23/bear-share";
        deployText = "Heroku Deployment";
        deployLink = "https://nameless-plains-06669.herokuapp.com/";
        imageSource = "./assets/images/bear-share.png";
        imageAlt = "Project #2 Bear Share screenshot";
        dataTitle = "bear-share"
        break;
      // case "the-night-planner":
      //   $("#project-github").attr("href", "https://github.com/jre23/the-night-planner");
      //   $("#project-github-pages").attr("href", "https://jre23.github.io/the-night-planner");
      //   $(".clickedOn").attr("alt", "Project #1 The Night Planner screenshot");
      //   $(".clickedOn").attr("src", "./Assets/Images/the-night-planner.png");
      //   $(".clickedOn").attr("data-project", "the-night-planner");
      //   break;
      // case "eat-da-burger":
      //   $("#project-github-pages").text("Heroku Deployment");
      //   $("#project-github").attr("href", "https://github.com/jre23/eat-da-burger");
      //   $("#project-github-pages").attr("href", "https://salty-meadow-91006.herokuapp.com");
      //   $(".clickedOn").attr("alt", "Eat Da Burger screenshot");
      //   $(".clickedOn").attr("src", "./Assets/Images/eat-da-burger.png");
      //   $(".clickedOn").attr("data-project", "eat-da-burger");
      //   break;
      // case "note-taker":
      //   $("#project-github-pages").text("Heroku Deployment");
      //   $("#project-github").attr("href", "https://github.com/jre23/note-taker");
      //   $("#project-github-pages").attr("href", "https://peaceful-spire-85964.herokuapp.com");
      //   $(".clickedOn").attr("alt", "Note Taker screenshot");
      //   $(".clickedOn").attr("src", "./Assets/Images/note-taker.png");
      //   $(".clickedOn").attr("data-project", "note-taker");
      //   break;
      // case "weather-dashboard":
      //   $("#project-github").attr("href", "https://github.com/jre23/weather-dashboard");
      //   $("#project-github-pages").attr("href", "https://jre23.github.io/weather-dashboard");
      //   $(".clickedOn").attr("alt", "Weather Dashboard screenshot");
      //   $(".clickedOn").attr("src", "./Assets/Images/weather-dashboard.png");
      //   $(".clickedOn").attr("data-project", "weather-dashboard");
      //   break;
      // case "timed-coding-quiz":
      //   $("#project-github").attr("href", "https://github.com/jre23/timed-coding-quiz");
      //   $("#project-github-pages").attr("href", "https://jre23.github.io/timed-coding-quiz");
      //   $(".clickedOn").attr("alt", "Timed Coding Quiz screenshot");
      //   $(".clickedOn").attr("src", "./Assets/Images/timed-coding-quiz.png");
      //   $(".clickedOn").attr("data-project", "timed-coding-quiz");
      //   break;
    }
    setClickState({
      projectTitle: title,
      gitHubRepoText: repoText,
      gitHubRepoLink: repoLink,
      deploymentText: deployText,
      deploymentLink: deployLink,
      imgSrc: imageSource,
      imgAlt: imageAlt,
      dataProject: dataTitle,
    })
  }


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
              alt="Project #2 Bear Share screenshot" src="./Assets/Images/bear-share.png"
              data-project="bear-share" onClick={displayProjectInfo} />
            <br />
            <br />
            <br />
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt="Project #1 The Night Planner screenshot" src="./Assets/Images/the-night-planner.png"
              data-project="the-night-planner" onClick={displayProjectInfo} />
            <br />
            <br />
            <br />
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt="Eat Da Burger screenshot" src="./Assets/Images/eat-da-burger.png" data-project="eat-da-burger" onClick={displayProjectInfo} />
            <br />
            <br />
            <br />
          </div>
          {/* <!-- second column for images to expand to for larger screen widths  --> */}
          <div className="col-12 col-md-4 pl-4 pr-4 pl-lg-3 pr-lg-4 portfolio-background">
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt="Note Taker screenshot" src="./Assets/Images/note-taker.png" data-project="note-taker" onClick={displayProjectInfo} />
            <br />
            <br />
            <br />
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt="Weather Dashboard screenshot" src="./Assets/Images/weather-dashboard.png"
              data-project="weather-dashboard" onClick={displayProjectInfo} />
            <br />
            <br />
            <br />
            <img data-bs-toggle="modal" data-bs-target="#projectModal" className="img-fluid"
              alt="Timed Coding Quiz screenshot" src="./Assets/Images/timed-coding-quiz.png"
              data-project="timed-coding-quiz" onClick={displayProjectInfo} />
            <br />
            <br />
            <br />
          </div>
        </div>
      </main>

      {/* <!-- modal  --> */}
      <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content submit-background">
            <div className="modal-header">
              <h3 className="modal-title" id="project-info-title">{clickState.projectTitle}</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul>
                <li><a id="project-github" href={clickState.gitHubRepoLink} target="_blank">{clickState.gitHubRepoText}</a></li>
                <li><a id="project-github-pages" href={clickState.deploymentLink} target="_blank">{clickState.deploymentText}</a>
                </li>
              </ul>
              <img className="img-fluid" alt={clickState.imgAlt} src={clickState.imgSrc} data-project={clickState.dataProject} onClick={displayProjectInfo} />
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio;