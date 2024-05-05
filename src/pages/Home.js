import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Arnav_photo from '../assets/Arnav_photo.jpg';

function Home() {
  const data = {
    image: Arnav_photo
  };

  return (
    <div className="home">
      <div className="about">
        <div>
          <img src={data.image} alt="Logo" />
        </div>
        <h2> Hi, My Name is Arnav Singh</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular,  HTML, CSS, NPM, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, MySQL, MongoDB, AWS S3
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;