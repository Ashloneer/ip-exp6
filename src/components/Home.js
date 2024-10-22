import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import developerIllustration from "../assets/developer-illustration.svg.svg";

import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="profile">
        <img
          src='https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Clipart.png'
          alt="Developer Illustration"
          className="profile-image"
        />

        <h2>Ayush Maurya</h2>
        <p>Engineering Student</p>
      </div>
      <div className="contact-info">
        <p>
         yyyyyyyyyy@gmail.com
        </p>
        <p>
           +91-yyyyyyyyyy
        </p>
        <p>
          {" "}
          <a href="...">LinkedIn</a>
        </p>
        <p>{" "}
          <a href="...">GitHub</a>
        </p>
      </div>
      <div className="summary">
        <h3>Summary</h3>
        <p>
        Dedicated Information Technology student with a solid understanding of programming and a deep enthusiasm for software development. Skilled in multiple programming languages and frameworks, with a history of delivering successful projects on time and meeting objectives.
        </p>
      </div>
    </section>
  );
}

export default Home;
