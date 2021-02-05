import React from "react";
import "../../../styles/About.css";

const About = () => {
  return (
    <>
      {/* // <!-- main container to house rows and columns --> */}
      <main className="container my-5 pt-4">
        {/* <!-- row and column for h1 title and main content--> */}
        <div className="row">
          <section className="col-12 col-md-7 col-lg-8 pt-4 pl-4 pr-4 about-me">
            <header>
              <h1>About Me</h1>
            </header>
            <hr />
            <img className="mr-4 mb-2 selfieImg" alt="Joel's selfie" src="./assets/images/joel-selfie.jpg" />
            <p>Hello! Welcome to my portfolio! My name is Joel and I'm currently a student in the
            University of Washington Coding Boot Camp! This portfolio showcases the coding skills I've learned
            so far! These skills
            include:
            Visual Studio Code, HTML, Git, GitHub, coding for accessibility with HTML semantics, utilizing
            Bootstrap's responsive grid system, creating my own CSS stylesheet for personalization, JavaScript,
            jQuery, querying
            APIs,
            floating
            and clearing images, utilizing Google Fonts, using MySQL with Sequelize and MongoDB with Mongoosejs to store and retrieve data,
                    utilizing Handlebars.js to generate HTML, deploying to Heroku, Progressive Web Applications, and React.</p>

            <p className="clear">Some of my favorite hobbies include: Eating ice cream, running, lifting weights,
            playing video games, and hanging
                    out with family and friends. :-)</p>
            <p> Take a look at my Portfolio page to see some of the projects I've
            worked on thus far! Check out my Contact page for more contact info! See below for links to my
            LinkedIn, GitHub, and resume! Feel free to
            connect with me!
                </p>
          </section>
          {/* <!-- links to linkedin, github, and resume  --> */}
          <div className="col-12 col-md-7 col-lg-8 pt-4 pl-4 pr-4 about-me">
            <ul>
              <li><a href="https://www.linkedin.com/in/joelestrada23" rel="noreferrer" target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com/jre23" rel="noreferrer" target="_blank">GitHub</a></li>
              <li><a href="./assets/images/Joel's_Resume.pdf" rel="noreferrer" target="_blank">Resume</a></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default About;