import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">

      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/arnav-singh-b7a27223a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
      <img src="./linkedin-logo.png" alt="LinkedIn" width="50" height="50" />
     </a>
     <a href="https://https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
     
     </a>


      </div>
      <p> &copy; 2024 arnavtech.com</p>
    </div>
  );
}

export default Footer;
