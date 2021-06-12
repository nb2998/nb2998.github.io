import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../assets/css/styles.css";

class home extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <!-- Page Content--> */}
        <div className="container-fluid p-0">
          {/* <!-- About--> */}
          <section className="resume-section" id="about">
            <div className="resume-section-content">
              <h1 className="mb-0">
                Nishtha Bhatia
                <span className="text-primary"></span>
              </h1>
              <div className="subheading mb-5">
                New Delhi, India,&nbsp;
                <a href="mailto:name@email.com">nbhatia329@gmail.com</a>
              </div>
              <p className="lead mb-5">
                I am a software developer who loves to solve problems. I have
                experience working on Spring Boot, Android and ReactJS.
              </p>
              <div className="social-icons">
                <a
                  className="social-icon"
                  href="https://www.linkedin.com/in/nb2998"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://nb2998.medium.com"
                  target="_blank"
                >
                  <i className="fab fa-medium"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://github.com/nb2998"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://twitter.com/nbhatia329"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://stackoverflow.com/users/8356593/nb2998"
                  target="_blank"
                >
                  <i class="fab fa-stack-overflow"></i>
                </a>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* <!-- Experience--> */}
          <section className="resume-section" id="experience">
            <div className="resume-section-content">
              <h2 className="mb-5">Experience</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Software Engineer 1</h3>
                  <div className="subheading mb-3">Intuit Inc.</div>
                  <p></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">August 2020 - Present</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Software Engineering Intern</h3>
                  <div className="subheading mb-3">Intuit Inc.</div>
                  <p></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">May 2019 - July 2019</span>
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />

          {/* <!-- Education--> */}
          <section className="resume-section" id="education">
            <div className="resume-section-content">
              <h2 className="mb-5">Education</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">
                    Indira Gandhi Delhi Technical University for Women, Delhi
                  </h3>
                  <div className="subheading mb-3">
                    B.Tech (Bachelor of Technology)
                  </div>
                  <div>Computer Science</div>
                  <p>84%</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">2016 - 2020</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Salwan Public School, Delhi</h3>
                  <div className="subheading mb-3">Science</div>
                  <p>94.2%</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">2004 - 2016</span>
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* <!-- Skills--> */}
          <section className="resume-section" id="skills">
            <div className="resume-section-content">
              <h2 className="mb-5">Skills</h2>
              <div className="subheading mb-3">
                Programming Languages & Tools
              </div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fab fa-java"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-js-square"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-react"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-android"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-html5"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-sass"></i>
                </li>
              </ul>
              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  REST API development using Spring Boot
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Frontend development using ReactJS
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Unit and Automation testing
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Cross-Browser Testing and Debugging
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Building Reports and dashboards for monitoring using Splunk
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Cross Functional Teams
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Agile Development and Scrum
                </li>
              </ul>
            </div>
          </section>
          <hr className="m-0" />
          {/* <!-- Awards--> */}
          <section className="resume-section" id="awards">
            <div className="resume-section-content">
              <h2 className="mb-5">Accomplishments</h2>
              <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>
                  Spotlights for possessing the following values at Intuit:
                  Customer Obsession, Courage, Stronger Together, Be Passionate
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>
                  Invited as a Speaker at Dev.Next 2020 (Colorado) to talk about
                  Kotlin
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>
                  Travel grant and invitation to attend the Firebase Summit 2019
                  in Madrid, Spain
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>
                  Android app development mentor at LeanIn IGDTUW
                </li>
              </ul>
            </div>
          </section>
          <hr className="m-0" />
          {/* <!-- Interests--> */}
          <section className="resume-section" id="interests">
            <div className="resume-section-content">
              <h2 className="mb-5">Interests</h2>
              <p>
                I like to sketch, paint, write blogs and watch movies. I also
                like to spend time exploring the latest technological
                advancements and learning new skills. Tell your dog I said hi.
              </p>
            </div>
          </section>
        </div>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
        <Footer />
      </div>
    );
  }
}
export default home;
